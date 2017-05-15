import { Component, OnInit } from '@angular/core';
import { heroVO } from '../heroVO';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  lstHeroVO: heroVO[] = [];
  constructor(private injectHeroService: HeroService) { }
  
  ngOnInit() {
    this.injectHeroService.getHeroes()
      .then(heroes => this.lstHeroVO = heroes.slice(1, 5));
  }

}
