import { NgModule } from '@angular/core';
import { MdButtonModule, MdCardModule, MdSidenavModule,
         MdListModule, MdTabsModule, MdInputModule,
         MdDialogModule, MdFormFieldModule, MdSlideToggleModule, MdToolbarModule, MatPaginatorModule } from '@angular/material';


@NgModule ({
    imports: [
        MdButtonModule,
        MdCardModule,
        MdSidenavModule,
        MdListModule,
        MdTabsModule,
        MdDialogModule,
        MdInputModule,
        MdFormFieldModule,
        MdSlideToggleModule,
        MdToolbarModule,
        MatPaginatorModule
    ],
    exports: [
        MdButtonModule,
        MdCardModule,
        MdSidenavModule,
        MdListModule,
        MdTabsModule,
        MdDialogModule,
        MdInputModule,
        MdFormFieldModule,
        MdSlideToggleModule,
        MdToolbarModule,
        MatPaginatorModule
    ]
})

export class MyOwnCustomMaterialModule {

}
