import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  meals = [];
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.apiService.getMeals().subscribe((data: any) => {
      this.meals = data.meals;
    });
  }

  public routeToRecipe(id: number): void {
    this.router.navigate(['./recipe/' + id]);
  }

 

}
