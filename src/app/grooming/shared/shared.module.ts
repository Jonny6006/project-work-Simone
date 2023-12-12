import { ButtonModule } from "primeng/button";
import { CardModule } from "primeng/card";
import { DividerModule } from "primeng/divider";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";
import { MenubarModule } from "primeng/menubar";
import { TableModule } from "primeng/table";

import { CalendarModule } from "primeng/calendar";
import { InputTextareaModule } from "primeng/inputtextarea";
import { ToastModule } from "primeng/toast";
import { TabViewModule } from "primeng/tabview";
import { DialogModule } from "primeng/dialog";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";



const COMPONENTS = [NavbarComponent];
const PRIME_MODULES = [
  ButtonModule,
  MenubarModule,
  DividerModule,
  InputTextModule,
  TableModule,
  CardModule,
  DropdownModule,
  CalendarModule,
  InputTextareaModule,
  ToastModule,
  TabViewModule,
  DialogModule,
];

const MODULES = [FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [...COMPONENTS,],
  imports: [CommonModule, ...PRIME_MODULES, ...MODULES],
  exports: [...PRIME_MODULES, ...COMPONENTS, ...MODULES],
})
export class SharedGroomingModule {}
