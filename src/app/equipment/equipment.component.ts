import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  itemBeingEdited: object = null;

  equipment: string[] = [
    'Habitat dome',
    'Drones',
    'Food containers',
    'Oxygen tanks'
  ];

  remove(item) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
  }

  add(newItem: string){
    this.equipment.push(newItem);
  }

  edit(editItem: object) {
    this.itemBeingEdited = editItem;
  }

  save(itemTxt: string, itemOld: string) {
    alert(itemTxt + " " + itemOld)
    this.equipment[this.equipment.indexOf(itemOld)] = itemTxt;
    this.itemBeingEdited = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
