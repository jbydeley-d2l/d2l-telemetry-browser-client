export const canSetObject = (state) => ({
    setObject(Id: string, Type: string, Url: string) {
        return Object.assign(
            state,
            {
                Object: {
                    Id,
                    Type,
                    Url
                }
            }
        );
    }
});
