import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ErrorPage from '../screens/ErrorPage/ErrorPage'
import FeedPage from '../screens/FeedPage/FeedPage'
import LoginPage from '../screens/LoginPage/LoginPage'
import PostDetailsPage from '../screens/PostDetailsPage/PostDetailsPage'
import SignUpPage from '../screens/SignUpPage/SignUpPage'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/signup">
                    <SignUpPage />
                </Route>
                <Route exact path={['/feed', '/']}>
                    <FeedPage />
                </Route>
                <Route exact path="/feed/post/:id">
                    <PostDetailsPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;