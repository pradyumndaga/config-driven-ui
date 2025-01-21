import { Routes } from '@angular/router';
import { ConfigDrivenUiComponent } from '../ConfigDrivenUi/ConfigDrivenUi.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: 'config-ui',
        component: ConfigDrivenUiComponent,
    }
];
