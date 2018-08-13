import { expect } from 'chai';
import 'mocha';

import { canAddUserTiming } from './index';

describe('canAddCustom', () => {
    let state;
    beforeEach(() => {
        const internal = {};
        state = Object.assign(
            internal,
            canAddUserTiming(internal)
        );
    });

    it('should add to UserTiming when UserTiming does not exist', () => {
        const expected = 'awesome';
        state.addUserTiming([expected]);

        expect(state.UserTiming).to.include(expected);
    });

    it('should add to UserTiming when UserTiming does exist', () => {
        state.addUserTiming({ UserTiming: ['word']});
        const expected = 'awesome';
        state.addUserTiming([expected]);

        expect(state.UserTiming).to.include(expected);
    });

    it('should add non-arrays to UserTiming', () => {
        const expected = 'awesome';
        state.addUserTiming(expected);

        expect(state.UserTiming).to.include(expected);
    });

    it('should be chainable', () => {
        const expected = 'awesome';
        const chain = state.addUserTiming(expected);

        expect(chain.UserTiming).to.include(expected);
    });
});
