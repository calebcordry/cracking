def answer(n):
    if not n: 
        return None

    memo = {}
    
    def helper(n):
        if n == 1: 
            return 0
        if n == 2: 
            return 1

        if n in memo:
            return memo[n]

        if n % 2 == 0:
            result =  1 + helper(n / 2)
            memo[n] = result
            return result

        add = 2 + helper((n + 1) / 2)
        remove = 2 + helper((n - 1) / 2)
        
        result = min(add, remove)
        memo[n] = result
        return result
    
    number = long(n)
    return helper(number)

print answer('5')
# print answer('15')