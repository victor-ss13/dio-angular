import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { EnviaFormulario } from '../../services/envia-formulario';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  private enviaFormularioService = inject(EnviaFormulario);
  name = "Victor";
  idButton = "oioi";
  mostraTitulo = false;
  listaItens = ["um", "dois", "tres"];

  submit() {
    this.enviaFormularioService.enviaInfoBackend("Enviando informação");
  }
  // meuBooleano = false;
  
  // atualizaBooleano(valor: boolean) {
  //   this.meuBooleano = valor;
  // }
}
