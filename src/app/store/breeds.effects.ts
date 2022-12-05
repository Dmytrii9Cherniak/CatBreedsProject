import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from 'rxjs';
import {CatService} from "../services/cat.service";
import {getBreeds, getBreedsSuccess} from "./breed.action";

@Injectable()
export class BreedEffects{

  constructor(private action: Actions, private catService: CatService){}

  loadBreed = createEffect( () =>
    this.action.pipe(
      ofType(getBreeds),
      exhaustMap(() => this.catService.getAllBreeds().pipe(
        map( (breeds) => getBreedsSuccess({breeds}))
      ))
    )
  );

}
