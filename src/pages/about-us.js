import React from "react";
import getStrapiValue from '../helpers/getStrapiValue';

const AboutUs = props => {
    const { words, language } = props;
    
    const membershipCosts = getStrapiValue(words, "membership-costs", "Value", language);

    return <div className="p-3">Text membershipCosts: {membershipCosts}</div>;
};

export default AboutUs;
