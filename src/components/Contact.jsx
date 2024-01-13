import { useState, useRef } from 'react';
import Heading from './Heading';
import emailjs from '@emailjs/browser';

import { FaPhoneAlt } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (form.name !== '' && form.email !== '' && form.message !== '')
      emailjs
        .send(
          'service_c4z1w2a',
          'template_rnvu0kh',
          {
            from_name: form.name,
            to_name: 'Tomasz',
            from_email: form.email,
            to_email: 'tomasz.iwanicki@onet.pl',
            message: form.message,
          },
          'ar4cYOV9TS7R9r-Ru'
        )
        .then(
          () => {
            setLoading(false);
            alert('Thank you. I will get back to you as soon as possible.');
            setForm({
              name: '',
              email: '',
              message: '',
            });
          },
          (error) => {
            setLoading(false);
            console.log(error);
            alert('Something went wrong.');
          }
        );
    else {
      setLoading(false);
      alert("Make sure you haven't left empty inputs!");
    }
  };

  return (
    <section
      id="contact"
      className={`flex flex-col gap-12`}
    >
      <div className="flex flex-col gap-2 justify-center mt-6">
        <Heading
          id="contact"
          subtitle="Get in touch"
          title="Contact me."
        />
      </div>
      <div className="flex flex-row-reverse justify-center mt-6 gap-12">
        <div className="flex flex-col gap-6 text-neutral-300 w-full pt-12">
          <h3 className="text-center text-[40px] text-white">Or use this!</h3>
          <div className="flex items-center gap-4 p-4 border-2 border-secondary rounded-md min-w-[300px]">
            <FaPhoneAlt />
            <p>794 478 594</p>
          </div>
          <div className="flex items-center gap-4 p-4 border-2 border-secondary rounded-md min-w-[300px]">
            <FiMail />
            <p>tomasz.iwanicki@onet.pl</p>
          </div>
        </div>
        <form
          className="flex gap-4 mb-8 w-full"
          ref={formRef}
          onSubmit={handleSubmit}
        >
          {/* <div className="w-[1px] h-[200px] bg-white" /> */}
          <div className="flex flex-col gap-4 w-full">
            <label className="flex flex-col gap-1">
              Name
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="custom-input"
              />
            </label>

            <label className="flex flex-col gap-1">
              Email
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="custom-input"
              />
            </label>

            <label className="flex flex-col gap-1">
              Message
              <textarea
                placeholder="Enter your message"
                name="message"
                value={form.message}
                onChange={handleChange}
                className="custom-input resize-none h-[150px]"
              ></textarea>
            </label>
            <div className="mt-8">
              <button
                type="submit"
                className="py-3 px-6 border-[2px] w-[260px] border-secondary hover:border-secondary/50 hover:text-secondary/80 rounded-md text-secondary text-[20px]"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
