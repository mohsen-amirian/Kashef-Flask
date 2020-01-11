import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit, Output,
  SimpleChanges
} from '@angular/core';
import {Module} from "../../share/module.model";
import {CustomModalService} from "./custom-modal-service";
import {ModuleManagement} from "../../share/module-management";
import {LinkInOut} from "../../share/link-inout.model";

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.css']
})
export class CustomModalComponent implements OnChanges {
  @Input() public open: boolean = false;

  public selectedModule: Module;
  public otherModules: Module[] = [];
  public moduleSelected: boolean = false;
  constructor(private modalService: CustomModalService, chRef: ChangeDetectorRef) {
    this.modalService.openModal.subscribe(
      (data: Module) => {
        this.selectedModule= new Module();
        this.moduleSelected = true;
        this.selectedModule = ModuleManagement.copyModule(data);
        chRef.detectChanges();
        this.clickSimulator();
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.open === true) {
    }
  }

  public clickSimulator() {
    document.getElementById('modal-open-btn').click();
  }

}
