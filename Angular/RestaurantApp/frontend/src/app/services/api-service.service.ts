import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http:HttpClient) { }

  getData():Observable<any>{
    const url = "https://api.github.com/user"

    return this.http.get<any>(url)
                   .pipe(catchError(this.handleError))
  }
  handleError(error){
    return throwError(error.message || "Server Error")
  }
}
