import { createReducer, on } from "@ngrx/store";
import {IBreedModel} from "../models/catModel";
import {getBreedsSuccess} from "./breed.action";

export interface BreedState{
  breeds: ReadonlyArray<IBreedModel>;
}

const initialState: ReadonlyArray<IBreedModel> = [];

export const breedReducer = createReducer(
  initialState,
  on(getBreedsSuccess, (_state, {breeds}) => [...breeds])
);
