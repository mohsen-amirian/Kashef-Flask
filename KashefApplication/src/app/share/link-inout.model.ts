import {interval} from "rxjs";
import {Module} from "./module.model";
import {Output} from "./output.model";
import {ModuleManagement} from "./module-management";

export class LinkInOut {
  id: string;
  inputModuleId: string;
  outputModuleId: string;
  inputId: string;
  outputId: string;


  constructor() {
    this.checkLinkages();
  }

  private checkLinkages() {
    let sub = interval(5000).subscribe(
      () => {
        let output: Output = ModuleManagement.getAllSelectedModules()
          .find(m => m.id == this.outputModuleId)
          .outputs.find(o => o.id == this.outputId);
        if (output.isReady) {
          ModuleManagement.getAllSelectedModules()
            .find(m => m.id == this.inputModuleId).inputs
            .find(i => i.id == this.inputId).value = output.value;

          ModuleManagement.getAllSelectedModules()
            .find(m => m.id == this.inputModuleId).inputs
            .find(i => i.id == this.inputId).isReady = true;

          // sub.unsubscribe(); todo
        }
      });
  }
}
