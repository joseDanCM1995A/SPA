import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent  {
  // declarando un objeto vcio en el que se va a cargar el heroe
  heroe: any = {};
  // declarando un parametrro paa la rutar
  constructor( private activateRoute: ActivatedRoute, private heroesService: HeroesService) {
    this.activateRoute.params.subscribe( params => {
      // obteniendo el heroe del servicio por medio del id
    // tslint:disable-next-line: no-string-literal
    this.heroe = this.heroesService.getHeroe(params['id']);
    });
  }
}
