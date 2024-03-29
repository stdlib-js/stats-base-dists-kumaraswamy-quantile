/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/**
* Evaluates the quantile function for a Kumaraswamy's double bounded distribution.
*
* ## Notes
*
* -   If `p < 0` or `p > 1`, the function returns `NaN`.
*
* @param p - input value
* @returns evaluated quantile function
*/
type Unary = ( p: number ) => number;

/**
* Interface for the quantile function of a Kumaraswamy's double bounded distribution.
*/
interface Quantile {
	/**
	* Evaluates the quantile function for a Kumaraswamy's double bounded distribution with first shape parameter `a` and second shape parameter `b` at a probability `p`.
	*
	* ## Notes
	*
	* -   If `p < 0` or `p > 1`, the function returns `NaN`.
	* -   If `a <= 0` or `b <= 0`, the function returns `NaN`.
	*
	* @param p - input probability
	* @param a - first shape parameter
	* @param b - second shape parameter
	* @returns evaluated quantile function
	*
	* @example
	* var y = quantile( 0.5, 1.0, 1.0 );
	* // returns 0.5
	*
	* @example
	* var y = quantile( 0.5, 2.0, 4.0 );
	* // returns ~0.399
	*
	* @example
	* var y = quantile( 0.2, 2.0, 2.0 );
	* // returns ~0.325
	*
	* @example
	* var y = quantile( 0.8, 4.0, 4.0 );
	* // returns ~0.759
	*
	* @example
	* var y = quantile( -0.5, 4.0, 2.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.8, -1.0, 0.5 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.8, 0.5, -1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( NaN, 1.0, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.1, NaN, 1.0 );
	* // returns NaN
	*
	* @example
	* var y = quantile( 0.1, 1.0, NaN );
	* // returns NaN
	*/
	( p: number, a: number, b: number ): number;

	/**
	* Returns a function for evaluating the quantile function for a Kumaraswamy's double bounded distribution with first shape parameter `a` and second shape parameter `b`.
	*
	* @param a - first shape parameter
	* @param b - second shape parameter
	* @returns quantile function
	*
	* @example
	* var myQuantile = quantile.factory( 0.5, 0.5 );
	*
	* var y = myQuantile( 0.8 );
	* // returns ~0.922
	*
	* y = myQuantile( 0.3 );
	* // returns ~0.26
	*/
	factory( a: number, b: number ): Unary;
}

/**
* Kumaraswamy's double bounded distribution quantile function.
*
* @param x - input value
* @param a - first shape parameter
* @param b - second shape parameter
* @returns evaluated quantile function
*
* @example
* var y = quantile( 0.5, 1.0, 1.0 );
* // returns 0.5
*
* y = quantile( 0.5, 2.0, 4.0 );
* // returns ~0.399
*
* var myQuantile = factory( 0.5, 0.5 );
*
* y = myQuantile( 0.8 );
* // returns ~0.922
*
* y = myQuantile( 0.3 );
* // returns ~0.26
*/
declare var quantile: Quantile;


// EXPORTS //

export = quantile;
