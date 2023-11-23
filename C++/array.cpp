#include <iostream>
#include <climits>
using namespace std;

int main() {
 
 int arrNum[3][3];
 int sum, allSum=0;
 int maxNum=0;
 int minNum = INT_MAX;

 cout << "[1] Enter for array number:" << "\n";

 for(int r = 0; r < 3; r++) {
    for(int c = 0; c < 3; c++) {
      cin>>arrNum[r][c];
    }
 }

  // Display the output

  cout<<"\n" << "[2] Display all numbers: " << endl;

  for(int r = 0; r < 3; r++) {
    for(int c = 0; c < 3; c++) {
      cout << "numbers[" << r << "][" << c << "]: " << arrNum[r][c]<<endl; 
    }
 }

  cout<<"\n" << "[3] Display the sum for each Rows" << endl;

  for(int r = 0; r < 3; r++) {
    sum=0;
    for(int c = 0; c < 3; c++) {
      sum += arrNum[r][c];
    }
    cout << "Sum of the row" << r + 1<< " is " << sum << endl;
 }

cout<<"\n" << "[4] Display the sum for each columns" << endl;

 for(int c = 0; c < 3; c++) {
    sum=0;
    for(int r = 0; r < 3; r++) {
      sum += arrNum[r][c];
    }
    cout << "Sum of the columns" << c + 1<< " is " << sum << endl;
 }

  cout<<"\n" <<"[5] Display the sum of all Rows"<< endl;

  for(int r = 0; r < 3; r++) {
    sum=0;
    for(int c = 0; c < 3; c++) {
      sum += arrNum[r][c];
    }
    allSum += sum;
 }
  cout<< "The sum all rows is: "<< allSum<<endl;

  cout<<"\n"<<"[6] Display the sum of all Columns"<<endl;
  
  allSum = 0;
  for(int c = 0; c < 3; c++) {
    sum=0;
    for(int r = 0; r < 3; r++) {
      sum += arrNum[r][c];
    }
    allSum += sum;
 }
 cout<< "The sum all columns is: "<< allSum<<endl;

 cout <<"\n" << "[7] Get the highest number and display from row and column"<<endl;

 for(int r = 0; r < 3; r++) {
    
    for(int c = 0; c < 3; c++) {
      if(arrNum[r][c] > maxNum) {
        maxNum = arrNum[r][c];
      }
    }
 }
  cout << "The highest number is: "<< maxNum<<endl;

  cout<<"\n"<<"[8] Get the lowest number and display from row and column"<<endl;


  for(int r = 0; r < 3; r++) {
    
    for(int c = 0; c < 3; c++) {
      if(arrNum[r][c] < minNum) {
        minNum = arrNum[r][c];
      }
    }
 }

 cout << "The lowest number is: "<< minNum << endl;



 cout << "\n"
         << "[9] Display only all EVEN numbers" << endl;

    for (int r = 0; r < 3; r++) {
        for (int c = 0; c < 3; c++) {
            if (arrNum[r][c] % 2 == 0) {
                cout << "Even number at [" << r << "][" << c << "]: " << arrNum[r][c] << endl;
            }
        }
    }
}
