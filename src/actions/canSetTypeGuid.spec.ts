import { expect } from 'chai';
import 'mocha';

import { canSetTypeGuid } from './index';

describe('canSetTypeGuid', () => {
    let state;
    beforeEach(() => {
        const internal = {};
        state = Object.assign(
            internal,
            canSetTypeGuid(internal)
        );
    });

    it('should set the EventTypeGuid', () => {
        const expected = 'awesome';
        state.setTypeGuid(expected);

        expect(state.EventTypeGuid).to.include(expected);
    });

    it('should overwrite the EventTypeGuid', () => {
        state.setTypeGuid({
            EventTypeGuid: 'PrevValue'
        });
        const expected = 'awesome';
        state.setTypeGuid(expected);

        expect(state.EventTypeGuid).to.include(expected);
    });

    it('should be chainable', () => {
        const expected = 'awesome';
        const chain = state.setTypeGuid(expected);

        expect(chain.EventTypeGuid).to.include(expected);
    });
});
