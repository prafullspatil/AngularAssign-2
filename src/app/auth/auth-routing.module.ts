import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnauthorisedPageComponent } from './unauthorised-page/unauthorised-page.component';

const routes: Routes = [{ path: '', component: AuthComponent },
// { path: 'login', component: LoginComponent },
// { path: '**', component: PageNotFoundComponent },
// { path: 'auth', component: UnauthorisedPageComponent },
// { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
