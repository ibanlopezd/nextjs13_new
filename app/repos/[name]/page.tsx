import Repo from '@/app/components/Repo'
import RepoDirs from '@/app/components/RepoDirs'
import React, { Suspense } from 'react'



const RepoPage = async ({ params: { name } }: { params: { name: string }}) => {

    return (
    <div>
      <Suspense fallback={<div>Loading info...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  )
}

export default RepoPage