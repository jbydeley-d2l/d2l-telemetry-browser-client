import { expect } from 'chai';
import 'mocha';

import { canSetType } from './index';

describe('canSetType', () => {
    let state;
    beforeEach(() => {
        const internal = {};
        state = Object.assign(
            internal,
            canSetType(internal)
        );
    });

    it('should set the EventType', () => {
        const expected = 'awesome';
        state.setType(expected);

        expect(state.EventType).to.include(expected);
    });

    it('should overwrite the EventType', () => {
        state.setType({
            EventType: 'PrevValue'
        });
        const expected = 'awesome';
        state.setType(expected);

        expect(state.EventType).to.include(expected);
    });

    it('should be chainable', () => {
        const expected = 'awesome';
        const chain = state.setType(expected);

        expect(chain.EventType).to.include(expected);
    });
});
