var _numItems; // 出品されている商品数
var col = 3; // 商品一覧を表示する際の列数

// 1.出品されている商品数を取得する
contract.methods
  .numItems()
  .call()
  .then(function (numItems) {
    _numItems = numItems;

    // 2.商品情報を表示するDOMや取引を進めるためのボタンを配置する。
  })
  .then(function () {
    var rows = [];
    var table = document.getElementById("table"); // bodyのテーブル要素を取得する
    var row = Math.ceil(_numItems / col); // 商品を表示する際の行数
    var idx = 0; // 商品番号

    // 取引を進めるボタンのIDとボタンに表示するテキスト
    var buttonId = [
      "provRegistration",
      "answered",
      "checked",
      "questionerReputation",
      "respondentReputation",
    ];
    var buttonText = [
      "請負",
      "回答",
      "回答確認",
      "質問者を評価",
      "回答者を評価",
    ];
    //ここまで確認完了 11/3
    // 商品の数だけテーブルにセルを追加する
    for (i = 0; i < row; i++) {
      rows.push(table.insertRow(-1)); // 行の追加
      for (j = 0; j < col; j++) {
        cell = rows[i].insertCell(-1); // 列の追加

        // DOMを作成する
        // idx：商品番号
        if (idx < _numItems) {
          var image = document.createElement("div"); // 商品画像を表示する
          var description = document.createElement("div"); // 商品説明を表示する
          var state = document.createElement("div"); // 取引の状態を表示する
          var button = document.createElement("div"); // 取引を進めるボタンを表示する
         


          // IDを指定する
          image.id = "image" + idx;
          description.id = "description" + idx;
          state.id = "state" + idx;
          button.id = "button" + idx;
          

          // 画像のみセンター揃え
          image.style.textAlign = "center";

          // 取引を進めるボタンを作成する
          for (k = 0; k < buttonId.length; k++) {
            var p = document.createElement("p");
            var btn = document.createElement("button");
            btn.setAttribute("class", "btn btn-default");
            btn.id = buttonId[k] + idx;
            btn.textContent = buttonText[k];
            p.appendChild(btn);
            button.appendChild(p);
          }
          //実験用/質問の回答をコメントできるテキストボックスを作成
         var p = document.createElement("p");
          p.textContent = "質問の回答を記入してください";
          var input = document.createElement("input");
          input.setAttribute('type', 'text');
          button.appendChild(input);

          // 評価を選択するセレクトフォームを作成する
          var p = document.createElement("p");
          var form = document.createElement("div");
          form.setAttribute("class", "form-group");
          var label = document.createElement("label");
          label.textContent = "依頼者または請負人の評価を選択して下さい";
          label.setAttribute("for", "value" + idx);
          var select = document.createElement("select");
          select.setAttribute("multiple", "");
          select.setAttribute("class", "form-control");
          select.id = "value" + idx;
          for (value = -2; value <= 2; value++) {
            var option = document.createElement("option");
            option.textContent = value;
            option.value = value;
            select.appendChild(option);
          }
          form.appendChild(label);
          form.appendChild(select);
          p.appendChild(form);
          button.appendChild(p);

          // セルにDOMを追加する
          cell.appendChild(image);
          cell.appendChild(description);
          cell.appendChild(state);
          cell.appendChild(button);
          cell.appendChild(input);

          idx++; // 商品番号の更新
        }
      }
    }

    // 3.DOMに商品情報を入れる。ボタンに関数を登録する。
  })
  .then(function () {
    for (idx = 0; idx < _numItems; idx++) {
      showImage(idx); // 依頼画像
      showDescription(idx); // 依頼説明
      showState(idx); // 取引状態
      setButton(idx); // 取引を進めるボタンに関数を登録する
    }
  });

// 商品画像を表示する
function showImage(idx) {
  contract.methods
    .images(idx)
    .call()
    .then(function (image) {
      // imageUrl = "https://ipfs.io/ipfs/" + image.ipfsHash; // ipfsを使用する場合
      imageUrl =
        "https://drive.google.com/drive/folders/" +
        image.googleDocID +
        "?usp=sharing"; // googleDriveを使用する場合

      // 生成する要素と属性
      var image = document.createElement("img");
      image.id = "googleDriveImage" + idx;
      image.src = imageUrl;
      image.alt = "googleDriveImage" + idx;

      // 画像の読込みを待ってから画像をリサイズする
      image.addEventListener("load", function () {
        // 画像のサイズを取得する
        var orgWidth = image.width;
        var orgHeight = image.height;

        image.height = 180; // 縦幅をリサイズ
        image.width = orgWidth * (image.height / orgHeight); // 高さを横幅の変化割合に合わせる
        image.style.borderRadius = "10px";

        // DOMに画像を入れる
        document.getElementById("image" + idx).appendChild(image);
      });
    });
}

