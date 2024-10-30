import { Component } from '@angular/core';
import { HeaderComponent } from '../../Layout/header/header.component';
import { FooterComponent } from '../../Layout/footer/footer.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

}
