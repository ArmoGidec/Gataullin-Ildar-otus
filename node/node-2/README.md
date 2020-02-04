# Как запустить

Перед запуском убедитесь, что у вас установлен nodejs v12.12.0 и выше.
Для запуска необходимо через терминал набрать команду:

```
node tree.js <path>
```
или
```
npm run tree <path>
```

Например, набрав команду `npm run tree foo`, в терминале выведется:
```json
{
  files: [
    'foo/f1.txt',
    'foo/f2.txt',
    'foo/bar/bar1.txt',
    'foo/bar/bar2.txt',
    'foo/bar/baz/baz1.txt',
    'foo/daz/daz1.txt'
  ],
  dirs: [ 'foo', 'foo/bar', 'foo/bar/baz', 'foo/daz' ]
}
```