/**
 * const, letなどの変数宣言
 */

// var val1 = "var変数";
// console.log(val1);

// // var変数は上書き可能
// val1 = "変数を上書き";
// console.log(val1);

// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能な変数
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言が不可能
// let val2 = "let変数は再宣言できない";

// const val3 = "constを宣言";
// console.log(val3);

// // const変数は上書きできない
// // val3 = 'constを上書き';

// // constは再宣言不可能
// const val3 = "constを再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "あああ",
//   age: 100
// };

// console.log(val4);

// val4.name = 'test';
// val4.add = '追加';
// console.log(val4);

// constで定義した配列は変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";

// val5.push("monkey");
// console.log(val5);

/**
 *  テンプレート文字列
 */

// const name = "akasatana";

// const age = "100";

// わたしのなまえは「akasatanaです。年齢は100才です」

// 従来の方法で展開する
// const message1 = "私の名前は" + name + "です。ねんれいは" + age + "です";

// console.log(message1);

// テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です`;

// console.log(message2);

/**
 * アロー関数
 */

// 従来の関数
// function func1(str) {
//   return str;
// }

// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "akasatana",
//   age: 100
// };

// const message3 = `私は${myProfile.name}です。年齢は${myProfile.age}歳です。`;

// console.log(message3);

// const { name, age } = myProfile;

// const message4 = `私は${name}です。年齢は${age}才です。`;

// console.log(message4);

// const myProfile = ["じゃけぇ", 28];

// const message3 = `私は${myProfile[0]}です。年齢は${myProfile[1]}才です。`;

// console.log(message3);

// const [name, age] = myProfile;

// const message4 = `私は${name}です。年齢は${age}才です。`;

// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "はまやらわ") =>
//   console.log(`こんにちは!${name}さん!`);
// sayHello();

/**
 * スプレッド構文...
 */

// 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const myFunc = (num1, num2) => console.log(num1 + num2);

// console.log(myFunc(arr1[0], arr1[1]));
// console.log(myFunc(...arr1));

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...num3] = arr2;

// console.log(num1,num2, num3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];

// console.log(arr7);

// const arr8 = [...arr4];
// arr8[0] = 100;
// console.log(arr8, arr4);

/**
 * mapやfilterを使った配列処理
 */
const nameArr = ["田中", "山田", "たつお"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index}番目は${name}です`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if(name === 'たつお'){
//     return name;
//   } else{
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);
// const num = 1300;
// console.log(num.toLocaleString());
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";

// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
// };

// console.log(checkSum(100, 0));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1か2はtrueになります。");
}

if (flag1 && flag2) {
  console.log("1も2もtrueになります");
}

// || は左側がfalseなら、右側を返す
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら、右側を返す
const num2 = null;
const fee2 = num2 && "なにか設定されました";
console.log(fee2);
