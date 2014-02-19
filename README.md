difference
==========

Calculate the difference of two arrays

[![browser support](https://ci.testling.com/miketheprogrammer/difference.png)](https://ci.testling.com/miketheprogrammer/difference)


npm install difference


simple api

difference = require('difference');

difference(arrA, arrB);

// Important notes. 

[1] is the same as ['1']  for now.
This was meant to be the simplest and fastest way of calculating difference between two arrays.

difference([1,2,'3'],[3,4,5]) 

//output = [1,2,4,5];

