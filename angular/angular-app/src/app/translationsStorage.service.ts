import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ITranslationObj {
    word: string;
    translation: string;
}

interface ITranslationsObj {
    [key: string]: string;
}

@Injectable({
    providedIn: 'root',
})
export default class TranslationsStorageService {
    private _translations = new BehaviorSubject<ITranslationsObj>(
        JSON.parse(localStorage.getItem('translations') || '{}')
    );

    readonly translations$ = this._translations.asObservable();

    get translations(): ITranslationsObj {
        return this._translations.getValue();
    }

    set translations(val: ITranslationsObj) {
        this._translations.next(val);
    }

    add({ word, translation }: ITranslationObj) {
        this.translations = {
            ...this.translations,
            [word]: translation
        };
        localStorage.setItem('translations', JSON.stringify(this.translations));
    }
}
