#!/usr/bin/perl

use strict;


#If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
#
#Find the sum of all the multiples of 3 or 5 below 1000.

my $sum = 0;

for (1..999){
	
	
	print "$_\n"  unless (($_ % 3) && ($_ % 5));
	$sum += $_ unless (($_ % 3) && ($_ % 5));
	

	
}

print $sum;