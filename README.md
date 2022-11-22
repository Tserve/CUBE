# dojo-react-ourly-setting
## About
- react の中級者向け課題

## 課題要件
- [課題チケット（テンプレ）](https://bitadev.backlog.jp/view/TD-984)

## 開発関連
- 依存関係の解決
```shell
$ yarn
```

- 開発用サーバの立上げ
```shell
$ yarn dev
```

- localhost:3000 で画面が立ち上がある
- localhost:4001 で api mock が立ち上がる

### ブランチ運用
1. `main` ブランチから `task/hoge/main` ブランチを切る
2. `task/hoge/main` ブランチから `task/hoge/feature` ブランチを切る
    - ブランチを細分化する場合は `task/hoge/feature1`, `task/hoge/feature2` ... 等も可
        - 作業者が管理できれば何でも
3. レビューを出す際は `task/hoge/feature` into `task/hoge/main` の形式で PULL REQUEST を作成して、メンターへレビューを依頼する

\* ブランチ名の `hoge` は作業者の bitA メールアドレスの `@` より前を指定する

ex) 作業者が `shogo_akimoto@bita.jp` の場合、作成するブランチは以下の2つとなる
- `task/shogo_akimoto/main` ( merge 先 )
- `task/shogo_akimoto/feature` ( 作業ブランチ )

#### コミットメッセージルール
- [Semantic Commit Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) を用いてください

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

## 補足
- 必要に応じてライブラリの導入可
  - 導入理由を説明できるとベスト
- eslint のルールは厳しくしてるが、絶対ではない
  - error, warning が出た時はオフにするのではなく、回避方法を模索する・ルールを緩めることを検討する
- api のパターン変更は `spec/api/{resouce}/{curd}/index.ts` 辺りのファイルを見てコメントに従う
