import {ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Module} from "../../../share/module.model";
import {LinkInOut} from "../../../share/link-inout.model";
import {ModuleManagement} from "../../../share/module-management";
import {Output} from "../../../share/output.model";
import {DropdownItem} from "../../../share/custom-dropdown/dropdown-item";
import {CustomModalService} from "../custom-modal-service";
import {VariableType} from "../../../share/variable-type.enum";

@Component({
  selector: 'app-output-link',
  templateUrl: './output-link.component.html',
  styleUrls: ['./output-link.component.css']
})
export class OutputLinkComponent implements OnChanges {

  @Input() public selectedModule: Module;
  @Input() public selectedOutput: Output;
  public selectedOutputTypeName: string;
  private otherModules: Module[] = [];
  public otherModulesDropdownItems: DropdownItem[] = [];

  public inputDropdownItems: DropdownItem[] = [];

  public moduleDropDownSelectedValue = '';
  public inputDropDownSelectedValue = '';

  private unsubscribeFromModalService = false;

  constructor(private modalService: CustomModalService, private chRef: ChangeDetectorRef) {
    modalService.saveModalChangesClicked.subscribe( () => {

      if (!this.unsubscribeFromModalService) {
        this.saveLink();
        this.unsubscribeFromModalService = true;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedModule.previousValue !== changes.selectedModule.currentValue
      && changes.selectedOutput.currentValue !== changes.selectedOutput.previousValue) {
      this.fillOtherModulesDropdown();
      this.selectedOutputTypeName = ModuleManagement.getVariableTypeName(this.selectedOutput.type);
      this.setDropDownsSelectedItems();
    }
  }

  private fillOtherModulesDropdown() {
    this.otherModulesDropdownItems = [];
    this.otherModulesDropdownItems.push({
      text: 'انتخاب نشده',
      value: 'notSelected'
    });

    this.otherModules = ModuleManagement.getAllSelectedModules().filter(m => m.id !== this.selectedModule.id);
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
      // type of input and output should be same
      if (input.type === this.selectedOutput.type || input.type === VariableType.All) {
        //input should be free
        if (ModuleManagement.getAllLinks().filter(l => l.inputModuleId === moduleId && l.inputId === input.id && l.outputModuleId !== this.selectedModule.id).length === 0) {
          this.inputDropdownItems.push(
            {
              value: input.id,
              text: input.name
            });
        }
      }
    }
    this.chRef.detectChanges();
  }

  private setDropDownsSelectedItems() {
    let linkToThisOutput = ModuleManagement.getAllLinks().find(l => l.outputModuleId === this.selectedModule.id
      && l.outputId === this.selectedOutput.id);

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
    this.fillInputDropdown(moduleId);
  }

  private saveLink() {
    if (this.moduleDropDownSelectedValue !== 'notSelected' || this.inputDropDownSelectedValue !== 'notSelected') {

      let newLink: LinkInOut = new LinkInOut();
      newLink.outputModuleId = this.selectedModule.id;
      newLink.outputId = this.selectedOutput.id;
      newLink.inputModuleId = this.moduleDropDownSelectedValue;
      newLink.inputId = this.inputDropDownSelectedValue;

      ModuleManagement.addNewLink(newLink);
    }
    else {
      ModuleManagement.removeLinkFromOutput(this.selectedModule.id, this.selectedOutput.id);
    }
  }
}
