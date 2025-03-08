import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NuevoPlatilloComponent } from './components/nuevo-platillo/nuevo-platillo.component';
import { ListaPlatillosComponent } from './components/lista-platillos/lista-platillos.component';
import { NotificarPedidoComponent } from './components/notificar-pedido/notificar-pedido.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ FormsModule,NuevoPlatilloComponent,ListaPlatillosComponent, NotificarPedidoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'restaurant';
}
