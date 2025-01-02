#include <bits/stdc++.h>
#define ll long long
#define mod 1000000007
using namespace std;
int main(){
  int t;
  cin>>t;
while(t--){
ll n,ans=0;
cin>>n;
vector<ll>v(n);
for(ll i=0;i<n;i++) cin>>v[i];
for(ll i=1;i<n;i++){
   if(max(v[i],v[i-1])<2*min(v[i],v[i-1])){
    ans=1;
   }
}
if(ans==1) cout<<"YES"<<endl;
else cout<<"NO"<<endl;
}
}