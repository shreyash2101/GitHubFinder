class Github {
  constructor() {
    this.client_id = "7e291cf34079af9ddeb9";
    this.client_secret = "bc1303ce6cc4a972ac08176b0e9b18044c365328";
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile: profile, // or only profile would also work here
      repos, // or repos: repos
    };
  }
}
