import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { CopyRightComponent } from './copy-right/copy-right.component';
import { PrivacyComponent } from './privacy/privacy.component';

const routes: Routes = [
  {
    path:'contact-us',
    component:ContactUsComponent
  },
  {
    path:'privacy-policy',
    component:PrivacyComponent
  },
  {
    path:'copy-right',
    component:CopyRightComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
