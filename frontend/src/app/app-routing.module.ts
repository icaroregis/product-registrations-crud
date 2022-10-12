import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//pages
import { HomeComponent } from './views/home/home.component';
import { CadastroDeProdutosComponent } from './views/cadastro-de-produtos/cadastro-de-produtos.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastro-de-produtos', component: CadastroDeProdutosComponent },
  { path: 'criar-produtos', component: ProductCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
