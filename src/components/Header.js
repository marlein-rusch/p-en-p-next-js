import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import slugify from "./../helpers/slugify";

const Header = props => {
	const { language, menuItems } = props;

	return (
		<div className="p-3">
			{menuItems[`${language}`].map( menuCategory => (
				<Link
					key={slugify(menuCategory.category)}
					href={slugify(menuCategory.category)}>
					 <a>{menuCategory.category}</a>
				</Link>
			))}
		</div>
	);
};

const mapStateToProps = state => ({
	menuItems: state.dataFetchReducer.menuItems,
	language: state.dataFetchReducer.language
});

export default connect(mapStateToProps)(Header);
