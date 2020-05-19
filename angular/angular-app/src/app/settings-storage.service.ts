import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'en' | 'es';

export interface ISettings {
    language: Language;
    wordsCount: number;
}

@Injectable({
    providedIn: 'root',
})
export class SettingsStorageService {
    private _settings = JSON.parse(
        localStorage.getItem('settings') ||
            '{ "language": "en", "wordsCount": 20 }'
    );

    readonly languages = [
        {
            value: 'en',
            text: 'English',
        },
        {
            value: 'es',
            text: 'Espanol',
        },
    ];

    get settings() {
        return this._settings;
    }

    set settings(val) {
        this._settings = val;
    }

    save(settings: ISettings) {
        this.settings = settings;
        localStorage.setItem('settings', JSON.stringify(settings));
    }
}
