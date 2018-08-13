/**
 * A client lets you log events
 * @param options contains an endpoint
 * @param fetcher a reference to something that uses fetch
 */
export const Client = (options: IOptions, fetcher: IFetcher): IClient => {
    const internal = {
        fetcher,
        options,
    };

    const canLogUserEvent = (state) => ({
        logUserEvent(event: Event) {
            const body = event
                ? { body: JSON.stringify(event) }
                : null;

            const requestObject = Object.assign({ method: 'POST'}, body);

            const request = new Request(state.options.endpoint, requestObject);
            return state.fetcher.fetch(request);
        }
    });

    return Object.assign(
        internal,
        canLogUserEvent(internal),
    );
};
