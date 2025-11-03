interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}

type InorderTraversal<T extends TreeNode | null> =
  T extends TreeNode
    ? [T['val'], ...InorderTraversal<T['left']>, ...InorderTraversal<T['right']>]
    : []
