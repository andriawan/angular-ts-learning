import { Component, OnInit, state } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  email: string;
  age: number;
  address: Address;
  hobbies: string[];
  hello: any;
  isEdit: boolean;

  constructor(private dataService: DataService) {
    console.log('constructor run...');
  }

  ngOnInit() {
    console.log('ngOnInit run...');
    this.name = 'andriawan';
    this.age = 23;
    this.email = 'andriawan2014@gmail.com';
    this.address = {
      city : 'Jember',
      state : 'Kaliwates',
      street : 'Raden patah'
    };
    this.hobbies = ['Coding', 'Loving', 'Learning'];
  }

  onClick() {
    this.name = 'Muhammad';
    this.hobbies.push('new Hello');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }

  deleteHobby(hobby) {
    for (let i = 0; i < this.hobbies.length; i++) {
      if (this.hobbies[i] === hobby) {
        this.hobbies.splice(i, 1);
      }
    }
  }

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }

}

interface Address {
  street: string;
  city: string;
  state: string;
}
