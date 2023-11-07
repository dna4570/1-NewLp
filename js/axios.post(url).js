
//POSTリクエスト（通信）
const data = { firstName : "Taro", lastName : "Yamada" }
const url = axios.post("http://localhost:3000/user/123", data)

        .then(() => {
            console.log(url)
        })

        .catch(err => {
        console.log("err:", err);
        });

結果
Yamada Taro //サーバーへYamada Taroを送信
