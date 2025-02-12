import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
const Comment = () => {
  const [formSuccess, setFormSuccess] = useState("idle")
  const [loading, setLoading] = useState(false)
  const form = useRef()
  const email = useRef()
  const message = useRef()
  const formLocation = useRef()

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)
    if (!email.current.value || !message.current.value) return
    emailjs
    .sendForm('service_s20o61n', 'template_sl69e6u', form.current, {
        publicKey: 'e-UVv5ClwjhOslEwm',
      })
      .then(
        () => {
          setFormSuccess("success")
          setLoading(false)
          email.current.value = ""
          message.current.value = ""
          window.scrollTo({top: formLocation.current?.getBoundingClientRect()?.height - 100, behavior: "smooth"});
        },
        (error) => {
          setFormSuccess("failed")
          setLoading(false)
          console.log('FAILED...', error.text);
          window.scrollTo({top: formLocation.current?.getBoundingClientRect()?.height - 100, behavior: "smooth"});
        },
      );
  };
 
  return (
    <section className="bg-white mb-20">
      <div id='form' ref={formLocation} className="max-w-[960px] mx-auto  lg:py-10 px-6 lg:px-20 comment">
        {formSuccess === "success" && <p className="text-green-400 text-[14px] mb-6">
          Thank you form contacting us, we will respond as soon as possible.
        </p>}
       {formSuccess === "failed" &&  <p className="text-red-400 text-[14px] mb-6">
          Something went wrong, try again.
        </p>}
        <h2 className="text-[24px] lg:text-[2rem] text-[#011717] font-bold mb-4">
          Leave a comment
        </h2>
        <form onSubmit={sendEmail} ref={form}>
          <div className="flex flex-col mb-6">
            <label htmlFor="email" className="text-[14px] text-[#5B5756] mb-2">
              E-mail Address
            </label>
            <input
              type="text"
              ref={email}
              name="user_email"
              placeholder="Enter email here"
              className="border-[#5B5756] border-[2px] p-4 focus:outline-none"
            />
          </div>
          <div className="flex flex-col mb-6">
            <label
              htmlFor="message"
              className="text-[14px] text-[#5B5756] mb-2"
            >
              Type your comment here
            </label>
            <textarea
            ref={message}
              name="message"
              cols="30"
              rows="10"
              placeholder="I would like...."
              className="border-[#5B5756] border-[2px] p-4 focus:outline-none"
            ></textarea>
          </div>
          <div className="flex flex-col">
            <button type='submit' className="bg-[#03312E] hover:bg-[#183836] border-[1px] p-4 text-[16px] text-[#FDFFFD]">
              {loading ===  false ? "Submit Comment" : "please wait"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Comment;
