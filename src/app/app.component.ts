import { Component } from '@angular/core';
import { EmployeeData, ListGenerator } from './shared/list-generator.service';
import { Names } from './shared/names';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

const NumRange: [number, number] = [23, 28];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngAngularOptimized';

 salesList!: EmployeeData[];
  rndList!: EmployeeData[];
  label!: string;

  findEmployeeForm : any

  constructor(
    private generator: ListGenerator ,
    private formbuilder: FormBuilder

  ) {
    this.findEmployeeForm = this.formbuilder.group({

      employeeName : [ '' , []]
    })
  }

  ngOnInit() {
    this.salesList = this.generator.generate(Names, NumRange, 10);
    this.rndList = this.generator.generate(Names, NumRange, 10);
  }

  add(list: EmployeeData[], name: string) {
    list.unshift({ label: name, num: this.generator.generateNumber(NumRange) });
  }

  remove(list: EmployeeData[], node: EmployeeData) {
    list.splice(list.indexOf(node), 1);
  }


  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  handleKey($event: any){
    console.log('input accepted')
  }

}
