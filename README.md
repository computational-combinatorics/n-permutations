:zebra: [@combinatorics/n-permutations](https://computational-combinatorics.github.io/n-permutations)
==

Set n-permutations for JavaScript.
See [docs](https://computational-combinatorics.github.io/n-permutations/index.html).

> :warning: Depending on your environment, the code may require
> `regeneratorRuntime` to be defined, for instance by importing
> [regenerator-runtime/runtime](https://www.npmjs.com/package/regenerator-runtime).

```js
import {permutations} from '@combinatorics/n-permutations';
permutations("ABCD", 2); // AB AC AD BA BC BD CA CB CD DA DB DC

import {range} from '@iterable-iterator/range';
permutations(range(3), 3); // 012 021 102 120 201 210
```

[![License](https://img.shields.io/github/license/computational-combinatorics/n-permutations.svg)](https://raw.githubusercontent.com/computational-combinatorics/n-permutations/main/LICENSE)
[![Version](https://img.shields.io/npm/v/@combinatorics/n-permutations.svg)](https://www.npmjs.org/package/@combinatorics/n-permutations)
[![Tests](https://img.shields.io/github/workflow/status/computational-combinatorics/n-permutations/ci?event=push&label=tests)](https://github.com/computational-combinatorics/n-permutations/actions/workflows/ci.yml?query=branch:main)
[![Dependencies](https://img.shields.io/librariesio/github/computational-combinatorics/n-permutations.svg)](https://github.com/computational-combinatorics/n-permutations/network/dependencies)
[![GitHub issues](https://img.shields.io/github/issues/computational-combinatorics/n-permutations.svg)](https://github.com/computational-combinatorics/n-permutations/issues)
[![Downloads](https://img.shields.io/npm/dm/@combinatorics/n-permutations.svg)](https://www.npmjs.org/package/@combinatorics/n-permutations)

[![Code issues](https://img.shields.io/codeclimate/issues/computational-combinatorics/n-permutations.svg)](https://codeclimate.com/github/computational-combinatorics/n-permutations/issues)
[![Code maintainability](https://img.shields.io/codeclimate/maintainability/computational-combinatorics/n-permutations.svg)](https://codeclimate.com/github/computational-combinatorics/n-permutations/trends/churn)
[![Code coverage (cov)](https://img.shields.io/codecov/c/gh/computational-combinatorics/n-permutations/main.svg)](https://codecov.io/gh/computational-combinatorics/n-permutations)
[![Code technical debt](https://img.shields.io/codeclimate/tech-debt/computational-combinatorics/n-permutations.svg)](https://codeclimate.com/github/computational-combinatorics/n-permutations/trends/technical_debt)
[![Documentation](https://computational-combinatorics.github.io/n-permutations/badge.svg)](https://computational-combinatorics.github.io/n-permutations/source.html)
[![Package size](https://img.shields.io/bundlephobia/minzip/@combinatorics/n-permutations)](https://bundlephobia.com/result?p=@combinatorics/n-permutations)
