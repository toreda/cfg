import {StateValue} from './stateValue';
import {StateData} from './options';

export class State {
	public readonly stateValue: StateValue;

	constructor(options?: StateData) {
		this.stateValue = new StateValue();
	}

	async save(stateValue: StateValue): Promise<void> {
		const map = new Map();

		if (this.stateValue.key) {
			map.set(this.stateValue.key, this.stateValue.value);
		}
	}

	async retrieve(key): Promise<unknown> {
		if (key) {
			return key.value;
		}
		return null;
	}
}
