import { Injectable } from '@angular/core';
import { v4 as uuid} from "uuid";

//console.log(v4()); //console.log(uuid());

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000
  },{
    id: uuid(),
    name: 'Goku',
    power: 9500
   },{
      id: uuid(),
      name: 'Vegeta',
      power: 5000
    }, {
      id: uuid(),
      name: 'werwerwerwer',
      power: 5000
    }
  ];

  // puede ser cuelaquier nombre
  public AddCharacter( character: Character) : void {
    // console.log('MainPage');
    // console.log(character);
    // Se peude hacer de varias formas, pero esto "...character", le indica al sistema que tome todas las propiedades de parametro 'character'
    // y las esparsa entras las propiedades de 'newCharacter', así si las propiedades cambian se agregan nuevas propiedades no afecta.
    // esto se llama el splet y debe de ir primero 'const newCharacter : Character = {...character, id : uuid() };', pero para
    // el ejemplo no fue así, por ser un ejercicio, si lo hacemos así:
    //const newCharacter : Character = {id : uuid(), name: character.name, power : character.power};
    const newCharacter : Character = {id : uuid(), ...character};

    newCharacter.name= character.name;

    this.characters.push(newCharacter);
  }
  // onDeleteCharacter(index: number): void{
  //   this.characters.splice( index , 1 );
  // }
  onDeleteCharacterById(id:string): void{
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
