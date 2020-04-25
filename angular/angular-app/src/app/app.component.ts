import { Component } from '@angular/core';

interface IPage {
    title: string;
    url: string;
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    active: string = 'recently';
    pages: IPage[] = [
        { title: 'Recently Added', url: 'recently' },
        { title: 'Go', url: 'go' },
        { title: 'Settings', url: 'settings' },
    ];

    activate(control: string): void {
        this.active = control;
    }
}
