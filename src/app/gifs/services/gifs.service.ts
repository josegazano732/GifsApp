import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class GifsService {

    private _history: string[]=[];

    constructor() { }
    
    get tagsHistory(){
        return [...this._history];
    }

    searchTag(tag:string):void {
        this._history.unshift(tag)
    }
}