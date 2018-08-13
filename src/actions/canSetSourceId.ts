export const canSetSourceId = (state) => ({
    setSourceId(SourceId: string) {
        return Object.assign(
            state,
            { SourceId }
        );
    }
});
