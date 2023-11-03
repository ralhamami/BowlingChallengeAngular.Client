import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Frame } from '../models/frames-response.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getFrames(): Observable<Frame[]> {
    return this.http
      .get<Frame[]>(`${environment.apiUrl}/frames`)
      .pipe(catchError(this.handleError));
  }

  postShot(pinsKnockedDown: number | null): Observable<Frame[]> {
    return this.http
      .get<Frame[]>(`${environment.apiUrl}/frames/${pinsKnockedDown}`)
      .pipe(catchError(this.handleError));
  }

  resetFrames(): Observable<Frame[]> {
    return this.http
      .post<Frame[]>(`${environment.apiUrl}/frames/reset`, null)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain a user-friendly error message.
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
      if (error.error) {
        const errors = Object.values(error.error);
        var webapierror = '';
        errors.map((m: unknown) => {
          webapierror += m + '\n';
        });
        return throwError(() => new Error(webapierror));
      }
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
