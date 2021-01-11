import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, BehaviorSubject } from 'rxjs';
import {map, catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})

export class ObjectService {
    
    constructor(private httpClient: HttpClient) {}

}