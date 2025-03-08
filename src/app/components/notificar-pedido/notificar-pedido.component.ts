import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-notificar-pedido',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notificar-pedido.component.html',
  styleUrls: ['./notificar-pedido.component.css']
})
export class NotificarPedidoComponent {
  idPedido: number = 0;
  mensaje: string = '';

  notificarPedido() {
    if (this.idPedido > 0) {
      this.mensaje = 'Enviando notificación...';

      // Simulamos un retraso de 2 segundos para la notificación
      setTimeout(() => {
        this.mensaje = `✅ El pedido con ID ${this.idPedido} se ha realizado correctamente.`;
        this.idPedido = 0;
      }, 2000);
    } else {
      this.mensaje = '❌ Por favor ingrese un ID válido.';
    }
  }
}
