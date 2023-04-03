import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  empleados=[
    {
      "nombre": "Alexis Estrada",
      "descripcion": "Jefe Operativo",
      "imagen": "https://scontent-qro1-1.xx.fbcdn.net/v/t1.18169-9/13226849_927786837329827_8495579223783491316_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=ZuTsg--fGvwAX95-O21&_nc_ht=scontent-qro1-1.xx&oh=00_AfC6xVO_F3W1R1XE04bWa2snBjJgnAsn5o20TPzX9ziMUg&oe=6451A690"
    },
    {
      "nombre": "Job Polo",
      "descripcion": "Jefe de Cocina",
      "imagen":"https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/306356289_5513010608765171_6024559364824168566_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4hh4Ccl6bf4AX9ydwar&_nc_ht=scontent-qro1-2.xx&oh=00_AfDilTOgSWBdBqj40wrlPj4TcAll2cOKV4OEMydOZ5xX1g&oe=643008E2"
    },
    {
      "nombre": "Efren Molina",
      "descripcion": "Jefe de Meseros",
      "imagen":"https://scontent-qro1-2.xx.fbcdn.net/v/t39.30808-6/285328766_995806077961921_4624576590864455978_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=174925&_nc_ohc=QChL5i9oIdkAX_K0mvy&_nc_ht=scontent-qro1-2.xx&oh=00_AfB2GbyEQWf3awXwZVZcunFaE4npGDzgRHU3vog2aSodXw&oe=642F079C"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
