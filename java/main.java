import java.util.Scanner;
class Main{
    public static void main(String[] args){

        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the number ");
        int num=sc.nextInt();
        System.out.println("Enter the digit ");
        int d=sc.nextInt();
        DigitAnalyzer da= new DigitAnalyzer();
        da.countDigit(num,d);
        

    }
}
        class DigitAnalyzer{
            public int countDigit(int num, int d){
                int temp=0,count=0;
                while(num>0)
                {
                    temp=num%10;
                    if(temp==d){
                        count++;
                     }
                    num=num/10;
                }
                System.out.println("count:"+count); 
                return count;
            }
    }

    


