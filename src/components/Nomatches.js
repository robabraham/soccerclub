import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
export default function Nomatches() {
    return (
        <div>
            <h1 id='hometitle'>Sorry today no matches!!</h1>
            <h2 id='hometitle1'>See more Standings</h2>
            <Link className='tablelink' to = {`home/standings/pd`}><div className = 'homelink'><p className = 'tablelinkname'> La Liga</p></div></Link>
            <Link className='tablelink' to = {`home/standings/bl`}><div className = 'homelink'><p className = 'tablelinkname'> Bundesliga</p></div></Link>
            <Link className='tablelink' to = {`home/standings/fl`}><div className = 'homelink'><p className = 'tablelinkname'> France 1 League</p></div></Link>
            <Link className='tablelink' to = {`home/standings/sa`}><div className = 'homelink'><p className = 'tablelinkname'> A Seria</p></div></Link>
            <Link className='tablelink' to = {`home/standings/pl`}><div className = 'homelink'><p className = 'tablelinkname'> Premier League</p></div></Link>
        </div>
    )
}
