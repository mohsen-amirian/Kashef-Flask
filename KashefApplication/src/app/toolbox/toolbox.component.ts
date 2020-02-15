import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Module} from '../share/module.model';
import {Api} from "../share/api";
import {ModuleManagement} from "../share/module-management";
import {ModuleManagementService} from "../share/module-management.service";
import {Input} from "../share/input.model";
import {Output} from "../share/output.model";
import {VariableType} from "../share/variable-type.enum";
import {ICategory} from "../share/category.model";

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.css']
})
export class ToolboxComponent implements OnInit {
  public tools: Module[] = [];
  public categories: ICategory[] = [];
  public showToolbox = false;

  constructor(private mms: ModuleManagementService, private chRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getModuleCategories();
    this.getToolboxModules();
  }

  private getToolboxModules() {
    this.addInputGetterModule();
    this.addDisplayModule();
    Api.getApi(ModuleManagement.storeIP + '/store/modules/user-modules').then(
      (data: any) => {
        for (const module of data) {
          let newModule: Module = new Module();
          newModule.id = module.id;
          newModule.name = module.name;
          newModule.codeName = module.codeName;
          newModule.webServiceUrl = module.webServiceUrl;
          newModule.webServiceType = module.webServiceType;
          newModule.imageAddress = module.imageAddress;
          newModule.iconAddress = module.iconAddress;
          newModule.isSelected = false;
          newModule.category_id = module.category_id;

          for (let input of module.inputs) {
            let newInput = new Input();
            newInput.id = input.id;
            newInput.name = input.name;
            newInput.scriptName = input.scriptName;
            newInput.isReady = false;
            newInput.description = input.description;
            newInput.isParameter = input.isParameter;
            newInput.type = ModuleManagement.getVariableType(input.type);
            newModule.inputs.push(newInput);
          }

          for (let output of module.outputs) {
            let newOutput = new Output();
            newOutput.id = output.id;
            newOutput.name = output.name;
            newOutput.scriptName = output.scriptName;
            newOutput.isReady = false;
            newOutput.description = output.description;
            newOutput.type = ModuleManagement.getVariableType(output.type);
            newModule.outputs.push(newOutput);
          }

          ModuleManagement.addToToolbox(newModule);
        }
        this.tools = ModuleManagement.getToolboxModules();
        this.showToolbox = true;
        this.chRef.detectChanges();
      });
  }

  private getModuleCategories() {
    Api.getApi(ModuleManagement.storeIP + '/store/categories/all_categories')
      .then((allCategories: ICategory[]) => {
        this.categories = allCategories;
        this.chRef.detectChanges();
      });
  }

  private addInputGetterModule() {
    let inputGetterModule: Module = new Module();
    inputGetterModule.id = (Math.random() * 1e7).toString(32);
    inputGetterModule.name = 'ماژول دریافت ورودی';
    inputGetterModule.codeName = 'inputGetterModule';
    inputGetterModule.imageAddress = '/static/module_images/input-getter.png';
    inputGetterModule.category_id = 1;
    inputGetterModule.outputs = [
      {
        name: 'خروجی',
        id: (Math.random() * 1e7).toString(32),
        isReady: false,
        scriptName: 'input',
        type: VariableType.All
      }
    ];
    ModuleManagement.addToToolbox(inputGetterModule);
  }

  private addDisplayModule() {
    let displayModule: Module = new Module();
    displayModule.id = (Math.random() * 1e7).toString(32);
    displayModule.name = 'ماژول نمایشگر';
    displayModule.codeName = 'displayModule';
    displayModule.imageAddress = '/static/module_images/display.png';
    displayModule.category_id = 1;
    displayModule.inputs = [
      {
        name: 'ورودی نمایشگر',
        id: (Math.random() * 1e7).toString(32),
        isReady: false,
        scriptName: 'displayInput',
        type: VariableType.All
      }
    ];
    ModuleManagement.addToToolbox(displayModule);
  }

  moduleClicked(selectedModule: Module) {
    this.mms.newModuleSelectedFromToolbox.emit(selectedModule);
  }
}
