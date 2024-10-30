import { Component } from '@angular/core';
import { HeaderComponent } from '../../Layout/header/header.component';
import { FooterComponent } from '../../Layout/footer/footer.component';

@Component({
  selector: 'app-terms-and-condition',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './terms-and-condition.component.html',
  styleUrl: './terms-and-condition.component.css'
})
export class TermsAndConditionComponent {

}
