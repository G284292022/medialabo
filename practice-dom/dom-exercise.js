//// 注意: 以下は編集しないこと!
let data = [
	{name:'札幌', lat:43.06417, lng:141.34694},
	{name:'仙台', lat:38.26889, lng:140.87194},
	{name:'新宿', lat:35.68944, lng:139.69167},
	{name:'名古屋', lat:35.18028, lng:136.90667},
	{name:'大阪', lat:34.68639, lng:135.52},
	{name:'広島', lat:34.39639, lng:132.45944},
	{name:'高知', lat:33.55972, lng:133.53111},
	{name:'福岡', lat:33.60639, lng:130.41806},
	{name:'鹿児島', lat:31.56028, lng:130.55806},
	{name:'沖縄', lat:26.2125, lng:127.68111}
];
//// 注意: 以上は編集しないこと!

// 練習4-2 メッセージ追加プログラム
let x = document.querySelector('h2#ex42'); 
let p = document.createElement('p');
p.textContent = '写真表と都市の緯度経度のページです'; 
x.insertAdjacentElement('afterend',p);
x.style.textEmphasis='sesame green';
// 練習4-3 写真表作成プログラム
/*let div = document.querySelector('div#phototable');
let img = document.createElement('img');
img.setAttribute('img','taro.png');
img.setAttribute('img','jiro.png');
img.setAttribute('img','hanako.png');
div.insertAdjacentElement('afterend',p);*/

let human = {
	face: ["taro.png","jiro.png", "hanako.png"]
	 
}
/*
let div = document.querySelector('div#phototable');
for(let b of human.face){
	let img = document.createElement('img');
	img.src = "img/taro.png";
	img.setAttribute('src', 'taro.png');
	div.insertAdjacentElement('afterend', div);
}*/
let div = document.querySelector('div#phototable');
let ms = [1,2,3]
for(let m of ms){
	let img = document.createElement('img');
	img.src = "taro.png";
	img.src = "jiro.png";
	img.src = "hanako.png";
	div.insertAdjacentElement('afterend',img);
}
// 練習4-4 箇条書き削除プログラム
let ul = document.querySelector('ul#location');
let ns = [1,2,3]
for(let n of ns){
  let li = document.querySelector('li'); 
  li.remove();
}



// 練習4-5 箇条書き追加プログラム
for (let a of data) {
	//console.log(a.name + a.lat + a.lng);
	let li = document.createElement('li');
li.textContent = a.name +' ... '+ '緯度:'+ a.lat +'、経度:'+ a.lng;
ul.insertAdjacentElement('afterend', li);
}
