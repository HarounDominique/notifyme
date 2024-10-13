import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-price-monitor',
  standalone: true,
  imports: [RouterOutlet, CommonModule], // Asegúrate de incluir CommonModule aquí
  templateUrl: './price-monitor.component.html',
  styleUrls: ['./price-monitor.component.scss']
})
export class PriceMonitorComponent {
  isValidUrl = false;

  // Función que se llama al introducir texto en el campo
  onUrlInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.isValidUrl = this.validateUrl(input.value);
  }

  // Función para validar la URL
  validateUrl(url: string): boolean {
    const pattern = new RegExp('^(https?://)?(www\\.)?([\\w-]+\\.)+[\\w-]+(/[\\w- ./?%&=]*)?$');
    return pattern.test(url);
  }

  // Función para buscar el producto
  searchProduct(): void {
    if (this.isValidUrl) {
      console.log('Buscando producto en:', this.isValidUrl);
      // Aquí puedes agregar la lógica para buscar el producto
    } else {
      console.log('URL no válida');
    }
  }
}
