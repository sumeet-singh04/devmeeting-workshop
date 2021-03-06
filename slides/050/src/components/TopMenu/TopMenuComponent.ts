import {Component} from '@angular/core';
import {COMMON_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES} from '@angular/router-deprecated';

@Component({
    selector: 'top-menu',
    inputs: ['items'],
    directives: [ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    //9/ Of course we can build links programmatically
    template: `
        <nav>
            <ul class="nav nav-tabs">
                <li *ngFor="let item of items">
                    <a [routerLink]="[item.link]">{{ item.title }}</a>
                </li>
            </ul>
        </nav>
    `,
    styles: [
        `ul {
            margin-bottom: 1em;
        }`
    ]
})
export default class TopMenuComponent {
    public items:{link: string; title: string}[] = []
}
