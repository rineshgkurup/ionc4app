import { Component, OnInit, Input } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() name: string;

  constructor(private datePicker: DatePicker) { }

  ngOnInit() {}
  
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
