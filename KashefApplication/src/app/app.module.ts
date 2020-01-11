import { BrowserModule } from '@angular/platform-browser';
import {Injector, NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import { DeskComponent } from './desk/desk.component';
import { ToolboxComponent } from './toolbox/toolbox.component';
import {HttpClientModule} from "@angular/common/http";

import { AngularDraggableModule } from 'angular2-draggable';
import { NgDragDropModule } from 'ng-drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {ModuleManagementService} from "./share/module-management.service";
import { CustomModalComponent } from './desk/custom-modal/custom-modal.component';
import {NgbModal, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { OutputLinkComponent } from './desk/custom-modal/output-link/output-link.component';
import { CustomDropdownComponent } from './share/custom-dropdown/custom-dropdown.component';
import { InputLinkComponent } from './desk/custom-modal/input-link/input-link.component';
import {FormsModule} from "@angular/forms";
import { DisplayModuleComponent } from './desk/custom-modal/display-module/display-module.component';
import { InputGetterComponent } from './desk/custom-modal/input-getter/input-getter.component';

import { AngularFileUploaderModule } from "angular-file-uploader";
import { DeskToolbarComponent } from './desk/desk-toolbar/desk-toolbar.component';
import {DeskToolbarService} from "./desk/desk-toolbar/desk-toolbar.service";
import { RegisterProcessComponent } from './desk/register-process/register-process.component';
import { LoadProcessComponent } from './toolbox/load-process/load-process.component';

export let InjectorInstance: Injector;

@NgModule({
  declarations: [
    AppComponent,
    DeskComponent,
    ToolboxComponent,
    CustomModalComponent,
    OutputLinkComponent,
    CustomDropdownComponent,
    InputLinkComponent,
    DisplayModuleComponent,
    InputGetterComponent,
    DeskToolbarComponent,
    RegisterProcessComponent,
    LoadProcessComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    HttpClientModule,
    AngularDraggableModule,
    NgDragDropModule.forRoot(),
    NgbModule,
    FormsModule,
    AngularFileUploaderModule
  ],
  providers: [ModuleManagementService, DeskToolbarService],
  bootstrap: [AppComponent]
})

export class AppModule {
}
