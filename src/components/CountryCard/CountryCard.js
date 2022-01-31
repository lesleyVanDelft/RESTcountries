import './CountryCard.css';

const CountryCard = ({ img, name, population, region, capital }) => {
	return (
		<article className="CountryCard">
			<img src={img} alt="" />
			<div className="CountryCard__content">
				<h2>{name}</h2>
				<p>
					<span className="bold">Population:</span>{' '}
					{population.toLocaleString()}
				</p>
				<p>
					<span className="bold">Region:</span> {region}
				</p>
				<p>
					<span className="bold">Capital:</span> {capital}
				</p>
			</div>
		</article>
	);
};

export default CountryCard;
