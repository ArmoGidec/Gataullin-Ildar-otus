import { Component, OnDestroy } from '@angular/core';
import { SettingsStorageService } from '../settings-storage.service';
import {
    TranslationsStorageService,
    ITranslationObj,
} from '../translationsStorage.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { repeat } from 'rxjs/operators';
import { Subject, Subscription, zip, of, timer } from 'rxjs';

@Component({
    selector: 'app-go',
    templateUrl: './go.component.html',
    styleUrls: ['./go.component.scss'],
})
export class GoComponent implements OnDestroy {
    isExercising = false;

    toExercise() {
        this.isExercising = true;
        this.start();
    }

    constructor(
        private settingsStorage: SettingsStorageService,
        private translationsStorage: TranslationsStorageService
    ) {}

    ngOnDestroy() {
        if (
            this.trainerSubscription &&
            typeof this.trainerSubscription.unsubscribe === 'function'
        ) {
            this.trainerSubscription.unsubscribe();
        }
    }

    private trainerSubscription: Subscription;
    private start() {
        this.translateObj = this.getTranslationObj();
        this.trainerSubscription = zip(
            of(1).pipe(repeat(this.settingsStorage.settings.wordsCount)),
            this.checkSubject$
        ).subscribe(
            ([_, ru]) => {
                this.check(ru);
                this.translateObj = this.getTranslationObj();
            },
            null,
            () => {
                timer(1700).subscribe(() => (this.isExercising = false));
            }
        );
    }

    timerSubscription: Subscription;
    checkResult: string = '';
    check(ru: string) {
        const correct = this.translateObj.ru.toLowerCase() === ru.toLowerCase();
        this.checkResult = correct ? 'correct' : 'wrong';
        timer(1700).subscribe(() => (this.checkResult = ''));
    }

    language = this.settingsStorage.settings.language;
    translateObj: ITranslationObj = { ru: null };

    private max = this.translationsStorage.translations.length;
    private min = 1;
    private getTranslationObj() {
        const index = Math.floor(Math.random() * (this.max - this.min));
        return this.translationsStorage.translations[index];
    }

    trainerForm = new FormGroup({
        ru: new FormControl('', [Validators.required]),
    });

    checkSubject$ = new Subject<string>();

    submit() {
        this.checkSubject$.next(this.trainerForm.get('ru').value);
        this.trainerForm.reset();
    }
}
