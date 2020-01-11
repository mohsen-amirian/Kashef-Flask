import {AfterViewInit, ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import {Edge, Network, Node, Data, Options, DataSet} from 'vis';
import {Module} from "../share/module.model";
import {Input} from "../share/input.model";
import {Output} from "../share/output.model";
import {LinkInOut} from "../share/link-inout.model";
import {VariableType} from "../share/variable-type.enum";
import {ModuleManagement} from "../share/module-management";

import * as vis from 'vis';
import {ModuleManagementService} from "../share/module-management.service";
import {CustomModalService} from "./custom-modal/custom-modal-service";
import {fakeAsync} from "@angular/core/testing";

@Component({
  selector: 'app-desk',
  templateUrl: './desk.component.html',
  styleUrls: ['./desk.component.css'],
  providers: [CustomModalService]
})
export class DeskComponent implements AfterViewInit {

  @ViewChild('myNetwork', {static: false}) container: any;
  public nodeIds;
  public shadowState;
  public nodesArray;
  public nodes: DataSet<Node>;
  public edgesArray;
  public edges: DataSet<Edge>;
  public network: Network;

  public openNodeConfigModal: boolean = false;
  public openDisplayModule: boolean = false;
  public openInputGetterModule: boolean = false;
  public selectedModule: Module = new Module();

  constructor(private mms: ModuleManagementService, private modalService: CustomModalService, private chRef: ChangeDetectorRef) {

  }

  ngAfterViewInit() {
    this.mms.newModuleSelectedFromToolbox.subscribe(
      (module: Module) => {
        let newId = (Math.random() * 1e7).toString(32);
        let newNode: Node = {
          id: newId,
          label: ModuleManagement.getNewSelectedModuleName(module.name),
          image: module.imageAddress,
          shape: 'image'
        };
        ModuleManagement.addNewNode(newNode);

        if (ModuleManagement.getAllSelectedModules().length == 0) {
          this.startMyNetwork();
        }
        let tempModule: Module = ModuleManagement.copyModule(module);
        tempModule.id = newId;
        ModuleManagement.addToSelectedModules(tempModule);
      });

    this.mms.startNetwork.subscribe(
      () => {
        this.startMyNetwork();
      }
    );

    this.mms.stabilizeNetwork.subscribe(
      () => {
        this.network.stabilize();
      }
    );

    this.mms.destroyNetwork.subscribe(
      () => {
        this.network.destroy();
        this.startMyNetwork();
      });
  }

  startMyNetwork() {
    let data = {
      nodes: ModuleManagement.getNodes(),
      edges: ModuleManagement.getEdges()
    };
    let options = {
      physics: false,
      interaction: {hover: true}
    };
    this.network = new vis.Network(this.container['nativeElement'], data, options);
    this.network.on("doubleClick", (params) => {
      if (params.nodes.length > 0) {
        let selectedToolBoxModule: Module = ModuleManagement.getModulebyId(params.nodes[0]);
        this.selectedModule = ModuleManagement.copyModule(selectedToolBoxModule);
        if (selectedToolBoxModule.codeName === 'displayModule') {
          this.openDisplayModule = true;
          this.openInputGetterModule = false;
          this.openNodeConfigModal = false;
        } else if (selectedToolBoxModule.codeName === 'inputGetterModule') {
          this.openInputGetterModule = true;
          this.openDisplayModule = false;
          this.openNodeConfigModal = false;
        } else {
          this.openNodeConfigModal = true;
          this.openDisplayModule = false;
          this.openInputGetterModule = false;
        }
        this.chRef.detectChanges();

        this.modalService.openModal.emit(ModuleManagement.getModulebyId(params.nodes[0]));
      }
    });
  }

  onModuleConfigModalSaveClicked() {
    this.modalService.saveModalChangesClicked.emit();
  }

  onInputGetterModalSaveClicked() {
    this.modalService.saveInputGetterModuleClicked.emit();
  }
}
