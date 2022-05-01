# microCMSのサンプルコード

### 参考にした記事
https://blog.microcms.io/microcms-next-jamstack-blog/
※ここからアレンジを加えています

## 動作環境
- node: v18.0.0
- microcms-js-sdk: 2.0.0
- next: 12.1.5
- react-dom: 18.1.0
- react: 18.1.0

## 事前準備
1. [microCMS](https://microcms.io/)のアカウント作成
2. [microCMS](https://microcms.io/)でコンテンツの作成
   1. [microCMS](https://microcms.io/)でAPIを作成画面に行く
   2. 作成画面でテンプレートの「ブログ」を選択
   3. 完了


## 動作確認方法
1. 本コードのclone
2. cloneしたディレクトリに移動して``` npm install ```
3. package.jsonがある階層に``` .env.development.local ```の作成
   1. その内部に``` API_KEY=xxxxxxxxxxx ``` と記述(API_KEYはmicroCMSの「設定」->「APIキー」から確認可能)
4. libs/client.jsの``` serviceDomain: 'mgwc797phg' ```の部分をご自身のサービスドメインに変更する
   1. serviceDomainはXXXX.microcms.ioの場合、XXXXの部分になります
5. ``` npm run dev ```の実行
6. [http://localhost:3000](http://localhost:3000)へアクセス

## 記事作成方法
1. [microCMS](https://microcms.io/)の管理画面に移動
2. 「コンテンツ」の「ブログ」をクリック
3. 右上の「＋追加」をクリック
4. フォームを埋め、右上の「公開」をクリック

## 補足
- index.htmlにて``` getStaticProps ```を使ってmicroCMSのデータを取得しているため、このサンプルアプリはSSG。
