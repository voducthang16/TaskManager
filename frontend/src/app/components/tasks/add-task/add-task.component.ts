import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Projects } from 'src/app/interfaces/projects';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';
import { ProjectsService } from 'src/app/services/projects.service';
import { TasksService} from 'src/app/services/tasks.service';
@Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
    constructor(
        private UsersService: UsersService,
        private ProjectsService: ProjectsService,
        private TasksService: TasksService
    ) {

    }
    @Output () hideModal = new EventEmitter<boolean>();
    listProject: Projects[] = [];
    listMember: Users[] = [];
    ngOnInit(): void {
        this.UsersService.getUserList().subscribe((list: any) => {
            this.listMember = list.filter((user: any) => user.role == 2);
        })
        this.ProjectsService.getAllProject().subscribe((list: any) => {
            this.listProject = list;
        })
    }
    createTask(e: any) {
        e.preventDefault();
        const name = <HTMLInputElement>document.querySelector('#name');
        const describe = <HTMLInputElement>document.querySelector('#describe');
        const project =  <HTMLSelectElement>document.querySelector('#project');
        const member =  <HTMLSelectElement>document.querySelector('#member');
        const priority = <HTMLInputElement>document.querySelector('#priority');
        const status =  <HTMLInputElement>document.querySelector('input[name="status"]:checked');
        return this.TasksService.createTask(project.value, name.value, describe.value, member.value, +priority.value, +status.value)
        .subscribe(() => {
            alert('Create Task Successfully');
            this.hideModal.emit(true);
        })
    }
}
