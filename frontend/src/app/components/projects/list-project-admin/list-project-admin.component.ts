import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/interfaces/projects';

@Component({
    selector: 'app-list-project-admin',
    templateUrl: './list-project-admin.component.html',
    styleUrls: ['./list-project-admin.component.scss']
})
export class ListProjectAdminComponent implements OnInit {
    constructor() {}
    addProjectStatus: boolean = false;
    ngOnInit(): void {
        this.closeProjectClick()
    };
    // list project
    listProject: Projects[] = [
        {
            id: '1a',
            name: 'Quản lý trại heo',
            leader: '1',
            members: [
                '2',
                '3'
            ],
            price: 5000000,
            startDate: '2022-05-23',
            endDate: '2022-06-23',
            status: 0
        },
        {
            id: '1b',
            name: 'Cây xanh công viên',
            leader: '4',
            members: [
                '3'
            ],
            price: 10000000,
            startDate: '2022-05-23',
            endDate: '2022-07-17',
            status: 0
        },
        {
            id: '1c',
            name: 'Website Văn hóa Việt',
            leader: '1',
            members: [
                '5',
                '3'
            ],
            price: 6000000,
            startDate: '2022-05-23',
            endDate: '2022-08-14',
            status: 0
        },
        {
            id: '1d',
            name: 'Chăm sóc thú cưng',
            leader: '6',
            members: [
                '7',
                '5'
            ],
            price: 20000000,
            startDate: '2022-04-23',
            endDate: '2022-05-25',
            status: 0
        },
        {
            id: '1e',
            name: 'Quản lý nhà thuốc',
            leader: '4',
            members: [
                '2',
                '7'
            ],
            price: 9000000,
            startDate: '2022-05-23',
            endDate: '2022-06-13',
            status: 0
        }
    ];
    addProjectClick() {
        this.addProjectStatus = !this.addProjectStatus;
    }
    closeProjectClick() {
        document.addEventListener('click', e => {
            const target = e.target as HTMLElement;
            if (target.matches('.overlay-close') || target.matches('.modal.overlay.active')) {
                this.addProjectClick()
            }
        })
    }
}
