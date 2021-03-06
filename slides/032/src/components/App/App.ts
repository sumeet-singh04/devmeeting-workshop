import {Component, View} from '@angular/core';
import {Product, ProductRepository, PRODUCT_DIRECTIVES, PRODUCT_PIPES} from '../../product/product';
import {SortingPanelComponent, SortingOption, SortingDescriptor} from "../../search/search";

@Component({
    selector: 'my-app',
    directives: [PRODUCT_DIRECTIVES, SortingPanelComponent],
    pipes: [PRODUCT_PIPES],
    templateUrl: 'src/components/App/my-app.html',
})
export default class App {
    private filterText: string = '';
    // 2. But really want we to create an instance by hand?
    private productRepository:ProductRepository = new ProductRepository();

    public title: string = 'Shop';
    public products: Product[] = [];
    public promotedProducts: Product[] = [];
    public sortingDescriptor:SortingDescriptor = {property: 'price', direction: 0};
    public sortingOptions:SortingOption[] = [
        {name: 'Price', property: 'price'},
        {name: 'Name', property: 'name'}
    ];

    constructor () {
        this.updateProducts();
    }

    public onFilterChange (newFilter: string) {
        this.filterText = newFilter;
        this.updateProducts();
    }

    public onSortChange (descriptor) {
        this.sortingDescriptor = descriptor;
        this.updateProducts();
    }

    //4/ 1. Introduction of repository simplified our component a way more
    private updateProducts () {
        this.products = this.productRepository.getProducts();
        this.promotedProducts = this.productRepository.getPromotedProducts();
    }
}
