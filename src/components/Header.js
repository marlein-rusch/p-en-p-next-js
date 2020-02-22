import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { switchLanguage } from "../actions/fetchActions";
import switchLanguageSlug from "../helpers/switchLanguageSlug";
import slugify from "./../helpers/slugify";

const Header = (props) => {
	const { language, menuItems, switchLanguage } = props;
	const router = useRouter();

	return (
		<div className="p-3">
			{menuItems[`${language}`].map(menuCategory => (
				<Link
					key={slugify(menuCategory.category)}
					href={slugify(menuCategory.category)}
				>
					<a>{menuCategory.category}</a>
				</Link>
			))}
			<Link href={switchLanguageSlug(router.pathname)}>
				<a onClick={switchLanguage}>
					{language === "nl" && "Switch language"}
					{language === "en" && "Verander taal"}
				</a>
			</Link>
		</div>
	);
};

const mapStateToProps = state => ({
	menuItems: state.dataFetchReducer.menuItems,
	language: state.dataFetchReducer.language
});

const mapDispatchToProps = dispatch => {
	return {
		switchLanguage: () => dispatch(switchLanguage())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
