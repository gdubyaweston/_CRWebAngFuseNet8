import { Routes } from '@angular/router';
import { ADVirtualComponent } from 'app/modules/admin/ad-virtual/ad-virtual.component';
import { ADVirtualACRProdTestComponent } from './ad-virtual-forms/ad-virtual-acrprodtest.component';
import { ADVirtualACRProductionComponent } from './ad-virtual-forms/ad-virtual-acrproduction.component';
import { ADVirtualAICVirtualClosingComponent } from './ad-virtual-forms/ad-virtual-aicvirtualclosing.component';
import { ADVirtualAICVirtualClosingProdTestComponent } from './ad-virtual-forms/ad-virtual-aicvirtualclosingprodtest.component';
import { ADVirtualDevComponent } from './ad-virtual-forms/ad-virtual-dev.component';
import { ADVirtualGlobalComponent } from './ad-virtual-forms/ad-virtual-global.component';
import { ADVirtualGlobalProdTestComponent } from './ad-virtual-forms/ad-virtual-globalprodtest.component';
import { ADVirtualMyGlobalVirtualComponent } from './ad-virtual-forms/ad-virtual-myglobalvirtual.component';
import { ADVirtualMyTextronVirtualComponent } from './ad-virtual-forms/ad-virtual-mytextronvirtual.component';
import { ADVirtualMyVirtualClosingComponent } from './ad-virtual-forms/ad-virtual-myvirtualclosing.component';
import { ADVirtualSandboxComponent } from './ad-virtual-forms/ad-virtual-sandbox.component';

export default [
    {
        path     : '',
        component: ADVirtualComponent,
    },    
    {
        path     : '',
        component: ADVirtualACRProdTestComponent,
    },
    {
        path     : '',
        component: ADVirtualACRProductionComponent,
    },
    {
        path     : '',
        component: ADVirtualAICVirtualClosingComponent,
    },
    {
        path     : '',
        component: ADVirtualAICVirtualClosingProdTestComponent,
    },
    {
        path     : '',
        component: ADVirtualDevComponent,
    },
    {
        path     : '',
        component: ADVirtualGlobalComponent,
    }, 
    {
        path     : '',
        component: ADVirtualGlobalProdTestComponent,
    },
    {
        path     : '',
        component: ADVirtualMyGlobalVirtualComponent,
    },
    {
        path     : '',
        component: ADVirtualMyTextronVirtualComponent,
    },
    {
        path     : '',
        component: ADVirtualMyVirtualClosingComponent,
    },
    {
        path     : '',
        component: ADVirtualSandboxComponent,
    },
] as Routes;