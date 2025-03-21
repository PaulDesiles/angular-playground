import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Brocoli } from "../components/models";
import { Observable } from "rxjs";

const baseUrl = 'https://650b0199dfd73d1fab0966d0.mockapi.io/api/brocoli';

@Injectable({ providedIn: 'root' })
export class BrocoliApiService {
  readonly #http = inject(HttpClient);

  public list$(): Observable<Brocoli[]> {
    return this.#http.get<Brocoli[]>(baseUrl);
  }

  public get$(id: number): Observable<Brocoli> {
    return this.#http.get<Brocoli>(`${baseUrl}/${id}`);
  }

  public post$(brocoli: Brocoli): Observable<Brocoli> {
    return this.#http.post<Brocoli>(baseUrl, brocoli);
  }
  
  public put$(id: number, brocoli: Partial<Brocoli>): Observable<Brocoli> {
    return this.#http.put<Brocoli>(`${baseUrl}/${id}`, brocoli);
  }
}