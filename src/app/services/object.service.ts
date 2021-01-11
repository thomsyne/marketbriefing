import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, BehaviorSubject } from 'rxjs';
import {map, catchError} from 'rxjs/operators';

const APIKEY = 'PSUA6KSXZAGS0QWY';
const baseUrl = 'https://www.alphavantage.co/query?function=OVERVIEW&symbol=';

@Injectable({
    providedIn: 'root',
})

export class ObjectService {
    
    constructor(private httpClient: HttpClient) {}

    objectDetails(objectCode: string){
        return this.httpClient.get<ObjectModel>(
            `${baseUrl}${objectCode}&apikey=${APIKEY}`
        ).pipe();
    }

}