import {Input} from './input.model';
import {Output} from './output.model';
import {interval} from "rxjs";
import {Api} from "./api";
import {VariableType} from "./variable-type.enum";
import {ModuleManagement} from "./module-management";

export class Module {
  id: string;
  name: string;
  codeName: string;
  description: string;
  webServiceUrl: string;
  webServiceType: string;
  imageAddress: string;
  iconAddress: string;
  inputs: Input[] = [];
  outputs: Output[] = [];
  isSelected: boolean;
  category_id: number;

  constructor() {
    this.checkInputsAvailability();
  }

  private checkInputsAvailability() {
    let sub = interval(2000).subscribe(
      () => {
        if (this.inputs.length > 0 && this.isSelected &&
          this.codeName !== 'inputGetterModule') {
          if (ModuleManagement.runProcess) {
            let allInputsIsReady: boolean = true;
            for (let input of this.inputs) {
              if (!input.isReady) {
                allInputsIsReady = false;
                break;
              }
            }
            if (allInputsIsReady) {
              // sub.unsubscribe(); todo
              ModuleManagement.nodeInputsIsReady(this.id);
              if (this.codeName !== 'displayModule') {
                this.doService();
              }
            }
          }
          else {
            ModuleManagement.moduleIsWaiting(this.id);
          }
        }
      });
  }

  private doService() {
    if (this.webServiceType === 'json') {
      let bodyObject = this.getRequestBodyJson();
      Api.postApi(this.webServiceUrl, bodyObject).then(
        (data: any) => {
          for (let i = 0; i < this.outputs.length; i++) {
            if (this.outputs[i].type !== VariableType.File) {
              this.outputs[i].value = data[this.outputs[i].scriptName];
              this.outputs[i].isReady = true;
            } else {
              //todo save file in cloud and return url
            }
          }
          console.log('Module: ' + this.name + ' output ' + this.outputs[0].name + ' is ready.');
        }
      );
    } else if (this.webServiceType === 'form-data') {
      this.getRequestBodyFormData().then(
        (bodyObject: FormData) => {
          Api.postApiFormData(this.webServiceUrl, bodyObject).then(
            (data: any) => {
              for (let i = 0; i < this.outputs.length; i++) {
                if (this.outputs[i].type !== VariableType.File) {
                  this.outputs[i].value = data[this.outputs[i].scriptName];
                  this.outputs[i].isReady = true;
                } else {
                  //todo save file in cloud and return url
                }
              }
            }
          );
        }
      );
    }
  }

  private getRequestBodyJson(): Object {
    let obj = {};
    for (let input of this.inputs) {
      if (input.type === VariableType.File) {

      } else {
        obj[input.scriptName] = input.type === VariableType.String ? input.value : +input.value;
      }
    }
    return obj;
  }

  private getRequestBodyFormData() {
    let form: FormData = new FormData();

    let promise = new Promise((resolve => {
      for (let i = 0; i < this.inputs.length; i++) {
        if (this.inputs[i].type === VariableType.File) {
          Api.getFileFromCloudStorage(this.inputs[i].value).then(
            (file: File) => {
              form.append(this.inputs[i].scriptName, file);
              if (i === this.inputs.length - 1) {
                resolve(form);
              }
            }
          );
        } else {
          form.append(this.inputs[i].scriptName, this.inputs[i].type === VariableType.String ? this.inputs[i].value : +this.inputs[i].value);
          if (i === this.inputs.length - 1) {
            resolve(form);
          }
        }
      }
    }));

    return promise;
  }
}
