import { Component, inject, Inject } from '@angular/core';
import { HeaderComponent } from "../../Layout/header/header.component";
import { FooterComponent } from "../../Layout/footer/footer.component";
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  providers : [Title]
})
export class AboutComponent {

  email:String = "contacto@agroapp.co";

  private titleService = inject(Title);

  constructor(){
    this.titleService.setTitle('Nosotros - AgroAppCO');
  }
}
