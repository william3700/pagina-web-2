import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
      item=['Pelicula 1','Pelicula 2','Pelicula 3','Pelicula 4','Pelicula 5','Pelicula 6','Pelicula 7','Pelicula 8','Pelicula 9','Pelicula 10','Pelicula 11']
}
