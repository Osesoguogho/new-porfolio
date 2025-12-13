import {useState} from 'react';
import emailjs from '@emailjs/browser';
import { SectionWrapper } from '@/hoc';
import EarthCanvas from './canvas/Earth';
import StarsCanvas from './canvas/Star';


export const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
const [errors, setErrors] = useState({});
const [status, setStatus] = useState("");



const validate = () => {
let newErrors = {};
if (!form.name.trim()) newErrors.name = "Name is required";
if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = "Valid email required";
if (!form.message.trim()) newErrors.message = "Message cannot be empty";
setErrors(newErrors);
return Object.keys(newErrors).length === 0;
};


const handleSubmit = async (e) => {
e.preventDefault();
if (!validate()) return;


setStatus("Sending...");


try {
await emailjs.send(
process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
{
from_name: form.name,
to_name: "Oses dev",
from_email: form.email,
to_email: "osesthedon@gmail.com",
message: form.message,
},
process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
);

console.log("Email successfully sent!");

setStatus("Message sent successfully!");
setForm({ name: "", email: "", message: "" });
setTimeout(() => setStatus(""), 5000);
} catch (error) {
console.error(error);
setStatus("Failed to send message. Try again.");
}
};
  return (
    <section className="relative w-[100%] min-h-screen max-w-7xl bg-black text-white flex items-center justify-center p-6 rounded-md mx-auto">
    <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col-reverse md:flex-row gap-8 items-center justify-center">

{/* Left: Form */}
<div className="w-full bg-white/6 backdrop-blur-xl rounded-2xl p-6 md:p-10 shadow-2xl border border-white/10">
<h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Contact Me</h2>


<form onSubmit={handleSubmit} className="flex flex-col gap-4 text-base w-full">
<div>
<input
className="w-full p-3 md:p-4 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring focus:ring-pink-500/30"
placeholder="Your Name"
value={form.name}
onChange={(e) => setForm({ ...form, name: e.target.value })}
/>
{errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
</div>


<div>
<input
className="w-full p-3 md:p-4 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring focus:ring-pink-500/30"
placeholder="Your Email"
value={form.email}
onChange={(e) => setForm({ ...form, email: e.target.value })}
/>
{errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
</div>


<div>
<textarea
className="w-full p-3 md:p-4 rounded-md bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring focus:ring-pink-500/30"
placeholder="Your Message"
rows={5}
value={form.message}
onChange={(e) => setForm({ ...form, message: e.target.value })}
/>
{errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
</div>


<button className="mt-2 bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-95 transition p-3 md:p-4 rounded-md text-white font-semibold text-lg shadow-md cursor-pointer" type="submit">
Send Message
</button>


{status && <p className="text-center text-green-300 mt-3">{status}</p>}
</form>


{/* Small notes about EmailJS env variables */}

</div>



{/* Right: 3D Globe */}
<div className="w-full h-80 md:h-96">
<EarthCanvas />
</div>

</div>
<div className="absolute inset-0 z-0">
<StarsCanvas />
</div>
{/* <EarthCanvas /> */}
</section>

  )
}

// const Contact = SectionWrapper(ContactSection, "contact");
// export {Contact};

