import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatSidenavModule,
         MatListModule, MatTabsModule, MatInputModule,
         MatDialogModule, MatFormFieldModule, MatSlideToggleModule, MatToolbarModule,
         MatPaginatorModule, MatGridListModule } from '@angular/material';


@NgModule ({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatGridListModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatSidenavModule,
        MatListModule,
        MatTabsModule,
        MatDialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatSlideToggleModule,
        MatToolbarModule,
        MatPaginatorModule,
        MatGridListModule
    ]
})

export class MyOwnCustomMaterialModule {

}
