import React from 'react'
const notices = [
  {id:1, title:'School Reopens - New Session', date:'2025-04-01', content:'School reopens for the new academic session.'},
  {id:2, title:'Vacancy: Primary Teacher', date:'2025-10-10', content:'Qualified candidates may apply by sending CV to gbvmschool1992@gmail.com'}
]
export default function Notices(){ return (
  <section className="container mx-auto px-4 py-10">
    <h2 className="text-maroon font-serif text-3xl mb-4">Notices & Vacancies</h2>
    <div className="space-y-4">
      {notices.map(n=> (
        <article key={n.id} className="p-4 bg-white rounded shadow">
          <h3 className="font-semibold">{n.title}</h3>
          <div className="text-xs text-gray-500">{n.date}</div>
          <p className="mt-2 text-sm">{n.content}</p>
        </article>
      ))}
    </div>
  </section>
) }