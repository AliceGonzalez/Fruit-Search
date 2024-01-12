const input = document.querySelector('#fruit'); //Search bar
const suggestions = document.querySelector('.suggestions ul'); //oOntainer for all suggestions

const fruit = ['Apple 🍎', 'Apricot', 'Avocado 🥑', 'Banana 🍌', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry 🫐', 'Boysenberry', 'Currant', 'Cherry 🍒', 'Coconut 🥥', 'Cranberry', 'Cucumber 🥒', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape 🍇', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit 🥝', 'Kumquat', 'Lemon 🍋', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon 🍍', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine 🍊', 'Papaya', 'Passionfruit', 'Peach 🍑', 'Pear 🍐', 'Persimmon', 'Plantain', 'Plum', 'Pineapple 🍍', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry 🍓', 'Tamarillo', 'Tamarind', 'Yuzu']; 

//Function to filter list of fruits array and return result
function search(str) {
	return fruit.filter(fruitName => fruitName.toLowerCase().includes(str.toLowerCase()));
}

//Function  that executes whe user types
function searchHandler(e) {
	const inputValue = e.target.value;
	if (/[^a-zA-Z]/.test(inputValue)) { //If input is not a letter from a-z (uppercase or lowercase)
		alert('🛑Please enter letters only.😐'); //Print this alert
		return;
	}
	const results = search(inputValue);
	showSuggestions(results, inputValue)
}

//Function that shows fruit suggestion that include letters typed by the user
function showSuggestions(results, inputVal) { 

	suggestions.innerHTML = ''; //Set HTML content to empty string

	if(inputVal.length > 0) { //If the inputValue is more than 0
		results.forEach(results => { //Iterate through the results
			const li = document.createElement('li'); //Create a new list element
			const boldResults= results.replace(new RegExp(`(${inputVal})`, 'ig'), '<span class="has-suggestions">$1</span>'); //Create bold style and save to a variable
			li.innerHTML = boldResults; //Apply boldResults style to each list item
			suggestions.appendChild(li); //Add item to the list
		});
	}
}

//Function that populates the search bar with the fruit  user clicks on.
function useSuggestion(e) {
	input.value = e.target.innerText; //If the input vale is equal to the target text
	suggestions.innerHTML = "";
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);