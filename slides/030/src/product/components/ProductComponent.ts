import {Component} from '@angular/core';
import {COMMON_DIRECTIVES} from '@angular/common';
import Product from './../entities/Product';

@Component({
    selector: 's-product',
    inputs: ['product'],
    directives: [COMMON_DIRECTIVES],
    template: `
        <div>
            <header>{{ product.name }}</header>
            <span class="price">{{ product.price | currency:'USD':true }}</span>
            <div>
                <span *ngFor="let tag of product.tags">{{ tag }}</span>
            </div>
        </div>
    `
})
export default class ProductComponent {
    public product : Product;
}
