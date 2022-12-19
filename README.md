# CUBE
## About
- [作って学ぶ　Next.js/React　Webサイト構築](https://www.amazon.co.jp/%E4%BD%9C%E3%81%A3%E3%81%A6%E5%AD%A6%E3%81%B6-Next-js-React-Web%E3%82%B5%E3%82%A4%E3%83%88%E6%A7%8B%E7%AF%89-%E3%82%A8%E3%83%93%E3%82%B9%E3%82%B3%E3%83%A0-ebook/dp/B0B5YSFYY9/ref=sr_1_6?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=26QLZ6OBVJM97&keywords=next+js&qid=1671454969&sprefix=next+js%2Caps%2C170&sr=8-6)

本の内容を実装し、TypeScriptに置き換えるアウトプット

## 開発環境
Next.js
TypeScript
StoryBook
Jest
date-fns


## 開発関連
- 依存関係の解決
```shell
$ yarn
```

- 開発用サーバの立上げ
```shell
$ yarn dev
```

### scripts 一例
| script 名 | description |
| --- | --- |
| check-all | fix, lint, spell-check, type-check, test を実行する |
| check-code | lint, spell-check, type-check を並列で実行する |
| lint | eslint, stylelint を並列で実行する |
| fix | eslint, prettier, stylelint 等で可能な限り自動で修正する |
| spell-check | タイポチェック |
| type-check | 型チェック |
| test | テスト |
| storybook | storybook の起動 |
