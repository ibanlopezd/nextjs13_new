'use client';
import React, { useState } from 'react'

const CourseSearch = ({ getSearchResults }: { getSearchResults: (courses: any) => void }) => {
    const [searchValue, setSearchValue] = useState<string>('')
  
    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const res = await fetch(`/api/courses/search=${searchValue}`)

        const courses = await res.json()

        getSearchResults(courses)
    }

    return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search courses' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
        <button type='submit'>Search!</button>
    </form>
  )
}

export default CourseSearch