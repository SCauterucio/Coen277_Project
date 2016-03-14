var intNumOfJobsOnSearchPage = 6;

var experienceLevel = new Array("Not Applicable", "Internship", "Entry level", "Associate", "Mid-Senior level", "Director", "Executive");

var companies = new Array();
companies[0] = new Array("Adobe Systems", "Computer Software", "Adobe.png", "10,001+");
companies[1] = new Array("Amazon", "Internet", "Amazon.png", "10,001+");
companies[2] = new Array("Apple", "Consumer Electronics", "Apple.png", "10,001+");
companies[3] = new Array("Bank of America", "Banking", "BankOfAmerica.png", "10,001+");
companies[4] = new Array("BMW", "Automotive", "BMW.png", "10,001+");
companies[5] = new Array("Box", "Computer Software, Information Technology and Services", "Box.png", "1,001-5,000");
companies[6] = new Array("Chase", "Banking", "Chase.png", "100,000+");
companies[7] = new Array("Cisco", "Computer Hardware, Computer Networking", "Cisco.png", "10,001+");
companies[8] = new Array("Citi", "Banking", "Citi.png", "10,001+");
companies[9] = new Array("Cyanogen", "Wireless and Computer Software", "Cyanogen.png", "51-200");
companies[10] = new Array("Datometry", "Computer Software", "Datometry.png", "1-10");
companies[11] = new Array("Dell", "Computer Hardware, Computer Software", "Dell.png", "10,000+");
companies[12] = new Array("DreamWorks", "Entertainment", "DreamWorks.png", "1001-5000");
companies[13] = new Array("eBay", "Internet", "eBay.png", "10,001+");
companies[14] = new Array("EMC", "Computer Storage", "EMC.png", "10,001+");
companies[15] = new Array("Facebook", "Internet", "Facebook.png", "10,001+");
companies[16] = new Array("Fidelity Investments", "Financial Sector", "Fidelity.png", "10,000+");
companies[17] = new Array("Franklin Templeton Investments", "Financial Services", "FranklinTempleton.png", "5001-10,000");
companies[18] = new Array("Genentech", "Biotechnology", "Genentech.png", "10,001+");
companies[19] = new Array("Google", "Internet, Computer Software, Information Services", "Google.png", "10,001+");
companies[20] = new Array("Hewlett-Packard", "Information Technology", "HP.png", "10,001+");
companies[21] = new Array("Intel", "Semiconductors", "Intel.png", "10,001+");
companies[22] = new Array("Kaiser Permanente", "Healthcare", "Kaiser.png", "10,001+");
companies[23] = new Array("LinkedIn", "Internet", "LinkedIn.png", "5001-10,000");
companies[24] = new Array("Lockheed Martin", "Aerospace, Defense", "LockheedMartin.png", "10,001+");
companies[25] = new Array("Mercedes Benz", "Automotive", "MercedesBenz.png", "1001-5000");
companies[26] = new Array("Microsoft", "Computer Software, Computer Hardware", "Microsoft.png", "10,001+");
companies[27] = new Array("Oracle", "Enterprise Software, Computer Hardware", "Oracle.png", "10,001+");
companies[28] = new Array("Pinterest", "Internet", "Pinterest.png", "201-500");
companies[29] = new Array("Pixar Animation Studios", "Entertainment", "Pixar.png", "1001-5000");
companies[30] = new Array("SAP", "Enterprise Software", "SAP.png", "10,001+");
companies[31] = new Array("Shutterfly", "Internet", "Shutterfly.png", "1001-5000");
companies[32] = new Array("Snapchat", "Mobile Applications", "Default.png", "51-200");
companies[33] = new Array("SpaceX", "Aerospace", "SpaceX.png", "1001-5000");
companies[34] = new Array("Teradyne", "Electronic Testing", "Teradyne.png", "1001-5000");
companies[35] = new Array("Tesla", "Automotive, Renewable Energy Storage Systems", "Tesla.png", "10,001+");
companies[36] = new Array("Thumbtack", "Internet", "Thumbtack.png", "201-500");
companies[37] = new Array("Twitter", "Internet", "Twitter.png", "1001-5000");
companies[38] = new Array("United Technologies", "Aviation & Aerospace", "UnitedTechnologies.png", "10,001+");
companies[39] = new Array("VMware", "Information Technology", "VMware.png", "10,001+");
companies[40] = new Array("Walmart", "Retail", "Walmart.png", "10,001+");
companies[41] = new Array("Walt Disney", "Entertainment", "WaltDisney.png", "10,001+");
companies[42] = new Array("Warner Bros. Entertainment", "Entertainment", "WarnerBrothers.png", "10,001+");
companies[43] = new Array("Wealthfront", "Personal Finance", "Wealthfront.png", "51-200");
companies[44] = new Array("Wells Fargo", "Banking", "WellsFargo.png", "10,001+");
companies[45] = new Array("Yahoo", "Internet, Computer Software", "Yahoo.png", "10,001+");

