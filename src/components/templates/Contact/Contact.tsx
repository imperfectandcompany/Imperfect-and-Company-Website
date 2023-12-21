import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "components/organisms/Header/Header";
import Footer from "components/organisms/Footer/Footer";
import Input from "components/atoms/Input";
import CTAButton from "components/molecules/CtaButton";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const [formData, setFormData] = React.useState({
  //   name: '',
  //   email: '',
  //   message: '',
  //   context: '',
  //   agreement: false,
  // });


  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Submit form logic is gonna go here
  };



  return (
    <motion.div
      className="main"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <section className="hero">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="my-10">
          <div className="container content-contact">
            <h1 className="text-2xl font-bold text-white mb-4">Contact Us</h1>
            <p className='text-white mb-4'>We welcome your interest in Imperfect and Company. Please fill out the form below to inquire about partnerships, proposals, investment opportunities, or any other inquiries.</p>
            <form onSubmit={handleSubmit}>
              <Input as="input" type="text" placeholder="Your Name" />
              <Input as="input" type="email" placeholder="Your Email" />
              <p className='text-white mb-4'>Please select the context of your inquiry:</p>
<Input
  radios={[
    { as: 'radio', value: 'partnership', label: 'Partnership' },
    { as: 'radio', value: 'proposal', label: 'Proposal' },
    { as: 'radio', value: 'investment', label: 'Investment' },
    { as: 'radio', value: 'other', label: 'Other' }
  ]}
/>

              <Input as="textarea" placeholder="Your Message" />
              <div className="items-end flex flex-col space-y-2 mb-2">
                <div>
                  <Input as="checkbox" name="agree" label="I agree to the terms of service" />
                </div>
                <div>
                  <CTAButton link={"/home"} >Submit</CTAButton>
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </section>
      <Footer />
    </motion.div>
  );
}

export default Contact;