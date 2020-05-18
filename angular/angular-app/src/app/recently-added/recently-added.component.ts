import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AddWordService } from '../add-word.service';
import { finalize, map } from 'rxjs/operators';
import { TranslationsStorageService } from '../translationsStorage.service';
import { Subscription } from 'rxjs';

type Translation = {
    ru: string;
    en: string;
};

@Component({
    selector: 'app-recently-added',
    templateUrl: './recently-added.component.html',
    styleUrls: ['./recently-added.component.scss'],
})
export class RecentlyAddedComponent implements OnInit, OnDestroy {
    translations: Translation[] = [];
    private translationsStorage$: Subscription;

    constructor(
        private translationsStorage: TranslationsStorageService,
        private addWordService: AddWordService
    ) {}

    ngOnInit() {
        this.translationsStorage$ = this.translationsStorage.translations$
            .pipe(
                map((translationsObj) =>
                    Object.entries(translationsObj).map(([ru, en]) => ({
                        ru,
                        en,
                    }))
                )
            )
            .subscribe((translations) => (this.translations = translations));
    }

    ngOnDestroy() {
        this.translationsStorage$.unsubscribe();
    }

    addTranslationForm = new FormGroup({
        text: new FormControl('', [Validators.required]),
    });

    disabled = false;

    submit() {
        if (this.addTranslationForm.invalid) {
            return;
        }

        this.disabled = true;
        this.addWordService
            .add(this.addTranslationForm.get('text').value)
            .pipe(finalize(() => (this.disabled = false)))
            .subscribe(() => this.addTranslationForm.reset());
    }
}
