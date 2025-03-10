import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./components/footer/footer.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { AdsenseComponent } from "./shared/adsense/adsense.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    FooterComponent,
    NavbarComponent,
    CommonModule,
    AdsenseComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bairro_conecta';
}
