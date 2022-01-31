import './CountryCard.css';
import { Link, useParams } from 'react-router-dom';

const CountryCard = ({ img, name, population, region, capital }) => {
	// let params = useParams();

	return (
		<article className="CountryCard">
			<Link to={`/details/:id`}>
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
			</Link>
		</article>
	);
};

export default CountryCard;
