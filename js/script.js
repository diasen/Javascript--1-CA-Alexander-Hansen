document.querySelector('.loading').innerHTML = ` <img
src="http://guess-that-pokemon.herokuapp.com/assets/images/loading.gif"
/>`;

async function getPokemons() {
	try {
		const response = await fetch('https://api.pokemontcg.io/v2/cards');
		const jsonResults = await response.json();
		const pokemonArray = jsonResults.data;
		console.log(pokemonArray);

		pokemonArray.forEach(function (value) {
			document.querySelector('main').innerHTML += `
            <div class="card">
                <h1>${value.name}</h1>
                <p>${value.supertype}</p>
                <p>Hp:${value.hp}</p>
				<img class="pokeballImg" src="https://seeklogo.com/images/P/pokeball-logo-DC23868CA1-seeklogo.com.png" alt="">
                <a href="details.html?id=${value.id}">More info</a>
            </div>
        `;
		});
	} catch (error) {
		document.querySelector('.alert') += showAlertTouser(error, 'danger');
	} finally {
		document.querySelector('.loading').classList.add('hide');
	}
}

getPokemons();
