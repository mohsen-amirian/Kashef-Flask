import {EventEmitter} from "@angular/core";
import {Module} from "../../share/module.model";

export class CustomModalService {
  public openModal: EventEmitter<Module> = new EventEmitter<Module>();
  public saveModalChangesClicked: EventEmitter<string> = new EventEmitter();
  public saveInputGetterModuleClicked: EventEmitter<string> = new EventEmitter();
}

