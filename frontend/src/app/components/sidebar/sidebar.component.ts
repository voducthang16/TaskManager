import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
    constructor(private router: Router) {

    }
    public href: string = '';
    ngOnInit(): void {
        this.href = this.router.url;
        this.detectDefaultUrl(this.href);
    }
    detectDefaultUrl(url: string) {
        let element: HTMLElement;
        if (url === '/') {
            element = document.querySelector('.item.admin')!;
            element.classList.add('default-active');
        } else if (url === '/project') {
            element = document.querySelector('.item.project')!;
            element.classList.add('default-active');
        }
    }
}
