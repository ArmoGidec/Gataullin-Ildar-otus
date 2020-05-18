import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import TranslateService from './translate.service';
import TranslationsStorageService, { ITranslationObj } from './translationsStorage.service';

@Injectable({
    providedIn: 'root',
})
class AddWordService {
    constructor(
        private translateService: TranslateService,
        private translationsStorageService: TranslationsStorageService
    ) {}

    add = (text: string) => {
        const words = text.split(' ').filter((word) => word.length > 0);
        const $translation = from(words).pipe(
            mergeMap(
                (word) => this.translateService.translate(word),
                (word, translated) => ({ word, translation: translated[0] })
            )
        );

        $translation.subscribe((translationObj: ITranslationObj) =>
            this.translationsStorageService.add(translationObj)
        );

        return $translation;
    };
}

export default AddWordService;
