import Link from 'next/link';
import React from 'react'

const Courses = async ({ courses }: { courses: any[] }) => {

  return (
    <div>
        <h3>Courses</h3>
        <ul>
            {courses.map((course: any) => (
                <li key={course.id}>
                    <Link href={course.link} target='_blank'>
                        {course.title}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Courses