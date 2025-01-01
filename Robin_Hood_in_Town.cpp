#include <bits/stdc++.h>
#define ll long long int
#define flash ios_base::sync_with_stdio(false), cin.tie(NULL), cout.tie(NULL)
#define fi(l, r) for (ll i = l; i < r; i++)
#define fj(l, r) for (ll j = l; j < r; j++)
#define fk(l, r) for (ll k = l; k < r; k++)
#define fir(r, l) for (ll i = r; i >= l; i--)
#define fjr(r, l) for (ll j = r; j >= l; j--)
#define all(x) x.begin(), x.end()
#define yes cout << "YES" << endl
#define no cout << "NO" << endl
#define pb push_back
#define yo return 0;
#define debug(t) while (t--)
using namespace std;
// ---------------------------yowai mo---------------------------
void solve()
{
    ll n;
    cin >> n;
    vector<ll> arr(n);
    ll sum=0;
    fi(0, n)
    {
        cin >> arr[i];
        sum=sum+arr[i];
    }
    if(n<=2){
        cout<<-1<<endl;
        return;
    }
    sort(all(arr));
    ll temp=n/2;
    temp++;
    ll flag=arr[temp-1]*2*arr.size();
    ll ans=flag-sum;
    if(ans<0){
        cout<<0<<endl;
        return;
    }
    cout<<ans+1<<endl;
    
 
}
int main()
{
    flash;
    ll t;
    cin >> t;
    debug(t)
    solve();
    yo;
}