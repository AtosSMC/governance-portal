import { Message, Translator } from '@isaas/shared'
import en from './messages.en'
import pt from './messages.pt'

export default class BrowserTranslator implements Translator {
    translate(text: string | Message): string {
        const messages: any = { en, pt }

        const lang = navigator.language?.split('-')[0] ?? 'en'

        const code = typeof text === 'string' ? text : text.code
        const translated = (messages[lang] ?? messages['en'])[code ?? '']
        return translated ?? code
    }
}
