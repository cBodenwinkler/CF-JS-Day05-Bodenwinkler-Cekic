var bookArr = JSON.parse(books);

// console.table(bookArr);

// function displayBook(books) {
// 	document.getElementById("text").innerHTML = bookArr[0].title;
// }

// document.getElementById("list1").innerHTML += "<p>" + bookArr[1].title + " - " + bookArr[1].author +  "</p>";

// <div> <img id='${i}' src='${bookArr[i].image}'></div> </p>"

for(var i = 0; i < bookArr.length; i++) {
	var placeHolder = "list" + (i+1);
	document.getElementById(placeHolder).innerHTML = "<p>" + bookArr[i].title + " - " + bookArr[i].author + `</p> <div> <img class='styleChange' id='${i}' src='${bookArr[i].image}'> </div>`;

	if (bookArr.read == true) {
			document.getElementsByName("bookArr.read").style.width = 1000;
		} else {
			continue
		}

}

// if (bookArr[i].read == true) {
// 		document.getElementsByClass("styleChange").style.opacity : 0.5;
// 	} else {
// 		document.getElementsByClass("styleChange").style.opacity : 1;
// 	}

