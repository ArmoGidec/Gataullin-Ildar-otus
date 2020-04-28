import { Injectable } from '@angular/core';

interface ITranslationObj {
    word: string,
    translation: string
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {
    add({word, translation}: ITranslationObj) {
        localStorage.setItem(word, translation);
    }
}
