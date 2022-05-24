import { Component, OnInit, Input } from '@angular/core';
import { ListProjectAdminComponent } from '../list-project-admin/list-project-admin.component';
import { ListTaskAdminComponent } from '../../tasks/list-task-admin/list-task-admin.component';
import { Projects } from 'src/app/interfaces/projects';
import { Tasks } from 'src/app/interfaces/tasks';
@Component({
    selector: 'app-project-detail',
    templateUrl: './project-detail.component.html',
    styleUrls: ['./project-detail.component.scss'],
    providers: [ListProjectAdminComponent, ListTaskAdminComponent],
})
export class ProjectDetailComponent implements OnInit {
    @Input() id: string | undefined;
    project: Projects[] = [];
    task: Tasks[] = [];
    constructor(
        private ListProjectAdminComponent: ListProjectAdminComponent,
        private ListTaskAdminComponent: ListTaskAdminComponent
    ) {}

    ngOnInit(): void {
        this.project = this.ListProjectAdminComponent.listProject.filter(project => project._id == this.id);
        this.task = this.ListTaskAdminComponent.listTask.filter(task => task.projectId == this.id);
    }
}
