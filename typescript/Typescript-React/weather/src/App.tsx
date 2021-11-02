import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Weather } from "./weather";
import WeatherInfo from "./WeatherInfo";
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const suffix = '&units=imperial&appid=d6c1dad3b2dd811ec34e5142a466f21b';
const has = (value: any): value is boolean => !!value;

const App: React.FC = () => {
	const [city, setCity] = useState('London');
	const [weather, setWeather] = useState<Weather | null>(null);
	const [msgFromChild, setMsgFromChild] = useState('');

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setCity(event.target.value);
	};
	const getWeather = async (city: string) => {
		const response = await fetch(baseUrl + city + suffix);
		if (response.status === 200) {
			const jsonWeather = await response.json();
			const cityTemp: Weather = jsonWeather.main;
			cityTemp.city = jsonWeather.name;
			setWeather(cityTemp);
		} else {
			setWeather(null);
		}
	};
	const handleSubmit = (event: FormEvent) => {
		event.preventDefault();
		getWeather(city);
	};

	useEffect(() => { getWeather(city); }, []);

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input type="text" placeholder="Enter city" onChange={handleChange} />
				<button type="submit">Get weather</button>
			</form>
			{!!msgFromChild ? <strong>Children said: {msgFromChild}</strong> : null}
			{has(weather) ? (<WeatherInfo weather={weather} parentChannel={setMsgFromChild}><strong>Hello from the parent!</strong></WeatherInfo>) : (<h2>No weathre available</h2>)}
		</>
	);
};

export default App;
