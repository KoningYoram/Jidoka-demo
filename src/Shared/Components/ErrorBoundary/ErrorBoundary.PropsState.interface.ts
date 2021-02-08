import { ComponentProps } from "react";
import { Notificationtype, Notification } from "../../interfaces/notification.interface";
import { Theme } from "../../interfaces/theme.interfaces";

export interface Props {
    theme: Theme
};

export interface ErrorNotification extends Notification{
    type: Notificationtype.ERROR
}

export interface State {
    hasError: boolean,
    error: ErrorNotification | null
};
