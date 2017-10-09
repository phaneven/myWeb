import { NgModule } from '@angular/core';
import { MdButtonModule, MdCardModule, MdSidenavModule,
         MdListModule, MdTabsModule, MdInputModule,
         MdDialogModule, MdFormFieldModule, MdSlideToggleModule } from '@angular/material';


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
        MdSlideToggleModule
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
        MdSlideToggleModule
    ]
})

export class MyOwnCustomMaterialModule {

}
