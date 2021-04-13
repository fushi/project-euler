#!/usr/bin/python

from mymath import multiplesUnderOf



multiples = set((multiplesUnderOf(1000, 3)))
multiples.update(multiplesUnderOf(1000, 5))

print sum(multiples)