import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent  {
  public name:  string = 'Iroman'
  public age :  number = 45;

  public get capitalizadName() : string {
    return this.name.toUpperCase();

  }
  public getHeroDescription () :string{
    return `${this.name} - ${this.age}`

  }

  public changeHero(): void {
    this.name ='Spiderman';
  }
  public changeAge():void {
    this.age = 42;
  }

}
