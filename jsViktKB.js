var x1 = document.getElementById('box1');
var x2 = document.getElementById('box2');
var x3 = document.getElementById('box3');
var x4 = document.getElementById('box4');
var x5 = document.getElementById('box5');
var x6 = document.getElementById('box6');
var x7 = document.getElementById('box7');
var x8 = document.getElementById('box8');
var x9 = document.getElementById('box9');
var x10 = document.getElementById('box10');
var x11 = document.getElementById('box11');

var xn1 = document.getElementById('nb1');
var xn2 = document.getElementById('nb2');
var xn3 = document.getElementById('nb3');
var xn4 = document.getElementById('nb4');
var xn5 = document.getElementById('nb5');
var xn6 = document.getElementById('nb6');
var xn7 = document.getElementById('nb7');
var xn8 = document.getElementById('nb8');
var xn9 = document.getElementById('nb9');
var xn10 = document.getElementById('nb10');

var xansw11 = document.getElementById('answ11');
var xansw12 = document.getElementById('answ12');
var xansw13 = document.getElementById('answ13');
var xansw14 = document.getElementById('answ14');

var xansw21 = document.getElementById('answ21');
var xansw22 = document.getElementById('answ22');
var xansw23 = document.getElementById('answ23');
var xansw24 = document.getElementById('answ24');

var xansw31 = document.getElementById('answ31');
var xansw32 = document.getElementById('answ32');
var xansw33 = document.getElementById('answ33');
var xansw34 = document.getElementById('answ34');

var xansw41 = document.getElementById('answ41');
var xansw42 = document.getElementById('answ42');
var xansw43 = document.getElementById('answ43');
var xansw44 = document.getElementById('answ44');

var xansw51 = document.getElementById('answ51');
var xansw52 = document.getElementById('answ52');
var xansw53 = document.getElementById('answ53');
var xansw54 = document.getElementById('answ54');

var xansw61 = document.getElementById('answ61');
var xansw62 = document.getElementById('answ62');
var xansw63 = document.getElementById('answ63');
var xansw64 = document.getElementById('answ64');

var xansw71 = document.getElementById('answ71');
var xansw72 = document.getElementById('answ72');
var xansw73 = document.getElementById('answ73');
var xansw74 = document.getElementById('answ74');

var xansw81 = document.getElementById('answ81');
var xansw82 = document.getElementById('answ82');
var xansw83 = document.getElementById('answ83');
var xansw84 = document.getElementById('answ84');

var xansw91 = document.getElementById('answ91');
var xansw92 = document.getElementById('answ92');
var xansw93 = document.getElementById('answ93');
var xansw94 = document.getElementById('answ94');

var xansw101 = document.getElementById('answ101');
var xansw102 = document.getElementById('answ102');
var xansw103 = document.getElementById('answ103');
var xansw104 = document.getElementById('answ104');

x2.style.display = 'none';
x3.style.display = 'none';
x4.style.display = 'none';
x5.style.display = 'none';
x6.style.display = 'none';
x7.style.display = 'none';
x8.style.display = 'none';
x9.style.display = 'none';
x10.style.display = 'none';
x11.style.display = 'none';

xn1.style.display = 'none';
xn2.style.display = 'none';
xn3.style.display = 'none';
xn4.style.display = 'none';
xn5.style.display = 'none';
xn6.style.display = 'none';
xn7.style.display = 'none';
xn8.style.display = 'none';
xn9.style.display = 'none';
xn10.style.display = 'none';

xansw11.style.display = 'none';
xansw12.style.display = 'none';
xansw13.style.display = 'none';
xansw14.style.display = 'none';

xansw21.style.display = 'none';
xansw22.style.display = 'none';
xansw23.style.display = 'none';
xansw24.style.display = 'none';

xansw31.style.display = 'none';
xansw32.style.display = 'none';
xansw33.style.display = 'none';
xansw34.style.display = 'none';

xansw41.style.display = 'none';
xansw42.style.display = 'none';
xansw43.style.display = 'none';
xansw44.style.display = 'none';

xansw51.style.display = 'none';
xansw52.style.display = 'none';
xansw53.style.display = 'none';
xansw54.style.display = 'none';

xansw61.style.display = 'none';
xansw62.style.display = 'none';
xansw63.style.display = 'none';
xansw64.style.display = 'none';

xansw71.style.display = 'none';
xansw72.style.display = 'none';
xansw73.style.display = 'none';
xansw74.style.display = 'none';

xansw81.style.display = 'none';
xansw82.style.display = 'none';
xansw83.style.display = 'none';
xansw84.style.display = 'none';

xansw91.style.display = 'none';
xansw92.style.display = 'none';
xansw93.style.display = 'none';
xansw94.style.display = 'none';

xansw101.style.display = 'none';
xansw102.style.display = 'none';
xansw103.style.display = 'none';
xansw104.style.display = 'none';

var count=0;
function atb(j, k, n, a, b, c, d) {
	let text1 = "izv"+j.toString();
	let text2 = "but"+k.toString();
	let text3 = "nb"+n.toString();
	let texta = "answ"+a.toString();
	let textb = "answ"+b.toString();
	let textc = "answ"+c.toString();
	let textd = "answ"+d.toString();
	document.getElementById("atbilde").innerHTML = "Izvēlies atbildi!";
	var at=document.getElementsByName(text1);
	for (i = 0 ; i < at.length; i++) {
		if (at[i].checked) {
			if(at[i].value==0) {
				document.getElementById("atbilde").innerHTML = "Atbilde pareiza.";
				count++;
			}
			else {
				document.getElementById("atbilde").innerHTML = "Atbilde nepareiza.";
		    }
			document.getElementById(text2).style.display = 'none';
			document.getElementById(text3).style.display = 'block';
			document.getElementById(texta).style.display = 'block';
			document.getElementById(textb).style.display = 'block';
			document.getElementById(textc).style.display = 'block';
			document.getElementById(textd).style.display = 'block';
			document.getElementById("pskaits1").innerHTML = "punkti: " + count;
			document.getElementById("pskaits2").innerHTML = count+"/10 punktiem iegūti";
		}
	}
}
function nbut(p, o, a, b, c , d, color) {
	if (a===101) {
		document.getElementById("psk1").style.display = 'none';
	}
	document.getElementById("atbilde").innerHTML = "";
	let text1 = "box"+p.toString();
	let text2 = "box"+o.toString();
	let text3 = "nb"+p.toString();
	let text4 = "but"+o.toString();
	let texta = "answ"+a.toString();
	let textb = "answ"+b.toString();
	let textc = "answ"+c.toString();
	let textd = "answ"+d.toString();
	document.getElementById(text1).style.display = 'none';
	document.getElementById(text2).style.display = 'block';
	document.getElementById(text3).style.display = 'none';
    document.getElementById(text4).style.display = 'block';
	document.getElementById(texta).style.display = 'none';
	document.getElementById(textb).style.display = 'none';
	document.getElementById(textc).style.display = 'none';
	document.getElementById(textd).style.display = 'none';
	document.body.style.background = color;
	document.getElementById("psk1").style.background = color;
}
function restart(color) {
	x1.style.display = 'block';
	x11.style.display = 'none';
	document.getElementById("but1").style.display = 'block';
	document.getElementById("psk1").style.display = 'block';
	count=0;
	document.getElementById("pskaits1").innerHTML = "punkti: " + count;
	document.body.style.background = color;
	document.getElementById("psk1").style.background = color;
}