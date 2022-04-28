import {Text, textMake} from '@toreda/strong-types';

export class Event {
	public readonly key: Text;
	public readonly value: unknown;

	constructor() {
		this.key = textMake('');
		this.value = this.value;
	}
}
