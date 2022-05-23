import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LeaderComponent } from './pages/leader/leader.component';
import { MemberComponent } from './pages/member/member.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ListUserComponent } from './components/users/list-user/list-user.component';
import { ListProjectAdminComponent } from './components/projects/list-project-admin/list-project-admin.component';
import { AddProjectComponent } from './components/projects/add-project/add-project.component';
import { ListTaskAdminComponent } from './components/tasks/list-task-admin/list-task-admin.component';
import { AddTaskComponent } from './components/tasks/add-task/add-task.component';

@NgModule({
    declarations: [
        AppComponent,
        RegisterComponent,
        LoginComponent,
        AdminComponent,
        LeaderComponent,
        MemberComponent,
        SidebarComponent,
        DashboardComponent,
        ListUserComponent,
        ListProjectAdminComponent,
        AddProjectComponent,
        ListTaskAdminComponent,
        AddTaskComponent,
    ],
    imports: [
        BrowserModule, 
        AppRoutingModule, 
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
