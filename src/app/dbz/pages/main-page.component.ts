import { DbzService } from './../services/dbz.service';
import { Character } from './../interfaces/character.interface';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  // razón por lo que debe de ser privado es  por que si importan este mainPageComponent en otro lugar o se usa de manera
  // directa tecnicamente expodíamos todo el servicio y no debe de hacerse así o de esa manera
  constructor (private dbzService: DbzService){
  }

  get characters(): Character[]{
    return [...this.dbzService.characters]
  }

  onDeleteCharacterById(id:string): void {
    this.dbzService.onDeleteCharacterById(id);
  }

  onNewCharacter(character : Character): void {
    this.dbzService.AddCharacter(character);
  }
}


