import {ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Module} from "../../../share/module.model";
import * as OutputModel from "../../../share/output.model";
import {ModuleManagement} from "../../../share/module-management";
import * as InputModel from "../../../share/input.model";
import {DropdownItem} from "../../../share/custom-dropdown/dropdown-item";
import {VariableType} from "../../../share/variable-type.enum";
import {CustomModalService} from "../custom-modal-service";
import {LinkInOut} from "../../../share/link-inout.model";
import {Api} from "../../../share/api";

@Component({
  selector: 'app-input-getter',
  templateUrl: './input-getter.component.html',
  styleUrls: ['./input-getter.component.css']
})
export class InputGetterComponent implements OnChanges {

  @Input() public inputGetterModule: Module;
  public moduleOutput: OutputModel.Output;
  public moduleOutputTypeName;

  public linkedModule: Module;

  public linkedInput: InputModel.Input;
  public linkedInputValue: string;
  public linkedInputType: VariableType = VariableType.String;

  public otherModules: Module[] = [];
  public otherModulesDropdownItems: DropdownItem[] = [];

  public inputDropdownItems: DropdownItem[] = [];

  public moduleDropDownSelectedValue = '';
  public inputDropDownSelectedValue = '';

  public afuConfig;


  private unsubscribeFromModalService = false;

  constructor(private modalService: CustomModalService, private chRef: ChangeDetectorRef) {
    modalService.saveInputGetterModuleClicked.subscribe(() => {
      if (!this.unsubscribeFromModalService) {
        this.saveLink();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.inputGetterModule.previousValue !== changes.inputGetterModule.currentValue) {
      if (this.inputGetterModule.codeName === 'inputGetterModule') {
        this.moduleOutput = this.inputGetterModule.outputs[0];
        this.fillOtherModulesDropdown();
        this.setDropDownsSelectedItems();
        this.setLinkedInputValue();
        this.chRef.detectChanges();
      }
    }
  }


  private fillOtherModulesDropdown() {
    this.otherModulesDropdownItems = [];
    this.otherModulesDropdownItems.push({
      text: 'انتخاب نشده',
      value: 'notSelected'
    });

    this.otherModules = ModuleManagement.getAllSelectedModules().filter(m => m.id !== this.inputGetterModule.id);
    for (let module of this.otherModules) {
      this.otherModulesDropdownItems.push(
        {
          value: module.id,
          text: module.name
        }
      );
    }
  }

  private fillInputDropdown(moduleId: string) {
    this.inputDropdownItems = [];
    this.inputDropdownItems.push({
      text: 'انتخاب نشده',
      value: 'notSelected'
    });

    let tempInputs = ModuleManagement.getModulebyId(moduleId).inputs;
    for (let input of tempInputs) {
      // type of the input can be any type
      //input should be free
      if (ModuleManagement.getAllLinks().filter(l => l.inputModuleId === moduleId && l.inputId === input.id && l.outputModuleId !== this.inputGetterModule.id).length === 0) {
        this.inputDropdownItems.push(
          {
            value: input.id,
            text: input.name
          });
      }
    }
    this.chRef.detectChanges();
  }

  private setDropDownsSelectedItems() {
    let linkToThisOutput = ModuleManagement.getAllLinks().find(l => l.outputModuleId === this.inputGetterModule.id
      && l.outputId === this.moduleOutput.id);

    // input (other) modules dropdown
    if (!linkToThisOutput) {
      this.moduleDropDownSelectedValue = 'notSelected';
    } else {
      this.moduleDropDownSelectedValue = linkToThisOutput.inputModuleId;
      this.otherModulesDropdownChanged(linkToThisOutput.inputModuleId);
    }

    // inputs dropdown
    if (!linkToThisOutput) {
      this.inputDropDownSelectedValue = 'notSelected';
    } else {
      this.inputDropDownSelectedValue = linkToThisOutput.inputId;
    }
  }

  public otherModulesDropdownChanged(moduleId: string) {
    this.linkedModule = ModuleManagement.getAllSelectedModules().find(m => m.id === moduleId);
    this.fillInputDropdown(moduleId);
  }

  public inputDropDownChanged(inputId: string) {
    this.linkedInput = this.linkedModule.inputs.find(i => i.id === inputId);
    this.linkedInputType = this.linkedInput.type;
  }

  private saveLink() {
    if (this.moduleDropDownSelectedValue !== 'notSelected' && this.inputDropDownSelectedValue !== 'notSelected') {

      if (this.linkedInputType === VariableType.File) {
        let fileInput = document.getElementById('input-file') as any;
        Api.sendFileToCloudStorage(fileInput.files[0]).then(
          (fileUrl: string) => {
            ModuleManagement
              .getAllSelectedModules().find(m => m.id === this.inputGetterModule.id)
              .outputs.find(o => o.id === this.moduleOutput.id).value = fileUrl;

            // set output to ready
            ModuleManagement
              .getAllSelectedModules().find(m => m.id === this.inputGetterModule.id)
              .outputs.find(o => o.id === this.moduleOutput.id).isReady = true;

            let newLink: LinkInOut = new LinkInOut();
            newLink.outputModuleId = this.inputGetterModule.id;
            newLink.outputId = this.moduleOutput.id;
            newLink.inputModuleId = this.moduleDropDownSelectedValue;
            newLink.inputId = this.inputDropDownSelectedValue;

            ModuleManagement.addNewLink(newLink);
          }
        );
      } else {
        // update output value
        ModuleManagement
          .getAllSelectedModules().find(m => m.id === this.inputGetterModule.id)
          .outputs.find(o => o.id === this.moduleOutput.id).value = this.linkedInputValue;

        // set output to ready
        ModuleManagement
          .getAllSelectedModules().find(m => m.id === this.inputGetterModule.id)
          .outputs.find(o => o.id === this.moduleOutput.id).isReady = true;

        let newLink: LinkInOut = new LinkInOut();
        newLink.outputModuleId = this.inputGetterModule.id;
        newLink.outputId = this.moduleOutput.id;
        newLink.inputModuleId = this.moduleDropDownSelectedValue;
        newLink.inputId = this.inputDropDownSelectedValue;

        ModuleManagement.addNewLink(newLink);
      }


    } else {
      ModuleManagement.removeLinkFromOutput(this.inputGetterModule.id, this.moduleOutput.id);
    }
  }

  private setLinkedInputValue() {
    this.linkedInputValue = ModuleManagement
      .getAllSelectedModules().find(m => m.id === this.inputGetterModule.id)
      .outputs.find(o => o.id === this.moduleOutput.id).value;
  }

  // private setLinkedModule() {
  //   let linkToThisOutput = ModuleManagement.getAllLinks().find(l => l.outputModuleId === this.inputGetterModule.id
  //     && l.outputId === this.moduleOutput.id);
  //
  //   if (!linkToThisOutput) {
  //     this.linkedModuleName = '-';
  //     this.linkedInputName = '-';
  //     this.moduleOutputTypeName = ModuleManagement.getVariableTypeName(this.moduleOutput.type);
  //     this.linkedInputType = VariableType.String;
  //   }
  //   else {
  //     this.linkedModule = ModuleManagement.getModulebyId(linkToThisOutput.inputModuleId);
  //     this.linkedModuleName = this.linkedModule.name;
  //
  //     this.linkedInput = this.linkedModule.inputs.find(i => i.id === linkToThisOutput.inputId);
  //     this.linkedInputValue = this.linkedInput.name;
  //     this.linkedInputType = this.linkedInput.type;
  //     this.moduleOutputTypeName = ModuleManagement.getVariableTypeName(this.linkedInput.type);
  //   }
  // }

}
