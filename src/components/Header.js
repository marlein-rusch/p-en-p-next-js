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
		// 1. Move inline styling to .css
		// 2. While you're on it: compile scss file to public (not static, it's deprecated)
		// 3. Use own Logo + Hamburger
		// 4. Find way to incorporate the language switch in the design
		<div>
			<div className="header"
				 style={{position: 'fixed', top: '0', left: '0', width: '100%', 'background-color': '#ffffff', 'box-shadow': '0 2px 2px 0 rgba(45,40,70,.2)', padding: '10px 0 15px', 'margin-bottom': '4.166666666666667vw', 'z-index': 6, transition: 'top .3s'}}
			>
				<div className="container">
					<Link>
						<a href="/">
							<img
								src="https://wij.boerenenburen.nl/wp-content/uploads/sites/12/2018/09/Logo-NL-H_Turquoise2-1.svg"
								class="img-fluid"
								alt="Website main logo"
								style={{height: '30px', 'vertical-align': 'middle'}}
							/>
						</a>
					</Link>
					<div className="d-md-none" style={{float: 'right', width: '25px', cursor: 'pointer', 'margin-top': '6px'}}>
						<img
							src="https://wij.boerenenburen.nl/wp-content/themes/lrqdo/images/icon-bars.svg"
							alt="Menu mobile hamburger button"
							class="img-fluid"
							style={{'vertical-align': 'middle'}}
						/>
					</div>
					<div
						className="d-none d-md-block float-right"
						style={{'margin-top': '6px'}}
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
