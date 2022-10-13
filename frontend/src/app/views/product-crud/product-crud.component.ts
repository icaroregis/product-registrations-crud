import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../../components/templates/header/header.service';

@Component({
  selector: 'product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.scss'],
})
export class ProductCrudComponent implements OnInit {
  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Cadastro de Produtos',
      icon: 'storefront',
      routeUrl: 'criar-produtos',
    };
  }

  ngOnInit(): void {}

  public navigateToProductCreate(): void {
    this.router.navigate(['criar-produtos']);
  }
}
