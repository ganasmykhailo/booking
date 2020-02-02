import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs';
import {UserModel} from '../../models/user/user.model';
import {filter, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: BehaviorSubject<UserModel> = new BehaviorSubject(null);
  private isUserLoggedIn = false;
  public user$ = this.user.asObservable();

  constructor(private http: HttpClient) { }

  public isUerLoggedIn() {
    return this.isUserLoggedIn;
  }

  public logIn(name: string, password: string) {
    return this.http.get<UserModel>('').pipe(
      tap((user) => this.user.next(user)),
      filter((user) => this.isUserLoggedIn = !!user)
    );
  }
}
