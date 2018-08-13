import { expect } from 'chai';
import 'mocha';

import {
    canAddActorImsRole,
} from './index';

describe('canAddActorImsRole', () => {
    let state;

    beforeEach(() => {
        const internal = {};
        state = Object.assign(
            internal,
            canAddActorImsRole(internal)
        );
    });

    it('add an ImsRoleIds when no role currently exists', () => {
        const expected = 'awesome';
        state.addActorImsRole(expected);

        expect(state.Actor.ImsRoleIds).to.include(expected);
    });

    it('add multiple ImsRoleIds without removing existing ImsRoleIds', () => {
        const existing = 'first';
        state.addActorImsRole(existing);

        const expected = 'awesome';
        state.addActorImsRole(expected);

        expect(state.Actor.ImsRoleIds).to.include(expected);
        expect(state.Actor.ImsRoleIds).to.include(existing);
    });

    it('should be chainable', () => {
        const expected = 'awesome';
        const chain = state.addActorImsRole(expected);

        expect(chain.Actor.ImsRoleIds).to.include(expected);
    });
});
