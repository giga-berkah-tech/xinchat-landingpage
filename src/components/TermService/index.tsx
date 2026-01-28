import Breadcrumb from "../Common/Breadcrumb";
export const TermService = () => {
  const terms = [
    {
      title: "Welcome to XinChat",
      description: `Thank you for choosing XinChat! By downloading, accessing, or using our mobile application ("App"), you agree to comply with these Terms and Conditions ("Terms"). If you do not agree with any of these Terms, please refrain from using the App.`,
    },
    {
      title: "Use of the Application",
      description: `XinChat is provided on an "as-is" and "as-available" basis. We reserve the right to modify, suspend, or discontinue any part of the App at any time without prior notice. You agree to use the App only for lawful purposes and in compliance with all applicable laws and regulations.`,
    },
    {
      title: "User Accounts",
      list: [
        "To access certain features of the App, you may be required to create an account.",
        "You are responsible for maintaining the confidentiality of your account credentials and are solely responsible for all activities that occur under your account.",
        "You agree not to share your account details or use another user’s account without permission.",
        "If you suspect any unauthorized use of your account, you must notify us immediately.",
      ],
    },
    {
      title: "Prohibited Conduct",
      list: [
        "Engage in any illegal or unauthorized activity.",
        "Upload or share harmful, abusive, or objectionable content, including but not limited to hate speech or explicit materials.",
        "Use XinChat to spam or harass other users.",
        "Attempt to hack, disrupt, or interfere with the app's functionality.",
        "Collect or store personal data of other users without authorization.",
        "Impersonate any person or entity or misrepresent your affiliation with any individual or organization.",
      ],
      description:
        "Violating these terms may result in the suspension or termination of your account and possible legal action.",
    },
    {
      title: "Intellectual Property",
      list: [
        "All content, trademarks, logos, and intellectual property within XinChat are owned by us or our licensors.",
        "You may not copy, modify, distribute, or reuse any part of the App’s content without explicit written permission.",
      ],
    },
    {
      title: "Privacy Policy",
      description:
        "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your personal data. By using XinChat, you consent to our data practices as described in the Privacy Policy.",
    },
    {
      title: "Limitation of Liability",
      list: [
        "XinChat and its affiliates are not responsible for any indirect, incidental, consequential, or punitive damages arising from your use of the App.",
        "We do not guarantee that the App will be error-free, uninterrupted, or secure.",
        "We are not liable for any loss of data, damages caused by malware, unauthorized access, or other issues beyond our reasonable control.",
      ],
    },
    {
      title: "Termination",
      list: [
        "Suspend or terminate your access to the App at any time, with or without notice, if you violate these Terms or engage in prohibited behavior.",
        "Remove or disable content that violates these Terms or applicable laws.",
      ],
    },
    {
      title: "Changes to Terms",
      description:
        "We may update these Terms from time to time. Any changes will be effective immediately upon posting the revised Terms within the App. Your continued use of the App after changes are made indicates your acceptance of the updated Terms.",
    },

    {
      title: "Governing Law",
      list: [
        "These Terms are governed by the laws of [Your Country/Region].",
        "Any disputes arising from the use of XinChat will be resolved in the courts of [Your Jurisdiction].",
      ],
    },
    {
      title: "Contact Us",
      description:
        "If you have questions or concerns about these Terms, please contact us at xinchat@aplikasiku.web.id By using XinChat, you acknowledge that you have read, understood, and agreed to these Terms.",
    },
  ];

  return (
    <>
      <Breadcrumb
        pageName="Term & Service"
        description="Effective Date: January, 28 2026"
      />

      <section id="term-service" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-body-color/[.15] border-b pb-16 md:pb-20 lg:pb-28 dark:border-white/[.15]">
            <div className="-mx-4 flex flex-wrap items-center">
              {/* <p className="font-medium">{t('terms.date')}</p> */}
              <div className="space-y-10 px-4">
                {terms.map((item, index) => (
                  <div key={index} className="rounded-lg">
                    <h2 className="mb-3 text-2xl font-semibold">
                      {item.title}
                    </h2>

                    {item.description && (
                      <p className="mb-3 text-gray-700 dark:text-gray-300">
                        {item.description}
                      </p>
                    )}

                    {/* {(item.title === "Contact Us" ||
                      item.title === "Privacy Policy") && (
                      <p
                        dangerouslySetInnerHTML={{
                          __html: item.description,
                        }}
                      />
                    )} */}

                    {item.list && (
                      <ul className="list-disc space-y-2 pl-6 text-gray-700 dark:text-gray-300">
                        {item.list.map((li, i) => (
                          <li key={i}>{li}</li>
                        ))}
                      </ul>
                    )}

                    {/* {item.note && (
                      <p className="mt-3 text-gray-600 italic dark:text-gray-400">
                        {item.note}
                      </p>
                    )} */}
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
