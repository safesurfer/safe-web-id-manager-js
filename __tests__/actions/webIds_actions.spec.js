import * as webIdsActions from 'actions/webIds_actions';
import toBeType from 'jest-tobetype';

expect.extend( toBeType );

describe( 'webIds actions', () =>
{
    it( 'should have types', () =>
    {
        expect( webIdsActions.TYPES ).toBeDefined();
    } );

    it( 'should add ADD_WEB_ID', async () =>
    {
        expect.assertions(3);

        const payload = {
            webId: {
                name : 'testerton'
            }
        };

        const expectedAction = {
            type : webIdsActions.TYPES.ADD_WEB_ID
        };

        const res = webIdsActions.addWebId( payload )
        const resultPayload = await res.payload;

        expect( res ).toMatchObject( expectedAction );
        expect( resultPayload ).not.toHaveProperty( 'idApp' );
        expect( resultPayload ).toEqual( payload.webId );
    } );

    it( 'should UDPATE_WEB_ID', async () =>
    {
        const payload = {
            webId: {
                name : 'testerton',
                id   : 6
            }
        };

        const expectedAction = {
            type : webIdsActions.TYPES.UPDATE_WEB_ID
        };

        const res = webIdsActions.updateWebId( payload )
        const resultPayload = await res.payload;

        expect( res ).toMatchObject( expectedAction );
        expect( resultPayload ).not.toHaveProperty( 'idApp' );
        expect( resultPayload ).toEqual( payload.webId );
    } );


    it( 'should GET_WEB_ID', async () =>
    {
        const payload = {
            webId: {
                xorName : 'testerton',
                typeTag   : 'asdasdad'
            }
        };

        const expectedAction = {
            type : webIdsActions.TYPES.GET_WEB_ID
        };

        const res = webIdsActions.getWebId( payload )
        const resultPayload = await res.payload;

        expect( res ).toMatchObject( expectedAction );
        expect( resultPayload ).toBeType( 'object' );
        // expect( resultPayload ).toEqual( payload.webId );
    } );

    it( 'should GET_AVAILABLE_WEB_IDS', async () =>
    {
        const payload = {
            webId: {
                name : 'testerton',
                id   : 6
            }
        };

        const expectedAction = {
            type : webIdsActions.TYPES.GET_AVAILABLE_WEB_IDS
        };

        const res = webIdsActions.getAvailableWebIds( payload )
        const resultPayload = await res.payload;

        expect( res ).toMatchObject( expectedAction );
        expect( resultPayload ).toBeType( 'array' );
        // expect( resultPayload ).toEqual( payload.webId );
    } );
} );
