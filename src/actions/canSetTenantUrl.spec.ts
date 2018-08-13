import { expect } from 'chai';
import 'mocha';

import { canSetTenantUrl } from './index';

describe('canSetTenantUrl', () => {
    let state;
    beforeEach(() => {
        const internal = {};
        state = Object.assign(
            internal,
            canSetTenantUrl(internal)
        );
    });

    it('should set the TenantUrl', () => {
        const expected = 'awesome';
        state.setTenantUrl(expected);

        expect(state.TenantUrl).to.include(expected);
    });

    it('should overwrite the TenantUrl', () => {
        state.setTenantUrl({
            TenantUrl: 'PrevValue'
        });
        const expected = 'awesome';
        state.setTenantUrl(expected);

        expect(state.TenantUrl).to.include(expected);
    });

    it('should be chainable', () => {
        const expected = 'awesome';
        const chain = state.setTenantUrl(expected);

        expect(chain.TenantUrl).to.include(expected);
    });
});
