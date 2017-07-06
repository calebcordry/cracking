from collections import OrderedDict


def get_sorted(number):
    ascending = ascending = ''.join(sorted(str(number)))
    descending = ''.join(sorted(str(number), reverse=True))
    return descending, ascending


def make_base(num, base):
    (quotient, remainder) = divmod(num, base)
    if quotient > 0:
        return make_base(quotient, base) + str(remainder)
    return str(remainder)


def howFarBack(ordered_dict, target):
    for index, key in enumerate(ordered_dict.iterkeys()):
        if key == target:
            return len(ordered_dict) - index


def answer(minion_id, base):
    if not minion_id or not base:
        return

    ids = OrderedDict()
    id_length = len(minion_id)

    while True:
        if minion_id in ids:
            return howFarBack(ids, minion_id)

        ids[minion_id] = True
        descending, ascending = get_sorted(minion_id)
        diff = int(descending, base) - int(ascending, base)

        if base != 10:
            encoded_id = make_base(diff, base)
        else:
            encoded_id = diff

        minion_id = str(encoded_id).zfill(id_length)

print answer('54635', 10)
print answer('0999', 10)
print answer('8991', 10)
print answer('6174', 10)
print answer('210022', 3)
print answer('210111', 3)
print answer('122221', 3)
print answer('102212', 3)

for i in range(1, 1000):
    print answer(str(i), 10)