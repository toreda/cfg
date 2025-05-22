/**
 *	MIT License
 *
 *	Copyright (c) 2019 - 2025 Toreda, Inc.
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:

 * 	The above copyright notice and this permission notice shall be included in all
 * 	copies or substantial portions of the Software.
 *
 * 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * 	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * 	SOFTWARE.
 *
 */

import {Entry} from '../entry';
import {Fate} from '@toreda/fate';
import {type StorageAdapterInit} from './adapter/init';

/**
 * Base class for all custom storage adapters.
 *
 * @category Storage
 */
export abstract class StorageAdapter<ValueT, EntryT extends Entry<ValueT>> {
	private readonly map: Map<string, EntryT>;

	constructor(init: StorageAdapterInit) {
		this.map = new Map<string, EntryT>();
	}

	public abstract available(): Promise<boolean>;
	public abstract get(key: string): Promise<Fate<ValueT | null>>;
	public abstract set(key: string, value?: ValueT | null): Promise<Fate<ValueT | null>>;

	public reset(): void {
		this.map.clear();
	}
}
