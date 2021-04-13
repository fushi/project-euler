#!/usr/bin/perl

#The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

#Find the sum of all the primes below two million.

use List::Util qw(sum max min);

$goal = 2000000;

$num = 4;
$highest = 3;

@primes = (2, 3);

while ($num < $goal){
	
	$num ++;
	
	if (isPrime($num, \@primes)){
		
		$highest = $num;
		push(@primes, $num) ;
	} 
	
}

print sum @primes;


sub isPrime{
	
	my ($num, $primes) = @_;
	
	my $last = $primes->[-1];
	
	return 0 if grep{$num % $_ == 0} (@$primes);
	
	while ($last < $num-1){
		
		return 0 if ($num % $last == 0);
		
		$last += 2;
	}
	
	return (1);
	
}