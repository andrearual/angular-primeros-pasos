import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

 @Input()
 public characterList : Character[] = [{ // si no se le manda nada, viene vacío desde el padre, est sería el valor por defecto
  name: 'Trucks',
  power: 10
 }];

 @Output()
 public onDelete: EventEmitter <string> = new EventEmitter();
 //public onDelete = new EventEmitter<number>();


 public onDeleteCharacterById(id? : string) : void {
  // TODO: Emitir el ID del personaje

  if ( !id ) return;
  this.onDelete.emit( id);

  console.log({id});
 }

}
