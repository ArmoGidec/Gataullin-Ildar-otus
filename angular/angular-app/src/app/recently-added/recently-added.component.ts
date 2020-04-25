import { Component } from '@angular/core';

interface ITranslation {
    [key: string]: string;
}

@Component({
    selector: 'app-recently-added',
    templateUrl: './recently-added.component.html',
    styleUrls: ['./recently-added.component.scss'],
})
export class RecentlyAddedComponent {
    translations: ITranslation[] = [
        { ru: 'Привет', en: 'Hello' },
        { ru: 'Привет', en: 'Hello' },
        { ru: 'Привет', en: 'Hello' },
        { ru: 'Привет', en: 'Hello' },
    ];
}
