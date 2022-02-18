import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//observable
import { map, Observable,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleApiService {

  private url: string = `https://swapi.dev/api/people/?format=json&limit=10&offset=0`;

  constructor(private http: HttpClient) { }

  get apiListPeople():Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
        res.results.map( (resPeople: any) => {
          
          this.apiGetPeople(resPeople.url).subscribe(
            res => resPeople.results = res
          )
        })
      })
    )
  }

  public apiGetPeople(url:string):Observable<any>{
    return this.http.get<any>(url).pipe(
      map(res=>res)
    )
  }
}
