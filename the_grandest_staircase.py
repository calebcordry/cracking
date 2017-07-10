# def count_blocks(last_taken, blocks_left, memo):

#     if blocks_left > 0  and last_taken == 1:
#         return 0

#     if blocks_left == 0:
#         return 1

#     count = 0
#     for i in range(last_taken - 1, 0, -1):
#         count += count_blocks(i, blocks_left - i, memo)
    
#     memo[string] = count
#     return count

import math

def count_blocks(n, k, memo):
    if n == 1 and k == 1:
        return 1
    elif n > 0 and k == 0:
        return 0
    elif n < k or k < 1:
        return 0

    if memo[n][k] is None:
        result = count_blocks(n - k, k, memo) + count_blocks(n - k, k - 1, memo)
        memo[n][k] = result

    return memo[n][k]

def answer(n):
    max_k = int(math.floor((math.sqrt(8 * n + 1) - 1) / 2))
    memo = [[None for _ in range(21)] for _ in range(201)]
    return sum(count_blocks(n, k, memo) for k in range(max_k + 1)) - 1


print answer(3), 1
print answer(4), 1
print answer(5), 2
print answer(6), 3
print answer(7), 4
print answer(200), 487067745