import Message from "./message"

export default interface Translator {
	translate(msg: string | Message): string
}
