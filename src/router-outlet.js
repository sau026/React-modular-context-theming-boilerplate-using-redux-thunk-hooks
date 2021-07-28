import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './helper/privateRoutes'; // Private Routes, Will only accessible after Login
import AuthRoute from './helper/authRoutes'; // Auth Routes, Will only accessible before login.

// Lazy loading of all the components.
const LoginRoute = lazy(() => import('./pages/Login'));
const HomeRoute = lazy(() => import('./pages/Home'));
const RegisterRoute = lazy(() => import('./pages/Register'));

// Root routes
export default function Router_outlet() {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <AuthRoute exact path="/" component={LoginRoute}/>
                    <AuthRoute exact path="/login" component={LoginRoute}/>
                    <AuthRoute exact path="/register" component={RegisterRoute}/>
                    <PrivateRoute exact path="/home" component={HomeRoute}/>
                </Switch>
            </Suspense>
        </Router>
    );
  }
