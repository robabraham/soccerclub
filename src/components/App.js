import React  from 'react';
import './App.css';
import Info from './Info';
import Statisticpd from './Statisticpd';
import Statisticbl from './Statisticbl';
import Statisticfl from './Statisticfl';
import Statisticpl from './Statisticpl';
import Statisticsa from './Statisticsa';
import Statisticcl from './Statisticcl';
import Standingsbl from './Standingsbl';
import Standingspl from './Standingspl';
import Standingsfl from './Standingsfl';
import Standingspd from './Standingspd';
import Standingssa from './Standingssa';
import Navigation from './Navigation';
import Home from '../pages/Home';
import Laliga from '../pages/Laliga';
import Bundesliga from '../pages/Bundesliga';
import France from '../pages/France';
import Premier from '../pages/Premier';
import Aseria from '../pages/Aseria';
import Cleague from '../pages/Cleague';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
export default function App() {
    // const [data, setData] = useState([]);

    // const fetchData = async () => {
    //     const response = await fetch(`https://api.football-data.org/v2/competitions/PL/matches?matchday=38`,{
    //         headers:{
    //             'X-Auth-Token':'7c85284e1bcd44119caa52f8e25715ec'
    //         }
    //     })
    //     const match = await response.json();
        
    //     setData(match.matches);
    //     console.log(match.matches);
    // }
    // useEffect(() => {
	// 	fetchData();
	// }, []);
  return (
    <div>
        <BrowserRouter>
            <div>
                <Navigation />
                <Switch>
                    <Route exact path = '/' component={Home}/>
                    <Route exact path = '/home/:id' component={Info}/>

                    <Route exact path = '/laliga' component={Laliga}/>
                    <Route path = '/home/standings/pd' component={Standingspd}/>
                    <Route path = '/home/scorers/pd' component={Statisticpd}/>
                    <Route path = '/laliga/:id' component={Info}/>

                    <Route exact path = '/bundesliga' component={Bundesliga}/>
                    <Route path = '/home/standings/bl' component={Standingsbl}/>
                    <Route path = '/home/scorers/bl' component={Statisticbl}/>
                    <Route path = '/bundesliga/:id' component={Info}/>

                    <Route exact path = '/france1league' component={France}/>
                    <Route path = '/home/standings/fl' component={Standingsfl}/>
                    <Route path = '/home/scorers/fl' component={Statisticfl}/>
                    <Route path = '/france1league/:id' component={Info}/>

                    <Route exact path = '/aseria' component={Aseria}/>
                    <Route path = '/home/standings/sa' component={Standingssa}/>
                    <Route path = '/home/scorers/sa' component={Statisticsa}/>
                    <Route path = '/aseria/:id' component={Info}/>

                    <Route exact path = '/premierleague' component={Premier}/>
                    <Route path = '/home/standings/pl' component={Standingspl}/>
                    <Route path = '/home/scorers/pl' component={Statisticpl}/>
                    <Route path = '/premierleague/:id' component={Info}/>

                    <Route path = '/cl' component={Cleague}/>
                    <Route path = '/home/scorers/cl' component={Statisticcl}/>
                </Switch>
            </div>
        </BrowserRouter>
        </div>
  )
}
