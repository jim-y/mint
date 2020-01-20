import './section.scss';
import { MintComponent } from "../../mint/mint.component";

export class SectionComponent {
    static $descriptor = {
        controller: SectionComponent,
        transclude: true,
        template: require('./section.html'),
        require: {
            canvas: '^mintCanvas',
            mint: '^^mint'
        },
        bindings: {
            title: '@?',
            subtitle: '@?'
        }
    }

    // Bindings
    private readonly mint: MintComponent;
    private readonly title: string;

    $onInit() {}
}