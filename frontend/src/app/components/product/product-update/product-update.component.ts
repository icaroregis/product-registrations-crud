import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
})
export class ProductUpdateComponent implements OnInit {
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
    productName: ['', Validators.required],
    productPrice: ['', Validators.required],
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

  public updateProduct() {
    this.productService.update(this.getProduct).subscribe({
      next: (response) => {
        if (response) {
          this.productService.showMessage('Produto atualizado com sucesso!');
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
