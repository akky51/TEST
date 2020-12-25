// 会員情報を表示する
var keyList = ["名前", "学生番号", "取引回数", "評価", "依頼募集回数", "依頼承諾回数"];
var idxList = [0, 1, 2, 3, 5, 6]; // keyに対応するインデックス

function showAccount() {
    // テキストボックスから入力内容を取得する
    var address = document.getElementById("address").value;

    contract.methods.accounts(address).call()
        // accountにはaccounts(address)が代入される
        .then(function(account) {
            // 会員情報をDOMに追加する
            for (var i = 0; i < idxList.length; i++) {
                var elem = document.createElement("p");
                elem.textContent = keyList[i] + " : " + account[idxList[i]];
                document.getElementById("account").appendChild(elem);
        }
    });
}