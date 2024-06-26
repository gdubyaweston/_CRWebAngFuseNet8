import { Routes } from '@angular/router';
import { ADClosingRoomComponent } from './ad-closingroom.component';
import { ADCRAllComponent } from './ad-closingroom-forms/ad-cr-all.component';
import { ADCRClosedComponent } from './ad-closingroom-forms/ad-cr-closed.component';
import { ADCROpenComponent } from './ad-closingroom-forms/ad-cr-open.component';
import { ADCRSearchComponent } from './ad-closingroom-forms/ad-cr-search.component';
//import { ADClosingRoomComponent } from 'app/modules/admin/ad-closingroom/ad-closingroom.component';

export default [
    {
        path     : '',
        component: ADClosingRoomComponent,
    },
    {
        path     : '',
        component: ADCRAllComponent,
    },
    {
        path     : '',
        component: ADCRClosedComponent,
    }, 
    {
        path     : '',
        component: ADCROpenComponent,
    },
    {
        path     : '',
        component: ADCRSearchComponent,
    },    
] as Routes;