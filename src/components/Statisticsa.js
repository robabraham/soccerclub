import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import './App.css';
export default function Standings() {

    const [ligagoals, setLigagoals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const fetchData = async () => {
        const response = await fetch(`https://api.football-data.org/v2/competitions/SA/scorers`, {
            headers: {
                'X-Auth-Token': '7c85284e1bcd44119caa52f8e25715ec'
            }
        })
        const match = await response.json();
        setLigagoals(match.scorers);
        console.log(match.scorers);
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
                                    <th>Player</th>
                                    <th>Goals</th>
                                    <th>Position</th>
                                    <th>Team Name</th>
                                    
                                </tr>
                                {ligagoals.map(goal => (
                                <tr key={goal.player.id}>
                                    <td>{goal.player.name}</td>
                                    <td>{goal.numberOfGoals}</td>
                                    <td>{goal.player.position}</td>
                                    <td>{goal.team.name}</td>
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
