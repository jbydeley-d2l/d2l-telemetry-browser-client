export const canAddCustom = (state) => ({
    addCustom(name, value) {
        if (!state.Custom) {
            state.Custom = [];
        }

        state.Custom.push({
            name,
            value,
        });

        return state;
    }
});
