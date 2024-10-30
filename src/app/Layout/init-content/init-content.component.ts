import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-init-content',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './init-content.component.html',
  styleUrl: './init-content.component.css'
})
export class InitContentComponent {

}
