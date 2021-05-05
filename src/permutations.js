import {list} from '@iterable-iterator/list';
import {map, pick} from '@iterable-iterator/map';

import _permutations from './_permutations.js';

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
const permutations = (iterable, r) => {
	const pool = list(iterable);
	return map(
		(indices) => list(pick(pool, indices)),
		_permutations(pool.length, r),
	);
};

export default permutations;
