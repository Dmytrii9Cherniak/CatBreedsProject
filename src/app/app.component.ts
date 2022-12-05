import {Component, OnInit} from '@angular/core';
import {CatService} from "./services/cat.service";
import {Store} from "@ngrx/store";
import {getBreeds} from "./store/breed.action";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private catService: CatService, private store: Store) {}

  ngOnInit() {
    this.store.dispatch(getBreeds())
  }

}
