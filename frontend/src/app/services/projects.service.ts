import { Injectable } from '@angular/core';
import { WebRequestService } from '../web-request.service';

@Injectable({
    providedIn: 'root'
})
export class ProjectsService {
    constructor(private WebRequestService: WebRequestService) {}

    getAllProject() {
        return this.WebRequestService.get('projects');
    }

    createProject(name: string, leader: string, members: string[], 
            price: number, startDate: string, endDate: string, status: number) {
        return this.WebRequestService.post('projects', {
            name,
            leader,
            members,
            price,
            startDate,
            endDate,
            status
        })
    }
}