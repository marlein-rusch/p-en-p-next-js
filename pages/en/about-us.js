import React from "react";
import { connect } from "react-redux"
import MyLayout from "../../src/components/MyLayout";
import AboutUsComponent from "../../src/pages/about-us";
import { addFetchToState } from "./../../src/actions/fetchActions";

function AboutUs(props) {
	const {language, words } = props;
	return (
		<MyLayout>
            <AboutUsComponent words={words} language={language}/>
		</MyLayout>
	);
}

AboutUs.getInitialProps = async function({ reduxStore }) {
	const fetchedWords = await fetch("http://localhost:1337/words");
	const words = await fetchedWords.json();
	reduxStore.dispatch(addFetchToState(words, "words"));

	return {};
};

const mapStateToProps = state => ({
	language: state.dataFetchReducer.language,
	words: state.dataFetchReducer.words
});

export default connect(mapStateToProps)(AboutUs);
