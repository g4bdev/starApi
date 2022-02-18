import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//observable
import { map, Observable,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlanetsApiService {

  private url: string = `https://swapi.dev/api/planets/?format=json&limit=10&offset=0`;

  constructor(private http: HttpClient) { }

  get apiListPlanets():Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
        res.results.map( (resPlanets: any) => {
          
          this.apiGetPlanets(resPlanets.url).subscribe(
            res => resPlanets.results = res
          )
        })
      })
    )
  }

  public apiGetPlanets(url:string):Observable<any>{
    return this.http.get<any>(url).pipe(
      map(res=>res)
    )
  }
}
