import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/interfaces/tasks';
import { ShareDataService } from 'src/app/share-data.service';

@Component({
    selector: 'app-list-task-admin',
    templateUrl: './list-task-admin.component.html',
    styleUrls: ['./list-task-admin.component.scss'],
})
export class ListTaskAdminComponent implements OnInit {
    // receive component & data from header
    data: string = '';
    component: string | undefined;
    constructor(
        private Data: ShareDataService
    ) {
    }
    listTaskTemp: Tasks[] = [];
    listTask: Tasks[] = []
    addTaskStatus: boolean = false;
    changeTaskStatus() {
        this.addTaskStatus = !this.addTaskStatus;
    }
    hideModal(status: boolean) {
        if (status) {
            this.changeTaskStatus();
            // this.getAllProject();
        }
    }
    ngOnInit(): void {
        this.listTaskTemp = this.listTask;
        // receive component from header
        this.Data.currentComponent.subscribe(component => this.component = component);
        // this.listTask = this.listTaskTemp.sort((a, b) => {
        //     return (a.priority > b.priority) ? -1 : ((b.priority > a.priority) ? 1 : 0);
        // })
        this.closeTaskClick();
    }
    // run when value of component is changed
    ngDoCheck() {
        if (this.component == 'list-task-admin') {
            this.Data.currentData.subscribe(data => this.data = data);
        }
        this.filterTask()
    }
    filterTask() {
        this.listTask = this.listTaskTemp.filter(task => task.name.toLowerCase( ).includes(this.data.toLowerCase( )))
    }
    // need fix
    closeTaskClick() {
        document.addEventListener('click', e => {
            const target = e.target as HTMLElement;
            if (target.matches('.overlay-close') || target.matches('.modal.overlay.active')) {
                this.changeTaskStatus()
            }
        })
    }
}
