import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: any = null;
  recipeId: number = null;
  recipeIngredients: string[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.recipeId = +this.route.snapshot.params.id;
    this.apiService.getRecipe(this.recipeId).subscribe((data: any) => {
      this.recipe = data.meals[0];
    });
  }

  public routeToHome(): void {
    this.router.navigate(['./home']);
  }

  get recipeName(): string { return this.recipe ? this.recipe.strMeal : null; }
  get recipeImg(): any { return this.recipe ? this.recipe.strMealThumb : null; }
  get recipeInstructions(): string { return this.recipe ? this.recipe.strInstructions : null; }

  /*The following repetitive code here, and in this component's html, is due to the
  unusual nature of the API where the ingredients are not available as an array */

  get recipeIngredient1(): string { return this.recipe ? this.recipe.strIngredient1 : null; }
  get recipeIngredient2(): string { return this.recipe ? this.recipe.strIngredient2 : null; }
  get recipeIngredient3(): string { return this.recipe ? this.recipe.strIngredient3 : null; }
  get recipeIngredient4(): string { return this.recipe ? this.recipe.strIngredient4 : null; }
  get recipeIngredient5(): string { return this.recipe ? this.recipe.strIngredient5 : null; }
  get recipeIngredient6(): string { return this.recipe ? this.recipe.strIngredient6 : null; }
  get recipeIngredient7(): string { return this.recipe ? this.recipe.strIngredient7 : null; }
  get recipeIngredient8(): string { return this.recipe ? this.recipe.strIngredient8 : null; }
  get recipeIngredient9(): string { return this.recipe ? this.recipe.strIngredient9 : null; }
  get recipeIngredient10(): string { return this.recipe ? this.recipe.strIngredient10 : null; }
  get recipeIngredient11(): string { return this.recipe ? this.recipe.strIngredient11 : null; }
  get recipeIngredient12(): string { return this.recipe ? this.recipe.strIngredient12 : null; }
  get recipeIngredient13(): string { return this.recipe ? this.recipe.strIngredient13 : null; }
  get recipeIngredient14(): string { return this.recipe ? this.recipe.strIngredient14 : null; }
  get recipeIngredient15(): string { return this.recipe ? this.recipe.strIngredient15 : null; }
  get recipeIngredient16(): string { return this.recipe ? this.recipe.strIngredient16 : null; }
  get recipeIngredient17(): string { return this.recipe ? this.recipe.strIngredient17 : null; }
  get recipeIngredient18(): string { return this.recipe ? this.recipe.strIngredient18 : null; }
  get recipeIngredient19(): string { return this.recipe ? this.recipe.strIngredient19 : null; }
  get recipeIngredient20(): string { return this.recipe ? this.recipe.strIngredient20 : null; }

  get recipeIngredientMeasure1(): string { return this.recipe ? this.recipe.strMeasure1 : null; }
  get recipeIngredientMeasure2(): string { return this.recipe ? this.recipe.strMeasure2 : null; }
  get recipeIngredientMeasure3(): string { return this.recipe ? this.recipe.strMeasure3 : null; }
  get recipeIngredientMeasure4(): string { return this.recipe ? this.recipe.strMeasure4 : null; }
  get recipeIngredientMeasure5(): string { return this.recipe ? this.recipe.strMeasure5 : null; }
  get recipeIngredientMeasure6(): string { return this.recipe ? this.recipe.strMeasure6 : null; }
  get recipeIngredientMeasure7(): string { return this.recipe ? this.recipe.strMeasure7 : null; }
  get recipeIngredientMeasure8(): string { return this.recipe ? this.recipe.strMeasure8 : null; }
  get recipeIngredientMeasure9(): string { return this.recipe ? this.recipe.strMeasure9 : null; }
  get recipeIngredientMeasure10(): string { return this.recipe ? this.recipe.strMeasure10 : null; }
  get recipeIngredientMeasure11(): string { return this.recipe ? this.recipe.strMeasure11 : null; }
  get recipeIngredientMeasure12(): string { return this.recipe ? this.recipe.strMeasure12 : null; }
  get recipeIngredientMeasure13(): string { return this.recipe ? this.recipe.strMeasure13 : null; }
  get recipeIngredientMeasure14(): string { return this.recipe ? this.recipe.strMeasure14 : null; }
  get recipeIngredientMeasure15(): string { return this.recipe ? this.recipe.strMeasure15 : null; }
  get recipeIngredientMeasure16(): string { return this.recipe ? this.recipe.strMeasure16 : null; }
  get recipeIngredientMeasure17(): string { return this.recipe ? this.recipe.strMeasure17 : null; }
  get recipeIngredientMeasure18(): string { return this.recipe ? this.recipe.strMeasure18 : null; }
  get recipeIngredientMeasure19(): string { return this.recipe ? this.recipe.strMeasure19 : null; }
  get recipeIngredientMeasure20(): string { return this.recipe ? this.recipe.strMeasure20 : null; }


}


