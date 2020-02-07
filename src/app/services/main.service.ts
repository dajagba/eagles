import { Injectable } from '@angular/core';
import {Skill} from './models'
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }
  getSkills(): Observable<Skill[]> {
    //Fetches an array of all the skills for the user
   // return this.http.get<Hero[]>(this.heroesUrl)
  }
  addSkills
}
