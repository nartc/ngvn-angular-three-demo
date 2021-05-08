import {ThreeVector3} from "@angular-three/core";
import {Component, Input} from '@angular/core';
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

@Component({
    selector: 'app-root',
    template: `
        <ul>
            <li>
                <a href="https://github.com/nartc/angular-three" target="_blank" rel="noopener">Github
                    Angular Three repo
                </a>
            </li>
            <li>
                <a href="https://github.com/nartc/ngvn-angular-three-demo" target="_blank" rel="noopener">Github
                    Demo Repo
                </a>
            </li>
            <li>
                <a href="https://ngvn-angular-three-demo.netlify.app/" target="_blank" rel="noopener">
                    Demo
                </a>
            </li>
        </ul>
        <ngt-canvas [camera]="{fov: 60, near: 1, far: 1000, position: [400, 200, 0]}"
                    [scene]="{fog: fog, background: background}">
            <ngt-stats></ngt-stats>
            <ngt-orbit-controls (ready)="onControlsReady($event)"
                                (animateReady)="$event.animateObject.update()"></ngt-orbit-controls>

            <ngt-directional-light color="white" [position]="[1, 1, 1]"></ngt-directional-light>
            <ngt-directional-light color="#002288" [position]="[-1, -1, -1]"></ngt-directional-light>
            <ngt-ambient-light color="#222222"></ngt-ambient-light>

            <ngt-cylinder-geometry ngtId="cylinder" [args]="[0, 10, 30, 4, 1]"></ngt-cylinder-geometry>
            <ngt-mesh-phong-material ngtId="phong"
                                     [parameters]="{color: '#ffffff', flatShading: true}"></ngt-mesh-phong-material>
            <ngt-mesh *ngFor="let position of positions"
                      geometry="cylinder"
                      material="phong"
                      [position]="position"
                      [matrixAutoUpdate]="false">
            </ngt-mesh>
        </ngt-canvas>
    `,
    styles: [`
        ul {
            list-style: none;
        }

        li {
            text-align: right;
            margin-right: 0.5rem;
        }
    `]
})
export class AppComponent {
    background = new THREE.Color(0xcccccc);
    fog = new THREE.FogExp2(0xcccccc, 0.002);

    positions = Array.from({length: 500}).fill(undefined).map(() => {
        return [this.getRandomPosition(), 0, this.getRandomPosition()] as [number, number, number]
    })

    onControlsReady(controls: OrbitControls) {
        controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
        controls.dampingFactor = 0.05;

        controls.screenSpacePanning = false;

        controls.minDistance = 100;
        controls.maxDistance = 500;

        controls.maxPolarAngle = Math.PI / 2;
    }

    private getRandomPosition() {
        return Math.random() * 1600 - 800;
    }
}

@Component({
    selector: 'app-cube',
    template: `
        <ngt-mesh [position]="position" (animateReady)="onAnimateReady($event.animateObject)">
            <ngt-box-geometry></ngt-box-geometry>
            <ngt-mesh-basic-material [parameters]="{color: 'green'}"></ngt-mesh-basic-material>
        </ngt-mesh>
    `,
    styles: []
})
export class CubeComponent {
    @Input() position?: ThreeVector3;

    onAnimateReady(animateObject: THREE.Mesh) {
        animateObject.rotation.x += 0.03;
        animateObject.rotation.y += 0.03;
    }
}
