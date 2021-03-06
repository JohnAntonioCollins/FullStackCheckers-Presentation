import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class MoveService {
    public data: any;
    responseData: any = [{},{}];
    private url: string = "http://127.0.0.1:8080/playerMove";
    private initUrl: string = "http://127.0.0.1:8080/start";
    private npcUrl: string = "http://127.0.0.1:8080/npcMove";
    initialState:any ;


    constructor(private http: Http){
    }

    getInitialState(){
        return this.http.get(this.initUrl);
    }

    submitMove(firstCoordinate: string, secondCoordinate: string) {

        this.data = {
            "firstCoordinate": firstCoordinate,
            "secondCoordinate": secondCoordinate
        };
        console.log("Before new data: ")

        return this.http.post(this.url, this.data);
    }

    npcMove() {
        console.log('just started npcMove');
        return this.http.get(this.npcUrl);
    }
}