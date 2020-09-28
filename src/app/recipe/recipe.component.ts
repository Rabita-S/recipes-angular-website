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
  recipeIngredients: {
    recIngredient: string;
    recMeasure: string;
  }[] = [];

  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.recipeId = +this.route.snapshot.params.id;
    this.apiService.getRecipe(this.recipeId).subscribe((data: any) => {
      this.recipe = data.meals[0];
      for (let i = 1; i <= 20; i++) {
        if (this.getRecipeIngredient(i)) {
          this.recipeIngredients.push(this.getRecipeIngredient(i));
        }
      }
      console.log(this.recipeIngredients);
    });
  }

  public routeToHome(): void {
    this.router.navigate(['./home']);
  }

  get recipeName(): string { return this.recipe ? this.recipe.strMeal : null; }
  get recipeImg(): any { return this.recipe ? this.recipe.strMealThumb : null; }
  get recipeInstructions(): string { return this.recipe ? this.recipe.strInstructions : null; }

  /*The following repetitive code here is due to the
  unusual nature of the API where the ingredients are not available as an array */

  public getRecipeIngredient(i: number): { recIngredient: string; recMeasure: string; } {
    let ingredient = null;
    let measure = null;
    switch (i) {
      case 1: {
        if (this.recipe) {
          if (this.recipe.strIngredient1 !== '' && this.recipe.strIngredient1 !== null) {
            ingredient = this.recipe.strIngredient1;
            measure = this.recipe.strMeasure1;
          }
        }
        break;
      }
      case 2: {
        if (this.recipe) {
          if (this.recipe.strIngredient2 !== '' && this.recipe.strIngredient2 !== null) {
            ingredient = this.recipe.strIngredient2;
            measure = this.recipe.strMeasure2;
          }
        }
        break;
      }
      case 3: {
        if (this.recipe) {
          if (this.recipe.strIngredient3 !== '' && this.recipe.strIngredient3 !== null) {
            ingredient = this.recipe.strIngredient3;
            measure = this.recipe.strMeasure3;
          }
        }
        break;
      }
      case 4: {
        if (this.recipe) {
          if (this.recipe.strIngredient4 !== '' && this.recipe.strIngredient4 !== null) {
            ingredient = this.recipe.strIngredient4;
            measure = this.recipe.strMeasure4;
          }
        }
        break;
      }
      case 5: {
        if (this.recipe) {
          if (this.recipe.strIngredient5 !== '' && this.recipe.strIngredient5 !== null) {
            ingredient = this.recipe.strIngredient5;
            measure = this.recipe.strMeasure5;
          }
        }
        break;
      }
      case 6: {
        if (this.recipe) {
          if (this.recipe.strIngredient6 !== '' && this.recipe.strIngredient6 !== null) {
            ingredient = this.recipe.strIngredient6;
            measure = this.recipe.strMeasure6;
          }
        }
        break;
      }
      case 7: {
        if (this.recipe) {
          if (this.recipe.strIngredient7 !== '' && this.recipe.strIngredient7 !== null) {
            ingredient = this.recipe.strIngredient7;
            measure = this.recipe.strMeasure7;
          }
        }
        break;
      }
      case 8: {
        if (this.recipe) {
          if (this.recipe.strIngredient8 !== '' && this.recipe.strIngredient8 !== null) {
            ingredient = this.recipe.strIngredient8;
            measure = this.recipe.strMeasure8;
          }
        }
        break;
      }
      case 9: {
        if (this.recipe) {
          if (this.recipe.strIngredient9 !== '' && this.recipe.strIngredient9 !== null) {
            ingredient = this.recipe.strIngredient9;
            measure = this.recipe.strMeasure9;
          }
        }
        break;
      }
      case 10: {
        if (this.recipe) {
          if (this.recipe.strIngredient10 !== '' && this.recipe.strIngredient10 !== null) {
            ingredient = this.recipe.strIngredient10;
            measure = this.recipe.strMeasure10;
          }
        }
        break;
      }
      case 11: {
        if (this.recipe) {
          if (this.recipe.strIngredient11 !== '' && this.recipe.strIngredient11 !== null) {
            ingredient = this.recipe.strIngredient11;
            measure = this.recipe.strMeasure11;
          }
        }
        break;
      }
      case 12: {
        if (this.recipe) {
          if (this.recipe.strIngredient12 !== '' && this.recipe.strIngredient12 !== null) {
            ingredient = this.recipe.strIngredient12;
            measure = this.recipe.strMeasure12;
          }
        }
        break;
      }
      case 13: {
        if (this.recipe) {
          if (this.recipe.strIngredient13 !== '' && this.recipe.strIngredient13 !== null) {
            ingredient = this.recipe.strIngredient13;
            measure = this.recipe.strMeasure13;
          }
        }
        break;
      }
      case 14: {
        if (this.recipe) {
          if (this.recipe.strIngredient14 !== '' && this.recipe.strIngredient14 !== null) {
            ingredient = this.recipe.strIngredient14;
            measure = this.recipe.strMeasure14;
          }
        }
        break;
      }
      case 15: {
        if (this.recipe) {
          if (this.recipe.strIngredient15 !== '' && this.recipe.strIngredient15 !== null) {
            ingredient = this.recipe.strIngredient15;
            measure = this.recipe.strMeasure15;
          }
        }
        break;
      }
      case 16: {
        if (this.recipe) {
          if (this.recipe.strIngredient16 !== '' && this.recipe.strIngredient16 !== null) {
            ingredient = this.recipe.strIngredient16;
            measure = this.recipe.strMeasure16;
          }
        }
        break;
      }
      case 17: {
        if (this.recipe) {
          if (this.recipe.strIngredient17 !== '' && this.recipe.strIngredient17 !== null) {
            ingredient = this.recipe.strIngredient17;
            measure = this.recipe.strMeasure17;
          }
        }
        break;
      }
      case 18: {
        if (this.recipe) {
          if (this.recipe.strIngredient18 !== '' && this.recipe.strIngredient18 !== null) {
            ingredient = this.recipe.strIngredient18;
            measure = this.recipe.strMeasure18;
          }
        }
        break;
      }
      case 19: {
        if (this.recipe) {
          if (this.recipe.strIngredient19 !== '' && this.recipe.strIngredient19 !== null) {
            ingredient = this.recipe.strIngredient19;
            measure = this.recipe.strMeasure19;
          }
        }
        break;
      }
      case 20: {
        if (this.recipe) {
          if (this.recipe.strIngredient20 !== '' && this.recipe.strIngredient20 !== null) {
            ingredient = this.recipe.strIngredient20;
            measure = this.recipe.strMeasure20;
          }
        }
        break;
      }
      default: {
        ingredient = null;
        break;
      }
    }
    if (ingredient === null) {
      return null;
    }
    else {
      return { recIngredient: ingredient, recMeasure: measure };
    }

  }


}


