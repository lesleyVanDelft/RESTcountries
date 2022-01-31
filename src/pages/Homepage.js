import CountryCard from '../components/CountryCard/CountryCard';

const Homepage = ({ data }) => {
	return (
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
	);
};

export default Homepage;
