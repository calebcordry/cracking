def quicksort(array):
    return quicksortHelper(array, 0, len(array) - 1)

def quicksortHelper(array, left, right):
    if left >= right:
        return

    pivot = partition(array, left, right)

    quicksortHelper(array, pivot + 1, right)
    quicksortHelper(array, left, pivot - 1)

    return array

def partition(array, left, right):
    pivot_index = left
    pivot = array[pivot_index]
    left += 1

    while left <= right:
        while (array[left] < pivot):
            left += 1

        while (array[right] > pivot):
            right -= 1
        
        if left <= right:
            array[left], array[right] = array[right], array[left]
            left += 1
            right -= 1
    
    array[pivot_index], array[right] = array[right], array[pivot_index]
    return right

print quicksort([5,8,2,4,2,9])