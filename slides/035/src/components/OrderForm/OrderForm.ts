import {Component} from '@angular/core';
import {FormBuilder, ControlGroup, COMMON_DIRECTIVES, Validators} from '@angular/common';

@Component({
    selector: 'order-form',
    directives: [COMMON_DIRECTIVES],
    template: `
        <form [ngFormModel]="orderForm" (submit)="onFormSubmit()">
            <label>Name: <input type="text" [ngControl]="'name'" class="form-control" /></label>
            <label>Surname: <input type="text" [ngControl]="'surname'" class="form-control" /></label>
            <label>Address: <input type="text" [ngControl]="'address'" class="form-control" /></label>
            <label>Product name: <input type="text" [ngControl]="'productName'" class="form-control" /></label>
            <label>Product count: <input type="number" [ngControl]="'productCount'" class="form-control" /></label>
            <input type="submit" value="Send order" class="btn btn-default" />
        </form>`
})
export default class OrderForm {
    public orderForm: ControlGroup;

    //9/ First improvement we can make is to simplify form model configuration object
    constructor(formBuilder: FormBuilder) {
        this.orderForm = formBuilder.group({
            name: [''],
            surname: [''],
            address: [''],
            productName: [''],
            productCount: ['']
        });
    }

    //4/ The second we can make is to take value directly from form model instead of building it manually
    public onFormSubmit () {
        const order = this.orderForm.value;
        console.log(order);
    }
}
