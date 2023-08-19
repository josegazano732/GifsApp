import { Injectable } from '@angular/core';
import { promises } from 'dns';

@Injectable({providedIn: 'root'})
export class GifsService {

    private _history: string[]=[];

    private apiKey:string='lU4Otdgj2booptknVCgbaT4qioEFT1Yi';

    constructor() { }
    
    get tagsHistory(){
        return [...this._history];
    }

    private organizeHistory(tag:string){
        tag= tag.toLowerCase();
        // Si el tag esta incluido en _history entonces filtro todos los tag que son distinto regresando un nuevo arreglo
        if (this._history.includes(tag)) {
            this._history= this._history.filter((oldTag)=> oldTag != tag);
        }
        this._history.unshift(tag);
        this._history= this._history.splice(0,10);
    }
// Esta es una forma de realizarlo con javascript una peticion API
    async searchTag(tag:string):Promise <void> {
        if (tag.length===0) return; // Si el tag o el input es igual a 0 no retorna nada.
        this.organizeHistory(tag);
        //console.log(this._history);
        
        fetch('https://api.giphy.com/v1/gifs/search?api_key=lU4Otdgj2booptknVCgbaT4qioEFT1Yi&q=valorant&limit=10')
            .then( res=> res.json())
            .then( data=> console.log(data))
    }
}