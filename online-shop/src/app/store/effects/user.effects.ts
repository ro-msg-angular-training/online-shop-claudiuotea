import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, switchMap } from "rxjs/operators";
import { DataService } from "src/app/data.service";
import { IUser } from "src/app/interfaces";
import { EUserActions, GetUserFail, GetUserSuccess, Login } from "../actions/user.actions";

@Injectable()
export class UserEffect{
    
    //actions to listen on them and the service I use to get data
    constructor(
        private actions$ : Actions,
        private dataService : DataService
    ){}
    
    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType<Login>(EUserActions.Login),
            switchMap((value) =>
                this.dataService.login(value.payload)
            ),
            switchMap((user:IUser) => of(new GetUserSuccess(user))),
            catchError(err=> of(new GetUserFail(err)))
        )
    );
}