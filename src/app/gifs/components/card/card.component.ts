import { Component, Input, OnInit } from '@angular/core';

import { Gif } from '../../interfaces/gifs.interfaces';
import { error } from 'console';


@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  @Input()
  public gifs!: Gif;

  constructor() { }

  ngOnInit(): void {
    if (!this.gifs) throw new Error ('Gif property is required')
  }

 

}
