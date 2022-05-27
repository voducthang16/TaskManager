import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';
import { LoginComponent } from 'src/app/pages/login/login.component';
@Component({
    selector: 'app-info-user',
    templateUrl: './info-user.component.html',
    styleUrls: ['./info-user.component.scss'],
    providers: [LoginComponent]
})
export class InfoUserComponent implements OnInit {
    constructor(
        private UsersService: UsersService, 
        private user: LoginComponent,
    ) {}
    userType: any = {};
    userInfo: Users  = {
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        area: '',
        role: 0,
        status: 0
    };
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
            return 'Nhân viên'
        }
    }
    id: string = '';
    ngOnInit(): void {
        this.user.userType.subscribe(value => this.userType = value);
        this.id = this.userType.id;
        this.UsersService.getOneUser(this.id).subscribe((user: any) => this.userInfo = user[0]);
    }
}
