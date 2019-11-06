import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';
@Injectable({
  providedIn: 'root'
})
export class MakeUpService {

  
 constructor(private httpClient: HttpClient) { }

   PHP_API_SERVER = "http://192.168.0.107/bodyluxe/nl";

   readTask(){
       return this.httpClient.get(`${this.PHP_API_SERVER}`);
   }
}
