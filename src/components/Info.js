import React, { useState, useEffect } from 'react';
import './Info.css';
import Loader from './Loader';
export default function Info({ match }) {
    const [teams, setTeams] = useState([]);
    const [squad, setSquad] = useState([]);
    const [isLoading, setIsLoading] = useState([]);
    const id = match.params.id;
    const fetchInfoTeam = async (term) => {
        const response = await fetch(`https://api.football-data.org/v2/teams/${term}`, {
            headers: {
                'X-Auth-Token': '7c85284e1bcd44119caa52f8e25715ec'
            }
        })
        const info = await response.json();
        setTeams(info);
        setSquad(info.squad);
        setIsLoading(false);
        console.log(info);
    }

    useEffect(() => {
        fetchInfoTeam(id);
    }, [id]);

    function render() {
        if (isLoading) return <Loader />
        return (
            <div>
                <div className='title'>
                    <h1>{teams.name}</h1>
                    <img className='teamlogo' src={teams.crestUrl} alt='Team logo not found' />
                </div>
                <div className='tb'>
                    <table className = 'ui fixed table'>
                        <tbody>
                            <tr className = ''>
                                <th>Player Namw</th>
                                <th>Position</th>
                                <th>nationality</th>
                            </tr>
                            {squad.map(team => (
                                <tr>
                                    <td>{team.name}</td>
                                    <td>{team.position || team.role}</td>
                                    <td>{team.countryOfBirth}</td>
                                </tr>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
    return (
        <div>
            {render()}
        </div>
    )
}
