import {atom, useSetAtom} from "jotai";

export const customAtom = atom({
    privateState: false,
    voiceTone: 0
})

export const useSetCustom = () => {
    const setCustom = useSetAtom(customAtom)

    const togglePrivate = () => {
        setCustom((prev) => ({
            ...prev,
            privateState: !prev.privateState
        }))
    }

    const setVoiceTone = (tone: 1 | -1) => {
        setCustom((prev) => ({
            ...prev,
            voiceTone: prev.voiceTone + tone < 0 ? 0 : prev.voiceTone + tone
        }))
    }

    return {
        togglePrivate,
        setVoiceTone,
    }
}