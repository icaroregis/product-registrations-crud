import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cadastro-de-produtos-component',
  templateUrl: './cadastro-de-produtos.component.html',
  styleUrls: ['./cadastro-de-produtos.component.scss'],
})
export class CadastroDeProdutosComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  public navigateToProductCreate(): void {
    this.router.navigate(['criar-produtos']);
  }
}
