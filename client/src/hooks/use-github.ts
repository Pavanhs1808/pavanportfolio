import { useState, useEffect } from "react";
import { apiRequest } from "@/lib/queryClient";

// GitHub repository interface
export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
  homepage: string | null;
}

// Demo images for repositories
const demoImages = [
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1464&q=80",
  "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
];

export interface ExtendedGitHubRepo extends GitHubRepo {
  imageUrl: string;
}

export const useGitHubRepos = (username: string, limit: number = 6) => {
  const [repos, setRepos] = useState<ExtendedGitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      setError(null);

      try {
        // Try to fetch from our API first
        const response = await apiRequest("GET", `/api/github/${username}`);
        
        if (response.ok) {
          const data = await response.json();
          
          // Add image URLs to repositories
          const enhancedRepos = data.map((repo: GitHubRepo, index: number) => ({
            ...repo,
            imageUrl: demoImages[index % demoImages.length]
          })).slice(0, limit);
          
          setRepos(enhancedRepos);
        } else {
          // Fallback to direct GitHub API if our API fails
          const directResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=${limit}`);
          
          if (!directResponse.ok) {
            throw new Error(`Failed to fetch repositories: ${directResponse.statusText}`);
          }
          
          const data = await directResponse.json();
          
          // Add image URLs to repositories
          const enhancedRepos = data.map((repo: GitHubRepo, index: number) => ({
            ...repo,
            imageUrl: demoImages[index % demoImages.length]
          }));
          
          setRepos(enhancedRepos);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch repositories");
        console.error("Error fetching GitHub repositories:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, [username, limit]);

  return { repos, isLoading, error };
};
