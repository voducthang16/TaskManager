import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/interfaces/tasks';
import { ListProjectAdminComponent } from '../../projects/list-project-admin/list-project-admin.component';

@Component({
    selector: 'app-list-task-admin',
    templateUrl: './list-task-admin.component.html',
    styleUrls: ['./list-task-admin.component.scss'],
    providers: [ListProjectAdminComponent]
})
export class ListTaskAdminComponent implements OnInit {
    constructor(
        private ListProjectAdminComponent: ListProjectAdminComponent
    ) {

    }
    listTask: Tasks[] = [
        {
            _id: '1aa',
            projectId: '1a',
            name: 'Phân tích yêu cầu',
            describe: 'Phân tích yêu cầu của khách hàng để team thực hiện',
            memberId: '1',
            priority: 1,
            status: 0,
        },
        {
            _id: '1ab',
            projectId: '1b',
            name: 'Tìm hiểu yêu cầu khách hàng',
            describe: 'Đến công ty và ghi nhận các yêu cầu của khách hàng',
            memberId: '2',
            priority: 5,
            status: 0,
        },
        {
            _id: '1ac',
            projectId: '1a',
            name: 'Lên kế hoạch',
            describe: 'Lên kế hoạch cho dự án',
            memberId: '4',
            priority: 1,
            status: 0,
        }
    ];
    addTaskStatus: boolean = false;
    changeTaskStatus() {
        this.addTaskStatus = !this.addTaskStatus;
    }
    getNameProject(_id: string) {
        let temp: any;
        temp = this.ListProjectAdminComponent.listProject.find(project => project._id === _id);
        return temp.name;
    }
    ngOnInit(): void {
        this.listTask = this.listTask.sort((a, b) => {
            return (a.priority > b.priority) ? -1 : ((b.priority > a.priority) ? 1 : 0);
        })
        this.closeProjectClick();
    }
    // need fix
    closeProjectClick() {
        document.addEventListener('click', e => {
            const target = e.target as HTMLElement;
            if (target.matches('.overlay-close') || target.matches('.modal.overlay.active')) {
                this.changeTaskStatus()
            }
        })
    }
}
