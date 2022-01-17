import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
 import { HomeComponent } from './home/home.component';
 import { EditServerComponent } from './servers/edit-server/edit-server.component';
 import { ServerComponent } from './servers/server/server.component';
 import { ServersComponent } from './servers/servers.component';
 import { UserComponent } from './users/user/user.component';
 import { UsersComponent } from './users/users.component';
 import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

// const AppRoutes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'users', component: UsersComponent, children:[
//     { path: ':id/:name', component: UsersComponent }
//     ] 
//   },  
//   { path: 'servers', component: ServersComponent, children: [
//     { path: ':id', component: ServerComponent },
//     { path: ':id/edit', component: EditServerComponent }
//   ] }
// ]

@NgModule({
  declarations: [
     AppComponent,
     HomeComponent,
     EditServerComponent,
     ServerComponent,
     ServersComponent,
     UserComponent,
     UsersComponent,
     PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
