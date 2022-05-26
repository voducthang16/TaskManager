import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { Areas } from 'src/app/interfaces/areas';
import { RegisterService } from 'src/app/services/register.service';
@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
    constructor(
        private RegisterService: RegisterService,
        private AppComponent: AppComponent
    ) {}

    ngOnInit(): void {}
    listAreas: Areas[] = this.AppComponent.listAreas;
    @Output () hideModal = new EventEmitter<boolean>();
    addUser(e: any) {
        e.preventDefault();
        const lastName = <HTMLInputElement>document.querySelector('#last-name');
        const firstName = <HTMLInputElement>document.querySelector('#first-name');
        const email = <HTMLInputElement>document.querySelector('#email');
        const area = <HTMLSelectElement>document.querySelector('#area');
        const role = <HTMLSelectElement>document.querySelector('#role');
        const status: number = 1;
        const password: string = 'default'
        this.RegisterService.createUser(lastName.value, firstName.value, email.value, password, area.value, +role.value, status)
        .subscribe(() => {
            alert('Add User Successfully');
            this.hideModal.emit(true);
        })
    }
}
