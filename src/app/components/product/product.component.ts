import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  product1 = {
    productId: 1,
    productName: 'Bardak',
    categoryId: 1,
    unitPrice: 5,
  };
  product2 = {
    productId: 2,
    productName: 'Kitap',
    categoryId: 2,
    unitPrice: 10,
  };
  product3 = {
    productId: 3,
    productName: 'Defter',
    categoryId: 3,
    unitPrice: 15,
  };
  product4 = {
    productId: 4,
    productName: 'Kalem',
    categoryId: 4,
    unitPrice: 20,
  };
  product5 = {
    productId: 5,
    productName: 'Laptop',
    categoryId: 5,
    unitPrice: 25,
  };

  products = [
    this.product1,
    this.product2,
    this.product3,
    this.product4,
    this.product5,
  ];


}
