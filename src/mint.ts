declare global {
    interface Window {
        angular: any;
    }
}
declare var angular: any; 

if (window.angular == null) {
    throw new Error('angular is missing');
}

import { MenuComponent } from './menu/menu.component';

angular.module('mint.menu', [])
    .component('mintMenu', MenuComponent.$descriptor);

angular.module('mint', ['mint.menu']);