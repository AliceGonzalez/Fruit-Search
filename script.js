//^ SELECT HTML ELEMENTS
const input = document.querySelector('#fruit'); //Selects HTML search bar
const suggestions = document.querySelector('.suggestions ul'); //Selects HTML container for all suggestions

//^ SELECT LIST OF FRUITS
const fruit = ['Apple 🍎', 'Apricot', 'Avocado 🥑', 'Banana 🍌', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry 🫐', 'Boysenberry', 'Currant', 'Cherry 🍒', 'Coconut 🥥', 'Cranberry', 'Cucumber 🥒', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape 🍇', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit 🥝', 'Kumquat', 'Lemon 🍋', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon 🍍', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine 🍊', 'Papaya', 'Passionfruit', 'Peach 🍑', 'Pear 🍐', 'Persimmon', 'Plantain', 'Plum', 'Pineapple 🍍', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry 🍓', 'Tamarillo', 'Tamarind', 'Yuzu']; //List of fruits

//^ SEARCH FUNCTION - Takes a string and search fruit array. Returns fruits whose names include search string (case-sensitive)
//Function to filter list of fruits array and return result
function search(str) {
	return fruit.filter(fruitName => fruitName.toLowerCase().includes(str.toLowerCase())); //Filter through array of fruit and compare if lower case version of str any string of fruit in the array.Returns a new array with only fruit names in search lower case.
}

//^ SEARCH HANDLER FUNCTION - Executes when user types in search bar and passes results into showSuggestions function
//Function  that executes whe user types
function searchHandler(e) {
	const inputValue = e.target.value; //Variable that retrieves the value entered by the user from the event object
	if (/[^a-zA-Z]/.test(inputValue)) { //If inputValue is not a letter from a-z (uppercase or lowercase)
		alert('🛑Please enter letters only.😐'); //Print this alert and prevent rest of function from executing
		return;
	}
	const results = search(inputValue); //Variable that gives results by calling search function and passing InputValue as an argument
	showSuggestions(results, inputValue) //Calling function showSuggestions with 2 arguments. Show fruit suggestions based on input.
}

//^ SHOW SUGGESTIONS FUNCTION - Function displays suggestions based on search results
//Function that shows fruit suggestion that include letters typed by the user
function showSuggestions(results, inputVal) { 

	suggestions.innerHTML = ''; //Set HTML suggestions content to empty string. Clears existing content.

	if(inputVal.length > 0) { //Conditional Statement: If the inputValue is more than 0 characters
		results.forEach(results => { //Iterate through the results array
			const li = document.createElement('li'); //Create a new list element
			const boldResults= results.replace(new RegExp(`(${inputVal})`, 'ig'), '<span class="has-suggestions">$1</span>'); //Create bold style and store to a variable
			li.innerHTML = boldResults; //Apply boldResults style to each list item that matches part of the result
			suggestions.appendChild(li); //Add fruit suggestions to the list
		});
	}
}

//^ USE SUGGESTION FUNCTION - Function executed when suggestion is clicked.It updates search bar by setting value to the clicked suggestion's text.
//Function that populates the search bar with the fruit user clicks on.
function useSuggestion(e) {
	input.value = e.target.innerText; //If the input value is equal to the target text
	suggestions.innerHTML = ""; //Set HTML suggestions content to empty string. Clears existing content.
}

//^ EVENT LISTENERS 
input.addEventListener('keyup', searchHandler); //Execute funtion searchHandler when key is released typing input in search box
suggestions.addEventListener('click', useSuggestion); //Execute function useSuggestions when suggestion element is clicked