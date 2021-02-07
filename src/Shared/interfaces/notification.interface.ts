export enum notificationtype{
    ERROR,
    WARNING,
    INFO,
    SUCCES
};

export interface Notification {
    type: notificationtype,
    timeout?: number,
    title?: string,
    text: string
};
