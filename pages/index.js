import React from "react";
import Counter from "../src/components/Counter";
import fetch from 'isomorphic-unfetch';
import MyLayout from '../src/components/MyLayout';

import { addFetchToState } from "../src/actions/fetchActions";

function index() {
    return (
        <MyLayout>
            <Counter />
        </MyLayout>
    );
}

index.getInitialProps = async function ({ reduxStore }) {
    const fetchedEvents = await fetch('http://localhost:1337/events');
    const fetchedAnnouncements = await fetch('http://localhost:1337/announcements');
    const fetchedHistoryFragments = await fetch('http://localhost:1337/history-fragments');
    const fetchedRules = await fetch('http://localhost:1337/rules');
    const fetchedWords = await fetch('http://localhost:1337/words');

    const events = await fetchedEvents.json();
    const announcements = await fetchedAnnouncements.json();
    const historyFragments = await fetchedHistoryFragments.json();
    const rules = await fetchedRules.json();
    const words = await fetchedWords.json();

    reduxStore.dispatch(addFetchToState(events, "expositions"));
    reduxStore.dispatch(addFetchToState(announcements, "announcements"));
    reduxStore.dispatch(addFetchToState(historyFragments, "historyFragments"));
    reduxStore.dispatch(addFetchToState(rules, "houseRules"));
    reduxStore.dispatch(addFetchToState(words, "words"));

    // const state = reduxStore.getState(); // returns redux store

    return {};
};

export default index;
