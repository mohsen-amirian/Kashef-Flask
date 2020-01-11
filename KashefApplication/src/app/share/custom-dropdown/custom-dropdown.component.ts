import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {DropdownItem} from "./dropdown-item";

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css']
})
export class CustomDropdownComponent {

  @Input() dropdownItems: DropdownItem[] = [];
  @Output() itemChange: EventEmitter<string> = new EventEmitter();
  @Input() selectedItem: DropdownItem;

  private tempValue: string;
  @Output() valueChange: EventEmitter<string> = new EventEmitter();
  @Input()
  get value() {
    return this.tempValue;
  }
  set value(val) {
    this.tempValue = val;
    this.valueChange.emit(this.tempValue);
  }

  constructor(private chRef: ChangeDetectorRef) {
  }

  onDropdownSelectedItemChange(value: string) {
    this.itemChange.emit(value);
  }

}
