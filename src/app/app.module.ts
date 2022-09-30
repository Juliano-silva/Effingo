import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { HeaderComponent } from './components/Principal/header/header.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { HomeComponent } from './components/home/home.component';
import { ApiComponent } from './components/api/api.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule } from '@angular/material/sidenav'
import {MatToolbarModule } from '@angular/material/toolbar'
import {MatButtonModule } from '@angular/material/button'
import {MatIconModule } from '@angular/material/icon'
import {MatDividerModule } from '@angular/material/divider';
import { FooterComponent } from './components/footer/footer.component';
import { StoryComponent } from './components/story/story.component'
@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    HeaderComponent,
    PerfilComponent,
    HomeComponent,
    ApiComponent,
    FooterComponent,
    StoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
