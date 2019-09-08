import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class  UsersService{
    constructor(private http: Http){}

    getUser(userName: string): Observable<any>{
        return this.http.get(`https://api.github.com/users/${userName}?client_id=d8c6c03008871673f10e&client_secret=2cf32ff59cf3e961c2f61f888444ae90bb6ab242`).pipe(map((response: Response)=> response.json()));
            };
    }
