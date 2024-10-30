import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './Layout/header/header.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { InitContentComponent } from './Layout/init-content/init-content.component';
import { AboutComponent } from './core/about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { PrivacyPolicyComponent } from './core/privacy-policy/privacy-policy.component';
import { ProductsComponent } from './core/products/products.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, InitContentComponent,AboutComponent,LoginComponent,RegisterComponent,PrivacyPolicyComponent, ProductsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AgroAppCO';
}
