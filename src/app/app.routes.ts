import { Routes } from '@angular/router';
import { AboutComponent } from './core/about/about.component';
import { InitContentComponent } from './Layout/init-content/init-content.component';
import { LoginComponent } from './auth/login/login.component';
import { PrivacyPolicyComponent } from './core/privacy-policy/privacy-policy.component';
import { TermsAndConditionComponent } from './core/terms-and-condition/terms-and-condition.component';
import { ProductsComponent } from './core/products/products.component';

export const routes: Routes = [

{
  path : 'v1/agroapp',
  children :[
    {path : '' , component:InitContentComponent},
    {path: 'about', component:AboutComponent},
    {path: 'login' , component:LoginComponent},
    {path: 'policy', component:PrivacyPolicyComponent},
    {path: 'terms-condition', component:TermsAndConditionComponent},
    {path: 'products' , component : ProductsComponent}
  ],

},

{path : '**', redirectTo : 'v1/agroapp'}

];
