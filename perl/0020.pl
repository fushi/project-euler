#!/usr/bin/perl

#n! means n * (n - 1)  ...  3 * 2 * 1
#
#Find the sum of the digits in the number 100!

$end = 100;
$total = 1;

for (1..$end){
	
	$total *= $_;
	
}

printf("%f\n\n", $total);

$total = "93326215443944102188325606108575267240944254854960571509166910400407995064242937148632694030450512898042989296944474898258737204311236641477561877016501813248";

@nums = split (//, $total);

$string = join "+", @nums;

print "$string\n";

print scalar @nums;

print "\n";

$total = 0;

foreach (@nums){
	
	$total += $_;
	
	
}

print $total