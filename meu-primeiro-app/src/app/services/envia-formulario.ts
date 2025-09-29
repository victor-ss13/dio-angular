import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnviaFormulario {
  enviaInfoBackend(info: string) {
    console.log("Enviando informações para o backend");
  }
}
