import { Component, OnInit } from '@angular/core';
import { Projects } from 'src/app/interfaces/projects';
import { ProjectsService } from 'src/app/services/projects.service';
import { Users } from 'src/app/interfaces/users';
@Component({
    selector: 'app-list-project-admin',
    templateUrl: './list-project-admin.component.html',
    styleUrls: ['./list-project-admin.component.scss']
})
export class ListProjectAdminComponent implements OnInit {
    constructor(private ProjectsService: ProjectsService) {}
    addProjectStatus: boolean = false;
    projectDetailStatus: boolean = false;
    projectId: string = '';
    // list project
    listProject: Projects[] = [];
    listProjectTemp: Projects[] = [];
    ngOnInit(): void {
        this.closeProjectClick()
        this.ProjectsService.getAllProject().subscribe((list: any) => {
            this.listProject = list;
            this.listProjectTemp = list;
        })
    };
    // show modal add project
    addProjectClick() {
        this.addProjectStatus = !this.addProjectStatus;
    }
    renderMembers(members: Users[]) {
        let html: string = '';
        members.forEach((member) => {
            html += `<h2>${member.lastName} ${member.firstName}</h2>`
        })
        return html;
    }
    // close modal add project
    closeProjectClick() {
        document.addEventListener('click', e => {
            const target = e.target as HTMLElement;
            if (target.matches('.overlay-close.add') || target.matches('.modal.overlay.active.add')) {
                this.addProjectClick();
            }
            if (target.matches('.overlay-close.detail') || target.matches('.modal.overlay.active.detail')) {
                this.projectDetailStatus = !this.projectDetailStatus;
            }
        })
    }

    // pass project id to child components
    getProjectId(e: any) {
        this.projectDetailStatus = !this.projectDetailStatus;
        this.projectId = e.target.attributes.id.nodeValue;
    }
}
