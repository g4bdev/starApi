import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//observable
import { map, Observable,tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmsApiService {

  private url: string = `https://swapi.dev/api/films/?format=json`;

  constructor(private http: HttpClient) { }

  get apiListAllFilms():Observable<any>{
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
        res.results.map( (resFilms: any) => {
          
          this.apiGetFilms(resFilms.url).subscribe(
            res => resFilms.results = res
          )
        })
      })
    )
  }

  public apiGetFilms(url:string):Observable<any>{
    return this.http.get<any>(url).pipe(
      map(res=>res)
    )
  }
}
