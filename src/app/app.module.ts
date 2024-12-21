import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ShowProfilComponent } from './profil/show-profil/show-profil.component';
import { EditInfoProfilComponent } from './profil/edit-info-profil/edit-info-profil.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

//Auth service
import { AuthService } from "./service/auth.service";
//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MagazinesComponent } from './magazines/magazines.component';
import { ItemFilterPipe } from './magazines/item-filter.pipe';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './details/details.component';
import { AddMagazineComponent } from './Admin/add-magazine/add-magazine.component';
import { NavBarComponent } from './Admin/nav-bar/nav-bar.component';
import { UsersListComponent } from './Admin/users-list/users-list.component';
import { ErrorComponent } from './Admin/error/error.component';
import { DashboardComponent } from './Admin/dashboard/dashboard.component';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { LoginAdminComponent } from './Admin/login-admin/login-admin.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReservationListComponent } from './Admin/reservation-list/reservation-list.component';
import { RentalComponent } from './rental/rental.component';
import { LoginclubComponent } from './loginclub/loginclub.component';
import { LogininterfaceComponent } from './logininterface/logininterface.component';
import { ClubComponent } from './club/club.component';
import { AddlogiscticComponent } from './addlogisctic/addlogisctic.component';
import { DetailclubComponent } from './detailclub/detailclub.component';
import { EditprofilComponent } from './profiluser/editprofil/editprofil.component';
import { ShowprofilComponent } from './profiluser/showprofil/showprofil.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ShowProfilComponent,
    EditInfoProfilComponent,
    MagazinesComponent,
    ItemFilterPipe,
    FooterComponent,
    NavbarComponent,
    DetailsComponent,
    AddMagazineComponent,
    ReservationListComponent,
    NavBarComponent,
    UsersListComponent,
    ErrorComponent,
    DashboardComponent,
    LoginAdminComponent,
    RentalComponent,
    LoginclubComponent,
    LogininterfaceComponent,
    ClubComponent,
    AddlogiscticComponent,
    DetailclubComponent,
    EditprofilComponent,
    ShowprofilComponent


  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule, // Only required for storage features
    AngularFirestoreModule, // Only required for database features
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    Ng2SearchPipeModule,
    NgxPaginationModule,
    AngularFireAuthModule
    

    
    

  ],
  providers: [[AuthService]],
  bootstrap: [AppComponent]
})
export class AppModule { }
