import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { NgCalendarModule  } from 'ionic2-calendar';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    NgCalendarModule
  ],
  declarations: [Tab1Page],
  providers: [LocalNotifications]
})
export class Tab1PageModule {}
