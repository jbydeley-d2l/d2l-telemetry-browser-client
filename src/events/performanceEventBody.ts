import {
    canAddActorImsRole,
    canAddCustom,
    canAddUserTiming,
    canSetAction,
    canSetContext,
    canSetCustomJson,
    canSetDate,
    canSetObject,
    canSetTenantUrl,
    canSetTypeGuid,
} from '../actions';

import { PERFORMANCE_EVENT_GUID } from '../constants';

export const PerformanceEventBody = (EventTypeGuid = PERFORMANCE_EVENT_GUID) => {
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
        canAddUserTiming(state),
    );
};
