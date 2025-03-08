import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PlatilloService, Platillo } from '../../services/platillo.service';

@Component({
  selector: 'app-nuevo-platillo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './nuevo-platillo.component.html',
  styleUrls: ['./nuevo-platillo.component.css'],
})
export class NuevoPlatilloComponent {
  nombre: string = '';
  precio: number = 0;
  tiempoPreparacion: number = 0;
  mensaje: string = '';

  constructor(private platilloService: PlatilloService) {}

  agregarPlatillo() {
    if (this.nombre.trim() && this.precio > 0 && this.tiempoPreparacion > 0) {
      const nuevoPlatillo: Platillo = {
        nombre: this.nombre.trim(),
        precio: this.precio,
        tiempo_preparacion: this.tiempoPreparacion,
      };
  
      this.platilloService.addPlatillo(nuevoPlatillo).subscribe({
        next: (response) => {
          this.mensaje = 'Platillo agregado correctamente';
          this.resetForm();
        },
        error: (error) => {
          console.error('Error al agregar platillo:', error);
          this.mensaje = 'Error al agregar platillo';
        },
      });
    } else {
      this.mensaje = 'Todos los campos son obligatorios y deben ser válidos';
    }
  }
  
  resetForm() {
    this.nombre = '';
    this.precio = 0;
    this.tiempoPreparacion = 0;
  }
  
}
