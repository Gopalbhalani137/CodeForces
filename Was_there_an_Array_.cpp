#include<bits/stdc++.h>
using namespace std;
#include<cctype>
 
typedef long long int ll;
typedef vector<ll> vll;
typedef vector<vector<ll>> vvll;
typedef vector<pair<ll, ll>> vpll;
typedef map<ll, ll> mll;
typedef map<char, ll> mcl;
typedef unordered_map<ll, ll> umll;
typedef unordered_map<char, ll> umcl;
typedef set<ll> sll;
typedef pair<ll, ll> pll;
 
#define Jay ios_base::sync_with_stdio(false);
#define Shree cin.tie(NULL);
#define Ram cout.tie(NULL);
#define yes cout << "YES" << "\n";
#define no cout << "NO" << "\n";
#define nope cout << -1 << endl;
#define ZZ cout<<0<<"\n";
#define AA cout<<1<<"\n";
#define cspace cout<<"\n";
#define endl '\n'
#define inarr(a,n) for(ll i=0;i<n;i++) cin>>a[i];
#define outarr(a,n) for(ll i=0;i<n;i++) cout<<a[i]<<" "; cout<<endl;
#define all(v) v.begin(),v.end()
#define rall(v) v.rbegin(),v.rend()
#define sz(v) (ll)(v.size())
#define fl(i, n) for(ll i=0; i<n; i++)
#define f(i, x, n) for(ll i=x; i<n; i++)
#define rf(i, n) for(ll i=n-1; i>=0; i--)
#define RR return;
#define ff first
#define ss second
#define pb push_back
#define eb emplace_back
#define pf push_front
 
const ll N=1e9;
const ll MOD=1e9+7;
const ll inf=LLONG_MAX;
const ll PI=3.141592653589793238462643;
 
ll fastprime(ll a){if(a != 2 && a % 2 == 0 || a < 2) return 0;  for(int i = 3; i * i <= a; i += 2) if(a % i == 0) return 0; return 1;}
bool isPrime(ll n){if(n<=1) return false; if(n<=3) return true; if(n%2==0 || n%3==0) return false; for(ll i=5; i*i<=n; i+=6) {if(n%i==0 || n%(i+2)==0) return false;} return true;}
bool isPowerOfTwo(ll n){if(n==0)return false;return (ceil(log2(n))==floor(log2(n)));}
bool isPerfectSquare(ll x){if(x>=0){ll sr=sqrt(x);return (sr*sr==x);}}
bool isInteger(double n){return floor(n)==n;}
 
ll findMEX(const set<ll>&s){ll mex=0;while(s.find(mex)!=s.end()){mex++;}return mex;}
bool customComparator(const pair<ll, ll> &a, const pair<ll, ll> &b){
    if(a.first == b.first) 
        return a.second > b.second;  
    return a.first < b.first;        
}
bool compareByValue(const pair<ll, ll>& a, const pair<ll, ll>& b) {
    return a.second < b.second;
}
 
void solve(){
    ll n;
	cin >> n;
	vll v(n - 2);
	inarr(v, n - 2);
	
	for(ll i = 0; i < n - 4; i++){
		if(v[i] == 1 && v[i + 1] == 0 && v[i + 2] == 1){
			no
			RR
		}
	}
	yes
}
 
int main(){
Jay; Shree; Ram;  
 
	int tc = 1;
	cin >> tc;
	while (tc--) solve();
	
    cout << fixed << setprecision(9);
	cerr << "TIME MEASURED: " << 1.0 * clock() / CLOCKS_PER_SEC << " SECONDS.\n";
	return 0;
}