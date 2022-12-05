import { createAction, props } from "@ngrx/store";
import {IBreedModel} from "../models/catModel";

export const getBreeds = createAction('[Breed] Get Breed');
export const getBreedsSuccess = createAction(
  '[Breed] Get Breed success',
  props<{ breeds: ReadonlyArray<IBreedModel>}>()
);
