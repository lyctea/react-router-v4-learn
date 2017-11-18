import React, { PropTypes } from 'react';
import {
    BrowserRouter,
    Route,
    Link,
    Redirect,
    withRouter,
    Switch
} from 'react-router-dom';

const PrimaryLayout = () => (
    <div className="primary-layout">
        <PrimaryHeader />
        <main>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/users" component={UserSubLayout} />
                <Route path="/products" component={ProductSubLayout} />
                <Redirect to="/" />
            </Switch>
        </main>
    </div>
);

const UserSubLayout = () => (
    <div className="user-sub-layout">
        <aside>
            <UserNav />
        </aside>
        <div className="primary-content">
            <Switch>
                <Route path="/users" exact component={BrowseUsersPage} />
                <Route path="/users/:userId" component={UserProfilePage} />
            </Switch>
        </div>
    </div>
);

const UserSubLayout = props => (
    <div className="user-sub-layout">
        <aside>
            <UserNav />
        </aside>
        <div className="primary-content">
            <Switch>
                <Route
                    path={props.match.path}
                    exact
                    component={BrowseUsersPage}
                />
                <Route
                    path={`${props.match.path}/:userId`}
                    component={UserProfilePage}
                />
            </Switch>
        </div>
    </div>
);

const App = () => (
    <BrowserRouter>
        <PrimaryLayout />
    </BrowserRouter>
);

export default App;

/**
 * exact 路由精确匹配，
 * 同一个路由可以匹配到多个组件，按书写书序渲染到dom中
 */
