import {Module} from "./module.model";
import {LinkInOut} from "./link-inout.model";
import {DataSet, Edge, Node} from 'vis';
import {Input} from "./input.model";
import {Output} from "./output.model";
import {VariableType} from "./variable-type.enum";

export class ModuleManagement {

  private static selectedModules: Module[] = [];
  private static toolboxModules: Module[] = [];
  private static links: LinkInOut[] = [];

  private static nodes: DataSet<Node> = new DataSet();
  private static edges: DataSet<Edge> = new DataSet();
  private static edgeIds: string[] = [];

  public static runProcess: boolean = false;

  public static addToToolbox(newModule: Module) {
    //check for duplicate
    if (!this.toolboxModules.find(m => m.id == newModule.id)) {
      this.toolboxModules.push(newModule);
    }
  }

  public static getToolboxModules() {
    return this.toolboxModules;
  }

  public static addToSelectedModules(newModule: Module) {
    newModule.isSelected = true;
    newModule.name = this.getNewSelectedModuleName(newModule.name);
    this.selectedModules.push(newModule);
  }

  public static getNewSelectedModuleName(name: string): string {
    // rename duplicate modules
    let duplicateModulesNumber = this.selectedModules.filter(m => m.name.replace(/\d+$/, '') === name).length;
    if (duplicateModulesNumber > 0) {
      return name + duplicateModulesNumber;
    } else {
      return name;
    }
  }

  public static getModulebyId(moduleId: string): Module {
    return this.selectedModules.find(m => m.id === moduleId);
  }

  public static addNewNode(newNode: Node) {
    // newNode.color = 'red';   should be red
    //add icon
    let fontFace = 'IranSans';
    newNode.font = {
      face: fontFace
    };
    this.nodes.add(newNode);
  }

  public static getAllSelectedModules(): Module[] {
    return this.selectedModules;
  }

  // (OutputModuleId , OutPutId) or (InputModuleId , InputId) should occur only once
  public static addNewLink(newLink: LinkInOut) {
    // check for new link's output
    let tempLink: LinkInOut = this.links.find( l => l.outputId === newLink.outputId && l.outputModuleId === newLink.outputModuleId);
    if (tempLink) {
      // remove link
      let linkIndex = this.links.indexOf(tempLink);
      this.links.splice(linkIndex, 1);

      //remove edge
      let edgeId = tempLink.inputModuleId.concat(tempLink.outputModuleId);
      let edgeIdsIndex = this.edgeIds.indexOf(this.edgeIds.find(i => i === edgeId));
      this.edgeIds.splice(edgeIdsIndex, 1);
      this.edges.remove(edgeId);
    }

    // check for new link's input
    tempLink = this.links.find( l => l.inputId === newLink.inputId && l.inputModuleId === newLink.inputModuleId);
    if (tempLink) {
      //remove link
      let linkIndex = this.links.indexOf(tempLink);
      this.links.splice(linkIndex, 1);

      //remove edge
      let edgeId = tempLink.inputModuleId.concat(tempLink.outputModuleId);
      let edgeIdsIndex = this.edgeIds.indexOf(this.edgeIds.find(i => i === edgeId));
      this.edgeIds.splice(edgeIdsIndex, 1);
      this.edges.remove(edgeId);
    }

    // now we can add new link
    this.links.push(newLink);

    // and add new edge to network
    let edgeId = newLink.inputModuleId.concat(newLink.outputModuleId);
    this.edgeIds.push(edgeId);
    this.edges.add({id: edgeId, from: newLink.outputModuleId, to: newLink.inputModuleId, color:{color:'gray'}, arrows: 'to'});
  }

