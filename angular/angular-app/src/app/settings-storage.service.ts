import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type Language = 'en' | 'es' ;

export interface ISettings {
    language: Language,
    wordsCount: number,
}

@Injectable({
    providedIn: 'root',
})
export class SettingsStorageService {
    private _settings = new BehaviorSubject<ISettings>(
        JSON.parse(
            localStorage.getItem('settings') ||
                '{ "language": "en", "wordsCount": 20 }'
        )
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

    readonly settings$ = this._settings.asObservable();

    get settings() {
        return this._settings.getValue();
    }

    set settings(val) {
        this._settings.next(val);
    }

    save(settings: ISettings) {
        this.settings = settings;
        localStorage.setItem('settings', JSON.stringify(settings));
    }
}
