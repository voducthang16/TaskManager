import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from '../../../interfaces/users'

@Component({
    selector: 'app-list-user',
    templateUrl: './list-user.component.html',
    styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
    listUser: Users[] = [];
    constructor(private UsersService: UsersService) {

    }
    area(value: string) {
        if (value == 'south') {
            return 'Nam';
        } else if (value == 'north') {
            return 'Bắc'
        } else {
            return 'Trung'
        }
    }
    role(value: number) {
        if (value == 0) {
            return 'Quản trị viên';
        } else if (value == 1) {
            return 'Trưởng nhóm'
        } else {
            return 'Thành viên'
        }
    }
    ngOnInit() {
        this.UsersService.getUserList().subscribe((list: any) => {
            this.listUser = list;
        })
    }
}
