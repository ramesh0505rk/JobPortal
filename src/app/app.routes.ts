import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FreelancerComponent } from './freelancer/freelancer.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'freelancer',component:FreelancerComponent},
    {path:'recruitment',component:RecruitmentComponent},
    {path:'contact',component:ContactComponent},
    {path:'about',component:AboutComponent},
];
