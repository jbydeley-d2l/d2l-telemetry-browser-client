export const canSetAction = (state) => ({
    setAction(Action: string) {
        return Object.assign(
            state,
            { Action }
        );
    }
});
