from fractions import Fraction, gcd

def multiply_matricies(x, y):
    return [[sum(a*b for a,b in zip(x_row, y_col)) for y_col in zip(*y)] for x_row in x]


def subtract_matricies(a, b):
    size = len(a)
    result = [[None for _ in range(size)] for _ in range(size)]
    for i in range(size):
        for j in range(size):
            result[i][j] = a[i][j] - b[i][j]
    return result

def make_identity_matrix(size):
    # maybe a special case for size == 1???
    result = []
    for i in range(size):
        row = []
        for j in range(size):
            if i == j:
                row.append(1)
            else:
                row.append(0)
        result.append(row)
    return result


def invert_matrix(matrix):
    size = len(matrix)

    # initialize empty result array
    fundamental_matrix = make_identity_matrix(size)

    # iterate from top -> down then left -> right
    for col_i in range(size):
        # set the one for the column
        if matrix[col_i][col_i] != 1:
            constant = Fraction(1,  matrix[col_i][col_i])
            for i in range(size):
                matrix[col_i][i] *= constant
                fundamental_matrix[col_i][i] *= constant

        # set all the zeros
        for row_i in range(size):
            if row_i != col_i and matrix[row_i][col_i] != 0:
                constant = -matrix[row_i][col_i]
                for i in range(size):
                    matrix[row_i][i] = constant * matrix[col_i][i] + matrix[row_i][i]
                    fundamental_matrix[row_i][i] = constant * fundamental_matrix[col_i][i] + fundamental_matrix[row_i][i]
    
    return fundamental_matrix


def matrix_to_float(matrix):
    return [[float(col) for col in row] for row in matrix]

def sort_matrix(matrix):
    # group into terminal vs non-termial states
    has_data = []
    no_data = []
    for i, row in enumerate(matrix):
        total = sum(x for x in row)
        if not total:
            no_data.append(i)
        else:
            matrix[i] = [Fraction(x, total) for x in row]
            has_data.append(i)
           
    r = []
    for i in has_data:
        row = []
        for j in no_data:
            row.append(matrix[i][j])
        r.append(row)

    q = []
    for i in has_data:
        row = []
        for j in has_data:
            row.append(matrix[i][j])
        q.append(row)

    order = no_data + has_data
    return r, q, order


def lcm(a, b):
    return a * b // gcd(a, b)


def lcmm(*args):
    return reduce(lcm, args)

    
def answer(unsorted_p):
    if len(unsorted_p) == 1:
        return [1, 1]

    r, q, order = sort_matrix(unsorted_p)

    i = make_identity_matrix(len(r))
    i_minus_q = subtract_matricies(i, q)
    f = invert_matrix(i_minus_q)
    p_bar = multiply_matricies(f, r)

    raw_solution = p_bar[0]
    denominator = lcmm(*[x.denominator for x in raw_solution])
    solution = [x.numerator * (denominator / x.denominator) for x in raw_solution]

    return solution + [denominator]

# print answer(m)