import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private _builder:FormBuilder) { }


  fields = {

  "dynamicJSON": [
    {
        "key": "role_name",
        "label": "Role Name",
        "type": "text",
        "value": "",
        "required": true,
        "order": 1
    },
    {
        "key": "last_ame",
        "label": "Last Name",
        "type": "text",
        "value": "",
        "required": true,
        "order": 2
    }
]
  }

  forms = this._builder.group(this.fields)

  ngOnInit() {
    console.log(this.forms.value)
  }

}
