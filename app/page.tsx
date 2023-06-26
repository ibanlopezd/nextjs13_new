'use client';

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import LoadingPage from './loading';
import Courses from './components/Courses'
import CourseSearch from './components/CourseSearch';

const HomePage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch('/api/courses');
      const data = await res.json();

      setCourses(data);
      setLoading(false);
    }
    fetchCourses()    
  }, [])

  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <h1>Hello World</h1>
      <ul>
        <li>
          <Link href='/'>
            Home
          </Link>
        </li>
        <li>
          <Link href='/about'>
            About Us
          </Link>
        </li>
        <li>
          <Link href='/repos'>
            Repos
          </Link>
        </li>
        <li>
          <Link href='/about/team'>
            Our Team
          </Link>
        </li>
      </ul>
      <CourseSearch getSearchResults={setCourses}/>
      <Courses courses={courses} />
    </div>
  )
}

export default HomePage