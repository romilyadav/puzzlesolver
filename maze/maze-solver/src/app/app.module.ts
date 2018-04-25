import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { MaterialModule } from './app.material.module';
import { AppRoutingModule } from './app.routing.module';
import { MazeCreatorComponent } from './maze-creator/maze-creator.component';
import { MazeResolverComponent } from './maze-resolver/maze-resolver.component';
import { AppDataService } from './app-data.service';
import { MazeResolverService } from './maze-resolver/service/maze-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    MazeCreatorComponent,
    MazeResolverComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppDataService, MazeResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
