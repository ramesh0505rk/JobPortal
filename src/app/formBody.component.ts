import { Component, Input, Output, OnInit, EventEmitter } from "@angular/core";

@Component({
    selector:'app-form',
    standalone:true,
    templateUrl:'./formBody.component.html',
    styleUrls:['./formBody.component.css']
})
export class FormComponent implements OnInit{
    ngOnInit(): void {
        console.log('Component Initialized');
    }
}