var quiz = {}

// This is what happens when you press the add button. 
function addQuestion() {
//	setting the variables to the html objects	
	let list = document.getElementById("new-quiz-list")
	let listQuestion = document.getElementById("question").value
	let listAnswer = document.getElementById("answer").value
	
//  this is where the new elements are created, appending ans to entry ensures that the answer is part of the line item and is bold
	let entry = document.createElement('li')
	let ans = document.createElement('div')
	ans.className = 'answer'
	ans.appendChild(document.createTextNode(listAnswer))
	entry.appendChild(document.createTextNode(listQuestion))
	entry.appendChild(ans)
	list.appendChild(entry)
	
//  Let's reset the value to be blank every time a new question is added
	question.value = ""
	answer.value = ""
}

//function addJson(q, a) {
	//quiz.appendChild(q, a)
//}


//  This function is to protect against html injection
function protect(elem) {
	elem = elem.replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

function submitQuiz() {
	let qName = document.getElementById("qname").value
	qName.split(' ').join('+')
	let quest = document.getElementById("new-quiz-list").outerHTML
	quest.split(' ').join('+')	
	
	

	window.open("https://github.com/seanauer42/hanrstudios-server/issues/new?title=" + qName + "&body=" + quest, '_blank')
	alert("Thanks for your contribution")
}

//  I don't want to have to type this everytime to make sure I'm protected from injection
// <button onclick="alert('nothing to see here')">don't click</button>


























// this is what happens when you hit the add button. The time and event gets added to the table
// There is no safety to check if there is text in the boxes, so you could add an empty row.
//function addEvent() {
//	let table = document.getElementById("questions-table")
//	let row = table.insertRow()
//	let cellQ = row.insertCell(0)
//	let cellA = row.insertCell(1)
//	let cellB = row.insertCell(2)
//	let tableQuestion=document.getElementById("question").value
//	let tableAnswer=document.getElementById("answer").value

	// protect against html injection
//	tableQuestion = tableQuestion.replace(/</g, "&lt;").replace(/>/g, "&gt;")
//	tableAnswer = tableAnswer.replace(/</g, "&lt;").replace(/>/g, "&gt;")

	// getting the row number for id and setting it
//	let num = table.rows.length
//	row.setAttribute("id", "row" + num)

// set the text for the cells
//	cellQ.innerHTML = tableQuestion
//	cellA.innerHTML = tableAnswer
//	cellQ.setAttribute("id", "question" + num)
//	cellA.setAttribute("id", "answer" + num)

// creating the edit button to add to the table
//	let editButton = document.createElement("BUTTON")
//	let e = document.createTextNode("Edit")
//	editButton.appendChild(e)
//	editButton.setAttribute("onclick", "editQuestion(" + num + ")")
//	editButton.setAttribute("id", "edit-row-" + num)

// creating the remove button to add to the table
//	let removeButton = document.createElement("BUTTON")
//	let r = document.createTextNode("Remove")
//	removeButton.appendChild(r)
//	removeButton.setAttribute("onclick", "removeQuestion(" + num + ")")
//	removeButton.setAttribute("id", "remove-row-" + num)


// adding the buttons just created
//	cellB.appendChild(editButton)
//	cellB.appendChild(removeButton)
//	cellB.setAttribute("id", "buttons-row-" + num)

	

// trying to erase the text that was just added to the table
//	document.getElementById("question").text = ""
//	tableAnswer= ""

	//populateEventSequence() 
//}