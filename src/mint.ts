declare global {
    interface Window {
        angular: any;
    }
}
declare var angular: any; 

if (window.angular == null) {
    throw new Error('angular is missing');
}

import './main.scss';

import { MenuComponent } from './menu/menu.component';
import { MenuButtonComponent } from './menu/menu-button/menu-button.component';

angular
    .module('mint.menu', [])
    .component('mintMenu', MenuComponent.$descriptor)
    .component('mintMenuButton', MenuButtonComponent.$descriptor);

import { CanvasComponent } from './canvas/canvas.component';
import { SectionComponent } from './canvas/section/section.component';

angular
    .module('mint.canvas', [])
    .component('mintCanvas', CanvasComponent.$descriptor)
    .component('mintSection', SectionComponent.$descriptor);

import { MintComponent } from './mint/mint.component';
import { MintService } from './mint/mint.service';

angular
    .module('mint.wrapper', [])
    .service('MintService', MintService)
    .component('mint', MintComponent.$descriptor);

angular.module('mint', ['mint.wrapper', 'mint.menu', 'mint.canvas']);