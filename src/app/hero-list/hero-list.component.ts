import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { heroVO } from '../heroVO';
import { HeroService } from '../hero.service';

@Component({
  selector: 'hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css'],
  providers:[HeroService]
})
export class HeroListComponent implements OnInit {
  
    lstHero:heroVO[]
    selectedHero: heroVO

    constructor(
      private injectHeroService: HeroService,
      private router: Router
      ){}

    onSelect(hero: heroVO): void {
      this.selectedHero = hero;
    }
    
    getHero(): void {
      this.injectHeroService.getHeroes().then(returnLst => this.lstHero = returnLst);
    }

    ngOnInit():void{
      this.getHero()
    }

    gotoDetail():void{
      this.router.navigate(['/detail', this.selectedHero.id]);
    }
}



