import './menu.scss';
import { MenuButtonComponent } from './menu-button/menu-button.component';

export class MenuComponent {
    static $descriptor = {
        controller: MenuComponent,
        template: require('./menu.html'),
        transclude: true,
        require: {
            mint: '^mint'
        },
        bindings: {
            title: '@?'
        }
    };

    static $inject = ['$element', '$location', '$anchorScroll'];

    public active: string;

    constructor(
        private _$element: JQLite,
        private _$location: ng.ILocationService,
        private _$anchorScroll: ng.IAnchorScrollService,
    ) {}

    $postLink() {
        this._$element.addClass('column is-narrow');
    }

    onButtonClicked(ref: string, $event: ng.IAngularEvent) {
        if ($event != null) {
            $event.stopPropagation();
        }
        
        this.active = ref;
        this._$location.hash(ref);
        this._$anchorScroll();
    }
}