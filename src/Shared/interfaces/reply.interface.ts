export enum ReplyTypes {
    SUCCESS,
    FAILURE
}

export interface Reply {
    type: ReplyTypes,
    message: string
}