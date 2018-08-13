export const canSetProblemType = (state) => ({
    setProblemType(type: string) {
        if (!type) {
            return state;
        }

        if (!state.Problem) {
            state.Problem = {};
        }

        state.Problem.problemType = type;

        return state;
    }
});
