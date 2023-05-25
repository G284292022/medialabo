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
  let a = Number(i.value);
  let yoso = a; 

  let x = document.querySelector('span#kaisu');;
  x.textContent = kaisu;
  let y = document.querySelector('span#answer');
  y.textContent = yoso;
  let z = document.querySelector('p#result');
  
  // 課題3-1: 正解判定する
  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール

  if(3>=kaisu){

  if(kaisu === 3 &&  yoso !== kotae){
    z.textContent="まちがい．残念でした答えは "+ kotae +" です．";
  }else if(yoso === kotae){
     
     z.textContent = '正解です．おめでとう!';
 
   } else if(yoso < kotae){
     z.textContent = 'まちがい．答えはもっと大きいですよ';
   } else if(yoso > kotae){
     z.textContent = 'まちがい．答えはもっと小さいですよ';
   }
   }
  else{
    z.textContent="答えは "+kotae+" でした．すでにゲームは終わっています";

  }

kaisu=kaisu+1;
}

let p1 = document.querySelector('p#null'); 
p1.remove();