import { expect } from 'chai';
import 'mocha';

import { canSetBody } from './index';

describe('canSetBody', () => {
    let state;

    beforeEach(() => {
        const internal = {};
        state = Object.assign(
            internal,
            canSetBody(internal)
        );
    });

    it('should set the EventBody', () => {
        const expected = { Action: 'awesome' };
        state.setBody(expected);

        expect(state.EventBody).to.deep.include(expected);
    });

    /* Temporary hack to make these events work with the old telemetry system */
    it('should set the name', () => {
        const expected = { Action: 'awesome' };
        state.setBody(expected);

        expect(state.name).to.equal(expected.Action);
    });

    it('should return the state', () => {
        const expected = { Action: 'awesome' };
        const chain = state.setBody(expected);

        expect(chain.EventBody).to.deep.include(expected);
    });

    it('should be chainable and use the last value set', () => {
        const expected = { Action: 'awesome' };
        state.setBody({ Action: 'First' })
            .setBody({ Action: 'Second' })
            .setBody({ Action: 'Third' })
            .setBody(expected);

        expect(state.EventBody).to.deep.include(expected);
    });
});
