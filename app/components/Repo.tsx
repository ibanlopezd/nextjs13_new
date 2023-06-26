import Link from 'next/link';
import React from 'react'

async function fetchRepo(name: string)  {
    const response = await fetch(`https://api.github.com/repos/ibanlopezd/${name}`)
    const repo = await response.json();

    return repo;
}

const Repo = async ({ name }: { name: string }) => {
    const repo = await fetchRepo(name);

  return (
    <div>
        <h1>
            {repo.name}
        </h1>
        <ul>
            <li>{repo.description}</li>
            <li>
                <Link href={repo.html_url}>
                    Check it out!
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Repo