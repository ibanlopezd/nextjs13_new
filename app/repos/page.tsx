import Link from 'next/link';
import React from 'react'

async function fetchRepos() {
    const response = await fetch('https://api.github.com/users/ibanlopezd/repos', 
    {
        next: {
            revalidate: 60
        }
    })

    const repos = await response.json();

    return repos;
}

const ReposPage = async () => {
    const repos = await fetchRepos();

  return (
    <div>
        <h1>Repos</h1>
        <div>
            {repos.map((repo: { id: string; name: string; description: string; }, index: number) => (
                <div key={index}>
                    <Link href={`/repos/${repo.name}`}>
                        <h3>
                            {repo.name}
                        </h3>
                        <p>
                            {repo.description}
                        </p>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default ReposPage