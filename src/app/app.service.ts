import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {

constructor( private http: HttpClient) {}

public getBus(linha: string): Observable <any> {
  console.log(linha);
  return this.http.get('https://www.sistemas.dftrans.df.gov.br/gps/linha/'+ linha +'/geo/recent');

}

public exemplo(linha): Observable<any> {
  let a = Observable.interval(3000).mergeMap(a => {
    return this.http.get('https://www.sistemas.dftrans.df.gov.br/gps/linha/'+ linha +'/geo/recent');
  });
  return a;
}

}