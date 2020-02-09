import React from "react";
import Link from "next/link";
import { connect } from "react-redux";


const Header = props => {
	return (
		<div className="p-3">
			<Link href="/">
				<a>Home</a>
			</Link>
			<Link href="/about">
				<a>Over ons</a>
			</Link>
		</div>
	);
};

const mapStateToProps = state => ({
    menuItems: state.dataFetchReducer.menuItems,
    language: state.dataFetchReducer.language
});

export default connect(mapStateToProps)(Header);
