import { Component, OnInit } from '@angular/core';
// importando el servicio
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  // declarando un parametro del tipo servicion
  constructor( private serviceHeroes: HeroesService, private router: Router) { }

  ngOnInit() {
    this.heroes = this.serviceHeroes.getHeroes();
  }
  // funcion padre
  verHeroe(id: number) {
    this.router.navigate(['/heroe', id]);
  }
}
