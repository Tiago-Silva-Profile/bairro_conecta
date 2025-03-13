import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AdsenseComponent } from "../../shared/adsense/adsense.component";
import { PartnersComponent } from "../../shared/partners/partners.component";

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    FormsModule,
    PartnersComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  estados: string[] = ['SP', 'RJ', 'MG', 'RS'];
  cidades: string[] = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte', 'Porto Alegre'];
  tipos: string[] = ['Padaria', 'Pedreiro', 'Mercadinho'];

  filtro = {
    estado: '',
    cidade: '',
    tipo: ''
  };

  comercios = [
    { nome: 'Padaria Pão Quente', cidade: 'São Paulo', estado: 'SP', tipo: 'Padaria', imagem: 'assets/model.png', descricao: 'A melhor padaria da região com pães frescos todos os dias.', contato: '(11) 98765-4321', funcionamento: 'Seg-Sáb: 06h - 20h', redes: { whatsapp: '#', instagram: '#', linkedin: '#' } },
    { nome: 'Construtor João', cidade: 'Rio de Janeiro', estado: 'RJ', tipo: 'Pedreiro', imagem: 'assets/model.png', descricao: 'Profissional qualificado para reformas e construções.', contato: '(21) 99988-7766', funcionamento: 'Seg-Sex: 08h - 18h', redes: { whatsapp: '#', instagram: '#', linkedin: '#' } },
    { nome: 'Mercado Bom Preço', cidade: 'Belo Horizonte', estado: 'MG', tipo: 'Mercadinho', imagem: 'assets/model.png', descricao: 'Mercado com produtos de qualidade e ótimo atendimento.', contato: '(31) 92345-6789', funcionamento: 'Todos os dias: 07h - 22h', redes: { whatsapp: '#', instagram: '#', linkedin: '#' } },
    { nome: 'Mercado Bom Preço', cidade: 'Belo Horizonte', estado: 'MG', tipo: 'Mercadinho', imagem: 'assets/model.png', descricao: 'Mercado com produtos de qualidade e ótimo atendimento.', contato: '(31) 92345-6789', funcionamento: 'Todos os dias: 07h - 22h', redes: { whatsapp: '#', instagram: '#', linkedin: '#' } },
    { nome: 'Mercado Bom Preço', cidade: 'Belo Horizonte', estado: 'MG', tipo: 'Mercadinho', imagem: 'assets/model.png', descricao: 'Mercado com produtos de qualidade e ótimo atendimento.', contato: '(31) 92345-6789', funcionamento: 'Todos os dias: 07h - 22h', redes: { whatsapp: '#', instagram: '#', linkedin: '#' } },
    { nome: 'Mercado Bom Preço', cidade: 'Belo Horizonte', estado: 'MG', tipo: 'Mercadinho', imagem: 'assets/model.png', descricao: 'Mercado com produtos de qualidade e ótimo atendimento.', contato: '(31) 92345-6789', funcionamento: 'Todos os dias: 07h - 22h', redes: { whatsapp: '#', instagram: '#', linkedin: '#' } },
    { nome: 'Mercado Bom Preço', cidade: 'Belo Horizonte', estado: 'MG', tipo: 'Mercadinho', imagem: 'assets/model.png', descricao: 'Mercado com produtos de qualidade e ótimo atendimento.', contato: '(31) 92345-6789', funcionamento: 'Todos os dias: 07h - 22h', redes: { whatsapp: '#', instagram: '#', linkedin: '#' } },
    { nome: 'Mercado Bom Preço', cidade: 'Belo Horizonte', estado: 'MG', tipo: 'Mercadinho', imagem: 'assets/model.png', descricao: 'Mercado com produtos de qualidade e ótimo atendimento.', contato: '(31) 92345-6789', funcionamento: 'Todos os dias: 07h - 22h', redes: { whatsapp: '#', instagram: '#', linkedin: '#' } },
    { nome: 'Mercado Bom Preço', cidade: 'Belo Horizonte', estado: 'MG', tipo: 'Mercadinho', imagem: 'assets/model.png', descricao: 'Mercado com produtos de qualidade e ótimo atendimento.', contato: '(31) 92345-6789', funcionamento: 'Todos os dias: 07h - 22h', redes: { whatsapp: '#', instagram: '#', linkedin: '#' } },
    { nome: 'Mercado Bom Preço', cidade: 'Belo Horizonte', estado: 'MG', tipo: 'Mercadinho', imagem: 'assets/model.png', descricao: 'Mercado com produtos de qualidade e ótimo atendimento.', contato: '(31) 92345-6789', funcionamento: 'Todos os dias: 07h - 22h', redes: { whatsapp: '#', instagram: '#', linkedin: '#' } },
    { nome: 'Mercado Bom Preço', cidade: 'Belo Horizonte', estado: 'MG', tipo: 'Mercadinho', imagem: 'assets/model.png', descricao: 'Mercado com produtos de qualidade e ótimo atendimento.', contato: '(31) 92345-6789', funcionamento: 'Todos os dias: 07h - 22h', redes: { whatsapp: '#', instagram: '#', linkedin: '#' } },
    { nome: 'Mercado Bom Preço', cidade: 'Belo Horizonte', estado: 'MG', tipo: 'Mercadinho', imagem: 'assets/model.png', descricao: 'Mercado com produtos de qualidade e ótimo atendimento.', contato: '(31) 92345-6789', funcionamento: 'Todos os dias: 07h - 22h', redes: { whatsapp: '#', instagram: '#', linkedin: '#' } },
    { nome: 'Mercado Bom Preço', cidade: 'Belo Horizonte', estado: 'MG', tipo: 'Mercadinho', imagem: 'assets/model.png', descricao: 'Mercado com produtos de qualidade e ótimo atendimento.', contato: '(31) 92345-6789', funcionamento: 'Todos os dias: 07h - 22h', redes: { whatsapp: '#', instagram: '#', linkedin: '#' } },
    { nome: 'Mercado Bom Preço', cidade: 'Porto Alegre', estado: 'RS', tipo: 'Mercadinho', imagem: 'assets/model.png', descricao: 'Mercado com produtos de qualidade e ótimo atendimento.', contato: '(31) 92345-6789', funcionamento: 'Todos os dias: 07h - 22h', redes: { whatsapp: '#', instagram: '#', linkedin: '#' } },
    { nome: 'Mercado Bom Preço', cidade: 'Porto Alegre', estado: 'RS', tipo: 'Mercadinho', imagem: 'assets/model.png', descricao: 'Mercado com produtos de qualidade e ótimo atendimento.', contato: '(31) 92345-6789', funcionamento: 'Todos os dias: 07h - 22h', redes: { whatsapp: '#', instagram: '#', linkedin: '#' } },
    { nome: 'Mercado Bom Preço', cidade: 'Porto Alegre', estado: 'RS', tipo: 'Mercadinho', imagem: 'assets/model.png', descricao: 'Mercado com produtos de qualidade e ótimo atendimento.', contato: '(31) 92345-6789', funcionamento: 'Todos os dias: 07h - 22h', redes: { whatsapp: '#', instagram: '#', linkedin: '#' } },
    { nome: 'Mercado Bom Preço', cidade: 'Porto Alegre', estado: 'RS', tipo: 'Mercadinho', imagem: 'assets/model.png', descricao: 'Mercado com produtos de qualidade e ótimo atendimento.', contato: '(31) 92345-6789', funcionamento: 'Todos os dias: 07h - 22h', redes: { whatsapp: '#', instagram: '#', linkedin: '#' } },
    { nome: 'Mercado Bom Preço', cidade: 'Porto Alegre', estado: 'RS', tipo: 'Mercadinho', imagem: 'assets/model.png', descricao: 'Mercado com produtos de qualidade e ótimo atendimento.', contato: '(31) 92345-6789', funcionamento: 'Todos os dias: 07h - 22h', redes: { whatsapp: '#', instagram: '#', linkedin: '#' } },
    { nome: 'Mercado Bom Preço', cidade: 'Porto Alegre', estado: 'RS', tipo: 'Mercadinho', imagem: 'assets/model.png', descricao: 'Mercado com produtos de qualidade e ótimo atendimento.', contato: '(31) 92345-6789', funcionamento: 'Todos os dias: 07h - 22h', redes: { whatsapp: '#', instagram: '#', linkedin: '#' } },
    { nome: 'Mercado Bom Preço', cidade: 'Belo Horizonte', estado: 'MG', tipo: 'Mercadinho', imagem: 'assets/model.png', descricao: 'Mercado com produtos de qualidade e ótimo atendimento.', contato: '(31) 92345-6789', funcionamento: 'Todos os dias: 07h - 22h', redes: { whatsapp: '#', instagram: '#', linkedin: '#' } }
  ];

  get comerciosFiltrados() {
    return this.comercios.filter(c =>
      (this.filtro.estado ? c.estado === this.filtro.estado : true) &&
      (this.filtro.cidade ? c.cidade === this.filtro.cidade : true) &&
      (this.filtro.tipo ? c.tipo === this.filtro.tipo : true)
    );
  }

  comercioSelecionado: any = null;

  abrirModal(comercio: any) {
    this.comercioSelecionado = comercio;
  }

}
