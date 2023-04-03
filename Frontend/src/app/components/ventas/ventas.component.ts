import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  comidas = [
    {
      "nombre": "Enchiladas Verdes",
      "descripcion": "Tortillas de maiz enrrolladas con pollo y salsa verde",
      "imagen": "https://i.blogs.es/23068c/enchiladas-verdes-rellenas-de-queso-1-/1366_2000.jpg"
    },
    {
      "nombre": "Enchiladas Rojas",
      "descripcion": "Tortillas de maiz enrrolladas con pollo y salsa roja",
      "imagen": "https://www.deliciosi.com/images/1400/1469/enchiladas-rojas.jpg"
    },
    {
      "nombre": "Enchiladas Verdes",
      "descripcion": "Tortillas de maiz enrrolladas con pollo y salsa verde",
      "imagen": "https://i.blogs.es/23068c/enchiladas-verdes-rellenas-de-queso-1-/1366_2000.jpg"
    },
    {
      "nombre": "Enchiladas Rojas",
      "descripcion": "Tortillas de maiz enrrolladas con pollo y salsa roja",
      "imagen": "https://www.deliciosi.com/images/1400/1469/enchiladas-rojas.jpg"
    },
    {
      "nombre": "Enchiladas Verdes",
      "descripcion": "Tortillas de maiz enrrolladas con pollo y salsa verde",
      "imagen": "https://i.blogs.es/23068c/enchiladas-verdes-rellenas-de-queso-1-/1366_2000.jpg"
    },
    {
      "nombre": "Enchiladas Rojas",
      "descripcion": "Tortillas de maiz enrrolladas con pollo y salsa roja",
      "imagen": "https://www.deliciosi.com/images/1400/1469/enchiladas-rojas.jpg"
    },
    {
      "nombre": "Enchiladas Verdes",
      "descripcion": "Tortillas de maiz enrrolladas con pollo y salsa verde",
      "imagen": "https://i.blogs.es/23068c/enchiladas-verdes-rellenas-de-queso-1-/1366_2000.jpg"
    },
    {
      "nombre": "Enchiladas Rojas",
      "descripcion": "Tortillas de maiz enrrolladas con pollo y salsa roja",
      "imagen": "https://www.deliciosi.com/images/1400/1469/enchiladas-rojas.jpg"
    },
    {
      "nombre": "Enchiladas Verdes",
      "descripcion": "Tortillas de maiz enrrolladas con pollo y salsa verde",
      "imagen": "https://i.blogs.es/23068c/enchiladas-verdes-rellenas-de-queso-1-/1366_2000.jpg"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
