import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messageArr: number[] = [1,2,3,4,5,1,2,3,4,5,1,2,3,4,5];
  quickMode_array: {title: string, icon: string, description: string;}[] = [
    {title: 'Kyle Parratt', icon: 'local_cafe', description: 'Grab a coffee with a stranger, on us!'},
    {title: 'Lexi Amber', icon: 'local_cafe', description: 'Grab a coffee with a stranger, on us!'},
    {title: 'Leonard Oval', icon: 'local_cafe', description: 'Grab a coffee with a stranger, on us!'},
    {title: 'Jake Mortara', icon: 'local_cafe', description: 'Grab a coffee with a stranger, on us!'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
