export const canAddUserTiming = (state) => ({
    addUserTiming(timing: any | any[]) {
        if (!state.UserTiming) {
            state.UserTiming = [];
        }

        state.UserTiming.push(...ensureArray(timing));
        return state;
    }
});

const ensureArray = (value) => {
    if (!Array.isArray(value)) {
        return [value];
    }

    return value;
};
