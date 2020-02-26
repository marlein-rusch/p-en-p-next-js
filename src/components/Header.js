import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { connect } from "react-redux";
import { switchLanguage } from "../actions/fetchActions";
import switchLanguageSlug from "../helpers/switchLanguageSlug";
import slugify from "./../helpers/slugify";

const Header = props => {
	const { language, menuItems, switchLanguage } = props;
	const router = useRouter();

	return (
		// @TODO Next time:
		// 1. Use own Logo + Hamburger
		// 2. Find way to incorporate the language switch in the design
		<div>
			<div className="header">
				<div className="container">
					<Link>
						<a href="/">
							<img
								src="https://via.placeholder.com/150x50"
								class="website-logo img-fluid"
								alt="Website main logo"
								style={{height: '30px'}}
							/>
						</a>
					</Link>
					<div className="hamburger-logo d-md-none">
						<img
							src="https://wij.boerenenburen.nl/wp-content/themes/lrqdo/images/icon-bars.svg"
							alt="Menu mobile hamburger button"
							class="img-fluid align-middle"
						/>
					</div>
					<div
						className="d-none d-md-block desktop-menu"
					>
						{menuItems[`${language}`].map(menuCategory => (
							<Link
								key={slugify(menuCategory.category)}
								href={slugify(menuCategory.category)}
							>
								<a>{menuCategory.category}</a>
							</Link>
						))}
					</div>
				</div>
			</div>
			{/*
				<Link href={switchLanguageSlug(router.pathname)}>
					<a onClick={switchLanguage}>
						{language === "nl" && "Switch language"}
						{language === "en" && "Verander taal"}
					</a>
				</Link>
			*/}
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
