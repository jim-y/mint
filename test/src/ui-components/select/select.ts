export class CustomSelectDirective<T> implements ng.IDirective {
    restrict: string = 'EA';
    scope: any = {
        items: '=',
        onSelectCb: '&onSelect'
    };
    template: string = require('./select.html');
    controller = CustomSelectDirective;
    controllerAs = '$ctrl';
    bindToController = true;

    items: T[];
    selection: T;
    onSelectCb: Function;

    constructor() {
        this.onSelect = this.onSelect.bind(this);
    }

    public link(scope: ng.IScope, element: ng.IAugmentedJQuery) {
        console.log('init');
    }

    onSelect() {
        if (this.onSelectCb) {
            this.onSelectCb({ selection: this.selection });
        }
    }
}