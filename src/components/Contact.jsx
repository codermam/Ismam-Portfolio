import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-10">
      <div className="max-w-xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center">Contact</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
          <input type="email" placeholder="Email" className="input input-bordered w-full" />
          <textarea placeholder="Message" className="textarea textarea-bordered w-full h-32"></textarea>
          <div className="text-center">
            <button type="submit" className="btn btn-outline">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
