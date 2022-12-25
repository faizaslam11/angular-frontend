import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";
import { Injectable } from "@angular/core"
@Injectable({
    providedIn:"root"
})
export class CarSalesService{
    constructor(private http: HttpClient){

    }
    HttpsOptions= {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE, PUT'
        })
    };
    errorHandler(err:any){
        let errorMessage="";
        if(err.error instanceof ErrorEvent){
            errorMessage = err.error.message;
        } else {
            errorMessage = `Error Code: ${err.status}\nMessage:${err.message}`;
        }
        return throwError(errorMessage);
    }
    registerService(data: any){
        return this.http.post("localhost:8182/users/registeruser", data, this.HttpsOptions)
            .pipe(catchError(this.errorHandler))  
    }
}