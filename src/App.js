import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// import CountryCard from './components/CountryCard/CountryCard';
import Detail from './pages/Detail';
import Homepage from './pages/Homepage';

const baseURL = 'https://restcountries.com/v3.1/all';

function App() {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get(baseURL).then(response => {
			setData(response.data);
		});
	}, []);

	if (!data) return null;
	if (data) console.log(data);

	return (
		<div className="App">
			<Navbar />

			<div className="input">
				<input type="text" placeholder="Search for a country" />
			</div>

			<Routes>
				<Route path="details/:id" element={<Detail data={data} />} />
				<Route path="/" element={<Homepage data={data} />} />
			</Routes>
		</div>
	);
}

export default App;
