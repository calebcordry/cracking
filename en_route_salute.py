def answer(path):
    going_right = 0
    salutes = 0

    for char in path:
        if char == '>':
            going_right += 1
        if char == '<':
            salutes += 2 * going_right

    return salutes


print answer("--->-><-><-->-"), 10
print answer(">----<"), 2
print answer("<<>><"), 4
print answer("<--->"), 0