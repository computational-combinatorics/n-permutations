import assert from 'assert';
import {_take} from '@iterable-iterator/slice';

import {list} from '@iterable-iterator/list';
import {pick} from '@iterable-iterator/map';
import {
	forwardRangeIterator,
	backwardRangeIterator,
} from '@iterable-iterator/range';

/**
 * Yields all permutations of each possible choice of <code>r</code> elements
 * of the input iterable.
 *
 * @example
 * // AB AC AD BA BC BD CA CB CD DA DB DC
 * permutations('ABCD', 2) ;
 *
 * @example
 * // 012 021 102 120 201 210
 * permutations(range(3), 3) ;
 *
 * @param {Iterable} iterable - The input iterable.
 * @param {number} r - The size of the permutations to generate.
 * @returns {IterableIterator}
 */
export default function* permutations(iterable, r) {
	assert(Number.isInteger(r) && r >= 0);
	const pool = list(iterable);

	const length = pool.length;

	if (r > length) {
		return;
	}

	const indices = list(forwardRangeIterator(0, length, 1));
	const cycles = list(backwardRangeIterator(length, length - r, -1));

	yield list(pick(pool, _take(indices, r)));

	if (r === 0 || length === 0) {
		return;
	}

	while (true) {
		let i = r;

		while (i--) {
			--cycles[i];

			if (cycles[i] === 0) {
				// Could be costly
				indices.push(indices.splice(i, 1)[0]);

				cycles[i] = length - i;
			} else {
				const j = cycles[i];

				[indices[i], indices[length - j]] = [indices[length - j], indices[i]];

				yield list(pick(pool, _take(indices, r)));
				break;
			}
		}

		if (i === -1) {
			return;
		}
	}
}
