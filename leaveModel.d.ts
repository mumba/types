export interface _Leave {
    entityId: number;
    status: string;
    timezone: string;
    leaveDuration: number;
    isFullDay: boolean;
    comment: string;
    comment2: string;
    cancelComment1: string;
    cancelComment2: string;
    codeId: number;
    code: {
        label: string;
    };
}
export interface LeaveResponse extends _Leave {
    startsAt: string;
    endsAt: string;
    approvedAt: string;
    cancelledAt: string;
}
export interface Leave extends _Leave {
    startsAt: moment.Moment;
    endsAt: moment.Moment;
    approvedAt: moment.Moment;
    cancelledAt: moment.Moment;
}
export interface LeaveComment {
    type: string;
    text: string;
}
