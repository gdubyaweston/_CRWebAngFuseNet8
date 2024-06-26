import { Routes } from '@angular/router';
import { ADSampleTemplateComponent } from 'app/modules/admin/ad-sampletemplate/ad-sampletemplate.component';
import { ADSTDCBootstrapComponent } from './ad-sampletemplate-forms/ad-stdc-bootstrap.component';
import { ADSTDCFontAwesomeComponent } from './ad-sampletemplate-forms/ad-stdc-fontawesome.component';
import { ADSTDCGoogleFontsComponent } from './ad-sampletemplate-forms/ad-stdc-googlefonts.component';
import { ADSTDCLatestVersionComponent } from './ad-sampletemplate-forms/ad-stdc-latestversion.component';
import { ADSTDCMoreComponent } from './ad-sampletemplate-forms/ad-stdc-more.component';

export default [
    {
        path     : '',
        component: ADSampleTemplateComponent,
    },  
    {
        path     : '',
        component: ADSTDCBootstrapComponent,
    },  
    {
        path     : '',
        component: ADSTDCFontAwesomeComponent,
    },
    {
        path     : '',
        component: ADSTDCGoogleFontsComponent,
    },
    {
        path     : '',
        component: ADSTDCLatestVersionComponent,
    },
    {
        path     : '',
        component: ADSTDCMoreComponent,
    },
] as Routes;