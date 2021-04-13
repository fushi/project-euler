#!/usr/bin/perl

#By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
#
#What is the 10001st prime number?

$goal = 6;

$num = 0;

while (@primes <= $goal){
	
	$num ++;
	
	
	push(@primes, $num) if isPrime($num); 
	
}

print $primes[-1];

sub isPrime{
	
	my ($num) = @_;
	
	foreach (2..$num - 1){
		return 0 if ($num % $_ == 0)
	}
	
	return 1;
	
}