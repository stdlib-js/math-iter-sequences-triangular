<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# iterTriangularSeq

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an iterator which generates a sequence of [triangular numbers][oeis-a000217].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [triangular numbers][triangular-number] are the integer sequence

<!-- <equation class="equation" label="eq:triangular_numbers_sequence" align="center" raw="0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, \ldots" alt="Triangular number sequence"> -->

<div class="equation" align="center" data-raw-text="0, 1, 3, 6, 10, 15, 21, 28, 36, 45, 55, 66, \ldots" data-equation="eq:triangular_numbers_sequence">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7000a1b5cd08bb73f2dfe04976524042ab3b580d/lib/node_modules/@stdlib/math/iter/sequences/triangular/docs/img/equation_triangular_numbers_sequence.svg" alt="Triangular number sequence">
    <br>
</div>

<!-- </equation> -->

starting at the 0th [triangular number][triangular-number].

[Triangular numbers][triangular-number] are given by the following explicit formulas

<!-- <equation class="equation" label="eq:triangular_numbers" align="center" raw="T_n = \sum_{i=1}^{n} i = 1 + 2 + 3 + \ldots + n = \frac{n(n+1)}{2} = \binom{n+1}{2}" alt="Triangular number formulas"> -->

<div class="equation" align="center" data-raw-text="T_n = \sum_{i=1}^{n} i = 1 + 2 + 3 + \ldots + n = \frac{n(n+1)}{2} = \binom{n+1}{2}" data-equation="eq:triangular_numbers">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@7000a1b5cd08bb73f2dfe04976524042ab3b580d/lib/node_modules/@stdlib/math/iter/sequences/triangular/docs/img/equation_triangular_numbers.svg" alt="Triangular number formulas">
    <br>
</div>

<!-- </equation> -->

where the last formula corresponds to a [binomial coefficient][@stdlib/math/base/special/binomcoef], representing the number of distinct pairs that can be selected from `n+1` items.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/math-iter-sequences-triangular
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var iterTriangularSeq = require( '@stdlib/math-iter-sequences-triangular' );
```

#### iterTriangularSeq( \[options] )

Returns an iterator which generates a sequence of [triangular numbers][triangular-number].

```javascript
var it = iterTriangularSeq();
// returns <Object>

var v = it.next().value;
// returns 0

v = it.next().value;
// returns 1

v = it.next().value;
// returns 3

v = it.next().value;
// returns 6

v = it.next().value;
// returns 10

// ...
```

The returned iterator protocol-compliant object has the following properties:

-   **next**: function which returns an iterator protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an iterator and returns a single (optional) argument in an iterator protocol-compliant object.

The function supports the following `options`:

-   **iter**: number of iterations. Default: `134217727`.

By default, the function returns a finite iterator to avoid exceeding the maximum safe double-precision floating-point integer. To adjust the number of iterations, set the `iter` option.

```javascript
var opts = {
    'iter': 2
};
var it = iterTriangularSeq( opts );
// returns <Object>

var v = it.next().value;
// returns 0

v = it.next().value;
// returns 1

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an environment supports `Symbol.iterator`, the returned iterator is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var iterTriangularSeq = require( '@stdlib/math-iter-sequences-triangular' );

// Create an iterator:
var opts = {
    'iter': 100
};
var it = iterTriangularSeq( opts );

// Perform manual iteration...
var v;
while ( true ) {
    v = it.next();
    if ( v.done ) {
        break;
    }
    console.log( v.value );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/math/iter/sequences/squared-triangular`][@stdlib/math/iter/sequences/squared-triangular]</span><span class="delimiter">: </span><span class="description">create an iterator which generates a sequence of squared triangular numbers.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-iter-sequences-triangular.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-iter-sequences-triangular

[test-image]: https://github.com/stdlib-js/math-iter-sequences-triangular/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-iter-sequences-triangular/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-iter-sequences-triangular/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-iter-sequences-triangular?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-iter-sequences-triangular.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-iter-sequences-triangular/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-iter-sequences-triangular/tree/deno
[umd-url]: https://github.com/stdlib-js/math-iter-sequences-triangular/tree/umd
[esm-url]: https://github.com/stdlib-js/math-iter-sequences-triangular/tree/esm
[branches-url]: https://github.com/stdlib-js/math-iter-sequences-triangular/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter-sequences-triangular/main/LICENSE

[oeis-a000217]: https://oeis.org/A000217

[triangular-number]: https://en.wikipedia.org/wiki/Triangular_number

[@stdlib/math/base/special/binomcoef]: https://github.com/stdlib-js/math-base-special-binomcoef

<!-- <related-links> -->

[@stdlib/math/iter/sequences/squared-triangular]: https://github.com/stdlib-js/math-iter-sequences-squared-triangular

<!-- </related-links> -->

</section>

<!-- /.links -->
