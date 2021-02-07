import { ComponentProps } from "react";
import { notificationtype, Notification } from "../../interfaces/notification.interface";
import { Theme } from "../../interfaces/theme.interfaces";

export interface Props {
    theme: Theme
};

export interface ErrorNotification extends Notification{
    type: notificationtype.ERROR
}

export interface State {
    hasError: boolean,
    error: ErrorNotification | null
};
