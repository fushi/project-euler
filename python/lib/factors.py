def factorsOfGenerator(num):
    for i in xrange(1, int(num ** 0.5)):
        if not num % i:
            yield [i, num/i]