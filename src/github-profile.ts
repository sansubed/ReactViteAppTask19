import { IProfileCard } from "./profile-card";

//const userName = "";

const githubApi = "https://api.github.com/users/sansubed";

export async function getGithubData() {
  const response = await fetch(githubApi);
  const data: IProfileCard = await response.json();
  return data;
}