var jobInfo = new Array();
jobInfo[0] = new Array(companies[0], "Software Engineer", "San Jose, CA", "Feb. 10, 2016", 169, experienceLevel[4], "Full-time", "Engineering", "$120,000-$150,000")
jobInfo[1] = new Array(companies[2], "Metrics Analyst", "Santa Clara Valley, CA", "Feb. 8, 2016", 14, experienceLevel[0], "Full-time", "Information Technology, Engineering", "$85,000-$100,000");
jobInfo[2] = new Array(companies[3], "Quantitative Finance Analyst", "San Francisco, CA", "Feb. 10, 2016", 0, experienceLevel[4], "Full-time", "Research, Finance", "$100,000-$120,000");
jobInfo[3] = new Array(companies[19], "Product Analyst, Google Engineering", "Mountain View, CA", "Feb. 11, 2016", 10, experienceLevel[0], "Full-time", "Strategy/Planning", "$85,000-$120,000");
jobInfo[4] = new Array(companies[19], "Business Intelligence Analyst, Advanced Analytics", "Mountain View, CA", "Feb. 11, 2016", 39, experienceLevel[0], "Full-time", "Strategy/Planning", "$85,000-$100,000");
jobInfo[5] = new Array(companies[1], "Business Intelligence Analyst", "Sunnyvale, CA", "Feb. 10, 2016", 74, experienceLevel[0], "Full-time", "Analyst, Information Technology", "$85,000-$100,000");
jobInfo[6] = new Array(companies[35], "Product Security Software Engineer (C, Linux)", "Palo Alto, CA", "Feb. 9, 2016", 83, experienceLevel[4], "Full-time", "Information Technology", "$150,000-$180,000");
jobInfo[7] = new Array(companies[33], "Lead Dragon Production Test Engineer", "Hawthorne, CA", "Feb. 13, 2016", 0, experienceLevel[4], "Full-time", "Quality Assurance", "$120,000-$150,000");
jobInfo[8] = new Array(companies[12], "International & Joint Ventures Accounting Manager", "Greater Los Angeles Area, CA", "Feb. 9, 2016", 16, experienceLevel[4], "Full-time", "Accounting/Auditing", "$100,000-$120,000");
jobInfo[9] = new Array(companies[42], "Senior Financial Analyst", "Burbank, CA", "Feb. 9, 2016", 13, experienceLevel[3], "Full-time", "Finance, Accounting/Auditing", "$100,000-$120,000");
jobInfo[10] = new Array(companies[41], "Senior Manager, Corporate Alliance Strategy", "Greater Los Angeles Area, CA", "Feb. 10, 2016", 25, experienceLevel[4], "Full-time", "Strategy/Planning", "$180,000-$220,000");
jobInfo[11] = new Array(companies[24], "Java Developer", "Clearwater, Florida", "Feb. 12, 2016", 6, experienceLevel[4], "Full-time", "Information Technology", "$100,000-$120,000");
jobInfo[12] = new Array(companies[30], "Architect Software Engineer - Mobile", "San Francisco, CA", "Feb. 9, 2016", 10, experienceLevel[0], "Full-time", "Design, Product Management", "$120,000-$150,000");
jobInfo[13] = new Array(companies[30], "Product Manager - Data Science", "San Francisco, CA", "Feb. 5, 2016", 16, experienceLevel[0], "Full-time", "Design, Product Management", "$100,000-$120,000");
jobInfo[14] = new Array(companies[45], "Sales Data Insights Analyst", "San Francisco, CA", "Feb. 9, 2016", 58, experienceLevel[0], "Full-time", "Sales, Information Technology, Analyst", "$75,000-$90,000");
jobInfo[15] = new Array(companies[8], "Tech Business and Data Analyst Citi Dallas TX", "Irving, TX", "Feb. 10, 2016", 0, experienceLevel[4], "Full-time", "Information Technology", "$85,000-$100,000");
jobInfo[16] = new Array(companies[36], "Software Engineer", "San Francisco, CA", "Feb. 9, 2016", 501, experienceLevel[0], "Full-time", "Information Technology, Engineering", "$100,000-$120,000");
jobInfo[17] = new Array(companies[45], "Paranoids Privacy & Cryptography Engineer", "Sunnyvale, CA", "Feb. 9, 2016", 6, experienceLevel[0], "Full-time", "Engineering", "$200,000-$250,000");
jobInfo[18] = new Array(companies[43], "DevOps Engineer", "Downtown Redwood City, CA", "Feb. 10, 2016", 13, experienceLevel[4], "Full-time", "Engineering", "$150,000-$180,000");
jobInfo[19] = new Array(companies[7], "Data Scientist", "San Jose, CA", "Jan. 18, 2016", 47, experienceLevel[4], "Full-time", "Engineering", "$180,000-$220,000");
jobInfo[20] = new Array(companies[32], "Data Engineer", "Venice, CA", "Jan. 22, 2016", 41, experienceLevel[4], "Full-time", "Engineering", "$140,000-$160,000");
jobInfo[21] = new Array(companies[18], "Senior Scientific Researcher - Pharmacodynamic Biomarker (PDB), Development", "South San Francisco, CA", "Feb. 8, 2016", 0, experienceLevel[3], "Full-time", "Engineering, Science", "$120,000-$140,000");
jobInfo[22] = new Array(companies[18], "Scientific Researcher / Sr. Scientific Researcher - DMPK Bioanalytical", "South San Francisco, CA", "Feb. 2, 2016", 2, experienceLevel[3], "Full-time", "Engineering, Science", "$120,000-$140,000");
jobInfo[23] = new Array(companies[14], "Principal Product Manager", "Pleasanton, CA", "Feb. 10, 2016", 14, experienceLevel[4], "Full-time", "Product Management", "$140,000-$160,000");
jobInfo[24] = new Array(companies[15], "Business Analyst - New Product, Global Shared Services", "Menlo Park, CA", "Feb. 12, 2016", 24, experienceLevel[0], "Full-time", "Information Technology, Analyst", "$85,000-$100,000");
jobInfo[25] = new Array(companies[15], "Business Operations Analyst, Instagram", "Menlo Park, CA", "Feb. 1, 2016", 501, experienceLevel[0], "Full-time", "General Business, Analyst", "$85,000-$100,000");
jobInfo[26] = new Array(companies[34], "Software Engineer", "San Jose, CA", "Feb. 13, 2016", 132, experienceLevel[3], "Full-time", "Engineering", "$100,000-$120,000");
jobInfo[27] = new Array(companies[26], "Software Engineer", "Mountain View, CA", "Jan. 25, 2016", 102, experienceLevel[0], "Full-time", "Engineering", "$100,000-$120,000");
jobInfo[28] = new Array(companies[20], "Strategic Alliances Business Manager", "Palo Alto, CA", "Feb. 9, 2016", 25, experienceLevel[4], "Full-time", "Strategy/Planning, General Business, Consulting", "$130,000-$150,000");
jobInfo[29] = new Array(companies[25], "Project Coordinator", "San Francisco Bay Area, CA", "Jan. 20, 2016", 210, experienceLevel[3], "Full-time", "Project Management", "$90,000-$110,000");
jobInfo[30] = new Array(companies[25], "3D Motion Designer", "Sunnyvale, CA", "Jan. 26, 2016", 61, experienceLevel[3], "Full-time", "Design", "$130,000-$150,000");
jobInfo[31] = new Array(companies[25], "UX Designer", "Sunnyvale, CA", "Jan. 21, 2016", 249, experienceLevel[3], "Full-time", "Design", "$100,000-$120,000");
jobInfo[32] = new Array(companies[16], "Investor Center Intern - Palo Alto, CA - 2016", "San Jose, CA", "Feb. 11, 2016", 12, experienceLevel[1], "Full-time", "Customer Service, Finance, Sales", "$50,000-$75,000");
jobInfo[33] = new Array(companies[16], "Financial Consultant - Sunnyvale, CA", "Sunnyvale, CA", "Feb. 8, 2016", 3, experienceLevel[4], "Full-time", "Finance, Sales", "$85,000-$100,000");
jobInfo[34] = new Array(companies[39], "Business Systems Analyst", "Palo Alto, CA", "Feb. 5, 2016", 0, experienceLevel[4], "Full-time", "Information Technology", "$85,000-$100,000");
jobInfo[35] = new Array(companies[39], "Business & Compliance Analyst - Intern", "Palo Alto, CA", "Jan. 20, 2016", 0, experienceLevel[1], "Full-time", "Legal, Other", "$40,000-$60,000");
jobInfo[36] = new Array(companies[6], "Digital Analytics - Data Analyst", "San Francisco, CA", "Feb. 10, 2016", 233, experienceLevel[0], "Full-time", "Information Technology, Analyst", "$75,000-$90,000");
jobInfo[37] = new Array(companies[31], "Software Engineer, Developer Productivity Tools #15-610", "Redwood City, CA", "Feb. 9, 2016", 30, experienceLevel[4], "Full-time", "Engineering", "$100,000-$120,000");
jobInfo[38] = new Array(companies[22], "Data Consultant", "San Bruno, CA", "Feb. 10, 2016", 0, experienceLevel[4], "Full-time", "Information Technology, Consulting", "$100,000-$120,000");
jobInfo[39] = new Array(companies[22], "Strategy Analyst Undergrad Intern", "San Bruno, CA", "Feb. 8, 2016", 0, experienceLevel[0], "Temporary", "Research, Other", "$20,000-$40,000");
jobInfo[40] = new Array(companies[38], "Paid Internship - Project Manager, San Jose", "Sunnyvale, CA", "Feb. 11, 2016", 0, experienceLevel[1], "Temporary", "Project Management", "$20,000-$40,000");
jobInfo[41] = new Array(companies[17], "Product Manager-Global Macro", "San Mateo, CA", "Feb. 11, 2016", 5, experienceLevel[4], "Full-time", "Analyst, Finance, Product Management", "$100,000-$120,000");
jobInfo[42] = new Array(companies[27], "GTM Product Marketing Manager PaaS", "San Francisco Bay Area, CA", "Feb. 10, 2016", 61, experienceLevel[3], "Full-time", "Marketing", "$140,000-$160,000");
jobInfo[43] = new Array(companies[29], "Build Release Engineer", "Emeryville, CA", "Jan. 16, 2016", 24, experienceLevel[4], "Full-time", "Engineering", "$150,000-$180,000");
jobInfo[44] = new Array(companies[11], "SFDC Business Applications and Data Analyst", "Philadelphia, PA", "Feb. 9, 2016", 61, experienceLevel[0], "Full-time", "Information Technology", "$85,000-$100,000");
jobInfo[45] = new Array(companies[11], "BI Automation Engineer", "Santa Clara, CA", "Feb. 10, 2016", 0, experienceLevel[2], "Full-time", "Information Technology, Engineering", "$150,000-$180,000");
jobInfo[46] = new Array(companies[37], "Software Engineer - Engineering Effectiveness, Continuous Integration", "San Francisco Bay Area, CA", "Feb. 8, 2016", 16, experienceLevel[4], "Full-time", "Engineering", "$120,000-$140,000");
jobInfo[47] = new Array(companies[37], "Software Engineer - Brand Advertising Team", "San Francisco, CA", "Feb. 9, 2016", 293, experienceLevel[4], "Full-time", "Engineering, Information Technology", "$85,000-$100,000");

