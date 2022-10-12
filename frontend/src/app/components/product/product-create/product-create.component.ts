import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private route: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {}

  public fg: FormGroup = this.fb.group({
    productName: ['', Validators.required],
    productPrice: ['', Validators.required],
  });

  public createProduct(): void {
    const treatedNumber = this.fg.get('productPrice')?.value.replace(',', '.');

    const object = {
      name: this.fg.get('productName')?.value,
      price: treatedNumber,
    };

    this.productService.create(object).subscribe(() => {
      this.productService.showMessage('Produto criado com sucesso!');
      this.route.navigate(['crud-de-produtos']);
    });
  }

  public cancel(): void {
    this.route.navigate(['crud-de-produtos']);
  }
}
