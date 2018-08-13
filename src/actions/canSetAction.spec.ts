import { expect } from 'chai';
import 'mocha';

import { canSetAction } from './index';

describe('canSetAction', () => {
    let state;

    beforeEach(() => {
        const internal = {};
        state = Object.assign(
            internal,
            canSetAction(internal)
        );
    });

    it('should set the action', () => {
        const expected = 'awesome';
        state.setAction(expected);

        expect(state.Action).to.include(expected);
    });

    it('should be chainable', () => {
        const expected = 'awesome';
        const chain = state.setAction(expected);

        expect(chain.Action).to.include(expected);
    });
});
