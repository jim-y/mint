import './canvas.scss';

export class CanvasComponent {
    static $descriptor = {
        controller: CanvasComponent,
        transclude: true,
        template: require('./canvas.html'),
        require: {
            mint: '^mint'
        },
        bindings: {

        }
    };

    static $inject = ['$element'];

    constructor(
        private _$element: JQLite
    ) {}

    $postLink() {
        this._$element.addClass('column');
    }
}