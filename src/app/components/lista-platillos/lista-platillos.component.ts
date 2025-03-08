import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlatilloService, Platillo } from '../../services/platillo.service';

@Component({
  selector: 'app-lista-platillos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-platillos.component.html',
  styleUrls: ['./lista-platillos.component.css'],
})
export class ListaPlatillosComponent implements OnInit {
  platillos: Platillo[] = [];

  constructor(private platilloService: PlatilloService) {}

  ngOnInit() {
    this.obtenerPlatillos();
  }

  obtenerPlatillos() {
    this.platilloService.getPlatillos().subscribe((data) => {
      this.platillos = data;
    });
  }

  eliminarPlatillo(id: number) {
    this.platilloService.deletePlatillo(id).subscribe(() => {
      this.obtenerPlatillos();
    });
  }
}
