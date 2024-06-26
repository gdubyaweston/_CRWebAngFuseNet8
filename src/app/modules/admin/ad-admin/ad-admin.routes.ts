import { Routes } from '@angular/router';
//import { ADAdminComponent } from 'app/modules/admin/ad-admin/ad-admin.component';
import { ADAdminComponent } from './ad-admin.component';
import { ADAdminManageUsersComponent } from './ad-admin-forms/ad-admin-manageusers.component';
import { ADAdminRolesComponent } from './ad-admin-forms/ad-admin-roles.component';
import { ADAdminRPSQueueComponent } from './ad-admin-forms/ad-admin-rpsqueue.component';
import { ADAdminUserListComponent } from './ad-admin-forms/ad-admin-userlist.component';


export default [
    {
        path     : '',
        component: ADAdminComponent,
    }, 
    {
        path     : '',
        component: ADAdminManageUsersComponent,
    }, 
    {
        path     : '',
        component: ADAdminRolesComponent,
    }, 
    {
        path     : '',
        component: ADAdminRPSQueueComponent,
    },  
    {
        path     : '',
        component: ADAdminUserListComponent,
    },
] as Routes;