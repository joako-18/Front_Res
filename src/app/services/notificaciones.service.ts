import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  private socket!: WebSocket;
  private mensajes$ = new Subject<any>();

  constructor() {
    this.conectar();
  }

  private conectar() {
    const wsUrl = 'ws://localhost:8080/ws'; // Cambia el puerto o IP si es necesario
    this.socket = new WebSocket(wsUrl);

    this.socket.onopen = () => {
      console.log('[WebSocket] Conectado al servidor');
    };

    this.socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        console.log('[WebSocket] Mensaje recibido (JSON):', data);
        this.mensajes$.next(data);
      } catch (e) {
        console.log('[WebSocket] Mensaje recibido (Texto):', event.data);
        this.mensajes$.next(event.data);
      }
    };

    this.socket.onclose = (event) => {
      console.log(`[WebSocket] Desconectado: código ${event.code}`);
      // Opcional: reconectar automáticamente
      setTimeout(() => this.conectar(), 3000);
    };

    this.socket.onerror = (error) => {
      console.error('[WebSocket] Error:', error);
    };
  }

  public recibirMensajes(): Observable<any> {
    return this.mensajes$.asObservable();
  }

  public enviarMensaje(mensaje: any) {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      const data = typeof mensaje === 'string' ? mensaje : JSON.stringify(mensaje);
      this.socket.send(data);
    } else {
      console.warn('[WebSocket] No se puede enviar mensaje, socket no conectado');
    }
  }
}
