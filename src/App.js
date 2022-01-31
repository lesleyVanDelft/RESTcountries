import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import CountryCard from './components/CountryCard/CountryCard';

const baseURL = 'https://restcountries.com/v3.1/all';

function App() {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get(baseURL).then(response => {
			setData(response.data);
		});
	}, []);

	if (!data) return null;

	return (
		<div className="App">
			<Navbar />

			<div className="input">
				<input type="text" placeholder="Search for a country" />
			</div>

			<div className="content">
				{data.map((country, i) => {
					return country.continents.includes('Europe') ? (
						<CountryCard
							key={i}
							img={country.flags.png}
							name={country.name.common}
							population={country.population}
							region={country.region}
							capital={country.capital}
						/>
					) : null;
				})}
			</div>
		</div>
	);
}

export default App;
