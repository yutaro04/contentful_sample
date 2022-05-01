# contentfulのサンプルコード

### 参考にした記事
- https://zenn.dev/tsuboi/articles/99458811a003c7
- https://zenn.dev/00/articles/contentful_with_react

## 動作環境
- node: v18.0.0
- contentful: 9.1.27
- @contentful/rich-text-react-renderer: 15.12.1
- react-dom: 18.1.0
- react: 18.1.0

## 事前準備
1. [contentful](https://app.contentful.com/)のアカウント作成
2. [contentful](https://app.contentful.com/)でコンテンツの作成
   1.  [contentful](https://app.contentful.com/)の「Content model」に行く
   2.  画面右上の「Add content type」をクリックし作成画面に進む
   3. 「Name」には適当に名前をつける。「Api Identifier」には『post』と名前をつけて作成。
   4. 作成したContentModelに移動し、画面右にある「Add fied」をクリック。以下の４つを作成する。
      1. field:「Text」、Name:「タイトル」、Field ID:「title」それ以外はデフォルト。
      2. field:「Ritch text」、Name:「内容」、Field ID:「content」
      3. field:「Media」、Name:「サムネイル画像」、Field ID:「thumbnail」それ以外はデフォルト。
      4. field:「Media」、Name:「メイン画像」、Field ID:「main_images」、「Many files」にチェック。
   5. Contentに移動して、画面右上の「Add Entry」を押し、先ほど作成したContentTypeを選択する。
   6. 適当に４つのフィールドを埋め、画面右側の「Publish」を押し、公開する。
   7. Mediaに移動して、Publishになっていない画像があれば、Publishにする。


## 動作確認方法
1. 本コードのclone
2. cloneしたディレクトリに移動して``` npm install ```
3. package.jsonがある階層に``` .env.development.local ```の作成
   1. その内部に<br>
   ``` 
   CONTENTFUL_SPACE_ID=xxxxxxxxxxxx
   CONTENTFUL_ACCESS_KEY=xxxxxxxxxxxx
   ```
   と記述
   
   2. CONTENTFUL_SPACE_IDは「Settings」->「Api keys」の「Space ID」を貼り付け
   3. CONTENTFUL_ACCESS_KEYは「Settings」->「Api keys」の「Content Delivery API」を貼り付け
5. ``` npm run dev ```の実行
6. [http://localhost:3000](http://localhost:3000)へアクセス

## 記事作成方法
Contentに移動して、画面右上の「Add Entry」を押し、ContentTypeを選択し作成する。

## 補足
- index.htmlにて``` getStaticProps ```を使ってcontentfulのデータを取得しているため、このサンプルアプリはSSG。
