import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from './login/login.component';
import { UserService } from "./services/user.service";
import { HttpClientModule } from '@angular/common/http';
import { NativescriptBottomNavigationModule} from "nativescript-bottom-navigation/angular";




@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        HttpClientModule,
        NativescriptBottomNavigationModule,
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        UserService,
        
    ]
})
export class AppModule { }
