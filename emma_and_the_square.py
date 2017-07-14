import math

def  getMinimumUniqueSum(arr):
    result = []

    for row in arr:
        [first, last] = row.split(' ')
        first = float(first)
        last = float(last)

        current = math.floor(math.sqrt(first))
        square = current ** 2
        count = 0
        while (square <= last):
          if (square >= first):
            count += 1
          current += 1
          square = current ** 2
    
        result.append(count)

    return result


def transform(string):
    seen = {}
    changed = {}
    for i, char in enumerate(string):
        if (char in seen):
            if(char not in changed):
                char_num = ord(char) + 1
                changed[char] = 2
            else:
                char_num = ord(char) + changed[char]
                changed[char] = changed[char] + 1
            if (char_num > 122): 
              char_num -= 26
            string = string[:i] + chr(char_num) + string[i+1:]
            
        else:
            seen[char] = True
     
    return string  
        
print transform('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')


