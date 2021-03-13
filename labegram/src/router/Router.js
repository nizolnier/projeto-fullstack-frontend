import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ErrorPage from '../screens/ErrorPage/ErrorPage'
import FeedPage from '../screens/FeedPage/FeedPage'
import LoginPage from '../screens/LoginPage/LoginPage'
import PostDetailsPage from '../screens/PostDetailsPage/PostDetailsPage'
import SignUpPage from '../screens/SignUpPage/SignUpPage'
import CreatePostPage from '../screens/CreatePostPage/CreatePostPage'
import Header from '../components/Header/Header'

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <Header />
                    <LoginPage />
                </Route>
                <Route exact path="/signup">
                    <Header />
                    <SignUpPage />
                </Route>
                <Route exact path={['/feed', '/']}>
                    <Header />
                    <FeedPage />
                </Route>
                <Route exact path="/feed/post/:id">
                    <Header />
                    <PostDetailsPage />
                </Route>
                <Route exact path="/create">
                    <Header />
                    <CreatePostPage />
                </Route>
                <Route>
                    <Header />
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Router;