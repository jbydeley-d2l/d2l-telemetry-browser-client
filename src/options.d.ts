interface IOptions {
    endpoint: string;
}

interface IFetcher {
    fetch(Request): Promise<any>;
}

interface IClient {
    logUserEvent(event?): Promise<any>;
}
