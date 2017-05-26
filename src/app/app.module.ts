import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChatComponent } from './dashboard/chat/chat.component';
import { ApprovalComponent } from './dashboard/approval/approval.component';
import { PkbViewerComponent } from './dashboard/pkb-viewer/pkb-viewer.component';
import { MedicalInfoComponent } from './dashboard/medical-info/medical-info.component';
import { ContactsComponent } from './dashboard/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ChatComponent,
    ApprovalComponent,
    PkbViewerComponent,
    MedicalInfoComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
