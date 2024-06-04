const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) { 
	// let results = [];
	// // TODO -- this creates the list of items to show in the drop down. search uses search handler (?)

	// return results;
	let results = fruit.filter((item) => item.toLowerCase().includes(str));
	// console.log(results);
	return results;
}

function searchHandler(e) {
	// TODO -- this gets the letter just typed
	const alpha = 'abcdefghijklmnopqrstuvwxyz';
	let letter = e.key.toLowerCase();
	let term = input.value.toLowerCase();
	// if (alpha.indexOf(letter) !== -1){
	// 	term = input.value.toLowerCase()
	// }

	showSuggestions((search(term)), term);
}

// function showSuggestions(results, inputVal) {
// 	const list = document.querySelectorAll('li');
// 	const fruitIds = [];
// 	for(let fruit of list){
// 		fruitIds.push(fruit.id)
// 	}
// 	if (fruitIds.length >= results.length){
// 		let remove = fruitIds.filter((fruit) => !results.includes(fruit));
// 		for(let item of remove){
// 			document.getElementById(item).remove();
// 		}
// 		return;
// 	}
// 	for(let item of results){
// 		if(!fruitIds.includes(item)){
// 			const fruit = document.createElement('li');
// 			fruit.id = item
// 			fruit.innerText = item;
// 			suggestions.append(fruit);
// 		}
// 	}
// }

function showSuggestions(results, inputVal){
	const getSuggesestions = document.querySelectorAll('li');
	const list = [];
	for(let item of getSuggesestions){
		list.push(item.id);
	}
	if(!inputVal){
		for(let fruit of getSuggesestions){
			fruit.remove();
		}
		return;
	}else if(list.length >= results.length){
		let remove = list.filter((fruit) => !results.includes(fruit));
		for(let fruit of remove){
			document.getElementById(fruit).remove();
		}
		return;
	} 
	for(let item of results){
		if(!list.includes(item)){
			const fruit = document.createElement('li');
			fruit.id = item
			fruit.innerText = item;
			suggestions.append(fruit);
		} 
	}
}



// 	// TODO -- this displays the suggestions in the ul 

function useSuggestion(e) {
	input.value = e.target.id
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);