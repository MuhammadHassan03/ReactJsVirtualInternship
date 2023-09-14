import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Provider } from 'react-redux';
import { store } from '../Store/store.js';

export const RootLayout = () => {
    return (
        <Provider store={store}>
            <div>
                <header>
                    <Header></Header>
                </header>
                <main>
                    <Outlet></Outlet>
                </main>
            </div>
         </Provider>
    )
}
