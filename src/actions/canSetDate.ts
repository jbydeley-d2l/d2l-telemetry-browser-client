export const canSetDate = (state) => ({
    setDate(date: Date) {
        return Object.assign(
            state,
            {
                Date: date.toISOString()
            }
        );
    }
});
