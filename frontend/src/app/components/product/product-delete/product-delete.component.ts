import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.scss'],
})
export class ProductDeleteComponent implements OnInit {
  public getProduct: Product | any;

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private productService: ProductService,
    private activeRouter: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getById();
  }

  public fg: FormGroup = this.fb.group({
    productName: [''],
    productPrice: [''],
  });

  public getById() {
    const id = this.activeRouter.snapshot.params['id'];
    this.productService.readById(id).subscribe({
      next: (product) => {
        if (product) {
          this.getProduct = product;
        }
      },
      error: (err: any) => {
        throw err;
      },
    });
  }

  public deleteProduct() {
    this.productService.delete(this.getProduct.id).subscribe({
      next: (response) => {
        if (response) {
          this.productService.showMessage('Produto excluído com sucesso!');
          this.route.navigate(['crud-de-produtos']);
        }
      },
      error: (err: any) => {
        throw err;
      },
    });
  }

  public cancel(): void {
    this.route.navigate(['crud-de-produtos']);
  }
}
