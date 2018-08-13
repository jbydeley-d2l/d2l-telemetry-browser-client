export const canSetType = (state) => ({
    setType(EventType: string) {
        return Object.assign(
            state,
            { EventType }
        );
    }
});