function initializeJobResultsPage( pageNum ) {
	initializeJobResults(pageNum);
	initializeNumOfSearchResults();
}

function initializeNumOfSearchResults() {
	var lvDivNumOfResults = document.getElementById("num-of-results");
	lvDivNumOfResults.innerHTML = "<b>" + jobInfo.length + "</b> results found for <b>Software Engineer, Analyst, Manager</b>";
}

function initializeJobResults( pageNum ) {
	var lvDivJobSearchResultList = document.getElementById("job-search-results-list");
	lvDivJobSearchResultList.innerHTML = "";
	
	var i = 0;
	
	for( i = intNumOfJobsOnSearchPage * (pageNum - 1); i < intNumOfJobsOnSearchPage * pageNum; i++ ) {		
		var lvDivJobSearchResultItem = document.createElement("div");
		lvDivJobSearchResultItem.className = "job-search-item";
		lvDivJobSearchResultItem.id = "job-search-item" + i;
		
		var lvImgCompanyLogo = document.createElement("img");
		lvImgCompanyLogo.src = "./companies/" + jobInfo[i][0][2];
		lvImgCompanyLogo.className = "company-logo";
		lvImgCompanyLogo.alt = "";
		lvImgCompanyLogo.height = 70;
		lvImgCompanyLogo.width = 70;
		
		var lvDivJobDetails = document.createElement("div");
		lvDivJobDetails.className = "job-details";
		
		var lvLinkTitleOfPosition = document.createElement("a");
		lvLinkTitleOfPosition.className = "search-result-item-position-title";
		var lvStrJobPositionTitle = jobInfo[i][1];
		
		if( lvStrJobPositionTitle.length > 54 ) {
			lvStrJobPositionTitle = jobInfo[i][1].substring(0, 51) + "...";
		}
		lvLinkTitleOfPosition.innerHTML = lvStrJobPositionTitle;
		
		var lvDivSecondItem = document.createElement("div");
		lvDivSecondItem.className = "second-item";
		var lvLinkCompanyName = document.createElement("a");
		lvLinkCompanyName.className = "search-result-item-company-name";
		lvLinkCompanyName.innerHTML = jobInfo[i][0][0];
		
		var lvSpanSecondItemRestOfDetails = document.createElement("span");
		lvSpanSecondItemRestOfDetails.style.fontWeight = "normal";
		lvSpanSecondItemRestOfDetails.style.fontStyle = "italic";
		lvSpanSecondItemRestOfDetails.innerHTML = "&nbsp;&diams;&nbsp;" + jobInfo[i][0][1] + "&nbsp; &diams; &nbsp" + jobInfo[i][0][3] + " employees";
		
		lvDivSecondItem.appendChild(lvLinkCompanyName);
		lvDivSecondItem.appendChild(lvSpanSecondItemRestOfDetails);

		var lvDivThirdItem = document.createElement("div");
		lvDivThirdItem.className = "third-item";
		lvDivThirdItem.innerHTML = jobInfo[i][5] + "&nbsp;&diams;&nbsp;" + jobInfo[i][6] + "&nbsp;&diams;&nbsp;" + jobInfo[i][8];
		
		var lvDivFourthItem = document.createElement("div");
		lvDivFourthItem.className = "fourth-item";
		lvDivFourthItem.innerHTML = jobInfo[i][2] + "&nbsp;&diams;&nbsp;" + "Posted: " + jobInfo[i][3] + "&nbsp;&diams;&nbsp;" + jobInfo[i][4] + " applicants";
		
		var lvDivFifthItem = document.createElement("div");
		lvDivFifthItem.className = "fifth-item";
		var lvLinkSaveJob = document.createElement("a");
		lvLinkSaveJob.className = "save-job";
		lvLinkSaveJob.innerHTML = "Save Job";
		lvDivFifthItem.appendChild(lvLinkSaveJob);
		
		lvDivJobDetails.appendChild(lvLinkTitleOfPosition);
		lvDivJobDetails.appendChild(lvDivSecondItem);
		lvDivJobDetails.appendChild(lvDivThirdItem);
		lvDivJobDetails.appendChild(lvDivFourthItem);
		lvDivJobDetails.appendChild(lvDivFifthItem);
		
		lvDivJobSearchResultItem.appendChild(lvImgCompanyLogo);
		lvDivJobSearchResultItem.appendChild(lvDivJobDetails);
		
		lvDivJobSearchResultList.appendChild(lvDivJobSearchResultItem);
	}
}


function testing() {
	
}