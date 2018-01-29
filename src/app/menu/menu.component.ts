import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { ViewEncapsulation } from '@angular/core';

import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  
  dishes: Dish[];

  selectedDish: Dish;
  constructor(private dishService: DishService) { }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

  onSelect(dish: Dish){
    if (this.selectedDish == dish){
      this.selectedDish = null;
    }
    else {
      this.selectedDish = dish;
    }
    
  }

}
