import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HotelService } from './hotel.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Pipes';

  //date pipe
  dateTimeNow: string = new Date().toString();

  //for uppercase pipe
  fullName = 'lasha deisadze';

  //for currency pipe
  amount: number = 24.5;

  //for json pipe
  user: any = {
    name: 'lasha',
    surname: 'deisadze',
    age: '25',
  };

  //for async pipe
  hotelObservable$!: Observable<any>;

  //for custom pipe / textLimit
  randomText: string =
    '  Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, veniam sequi. Ut cu voluptatibus minus possimus natus placeat eaque pariatur,eveniet beatae soluta consectetur repellat, nulla eligendi perferendis earum numquam ';

  maxSymbol: number = 20;

  // for select language
  // ენის ცვლილებისთვის შევქმნათ რაღაც students ობიექტი,
  //რომელიც ვთქვათ მივიღეთ ბექიდან

  students: any = {
    name: {
      geo: 'ლაშა',
      eng: 'Lasha',
    },
    surname: {
      geo: 'დეისაძე',
      eng: 'Deisadze',
    },
    adress: {
      geo: 'მამია ასათინაის 15',
      eng: 'Mamia Asatiani Str. 15',
    },
  };

  languages: string[] = ['Georgia', 'English'];

  constructor(private http: HotelService) {}

  ngOnInit() {
    this.hotelObservable$ = this.http.getHotels();
    // localStorage['language'] = 'Georgia';
  }

  //for custom pipe / textLimit
  onShowMore() {
    this.maxSymbol = 200;
  }

  // for select language
  selectLanguage(event: any) {
    localStorage['language'] = event.value;
  }
}
