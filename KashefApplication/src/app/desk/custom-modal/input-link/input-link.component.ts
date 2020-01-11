import {ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Module} from "../../../share/module.model";
import * as InputModel from "../../../share/input.model";
import {ModuleManagement} from "../../../share/module-management";


@Component({
  selector: 'app-input-link',
  templateUrl: './input-link.component.html',
  styleUrls: ['./input-link.component.css']
})
export class InputLinkComponent implements OnChanges{
  @Input() public selectedModule: Module;
  @Input() public selectedInput: InputModel.Input;
  public selectedInputTypeName: string;

  public linkedModuleName: string;
  public linkedOutputName: string;

  constructor(private chRef: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.selectedModule.previousValue !== changes.selectedModule.currentValue
      && changes.selectedInput.currentValue !== changes.selectedInput.previousValue) {
      this.setLinkedOutput();
      this.selectedInputTypeName = ModuleManagement.getVariableTypeName(this.selectedInput.type);
      this.chRef.detectChanges();
    }
  }

  private setLinkedOutput() {
    let linkToThisInput = ModuleManagement.getAllLinks().find(l => l.inputModuleId === this.selectedModule.id
      && l.inputId === this.selectedInput.id);

    if (!linkToThisInput) {
      this.linkedModuleName = '-';
      this.linkedOutputName = '-';
    }
    else {
      this.linkedModuleName = ModuleManagement.getModulebyId(linkToThisInput.outputModuleId).name;
      this.linkedOutputName = ModuleManagement.getModulebyId(linkToThisInput.outputModuleId).outputs.find(i => i.id === linkToThisInput.outputId).name;
    }
  }

}
