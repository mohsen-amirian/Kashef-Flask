import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DeskToolbarService} from "./desk-toolbar.service";
import {ModuleManagement} from "../../share/module-management";
import {ModuleManagementService} from "../../share/module-management.service";

@Component({
  selector: 'app-desk-toolbar',
  templateUrl: './desk-toolbar.component.html',
  styleUrls: ['./desk-toolbar.component.css']
})
export class DeskToolbarComponent {
  constructor(private toolbarService: DeskToolbarService, private mms: ModuleManagementService) { }

  public onPlayClicked() {
    ModuleManagement.runProcess = true;
    this.toolbarService.playClicked.emit();
  }

  public onStopClicked() {
    ModuleManagement.runProcess = false;
    this.toolbarService.stopClicked.emit();
  }

  public onRemoveClicked() {
    ModuleManagement.clearDesk();
    // this.mms.destroyNetwork.emit();
  }

}
