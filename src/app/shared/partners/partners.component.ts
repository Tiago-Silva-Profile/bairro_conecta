import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-partners',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {

  partners = [
    { name: 'Parceiro 1', image: 'assets/model2.jpg' },
    { name: 'Parceiro 2', image: 'assets/model3.jpg' },
    { name: 'Parceiro 3', image: 'assets/model4.jpg' }
  ];

}
