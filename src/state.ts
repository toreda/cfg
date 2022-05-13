import {StateValue} from './stateValue';
import {StateData} from './options';

export class State {
	public readonly stateValue;
	public keys;

	constructor(options?: StateData) {
		this.stateValue = new StateValue();
		this.keys = {};
	}

	async save(stateValue: StateValue): Promise<void> {
		const map = new Map();

		if (this.stateValue.key) {
			for (let i = 0; i < this.keys.length; i++) {
				map.set(this.stateValue.key[i], this.stateValue.value[i]);
			}
		}
	}

	async retrieve(key): Promise<unknown> {
		if (key) {
			return key.value;
		}
		return null;
	}
}
