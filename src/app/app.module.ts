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

const appRootes: Routes = [
{ path: 'appareils', component: AppareilViewComponent},
{ path: 'auth' , component: AuthComponent },
{  path: ''  , component:AppareilViewComponent}                  
  
]

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRootes)
  ],
  providers: [
    AppareilService, /* instance crée */
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
