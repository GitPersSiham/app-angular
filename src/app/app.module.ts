import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { AuthService} from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { RouterModule, Routes } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditAppareilComponentComponent } from './edit-appareil-component/edit-appareil-component.component';

const appRootes: Routes = [
{ path: 'appareils', canActivate: [AuthGuard] ,component: AppareilViewComponent},
{ path: 'appareils/:id', canActivate: [AuthGuard]  , component:SingleAppareilComponent},
{ path: 'edit',canActivate: [AuthGuard], component: EditAppareilComponentComponent},
{ path: 'auth' , component: AuthComponent },
{ path: ''  , component:AppareilViewComponent},
{ path: 'not-found', component:PageNotFoundComponent},
{ path: '**', redirectTo: '/not-found'},
  
]

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    PageNotFoundComponent,
    EditAppareilComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRootes, { relativeLinkResolution: 'legacy' })
  ],
  providers: [
    AppareilService, /* instance crée */
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
