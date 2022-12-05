import { Injectable } from '@angular/core';
import {IBreedModel, ICategoryModel} from "../models/catModel";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(private httpClient: HttpClient) {}

  public getAllBreeds(): Observable<IBreedModel[]> {
    return this.httpClient.get<IBreedModel[]>(`${environment.apiUrl}/breeds`);
  }

  public getCatPictures(searchNameId: string, limit: number, order: string): Observable<ICategoryModel[]> {
    return this.httpClient.get<ICategoryModel[]>(`${environment.apiUrl}/images/search?id=${searchNameId}&limit=${limit}&order=${order}`);
  }

}
