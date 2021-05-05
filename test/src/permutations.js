import test from 'ava';

import {list} from '@iterable-iterator/list';
import {range} from '@iterable-iterator/range';
import {permutations} from '../../src/index.js';

const repr = (x) => (Array.isArray(x) ? JSON.stringify(x) : x);

const macro = (t, iterable, r, expected) => {
	t.deepEqual(list(permutations(iterable, r)), expected);
};

macro.title = (title, iterable, r, expected) =>
	title ?? `permutations(${repr(iterable)}, ${r}) is ${repr(expected)}`;

test(macro, [], 1, []);
test(macro, [], 0, [[]]);
test(macro, [1, 2, 3], 0, [[]]);
test(macro, [1, 2, 3], 4, []);

test(macro, 'ABCD', 2, [
	['A', 'B'],
	['A', 'C'],
	['A', 'D'],
	['B', 'A'],
	['B', 'C'],
	['B', 'D'],
	['C', 'A'],
	['C', 'B'],
	['C', 'D'],
	['D', 'A'],
	['D', 'B'],
	['D', 'C'],
]);

test(macro, range(0, 3, 1), 3, [
	[0, 1, 2],
	[0, 2, 1],
	[1, 0, 2],
	[1, 2, 0],
	[2, 0, 1],
	[2, 1, 0],
]);
