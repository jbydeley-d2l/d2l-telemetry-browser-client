import {
    canAddActorImsRole,
    canAddCustom,
    canSetAction,
    canSetContext,
    canSetCustomJson,
    canSetDate,
    canSetObject,
    canSetProblemType,
    canSetTenantUrl,
    canSetTypeGuid,
} from '../actions';

import { PROBLEM_EVENT_GUID } from '../constants';

export const ProblemEventBody = (EventTypeGuid = PROBLEM_EVENT_GUID) => {
    const state = {
        EventTypeGuid,
    };

    return Object.assign(state,
        canSetTypeGuid(state),
        canSetDate(state),
        canSetAction(state),
        canSetTenantUrl(state),
        canSetContext(state),
        canSetObject(state),
        canAddActorImsRole(state),
        canAddCustom(state),
        canSetCustomJson(state),
        canSetProblemType(state),
    );
};
