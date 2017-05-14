import { Injectable } from '@angular/core';
import { heroVO } from './heroVO';
import { lstHeroVO } from './mock-heroes';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api
  constructor(private http: Http) { }
  
  getHeroes(): Promise<heroVO[]> {
    return Promise.resolve(lstHeroVO);
    //return new Promise(resolve => {setTimeout(()=>resolve(lstHeroVO),2000)})
  }

  //   getHeroes(): Promise<heroVO[]> {
  //   return this.http.get(this.heroesUrl)
  //              .toPromise()
  //              .then(response => response.json().data as heroVO[])
  //              .catch(this.handleError);
  // }

  //   private handleError(error: any): Promise<any> {
  //   console.error('An error occurred', error); // for demo purposes only
  //   return Promise.reject(error.message || error);
  // }

  getHeroe(id: number): Promise<heroVO> {
    return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
  }

  // getHero(id: number): Promise<heroVO> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(response => response.json().data as heroVO)
  //     .catch(this.handleError);
  // }
}
