import { NgModule } from '@angular/core';
import { MdButtonModule, MdCardModule, MdSidenavModule,
         MdListModule, MdTabsModule, MdInputModule,
         MdDialogModule, MdFormFieldModule, MdSlideToggleModule, MdToolbarModule } from '@angular/material';


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
        MdToolbarModule
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
        MdToolbarModule
    ]
})

export class MyOwnCustomMaterialModule {

}
