.. _good_idea:

================================
아이디어
================================

- immutable: If one part of our code operates on the assumption that a value will never change and another part of our code changes that value, it’s possible that the first part of the code won’t do what it was designed to do.
- unrecoverable, runtime exception: Functions often have contracts: their behavior is only guaranteed if the inputs meet particular requirements. Panicking when the contract is violated makes sense because a contract violation always indicates a caller-side bug and it’s not a kind of error you want the calling code to have to explicitly handle.
- duplicate codes: they are tedious and error prone so it should be extracted into a function