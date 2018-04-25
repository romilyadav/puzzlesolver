import { NgModule } from '@angular/core';


import {
    MatExpansionModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule

} from '@angular/material';

const MATERIAL_MODULES = [
    MatExpansionModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
];


@NgModule({
    imports: MATERIAL_MODULES,
    exports: MATERIAL_MODULES
})
export class MaterialModule {}

