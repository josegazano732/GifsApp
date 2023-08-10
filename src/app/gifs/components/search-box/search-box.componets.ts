import { Component, ElementRef, ViewChild } from '@angular/core';
import { log } from 'console';
import { GifsService } from '../../services/gifs.service';

@Component({
    selector: 'gifs-search-box',
    template:  `
    <h5>Buscar:</h5>
    <input type="text" 
    class="form-control" 
    placeholder="Buscar Gifs..." 
    (keyup.enter)="searchTag()"
    #txtTagInput
    >
    `
})

export class SearchBoxComponent  {

    @ViewChild('txtTagInput') // El argumento txtTagInput referencia al #txtTagInput
    tagInput!: ElementRef<HTMLInputElement>;

    constructor( private GifsService:GifsService) { }

    searchTag() {
       const newTag=this.tagInput.nativeElement.value;
       this.GifsService.searchTag(newTag);
       this.tagInput.nativeElement.value="";
       console.log(newTag);
    }
}