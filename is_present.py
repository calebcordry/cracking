class Node: 
  __init__(self, value):
    self.value = value
    self.left = None
    self.right = None

def isPresent (root, val):
    if root is None:
        return 0
    if root == val:
        return 1

    


eight = new Node(8)
thirty = new Node(30)
ten = new Node(10)
twenty = new Node(20)
eleven = new Node(11)

eleven.left = ten
eleven.right = twenty
ten.left = eight
twent.right = thirty
