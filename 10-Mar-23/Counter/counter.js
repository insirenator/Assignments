let count = 0;
let count_el = document.getElementById("count-el");
let reset_btn = document.getElementById("resetBtn");
reset_btn.disabled = true;

function increment(){
	count += 1;
	count_el.innerText = count;
	reset_btn.disabled = false;
}

function reset(){
	count = 0;
	count_el.innerText = count;
	reset_btn.disabled = true;

}

function decrement(){
	if(count == 1) {
		reset_btn.disabled = true;
	}
	if(count > 0) {
		count -= 1;
		count_el.innerText = count;
	}
	else {
		alert("Value cannot be less that 0!")
	}
}