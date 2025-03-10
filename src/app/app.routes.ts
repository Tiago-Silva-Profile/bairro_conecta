import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ServiceComponent } from './pages/service/service.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'service', component: ServiceComponent },
  { path: 'contact', component: ContactComponent }
];
