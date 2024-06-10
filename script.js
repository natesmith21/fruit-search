const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) { 
	let results = fruit.filter((item) => item.toLowerCase().includes(str));
	return results;
}

function searchHandler(e) {
	let term = input.value.toLowerCase();
	showSuggestions(search(term), term);
}

function showSuggestions(results, inputVal){
	clearList()
	for (let el of results){
		const li = document.createElement('li');
		li.id = el;
		li.innerText = el;
		suggestions.append(li);
	}
}

function clearList(){
	while (suggestions.firstChild){
		suggestions.removeChild(suggestions.firstChild)
	}
}


// 	// TODO -- this displays the suggestions in the ul 

function useSuggestion(e) {
	input.value = e.target.id
	suggestions.style.display = 'none';
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

// bold matching criteria 



// const getSuggesestions = document.querySelectorAll('li');
// const list = [];
// for(let item of getSuggesestions){
// 	list.push(item.id);
// }
// if(!inputVal){
// 	for(let fruit of getSuggesestions){
// 		fruit.remove();
// 	}
// 	return;
// }else if(list.length >= results.length){
// 	let remove = list.filter((fruit) => !results.includes(fruit));
// 	for(let fruit of remove){
// 		document.getElementById(fruit).remove();
// 	}
// 	return;
// } 
// for(let item of results){
// 	if(!list.includes(item)){
// 		const fruit = document.createElement('li');
// 		fruit.id = item
// 		fruit.innerText = item;
// 		suggestions.append(fruit);
// 	} 
// }