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
          //var input = document.createElement("div"); // 回答欄を表示する
          var button = document.createElement("div"); // 取引を進めるボタンを表示する

          // IDを指定する
          image.id = "image" + idx;
          description.id = "description" + idx;
          state.id = "state" + idx;
          button.id = "button" + idx;
          //input.id = "input" + idx;

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
            //実験用/質問の回答をコメントできるテキストボックスを作成
            if (k == 1) {
              var p = document.createElement("p");
              var form = document.createElement("div");
              form.setAttribute("class", "form-group");
              var ipt = document.createElement("input");
              ipt.setAttribute("type", "text");
              ipt.setAttribute("class", "form-control");
              ipt.id = "input" + idx;
              ipt.setAttribute("placeholder", "回答を入力");
              var label = document.createElement("label");
              label.textContent = "回答を入力してください";
              label.setAttribute("for", "value" + idx);
              form.appendChild(label);
              form.appendChild(ipt);
              p.appendChild(form);
              input.appendChild(p);
            }
          }
          //実験用/質問の回答をコメントできるテキストボックスを作成
          /*var p = document.createElement("p");
         var ipt = document.createElement("input");
         ipt.setAttribute("class", "input-group");
          var label = document.createElement("label");
         label.textContent = "回答を入力してください";
         label.setAttribute("for", "value" + idx);
          p.appendChild(label);
         ipt.appendChild(input);
          p.appendChild(ipt);
          button.appendChild(p);*/
          

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
          cell.appendChild(input);
          cell.appendChild(button);

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
    "質問内容",
    "報酬(wei)",
    "質問者",
    "質問者のアドレス",
    "状況",
    "回答者",
    "回答者のアドレス",
    "回答",
  ];
  itemIdxList = [4, 5, 7, 2, 0, 5, 3, 1, 6]; // keyに対応するインデックス

  contract.methods
    .questionInfos1(idx)
    .call()
    .then(function (questionInfos1) {
      //依頼番号表示
      var elem = document.createElement("p");
      elem.textContent = " 質問番号: " + (idx + 1);
      document.getElementById("description" + idx).appendChild(elem);

      for (var i = 0; i < 5; i++) {
        var elem = document.createElement("p");
        //その他の表示
        elem.textContent =
          itemKeyList[i] + " : " + questionInfos1[itemIdxList[i]];

        document.getElementById("description" + idx).appendChild(elem);
      }
    }),
    //質問状況の表示
    contract.methods
      .questionInfos2(idx)
      .call()
      .then(function (questionInfos2) {
        var elem = document.createElement("p");
        elem.textContent =
          itemKeyList[5] + " : " + questionInfos2[itemIdxList[5]];
      }),
    contract.methods
      .questionInfos1(idx)
      .call()
      .then(function (questionInfos1) {
        //依頼番号表示
        var elem = document.createElement("p");
        document.getElementById("description" + idx).appendChild(elem);

        for (var i = 6; i < itemIdxList.length; i++) {
          var elem = document.createElement("p");
          //回答の表示
          if (i == 8) {
            if (questionInfos1[itemIdxList[i]] == "") {
              elem.textContent = itemKeyList[i] + " : 未回答";
            } else {
              elem.textContent =
                itemKeyList[i] + " : " + questionInfos1[itemIdxList[i]];
            }
          } //その他の表示
          else {
            elem.textContent =
              itemKeyList[i] + " : " + questionInfos1[itemIdxList[i]];
          }

          document.getElementById("description" + idx).appendChild(elem);
        }
      });
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
      reward = questionInfos1[7]; // 商品価格を取得する
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

// 質問の回答を請負を行う関数
function provRegistration(idx) {
  return contract.methods.provRegister(idx).send({ from: coinbase });
}

// 質問に回答する関数
function answered(idx) {
  var input_message = document.getElementById("input" + idx).value;
  return contract.methods.answer(idx, input_message).send({ from: coinbase });
}

// 回答を確認する関数
function checked(idx, reward) {
  return contract.methods.checked(idx).send({ from: coinbase, value: reward });
}

// 質問者を評価する関数
function questionerReputation(idx) {
  var buyerValue = document.getElementById("value" + idx).value;

  return contract.methods
    .reputateQuestioner(idx, buyerValue)
    .send({ from: coinbase });
}

// 回答者を評価する関数
function reputateRespondent(idx) {
  var sellerValue = document.getElementById("value" + idx).value;

  return contract.methods
    .respondentReputation(idx, sellerValue)
    .send({ from: coinbase });
}
