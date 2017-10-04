import { NgModule } from '@angular/core';
import { MdButtonModule, MdCardModule, MdSidenavModule, 
         MdListModule, MdTabsModule, MdInputModule, 
         MdDialogModule, MdFormFieldModule } from '@angular/material';


@NgModule ({
    imports: [
        MdButtonModule, 
        MdCardModule, 
        MdSidenavModule,
        MdListModule,
        MdTabsModule,
        MdDialogModule,
        MdInputModule,
        MdFormFieldModule
    ],
    exports: [
        MdButtonModule, 
        MdCardModule, 
        MdSidenavModule,
        MdListModule,
        MdTabsModule,
        MdDialogModule,
        MdInputModule,
        MdFormFieldModule
    ]
})

export class MyOwnCustomMaterialModule {

}
