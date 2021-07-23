window.onload = () => {
	const practiceareas = { "Administrative Law": 4, "Alternative Dispute Resolution": 2, "Animal Law": 2, "Antitrust Litigation": 1, Appellate: 1, "Aviation and Aerospace": 1, Banking: 1, Bankruptcy: 0, "Business Litigation": 1, "Business/Corporate": 4, "Cannabis Law": 3, "Civil Litigation": 6, "Civil Rights": 3, "Class Action/Mass Torts": 5, "Closely Held Business": 0, Communications: 0, "Constitutional Law": 0, "Construction Litigation": 0, "Consumer Law": 0, "Creditor Debtor Rights": 1, "Criminal Defense": 6, "Criminal Defense: DUI/DWI": 0, "Criminal Defense: White Collar": 0, "Criminal Prosecution": 1, "E-Discovery": 1, "Elder Law": 1, "Eminent Domain": 0, "Employee Benefits": 0, "Employment & Labor": 0, "Employment Litigation": 1, "Energy & Natural Resources": 0, "Entertainment & Sports": 1, Enviornmental: 1, Environmental: 1, "Environmental Litigation": 0, "Estate & Trust Litigation": 0, "Estate Planning & Probate": 0, "Family Law": 0, "Food and Drugs": 1, "Franchise/Dealership": 0, Gaming: 1, "General Litigation": 2, "Government Contracts": 0, "Government Finance": 0, "Government Relations": 0, "Health Care": 0, Healthcare: 1, "Hobbit Law": 2, Immigration: 1, "Insurance Coverage": 0, "Intellectual Property": 0, "Intellectual Property Litigation": 0, International: 1, "Land Use/Zoning": 1, "Legal Aid/Pro Bono": 1, "Legislative & Governmental Affairs": 0, Lobbying: 0, "Media and Advertising": 0, "Mergers & Acquisitions": 0, "Military/Veterans Law": 0, "Native American Law": 0, "Nonprofit Organizations": 1, "Personal Injury - General": 1, "Personal Injury - Medical Malpractice": 0, "Personal Injury - Products": 0, "Professional Liability": 2, Prosecution: 2, "Real Estate": 0, "Schools & Education": 1, "Securities & Corporate Finance": 0, "Securities Litigation": 1, "Social Security Disability": 0, "State, Local & Municipal": 0, Surety: 1, Tax: 0, "Technology Transactions": 1, "The Blade": 1, Transformative: 1, "Transportation/Maritime": 0, Utilities: 1, "Workers' Compensation": 1 };

	// const areaKeysAndValues = Object.entries(practiceareas);
	// // console.log(areaKeysAndValues);

	// const areaKeys = Object.keys(practiceareas);
	// // console.log(areaKeys);

	// const firstLetter = areaKeys.map((letter) => letter[0]);
	// // console.log(firstLetter);

	// // filter out the duplicates and make sure they're in alphabetical order
	// const heading = firstLetter.filter((first, index) => firstLetter.indexOf(first) === index);
	// heading.sort();
	// // console.log(heading);

	// // initialize a new array
	// let newAreasArray = [];

	// // for each letter/group...
	// heading.forEach((group) => {
	// 	// initialize a new object
	// 	let newListObject = {};

	// 	// create an object/key called letter with a value of the group/letter
	// 	newListObject.heading = group;

	// 	// initialize an object called list
	// 	newListObject.list = [];

	// 	// filter the original list with both keys and values
	// 	areaKeysAndValues.filter((items) => {
	// 		// split each key/word and get the first letter
	// 		const firstWord = items[0].split("");

	// 		const keyLetter = firstWord[0];
	// 		// if the letter matches the group, add the list item to the matching group

	// 		if (keyLetter === group) {
	// 			return newListObject.list.push(items);
	// 		}
	// 	});

	// 	// push both new objects
	// 	newAreasArray.push(newListObject);
	// });

	// // console.log(newAreasArray);

	// // https://angela-local.herokuapp.com/https://edastaging-uofstthomasmn.cs63.force.com/services/apexrest/professionaldirectoryfeed?type=practice
	// // https://edastaging-uofstthomasmn.cs63.force.com/services/apexrest/professionaldirectoryfeed?type=practice

	// const profiles = {
	// 	meta: { totalResults: 2, totalPages: 1, pageSize: 10 },
	// 	links: { self: "https://edastaging-uofstthomasmn.cs63.force.com/services/apexrest/professionaldirectoryfeed?last=baggins&type=directory&first=bilbo&page=1", query: " SELECT Active_Display__c, Additional_Identity_Information__c, Admission_State__c, Biography__c,  Current__c, Employer_Name__c, Ethnicity__c, First_Name__c, Keywords__c, Gender_Identity__c,  Graduation_Year__c, Language__c, Last_Name__c, LinkedIn_Profile__c, Picture__c, Speciality_Area__c,  Name_as_Student__c, Other_Admission_State__c, Other_Language__c,  Specialty_Area_1__c, Specialty_Area_1_Percentage__c,  Specialty_Area_2__c, Specialty_Area_2_Percentage__c,  Specialty_Area_3__c, Specialty_Area_3_Percentage__c,  Specialty_Area_4__c, Specialty_Area_4_Percentage__c,  Specialty_Area_5__c, Specialty_Area_5_Percentage__c,  Specialty_Area_Other__c, Specialty_Area_Other_Percentage__c, Specialty_Area_Total__c, Title__c, Website__c, Work_State__c, Work_City__c, Work_Country__c, Work_Email__c, Work_Phone__c, Work_Street_Address__c, Work_Zipcode__c  FROM Professional_Directory__c WHERE Active_Display__c = 'Active'  AND ( First_Name__c != null AND Last_Name__c != null)  AND First_Name__c LIKE '%bilbo%'  AND Last_Name__c LIKE '%baggins%' LIMIT 10", prev: "https://edastaging-uofstthomasmn.cs63.force.com/services/apexrest/professionaldirectoryfeed?last=baggins&type=directory&first=bilbo&page=1", next: "https://edastaging-uofstthomasmn.cs63.force.com/services/apexrest/professionaldirectoryfeed?last=baggins&type=directory&first=bilbo&page=1", last: "https://edastaging-uofstthomasmn.cs63.force.com/services/apexrest/professionaldirectoryfeed?last=baggins&type=directory&first=bilbo&page=1", first: "https://edastaging-uofstthomasmn.cs63.force.com/services/apexrest/professionaldirectoryfeed?last=baggins&type=directory&first=bilbo&page=1" },
	// 	data: [
	// 		{ workEmail: "bbaggins@bagend.com", website: "", title: "Gentlehobbit", specialty5Percentage: 0, specialty5: "", specialty4Percentage: 0, specialty4: "", specialty3Percentage: 24, specialty3: "Hobbit Law", specialty2Percentage: 51, specialty2: "Professional Liability", specialty1Percentage: 25, specialty1: "Class Action/Mass Torts", lastName: "Baggins", language: "", genderIdentity: "No", firstName: "Bilbo", ethnicity: "White;Hobbit", employerZip: "", employerState: "AL", employerPhone: "", employerName: "Bag-End", employerCountry: "United States", employerCity: "", employerAddress: "", bio: "Bilbo Baggins was born in the Shire in the year 2890 of the Third Age, nearly 130 years before the end of the War of the Ring that ended the long struggle between the races of Middle-earth and the Dark Lord Sauron. The only son of Bungo Baggins and Belladonna Took, Bilbo spent his early life in the recently constructed Hobbit hole known as Bag End, which would remain his family home after the death of his parents.", admissionState: "CO;NH", additionalIdentity: "" },
	// 		{ workEmail: "bbaggins@bagend.com", website: "", title: "Gentlehobbit", specialty5Percentage: 0, specialty5: "", specialty4Percentage: 0, specialty4: "", specialty3Percentage: 24, specialty3: "Hobbit Law", specialty2Percentage: 51, specialty2: "Professional Liability", specialty1Percentage: 25, specialty1: "Class Action/Mass Torts", lastName: "Baggins", language: "", genderIdentity: "No", firstName: "Bilbo", ethnicity: "White;Hobbit", employerZip: "", employerState: "AL", employerPhone: "", employerName: "Bag-End", employerCountry: "United States", employerCity: "", employerAddress: "", bio: "Bilbo Baggins was born in the Shire in the year 2890 of the Third Age, nearly 130 years before the end of the War of the Ring that ended the long struggle between the races of Middle-earth and the Dark Lord Sauron. The only son of Bungo Baggins and Belladonna Took, Bilbo spent his early life in the recently constructed Hobbit hole known as Bag End, which would remain his family home after the death of his parents.", admissionState: "CO;NH", additionalIdentity: "" },
	// 	],
	// };

	// // const data = Object.keys(profiles);
	// // console.log(data);

	// // console.log(profiles);

	// let bio;

	// const profile = profiles.data.map((bios) => {
	// 	return bios;
	// });

	// bio = profile[0];

	// console.log(bio);

	const key = Object.keys(practiceareas);

	const objAsgn = Object.assign(practiceareas, key);
	console.log(objAsgn);
};

// https://angela-local.herokuapp.com/https://edastaging-uofstthomasmn.cs63.force.com/services/apexrest/professionaldirectoryfeed?type=directory&first=bilbo&last=baggins
// https://edastaging-uofstthomasmn.cs63.force.com/services/apexrest/professionaldirectoryfeed?type=directory&first=bilbo&last=baggins
