let gender = document.querySelector('#male').value;
let age = document.querySelector('#age');
let height = document.querySelector('#height');
let weight = document.querySelector('#weight');
let buttonCount = document.querySelector('.count_button');
let physAct;
age.value = 0;
height.value = 0;
weight.value = 0;
buttonCount.setAttribute('disabled', true);
buttonCount.style.backgroundColor = 'rgb(220, 220,220)';
let buttonClear = document.querySelector('.clear_button');
buttonClear.style.color = 'rgb(220, 220,220)';
buttonClear.setAttribute('disabled', true);
	document.querySelector('.gender_male').style.backgroundColor = '#1ba409';
	document.querySelector('.gender_male').style.color = 'rgb(255, 255,255)';
document.querySelector('#male').onclick = function maleButton() {
	gender = document.querySelector('#male').value;
	document.querySelector('.gender_male').style.backgroundColor = '#1ba409';
	document.querySelector('.gender_male').style.color = 'rgb(255, 255,255)';
	document.querySelector('.gender_female').style.color = 'rgb(0, 0, 0)';
	document.querySelector('.gender_female').style.backgroundColor = 'rgb(255, 255,255)';
}
document.querySelector('#female').onclick = function femaleButton() {
	gender = document.querySelector('#female').value;
	document.querySelector('.gender_female').style.backgroundColor = '#1ba409';
	document.querySelector('.gender_female').style.color = 'rgb(255, 255,255)';
	document.querySelector('.gender_male').style.color = 'rgb(0, 0, 0)';
	document.querySelector('.gender_male').style.backgroundColor = 'rgb(255, 255,255)';
}
age.oninput = function () {
	if (age.value != 0 && height.value != 0 && weight.value != 0) {
		buttonCount.removeAttribute('disabled');
		buttonCount.style.backgroundColor = '#1ba409';
	}
	else {
		buttonCount.setAttribute('disabled', true);
		buttonCount.style.backgroundColor = 'rgb(220, 220,220)';
	}
	if (age.value != 0 || height.value != 0 || weight.value != 0) {
		buttonClear.removeAttribute('disabled');
		buttonClear.style.color = 'rgb(253, 54, 54)';
	}
	else {
		buttonClear.style.color = 'rgb(220, 220,220)';
buttonClear.setAttribute('disabled', true);
	}
}
weight.oninput = function () {
	if (age.value != 0 && height.value != 0 && weight.value != 0) {
		buttonCount.removeAttribute('disabled');
		buttonCount.style.backgroundColor = '#1ba409';
	}
	else {
		buttonCount.setAttribute('disabled', true);
		buttonCount.style.backgroundColor = 'rgb(220, 220,220)';
	}
	if (age.value != 0 || height.value != 0 || weight.value != 0) {
		buttonClear.removeAttribute('disabled');
		buttonClear.style.color = 'rgb(253, 54, 54)';
	}
	else {
		buttonClear.style.color = 'rgb(220, 220,220)';
buttonClear.setAttribute('disabled', true);
	}

}
height.oninput = function () {
	if (age.value != 0 && height.value != 0 && weight.value != 0) {
		buttonCount.removeAttribute('disabled');
		buttonCount.style.backgroundColor = '#1ba409';
	}
	else {
		buttonCount.setAttribute('disabled', true);
		buttonCount.style.backgroundColor = 'rgb(220, 220,220)';
	}
	if (age.value != 0 || height.value != 0 || weight.value != 0) {
		buttonClear.removeAttribute('disabled');
		buttonClear.style.color = 'rgb(253, 54, 54)';
	}
	else {
		buttonClear.style.color = 'rgb(220, 220,220)';
buttonClear.setAttribute('disabled', true);
	}
}
buttonCount.onclick = function () {
	console.log('a');
}
buttonClear.onclick = function () {
	buttonClear.setAttribute('disabled', true);
	buttonClear.style.color = 'rgb(220, 220,220)';
	age.value = 0;
	height.value = 0; 
	weight.value = 0;
	document.querySelector('.footer').classList.add('hidden_container');
	buttonCount.style.backgroundColor = 'rgb(220, 220,220)';
	gender = document.querySelector('#male').value;
	document.querySelector('.gender_male').style.backgroundColor = '#1ba409';
	document.querySelector('.gender_male').style.color = 'rgb(255, 255,255)';
	document.querySelector('.gender_female').style.color = 'rgb(0, 0, 0)';
	document.querySelector('.gender_female').style.backgroundColor = 'rgb(255, 255,255)';
	document.querySelector('.min_phys_act').checked = true;
}
buttonCount.onclick = function () {
document.querySelector('.footer').classList.remove('hidden_container');
buttonCount.setAttribute('disabled', true);
	buttonCount.style.backgroundColor = '#3bb450';
	let a = document.getElementsByName('phys_act');
for (let i = 0; i<a.length; i++) {
	if (a[i].checked) {
		physAct = a[i].value;
	}
}
let decline;
let gain;
let maintenance;
let ratioAct = 1.2;
if (physAct == 'min') {
	ratioAct = 1.2;
}
else if (physAct == 'low') {
	ratioAct = 1.375;
}
else if (physAct == 'average') {
	ratioAct = 1.55;
}
else if (physAct == 'high') {
	ratioAct = 1.725;
}
else if (physAct == 'very_high') {
	ratioAct = 1.9;
}
if (gender == 'male') {
maintenance = (10 * weight.value) + (6.25 * height.value) - (5 * age.value) + 5;
maintenance *= ratioAct;
}
else {
maintenance = (10 * weight.value) + (6.25 * height.value) - (5* age.value) - 161;
}
decline = maintenance - (maintenance / 100 * 15);
gain =  maintenance + (maintenance / 100 * 15);
document.querySelector('.maintenance').innerHTML = Math.round(maintenance) + ' ккал';
document.querySelector('.decline').innerHTML = Math.round(decline) + ' ккал';
document.querySelector('.gain').innerHTML = Math.round(gain) + ' ккал';
}

	