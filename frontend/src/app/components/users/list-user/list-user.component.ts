import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Users } from '../../../interfaces/users'
import { ShareDataService } from 'src/app/share-data.service';
@Component({
    selector: 'app-list-user',
    templateUrl: './list-user.component.html',
    styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
    listUser: Users[] = [];
    listUserTemp: Users[] = [];
    // receive component & data from header
    component: string | undefined;
    data: string = '';
    constructor(private UsersService: UsersService, private Data: ShareDataService) {

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
        this.Data.currentComponent.subscribe(component => this.component = component);
        this.UsersService.getUserList().subscribe((list: any) => {
            this.listUser = list;
            this.listUserTemp = list;
        })
    }
    // run when value of component is changed
    ngDoCheck() {
        if (this.component == 'list-user') {
            this.Data.currentData.subscribe(data => this.data = data);
        }
        this.filterTask()
    }
    filterTask() {
        this.listUser = this.listUserTemp.filter(user => user.firstName.toLowerCase( ).includes(this.data.toLowerCase( )))
    }
}
