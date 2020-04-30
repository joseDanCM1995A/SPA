import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {
// indicando que la variable y la información puedan venir de afuera
  @Input() hero: any = {};
  @Input() index: number;
  // los datos que se enviaran del componente hijo al padre
  // esta funcion dbd ser escuchada por el padre (output)="funcion($event)"
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor( private router: Router) {
    // inicializando el output - instanciandolo
    this.heroeSeleccionado = new EventEmitter();
   }


  ngOnInit() {
  }

  verHeroe() {
    console.log(this.index);
    this.router.navigate(['/heroe', this.index]);
  // emitiendo el index por medio de la salida heroeSeleccionado
  // this.heroeSeleccionado.emit(this.index);
  }

}
