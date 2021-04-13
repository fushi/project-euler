#!/usr/bin/perl

#The sum of the squares of the first ten natural numbers is,
#
#12 + 22 + ... + 102 = 385
#The square of the sum of the first ten natural numbers is,
#
#(1 + 2 + ... + 10)2 = 552 = 3025
#Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025  385 = 2640.
#
#Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

use List::Util qw(sum max min);


$last = 100;

$first = sum(map{$_ * $_} (1..$last));

$second = (sum(1..$last) * sum(1..$last));


print $second - $first;