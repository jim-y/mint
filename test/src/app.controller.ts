export class AppController {
    items = ['Nespresso', 'Starbucks', 'LaVazza'];
    selected: string;

    onCoffeeSelected(selection: string) {
        this.selected = selection;
    }
}