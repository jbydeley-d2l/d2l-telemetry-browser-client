export const canAddActorImsRole = (state) => ({
    addActorImsRole(role) {
        if (!state.Actor) {
            state.Actor = {};
        }

        if (!state.Actor.ImsRoleIds) {
            state.Actor.ImsRoleIds = [];
        }

        state.Actor.ImsRoleIds.push(role);

        return state;
    }
});
