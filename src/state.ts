import {Event} from './event';

export class State {
	public readonly events;

	constructor() {
		this.events = {};
	}

	async save(event: Event): Promise<unknown> {
		if (event.key && event.value) {
			await this.events.push(event);
		}
		return this.events;
	}

	async retrieve(key): Promise<unknown> {
		for (const prop in this.events) {
			if (key === this.events[prop]) {
				return this.events[prop].value;
			}
		}
	}
}
