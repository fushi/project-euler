import itertools

def multiplesUnderOf(max, num):
    
    multiples = []
    
    i = 1
    
    while ((i * num) < max):
        
        multiples.append(i * num)
        
        i = i + 1
    
    return multiples












