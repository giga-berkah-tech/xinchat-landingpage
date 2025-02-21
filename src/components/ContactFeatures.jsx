import { Container } from '@/components/Container'
import { useTranslation } from 'next-export-i18n'
import React from 'react'

const ContactFeatures = () => {
  const [result, setResult] = React.useState('')

  const { t } = useTranslation()

  const isAplikasikuDomain =
      window.location.hostname === 'xinchat.alikasiku.web.id'

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending....')
    const formData = new FormData(event.target)

    formData.append('access_key', 'fdc673c5-6d78-4a6a-ac2e-d7f4f2b27541')

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult('Form Submitted Successfully')
      event.target.reset()
      setTimeout(() => {
        setResult('')
      }, 3000)
    } else {
      console.log('Error', data)
      setResult(data.message)
    }
  }

  return (
    <Container className="flex flex-col items-center justify-between space-y-12 md:flex-row md:space-y-0 md:space-x-12">
      <div className="flex flex-col space-y-12 md:space-y-16">
        <div>
          <h1 className="mb-5 text-4xl font-medium tracking-tight text-gray-900 md:text-6xl">
            {t('contact.title')}
          </h1>

          <div className="flex w-full max-w-full flex-col space-y-4 md:max-w-sm">
            <p>
              {isAplikasikuDomain
                ? 'Perumahan A. Yani Inside Kav 14 Ikan Piranha, Purwodadi, Blimbing, Blimbing, Malang, Jawa Timur, 65125'
                : t('contact.address.description')}
            </p>
            <p>cs@aplikasiku.web.id</p>
            <p>+6287712622018</p>
          </div>
        </div>

        <div>
          <h1 className="mb-5 text-4xl font-medium tracking-tight text-gray-900 md:text-6xl">
            {t('contact.address.title')}
          </h1>

          <div className="flex w-full max-w-full flex-col space-y-4 md:max-w-sm">
            <p>{t('contact.address.description')}</p>
            {/* <p>cs@aplikasiku.web.id</p>
            <p>+6287712622018</p> */}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-between gap-6 md:mt-12 md:gap-10">
          <div className="w-full md:w-auto">
            <h3 className="font-bold">{t('contact.box1.title')}</h3>
            <p className="text-sm text-gray-600">
              {t('contact.box1.description')}
            </p>
          </div>
          <div className="w-full md:w-auto">
            <h3 className="font-bold">{t('contact.box2.title')}</h3>
            <p className="text-sm text-gray-600">
              {t('contact.box2.description')}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 w-full max-w-full rounded-lg bg-white p-6 shadow-md md:max-w-md md:p-8">
        <h2 className="mb-4 text-xl font-bold text-gray-800 md:mb-6 md:text-2xl">
          {t('contact.form.title')}
        </h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              {t('contact.form.name')}
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              {t('contact.form.email')}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              {t('contact.form.message')}
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              rows="4"
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {t('contact.form.submit')}
            </button>
          </div>
        </form>
        <span className="mt-4 block text-center text-sm text-gray-500">
          {result}
        </span>
      </div>
    </Container>
  )
}

export default ContactFeatures
