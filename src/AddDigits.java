/**
 * Created by marsw on 1/19/2016.
 */
public class AddDigits {

    public class Solution{

        public int addDigits(int num){
            while (num>=10){
                int newNum = 0;
                while(num >= 10){
                    newNum = newNum + num%10;
                    num = num/10;
                }
                num = newNum + num;
            }
            return num;
        }

        public int addDigits2(int num) {
            //For number that from 0 to 9, the answer is themselves
            //For number that is divisible by 9, the answer is 9
            //Otherwise, the answer is the reminder after divided by 9
            return num>9?(num%9==0?9:num%9):num;
        }
    }

}
