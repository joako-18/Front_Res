import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlatilloService } from '../../services/platillo.service';

@Component({
  selector: 'app-notificar-pedido',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notificar-pedido.component.html',
  styleUrls: ['./notificar-pedido.component.css']
})
export class NotificarPedidoComponent {
  idPedido: number = 0;
  estado: string = '';
  mensaje: string = '';

  constructor(private platilloService: PlatilloService) {}

  notificarPedido() {
    if (this.idPedido > 0 && this.estado) {
      this.mensaje = 'Enviando notificación...';

      this.platilloService.notificarPedido(this.idPedido, this.estado).subscribe({
        next: () => {
          this.mensaje = `✅ El pedido con ID ${this.idPedido} se ha notificado correctamente.`;

          // 🧽 Eliminar el platillo después de notificar
          this.platilloService.deletePlatillo(this.idPedido).subscribe({
            next: () => {
              console.log(`Platillo con ID ${this.idPedido} eliminado`);
              this.platilloService.getPlatillos()
            },
            error: (error) => {
              console.error('Error al eliminar el platillo:', error);
            }
          });

          this.idPedido = 0;
          this.estado = '';
        },
        error: (err) => {
          this.mensaje = `❌ Error: ${err.message}`;
        }
      });
    } else {
      this.mensaje = '❌ Por favor ingrese un ID y un estado válidos.';
    }
  }
}
