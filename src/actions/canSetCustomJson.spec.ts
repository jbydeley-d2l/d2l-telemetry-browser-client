import { expect } from 'chai';
import 'mocha';

import { canSetCustomJson } from './index';

describe('canSetCustomJson', () => {
    let state;
    beforeEach(() => {
        const internal = {};
        state = Object.assign(
            internal,
            canSetCustomJson(internal)
        );
    });

    it('should set the CustomJson', () => {
        const expected = 'awesome';
        state.setCustomJson(expected);

        expect(state.CustomJson).to.include(expected);
    });

    it('should overwrite the CustomJson', () => {
        state.setCustomJson({
            CustomJson: 'PrevValue'
        });
        const expected = 'awesome';
        state.setCustomJson(expected);

        expect(state.CustomJson).to.include(expected);
    });

    it('should be chainable', () => {
        const expected = 'awesome';
        const chain = state.setCustomJson(expected);

        expect(chain.CustomJson).to.include(expected);
    });
});
