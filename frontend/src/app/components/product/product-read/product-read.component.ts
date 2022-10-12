import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.scss'],
})
export class ProductReadComponent implements OnInit {
  public lstProducts: Product[] = [];
  public displayedColumns: Array<string> = ['id', 'name', 'price', 'acoes'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  public number(price: string): number {
    return Number(price);
  }

  public carregarProdutos() {
    this.productService.read().subscribe({
      next: (response) => {
        if (response) {
          this.lstProducts = response;
        }
      },
      error: (err: any) => {
        throw err;
      },
    });
  }
}
