import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { Areas } from 'src/app/interfaces/areas';
import { Router } from '@angular/router';
import { HttpResponse } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    providers: [LoginComponent]
})
export class RegisterComponent implements OnInit {
    constructor(private RegisterService: RegisterService, private router: Router, private user: LoginComponent) {

    }
    listAreas: Areas[] = [
        {
            value: 'north',
            name: 'Bắc'
        },
        {
            value: 'central',
            name: 'Trung'
        },
        {
            value: 'south',
            name: 'Nam'
        },
    ]
    ngOnInit(): void {
        if (this.user.getUserType()) {
            this.router.navigate(['/'])
        }
    }
    createUser(e: any) {
        e.preventDefault();
        const lastName = <HTMLInputElement>document.querySelector('#last-name');
        const firstName = <HTMLInputElement>document.querySelector('#first-name');
        const email = <HTMLInputElement>document.querySelector('#email');
        const password = <HTMLInputElement>document.querySelector('#password');
        const area =  <HTMLInputElement>document.querySelector('input[name="area"]:checked');
        return this.RegisterService.createUser(lastName.value, firstName.value, email.value, password.value, area.value)
        .subscribe(() => {
            this.router.navigate(['/login'])
        })
    }
}
