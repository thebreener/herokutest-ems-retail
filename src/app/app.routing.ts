import { Routes, RouterModule } from '@angular/router';

import { EditorComponent } from './editor/editor.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guard';
import {CampaignviewerComponent} from "./campaignviewer/campaignviewer.component";

const appRoutes: Routes = [
  { path: '', component: CampaignviewerComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'editor', component: EditorComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' },

];

export const routing = RouterModule.forRoot(appRoutes);
