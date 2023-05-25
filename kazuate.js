// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 1;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
let b = document.querySelector('button#print');
b.addEventListener('click', hantei);
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let i = document.querySelector('input[name="seisu"]');
  let a = Integer.parseInt(i.value);
  let yoso = i.value; 
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

  for(; kaisu <= 1; kaisu = kaisu + 1){
    console.log(kaisu + "回目の予想: " + yoso);

    let x = document.querySelector('span#kaisu');
    let p2 = document.createElement('p');
    p2.textContent = kaisu;
    //x.insertAdjacentElement('afterend', p);
    let y = document.querySelector('span#answer');
    let p3 = document.createElement('p');
    p3.textContent = yoso;
    //y.insertAdjacentElement('afterend', p);
    
    if(kaisu === 3) continue;
  if(yoso === kotae){
    console.log("正解です．おめでとう!");
    let z = document.querySelector('p#result');
    let p = document.createElement('p');
    p.textContent = '正解です．おめでとう!';
    z.insertAdjacentElement('afterend', p);

  } else if(yoso < kotae){
    console.log("まちがい．答えはもっと大きいですよ");
    let z1 = document.querySelector('p#result');
    let p = document.createElement('p');
    p.textContent = 'まちがい．答えはもっと大きいですよ';
    z1.insertAdjacentElement('afterend', p);
  } else if(yoso > kotae){
    console.log("まちがい．答えはもっと小さいですよ");
    let z2 = document.querySelector('p#result');
    let p = document.createElement('p');
    p.textContent = 'まちがい．答えはもっと小さいですよ';
    z2.insertAdjacentElement('afterend', p);
  }
}
if(yoso === kotae){
  console.log("正解です．おめでとう!");
}
else {
  console.log("まちがい．残念でした答えは "+ kotae +" です．");

}
  if(kaisu === 4){
  for(; kaisu <= 7; kaisu = kaisu + 1){
    console.log(kaisu + "回目の予想: " + yoso);
    console.log("答えは "+kotae+" でした．すでにゲームは終わっています");
  }
}
}

let p1 = document.querySelector('p#null'); 
p1.remove();