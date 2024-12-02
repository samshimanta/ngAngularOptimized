import { Component , OnInit } from '@angular/core';
import { EmployeeData, ListGenerator } from './shared/list-generator.service';
import { Names } from './shared/names';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import * as Plotly from 'plotly.js-dist-min';
import { Rnd } from './data/rnd-70-27-30';
import { Sales } from './data/sales-70-27-30';

const NumRange: [number, number] = [23, 28];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngAngularOptimized';

 salesList: EmployeeData[] = Sales
  rndList: EmployeeData[] = Rnd
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
    const data: [{x: string[], y: number[], type: 'bar'}] = [{
      x: [],
      y: [],
      type: 'bar'
    }];
    const values = new Map<number, number>();
    this.salesList.concat(this.rndList).forEach(employee => {
      if (values.has(employee.num)) {
        values.set(employee.num, values.get(employee.num)! + 1);
      } else {
        values.set(employee.num, 1);
      }
    });

    for (const entity of values.entries()) {
      data[0].x.push(entity[0].toString());
      data[0].y.push(entity[1]);
    }

    Plotly.newPlot('chart', data);
    this.salesList = this.generator.generate(Names, NumRange, 10);
    this.rndList = this.generator.generate(Names, NumRange, 10);
  }

  add(list: EmployeeData[], name: any) {
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
