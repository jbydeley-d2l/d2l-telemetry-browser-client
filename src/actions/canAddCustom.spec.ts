import { expect } from 'chai';
import 'mocha';

import {
    canAddCustom,
} from './index';

describe('canAddCustom', () => {
    let state;
    beforeEach(() => {
        const internal = {};
        state = Object.assign(
            internal,
            canAddCustom(internal)
        );
    });

    it('add custom data when no custom data currently exists', () => {
        const expected = {
            name: 'awesome',
            value: 'yep'
        };

        state.addCustom(expected.name, expected.value);
        expect(state.Custom).to.have.lengthOf(1);
        expect(state.Custom).to.deep.include(expected);
    });

    it('add custom data when custom data exists without removing existing custom data', () => {
        state.addCustom({Custom: [{name: 'mmhmm', value: 'Yeaaaah'}]});
        const expected = {
            name: 'awesome',
            value: 'yep'
        };

        state.addCustom(expected.name, expected.value);
        expect(state.Custom).to.have.lengthOf(2);
        expect(state.Custom).to.deep.include(expected);
    });
});
