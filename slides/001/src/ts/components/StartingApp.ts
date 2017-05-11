/// <reference path="../../../typings/tsd.d.ts" />

import {Component, View} from '@angular/angular2';

@Component({
    selector: 'starting-app'
})
@View({
    templateUrl: 'src/template/starting-app.html'
})
export default class StartingApp {
    public hello:string = 'Hello, World!';
}
