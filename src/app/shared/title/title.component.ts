import { Component, Input } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent {

    @Input() public hasButtonLabel: boolean = true;
    @Input() declare public title: string;
    @Input() declare public classIcon: string;
    @Input() declare public btnLabel: string;
    @Input() declare public routeRedirectToList: string;

    constructor(private _router: Router) {}

    public list(): void {
        this._router.navigate([this.routeRedirectToList]);
    }


}
