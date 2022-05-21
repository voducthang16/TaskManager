import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';
@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    providers: [LoginComponent]
})
export class SidebarComponent implements OnInit {
    constructor(private router: Router, private user: LoginComponent) {

    }
    userType: any = {};
    role: number = 0;
    href: string = '';
    ngOnInit(): void {
        this.href = this.router.url;
        this.user.userType.subscribe(value => this.userType = value)
        if (!this.userType) {
            this.router.navigate(['/login'])
        } else {
            this.role = this.userType.role;
        }
        setTimeout(() => {
            this.activeSidebarItem();
        }, 1)
    }
    @Output () newItemEvent = new EventEmitter<string>();
    activeSidebarItem() {
        let itemElements = document.querySelectorAll('.item');
        let defaultItem: HTMLElement;
        itemElements.forEach((item, index) => {
            item.addEventListener('click', () => {
                defaultItem = document.querySelector('.item.default-active')!;
                defaultItem.classList.remove('default-active');
                itemElements[index].classList.add('default-active');
                this.newItemEvent.emit(itemElements[index].getAttribute('data-component')!)
            })
        })
    }
}
