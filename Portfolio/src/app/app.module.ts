import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { SocialIconsComponent } from './components/social-icons/social-icons.component';
import { BannerComponent } from './components/banner/banner.component';
import { ExpLaboralComponent } from './components/exp-laboral/exp-laboral.component';
import { FormacionComponent } from './components/formacion/formacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { WholePageComponent } from './components/whole-page/whole-page.component';
import { AcercaDeFotoComponent } from './components/acerca-de-foto/acerca-de-foto.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialIconsComponent,
    BannerComponent,
    ExpLaboralComponent,
    FormacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    WholePageComponent,
    AcercaDeFotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      "backgroundColor": "#00e8e8",
      "backgroundGradient": true,
      "backgroundGradientStopColor": "#003267",
      "unitsColor":"#fff",
      "titleColor":"#fff",
      "outerStrokeColor":"#fff",
      "innerStrokeColor":"#fff",
      "backgroundOpacity": 0.5,
      "backgroundStrokeWidth": 10,
      "backgroundPadding": 50,
      "radius": 20,
      "space": 6,
      "toFixed": 0,
      "maxPercent": 100,
      "unitsFontWeight": "700",
      "outerStrokeGradient": true,
      "outerStrokeGradientStopColor": "#53a9ff",
      "outerStrokeWidth": 10,
      "innerStrokeWidth": 5,
      "titleFontSize": "50",
      "unitsFontSize": "25",
      "titleFontWeight": "700",
      "subtitleFontWeight": "500",
      "animationDuration": 1300,
      "showSubtitle": false,
      "responsive": false,
      "lazy": true,
      "showBackground": true,

      "imageSrc": "../../../assets/ArgPrograma.png",
      "imageHeight": 105,
      "imageWidth": 105,
      "showImage": true,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
