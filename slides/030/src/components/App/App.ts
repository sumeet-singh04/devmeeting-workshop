import {Component, View} from '@angular/core';
import {Product, ProductFilterPipe, ProductSortPipe, ProductListComponent, PromotedProductListComponent} from '../../product/product';
import {SortingPanelComponent, SortingOption, SortingDescriptor} from "../../search/search";

@Component({
    selector: 'my-app',
    directives: [ProductListComponent, PromotedProductListComponent, SortingPanelComponent],
    pipes: [ProductFilterPipe, ProductSortPipe],
    templateUrl: 'src/components/App/my-app.html',
})
export default class App {
    private filterText: string = '';
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

    private updateProducts () {
        this.products = this.getProducts();
        this.promotedProducts = this.getPromotedProducts();
    }

    private getProducts () {
        return [
            new Product('Yerba', 4, ['Strong']),
            new Product('Coffee', 5),
            new Product('Tea', 4, ['Great', 'Super'])
        ];
    }

    private getPromotedProducts () {
        return [
            new Product('Latte', 10),
            new Product('Green Tea', 7)
        ];
    }
}
