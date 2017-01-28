import { Injectable } from '@angular/core';
import { Category } from '../model/category';

@Injectable()
export class CategoryService{
    categories:Category[];

    constructor(){
        this.categories = [
            new Category("Работа", 1),
            new Category("Продукты", 2),
            new Category("Машина", 3),
            new Category("Одежда", 4)
        ];
    }

    getCategories(){
        return this.categories;
    }
}
