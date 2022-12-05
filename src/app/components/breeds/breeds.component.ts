import {Component, OnDestroy, OnInit} from '@angular/core';
import {CatService} from "../../services/cat.service";
import {FormControl, FormGroup} from "@angular/forms";
import {IBreedModel} from "../../models/catModel";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.css']
})
export class BreedsComponent implements OnInit, OnDestroy {

  public countShowElementsInPage: number[] = [10, 15, 20];
  public breedsByPage: number = 10;
  public subscription: Subscription;

  public differentBreeds!: IBreedModel[];
  public page: number = 1;

  public form = new FormGroup({
    selectedListOrder: new FormControl(null),
    selectedCountElements: new FormControl(this.countShowElementsInPage[0])
  })
  constructor(private catsService: CatService) { }

  ngOnInit(): void {
    this.subscription = this.catsService.getAllBreeds().subscribe( value => {
      this.differentBreeds = value;
    });
  }

  searchCatBreeds(){
    this.breedsByPage = this.form.value.selectedCountElements as number;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
