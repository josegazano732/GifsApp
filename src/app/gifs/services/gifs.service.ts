import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gif, SearchResponse } from '../interfaces/gifs.interfaces';


@Injectable({providedIn: 'root'})
export class GifsService {

    public gifsList:Gif[]=[];

    private _history: string[]=[];
    private apiKey:string='lU4Otdgj2booptknVCgbaT4qioEFT1Yi';
    private serviceUrl:string= 'http://api.giphy.com/v1/gifs'

    constructor( private http: HttpClient ) {
        this.loadLocalStorage();
     }
    
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
        this.saveLocalStorage();
    }

    // Agrega datos que existan en _history al localStorage
    private saveLocalStorage():void {
        localStorage.setItem('history', JSON.stringify(this._history))
    }

    // Obtenemos los datos que existan en le localstorage
    private loadLocalStorage(): void{
        if (!localStorage.getItem('history')) {
            return;
        }
        this._history= JSON.parse(localStorage.getItem('history')!)

        // Retornamos el primer elemento del _history si es mayor 0
        if (this._history.length === 0) return;
        this.searchTag(this._history[0])
    }


// Esta es una forma de realizarlo con javascript una peticion API
    searchTag(tag:string):void {
        if (tag.length===0) return; // Si el tag o el input es igual a 0 no retorna nada.
        this.organizeHistory(tag);
        //console.log(this._history);
        
        const params= new HttpParams()
        .set('api_key',this.apiKey)
        .set('limit',10)
        .set('q',tag)

        this.http.get<SearchResponse>(`${this.serviceUrl}/search`,{ params })
        .subscribe(resp => {
            
            this.gifsList=resp.data;
            //console.log(this.gifsList);
            //console.log({gifs: this.gifsList});
            
            
        });
            
    }
}