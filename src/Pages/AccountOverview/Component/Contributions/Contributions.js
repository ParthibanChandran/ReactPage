import React from 'react'
import { Switch, Route, NavLink } from "react-router-dom";
import "./style.css";
import Profile from './Profile';


// const Profile = () => <div>You're on the Profile Tab</div>;
// const Comments = () => <div>You're on the Comments Tab</div>;
// const Contact = () => <div>You're on the Contact Tab</div>;

export default function Contributions(props) {
    const { path } = props.match;
    return (
        <React.Fragment>
          <div className="links">
            <NavLink to={`${path}/Grants`} activeClassName="active" className="link" >Grants (1)</NavLink>
            <NavLink to={`${path}/Contributions`} activeClassName="active" className="link">Contributions (1890)</NavLink>
            <NavLink to={`${path}/Exchange`} activeClassName="active" className="link">Exchange (0)</NavLink>
            <NavLink to={`${path}/Other Transaction`} activeClassName="active" className="link">Other Transaction (0)</NavLink>
          </div>
        <div className="tabs">
          <Switch>
            <Route exact path={`${path}/Grants`} component={Profile} />
            <Route exact path={`${path}/Contributions`} component={Profile} />
            <Route exact path={`${path}/Exchange`} component={Profile} />
            <Route exact path={`${path}/Other Transaction`} component={Profile} />
          </Switch>
        </div>
        </React.Fragment>
    )
}


