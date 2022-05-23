import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/interfaces/projects';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';
import { ListProjectAdminComponent} from '../../projects/list-project-admin/list-project-admin.component'
@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.scss'],
    providers: [ListProjectAdminComponent]
})
export class AddTaskComponent implements OnInit {
    constructor(
        private ListProjectAdminComponent: ListProjectAdminComponent,
        private UsersService: UsersService
    ) {

    }
    listProject: Projects[] = [];
    listMember: Users[] = [];
    ngOnInit(): void {
        this.UsersService.getUserList().subscribe((list: any) => {
            this.listMember = list.filter((user: any) => user.role == 2);
        })
        this.listProject = this.ListProjectAdminComponent.listProject;
    }
}
