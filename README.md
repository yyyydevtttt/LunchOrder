# LunchOrder

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## OnsenUI を使うための設定
【参考】
https://ja.onsen.io/v2/guide/angular2/index.html#angular-2

(1) プロジェクトのフォルダの下で以下のコマンドを実行

　npm install onsenui ngx-onsenui --save

(2) .angular-cli.json に以下の文を追加
※ 読み込む順番が大事っぽいから、この順番を変えない！

      "styles": [
        "../node_modules/onsenui/css/onsenui.css",
        "../node_modules/onsenui/css/onsen-css-components.css",
        "styles.scss"
      ],
