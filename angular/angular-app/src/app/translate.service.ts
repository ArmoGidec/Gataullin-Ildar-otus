import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

const API_KEY =
    'trnsl.1.1.20200427T185317Z.a3d851b73bd6e006.c4875e300eab125d1e0ed13d8b9455bc06f342ab';
const API_URL = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

interface ITranslation {
    code: 200 | 401 | 402 | 404 | 413 | 422 | 501;
    text: string[];
    lang: string;
}

@Injectable({
    providedIn: 'root',
})
export class TranslateService {
    constructor(private http: HttpClient) {}

    translate = (text: string): Observable<string[]> =>
        this.http
            .get<ITranslation>(API_URL, {
                params: {
                    key: API_KEY,
                    text,
                    lang: 'ru-en',
                },
            })
            .pipe(map(({ text }) => text));
}
