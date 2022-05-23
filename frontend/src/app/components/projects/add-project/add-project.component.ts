import { Component, OnInit } from '@angular/core';
import { ListProjectAdminComponent } from '../list-project-admin/list-project-admin.component';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';
@Component({
    selector: 'app-add-project',
    templateUrl: './add-project.component.html',
    styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
    constructor(
        private ListProjectAdminComponent: ListProjectAdminComponent,
        private UsersService: UsersService
    ) {
    }
    listLeader: Users[] = [];
    ngOnInit(): void {
        this.UsersService.getUserList().subscribe((list: any) => {
            this.listLeader = list.filter((user: any) => user.role == 1);
        })
    }
}
