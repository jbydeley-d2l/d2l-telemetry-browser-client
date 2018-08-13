import { expect } from 'chai';
import 'mocha';

import { canSetObject } from './index';

describe('canSetObject', () => {
    let state;
    beforeEach(() => {
        const internal = {};
        state = Object.assign(
            internal,
            canSetObject(internal)
        );
    });

    it('should set the Object', () => {
        const expected = {
            Id: 'Id',
            Type: 'Type',
            Url: 'awesome'
        };
        state.setObject(
            expected.Id,
            expected.Type,
            expected.Url
        );

        expect(state.Object).to.deep.include(expected);
    });

    it('should overwrite the Object', () => {
        state.setObject({
            Object: {
                Id: 'PrevId',
                Type: 'PrevType',
                Url: 'Prevawesome'
            }
        });

        const expected = {
            Id: 'Id',
            Type: 'Type',
            Url: 'awesome'
        };

        state.setObject(
            expected.Id,
            expected.Type,
            expected.Url
        );

        expect(state.Object).to.deep.include(expected);
    });

    it('should be chainable', () => {
        const expected = {
            Id: 'Id',
            Type: 'Type',
            Url: 'awesome'
        };
        const chain = state.setObject(
            expected.Id,
            expected.Type,
            expected.Url
        );

        expect(chain.Object).to.deep.include(expected);
    });
});
