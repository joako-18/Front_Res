import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Platillo {
  id?: number;
  nombre: string;
  precio: number;
  tiempo_preparacion: number;
}

@Injectable({
  providedIn: 'root'
})
export class PlatilloService {
  private apiUrl = 'http://localhost:8080/platillos';
  private pedidoUrl = 'http://localhost:8080/pedidos/completado';

  constructor(private http: HttpClient) {}

  getPlatillos(): Observable<Platillo[]> {
    return this.http.get<Platillo[]>(this.apiUrl);
  }

  addPlatillo(platillo: Platillo): Observable<Platillo> {
    return this.http.post<Platillo>(this.apiUrl, platillo);
  }

  updatePlatillo(id: number, platillo: Platillo): Observable<Platillo> {
    return this.http.put<Platillo>(`${this.apiUrl}/${id}`, platillo);
  }

  deletePlatillo(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  notificarPedido(pedidoId: number, estado: string): Observable<any> {
    return this.http.post(this.pedidoUrl, {
      pedido_id: pedidoId,
      estado: estado
    });
  }
}
