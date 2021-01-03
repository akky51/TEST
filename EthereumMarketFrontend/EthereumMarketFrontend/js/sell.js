// 出品する関数
function sell() {
    // テキストボックスから入力内容を取得する
    //依頼名
    var itemName = document.getElementById("itemName").value;
    //依頼説明
    var description = document.getElementById("description").value;
    //報酬
    var reward = document.getElementById("reward").value;
    var googleDocID = document.getElementById("googleDocID").value;
    var IPFSHash = "";

    // コントラクトの呼び出し
    return contract.methods.question(itemName, description, reward, googleDocID, IPFSHash).send({ from: coinbase });
}
