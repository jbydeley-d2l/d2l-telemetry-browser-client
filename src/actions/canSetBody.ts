export const canSetBody = (state) => ({
    setBody(EventBody) {
        return Object.assign(
            state,
            { EventBody },
            { name: EventBody.Action }
        );
    }
});
