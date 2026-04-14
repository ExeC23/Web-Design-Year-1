// document.getElementById("demo").style.display = "none";
// document.getElementById("demo2").style.display = "none";
// document.getElementById("demo3").style.display = "none";
// function img1(){
	// document.getElementById("demo").style.display = "block";		
	// document.getElementById("demo").style = "font-size:50px";
// }
// function img1out(){	
	// document.getElementById("demo").style.display = "none";
// }
// function img2(){
	// document.getElementById("demo2").style.display = "block";
// }
// function img2out(){
	// document.getElementById("demo2").style.display = "none";
// }
// function img3(){
	// document.getElementById("demo3").style.display = "block";
// }
// function img3out(){
	// document.getElementById("demo3").style.display = "none";
// }
// let math = Math.floor(Math.random() * 9) + 1;
// function button1(){
	// document.getElementById("textId").innerHTML = + math;
// }
// function changeStyle(){
	// let myText = document.getElementById("textId");
	// myText.style = "font-size:200px";
	// myText.style.border = "dashed";
	// myText.style.borderColor = "red";
	// myText.innerHTML = "SSSSSSSS";
// }
				function button1(){
					let math = Math.floor(Math.random() * 9) + 1;
					document.getElementById("textId").innerHTML = + math;
				}
				let myDogImg = document.getElementById("myDog");
				buttonstyle.onclick = function(){	
					document.getElementById("myDog").style = "width:600px";
					document.getElementById("myDog").style = "padding:20px";
					document.getElementById("myDog").style.backgroundColor = "red";
					<!-- document.getElementById("myCat").src = "cat.webp"; -->
				}