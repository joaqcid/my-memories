import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatDatepickerModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatCardModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatNativeDateModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { AddMemoryComponent } from './add-memory/add-memory.component';
import { ViewMemoriesComponent } from './view-memories/view-memories.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    AddMemoryComponent,
    ViewMemoriesComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    FormsModule,
    MatNativeDateModule,
    RouterModule.forRoot([
      {
        path: '', component: MyNavComponent, 
        children: [
          { path: 'add-memory', component: AddMemoryComponent },
          { path: 'view-memories', component: ViewMemoriesComponent },
          { path: '', redirectTo: 'view-memories', pathMatch: 'full' },
        ]
      },
    ]),
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
