import {Component, OnInit} from '@angular/core';
import {ModuleManagement} from "../../share/module-management";
import {Process} from "../../share/process.model";
import {Module} from "../../share/module.model";
import {LinkInOut} from "../../share/link-inout.model";
import {Api} from "../../share/api";

@Component({
  selector: 'app-register-process',
  templateUrl: './register-process.component.html',
  styleUrls: ['./register-process.component.css']
})
export class RegisterProcessComponent {
  processName: string;
  processDescription: string;
  saveCompleted: boolean = false;
  saveFailed: boolean = false;

  public saveProcess() {
    let json_file: { modules?: Module[], links?: LinkInOut[] } = {};
    let allLinks = ModuleManagement.getAllLinks();
    let allSelectedModules = ModuleManagement.getAllSelectedModules();

    if (allSelectedModules.length === 0 || this.isEmptyOrSpaces(this.processName)) {
      this.saveFailed = true;
      this.saveCompleted = false;
    } else {
      json_file.links = allLinks;
      json_file.modules = allSelectedModules;
      let newProcess = new Process();
      newProcess.name = this.processName.trim();
      newProcess.description = this.processDescription;
      newProcess.json_file = JSON.stringify(json_file);
      Api.postApi('http://127.0.0.1:5000/api/store/processes/add', newProcess).then(
        () => {
          this.saveFailed = false;
          this.saveCompleted = true;
        }
      );
    }
  }

  private isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
  }
}
