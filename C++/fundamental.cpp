#include <iostream>
#include <vector>
#include <list>
using namespace std;

void bfs(int s, vector<int> g, bool vis[]);

void main()
{
	int s = 1;
	vector<int> g = { 1, 2, 1, 3, 1, 4, 3, 5 };
	bool vis[] = { false, false, false, false, false };
	bfs(s, g, vis);
}

void bfs(int s, vector<int> g, bool vis[])
{
	list<int> frontier;
	list<int> result;
	vis[s-1] = true;
	frontier.push_back(s);
	while (!frontier.empty()) {
		s = frontier.front();
		cout << s << endl;
		frontier.pop_front();
		result.push_back(s);
		for (int i = 0; i<g.size(); i = i + 2) {
			if (g[i] == s) {
				if (!vis[g[i + 1] - 1]) {
					vis[g[i + 1] - 1] = true;
					frontier.push_back(g[i + 1]);
				}
			}
		}
	}
}

void dfs(int s, vector<int> g[], bool vis[])
{
	vis[s - 1] = true;
	cout << s << " ";
	vector<int> adj = g[s];
	for (int i = 0; i < g[s].size(); i++) {
		if (!vis[adj[i] - 1]) {
			dfs(adj[i], g, vis);
		}
	}
}
