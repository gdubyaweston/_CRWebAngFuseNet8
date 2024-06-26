import { Routes } from '@angular/router';
import { ADManageComponent } from 'app/modules/admin/ad-manage/ad-manage.component';
import { ADManageOneSpanComponent } from './ad-manage-forms/ad-manage-onespan.component';

export default [
    {
        path     : '',
        component: ADManageComponent,
    },
    {
        path     : '',
        component: ADManageOneSpanComponent,
    },    
] as Routes;