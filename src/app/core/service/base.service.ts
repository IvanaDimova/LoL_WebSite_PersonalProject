import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class BaseService {


    constructor(private http: HttpClient) {
    }

    get<T>(url: string): Observable<T> {
        return this.http.get<T>(url);
    }

    getWithResponse<T>(url: string): Observable<any> {
        return this.http.get<T>(url, { observe: 'response' });
    }

    post<T>(url: string, data: any): Observable<T> {
        return this.http.post<T>(url, data);
    }

    postWithResponse(url: string, data: any): Observable<any> {
        return this.http.post(url, data, { observe: 'response' });
    }

    put<T>(url: string, data: any): Observable<T> {
        return this.http.put<T>(url, data);
    }

    delete<T>(url: string): Observable<T> {
        return this.http.delete<T>(url);
    }

}

