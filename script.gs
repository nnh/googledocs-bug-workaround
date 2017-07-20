function onOpen() {
  DocumentApp.getUi().createAddonMenu()
    .addItem('欠損文字チェック', 'addHighlight')
    .addItem('半角文字変換', 'convertCharacters')
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
  }
}
