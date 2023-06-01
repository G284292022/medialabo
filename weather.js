let b = document.querySelector('button#print');
b.addEventListener('click', city);

function city() {
	let i = document.querySelector('input[name="city"]');
  let a = i.value;
  let b;
  if(a === 'カイロ'){
    b = 360630;
  }
  else if(a === 'モスクワ'){
    b = 524901; 
  }
  else if(a === 'ヨハネスブルク'){
    b = 993800;
  }
  else if(a === '北京市' || a === '北京'){
    b = 1816670;
  }
  else if(a === '東京都' || a === '東京'){
    b = 1850147;
  }
  else if(a === 'シンガポール'){
    b = 1880252;
  }
  else if(a === 'シドニー'){
    b = 2147714;
  }
  else if(a === 'ロンドン'){
    b = 2643743;
  }
  else if(a === 'パリ'){
    b = 2968815;
  }
  else if(a === 'リオデジャネイロ'){
    b = 3451189;
  }
  else if(a === 'ニューヨーク'){
    b = 5128581;
  }
  else if(a === 'ロサンゼルス'){
    b = 5368361;
  }
  let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + b + '.json';
  let x = document.querySelector('span#kensaku');
  // 通信開始
	axios.get(url)
  .then(showResult)
  .catch(showError)
  .then(finish);


// 通信が成功した時の処理
function showResult(resp) {
// サーバから送られてきたデータを出力
let data = resp.data;

// data が文字列型なら，オブジェクトに変換する
if (typeof data === 'string') {
  data = JSON.parse(data);
}

// data をコンソールに出力
console.log(data);

// data.x を出力
    x.textContent = "緯度: "+data.coord.lon+"° 経度: "+data.coord.lat+"° 天気: "+data.weather[0].description+" 最低気温:  "+data.main.temp_min+"℃ 最高気温: "+data.main.temp_max+"℃ 湿度: "+data.main.humidity+"% 風速: "+data.wind.speed+"m/s 風向: "+data.wind.deg+"° 都市名: "+data.name;
}
}

// 通信エラーが発生した時の処理
function showError(err) {
console.log(err);
x = document.querySelector('span#kensaku');
x.textContent = '正しく入力してください。';
}	

// 通信の最後にいつも実行する処理
function finish() {
console.log('Ajax 通信が終わりました');
}