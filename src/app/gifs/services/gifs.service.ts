import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

    private _history: string[]=[];

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

    searchTag(tag:string):void {
        if (tag.length===0) return; // Si el tag o el input es igual a 0 no retorna nada.
        this.organizeHistory(tag);
       
        //console.log(this._history);
        
    }
}