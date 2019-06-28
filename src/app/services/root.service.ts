import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RootService {
    // private tasksSubject: BehaviorSubject<any>;
    public tasks: any;
    public users: any;
    public userRole: any;


    constructor(private http: HttpClient) {
        // this.tasksSubject = new BehaviorSubject<any>(null);
    }

    getAllTasks(x: number) : Observable<any> {
        x = x + 1; 
        console.log(x);
        return this.http.get<any>(
            `https://localhost:44348/api/Tasks?page=` + x);
            

        // return this.http.get<any>(`https://localhost:44348/api/Tasks/`)
        //     .pipe(map(response => {
        //         this.tasks = response;
        //         this.tasksSubject.next(this.tasks);
        //         return response;
        //     }));
    }
    getAllFilterDate(startDate:Date,endDate:Date) : Observable<any> {
        let startFormatted = null;
        let endFormatted = null;

        if (startDate == null && endDate == null) {
            return this.getAllTasks(0);
          }
        if (startDate === undefined && endDate === undefined) {
            this.getAllTasks(0);
          }
        if (startDate == null && endDate === undefined) {
            this.getAllTasks(0);
          }
        if (startDate === undefined && endDate == null) {
            this.getAllTasks(0);
          }

        if (startDate === undefined) {
            endFormatted = endDate.toISOString();
            return this.http.get<any>(
                'https://localhost:44348/api/Tasks?to=' + endFormatted);
        }
        if (startDate == null) {
            endFormatted = endDate.toISOString();
            return this.http.get<any>(
                'https://localhost:44348/api/Tasks?to=' + endFormatted);
        }
        if (endDate === undefined) {
            startFormatted = startDate.toISOString();
            return this.http.get<any>(
                'https://localhost:44348/api/Tasks?from=' + startFormatted);
        }
        if (endDate == null) {
            startFormatted = startDate.toISOString();
            return this.http.get<any>(
                'https://localhost:44348/api/Tasks?from=' + startFormatted);
        }
        startFormatted = startDate.toISOString();
        endFormatted = endDate.toISOString();
        return this.http.get<any>(
            'https://localhost:44348/api/Tasks?from=' + startFormatted +
            '&to=' + endFormatted);
    }

    getAllUsers() : Observable<any> {
        return this.http.get<any>(
            `https://localhost:44348/api/users`);

        // return this.http.get<any>(`https://localhost:44348/api/users`)
        //     .pipe(map(response => {
        //         this.users = response;
        //         this.usersSubject.next(this.users);
        //         return response;
        //     }));
    }

    
    getAllUserRoles() : Observable<any> {
        return this.http.get<any>(
            `https://localhost:44348/api/userRoles`);

        // return this.http.get<any>(`https://localhost:44348/api/users`)
        //     .pipe(map(response => {
        //         this.users = response;
        //         this.usersSubject.next(this.users);
        //         return response;
        //     }));
    }
    getUserHistory(x: number): Observable<any> {
        return this.http.get<any>(
            `https://localhost:44348/api/users/` + x);
    }

    getAllCommentsAndFilter(filter) : Observable<any> {
        const url = `${`https://localhost:44348/api/comment?filter=`}${filter}`;
        return this.http.get<any>(url,filter)

        // return this.http.get<any>(`https://localhost:44348/api/users`)
        //     .pipe(map(response => {
        //         this.users = response;
        //         this.usersSubject.next(this.users);
        //         return response;
        //     }));
    }
}