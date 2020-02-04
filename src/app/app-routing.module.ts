import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path: '', component: MainComponent, children:[
    {path: 'reid/:id', component: MainComponent},
    {path: 'account/:id', component: MainComponent}
  ]},
  {path:'oauth-callback.html', component:MainComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
