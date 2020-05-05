import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { TranslateService } from './translate.service';
import { StorageService } from './storage.service';

@Injectable({
    providedIn: 'root',
})
export class AddWordService {
    constructor(
        private translateService: TranslateService,
        private storageService: StorageService
    ) {}

    add = (text: string) => {
        const words = text.split(' ').filter((word) => word.length > 0);
        from(words)
            .pipe(
                mergeMap(
                    this.translateService.translate,
                    (word, translated) => ({ word, translation: translated[0] })
                )
            )
            .subscribe(this.storageService.add);
    }
}
