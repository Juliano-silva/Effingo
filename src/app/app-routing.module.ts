import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { PostComponent } from './components/post/post.component';
import { StoryComponent } from './components/story/story.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Post',component:PostComponent},
  {path:'Perfil',component:PerfilComponent},
  {path:'Story',component:StoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
