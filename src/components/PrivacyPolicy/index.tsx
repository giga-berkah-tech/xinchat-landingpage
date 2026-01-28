import Breadcrumb from "../Common/Breadcrumb";
export const PrivacyPolicy = () => {
  const terms = [
    {
      title: "Information We Collect",
      desc: "We collect personal data to provide and improve our services. The information collected includes:",
      list: [
        "Personal Information: Collected during registration, such as name, email address, and other details you provide.",
        "Usage Data: Information about how you interact with the application.",
      ],
    },
    {
      title: "How We Use Your Information",
      desc: "We use the information we collect for the following purposes:",
      list: [
        "Account Registration: To create and manage your user account.",
        "Service Improvement: To enhance the performance, security, and functionality of our services.",
        "Customer Support: To respond to inquiries and provide assistance.",
        "Security and Fraud Prevention: To protect against unauthorized access, misuse, or illegal activity.",
      ],
    },
    {
      title: "Data Storage and Security",
      list: [
        "We store your personal information securely in our database. We implement reasonable security measures to protect your information from unauthorized access, alteration, or destruction.",
        "While we strive to use commercially acceptable means to protect your data, no method of transmission over the internet or electronic storage is 100% secure. Therefore, we cannot guarantee its absolute security.",
      ],
    },
    {
      title: "Third-Party Services",
      desc: "We use third-party services to improve our features. Specifically:",
      list: [
        "ChatGPT API: To enhance the user experience with AI-powered features.",
      ],
      note: "We do not share your personal data with third-party companies for marketing or unrelated purposes.",
    },
    {
      title: "Your Rights",
      desc: "As a user, you have the following rights:",
      list: [
        "Access Your Data: You can request access to the data we collect about you.",
        "Update Your Data: You can request corrections to your personal information.",
        "Delete Your Data: You can request the deletion of your personal information from our systems.",
      ],
      note: "To exercise these rights, contact us at xinchat@aplikasiku.web.id",
    },
    {
      title: "Data Retention",
      desc: "We retain your personal information only as long as necessary to provide our services, comply with legal obligations, or resolve disputes.",
    },
    {
      title: "Changes to This Privacy Policy",
      desc: "We reserve the right to update this Privacy Policy at any time. Changes will be posted within the application with an updated Effective Date.",
      note: "You are encouraged to review this Privacy Policy periodically for any updates.",
    },
    {
      title: "Contact Us",
      desc: "If you have questions or concerns regarding this Privacy Policy, please contact us: Email: xinchat@aplikasiku.web.id",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="Privacy and Policy"
        description="Effective Date: January, 28 2026"
      />

      <section id="privacy-policy" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="space-y-10 px-4">
                {terms.map((item, index) => (
                  <div key={index} className="rounded-lg">
                    <h2 className="mb-3 text-2xl font-semibold">
                      {item.title}
                    </h2>
                    <h2 className="space-y-2 text-gray-700 dark:text-gray-300">
                      {item.desc}
                    </h2>

                    {item.list && (
                      <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
                        {item.list.map((li, i) => (
                          <li key={i}>{li}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
