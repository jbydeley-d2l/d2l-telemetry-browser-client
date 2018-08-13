import { expect } from 'chai';
import 'mocha';

import { canSetContext } from './index';

describe('canSetContext', () => {
    let state;
    beforeEach(() => {
        const internal = {};
        state = Object.assign(
            internal,
            canSetContext(internal)
        );
    });

    it('should set the Context', () => {
        const expected = { Id: 'Id', Type: 'awesome' };
        state.setContext(expected.Id, expected.Type);

        expect(state.Context).to.deep.include(expected);
    });

    it('should overwrite the Context', () => {
        state.setContext({
            Context: {
                Id: 'PrevId',
                Type: 'PrevType'
            }
        });
        const expected = { Id: 'Id', Type: 'awesome' };
        state.setContext(expected.Id, expected.Type);

        expect(state.Context).to.deep.include(expected);
    });

    it('should be chainable', () => {
        const expected = { Id: 'Id', Type: 'awesome' };
        const chain = state.setContext(expected.Id, expected.Type);

        expect(chain.Context).to.deep.include(expected);
    });
});
