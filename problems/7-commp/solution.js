import * as Client from '@storacha/client'
import { Piece } from '@web3-storage/data-segment'
import * as dagJSON from '@ipld/dag-json'

const client = await Client.create()
const piece = Piece.fromString('bafkzcibcaycsfehfpywo35zgvilhaqegcsrslebar6vcnwvzi64fljvwdrhvqei')

const receipt = await client.capability.filecoin.info(piece.link)
if (receipt.out.error) {
  throw new Error('Failed to get deal info', { cause: receipt.out.error })
}

process.stdout.write(dagJSON.encode(receipt.out.ok))
