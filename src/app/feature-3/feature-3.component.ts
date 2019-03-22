import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feature-3',
  templateUrl: './feature-3.component.html',
  styleUrls: ['./feature-3.component.css'],
})
export class Feature3Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  _routerLink() {
    this.router.navigate(['/feature3two']);
  }
}
