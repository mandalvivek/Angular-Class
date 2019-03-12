import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })

export class MyjsonApi {
    constructor(private http: HttpClient){

    }

    getJsonAPI(path: string) {
        return this.http
        .get(this._getjsonUrl(path))
    }
    postJsonAPI(){

    }

    private _getjsonUrl(path: string) {
        return environment.myjsonApi + path;
    }

}