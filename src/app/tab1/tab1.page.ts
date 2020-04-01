import { Component } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private datePicker: DatePicker) {}

  handleClick(event){
	this.datePicker.show({
	  date: new Date(),
	  mode: 'date',
	  androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
	}).then(
	  date => console.log('Got date: ', date),
	  err => console.log('Error occurred while getting date: ', err)
	);
  }
}
