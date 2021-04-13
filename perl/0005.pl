#!/usr/bin/perl

#2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
#
#What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?


$num = 1;

while(($num % 20) || ($num % 19) || ($num % 18) || ($num % 17) || $num % 16 || $num % 15 || $num % 14 || $num % 13 || $num % 12 || $num % 11){
	
	$num++;
}

print $num;