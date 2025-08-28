class Solution {
public:
    int trap(vector<int>& height) {
       int n= height.size();
       int rmax=0,lmax=0,water=0,index=0;
       int maxheight =  height[0];
       for(int i=0;i<n;i++){
        if(height[i]>maxheight){
            maxheight = height[i];
            index=i;
        }
       }
       for(int i=0;i<index;i++){
        if(lmax>height[i]){
            water+=lmax-height[i];
        }
        else{
            lmax=height[i];
        }
       }
       for(int j=n-1;j>index;j--){
        if(rmax>height[j]){
            water+=rmax-height[j];
        }
        else{
            rmax=height[j];
        }
       }

        return water;
        
    }
};
