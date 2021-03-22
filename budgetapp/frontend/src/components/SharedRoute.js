import React from 'react';
import {connect, useDispatch } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import {hasUserSession} from '../redux/actions/signUpActions';

function SharedRoute({ component: Component, userComponent: UserComponent, roles, ...rest }) {
    const dispatch = useDispatch();
    dispatch(hasUserSession());

    const hasSession = rest.signup.hasUserSession;
    return (
        <Route {...rest} render={props => {
            if (!hasSession) {
                // not logged in so redirect to anonymous component
                return <Component {...props}/>;
            }

            // logged in so return user's component
            return <UserComponent {...props} />
        }} />
    );
}

const mapStateToProps = (state) => {
    return {signup:state.signup}
}

SharedRoute = connect(mapStateToProps)(SharedRoute);
export {SharedRoute};