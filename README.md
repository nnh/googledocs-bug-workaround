Googledocs bug workaround
=====
An google script that highlights and replace characters that will be missing in the Microsoft word/LibreOffice document that is downloaded from Google Docs.

googleドキュメントを.docx形式などでダウンロードした時、一部全角記号等が欠損することがある。
欠損してしいまう文字を欠損しない同等の記号・文字に変換するスクリプト。

[![MIT licensed][shield-license]](#)

Usage
-----
  * See [wiki][Wiki] for its usage.
  
Background
-----
We've been annoyed about G-Suite bug for a week now. Some of the Japanese characters will be missing when you download as Microsoft word (.docx) or LibreOffice (.odt). Since we been updating documents on Google Docs and download fixed version as Microsoft Word file and file the documents to the customers. The customers will not accept the documents as Rich text file or PDF. We got stuck.

私達はGoogle Documentのバグに1週間近く悩まされています。日本語文字の幾つかがMicrosoft WordまたはLibreofficeのフォーマットでダウンロードすると消えてしまいます。私達はGoogleDocs上で最新アップデートを管理し、版固定する際にMicrosoft Wordにダウンロードし顧客に納品するという手順を取っていました。顧客はリッチテキストファイルやPDFでの納品を許容していませんので、行き詰まりました。

Reliability of Google and Densan-system for G-suite Japanese custom support is not sufficient for us. We found the bug on last Thursday and reported on Friday. It's been a week and they said yesterday that they will update the status next week.

日本のユーザーに対するグーグルや仲介をしている電算システムのサポートは我々には十分ではありませんでした。私達は木曜日にバグを発見し、金曜日に報告しました。すでに一週間が経っていますが、昨日我々は次の状況報告は来週以降になるとの報告を受けました。

So we made google scripts for the workaround. It will highlight the will-be-deleted characters and replace the characters to equivalent ASCII characters.

そこで私達は問題を回避するためにGoogleScriptを記載しました。これにより削除される文字はハイライトされ、更にそれらを削除されない半角文字に置き換えることが出来ます。


License
-------
googledocs-bug-workaround is licensed under the [MIT](#) license.  
Copyright &copy; 2017, NHO Nagoya Medical Center and NPO-OSCR

[wiki]: https://github.com/nnh/googledocs-bug-workaround/wiki
[shield-license]: https://img.shields.io/badge/license-MIT-blue.svg
