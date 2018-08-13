export const canSetTypeGuid = (state) => ({
    setTypeGuid(EventTypeGuid: string): any {
        return Object.assign(
            state,
            { EventTypeGuid }
        );
    }
});
