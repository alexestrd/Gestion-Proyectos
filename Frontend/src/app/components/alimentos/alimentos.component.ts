import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.component.html',
  styleUrls: ['./alimentos.component.css']
})
export class AlimentosComponent implements OnInit {

  listaalimentos = [
    {
      "id": 1,
      "nombre": "Jitomate",
      "cantidad": 15,
      "descripcion": "aporta importantes nutrimentos como las vitaminas C, A, B1, B2, minerales como el potasio, calcio, fósforo, sodio, agua y fibra. Contiene licopenos que le aportan su color rojo característico, que tienen un alto poder antioxidante, protegiendo a las células de nuestro cuerpo del envejecimiento.",
      "imagen":"https://www.lacentraldeabasto.com/169-large_default/jitomate-bola-500gr.jpg"
    },
    {
      "id": 2,
      "nombre": "Cebolla",
      "cantidad": 15,
      "descripcion": "es una planta herbácea bienal perteneciente a la familia de las amarilidáceas. Es la especie más cultivada del género Allium, el cual contiene varias especies que se denominan «cebollas» y que se cultivan como alimento.",
      "imagen": "https://calimaxmx.vtexassets.com/arquivos/ids/196628/46664.jpg?v=637545592459100000"
    },
    {
      "id": 3,
      "nombre": "Huevo",
      "cantidad": 40,
      "descripcion": "Los huevos de las aves constituyen un alimento habitual en la alimentación de los humanos. Se presentan protegidos por una cáscara y son ricos en proteínas y lípidos.",
      "imagen": "https://www.edualimentaria.com/images/huevos/huevos.jpg"
    },
    {
      "id": 4,
      "nombre": "Queso Oaxaca",
      "cantidad": 15,
      "descripcion": "Los huevos de las aves constituyen un alimento habitual en la alimentación de los humanos. Se presentan protegidos por una cáscara y son ricos en proteínas y lípidos.",
      "imagen": "https://portalechero.com/wp-content/uploads/2023/01/queso-oaxaca-shutterstock.jpg"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
