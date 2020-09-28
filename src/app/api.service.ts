import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
  private RECIPE_URL = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=';

  constructor(private httpClient: HttpClient) { }

  // tslint:disable-next-line: typedef
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  // tslint:disable-next-line: typedef
  public getMeals(){
    return this.httpClient.get(this.SERVER_URL).pipe(catchError(this.handleError));
  }

  // tslint:disable-next-line: typedef
  public getRecipe(id: number) {

    return this.httpClient.get(this.RECIPE_URL + id).pipe(catchError(this.handleError));
  }

}
