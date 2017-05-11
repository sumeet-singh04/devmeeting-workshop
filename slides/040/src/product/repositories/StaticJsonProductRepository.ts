import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import ProductRepository from "./ProductRepository";
import {Observable} from "rxjs/Observable";
import Product from "../entities/Product";
import "rxjs/add/operator/map";

@Injectable()
export default class StaticJsonProductRepository {
    private productsPath = 'data/products.json';
    private promotedProductsPath = 'data/promoted-products.json';

    constructor (private http: Http) {
    }

    //5/ There we moved code from App component to hide details of extracting data from response.
    getProducts (path = this.productsPath): Observable<Product[]> {
        return this.http.get(path)
            .map(res => res.json())
            .map(data => data.map(Product.fromObject));
    }

    getPromotedProducts () {
        return this.getProducts(this.promotedProductsPath);
    }
}
