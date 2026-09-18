<template>
    <Nuxt />
</template>


<script>

export default {
    head() {
        const siteUrl = 'https://systemice.ru'
        const routePath = this.$route && this.$route.path ? this.$route.path : '/'
        const canonicalPath = routePath === '/' ? '/' : routePath.replace(/\/+$/, '')
		const canonicalUrl = `${siteUrl}${canonicalPath === '/' ? '/' : canonicalPath + '/'}`
		const defaultImage = `${siteUrl}/images/systemice.jpg`
		const logoPath = require('@/assets/images/logo.png')
		const logoUrl = `${siteUrl}${logoPath}`
		const routeSeo = {
			'/': {
				name: 'Организация корпоративных мероприятий и MICE-проектов — Systemice',
				description: 'Systemice организует корпоративные события и MICE-проекты полного цикла в России и за рубежом. Более 1400 проектов за 19 лет.',
				label: 'Главная',
				type: 'WebPage'
			},
			'/contact': {
				name: 'Контакты — Systemice Group',
				description: 'Контакты Systemice Group: офис в Москве, телефон, электронная почта и форма обратной связи по организации корпоративных мероприятий.',
				label: 'Контакты',
				type: 'ContactPage'
			},
			'/event-progress': {
				name: 'Собрать мероприятие — Systemice Group',
				description: 'Соберите корпоративное мероприятие вместе с Systemice: укажите формат, город, даты и число участников, чтобы получить индивидуальное предложение.',
				label: 'Собрать мероприятие',
				type: 'WebPage'
			},
			'/news': {
				name: 'Новости MICE и корпоративных мероприятий — Systemice',
				description: 'Новости и материалы Systemice Group о корпоративных мероприятиях, деловом туризме, площадках, технологиях и событиях индустрии.',
				label: 'Новости',
				type: 'CollectionPage'
			},
			'/partner': {
				name: 'Партнёры — Systemice Group',
				description: 'Партнёры Systemice Group: отели, площадки, сервисы и отраслевые компании, с которыми мы организуем корпоративные мероприятия.',
				label: 'Партнёры',
				type: 'CollectionPage'
			},
			'/portfolio': {
				name: 'Портфолио — Systemice Group',
				description: 'Портфолио Systemice Group: реализованные корпоративные мероприятия, конференции, деловые события и онлайн-проекты для компаний.',
				label: 'Портфолио',
				type: 'CollectionPage'
			},
			'/privacy': {
				name: 'Политика обработки персональных данных — Systemice',
				description: 'Политика Systemice Group в отношении обработки и защиты персональных данных пользователей сайта systemice.ru.',
				label: 'Политика обработки персональных данных',
				type: 'WebPage'
			},
			'/service': {
				name: 'Услуги — Systemice Group',
				description: 'Услуги Systemice Group: организация онлайн-мероприятий и бизнес-игр, персональный аккаунт-менеджер и профессиональный аудит сметы.',
				label: 'Услуги',
				type: 'WebPage'
			},
			'/team': {
				name: 'Команда Systemice — организация корпоративных мероприятий',
				description: 'Команда Systemice Group: специалисты по организации корпоративных мероприятий, деловых поездок, конференций и событий любого формата.',
				label: 'Команда',
				type: 'AboutPage'
			},
			'/tenders': {
				name: 'Тендеры — Systemice Group',
				description: 'Участие Systemice Group в тендерах на организацию корпоративных мероприятий: оперативная подготовка сметы, документов и коммерческого предложения.',
				label: 'Тендеры',
				type: 'WebPage'
			}
		}
		const portfolioMatch = canonicalPath.match(/^\/portfolio\/(\d+)$/)
		const portfolioItem = portfolioMatch && this.$store && this.$store.state.portfolioData
			? this.$store.state.portfolioData[Number(portfolioMatch[1]) - 1]
			: null
		let seo = routeSeo[canonicalPath] || routeSeo['/']
		let pageImage = defaultImage
		let eventDate = ''

		if (portfolioItem) {
			eventDate = portfolioItem.dateData.replace(/<[^>]*>/g, '').trim().replace(/[.\s]+$/, '')
			const portfolioImage = require('@/assets/images/portfolio/' + portfolioItem.picsFolder + '/' + portfolioItem.pics[0] + '.jpg')
			pageImage = `${siteUrl}${portfolioImage}`
			seo = {
				name: `${portfolioItem.title} — проект Systemice Group`,
				description: `Кейс Systemice «${portfolioItem.title}»: организация и проведение корпоративного мероприятия${eventDate ? `, ${eventDate}` : ''}. Фото и детали проекта.`,
				label: portfolioItem.title,
				type: 'WebPage'
			}
		}

		const organizationId = `${siteUrl}/#organization`
		const websiteId = `${siteUrl}/#website`
		const webpageId = `${canonicalUrl}#webpage`
		const breadcrumbsId = `${canonicalUrl}#breadcrumbs`
		const breadcrumbItems = canonicalPath === '/'
			? []
			: [
				{
					'@type': 'ListItem',
					position: 1,
					name: 'Главная',
					item: `${siteUrl}/`
				},
				...(portfolioItem ? [{
					'@type': 'ListItem',
					position: 2,
					name: 'Портфолио',
					item: `${siteUrl}/portfolio/`
				}] : []),
				{
					'@type': 'ListItem',
					position: portfolioItem ? 3 : 2,
					name: seo.label,
					item: canonicalUrl
				}
			]
		const graph = [
			{
				'@type': 'Organization',
				'@id': organizationId,
				name: 'Systemice Group',
				alternateName: 'Systemice',
				url: `${siteUrl}/`,
				logo: {
					'@type': 'ImageObject',
					url: logoUrl
				},
				image: defaultImage,
				telephone: '+7 495 215-24-80',
				email: 'info@systemice.ru',
				address: {
					'@type': 'PostalAddress',
					streetAddress: 'ул. Бауманская, д. 6, стр. 2',
					addressLocality: 'Москва',
					addressCountry: 'RU'
				},
				contactPoint: [
					{
						'@type': 'ContactPoint',
						telephone: '+7 495 215-24-80',
						contactType: 'customer service',
						availableLanguage: 'Russian'
					},
					{
						'@type': 'ContactPoint',
						telephone: '+7 926 641-05-73',
						contactType: 'customer service',
						availableLanguage: 'Russian'
					}
				]
			},
			{
				'@type': 'WebSite',
				'@id': websiteId,
				url: `${siteUrl}/`,
				name: 'Systemice Group',
				publisher: { '@id': organizationId },
				inLanguage: 'ru-RU'
			},
			{
				'@type': seo.type,
				'@id': webpageId,
				url: canonicalUrl,
				name: seo.name,
				description: seo.description,
				isPartOf: { '@id': websiteId },
				about: { '@id': organizationId },
				primaryImageOfPage: {
					'@type': 'ImageObject',
					url: pageImage
				},
				...(breadcrumbItems.length ? { breadcrumb: { '@id': breadcrumbsId } } : {}),
				inLanguage: 'ru-RU'
			}
		]

		if (breadcrumbItems.length) {
			graph.push({
				'@type': 'BreadcrumbList',
				'@id': breadcrumbsId,
				itemListElement: breadcrumbItems
			})
		}

		if (canonicalPath === '/service') {
			graph.push({
				'@type': 'Service',
				'@id': `${canonicalUrl}#service`,
				name: 'Организация корпоративных мероприятий и MICE-проектов',
				serviceType: 'Организация корпоративных событий и MICE-проектов полного цикла',
				provider: { '@id': organizationId },
				areaServed: {
					'@type': 'Country',
					name: 'Россия'
				},
				url: canonicalUrl
			})
			graph[2].mainEntity = { '@id': `${canonicalUrl}#service` }
		}

		if (portfolioItem) {
			const dateMatch = eventDate.match(/(\d{2})\.(\d{2})\.(\d{4})/)
			const isoDate = dateMatch ? `${dateMatch[3]}-${dateMatch[2]}-${dateMatch[1]}` : undefined
			graph.push({
				'@type': 'CreativeWork',
				'@id': `${canonicalUrl}#project`,
				url: canonicalUrl,
				name: portfolioItem.title,
				description: seo.description,
				image: [pageImage],
				creator: { '@id': organizationId },
				...(isoDate ? { dateCreated: isoDate } : {}),
				mainEntityOfPage: { '@id': webpageId },
				inLanguage: 'ru-RU'
			})
			graph[2].mainEntity = { '@id': `${canonicalUrl}#project` }
		}

        return {
			meta: [
				{ hid: 'og:type', property: 'og:type', content: 'website' },
				{ hid: 'og:site_name', property: 'og:site_name', content: 'Systemice Group' },
				{ hid: 'og:title', property: 'og:title', content: seo.name },
				{ hid: 'og:description', property: 'og:description', content: seo.description },
				{ hid: 'og:url', property: 'og:url', content: canonicalUrl },
				{ hid: 'og:image', property: 'og:image', content: pageImage },
				{ hid: 'og:image:alt', property: 'og:image:alt', content: seo.label },
				{ hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
				{ hid: 'twitter:title', name: 'twitter:title', content: seo.name },
				{ hid: 'twitter:description', name: 'twitter:description', content: seo.description },
				{ hid: 'twitter:image', name: 'twitter:image', content: pageImage }
			],
            link: [
                {
                    hid: 'canonical',
                    rel: 'canonical',
                    href: canonicalUrl
                }
			],
			script: [
				{
					hid: 'structured-data',
					type: 'application/ld+json',
					json: {
						'@context': 'https://schema.org',
						'@graph': graph
					}
				}
			]
        }
    },

    data(){
        return {}
    }
}
</script>
