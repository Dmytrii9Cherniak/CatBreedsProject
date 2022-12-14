import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRoutingComponents, AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { CatService } from './services/cat.service';
import {NgxPaginationModule} from 'ngx-pagination';
import { CatInterceptor } from './interceptors/cat.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {breedReducer} from "./store/breeds.reducer";
import {BreedEffects} from "./store/breeds.effects";
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";

@NgModule({
  declarations: [
    AppComponent,
    appRoutingComponents,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxPaginationModule,
    StoreModule.forRoot({ breeds: breedReducer}),
    EffectsModule.forRoot([BreedEffects])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CatService,
    { provide:
      HTTP_INTERCEPTORS,
      useClass: CatInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
