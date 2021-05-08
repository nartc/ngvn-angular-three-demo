import {ThreeOrbitControlsModule} from "@angular-three/controls/orbit-controls";
import {ThreeCoreModule} from "@angular-three/core";
import {ThreeBoxBufferGeometryModule, ThreeCylinderBufferGeometryModule} from "@angular-three/core/geometries";
import {ThreeAmbientLightModule, ThreeDirectionalLightModule} from "@angular-three/core/lights";
import {ThreeMeshBasicMaterialModule, ThreeMeshPhongMaterialModule} from "@angular-three/core/materials";
import {ThreeMeshModule} from "@angular-three/core/meshes";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent, CubeComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent,
        CubeComponent
    ],
    imports: [
        BrowserModule,
        ThreeCoreModule,
        ThreeMeshModule,
        ThreeBoxBufferGeometryModule,
        ThreeMeshBasicMaterialModule,
        ThreeOrbitControlsModule,
        ThreeCylinderBufferGeometryModule,
        ThreeMeshPhongMaterialModule,
        ThreeDirectionalLightModule,
        ThreeAmbientLightModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
