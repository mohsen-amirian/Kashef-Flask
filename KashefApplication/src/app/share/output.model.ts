import {VariableType} from "./variable-type.enum";

export class Output {
  id?: string;
  name?: string;
  scriptName?: string;
  type?: VariableType;
  value?: any;
  isReady?: boolean;
  description?: string;
}
