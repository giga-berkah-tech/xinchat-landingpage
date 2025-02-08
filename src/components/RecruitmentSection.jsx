import { Container } from '@/components/Container'
import { useTranslation } from 'next-export-i18n'
import React from 'react'

const Recruitment = () => {
    const { t } = useTranslation()

    return (
        <Container className="flex flex-col items-center justify-between space-y-0 md:flex-row md:space-y-0 md:space-x-12">
            <div className="flex flex-col space-y-12 md:space-y-10">
                <div>
                    <h1 className="mb-5 text-4xl font-medium tracking-tight text-gray-900 md:text-6xl">
                        {t('recruitment.title')}
                    </h1>

                    <div className="flex w-full max-w-full flex-col space-y-4 md:max-w-sm">
                        <p>{t('recruitment.description')}</p>
                        <p>{t('recruitment.teamDescription')}</p>
                        <p>+6287712622018</p>
                    </div>
                </div>

                <div>
                    <h1 className="mb-5 text-4xl font-medium tracking-tight text-gray-900 md:text-6xl">
                        {t('recruitment.benefits.title')}
                    </h1>

                    <div className="flex w-full max-w-full flex-col space-y-4 md:max-w-sm">
                        <p>{t('recruitment.benefits.description')}</p>
                        <ul className="list-disc pl-5">
                            <li>{t('recruitment.benefits.item1')}</li>
                            <li>{t('recruitment.benefits.item2')}</li>
                            <li>{t('recruitment.benefits.item3')}</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Job Openings Section on the right */}
            <div className="mt-8 w-full max-w-full rounded-lg bg-white p-6 shadow-md md:max-w-md md:p-8">
                <h2 className="mb-4 text-xl font-bold text-gray-800 md:mb-6 md:text-2xl">
                    {t('recruitment.jobs.title')}
                </h2>

                <div className="h-64 overflow-y-auto">
                    {/* Job 1 */}
                    <div className="border-b pb-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                            {t('recruitment.jobs.job1.title')}
                        </h3>
                        <p className="text-sm text-gray-600">
                            {t('recruitment.jobs.job1.description')}
                        </p>
                    </div>

                    {/* Job 2 */}
                    <div className="border-b pb-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                            {t('recruitment.jobs.job2.title')}
                        </h3>
                        <p className="text-sm text-gray-600">
                            {t('recruitment.jobs.job2.description')}
                        </p>
                    </div>

                    {/* Job 3 */}
                    <div className="border-b pb-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                            {t('recruitment.jobs.job3.title')}
                        </h3>
                        <p className="text-sm text-gray-600">
                            {t('recruitment.jobs.job3.description')}
                        </p>
                    </div>

                    {/* Job 4 */}
                    <div className="border-b pb-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                            {t('recruitment.jobs.job4.title')}
                        </h3>
                        <p className="text-sm text-gray-600">
                            {t('recruitment.jobs.job4.description')}
                        </p>
                    </div>

                    {/* Job 5 */}
                    <div className="border-b pb-4">
                        <h3 className="text-lg font-semibold text-gray-800">
                            {t('recruitment.jobs.job5.title')}
                        </h3>
                        <p className="text-sm text-gray-600">
                            {t('recruitment.jobs.job5.description')}
                        </p>
                    </div>
                </div>

                {/* Contact email for resume submission */}
                <div className="mt-6">
                    <p className="text-lg text-gray-700">
                        {t('recruitment.sendResume')} <br />
                        <a
                            href="mailto:support@xinchatsupport.com"
                            className="text-indigo-600 hover:text-indigo-700"
                        >
                            support@xinchatsupport.com
                        </a>
                    </p>
                </div>
            </div>
        </Container>
    )
}

export default Recruitment
