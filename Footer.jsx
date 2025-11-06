import React from 'react'

export default function Footer(){ return (
  <footer className="bg-maroon text-white py-8">
    <div className="container mx-auto px-4 grid md:grid-cols-3 gap-6">
      <div>
        <h3 className="font-serif text-lg">Gayatri Bal Vidya Mandir School</h3>
        <p className="text-sm mt-2">Saraswatipuram (Gulam Husain Purwa), Vibhuti Khand, Gomti Nagar, Lucknow- 226010</p>
      </div>
      <div>
        <h4 className="font-semibold">Contact</h4>
        <p className="text-sm mt-2">Phone: +91 91409 55011 / +91 80046 75715</p>
        <p className="text-sm">Email: gbvmschool1992@gmail.com</p>
      </div>
      <div>
        <h4 className="font-semibold">Quick Links</h4>
        <ul className="text-sm mt-2 space-y-1">
          <li>About</li>
          <li>Admission</li>
          <li>Notices & Vacancies</li>
        </ul>
      </div>
    </div>
    <div className="text-center mt-6 text-xs opacity-80">© 1992 Gayatri Bal Vidya Mandir School. All rights reserved.</div>
  </footer>
) }