import { Routes } from '@angular/router';
import { ADHealthCensusComponent } from 'app/modules/admin/ad-healthcensus/ad-healthcensus.component';
import { ADHCCensusResultsComponent } from './ad-healthcensus-forms/ad-hc-censusresults.component';
import { ADHCEmployeeCensusComponent } from './ad-healthcensus-forms/ad-hc-employeecensus.component';

export default [
    {
        path     : '',
        component: ADHealthCensusComponent,
    },
    {
        path     : '',
        component: ADHCCensusResultsComponent,
    },
    {
        path     : '',
        component: ADHCEmployeeCensusComponent,
    },    
] as Routes;