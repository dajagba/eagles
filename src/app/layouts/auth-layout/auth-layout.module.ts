import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { TypeaheadModule } from 'ngx-type-ahead';

import { LoginComponent } from '../../pages/login/login.component';
import { RegisterComponent } from '../../pages/register/register.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { ModalComponent } from 'src/app/pages/modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    TypeaheadModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSliderModule,
    MatInputModule,
    MatMomentDateModule,
    MatIconModule,
    MatSelectModule,
    ReactiveFormsModule,
    AngularMultiSelectModule
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ModalComponent,
  ],

})
export class AuthLayoutModule { }
