import Link from 'next/link';
import React from 'react'

async function fetchRepoContents(name: string) {
    const response = await fetch(`https://api.github.com/repos/ibanlopezd/${name}/contents`)

    const contents = await response.json()

    return contents;
}

const RepoDirs = async ({ name }: { name: string }) => {
    const contents = await fetchRepoContents(name);
    const dirs = contents.filter( (content: any) => content.type === 'dir');
  return (
    <div>
        <h3>Directories</h3>
        <ul>
            {dirs.map((dir: any, i: number) => (
                <li key={i}>
                    <Link href={`/repos/${name}/${dir.path}`}>
                        {dir.path}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default RepoDirs