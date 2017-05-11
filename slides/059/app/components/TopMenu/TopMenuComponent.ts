import {Component} from '@angular/core';
import {COMMON_DIRECTIVES} from '@angular/common';
import {ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';

@Component({
    selector: 'top-menu',
    inputs: ['items'],
    directives: [ROUTER_DIRECTIVES, COMMON_DIRECTIVES],
    template: `
        <nav>
            <ul class="nav nav-tabs">
                <li *ngFor="let item of items" [ngClass]="{active: isLinkActive(item.link)}">
                    <a [routerLink]="[item.link]">{{ item.title }}</a>
                </li>
            </ul>
        </nav>
    `,
    styles: [
        `ul {
            margin-bottom: 1em;
        },
        .router-link-active {

        }`
    ]
})
export default class TopMenuComponent {
    public items:{link: string; title: string}[] = [];

    constructor(private router: Router) {
    }

    public isLinkActive (link: string) {
        return this.router.isRouteActive(this.router.generate([link]));
    }
}
