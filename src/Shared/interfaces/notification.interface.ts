export enum Notificationtype{
    ERROR,
    WARNING,
    INFO,
    SUCCES
};

export interface Notification {
    type: Notificationtype,
    timeout?: number,
    title?: string,
    text: string
};
