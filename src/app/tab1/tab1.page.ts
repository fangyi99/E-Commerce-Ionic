import { Component, ViewChild } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { EventModalPage } from '../event-modal/event-modal.page';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { AuthService } from '../auth.service';
import { CalendarApiService } from '../calendar-api.service';
import { Subject } from 'rxjs';
import { EventService } from '../event.service';
import { CalendarComponent } from 'ionic2-calendar';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild(CalendarComponent) myCalendar: CalendarComponent;

  refresh: Subject<any> = new Subject();
  viewTitle: string;
  eventSource = [];
  selectedDate = new Date();
  calendar = {
    mode: 'month',
    currentDate: new Date()
  };
  myEvents: any =[];
  publicHolidays: any = [];

  constructor(public navCtrl: NavController, private modalController: ModalController,
    private localNotification: LocalNotifications, private api: CalendarApiService,
    private eventService: EventService, private auth: AuthService) {

      //get all users events from firebase and display in local calendar
      this.eventService.getEvents().subscribe(data => {
        this.eventSource = [];
        this.myEvents = data;
        this.myEvents.forEach(ele => {
          let event:any = {};
          event.id = ele.id;
          event.title = ele.title;
          event.startTime = (ele.startTime).toDate();
          event.endTime = (ele.endTime).toDate();
          event.allDay = ele.allDay;
          this.eventSource.push(event);
        });
          //get all public holidays from api and display in local calendar
          this.api.getAllHolidays().subscribe((data)=> {
          this.publicHolidays = data;
          this.publicHolidays = this.publicHolidays.response.holidays;
          this.publicHolidays.forEach(ele => {
            let holiday: any = {};
            holiday.title = ele.name;
            holiday.startTime = new Date(ele.date.iso);
            holiday.endTime = new Date(ele.date.iso);
            this.eventSource.push(holiday);
          });
          //refresh calendar to make sure it is updated
          this.myCalendar.loadEvents();
        })
        })
  }

  ngOnInit(){}

  //add new event
  async addEvent() {
    //create modal and pass in selected date
    let modal = this.modalController.create(
      {
        component: EventModalPage,
        componentProps:{
          selectedDate: this.selectedDate
        }
      });
    (await modal).present();
    (await modal).onDidDismiss().then((data: any) => {
      //if data exist
      if (data) {
        //create event var
        let event = {
          title: data.data.title,
          startTime: new Date(data.data.startTime),
          endTime: new Date(data.data.endTime),
          allDay: data.data.allDay,
        };
        //add new event in database
        this.eventService.addEvent(event);
        //set notification based on event startTime
        this.set_notification(event.title, event.startTime);
      }

    });
  }

  //change month in title
  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  //edit or delete selected event
  async onEventSelected(event) {
    //disable editing or deleting of public holidays
    //NOTE: public holidays do not have id field
    if(event.id!=null){
    let modal = this.modalController.create(
      {
        component: EventModalPage,
        componentProps:{
          id: event.id,
          title: event.title,
          startTime: event.startTime,
          endTime: event.endTime,
          allDay: event.allDay,
        }
      });
    (await modal).present();
    (await modal).onDidDismiss().then((data: any) => {
      //update event only when data is available after editing and not after event is deleted 
      if (data.data) {
        let event = {
          title: data.data.title,
          startTime: new Date(data.data.startTime),
          endTime: new Date(data.data.endTime),
          allDay: data.data.allDay,
        };
        this.eventService.updateEvent(data.data.id, event);
        this.set_notification(event.title, event.startTime);
      }
    });
  }
  }

  onTimeSelected(ev) {
    this.selectedDate = ev.selectedTime;
  }

  set_notification(title, date){
    console.log(new Date(date.getTime()));
    this.localNotification.schedule({
      text: title,
      trigger: {at: new Date(date.getTime())},
      led: 'FF0000',
      sound: null
    });
  }

}
