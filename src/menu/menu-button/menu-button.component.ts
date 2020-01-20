import { MintService } from "../../mint/mint.service";
import { MenuComponent } from "../menu.component";

export class MenuButtonComponent {
    static $descriptor = {
        controller: MenuButtonComponent,
        transclude: true,
        template: require('./menu-button.html'),
        require: {
            menu: '^mintMenu',
            mint: '^^mint'
        },
        bindings: {
            ref: '@for'
        }
    };

    private readonly ref: string;
    private readonly menu: MenuComponent;

    static $inject = [];

    constructor() {}

    $onInit() {}

    isActive(): boolean {
        return this.menu.active === this.ref;
    }

    onClick($event: ng.IAngularEvent): void {
        return this.menu.onButtonClicked(this.ref, $event);
    }
}