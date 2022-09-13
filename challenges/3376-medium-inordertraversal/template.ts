interface TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
}
type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode]
  ? [...InorderTraversal<T['left']>, T['val'], ...InorderTraversal<T['right']>]
  : []

// 总结
// 1. 类似与二叉树的中序遍历，使用递归的方式，先遍历左子树，再遍历根节点，最后遍历右子树