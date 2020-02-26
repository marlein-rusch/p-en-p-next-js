import React from "react";
import { connect } from "react-redux";
import Head from 'next/head';
import Header from './Header';

const MyLayout = props => {
	return (
		<div>
			<Head>
				<link href="./../static/index.css" rel="stylesheet" />
			</Head>
			<Header />
			<div className="website-body">
				{props.children}
			</div>
		</div>
	);
};

const mapStateToProps = state => ({
	counter: state.dataFetchReducer.counter
});

export default connect(mapStateToProps)(MyLayout);
