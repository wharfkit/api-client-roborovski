/**
 * Define the API response types
 *
 * Example and mock below
 */

import {Struct} from '@wharfkit/antelope'

@Struct.type('example_response')
export class ExampleResponse extends Struct {
    @Struct.field('string') declare foo: string
}

// import {
//     Blob,
//     Checksum256,
//     Name,
//     Struct,
// } from '@wharfkit/antelope'

// @Struct.type('get_raw_abi_response')
// export class GetRawAbiResponse extends Struct {
//     @Struct.field('name') declare account_name: Name
//     @Struct.field('checksum256') declare code_hash: Checksum256
//     @Struct.field('checksum256') declare abi_hash: Checksum256
//     @Struct.field(Blob) declare abi: Blob
// }
