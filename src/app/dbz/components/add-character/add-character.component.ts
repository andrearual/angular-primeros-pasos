import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  // puede elimirt cualquier cosa String, arreglo, etc
  @Output()
  public onNewCharacter: EventEmitter <Character> = new EventEmitter();

  public character : Character = {
    name : '',
    power: 0

  }
  public emitCharacter (): void {

    console.log(this.character);

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    // Limpiar o inicalizar los objetos
    // this.character.name = '';
    // this.character.power = 0;
    this.character = { name: '', power: 0};
  }

}
