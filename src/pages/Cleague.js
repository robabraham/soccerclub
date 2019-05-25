import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import '../components/App.css';
export default function Aseria() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const fetchData = async () => {
		const response = await fetch(`https://api.football-data.org/v2/competitions/CL/matches`, {
			headers: {
				'X-Auth-Token': '7c85284e1bcd44119caa52f8e25715ec'
			}
		})
		const match = await response.json();
		setData(match.matches);
		setIsLoading(false);
	}
	useEffect(() => {
		fetchData();
	}, []);

	function render() {
		if (isLoading) return <Loader />
		return (
			<div>
				<div className='namelogo'>
					<h1>Champion League</h1>
					<img className='ligalogo' src='http://www.stickpng.com/assets/images/5842fe06a6515b1e0ad75b3b.png' alt='logo' />
					<Link className='tablelink' to = {`home/scorers/cl`}><h3 className = 'tablelinkname'>Scorers here</h3></Link>
				</div>
				<div className='ui text container'>
					{data.map(mtc => (
						<table className='ui fixed table' key={mtc.id}>
							<tbody>
								<tr className=''>
									<th><i>
										<Link className='namelink' to={`aseria/${mtc.homeTeam.id}`}><h4>{mtc.homeTeam.name}</h4></Link>  <h4><span>{mtc.score.fullTime.homeTeam}</span>  -  <span>{mtc.score.fullTime.awayTeam}</span></h4>  <Link className='namelink' to={`aseria/${mtc.awayTeam.id}`}><h4>{mtc.awayTeam.name}</h4></Link>
									</i></th>
								</tr>
							</tbody>
							<button id='but' className='ui button'>{mtc.status}</button>
							<button id='but' className='ui button'>{mtc.utcDate}</button>
							<button id='but' className='ui button'>{mtc.stage} {mtc.matchday}</button>
						</table>
					))}
				</div>
			</div>
		);
	}

	return (
		<div>{render()}</div>
	);
}