import { expect } from 'chai';
import 'mocha';

import { canSetDate } from './index';

describe('canSetDate', () => {
    let state;
    beforeEach(() => {
        const internal = {};
        state = Object.assign(
            internal,
            canSetDate(internal)
        );
    });

    it('should set the Date', () => {
        const expected = new Date();
        state.setDate(expected);

        expect(state.Date).to.include(expected.toISOString());
    });

    it('should overwrite the Date', () => {
        state.setDate(new Date(2018, 8, 9));
        const expected = new Date();
        state.setDate(expected);

        expect(state.Date).to.include(expected.toISOString());
    });

    it('should be chainable', () => {
        const expected = new Date();
        const chain = state.setDate(expected);

        expect(chain.Date).to.include(expected.toISOString());
    });
});
