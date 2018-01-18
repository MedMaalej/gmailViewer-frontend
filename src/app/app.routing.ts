
import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MailComponent } from './components/mail.component';
import { MailDetailsComponent } from './components/mail-details.component';

const routes: Routes = [
    { path: 'gmails', component: MailComponent },
    {
        path: 'gmails/:msgId',
        component: MailDetailsComponent,
    }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);