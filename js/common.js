const axios = require('axios');

// 指定された ID のユーザーに対してリクエストを行う
axios.get('/user?ID=12345')
  .then(function (response) {
    // 処理が成功した場合
    console.log(response);
  })
  .catch(function (error) {
    // エラー処理
    console.log(error);
  })
  .then(function () {
    // 常に実行
  });

// オプションとして、上記のリクエストは次のようにすることもできます
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // 常に実行
  });

// async/await を使いたい場合は、外側の関数/メソッドに `async` キーワードを追加してください。
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
