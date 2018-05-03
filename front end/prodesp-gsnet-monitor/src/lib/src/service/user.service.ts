import { User } from "./../models/user";
import { WebStorage } from "prodesp-core";
import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  constructor(private cookieStorage: WebStorage) {}

  getUser(): User {
    const user = this.cookieStorage.get("usuario");
    if (user) return JSON.parse(user) as User;
    return {} as User;
  }
}
