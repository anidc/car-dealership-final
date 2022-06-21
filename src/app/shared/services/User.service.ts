import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/components/profile/User.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private httpClient: HttpClient) {

    }
    registerUser(user: User) {
        return this.httpClient.post(`${environment.serverUrl}/registration`, user)
    }

    loginUser(email: string, password: string) {
        return this.httpClient.post<User>(`${environment.serverUrl}/login`, { email, password })
    }
    get loggedUser() {
        return JSON.parse(localStorage.getItem("loggedUser") || "{}") || new User()
    }

    getUserInfo(id: number) {
        console.log(id)
        return this.httpClient.get<any[]>(environment.serverUrl + "/getUserById/" + id)
    }

    getAllUsers() {
        return this.httpClient.get(environment.serverUrl + "/getAllUsers")
    }

    banUser(user: any) {
        console.log(user)
        return this.httpClient.put(environment.serverUrl + "/banUser/" + user.id, user)
    }

    activeUser(user: any) {
        console.log(user)
        return this.httpClient.put(environment.serverUrl + "/activeUser/" + user.id, user)
    }
}