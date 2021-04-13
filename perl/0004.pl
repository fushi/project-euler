#!/usr/bin/perl

#A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91  99.
#
#Find the largest palindrome made from the product of two 3-digit numbers.


foreach $first (100..999){
	
	foreach $second (100..999){
		
		$hash{$first*$second} = 1;
		
	}
	
}

@pals = (sort {$b <=> $a} grep{isPal($_)} keys %hash);

print $pals[0];


sub isPal{
	
	my $num = shift;
	
	my ($length, $half, $first, $last);
	
	
	$length = length($num);
	
	
	if ($length % 2){
		
		$half = ($length - 1 )/2
	}
	
	else{
		$half = $length / 2;
	}
	
	$first = substr($num, 0, $half);
	
	$num = reverse $num;
	
	$last = substr($num, 0, $half);
	
	 return (1) if ($last eq $first);
	
}