#include<bits/stdc++.h>
using namespace std;
#define int long long
#define st first
#define nd second
 
void solve(){
    string nt;
    cin >> nt;
    reverse(nt.begin(),nt.end());
    for(char &i : nt){
        if(i == 'q') i = 'p';
        else if(i == 'p') i = 'q';
    }
    cout << nt << '\n'; 
}
 
signed main(){
    ios::sync_with_stdio(0);
    cin.tie(0);
    cout.tie(0);
    // freopen("output.txt","w",stdout);
	int t;
	cin >> t;
    // t = 1;
	while(t--){
		solve();
	}
}