import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarModule } from 'primeng/calendar';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';


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