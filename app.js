const practiceareas = { "Administrative Law": 4, "Alternative Dispute Resolution": 2, "Animal Law": 2, "Antitrust Litigation": 1, Appellate: 1, "Aviation and Aerospace": 1, Banking: 1, Bankruptcy: 0, "Business Litigation": 1, "Business/Corporate": 4, "Cannabis Law": 3, "Civil Litigation": 6, "Civil Rights": 3, "Class Action/Mass Torts": 5, "Closely Held Business": 0, Communications: 0, "Constitutional Law": 0, "Construction Litigation": 0, "Consumer Law": 0, "Creditor Debtor Rights": 1, "Criminal Defense": 6, "Criminal Defense: DUI/DWI": 0, "Criminal Defense: White Collar": 0, "Criminal Prosecution": 1, "E-Discovery": 1, "Elder Law": 1, "Eminent Domain": 0, "Employee Benefits": 0, "Employment & Labor": 0, "Employment Litigation": 1, "Energy & Natural Resources": 0, "Entertainment & Sports": 1, Enviornmental: 1, Environmental: 1, "Environmental Litigation": 0, "Estate & Trust Litigation": 0, "Estate Planning & Probate": 0, "Family Law": 0, "Food and Drugs": 1, "Franchise/Dealership": 0, Gaming: 1, "General Litigation": 2, "Government Contracts": 0, "Government Finance": 0, "Government Relations": 0, "Health Care": 0, Healthcare: 1, "Hobbit Law": 2, Immigration: 1, "Insurance Coverage": 0, "Intellectual Property": 0, "Intellectual Property Litigation": 0, International: 1, "Land Use/Zoning": 1, "Legal Aid/Pro Bono": 1, "Legislative & Governmental Affairs": 0, Lobbying: 0, "Media and Advertising": 0, "Mergers & Acquisitions": 0, "Military/Veterans Law": 0, "Native American Law": 0, "Nonprofit Organizations": 1, "Personal Injury - General": 1, "Personal Injury - Medical Malpractice": 0, "Personal Injury - Products": 0, "Professional Liability": 2, Prosecution: 2, "Real Estate": 0, "Schools & Education": 1, "Securities & Corporate Finance": 0, "Securities Litigation": 1, "Social Security Disability": 0, "State, Local & Municipal": 0, Surety: 1, Tax: 0, "Technology Transactions": 1, "The Blade": 1, Transformative: 1, "Transportation/Maritime": 0, Utilities: 1, "Workers' Compensation": 1 };

const areaKeyValue = Object.entries(practiceareas);
const areaKeys = Object.keys(practiceareas);
const firstLetter = areaKeys.map((x) => x[0]);
const grouped = new Set(firstLetter.sort());

// console.log(firstLetter);
// console.log(grouped);

let newArray = [];

areaKeyValue.forEach(function (area) {
	const firstWord = area[0].split("");
	const keyLetter = firstWord[0];
	console.log(keyLetter);
});

grouped.forEach(function (group) {
	let newObject = {};
	newObject.letter = group;
	newObject.list = [];

	areaKeys.filter(function (items) {
		if (items[0] === group) {
			newObject.list.push(items);
			return true;
		}
	});
	newArray.push(newObject);
});
console.log(newArray);
