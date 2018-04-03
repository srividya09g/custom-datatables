import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, ObservableInput } from 'rxjs/Observable';
import { Srividya } from '../../models/srividya.model';


@Injectable()
export class SrividyaService {

  private serviceUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUser(): Observable<Srividya[]> {

    return this.http.get<Srividya[]>(this.serviceUrl);

  }

}
