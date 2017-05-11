import {Component} from '@angular/core';
import {COMMON_DIRECTIVES} from '@angular/common';
import ProductComponent from "./ProductComponent";
import Product from '../entities/Product';

@Component({
    selector: 'product-list',
    directives: [COMMON_DIRECTIVES, ProductComponent],
    inputs: ['products'],
    template: `
        <ul class="container-fluid">
            <li *ngFor="let product of products" class="col col-sm-2">
                <s-product [product]="product"></s-product>
            </li>
        </ul>
    `,
    styles: [
        `ul {
            padding: 0;
            margin: 15px -15px;
        }`,
        `li {
            list-style-type: none;
        }`
    ]
})
export default class ProductListComponent {
    public products : Product[] = [];
}
