import {Component, Input, OnInit} from '@angular/core';
import {IBreedModel} from "../../models/catModel";

@Component({
  selector: 'app-breed',
  templateUrl: './breed.component.html',
  styleUrls: ['./breed.component.css']
})
export class BreedComponent implements OnInit {

  @Input() catBreed!: IBreedModel;
  breedImgUrl: string = 'assets/No-Image-Placeholder.svg.png';
  constructor() { }

  ngOnInit(): void {
    if(this.catBreed.image){
      this.breedImgUrl = this.catBreed.image.url;
    }
  }
}
