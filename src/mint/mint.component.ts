import './mint.scss';
import { MintService } from './mint.service';

export class MintComponent {
    static $inject = ['MintService'];
    static $descriptor = {
        controller: MintComponent,
        template: require('./mint.html'),
        transclude: true
    };

    constructor(
        private _mintService: MintService
    ) {}
}