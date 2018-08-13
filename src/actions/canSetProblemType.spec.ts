import { expect } from 'chai';
import 'mocha';

import { canSetProblemType } from './index';

describe('canSetProblemType', () => {
    let state;
    beforeEach(() => {
        const internal = {};
        state = Object.assign(
            internal,
            canSetProblemType(internal)
        );
    });

    it('should set the Problem', () => {
        const expected = 'awesome';
        state.setProblemType(expected);

        expect(state.Problem.problemType).to.equal(expected);
    });

    it('should overwrite the Problem', () => {
        state.setProblemType({
            Problem: {
                problemType: 'PrevValue'
            }
        });
        const expected = 'awesome';
        state.setProblemType(expected);

        expect(state.Problem.problemType).to.equal(expected);
    });

    it('should not add Problem when passed a null', () => {
        state.setProblemType(null);

        // tslint:disable-next-line
        expect(state.Problem).to.be.undefined;
    });

    it('should be chainable', () => {
        const expected = 'awesome';
        const chain = state.setProblemType(expected);

        expect(chain.Problem.problemType).to.equal(expected);
    });
});
