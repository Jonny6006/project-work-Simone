import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { ImageModule } from 'primeng/image';
import { AccordionModule } from 'primeng/accordion';
import { RatingModule } from 'primeng/rating';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { DividerModule } from 'primeng/divider';

;
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        TableModule,
        PaginatorModule,
        ImageModule,
        AccordionModule,
        RatingModule,
        
    ],
    exports: [
        CommonModule,
        FormsModule,
        InputTextModule,
        ButtonModule,
        TableModule,
        PaginatorModule,
        ImageModule,
        AccordionModule,
        RatingModule,
        DialogModule,
        CardModule,
        ToolbarModule,
        TabMenuModule,
        MenubarModule,
        DividerModule

    ],
})
export class SharedModule {}
