// GETリクエスト（通信）
const url = axios.get("http://localhost:3000/")

    // thenで成功した場合の処理
    .then(() => {
        console.log("ステータスコード:", status);
    })
    // catchでエラー時の挙動を定義
    .catch(err => {
        console.log("err:", err);
    });

結果
ステータスコード：200　//http通信でデータ取得の成功
