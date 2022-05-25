import { Injectable } from '@angular/core';
import { WebRequestService } from '../web-request.service';

@Injectable({
    providedIn: 'root'
})
export class TasksService {
    constructor(private WebRequestService: WebRequestService) {}

    createTask(projectId: string, name: string, describe: string, memberId: string, 
        priority: number, status: number) {
        return this.WebRequestService.post('tasks', {
            projectId,
            name,
            describe,
            memberId,
            priority,
            status,
        })
    }
}