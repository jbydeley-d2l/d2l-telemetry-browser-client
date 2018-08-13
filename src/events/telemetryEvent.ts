import {
    canSetBody,
    canSetDate,
    canSetSourceId,
    canSetType,
} from '../actions';

export const TelemetryEvent = () => {
    const state = {
        // Temporary hack to make these events work with the old telemetry system
        // tslint:disable-next-line
        ts: (Date.now() / 1000) | 0
    };

    return Object.assign(
        state,
        canSetType(state),
        canSetSourceId(state),
        canSetDate(state),
        canSetBody(state),
    );
};
