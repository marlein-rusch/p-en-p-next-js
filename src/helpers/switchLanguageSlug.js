function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}

export default function switchLanguageSlug(slug) {
    // Check if current slug is part of appRoutes
	const appRoute = appRoutes.find(appRoute => (appRoute.nl === slug || appRoute.en === slug));

    // If slug is among appRoutes, return the other language's equivalent slug
    if (appRoute) {
        const slugLanguage = getKeyByValue(appRoute, slug);
        const targetLanguage = slugLanguage === "nl" ? "en" : "nl";
        const appRouteIndex = appRoutes.findIndex(appRoute => (appRoute.nl === slug || appRoute.en === slug));
        return appRoutes[appRouteIndex][targetLanguage];
    } else {
        return "/en/about-us"
    }
}

const appRoutes = [
	{
		nl: "/nl",
		en: "/en"
	},
	{
		nl: "/nl/over-ons",
		en: "/en/about-us"
	}
];
