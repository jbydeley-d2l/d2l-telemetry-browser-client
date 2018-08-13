export const canSetTenantUrl = (state) => ({
    setTenantUrl(TenantUrl: string) {
        return Object.assign(
            state,
            { TenantUrl }
        );
    }
});
