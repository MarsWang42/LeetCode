class Solution {
    public:
        string reverseString(string s) {
            if(s.size() == 0){
                return s;
            }
            char tmp;
            for(unsigned long begin = 0, end = s.size()-1; begin < end; begin++, end--){
                tmp = s[begin];
                s[begin] = s[end];
                s[end] = tmp;
            }
            return s;
        }
};
