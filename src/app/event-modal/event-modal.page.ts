import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ModalController, NavController, NavParams, ToastController } from '@ionic/angular';
import * as moment from 'moment';
import { AuthService } from '../auth.service';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.page.html',
  styleUrls: ['./event-modal.page.scss'],
})
export class EventModalPage implements OnInit {

  eventForm: FormGroup;
  eventId: any;

  constructor(public navController: NavController, private navParams: NavParams,
    private modalController: ModalController, private firestore: AngularFirestore,
     private auth: AuthService, private formBuilder: FormBuilder, private toastController: ToastController,
     private eventService: EventService) {

      this.eventId = this.navParams.get('id');

      this.eventForm = formBuilder.group({
        'id': this.eventId,
        'title': '',
        'startTime': '',
        'endTime': '',
        'allDay': ''
      });

   }

  ngOnInit() {
    //if event exists
    if(this.eventId!=null){
      //set existing data to modal
      this.eventForm.controls.title.setValue(this.navParams.get('title'));
      this.eventForm.controls.startTime.setValue(moment(this.navParams.get('startTime')).format());
      this.eventForm.controls.endTime.setValue(moment(this.navParams.get('endTime')).format());
      this.eventForm.controls.allDay.setValue(this.navParams.get('allDay'));
    }
    //if user wants to create new event
    else{
      //set only the selected date for creating of new event
      let preselectedDate = moment(this.navParams.get('selectedDate')).format();
      this.eventForm.controls.startTime.setValue(preselectedDate);
      this.eventForm.controls.endTime.setValue(preselectedDate);
    }
  }

  cancel() {
    this.modalController.dismiss();
  }
 
  //dismiss modal and pass back event
  save() {
    var event: any;
    event = {
      'id': this.eventForm.value.id,
      'title': this.eventForm.value.title,
      'startTime': this.eventForm.value.startTime,
      'endTime': this.eventForm.value.endTime,
      'allDay': this.eventForm.value.allDay
    }

    this.modalController.dismiss(event);
    const toast = this.toastController.create({
      message: 'Event saved',
      duration: 3000,
      position: 'bottom'
      }).then(alert => alert.present());
  }

  delete(){
    this.eventService.deleteEvent(this.eventForm.value.id);
    this.modalController.dismiss();
    const toast = this.toastController.create({
      message: 'Event deleted',
      duration: 3000,
      position: 'bottom'
      }).then(alert => alert.present());
  }

}
