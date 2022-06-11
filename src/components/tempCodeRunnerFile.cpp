#include <bits/stdc++.h>
using namespace std;


int funct(int arr[]  , int n)
{
    if(n<=0)
    {
        return 0;
    }

    return max(arr[n-1] + funct(arr, n-2) , funct(arr, n-1) );
}

int main()
{  
