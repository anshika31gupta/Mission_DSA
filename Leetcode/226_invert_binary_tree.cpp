class Solution {
public:
    TreeNode* invertTree(TreeNode* root) {
        if(root==NULL)  return NULL;
          TreeNode* temp = NULL;
          temp=root->left;
          root->left=root->right;
          root->right=temp;
        invertTree(root->left);
        invertTree(root->right);
        return root;
    }
};
