import { Routes } from '@angular/router';
import { ADAccountingComponent } from './ad-accounting.component';
import { ADAccountingAccountingStatementComponent } from './ad-accounting-forms/ad-accounting-accountingstatement.component';
import { ADAccountingClosingStatementComponent } from './ad-accounting-forms/ad-accounting-closingstatement.component';
//import { ADAccountingComponent } from 'app/modules/admin/ad-accounting/ad-accounting.component';

export default [
    {
        path     : '',
        component: ADAccountingComponent,
    },    
    {
        path     : '',
        component: ADAccountingAccountingStatementComponent,
    },
    {
        path     : '',
        component: ADAccountingClosingStatementComponent,
    }, 
] as Routes;