import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:5000/api/user/';

@Injectable({
  providedIn: 'root',
})
export class NotesServiceService {
  constructor(private http: HttpClient) {}

  addNotes(data: any): Observable<any> {
    return this.http.post(
      API_URL + 'addnotes',
      {
        data,
      },
      { responseType: 'text' }
    );
  }

  getNotes(): Observable<any> {
    return this.http.get(API_URL + 'getnotes');
  }
}
