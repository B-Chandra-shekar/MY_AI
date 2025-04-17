import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private apiUrl = 'http://127.0.0.1:8000/api/chat';

  constructor(private http: HttpClient) { }

  // sendMessage(text: string): Observable<{ response: string }> {
  //   return this.http.post<{ response: string }>(this.apiUrl, { text });
  // }

  sendMessage(text: string): Observable<{ response: string }> {
    const session_id = 'user-001'; // Replace with dynamic ID later
    return this.http.post<{ response: string }>(this.apiUrl, { text, session_id });
  }

}
