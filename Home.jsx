import React from 'react'
export default function Home(){ return (
  <section className="container mx-auto px-4 py-10">
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <h2 className="text-maroon font-serif text-4xl mb-4">Welcome to Gayatri Bal Vidya Mandir School</h2>
        <p className="mb-4">Established with the vision of nurturing young minds through value-based education, Gayatri Bal Vidya Mandir School is a co-educational English medium institution dedicated to academic excellence and holistic development.</p>
        <a href="/#/" className="inline-block mt-3 px-6 py-2 border-2 border-maroon text-maroon font-semibold rounded">Admission Enquiries</a>
      </div>
      <div className="shadow-lg rounded overflow-hidden">
        <img src="/public/assets/school.jpg" alt="school building" className="w-full h-72 object-cover" />
      </div>
    </div>
  </section>
) }