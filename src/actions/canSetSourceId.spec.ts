import { expect } from 'chai';
import 'mocha';

import { canSetSourceId } from './index';

describe('canSetSourceId', () => {
    let state;
    beforeEach(() => {
        const internal = {};
        state = Object.assign(
            internal,
            canSetSourceId(internal)
        );
    });

    it('should set the SourceId', () => {
        const expected = 'awesome';
        state.setSourceId(expected);

        expect(state.SourceId).to.include(expected);
    });

    it('should overwrite the SourceId', () => {
        state.setSourceId({
            SourceId: 'PrevValue'
        });
        const expected = 'awesome';
        state.setSourceId(expected);

        expect(state.SourceId).to.include(expected);
    });

    it('should be chainable', () => {
        const expected = 'awesome';
        const chain = state.setSourceId(expected);

        expect(chain.SourceId).to.include(expected);
    });
});
