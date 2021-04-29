import { Component, OnInit } from '@angular/core';
declare var $: any
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {



    constructor() { }
  
    ngOnInit(): void {
  
      
      $(document).ready(function () {
  
        $('#sidebarCollapse').on('click', function () {
            $('#sidebar').toggleClass('active');
        });
    
    });
  
  
    }
  
  }
  