import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import Nomatches from '../components/Nomatches';
import '../components/App.css';
export default function Home() {

	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const fetchData = async () => {
		const response = await fetch(`https://api.football-data.org/v2/matches`, {
			headers: {
				'X-Auth-Token': '7c85284e1bcd44119caa52f8e25715ec'
			}
		})
		const match = await response.json();

		setData(match.matches);
		setIsLoading(false);
		console.log(match.matches);
		// console.log(match.matches.homeTeam.id);
	}
	useEffect(() => {
		fetchData();
	}, []);

	function render() {
		if (isLoading) return <Loader />
		if (data.length === 0) return <Nomatches />

		return (
			<div className='ui text container'>
				{data.map(mtc => (
					<table className='ui fixed table' key={mtc.id}>
						<tbody>
							<tr className=''>
								<th><i>
									<Link className='namelink' to={`home/${mtc.homeTeam.id}`}><h4>{mtc.homeTeam.name}</h4></Link>  <h4><span>{mtc.score.fullTime.homeTeam}</span>  -  <span>{mtc.score.fullTime.awayTeam}</span></h4>  <Link className='namelink' to={`home/${mtc.awayTeam.id}`}><h4>{mtc.awayTeam.name}</h4></Link>
								</i></th>
							</tr>
						</tbody>
						<button id = 'but' className = 'ui button'>{mtc.status}</button>
						<button id = 'but' className = 'ui button'>{mtc.utcDate}</button>
						<button id = 'but' className = 'ui button'>{mtc.competition.name}</button>
					</table>
				))}
			</div>
		);
	}

	return (
		<div>{render()}</div>
	);
}