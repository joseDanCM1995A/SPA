import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';



@Component({
  selector: 'app-heroe-filtrado',
  templateUrl: './heroe-filtrado.component.html',
})
export class HeroeFiltradoComponent implements OnInit {
  heroes: any[] = [];
  heroeBuscado: string;
  @Input() index: number;
  @Input() hero: any = {};

  constructor( private activatedRoute: ActivatedRoute, private serviceHeroes: HeroesService, private router: Router) {

   }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      // igualando a la variable la informacion del url
      // tslint:disable-next-line: no-string-literal
      this.heroeBuscado = params['heroeBuscado'];
      // traer todas las coincidencias
      // tslint:disable-next-line: no-string-literal
      this.heroes = this.serviceHeroes.buscarHeroe(params['heroeBuscado']);
      console.log(this.heroes);
    });
  }
  verHeroe() {
    console.log(this.index);
    this.router.navigate(['/heroe', this.index]);
  }


}
