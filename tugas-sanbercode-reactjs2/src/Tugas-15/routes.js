import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Tugas9 from '../Tugas-9/tugas9.js'
import Tugas10 from '../Tugas-10/tugas10.js'
import Tugas11 from '../Tugas-11/tugas11'
import Tugas12 from '../Tugas-12/tugas12';
import Tugas13 from '../Tugas-13/tugas13'
import Tugas14 from '../Tugas-14/tugas14'
import Tugas15 from './tema'

export default function App() {
    return (
        <Router>
            <div style={{ textAlign: "center" }}>
                <nav className="navbar">
                    <ul>
                        <li>
                            <Link className="navbar" to="/">Tugas 9</Link>
                        </li>
                        <li>
                            <Link className="navbar" to="/tugas10">Tugas 10</Link>
                        </li>
                        <li>
                            <Link className="navbar" to="/tugas11">Tugas 11</Link>
                        </li>
                        <li>
                            <Link className="navbar" to="/tugas12">Tugas 12</Link>
                        </li>
                        <li>
                            <Link className="navbar" to="/tugas13">Tugas 13</Link>
                        </li>
                        <li>
                            <Link className="navbar" to="/tugas14">Tugas 14</Link>
                        </li>
                        <li>
                            <Link className="navbar" to="/tugas15">Tugas 15</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>

                    <Route path="/tugas10">
                        <Tugas10 />
                    </Route>

                    <Route path="/tugas11">
                        <Tugas11 />
                    </Route>

                    <Route path="/tugas12">
                        <Tugas12 />
                    </Route>

                    <Route path="/tugas13">
                        <Tugas13 />
                    </Route>

                    <Route path="/tugas14">
                        <Tugas14 />
                    </Route>

                    <Route path="/tugas15">
                        <Tugas15 />
                    </Route>

                    <Route path="/">
                        <Tugas9 />
                    </Route>

                </Switch>
            </div>
        </Router >
    );
}