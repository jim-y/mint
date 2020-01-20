declare var angular: any;

import 'mint';
import '../node_modules/mint/dist/main.css';
import './styles.scss';
import directiveFactory from './helpers/directive-factory';

const app = angular.module('mint-test', ['mint']);

import { AppController } from './app.controller';
import { CustomSelectDirective } from './ui-components/select/select';

app.controller('AppController', AppController);
app.directive('cSelect', directiveFactory(CustomSelectDirective));