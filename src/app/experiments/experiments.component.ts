import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  experimentBeingEdited: string = null;

  experiments: string[] = [
    'Mars soil sample',
    'Plant growth in habitat',
    'Human bone density'
  ];

  add(experiment: string){
    this.experiments.push(experiment);
  }

  edit(experiment: string) {
    this.experimentBeingEdited = experiment;
  }

  save(itemTxt: string, itemOld: string) {
    this.experiments[this.experiments.indexOf(itemOld)] = itemTxt;
    this.experimentBeingEdited = null;
  }

  remove(experiment: string) {
    let index = this.experiments.indexOf(experiment);
    this.experiments.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
  }

}
