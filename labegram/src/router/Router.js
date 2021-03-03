import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ErrorPage from '../screens/ErrorPage'
import FeedPage from '../screens/FeedPage'
import LoginPage from '../screens/LoginPage'
import PostDetailPage from '../screens/PostDetailPage'
import SignUpPage from '../screens/SignUpPage'

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
                    <PostDetailPage />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;