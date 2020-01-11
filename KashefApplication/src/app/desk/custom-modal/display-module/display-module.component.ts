import {ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Module} from "../../../share/module.model";
import * as InputModel from "../../../share/input.model";
import {ModuleManagement} from "../../../share/module-management";
import {Output} from "../../../share/output.model";

@Component({
  selector: 'app-display-module',
  templateUrl: './display-module.component.html',
  styleUrls: ['./display-module.component.css']
})
export class DisplayModuleComponent implements OnChanges {

  @Input() public displayModule: Module;
  public displayInput: InputModel.Input;
  public displayInputTypeName;

  public linkedModuleName: string;
  public linkedOutputName: string;
  public linkedOutputValue: string;

  constructor(private chRef: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.displayModule.previousValue !== changes.displayModule.currentValue) {
      if (this.displayModule.codeName === 'displayModule') {
        this.displayInput = this.displayModule.inputs[0];
      }
      this.setLinkedOutput();
      this.chRef.detectChanges();
    }
  }

  private setLinkedOutput() {
    if (ModuleManagement.runProcess) {
      let linkToThisInput = ModuleManagement.getAllLinks().find(l => l.inputModuleId === this.displayModule.id
        && l.inputId === this.displayInput.id);

      if (!linkToThisInput) {
        this.linkedModuleName = '-';
        this.linkedOutputName = '-';
        this.displayInputTypeName = ModuleManagement.getVariableTypeName(this.displayInput.type);
      } else {
        let linkedModule: Module = ModuleManagement.getModulebyId(linkToThisInput.outputModuleId);
        this.linkedModuleName = linkedModule.name;

        let linkedOutput: Output = linkedModule.outputs.find(i => i.id === linkToThisInput.outputId);
        this.linkedOutputName = linkedOutput.name;
        this.displayInputTypeName = ModuleManagement.getVariableTypeName(linkedOutput.type);
        this.linkedOutputValue = typeof (linkedOutput.value) === 'object' ? JSON.stringify(linkedOutput.value) : linkedOutput.value;
      }
    }
    else {
      this.linkedOutputValue = '';
    }
  }

}
