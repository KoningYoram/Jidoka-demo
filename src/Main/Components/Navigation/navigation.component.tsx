import React from 'react';
import { Link } from "@reach/router";
import { FC, PropsWithChildren } from "react";
import { css, StyleSheet } from "aphrodite";

import useTheme from "../../../Shared/hooks/useTheme.hook"

import logo from '../../../Static/logo.png';

const Navigation: FC<PropsWithChildren<{}>> = ({ children, ...props }) => {

    const theme = useTheme();

    const navigationStyles = StyleSheet.create({
        container: {
            position: 'sticky',
            top: 0,
            left: 0,
            width: '100%',
            height: theme.nav.height,
            padding: '1rem',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            fontSize: theme.text.defaultSize,
            marginBottom: '2rem',
            backgroundColor: theme.colors.background,
            zIndex: 999
        },
        logo: {
            position: 'relative',
            left: 0,
            top: 0,
            width: 'auto',
            height: 'auto',
            maxHeight: '100%',
            maxWidth: '100%'
        },
        linkWrapper: {
            width: '50%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center'
        },
        link: {
            fontSize: '2.5rem',
            color: theme.text.color,
            textDecoration: 'none',
            marginLeft: '2rem',
            marginRight: '2rem',
            ":nth-child(1)": {
                marginLeft: 0
            },
            ":tnh-last-child(1)": {
                marginRight: 0
            },
            ":hover": {
                color:theme.text.secondaryColor
            }
        },
        active: {
            color: theme.text.activeColor,
            textDecoration: 'underline'
        }
    })

    return (
        <nav
            className={css(navigationStyles.container)}
            {...props}>
            <Link to="">
                <img
                    src={logo}
                    className={css(navigationStyles.logo)}
                />
            </Link>
            <span
                className={css(navigationStyles.linkWrapper)}
            >
                <Link
                    to='home'
                    getProps={({ isCurrent }) => ({ className: css(navigationStyles.link, isCurrent ? navigationStyles.active : null)})}>
                    Home
                </Link>
                <Link
                    to='about'
                    getProps={({ isCurrent }) => ({ className: css(navigationStyles.link, isCurrent ? navigationStyles.active : null) })}>
                    About
                </Link>
                <Link
                    to='contact'
                    getProps={({ isCurrent }) => ({ className: css(navigationStyles.link, isCurrent ? navigationStyles.active : null) })}>
                    Contact
                </Link>
            </span>
        </nav>
    )
}

export default Navigation;