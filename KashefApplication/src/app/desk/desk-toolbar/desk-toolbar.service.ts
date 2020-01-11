import {EventEmitter} from "@angular/core";

export class DeskToolbarService {
  playClicked: EventEmitter<any> = new EventEmitter<any>();
  stopClicked: EventEmitter<any> = new EventEmitter<any>();
}
