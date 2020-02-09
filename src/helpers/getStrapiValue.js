/**
 * @param {Array}   arrayOfObjects  Array we are searching through, like 'expositions'.
 * @param {string}  term            Term we are looking for, like "Singermuseum" or "membership-costs"
 * @param {string}  targetValue     Value we wish to obtain, like "Value", or "Description"
 * @param {string}  language        Language we wish to get the value in: nl or en
 */

export default function getStrapiValue(arrayOfObjects, term, targetValue, language = "fr") {
	var targetObject = arrayOfObjects.find(object => {
		return object.Key === term;
    });
    const targetKey = `${targetValue}_${language}`;
    return targetObject[targetKey] === undefined ? "Wups, error!" : targetObject[targetKey];
}
