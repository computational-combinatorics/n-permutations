import assert from 'assert';

import {list} from '@iterable-iterator/list';
import {
	forwardRangeIterator,
	backwardRangeIterator,
} from '@iterable-iterator/range';
import {_take} from '@iterable-iterator/slice';

/**
 * Yields all k-permutations of {0, 1, ..., n-1}.
 *
 * @param {number} n
 * @param {number} k
 * @returns {IterableIterator<IterableIterator<number>>}
 */
export default function* _permutations(n, k) {
	assert(Number.isInteger(k) && k >= 0);
	if (k > n) return;

	const indices = list(forwardRangeIterator(0, n, 1));
	const cycles = list(backwardRangeIterator(n, n - k, -1));

	yield _take(indices, k);

	if (k === 0 || n === 0) return;

	while (true) {
		let i = k;

		while (i--) {
			--cycles[i];

			if (cycles[i] === 0) {
				// Could be costly
				indices.push(indices.splice(i, 1)[0]);

				cycles[i] = n - i;
			} else {
				const j = cycles[i];

				[indices[i], indices[n - j]] = [indices[n - j], indices[i]];

				yield _take(indices, k);
				break;
			}
		}

		if (i === -1) return;
	}
}
