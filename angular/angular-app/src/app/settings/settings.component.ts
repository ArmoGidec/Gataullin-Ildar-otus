import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SettingsStorageService } from '../settings-storage.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
    constructor(private settingsStorage: SettingsStorageService) {}

    languages = this.settingsStorage.languages;

    settingsForm = new FormGroup({
        language: new FormControl(this.settingsStorage.settings.language, [Validators.required]),
        wordsCount: new FormControl(this.settingsStorage.settings.wordsCount, [
            Validators.required,
            Validators.min(1),
            Validators.pattern(/^\d+$/),
        ]),
    });

    submit() {
        if (this.settingsForm.invalid) {
            return;
        }
        this.settingsStorage.save(this.settingsForm.value);

    }
}
