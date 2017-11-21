import React from 'react'
import { Provider } from 'react-redux'
import { Redirect, Route, Switch } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'
import Routes from './routes'
import Store from './store'

const { configureStore, history } = Store

const store = configureStore()
export default class extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Switch>
                        <Route path='/library' component={Routes.GalleryPage}/>    
                        <Route path='/' component={Routes.Main}/>
                        <Redirect from='*' to="/"/>
                    </Switch>
                </ConnectedRouter>
            </Provider>
        )
    }
}