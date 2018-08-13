import {
    canAddActorImsRole,
    canAddCustom,
    canSetAction,
    canSetContext,
    canSetCustomJson,
    canSetDate,
    canSetObject,
    canSetTenantUrl,
    canSetTypeGuid,
} from '../actions';

import { EVENT_BODY_GUID } from '../constants';

interface IEventBody {
    EventTypeGuid: string;
    setTypeGuid(guid: string): IEventBody;
    setDate(date: Date): IEventBody;
    setAction(action: string): IEventBody;
    setTenantUrl(url: string): IEventBody;
    setContext(Id: string, Type: string): IEventBody;
    setObject(Id: string, Type: string, Url: string): IEventBody;
    addActorImsRole(role: string): IEventBody;
    addCustom(name: string, value: string): IEventBody;
    setCustomJson(value: string): IEventBody;
}

export const EventBody = (EventTypeGuid = EVENT_BODY_GUID): IEventBody => {
    // Default State
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
    );
};
