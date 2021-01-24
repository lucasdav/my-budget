import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroDespesasComponent } from './components/cadastro-despesas/cadastro-despesas.component';
import { CadastroGanhosComponent } from './components/cadastro-ganhos/cadastro-ganhos.component';
import { MenuComponent } from './components/menu/menu.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'menu' },
  { path: 'cadastro-ganho', component: CadastroGanhosComponent},
  { path: 'cadastro-despesa', component: CadastroDespesasComponent},
  { path: 'menu', component: MenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
