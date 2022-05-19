import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { LoginComponent } from '../auth/login/login.component';
import { PageNotFoundComponent } from '../auth/page-not-found/page-not-found.component';
import { UnauthorisedPageComponent } from '../auth/unauthorised-page/unauthorised-page.component';
import { AddProductComponent } from './add-product/add-product.component';
import { FeaturesComponent } from './features.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';

const routes: Routes = [{ path: '', component: FeaturesComponent },
{ path: 'welcome-screen',canActivate:[AuthGuard], component: WelcomeScreenComponent },
{ path: 'product-list',canActivate:[AuthGuard], component: ProductListComponent },
{ path: 'product-details/:id',canActivate:[AuthGuard], component: ProductDetailsComponent },
{ path: 'add-product',canActivate:[AuthGuard], component: AddProductComponent },
{ path: 'login', component: LoginComponent },
{ path: 'authGuard', component: UnauthorisedPageComponent },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
