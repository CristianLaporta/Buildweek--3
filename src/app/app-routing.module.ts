import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminsectionComponent } from './auth/adminsection/adminsection.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginPage } from './auth/login/login.page';
import { SignupPage } from './auth/signup/signup.page';
import { HomePage } from './home/home/home.page';

const routes: Routes = [
  {
    path: 'home',

    component: HomePage,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'signup',
    component: SignupPage
  },
  {
    path: 'admin',
    component: AdminsectionComponent
  },
  {
    path: '**',
    /* component: ErrPage */
    loadChildren: () => import('./err404/err404.module').then(m => m.Err404Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
