import {Module} from "./module.model";
import {EventEmitter, Input} from "@angular/core";

export class ModuleManagementService {
  @Input() public newModuleSelectedFromToolbox: EventEmitter<Module> = new EventEmitter<Module>();
  public startNetwork: EventEmitter<any> = new EventEmitter();
  public stabilizeNetwork: EventEmitter<any> = new EventEmitter();
  public destroyNetwork: EventEmitter<any> = new EventEmitter<any>();
}
