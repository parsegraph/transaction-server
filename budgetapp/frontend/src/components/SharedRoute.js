import React from 'react';
import {connect} from 'react-redux';
import { Route} from 'react-router-dom';

function SharedRoute({ component: Component, userComponent: UserComponent, roles, ...rest }) {
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