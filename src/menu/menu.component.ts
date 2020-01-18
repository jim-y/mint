export class MenuComponent {
    static $inject = [];
    static $descriptor = {
        controller: MenuComponent,
        template: require('html-loader!./menu.html'),
        bindings: {
            title: '@'
        }
    };
}