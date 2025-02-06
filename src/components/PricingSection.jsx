import { Container } from '@/components/Container'
import { useTranslation } from 'next-export-i18n'
import React from 'react'

const Pricing = () => {
    const { t } = useTranslation()

    return (
        <Container className="flex flex-col items-center justify-center space-y-12 md:space-y-12">
            {/* Title and Description Section */}
            <div className="text-center">
                <h1 className="text-4xl font-semibold text-gray-900 md:text-5xl">
                    {t('pricing.title')}
                </h1>
                <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    {t('pricing.description')}
                </p>
            </div>

            {/* Features Section */}
            <div className="text-center">
                <h2 className="text-3xl font-medium text-gray-900">{t('pricing.featuresTitle')}</h2>
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg shadow-lg bg-white">
                        <div className="text-indigo-600 text-2xl">
                            {/* Feature icon or illustration */}
                            <span role="img" aria-label="feature-icon">✨</span>
                        </div>
                        <h3 className="font-semibold text-xl">{t('pricing.features.item1')}</h3>
                        <p className="text-gray-600">{t('pricing.features.item1Description')}</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg shadow-lg bg-white">
                        <div className="text-indigo-600 text-2xl">
                            {/* Feature icon or illustration */}
                            <span role="img" aria-label="feature-icon">🔒</span>
                        </div>
                        <h3 className="font-semibold text-xl">{t('pricing.features.item2')}</h3>
                        <p className="text-gray-600">{t('pricing.features.item2Description')}</p>
                    </div>
                    <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg shadow-lg bg-white">
                        <div className="text-indigo-600 text-2xl">
                            {/* Feature icon or illustration */}
                            <span role="img" aria-label="feature-icon">📱</span>
                        </div>
                        <h3 className="font-semibold text-xl">{t('pricing.features.item3')}</h3>
                        <p className="text-gray-600">{t('pricing.features.item3Description')}</p>
                    </div>
                </div>
            </div>

            {/* Pricing Plans Section */}
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Free Plan */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800">{t('pricing.plans.free.title')}</h3>
                    <p className="text-sm text-gray-600 mt-2">{t('pricing.plans.free.description')}</p>
                    <p className="mt-4 font-semibold text-lg text-gray-900">{t('pricing.plans.free.price')}</p>
                </div>

                {/* Basic Plan */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800">{t('pricing.plans.basic.title')}</h3>
                    <p className="text-sm text-gray-600 mt-2">{t('pricing.plans.basic.description')}</p>
                    <p className="mt-4 font-semibold text-lg text-gray-900">{t('pricing.plans.basic.price')}</p>
                </div>

                {/* Pro Plan */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800">{t('pricing.plans.pro.title')}</h3>
                    <p className="text-sm text-gray-600 mt-2">{t('pricing.plans.pro.description')}</p>
                    <p className="mt-4 font-semibold text-lg text-gray-900">{t('pricing.plans.pro.price')}</p>
                </div>

                {/* Enterprise Plan */}
                <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-6 border border-gray-200">
                    <h3 className="text-xl font-semibold text-gray-800">{t('pricing.plans.enterprise.title')}</h3>
                    <p className="text-sm text-gray-600 mt-2">{t('pricing.plans.enterprise.description')}</p>
                    <p className="mt-4 font-semibold text-lg text-gray-900">{t('pricing.plans.enterprise.price')}</p>
                </div>
            </div>

            {/* Custom Pricing Section */}
            <div className="text-center mt-12">
                <p className="text-lg text-gray-700">{t('pricing.customPricing')} <br />
                    <a
                        href="mailto:cs@aplikasiku.web.id"
                        className="text-indigo-600 hover:text-indigo-700"
                    >
                        cs@aplikasiku.web.id
                    </a>
                </p>
            </div>
        </Container>
    )
}

export default Pricing
