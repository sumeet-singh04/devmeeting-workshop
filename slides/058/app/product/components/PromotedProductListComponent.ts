import {Component} from '@angular/core';
import ProductListComponent from "./ProductListComponent";
import Product from "../entities/Product";
import PromotedDirective from "../directives/PromotedDirective";

@Component({
    selector: 'promoted-product-list',
    inputs: ['products'],
    directives: [ProductListComponent, PromotedDirective],
    //5/ we can use it by making element matching declared selector
    template: `
        <section class="promoted">
            <header><h3>Promoted products</h3></header>
            <button (click)="togglePromoted()" class="btn btn-default">Toggle promoted products</button>
            <product-list *ngIf="showPromoted" [products]="products" sPromoted></product-list>
        </section>
    `
})
export default class PromotedProductListComponent {
    public products: Product[] = [];
    public showPromoted:boolean = true;

    togglePromoted () {
        this.showPromoted = !this.showPromoted;
    }
}
