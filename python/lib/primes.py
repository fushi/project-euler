

def isPrime(num):
    if num in [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]:
        return True
    
    for i in primesBelow(int(num ** 0.5)):

        if not num % i:
            return False

    return True

# CPU Efficient, Memory Intensive
def primesBelow(num):
    
    candidates = range(2, num+1)
    
    i = 0
    
    num = candidates[i]
    
    max_num = ( max(candidates) ** 0.5) + 1
    
    while  num < max_num:
        num = candidates[i]
        candidates = [x for x in candidates if (x == num or x % num)]
        i += 1
    
    return candidates

# CPU Intensive, Memory Efficient
def primesBelowGenerator(num):
    for i in xrange(1, num+1):
        if isPrime(i):
            yield i


# Works in Progress

prime_nums = [1,2,3,5,7,11]

def primeGenerator():
    
    for i in prime_nums:
        yield i
    while 1:
        n = nextPrime(prime_nums[-1])

        prime_nums.append(n)

        yield n


def nextPrime(currentPrime):
    n = currentPrime + 1

    while not isPrime(n):
        n = n + 1

    return n
#
#def primeGenerator():
#    for i in primes:
#        yield i
#
#primes = [1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
#
#def primesBelowTest(num):
#    global primes
#    
#    if max(primes) < num:
#        for i in xrange(max(primes)+1, num+1):
#            if isPrime(i):
#                primes.append(i)
#
#
#    for i in primeGenerator():
#        
#        if i <= num:
#            yield i
#        else:
#            raise StopIteration
#
#
#def isPrimeTest(num):
#    for i in primesBelowTest(int(num ** 0.5)):
#        if i == 1:
#            pass
#        elif not num % i:
#            return False
#
#    return True
