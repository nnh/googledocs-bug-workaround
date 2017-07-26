Googledocs bug workaround
=====
An google script that highlights and replace characters that will be missing in the Microsoft word/LibreOffice document that is downloaded from Google Docs.

googleドキュメントを.docx形式などでダウンロードした時、一部全角記号等が欠損することがある。
欠損してしいまう文字を欠損しない同等の記号・文字に変換するスクリプト。

[![MIT licensed][shield-license]](#)

Usage
-----
- Select "Tools" > "Script Editor..."
- Copy and paste the google script "script.gs" and save
- Select "Run" > "addHighlight" or "convertCharacters"
- See "convert_list.txt" for the conversion table

## Usage in Japanese
- メニューの「ツール」より「スクリプトエディタ...」を選択
- コード.gsの内容を"script.gs"の内容に置き換えて保存
- メニューの「実行」より"addHighlight(欠損文字ハイライト)"または"convertCharacters(欠損文字の置換)"を選択
- 文字の変換テーブルについては"convert_list.txt"を参照ください

Background
-----
We've been annoyed about G-Suite bug for a week now (20 July 2017). Some of the non-ASCII characters will be missing when you download as Microsoft word (.docx) or LibreOffice (.odt). Since we been updating documents on Google Docs and download fixed version as Microsoft Word file and file the documents to the customers. The customers will not accept the documents as Rich text file or PDF. We got stuck.

私達はGoogle Documentのバグに1週間近く悩まされています(2017.7.20)。2バイト文字の幾つかがMicrosoft WordまたはLibreofficeのフォーマットでダウンロードすると消えてしまいます。私達はGoogleDocs上で最新アップデートを管理し、版固定する際にMicrosoft Wordにダウンロードし顧客に納品するという手順を取っていました。顧客はリッチテキストファイルやPDFでの納品を許容していませんので、行き詰まりました。

So we made google scripts for the workaround. It will highlight the will-be-deleted characters and replace the characters to equivalent characters.

そこで私達は問題を回避するためにGoogleScriptを記載しました。これにより削除される文字はハイライトされ、更にそれらを削除されないほぼ同等の文字に置き換えることが出来ます。

The problem seemed to occur on July 4th and was resolved on July 25th.

この問題は7月4日に起き、7月25日に解決した模様です。

License
-------
googledocs-bug-workaround is licensed under the [MIT](#) license.  
Copyright &copy; 2017, NHO Nagoya Medical Center and NPO-OSCR

[shield-license]: https://img.shields.io/badge/license-MIT-blue.svg
