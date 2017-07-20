function onOpen() {
  DocumentApp.getUi().createAddonMenu()
    .addItem('欠損文字チェック', 'addHighlight')
    .addItem('文字変換', 'convertCharacters')
    .addToUi();
}

function onInstall() {
  onOpen();
}

function addHighlight() {
  removeHighlight();

  var body = DocumentApp.getActiveDocument().getBody();
  var text = body.editAsText();

  var string = text.getText();
  var stringArray = string.split('');
  var reg = /[\uFF00-\uFFEF]/;
  for (var i = 0; i < stringArray.length; i++) {
    if (reg.test(stringArray[i])) {
      text.setBackgroundColor(i, i, '#00FFFF');
    }
  }
}

function removeHighlight() {
  var body = DocumentApp.getActiveDocument().getBody();
  var text = body.editAsText();
  text.setBackgroundColor(0, text.getText().length-1, '#FFFFFF');
}

function convertCharacters() {
  removeHighlight();

  var body = DocumentApp.getActiveDocument().getBody();
  var text = body.editAsText();

  var addMap = {
    'ｶﾞ': 'ガ', 'ｷﾞ': 'ギ', 'ｸﾞ': 'グ', 'ｹﾞ': 'ゲ', 'ｺﾞ': 'ゴ',
    'ｻﾞ': 'ザ', 'ｼﾞ': 'ジ', 'ｽﾞ': 'ズ', 'ｾﾞ': 'ゼ', 'ｿﾞ': 'ゾ',
    'ﾀﾞ': 'ダ', 'ﾁﾞ': 'ヂ', 'ﾂﾞ': 'ヅ', 'ﾃﾞ': 'デ', 'ﾄﾞ': 'ド',
    'ﾊﾞ': 'バ', 'ﾋﾞ': 'ビ', 'ﾌﾞ': 'ブ', 'ﾍﾞ': 'ベ', 'ﾎﾞ': 'ボ',
    'ﾊﾟ': 'パ', 'ﾋﾟ': 'ピ', 'ﾌﾟ': 'プ', 'ﾍﾟ': 'ペ', 'ﾎﾟ': 'ポ',
    'ｳﾞ': 'ヴ', 'ﾜﾞ': 'ヷ', 'ｦﾞ': 'ヺ',
    'ｱ': 'ア', 'ｲ': 'イ', 'ｳ': 'ウ', 'ｴ': 'エ', 'ｵ': 'オ',
    'ｶ': 'カ', 'ｷ': 'キ', 'ｸ': 'ク', 'ｹ': 'ケ', 'ｺ': 'コ',
    'ｻ': 'サ', 'ｼ': 'シ', 'ｽ': 'ス', 'ｾ': 'セ', 'ｿ': 'ソ',
    'ﾀ': 'タ', 'ﾁ': 'チ', 'ﾂ': 'ツ', 'ﾃ': 'テ', 'ﾄ': 'ト',
    'ﾅ': 'ナ', 'ﾆ': 'ニ', 'ﾇ': 'ヌ', 'ﾈ': 'ネ', 'ﾉ': 'ノ',
    'ﾊ': 'ハ', 'ﾋ': 'ヒ', 'ﾌ': 'フ', 'ﾍ': 'ヘ', 'ﾎ': 'ホ',
    'ﾏ': 'マ', 'ﾐ': 'ミ', 'ﾑ': 'ム', 'ﾒ': 'メ', 'ﾓ': 'モ',
    'ﾔ': 'ヤ', 'ﾕ': 'ユ', 'ﾖ': 'ヨ',
    'ﾗ': 'ラ', 'ﾘ': 'リ', 'ﾙ': 'ル', 'ﾚ': 'レ', 'ﾛ': 'ロ',
    'ﾜ': 'ワ', 'ｦ': 'ヲ', 'ﾝ': 'ン',
    'ｧ': 'ァ', 'ｨ': 'ィ', 'ｩ': 'ゥ', 'ｪ': 'ェ', 'ｫ': 'ォ',
    'ｯ': 'ッ', 'ｬ': 'ャ', 'ｭ': 'ュ', 'ｮ': 'ョ',
    '｡': '。', '､': '、', 'ｰ': 'ー', '｢': '「', '｣': '」', '･': '・',
    '￨': '|', '￩': '←', '￪': '↑', '￫': '→', '￬': '↓', '￭': '◼', '￮': '○'
  };
  var addReg = new RegExp('(' + Object.keys(addMap).join('|') + ')', 'g');

  var string = text.getText();
  var stringArray = string.split('');
  var reg = /[\uFF01-\uFF5e]/;
  for (var i = 0; i < stringArray.length; i++) {
    if (reg.test(stringArray[i])) {
      if (stringArray[i].charCodeAt(0).toString(16).toUpperCase() == 'FF5E') {
        text.replaceText(stringArray[i], String.fromCharCode(0x301C));
      } else {
        text.replaceText(stringArray[i], String.fromCharCode(stringArray[i].charCodeAt(0) - 0xFEE0));
      }
    }
    if (stringArray[i].charCodeAt(0).toString(16).toUpperCase() == 'FFE5') {
      text.replaceText(stringArray[i], String.fromCharCode(0x00A5));
    }
    if (addReg.test(stringArray[i])) {
      text.replaceText(stringArray[i], addMap[stringArray[i]]);
    }
  }
}
