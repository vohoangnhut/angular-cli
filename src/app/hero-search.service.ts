import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { heroVO }           from './heroVO';

@Injectable()
export class HeroSearchService {
  private heroesUrl = '';  // URL to web api
  constructor(private http: Http) { }

    search(term: string): Observable<heroVO[]> {
      return this.http
                .get(`http://localhost:8080/api/?name=${term}`)
                .map(response => response.json());
    }
}
