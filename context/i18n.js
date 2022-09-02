import { createContext, useCallback, useContext, useEffect, useState } from "react"
import { useRouter } from "next/router"

const I18NContext = createContext()

export function I18NProvider({ children }) {
    const [languages, setLanguages] = useState({})
    const { locale } = useRouter()

    useEffect(() => {
        if (languages[locale] === undefined) {
            getLanguage()
        }
    }, [locale])

    async function getLanguage() {
        const { default: language } = await import(`../translations/${[locale]}.json`)
        setLanguages({
            ...languages,
            [locale]: language
        })
    }

    function t(key) {
        return languages[locale]?.[key] ?? ''
    }

    return <I18NContext.Provider value={{ t }}>
        {children}
    </I18NContext.Provider>
}

export function useI18N() {
    const context = useContext(I18NContext)
    if (context === undefined) {
        throw new Error("useI18N must be used within a I18NProvider")
    }
    return context
}