import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Language } from './settings-storage.service';

export type ITranslationObj = {
    [language in Language]?: string;
} & {
    ru: string;
};

@Injectable({
    providedIn: 'root',
})
export class TranslationsStorageService {
    private _translations = new BehaviorSubject<ITranslationObj[]>(
        JSON.parse(localStorage.getItem('translations') || '[]')
    );

    readonly translations$ = this._translations.asObservable();

    get translations(): ITranslationObj[] {
        return this._translations.getValue();
    }

    set translations(val: ITranslationObj[]) {
        this._translations.next(val);
    }

    add(translationObj: ITranslationObj) {
        const translation = this.translations.find(_translation => _translation.ru === translationObj.ru);

        if (translation === undefined) {
            this.translations = [...this.translations, translationObj];
        } else {
            Object.assign(translation, translationObj);
            this.translations = [...this.translations];
        }

        localStorage.setItem('translations', JSON.stringify(this.translations));
    }
}
