// JavaScript Higher Order Functions

const companies = [
	{ name: "Company One", category: "Finance", start: 1981, end: 2003 },
	{ name: "Company Two", category: "Retail", start: 1992, end: 2008 },
	{ name: "Company Three", category: "Auto", start: 1999, end: 2007 },
	{ name: "Company Four", category: "Retail", start: 1989, end: 2010 },
	{ name: "Company Five", category: "Technology", start: 2009, end: 2014 },
	{ name: "Company Six", category: "Finance", start: 1987, end: 2010 },
	{ name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
	{ name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
	{ name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// FOREACH

// Basic for loop
for (let i = 0; i < companies.length; i++) {
	console.log(companies[i]);
}

// forEach - result is same as the basic for loop
companies.forEach(function (company) {
	console.log(company);
});

// get the company name, etc.
companies.forEach(function (company) {
	console.log(company.name);
});

// FILTER

// Basic for loop
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
	if (ages[i] >= 21) {
		canDrink.push(ages[i]);
	}
}

// filter - result is the same
const canDrink = ages.filter(function (age) {
	if (age >= 21) {
		return true;
	}
});

// filter arrow function (es6)
const canDrink = ages.filter((age) => age >= 21);

// filter retail companies
const retailCompanies = companies.filter(function (company) {
	if (company.category === "Retail") {
		return true;
	}
});

// (es6)
const retailCompanies = companies.filter((company) => company.category === "Retail");

// 80s companies
const eightiesCompanies = companies.filter((company) => company.start >= 1980 && company.start < 1990);

// Lasted 10 years or more
const lastedTenYears = companies.filter((company) => company.end - company.start >= 10);

// MAP

// create array of company names
const companyNames = companies.map(function (company) {
	return company.name;
});

const testMap = companies.map(function (company) {
	return `${company.name} [${company.start} to ${company.end}]`;
});

// (es6)
const testMap = companies.map((company) => `${company.name} [started ${company.start} - ended ${company.end}]`);

// get square root of ages
const agesSquare = ages.map((age) => Math.sqrt(age));

// multiple ages x 2
const agesTimesTwo = ages.map((age) => age * 2);

// get the square root, then multiply x 2
const ageMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);

// SORT

//  sort companies by start year
const sortedCompanies = companies.sort(function (c1, c2) {
	if (c1.start > c2.start) {
		return 1;
	} else {
		return -1;
	}
});

// es6 sort companies by start year
const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// sort ages ASC order
const sortAges = ages.sort((a, b) => a - b);

// sort ages DESC order
const sortAges = ages.sort((a, b) => b - a);

// REDUCE

// add all ages together with basic for loop
let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
	ageSum += ages[i];
}

// add ages using reduce
const ageSum = ages.reduce(function (total, age) {
	return total + age;
}, 0);

// es6 add ages using reduce
const ageSum = ages.reduce((total, age) => total + age, 0);

const totalYears = companies.reduce(function (total, company) {
	return total + (company.end - company.start);
}, 0);

const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);

// COMBINED

const combined = ages
	// multiply ages x 2
	.map((age) => age * 2)
	// filter out anything under 40
	.filter((age) => age >= 40)
	// sort lowest to higest
	.sort((a, b) => a - b)
	// add them all up
	.reduce((total, age) => total + age, 0);

console.log(combined);
