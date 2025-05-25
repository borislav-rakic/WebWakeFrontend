import { HttpClient, HttpErrorResponse, HttpHandler, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import WakeResponse from "../entities/wakeResponse";
import { catchError } from "rxjs/operators";
import { Observable, throwError } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class ConfigService {
    private apiUrl = "http://localhost:8080";

    constructor(private http: HttpClient) {};

    post(endpoint: string, body: any): Observable<WakeResponse> {
        const headers = new HttpHeaders({"Content-Type": "application/json"});

        console.log(this.apiUrl + endpoint);
        return this.http.post<WakeResponse>(this.apiUrl + endpoint, body, { headers }).pipe(
            catchError(this.handleError.bind(this))
        );
    }

    private handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // Server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            console.error(`Backend returned code ${error.status}, body was: `, error.error);
        }
        console.error(errorMessage);
        return throwError(() => new Error(errorMessage)); // Rethrow it to the component
    }
}