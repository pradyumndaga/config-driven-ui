import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-config-driven-ui',
  imports: [CommonModule],
  templateUrl: './configDrivenUi.component.html',
  styleUrls: ['./configDrivenUi.component.css'],
})
export class ConfigDrivenUiComponent{
  configList = [
    {
      containerStyle: {
        background: 'red',
        display: 'flex',
        flexDirection: 'column',
        padding: '0.5rem',
        gap: '0.5rem',
        marginTop: '0.5rem',
      },
      title: {
        style: {
          color: 'black',
          margin: 0,
        },
        content: 'Conatiner 1',
      },
      subText: {
        style: {},
        content: 'This is a flex container 1',
      },
    },
    {
      containerStyle: {
        background: 'yellow',
        display: 'flex',
        flexDirection: 'column',
        padding: '0.5rem',
        gap: '0.5rem',
        marginTop: '0.5rem',
      },
      title: {
        style: {
          color: 'blue',
          margin: 0,
        },
        content: 'Conatiner 2',
      },
      subText: {
        style: {},
        content: 'This is a flex container 2',
      },
    },
    {
      containerStyle: {
        background: 'orange',
        display: 'flex',
        flexDirection: 'column',
        padding: '0.5rem',
        gap: '0.5rem',
        marginTop: '0.5rem',
      },
      title: {
        style: {
          color: 'black',
          margin: 0,
        },
        content: 'Conatiner 3',
      },
      subText: {
        style: {},
        content: 'This is a flex container 3',
      },
    },
  ];

  selectedConfig = this.configList[0];
  constructor() {}


  selectConfig(idx: number) {
    this.selectedConfig = this.configList[idx];
  }
}
