import { FC } from "react";
import { Router, Redirect } from '@reach/router';
import { StyleSheet, css } from 'aphrodite';

import 'normalize.css';
import './global.styles.css';

import { Props } from "./Main.PropsState.interface";

import Navigation from "./Components/Navigation/navigation.component";
import withRouterProps from "../Shared/HoC/withRouterProps.hoc";

import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Details from "../Pages/Details";
import Home from "../Pages/Home";
import { ErrorBoundary } from "../Shared/Components/ErrorBoundary";
import useTheme from "../Shared/hooks/useTheme.hook";
import { sizes } from "../Shared/interfaces/theme.interfaces";


const Main: FC<Props> = ({ }) => {

    const theme = useTheme();

    const container = StyleSheet.create({
        pageContainer: {
            maxWidth: sizes.LG,
            margin: '0 auto',
            height: '100vh'
        }
    });
    
    document.title = "Valérie Van den Eynden";
    
    return (
        <section className={css(container.pageContainer)}>
            <ErrorBoundary
                theme={theme}
            >
                <Navigation />
                <Router>
                    <Redirect from="/" to="home" noThrow />
                    {withRouterProps(Home)({ path: 'home' })}
                    {withRouterProps(About)({ path: 'about' })}
                    {withRouterProps(Contact)({ path: 'contact' })}
                    <Redirect from="/detail" to="/" noThrow />
                    {withRouterProps(Details)({ path: 'detail/:id' })}
                </Router>
            </ErrorBoundary>
        </section>
    )
};

export default Main;