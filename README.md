<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

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

# Quantile Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution [quantile function][quantile].

<section class="intro">

The [quantile function][quantile] for a [Kumaraswamy's double bounded][kumaraswamy-distribution] random variable is

<!-- <equation class="equation" label="eq:beta_quantile_function" align="center" raw="Q(p;a,b) = \left( 1 - (1-p)^{\tfrac{1}{b}} \right)^{\tfrac{1}{a}}" alt="Quantile function for a Kumaraswamy's double bounded distribution."> -->

<div class="equation" align="center" data-raw-text="Q(p;a,b) = \left( 1 - (1-p)^{\tfrac{1}{b}} \right)^{\tfrac{1}{a}}" data-equation="eq:beta_quantile_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@591cf9d5c3a0cd3c1ceec961e5c49d73a68374cb/lib/node_modules/@stdlib/stats/base/dists/kumaraswamy/quantile/docs/img/equation_beta_quantile_function.svg" alt="Quantile function for a Kumaraswamy's double bounded distribution.">
    <br>
</div>

<!-- </equation> -->

for `0 <= p <= 1`, where `a > 0` is the first shape parameter and `b > 0` is the second shape parameter.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/stats-base-dists-kumaraswamy-quantile
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
var quantile = require( '@stdlib/stats-base-dists-kumaraswamy-quantile' );
```

#### quantile( p, a, b )

Evaluates the [quantile function][quantile] for a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution with parameters `a` (first shape parameter) and `b` (second shape parameter).

```javascript
var y = quantile( 0.5, 1.0, 1.0 );
// returns 0.5

y = quantile( 0.5, 2.0, 4.0 );
// returns ~0.399

y = quantile( 0.2, 2.0, 2.0 );
// returns ~0.325

y = quantile( 0.8, 4.0, 4.0 );
// returns ~0.759
```

If provided a probability `p` outside the interval `[0,1]`, the function returns `NaN`.

```javascript
var y = quantile( -0.5, 4.0, 2.0 );
// returns NaN

y = quantile( 1.5, 4.0, 2.0 );
// returns NaN
```

If provided `NaN` as any argument, the function returns `NaN`.

```javascript
var y = quantile( NaN, 1.0, 1.0 );
// returns NaN

y = quantile( 0.2, NaN, 1.0 );
// returns NaN

y = quantile( 0.2, 1.0, NaN );
// returns NaN
```

If provided `a <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.2, -1.0, 0.5 );
// returns NaN

y = quantile( 0.2, 0.0, 0.5 );
// returns NaN
```

If provided `b <= 0`, the function returns `NaN`.

```javascript
var y = quantile( 0.2, 0.5, -1.0 );
// returns NaN

y = quantile( 0.2, 0.5, 0.0 );
// returns NaN
```

#### quantile.factory( a, b )

Returns a function for evaluating the [quantile function][quantile] for a [Kumaraswamy's double bounded][kumaraswamy-distribution] distribution with parameters `a` (first shape parameter) and `b` (second shape parameter).

```javascript
var myQuantile = quantile.factory( 0.5, 0.5 );

var y = myQuantile( 0.8 );
// returns ~0.922

y = myQuantile( 0.3 );
// returns ~0.26
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var randu = require( '@stdlib/random-base-randu' );
var EPS = require( '@stdlib/constants-float64-eps' );
var quantile = require( '@stdlib/stats-base-dists-kumaraswamy-quantile' );

var a;
var b;
var p;
var y;
var i;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    a = ( randu()*5.0 ) + EPS;
    b = ( randu()*5.0 ) + EPS;
    y = quantile( p, a, b );
    console.log( 'p: %d, a: %d, b: %d, Q(p;a,b): %d', p.toFixed( 4 ), a.toFixed( 4 ), b.toFixed( 4 ), y.toFixed( 4 ) );
}
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

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

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-kumaraswamy-quantile.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-kumaraswamy-quantile

[test-image]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-quantile/actions/workflows/test.yml/badge.svg?branch=v0.0.7
[test-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-quantile/actions/workflows/test.yml?query=branch:v0.0.7

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-kumaraswamy-quantile/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-kumaraswamy-quantile?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-kumaraswamy-quantile.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-kumaraswamy-quantile/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-quantile/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-quantile/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-quantile/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-kumaraswamy-quantile/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-kumaraswamy-quantile/main/LICENSE

[kumaraswamy-distribution]: https://en.wikipedia.org/wiki/Kumaraswamy_distribution

[quantile]: https://en.wikipedia.org/wiki/Quantile_function

</section>

<!-- /.links -->
