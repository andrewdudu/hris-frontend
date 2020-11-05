const camelCaseToTitleCase = (in_camelCaseString) => {
	return in_camelCaseString                         // "__ToGetYourGEDInTimeASongAboutThe26ABCsIsOfTheEssenceButAPersonalIDCardForUser_456InRoom26AContainingABC26TimesIsNotAsEasyAs123ForC3POOrR2D2Or2R2D"
		.replace(/(_)+/g, ' ')                              // " ToGetYourGEDInTimeASongAboutThe26ABCsIsOfTheEssenceButAPersonalIDCardForUser 456InRoom26AContainingABC26TimesIsNotAsEasyAs123ForC3POOrR2D2Or2R2D"
		.replace(/([a-z])([A-Z][a-z])/g, "$1 $2")           // " To Get YourGEDIn TimeASong About The26ABCs IsOf The Essence ButAPersonalIDCard For User456In Room26AContainingABC26Times IsNot AsEasy As123ForC3POOrR2D2Or2R2D"
		.replace(/([A-Z][a-z])([A-Z])/g, "$1 $2")           // " To Get YourGEDIn TimeASong About The26ABCs Is Of The Essence ButAPersonalIDCard For User456In Room26AContainingABC26Times Is Not As Easy As123ForC3POOr R2D2Or2R2D"
		.replace(/([a-z])([A-Z]+[a-z])/g, "$1 $2")          // " To Get Your GEDIn Time ASong About The26ABCs Is Of The Essence But APersonal IDCard For User456In Room26AContainingABC26Times Is Not As Easy As123ForC3POOr R2D2Or2R2D"
		.replace(/([A-Z]+)([A-Z][a-z][a-z])/g, "$1 $2")     // " To Get Your GEDIn Time A Song About The26ABCs Is Of The Essence But A Personal ID Card For User456In Room26A ContainingABC26Times Is Not As Easy As123ForC3POOr R2D2Or2R2D"
		.replace(/([a-z]+)([A-Z0-9]+)/g, "$1 $2")           // " To Get Your GEDIn Time A Song About The 26ABCs Is Of The Essence But A Personal ID Card For User 456In Room 26A Containing ABC26Times Is Not As Easy As 123For C3POOr R2D2Or 2R2D"
};

export default {
	camelCaseToTitleCase
}
