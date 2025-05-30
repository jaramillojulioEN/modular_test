import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginDTO } from '../models/LoginDTO';
import { Observable } from 'rxjs';
import { AuthResponseDTO } from '../models/AuthResponseDTO';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  authapi = `${environment.apiUrl}/Users`

  constructor(private http: HttpClient)
  {}

  login(request: LoginDTO): Observable<AuthResponseDTO> {
    return this.http.post<AuthResponseDTO>(`${this.authapi}/Login`, request);
  }
}
