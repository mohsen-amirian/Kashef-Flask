import {VariableType} from "./variable-type.enum";

export class Input {
  id?: string;
  name?: string;
  scriptName?: string;
  type?: VariableType;
  value?: any;
  isReady?: boolean;
  isParameter?: boolean;
  description?: string;
}