// 商品情報を表示する
function showDescription(idx) {
  itemKeyList = [
    "質問名",
    "報酬(wei)",
    "質問内容",
    "状況",
    "質問者",
    "質問者のアドレス",
    "回答者",
    "回答者のアドレス"
    
  ];
  itemIdxList = [4, 7, 5, 6, 2, 0, 3, 1]; // keyに対応するインデックス

  contract.methods
    .questionInfos1(idx)
    .call()
    .then(function (questionInfos1) {
      //依頼番号表示
      var elem = document.createElement("p");
      elem.textContent = " 質問番号: " + (idx + 1);
      document.getElementById("description" + idx).appendChild(elem);
      
      for (var i = 0; i < itemIdxList.length; i++) {
        var elem = document.createElement("p");
        //回答の表示
        if (i == 3) {
          if (questionInfos1[itemIdxList[i]] == "") {
            elem.textContent = itemKeyList[i] + " : 未回答";
          } else {
            elem.textContent = itemKeyList[i] + " : "　+/*ここにテキストボックスの値を追加*/0;
          }
        } else {
          elem.textContent =
            itemKeyList[i] + " : " + questionInfos1[itemIdxList[i]];
        }
        document.getElementById("description" + idx).appendChild(elem);
      }
    }),
    
    contract.methods
    .questionInfos2(idx)
    .call()
    .then(function (questionInfos2) {
    var elem = document.createElement("p");
    // 依頼状況のみ，true⇒募集中止，false⇒募集中に表示を変更する
    if (questionInfos2[5] == true) {
        elem.textContent = itemKeyList[i] + " : 募集終了";
      } else {
        elem.textContent = itemKeyList[i] + " : 募集中";
      }
    })
  }
   

// 取引の状態を表示する
function showState(idx) {
  stateKeyList = ["請負", "回答", "確認（送金）", "質問者評価", "回答者評価"];
  stateIdxList = [0, 1, 2, 3, 4]; // keyに対応するインデックス

  contract.methods
    .questionInfos2(idx)
    .call()
    .then(function (questionInfos2) {
      for (var i = 0; i < stateIdxList.length; i++) {
        var elem = document.createElement("p");
        if (questionInfos2[stateIdxList[i]] == true) {
          elem.textContent = stateKeyList[i] + " : 完了";
        } else {
          elem.textContent = stateKeyList[i] + " : 未完了";
        }
        document.getElementById("state" + idx).appendChild(elem);
      }
    });
}

// 取引を進めるボタンに関数を登録する
function setButton(idx) {
  var reward;
  contract.methods
    .questionInfos1(idx)
    .call()
    .then(function (questionInfos1) {
      reward = questionInfos1[5]; // 商品価格を取得する
    })
    .then(function () {
      document
        .getElementById("provRegistration" + idx)
        .setAttribute("onclick", "provRegistration(" + idx + ");");
      document
        .getElementById("answered" + idx)
        .setAttribute("onclick", "answered(" + idx + ");");
      document
        .getElementById("checked" + idx)
        .setAttribute("onclick", "checked(" + idx + "," + reward + ");");
      document
        .getElementById("questionerReputation" + idx)
        .setAttribute("onclick", "questionerReputation(" + idx + ");");
      document
        .getElementById("respondentReputation" + idx)
        .setAttribute("onclick", "respondentReputation(" + idx + ");");
    });
}

// 依頼請負を行う関数
function provRegistration(idx) {
  return contract.methods.provRegistration(idx).send({ from: coinbase });
}

// 依頼実行を連絡する関数
function answered(idx) {
  return contract.methods.answered(idx).send({ from: coinbase });
}

// 実行確認を連絡する関数
function checked(idx, reward) {
  return contract.methods
    .checked(idx)
    .send({ from: coinbase, value: reward });
}

// 依頼者を評価する関数
function questionerReputation(idx) {
  var buyerValue = document.getElementById("value" + idx).value;

  return contract.methods.questionerReputation(idx, buyerValue).send({ from: coinbase });
}

// 請負人を評価する関数
function respondentReputation(idx) {
  var sellerValue = document.getElementById("value" + idx).value;

  return contract.methods.respondentReputation(idx, sellerValue).send({ from: coinbase });
}
