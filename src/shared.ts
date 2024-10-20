const registry = new FinalizationRegistry((msg: string) => {
    outstanding--
    console.log(`${msg}, remainingElems=${outstanding}`)
})

let outstanding = 0

export const registerFinalizer = (obj: any, msg: string) => {
    registry.register(obj, msg);
    outstanding++
}
