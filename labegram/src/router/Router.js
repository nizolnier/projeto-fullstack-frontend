import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ErrorPage from '../screens/ErrorPage/ErrorPage'
import FeedPage from '../screens/FeedPage/FeedPage'
import LoginPage from '../screens/LoginPage/LoginPage'
import PostDetailPage from '../screens/PostDetailPage/PostDetailPage'
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