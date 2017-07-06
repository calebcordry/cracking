def test_slice(test, string):
    test_len = len(test)
    start = test_len
    stop = test_len + test_len
    while start < len(string):
        if string[start : stop] != test:
            return False
        start = stop
        stop = stop + test_len
    return True

def answer(string):
    if not string:
        return

    test = string[0]

    for i in range(1, len(string) / 2 + 1):
        if test_slice(test, string):
            return len(string) / len(test)
        test += string[i]
    return 0


print answer('dabcabcd')