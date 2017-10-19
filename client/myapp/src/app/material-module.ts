import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatSidenavModule,
         MatListModule, MatTabsModule, MatInputModule,
         MatDialogModule, MatFormFieldModule, MatSlideToggleModule, MatToolbarModule,
         MatPaginatorModule, MatGridListModule, MatTableModule } from '@angular/material';


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
        MatGridListModule,
        MatTableModule
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
        MatGridListModule,
        MatTableModule
    ]
})

export class MyOwnCustomMaterialModule {

}
