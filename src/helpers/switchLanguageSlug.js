import { initialState } from "../reducers/dataFetchReducer";
import slugify from "./slugify";

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

const appRoutes = initialState.menuItems.nl.map((dutchMenuItem, index) => (
    { 
        // E.g. "nl/over-ons"
        nl: `/nl/${slugify(dutchMenuItem.category)}`,
        // E.g. "en/about-us"
        en: `/en/${slugify(initialState.menuItems.en[index].category)}`,
    }
));
