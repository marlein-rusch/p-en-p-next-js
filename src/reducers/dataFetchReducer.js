import { ADD_FETCHED_CONTENT_PER_CATEGORY, INCREMENT, SWITCH_LANGUAGE } from "../actions/types";

export const initialState = {
	menuItems: {
		nl: [
			{
				category: "Over ons",
				subcategories: [
					"Verenigingsgeschiedenis",
					"Ateliergebruik",
					"Archief"
				]
			},
			{
				category: "Lessen en activiteiten",
				subcategories: [
					"Lessen",
					"Activiteiten",
					"Groepen",
					"Artistieke begeleiding"
				]
			},
			{
				category: "Prikbord",
				subcategories: ["Nieuwtjes", "Musea"]
			},
			{
				category: "Lidmaatschap",
				subcategories: ["Kosten", "Informatie", "Aanmelden als lid"]
			},
			{
				category: "Contact",
				subcategories: []
			}
		],
		en: [
			{
				category: "About us",
				subcategories: ["Our history", "Use of workshop", "Archive"]
			},
			{
				category: "Classes and activities",
				subcategories: [
					"Classes",
					"Activities",
					"Groups",
					"Artistic guidance"
				]
			},
			{
				category: "Message board",
				subcategories: ["Announcements", "Museums"]
			},
			{
				category: "Membership",
				subcategories: ["Costs", "Information", "Apply for membership"]
			},
			{
				category: "Contact",
				subcategories: []
			}
		]
	},
	counter: 1,
	language: "nl"
};

export default function(state = initialState, action) {
	switch (action.type) {
		case INCREMENT:
			return {
				...state,
				counter: state.counter + 1
			};
		case SWITCH_LANGUAGE:
			return {
				...state,
				language: state.language === "nl" ? "en" : "nl"
			};
		case ADD_FETCHED_CONTENT_PER_CATEGORY:
			return {
				...state,
				[action.category]: action.payload
			};
		default:
			return state;
	}
}
