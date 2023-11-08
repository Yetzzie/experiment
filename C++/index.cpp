#include <iostream>
using namespace std;

int main() 
{
  int arr[6] = {2,3,4,5,6};
  int arr2[2][4] = {{1,2,3,4}, {5,6,7,8}};

  for(int x=0; x<=2; x++) {
    for(int y=0; y<=4; y++) {
      cout << x << "\n" << y;
    }
  }
}