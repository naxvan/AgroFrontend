import { Component } from '@angular/core';
import { HeaderComponent } from '../../Layout/header/header.component';
import { FooterComponent } from '../../Layout/footer/footer.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css'
})
export class PrivacyPolicyComponent {

  corre01:string = 'quejas@agroapp.com';
  correo2:String = "contacto@agroapp.com";

}
