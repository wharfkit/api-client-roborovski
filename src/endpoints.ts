import {API, APIClient} from '@wharfkit/antelope'

export class ExampleAPI {
    constructor(private client: APIClient) {}

    /**
     * Define the calls for the API
     */
    // async get_raw_abi(accountName: NameType) {
    //     return this.call({
    //         path: '/v1/chain/get_raw_abi',
    //         params: {account_name: Name.from(accountName)},
    //         responseType: GetRawAbiResponse,
    //     })
    // }

    // Example for testing
    async get_info() {
        return this.client.call({
            path: '/v1/chain/get_info',
            responseType: API.v1.GetInfoResponse,
        })
    }
}
