import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/models/Recipe';
import { RecipeServices } from '../services/recipe-services.service';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrls: ['./all-recipes.component.scss']
})
export class AllRecipesComponent implements OnInit {
arr:Recipe[]
  constructor(public recipeSrv:RecipeServices) {
    this.recipeSrv.recipeArr.subscribe(
      data=>{
        this.arr=data;
        console.log(this.arr)
      })
   }
  ngOnInit(): void {
    
    
  }
}
