import React from 'react'
export default function Contact(){ return (
  <section className="container mx-auto px-4 py-10">
    <h2 className="text-maroon font-serif text-3xl mb-4">Contact Us</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div>
        <p><strong>Address:</strong> Saraswatipuram (Gulam Husain Purwa), Vibhuti Khand, Gomti Nagar, Lucknow- 226010</p>
        <p className="mt-2"><strong>Phone:</strong> +91 91409 55011 / +91 80046 75715</p>
        <p className="mt-2"><strong>Email:</strong> gbvmschool1992@gmail.com</p>
      </div>
      <div>
        <form className="space-y-3 bg-white p-4 rounded shadow">
          <input className="w-full p-2 border rounded" placeholder="Your name" />
          <input className="w-full p-2 border rounded" placeholder="Email" />
          <textarea className="w-full p-2 border rounded" rows="4" placeholder="Message"></textarea>
          <button type="button" className="px-4 py-2 border rounded border-maroon text-maroon">Send Message</button>
        </form>
      </div>
    </div>
  </section>
) }