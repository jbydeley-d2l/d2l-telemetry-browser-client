export const canSetCustomJson = (state) => ({
    setCustomJson(CustomJson: string) {
        return Object.assign(
            state,
            { CustomJson }
        );
    }
});
