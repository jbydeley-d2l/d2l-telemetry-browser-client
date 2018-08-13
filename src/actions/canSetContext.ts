export const canSetContext = (state) => ({
    setContext(Id: string, Type: string) {
        return Object.assign(
            state,
            {
                Context: {
                    Id,
                    Type
                }
            }
        );
    }
});
