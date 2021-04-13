#!/usr/bin/perl

use strict;

#The prime factors of 13195 are 5, 7, 13 and 29.

#What is the largest prime factor of the number 600851475143 ?


my ($large_num) = 600851475143;

my @factors =  getFactors(13195);


print "@factors";


sub getFactors{
	my ($num) = shift;
	
	return grep{$num % $_ == 0} (1..$num);
	
}

sub getPrimes{
	
	my ($num) = shift;
	
	return grep{isPrime($_)} (1..$num);	
}

sub isPrime{
	
	my ($num) = shift;
	
	foreach (2..$num - 1){
		return 0 if ($num % $_ == 0)
	}
	
	return 1;
	
}