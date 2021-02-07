import { Component, ErrorInfo, Fragment, ReactNode, PropsWithChildren } from "react";
import { StyleSheet, css } from 'aphrodite';
import { notificationtype } from "../../interfaces/notification.interface";

import { ErrorNotification, Props, State } from './ErrorBoundary.PropsState.interface';

export class ErrorBoundary extends Component<PropsWithChildren<Props>, State> {
    private timeout: number | undefined;

    private ErrorStyle = StyleSheet.create({
        notificationWrapper: {
            position: 'absolute',
            top: '10rem',
            left: '50%',
            height: 'auto',
            minHeight: '5rem',
            width: 'auto',
            minWidth: '10rem',
            maxWidth: 'calc(100vw -  20rem)',
            padding: '2rem',
            fontSize: '3rem',
            fontWeight: 'bold',
            borderRadius: '2rem',
            backgroundColor: this.props.theme.colors.error
        },
        close: {
            marginLeft: '2rem',
            color: "#fff",
            cursor: 'pointer'
        }
    });

    constructor(
        public props: PropsWithChildren<Props>
    ) {
        super(props);
        this.state = {
            hasError: false,
            error: null
        }
        this.close = this.close.bind(this);
    };

    static getDerivedStateFromError(error: ErrorNotification): State {
        return { hasError: true, error };
    };
    
    public componentDidCatch(err: Error, errInfo: ErrorInfo): void {
        this.setState({
            hasError: true,
            error: {
                type: notificationtype.ERROR,
                title: err.name,
                text: err.message
            }
        })
    };

    public componentWillUnmount(): void {
        this.close();
    };

    public close(): void {
        this.setState({
            hasError: false,
            error: null
        });
        delete this.timeout;
    };

    private timeoutClose(): void {
        this.timeout = window.setTimeout(() => this.close(), this.state.error?.timeout ?? 5000) 
    }

    public render(): ReactNode {
        this.timeoutClose();
        return (
            <Fragment>
                { this.state.hasError && (
                    <div className={css(this.ErrorStyle.notificationWrapper)}>
                        { this.state?.error?.title && (<title>{this.state.error.title}</title>)}
                        { this.state.error?.text}
                        <span className={css(this.ErrorStyle.close)} onClick={() => this.close()}>
                            &#10006;
                         </span>
                    </div>
                )}
                { this.props.children }
            </Fragment>
        )
    };
};