  public static removeLinkFromOutput(moduleId: string, outputId: string) {
    let tempLink: LinkInOut = this.links.find( l => l.outputId === outputId && l.outputModuleId === moduleId);
    if (tempLink) {
      //remove link
      let linkIndex = this.links.indexOf(tempLink);
      this.links.splice(linkIndex, 1);

      //remove edge
      let edgeId = tempLink.inputModuleId.concat(tempLink.outputModuleId);
      let edgeIdsIndex = this.edgeIds.indexOf(this.edgeIds.find(i => i === edgeId));
      this.edgeIds.splice(edgeIdsIndex, 1);
      this.edges.remove(edgeId);
    }
  }

  public static addNewEdge(newEdge: Edge) {
    newEdge.arrows = 'to';
    this.edges.add(newEdge);
  }

  public static getNodes(): DataSet<Node> {
    return this.nodes;
  }

  public static getEdges(): DataSet<Edge> {
    return this.edges;
  }

  public static nodeIsWaitingForInputs(nodeId: string) {
    this.nodes.update({id: nodeId, font:{color: 'red'}})
  }

  public static nodeInputsIsReady(nodeId: string) {
    this.nodes.update({id: nodeId, font:{color: 'red', size:15}})
  }

  public static moduleIsWaiting(nodeId: string) {
    this.nodes.update({id: nodeId, font:{color: 'gray', size:15}})
  }

  public static copyModule(module: Module): Module {
    let newModlue: Module = new Module();
    newModlue.id = module.id;
    newModlue.name = module.name;
    newModlue.iconAddress = module.iconAddress;
    newModlue.imageAddress = module.imageAddress;
    newModlue.codeName = module.codeName;
    newModlue.isSelected = module.isSelected;
    newModlue.webServiceUrl = module.webServiceUrl;
    newModlue.description = module.description;
    newModlue.webServiceType = module.webServiceType;
    newModlue.category_id = module.category_id;
    newModlue.inputs = [];
    for (let input of module.inputs) {
      let newInput: Input = new Input();
      newInput.id = input.id.toString();
      newInput.name = input.name;
      newInput.isReady = input.isReady;
      newInput.value = input.value;
      newInput.type = input.type;
      newInput.isParameter = input.isParameter;
      newInput.scriptName = input.scriptName;

      newModlue.inputs.push(newInput);
    }

    for (let output of module.outputs) {
      let newOutput: Output = new Output();
      newOutput.id = output.id.toString();
      newOutput.name = output.name;
      newOutput.value = output.value;
      newOutput.isReady = output.isReady;
      newOutput.type = output.type;
      newOutput.scriptName = output.scriptName;

      newModlue.outputs.push(newOutput);
    }

    return newModlue;
  }

  public static getAllLinks(): LinkInOut[] {
    return this.links;
  }

  public  static getAllToolboxModules(): Module[] {
    return  this.toolboxModules;
  }

  public static clearDesk() {
    console.log(this.nodes.length);
    this.runProcess = false;
    let allNodeIds = this.nodes.map(n => n.id);
    let allEdgeIds = this.edges.map(e => e.id);
    this.nodes.remove(allNodeIds);
    this.edges.remove(allEdgeIds);
    this.nodes.clear();
    this.edges.clear();
    this.links = [];
    this.edgeIds = [];
    this.selectedModules = [];
    console.log(this.nodes.length);
  }

  public static getVariableType(typeName: string): VariableType {
    if (typeName === 'String') {
      return VariableType.String;
    } else if (typeName === 'Float') {
      return VariableType.Float;
    } else if (typeName === 'Integer') {
      return VariableType.Integer;
    } else if (typeName === 'File') {
      return VariableType.File
    } else if (typeName === 'List') {
      return VariableType.List;
    }
  }

  public static getVariableTypeName(type: VariableType): string {
    if (type === VariableType.String) {
      return 'رشته';
    } else if (type === VariableType.Float) {
      return 'عدد اعشاری';
    } else if (type === VariableType.Integer) {
      return 'عدد صحیح';
    } else if (type === VariableType.File) {
      return 'فایل'
    } else if (type === VariableType.List) {
      return 'لیست';
    } else if (type === VariableType.All) {
      return 'نامشخص';
    }
  }
}
