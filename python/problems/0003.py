#!/usr/bin/python

from factors import factorsOfGenerator
from primes import isPrime

primes = []

for x in factorsOfGenerator(600851475143):

    if x[0] == 1:
        pass

    for y in x:
        if isPrime(y):
            primes.append(y)


print primes[-1]