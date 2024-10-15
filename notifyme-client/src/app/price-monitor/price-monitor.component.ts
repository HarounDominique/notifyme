import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import validator from 'validator';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-price-monitor',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HttpClientModule],
  templateUrl: './price-monitor.component.html',
  styleUrls: ['./price-monitor.component.scss']
})
export class PriceMonitorComponent {
  isValidUrl = false;

  scrapedData: any; // <--- Variable para guardar los datos del scraping

  constructor(private http: HttpClient) {}

  // Función que se llama al introducir texto en el campo
  onUrlInput(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.isValidUrl = this.validateUrl(input.value);
  }

  // Función para validar la URL
  validateUrl(url: string): boolean {
    return validator.isURL(url);
  }

  // Función para buscar el producto
  searchProduct(): void {
    if (this.isValidUrl) {
      console.log('Buscando producto en:', this.isValidUrl);

      const url = (document.querySelector('input') as HTMLInputElement).value; // <--- Obtiene el valor del campo de entrada

      // Petición al servicio backend para hacer web scraping
      this.http.post('http://localhost:3000/scrape', { url }).subscribe( // <--- Llamada HTTP añadida
        (response: any) => {
          console.log('Datos obtenidos:', response); // <--- Muestra los datos obtenidos del scraping
          this.scrapedData = response; // <--- Guarda los datos del scraping
        },
        (error) => {
          console.error('Error al hacer scraping:', error); // <--- Manejador de errores
        }
      );

    } else {
      console.log('URL no válida');
    }
  }
}
