import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {RoutableProductComponent, ProductListWithSearchingComponent} from "../../product/product";

@Component({
    selector: 's-products',
    directives: [ROUTER_DIRECTIVES],
    template: '<router-outlet></router-outlet>'
})
@RouteConfig([
    {path: '/', name: 'ProductList', component: ProductListWithSearchingComponent, useAsDefault: true},
    {path: '/:slug', name: 'Product', component: RoutableProductComponent}
])
export default class ProductsComponent {
}
