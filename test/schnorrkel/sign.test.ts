import { expect } from "chai"
import { ethers } from "ethers"
import { generateRandomKeys } from "../../aa-schnorr-multisig-sdk/src/core"
import { Schnorrkel } from "../../aa-schnorr-multisig-sdk/src/signers"

describe("testing sign", () => {
  it("should sign a message", () => {
    const keyPair = generateRandomKeys()

    const msg = "test message"
    const signature = Schnorrkel.sign(keyPair.privateKey, msg)

    expect(signature).to.exist
    expect(signature.finalPublicNonce.buffer).to.have.length(33)
    expect(signature.signature.buffer).to.have.length(32)
    expect(signature.challenge.buffer).to.have.length(32)
  })

  it("should sign a hash", () => {
    const keyPair = generateRandomKeys()

    const msg = "test message"
    const hash = ethers.utils.solidityKeccak256(["string"], [msg])
    const signature = Schnorrkel.signHash(keyPair.privateKey, hash)

    expect(signature).to.exist
    expect(signature.finalPublicNonce.buffer).to.have.length(33)
    expect(signature.signature.buffer).to.have.length(32)
    expect(signature.challenge.buffer).to.have.length(32)
  })
})
