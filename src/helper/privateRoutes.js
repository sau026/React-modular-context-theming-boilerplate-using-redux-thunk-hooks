import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { checkAuthorization } from '../helper/helper';
import Header from '../common/header';

const PrivateRoute = ({
  component: Component,
  redirect: pathname,
  ...rest
}) => {
  const Routes = (props) => {
    if(checkAuthorization() === true){
      return (
        <Route
          {...rest}
          render={props =>
            <div>
              <Header />
              <Component {...rest} />
            </div>
          }
        />
      );
    }else {
      return (
        <Redirect 
          to={{
            pathname,
            state: { from: props.location },
          }}
        />
      );
    }
  }
  return (
    <Routes />
  );
};

PrivateRoute.defaultProps = { redirect: '/' };

PrivateRoute.propTypes = {
  component: PropTypes.object.isRequired,
  redirect: PropTypes.string,
};

export default PrivateRoute;