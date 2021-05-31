import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserRegistrationService } from './user-registration.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchDeleteComponent } from './search-delete/search-delete.component';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

// import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    SearchDeleteComponent,
    HomeComponent,
    // UpdateComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    
  
  ],
  providers: [UserRegistrationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
