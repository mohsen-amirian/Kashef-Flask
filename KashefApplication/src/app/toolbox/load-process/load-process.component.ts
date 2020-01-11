import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Api} from "../../share/api";
import {Process} from "../../share/process.model";
import {Module} from "../../share/module.model";
import {LinkInOut} from "../../share/link-inout.model";
import {ModuleManagement} from "../../share/module-management";
import {Node} from "vis";
import {ModuleManagementService} from "../../share/module-management.service";

@Component({
  selector: 'app-load-process',
  templateUrl: './load-process.component.html',
  styleUrls: ['./load-process.component.css']
})
export class LoadProcessComponent implements OnInit{
  userProcesses: Process[] = [];
  showProcessLoader: boolean = false;


  constructor(private mms:ModuleManagementService) {
  }

  ngOnInit() {
    this.getAllUserProcesses();
  }

  private getAllUserProcesses() {
    Api.getApi('http://127.0.0.1:5000/api/store/processes/user-processes').then(
      (serverProcesses: Process[]) => {
        this.userProcesses = serverProcesses;
        this.showProcessLoader = true;
      }
    );
  }

  public onProcessClicked(selectedProcess: Process) {
    let processModules: Module[];
    let processLinks: LinkInOut[];

    processModules = JSON.parse(selectedProcess.json_file).modules;
    processLinks = JSON.parse(selectedProcess.json_file).links;

    ModuleManagement.clearDesk();

    this.addProcessModulesToNetwork(processModules);
    this.addProcessLinksToNetwork(processLinks);
    this.mms.stabilizeNetwork.emit();
  }

  private addProcessModulesToNetwork(processModules: Module[]) {
    for (let moduleItem of processModules) {
      let newNode: Node = {
        id: moduleItem.id,
        label: ModuleManagement.getNewSelectedModuleName(moduleItem.name),
        image: moduleItem.imageAddress,
        shape: 'image'
      };
      ModuleManagement.addNewNode(newNode);

      if (ModuleManagement.getAllSelectedModules().length == 0) {
        this.mms.startNetwork.emit();
      }

      let tempModule: Module = ModuleManagement.copyModule(moduleItem);
      tempModule.id = moduleItem.id;
      ModuleManagement.addToSelectedModules(tempModule);
    }
  }

  private addProcessLinksToNetwork(processLinks: LinkInOut[]) {
    for (let link of processLinks) {
      let newLink: LinkInOut = new LinkInOut();
      newLink.outputModuleId = link.outputModuleId;
      newLink.outputId = link.outputId;
      newLink.inputModuleId = link.inputModuleId;
      newLink.inputId = link.inputId;

      ModuleManagement.addNewLink(newLink);
    }
  }
}
