'use strict';
let height;
let weight;
let sintyo2;
let msg;
function kakeru(f)
{sintyo2=parseFloat(f.height.value) * parseFloat(f.height.value);
    f.bmid.value=parseFloat(f.weight.value) / sintyo2;
let bmi = document.getElementById("bmid").value;
f.tekisei.value = sintyo2 * 22 ;
if ( bmi === 0 ) {
    msg = "ここにあなたの状態を表示します";
} else if ( 1 <= bmi && bmi < 16 ) {
    msg = "瘦せすぎ";
} else if ( 16 <= bmi && bmi < 17 ) {
    msg = "瘦せ";
} else if ( 17 <= bmi && bmi < 18.5 ) {
    msg = "瘦せぎみ";
} else if ( 18.5 <= bmi && bmi < 25 ) {
    msg = "普通体重";
} else if ( 25 <= bmi && bmi < 30 ) {
    msg = "前肥満";
} else if ( 30 <= bmi && bmi < 35 ) {
    msg = "肥満（１度）";
} else if ( 35 <= bmi && bmi < 40 ) {
    msg = "肥満（２度）";
} else if ( 40 <= bmi ) {
    msg = "肥満（３度）";
} else {
    msg = "ここにあなたの状態を表示します";
}
document.getElementById("jyoutai").textContent = ("あなたの体型は" + msg + "です")
console.log(bmi);
console.log(tekisei);
}
