import { Injectable } from '@angular/core';
import { heroVO } from './heroVO';
import { Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
@Injectable()
export class HeroService {
  //private heroesUrl = 'http://5919141418327f001171f1bf.mockapi.io/heroes';  // URL to web api
  private heroesUrl = 'http://localhost:8080/api';  // URL to web api
  constructor(private http: Http) { }
  
  // getHeroes(): Promise<heroVO[]> {
  //   return Promise.resolve(lstHeroVO);
  //   //return new Promise(resolve => {setTimeout(()=>resolve(lstHeroVO),2000)})
  // }

  // getHeroes(){
  //   return this.http.get(this.heroesUrl).map(
  //     (res)=> res.json()
  //   )
  // }

    getHeroes():Promise<heroVO[]>{
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(res=> res.json())
               .catch(this.handleError);
  }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  // getHeroe(id: number): Promise<heroVO> {
  //   return this.getHeroes()
  //            .then(heroes => heroes.find(hero => hero.id === id));
  // }

  getHero(id: number): Promise<heroVO> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json())
      .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});
  update(hero: heroVO): Promise<heroVO> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name:String): Promise<heroVO> {
     return this.http
    .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
    .toPromise()
    .then(res => res.json())
    .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http
      .delete(url,  {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  
}
