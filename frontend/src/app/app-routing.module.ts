import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
    {
        path: '',
        component: RegisterComponent
    },
    {
        path: 'register',
        component: RegisterComponent,
        data: {
            title: 'Đăng ký'
        }
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Đăng nhập'
        }
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
