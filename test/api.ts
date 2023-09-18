import {assert} from 'chai'

import {APIClient, FetchProvider} from '@wharfkit/antelope'
import {mockFetch} from '@wharfkit/mock-data'

import {ExampleAPI} from '$lib'

// Setup an APIClient
const client = new APIClient({
    provider: new FetchProvider('https://jungle4.greymass.com', {fetch: mockFetch}),
})

// Setup the API
const example = new ExampleAPI(client)

suite('api', function () {
    this.slow(200)
    this.timeout(10 * 10000)

    test('call test api', async function () {
        const res = await example.get_info()
        assert.equal(res.server_version, '905c5cc9')
    })
})
