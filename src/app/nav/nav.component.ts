import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

    public isCollapsed: boolean = false;

    constructor(private _router: Router) {}

    public showMenu(): boolean {
        return this._router.url !== '/user/login' && this._router.url !== '/user/registration';
    }
}
