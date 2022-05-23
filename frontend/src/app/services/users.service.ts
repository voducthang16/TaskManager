import { Injectable } from '@angular/core';
import { WebRequestService } from '../web-request.service';
@Injectable({
    providedIn: 'root'
})
export class UsersService {
    constructor(private WebRequestService: WebRequestService) {

    }
    getUserList() {
        return this.WebRequestService.get('users');
    }
}