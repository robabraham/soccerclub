import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import './App.css';
export default function Standings() {

    const [ligatable, setLigatable] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const fetchData = async () => {
        const response = await fetch(`https://api.football-data.org/v2/competitions/PL/standings`, {
            headers: {
                'X-Auth-Token': '7c85284e1bcd44119caa52f8e25715ec'
            }
        })
        const match = await response.json();
        setLigatable(match.standings[0].table);
        console.log(match.standings[0]);
        setIsLoading(false);
    }
    useEffect(() => {
        fetchData();
    }, []);
    function render() {
        if(isLoading) return <Loader />
        return (
            <div>
                <div className='tb'>
                        <table className='ui fixed table'>
                            <tbody>
                                <tr className=''>
                                    <th>Position</th>
                                    <th>Team</th>
                                    <th>Match</th>
                                    <th>Points</th>
                                </tr>
                                {ligatable.map(table => (
                                <tr key={table.team.id}>
                                    <td>{table.position}</td>
                                    <td><img className='tableteamlogo' src={table.team.crestUrl} alt='Team logo not found' /></td>
                                    <td>{table.playedGames}</td>
                                    <td>{table.points}</td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                </div>
            </div>
        )
    }
    return (
        <div>
            {render()}
        </div>
    )
}
