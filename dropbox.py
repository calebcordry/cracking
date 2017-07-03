def say_what_you_see(input_strings):
    result = []
    for string in input_strings:
        r = process(string)
        result.append(r)
    return result 

def process(string):
    count = 0;
    result = [];
    for i in range(0, len(string)):
      if( string[i] != string[i - 1]):
        count = 0
      
      count += 1
      
      if i == len(string) -1 or string[i] != string[i + 1]:
        result.append(str(count))
        result.append(string[i])

    return ''.join(result)


result = say_what_you_see(['11', '12'])
print(result)