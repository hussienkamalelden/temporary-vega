import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient) { }

  createRequest(apiUrl: string, data: any): Observable<any> {
    return this.http.post(apiUrl, data);
  }

}
