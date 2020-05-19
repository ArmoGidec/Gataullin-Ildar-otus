import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AddWordService } from '../add-word.service';
import { finalize, map } from 'rxjs/operators';
import {
    TranslationsStorageService,
    ITranslationObj,
} from '../translationsStorage.service';
import { Subscription } from 'rxjs';
import { SettingsStorageService } from '../settings-storage.service';

@Component({
    selector: 'app-recently-added',
    templateUrl: './recently-added.component.html',
    styleUrls: ['./recently-added.component.scss'],
})
export class RecentlyAddedComponent implements OnInit, OnDestroy {
    translations: ITranslationObj[] = [];
    private translationsStorage$: Subscription;

    constructor(
        private translationsStorage: TranslationsStorageService,
        private addWordService: AddWordService,
        private settingsStorage: SettingsStorageService
    ) {}

    language = this.settingsStorage.languages.find(
        (_language) =>
            _language.value === this.settingsStorage.settings.language
    );

    ngOnInit() {
        this.translationsStorage$ = this.translationsStorage.translations$
            .pipe(
                map((translations) =>
                    translations.filter(
                        (translationObj) =>
                            translationObj[this.language.value] !== undefined
                    )
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
