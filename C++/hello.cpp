#include <iostream>
using namespace std;
int main()
{    int x, sum=0, product=1; 
int num[6] = {3, 4, 5, 6, 1, 2};
int maxNum = num[0];
    
cout<<"Name:  Earl john M. Requierme ";
cout<<"\nSection:  BSCS11S2 "; 

cout<< "\n[1] Display all numbers\n";   // not graded
for(x=0; x<=5; x++)
		{ cout<< "     "<<num[x] << " "; }
		
cout<< "\n\n[2] Display the sum of all numbers";  // not graded
for(x=0; x<=5; x++)
	{ sum = sum +num[x]; }	
	cout<<"\n     The sum of all numbers is  "<<sum;
	
cout<< "\n\n[3] Display the sum of all given even numbers";   // not graded
        sum=0;
       for(x=0; x<=5; x++)
	{       if (num[x] % 2==0) 
		{  sum = sum +num[x];   } 
	}//for loop
	cout<<"\n      The sum of all given even numbers is  "<<sum;


cout<< "\n\n[4] Display the sum of all numbers in even subscript 0, 2, 4";   // not graded
sum=0;
for(x=0; x<=5; x=x+2)
	{ sum = sum + num[x]; }	
	cout<<"\n     The sum of all numbers in even subscript 0, 2, 4 is  "<<sum;
//or 
sum=0;
for(x=0; x<=5; x++)                                                                             
{  if(x % 2 == 0)
    sum = sum + num[x];
} 
cout<<"\nThe sum of all numbers in even subscript(0 2 4 ) is  "<<sum; 


cout<< "\n\n[5] Display the product of all given odd numbers"; 

       for(x=0; x<=5; x++) {
        if(num[x] % 2) {
          product *= num[x];
        }
       }
  cout<<"\nThe product of all given odd numbers is  "<<" "<<product;


cout<< "\n\n[6] Display the product of all numbers in odd subscript  1, 3, 5"; 
  product=1;

      for(x=0; x<=5; x++){
        if(x % 2 == 1){
          product *= num[x];
        }
      }

cout<< "\nThe product of all numbers in odd subscript(1, 3, 5 ) is  "<<" "<<product;


cout<< "\n\n[7] Display the highest number"; 

    for(x=0; x<=5; x++) {
      if(num[x] > maxNum) {
        maxNum = num[x];
      }
    }


    cout<< "\n\n the highest number: " << maxNum;

}   //end of main
