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

import {type CfgInit} from './cfg/init';
import {Log} from '@toreda/log';
import {StorageAdapter} from './storage/adapter';
import {Entry} from './entry';
import {type StorageAdapterId} from './storage/adapter/id';

/**
 * @category Core
 */
export class Cfg {
	// Global logger instance.
	public readonly base: Log;
	public readonly adapters: Map<StorageAdapterId, StorageAdapter<unknown, Entry<unknown>>>;

	constructor(init: Partial<CfgInit>) {
		this.base = init?.log ? init.log : new Log();

		this.adapters = new Map<StorageAdapterId, StorageAdapter<unknown, Entry<unknown>>>;
	}

	public reset(): void {
		this.adapters.clear();
	}

}
