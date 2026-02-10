"use client";
import { useState } from "react";
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "fd88cd38-6634-491f-91e4-a07f2d5568f6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      setTimeout(() => {
        setResult("");
      }, 3000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-6/12 xl:w-5/12">
            <div className="flex flex-col space-y-12 md:space-y-16">
              <div>
                <h1 className="mb-5 text-2xl font-bold text-black sm:text-3xl dark:text-white">
                  {/* {t("contact.address.title")}
                   */}
                  Our Contact
                </h1>

                <div className="flex w-full max-w-full flex-col space-y-4 md:max-w-sm">
                  <p>xinchat@aplikasiku.web.id</p>
                  <p>+6285123724362</p>
                </div>
              </div>

              <div>
                <h1 className="mb-5 text-2xl font-bold text-black sm:text-3xl dark:text-white">
                  {/* {t("contact.address.title")}
                   */}
                  Our Location
                </h1>

                <div className="flex w-full max-w-full flex-col space-y-4 md:max-w-sm">
                  <p>
                    Jalan Lo`Andeng, Desa/Kelurahan Purwodadi, Kec. Blimbing,
                    Kota Malang, Provinsi Jawa Timur
                  </p>
                  {/* <p>xinchat@aplikasiku.web.id</p>
            <p>+6287712622018</p> */}
                </div>
              </div>

              <div className="gap -6 mt-8 flex flex-wrap justify-between md:mt-12 md:gap-10">
                <div className="w-full md:w-auto">
                  {/* <h3 className="font-bold">{t("contact.box1.title")}</h3> */}
                  <p className="text-sm text-gray-600">
                    {/* {t("contact.box1.description")} */}
                  </p>
                </div>
                <div className="w-full md:w-auto">
                  {/* <h3 className="font-bold">{t("contact.box2.title")}</h3> */}
                  <p className="text-sm text-gray-600">
                    {/* {t("contact.box2.description")} */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-6/12 xl:w-7/12">
            <div
              className="shadow-three dark:bg-gray-dark mb-12 rounded-xs bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black sm:text-3xl lg:text-2xl xl:text-3xl dark:text-white">
                Need Help? Open a Ticket
              </h2>
              <p className="text-body-color mb-12 text-base font-medium">
                Our support team will get back to you ASAP via email.
              </p>
              <form onSubmit={onSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="text-dark mb-3 block text-sm font-medium dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      className="bg-primary shadow-submit hover:bg-primary/90 dark:shadow-submit-dark rounded-xs px-9 py-4 text-base font-medium text-white duration-300"
                      type="submit"
                    >
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <span className="mt-4 block text-center text-sm text-gray-500">
        {result}
      </span>
    </section>
  );
};

export default Contact;
