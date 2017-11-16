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
                <Route path="/users" component={UsersPage} />
                <Route path="/users/add" component={UserAddPage} />
                <Redirect to="/" />
            </Switch>
        </main>
    </div>
);

const HomePage = () => <div>Home Page</div>;
const UsersPage = () => <div>Users Page</div>;
const UsersMenu = () => <div>UsersMenuUsersMenu</div>;
const PrimaryHeader = () => <div>==============</div>;
const UserAddPage = () => <div>UserAddPage</div>;

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
