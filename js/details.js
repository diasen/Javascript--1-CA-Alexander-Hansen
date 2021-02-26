document.querySelector('.loading').innerHTML = ` <img class="loadinggif"
src="http://guess-that-pokemon.herokuapp.com/assets/images/loading.gif"
/>`;

const queryString = document.location.search;
console.log(queryString);

const params = new URLSearchParams(queryString);
console.log(params);

const getId = params.get('id');

async function getPokemon() {
	try {
		console.log(getId);
		const response = await fetch('https://api.pokemontcg.io/v2/cards/' + getId);
		const jsonResults = await response.json();
		console.log(jsonResults.data.name);

		document.title = jsonResults.data.name;
		document.querySelector(
			'h1'
		).innerHTML = `Pokemon: ${jsonResults.data.name}`;

		document.querySelector(
			'p'
		).innerHTML = `Artist: ${jsonResults.data.artist}`;

		document.querySelector(
			'.img'
		).innerHTML = `<img class="pokemon__img" src="${jsonResults.data.images.small}"/>`;
	} catch (error) {
		document.querySelector('.alert').innerHTML += showAlertTouser(
			error,
			'danger'
		);
	} finally {
		document.querySelector('.loading').classList.add('hide');
	}
}

getPokemon();
