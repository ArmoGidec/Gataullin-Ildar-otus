import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { TranslateService } from './translate.service';
import {
    TranslationsStorageService,
    ITranslationObj,
} from './translationsStorage.service';
import { SettingsStorageService } from './settings-storage.service';

@Injectable({
    providedIn: 'root',
})
export class AddWordService {
    constructor(
        private translateService: TranslateService,
        private translationsStorageService: TranslationsStorageService,
        private settingsStorage: SettingsStorageService
    ) {}

    add = (text: string) => {
        const words = text.split(' ').filter((word) => word.length > 0);
        const language = this.settingsStorage.settings.language;
        const $translation = from(words).pipe(
            mergeMap(
                (word) =>
                    this.translateService.translate(word, language),
                (ru, translated) => ({ ru, [language]: translated[0] })
            )
        );

        $translation.subscribe((translationObj: ITranslationObj) =>
            this.translationsStorageService.add(translationObj)
        );

        return $translation;
    };
}
