function adjustBodyPadding(){
	const nav = document.querySelector('.navbar');
	if(nav){
		document.body.style.paddingTop = nav.offsetHeight + 'px';
	}
}

window.addEventListener('load', adjustBodyPadding);
window.addEventListener('resize', adjustBodyPadding);

console.log("JavaScript connected");
