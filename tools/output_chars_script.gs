function onOpen() {
  DocumentApp.getUi().createMenu('テスト')
    .addItem('0xff00〜0xffef', 'test')
    .addItem('全角記号、英数字一覧', 'test2')
    .addToUi();
}

function test() {
  var body = DocumentApp.getActiveDocument().getBody();
  var text = body.editAsText();
  for (var j = 0xff00; j <= 0xffef; j++) {
    text.appendText(j.toString(16) + ': ' + String.fromCharCode(j));
    text.appendText('\n');
  }
}

// コード参考：https://sites.google.com/site/michinobumaeda/misc/unicodecodechars
// 一文字ずつ出力するとフリーズしたのでひとまず30文字ごとに出力
function test2() {
  var body = DocumentApp.getActiveDocument().getBody();
  var text = body.editAsText();
  var chars = '';
  var num = 0;

  var start = [0x0000, 0x0080, 0x0370, 0x0400, 0x2000, 0x2100, 0x2150, 0x2190, 0x2200, 0x2300, 0x2500, 0x25A0, 0x2600, 0x818f, 0xff00];
  var end   = [0x007f, 0x00ff, 0x03ff, 0x04ff, 0x206f, 0x214f, 0x218f, 0x21ff, 0x22ff, 0x23ff, 0x257f, 0x25ff, 0x26ff, 0x818f, 0xffef];

  for (var i = 0; i < start.length; i++) {
    for (var j = start[i]; j <= end[i]; j++) {
      chars += String.fromCharCode(j);

      if (num == 30) {
        text.appendText('~' + j.toString(16) + ': ' + chars);
        text.appendText('\n');
        chars = '';
        num = 0;
      }
      num++;
    }
    text.appendText('~' + end[i].toString(16) + ': ' + chars);
    text.appendText('\n');
  }
}
