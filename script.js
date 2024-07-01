const disasterTypeResponses = {
    storm: {
        before: [
            "Assemble an Emergency Kit: This should include non-perishable food, water, first-aid kit, medications, flashlight, batteries, radio, sanitation supplies, phone charger, important documents, cash, and a multi-tool. Prepare for specific needs of infants, elderly, or disabled individuals.",
            "Develop a Communication Plan: Designate an out-of-area contact person everyone can reach. Discuss how you'll communicate if separated.",
            "Identify Evacuation Routes and Shelters: Locate multiple evacuation routes and familiarize yourself with designated shelters in your area.",
            "Stay Informed: Sign up for local emergency alerts and monitor weather forecasts.",
            "Secure Outdoor Items: Bring in outdoor furniture, secure loose items, and trim trees or shrubs to minimize potential damage.",
            "Charge Electronics: Ensure all devices are fully charged and have backup batteries or power banks available."
        ],
        after: [
            "Check for Injuries: Assess yourself and others for injuries. Provide basic first aid if needed, and seek medical attention for serious injuries.",
            "Stay Informed: Monitor radio broadcasts or websites for official updates and instructions.",
            "Report Damage: Contact your insurance company and document any damage with photos or videos for insurance claims.",
            "Be Cautious of Hazards: Watch out for downed power lines, flooded areas, and debris. Avoid flooded roads and walkways.",
            "Preserve Food: If power is out, use perishable food and refrigerated items first. Keep refrigerator and freezer doors closed to maintain cold temperatures."
        ]
    },
    tornado: {
        before: [
            "Identify a Designated Storm Shelter: Locate a safe room in your basement or an interior room on the lowest floor, away from windows.",
            "Assemble an Emergency Kit: This should include non-perishable food, water, first-aid kit, medications, flashlight, batteries, radio, sanitation supplies, phone charger, important documents, cash, and a multi-tool. Prepare for specific needs of infants, elderly, or disabled individuals.",
            "Secure Outdoor Items: Bring in outdoor furniture, secure loose items, and trim trees or shrubs to minimize potential damage.",
            "Practice Safety Drills: Conduct tornado drills with family members to practice seeking shelter quickly."
        ],
        after: [
            "Check for Injuries: Assess yourself and others for injuries. Provide basic first aid if needed, and seek medical attention for serious injuries.",
            "Stay Informed: Monitor radio broadcasts or websites for official updates and instructions.",
            "Report Damage: Contact your insurance company and document any damage with photos or videos for insurance claims.",
            "Avoid Damaged Areas: Be cautious of damaged buildings, broken glass, and debris. Wear sturdy shoes and protective clothing."
        ]
    },
    hurricane: {
        before: [
            "Evacuate if Advised by Authorities: Follow evacuation orders and prepare to leave promptly. Plan an evacuation route and destination.",
            "Board Up Windows: Protect windows with storm shutters, plywood, or hurricane panels, if time allows.",
            "Assemble an Emergency Kit: This should include non-perishable food, water, first-aid kit, medications, flashlight, batteries, radio, sanitation supplies, phone charger, important documents, cash, and a multi-tool."
        ],
        after: [
            "Return Home Safely: Wait for authorities to declare it safe to return home. Avoid flooded areas and unstable buildings.",
            "Stay Informed: Monitor radio broadcasts or websites for official updates and instructions.",
            "Report Damage: Contact your insurance company and document any damage with photos or videos for insurance claims.",
            "Use Caution with Utilities: Avoid flooded areas and do not use electrical appliances or light switches until they have been checked by a qualified electrician."
        ]
    },
    earthquake: {
        before: [
            "Secure Heavy Furniture: Anchor heavy furniture and appliances to walls or floor. Strap water heaters and gas appliances to wall studs.",
            "Identify Safe Spots: Identify safe spots in each room, such as under sturdy furniture or against interior walls.",
            "Assemble an Emergency Kit: This should include non-perishable food, water, first-aid kit, medications, flashlight, batteries, radio, sanitation supplies, phone charger, important documents, cash, and a multi-tool."
        ],
        after: [
            "Check for Injuries: Assess yourself and others for injuries. Provide basic first aid if needed, and seek medical attention for serious injuries.",
            "Inspect Your Home: Check for structural damage, gas leaks, and electrical issues. Shut off utilities if you suspect damage.",
            "Stay Informed: Monitor radio broadcasts or websites for official updates and instructions.",
            "Be Prepared for Aftershocks: Expect aftershocks and take cover if shaking resumes. Stay away from damaged areas."
        ]
    },
    flood: {
        before: [
            "Move Valuables to Higher Floors: Elevate valuables and important items to higher floors or shelves.",
            "Assemble an Emergency Kit: This should include non-perishable food, water, first-aid kit, medications, flashlight, batteries, radio, sanitation supplies, phone charger, important documents, cash, and a multi-tool.",
            "Stay Informed: Sign up for local emergency alerts and monitor weather forecasts.",
            "Prepare for Evacuation: Pack essential items and have a plan to evacuate to higher ground if flooding is imminent."
        ],
        after: [
            "Avoid Floodwaters: Do not walk, swim, or drive through floodwaters. They can be contaminated and pose health risks.",
            "Stay Informed: Monitor radio broadcasts or websites for official updates and instructions.",
            "Report Damage: Contact your insurance company and document any damage with photos or videos for insurance claims.",
            "Clean and Disinfect: Clean and disinfect anything that has come into contact with floodwaters to prevent mold and contamination."
        ]
    },
    wildfire: {
        before: [
            "Create a Defensible Space: Clear vegetation and combustible materials from around your home to create a defensible space.",
            "Assemble an Emergency Kit: This should include non-perishable food, water, first-aid kit, medications, flashlight, batteries, radio, sanitation supplies, phone charger, important documents, cash, and a multi-tool.",
            "Plan Evacuation Routes: Identify multiple evacuation routes and establish a meeting place for your family.",
            "Monitor Wildfire Alerts: Stay informed about local fire conditions and evacuation orders."
        ],
        after: [
            "Check for Hot Spots: Monitor your property for any remaining hot spots or embers.",
            "Stay Informed: Monitor radio broadcasts or websites for official updates and instructions.",
            "Avoid Returning Home Prematurely: Wait for authorities to declare it safe before returning home.",
            "Document Damage: Document any damage to your property for insurance claims. Wear protective clothing and be cautious of hazards during cleanup."
        ]
    }
};

document.getElementById('disasterRecoveryBtn').addEventListener('click', () => showSection('disasterRecoverySection'));
document.getElementById('educationPortalBtn').addEventListener('click', () => showSection('educationPortalSection'));

document.getElementById('beforeDisasterBtn').addEventListener('click', () => showForm('Describe your setting and needs:', 'before'));
document.getElementById('afterDisasterBtn').addEventListener('click', () => showForm('Describe the situation and your needs:', 'after'));

document.getElementById('disasterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const location = document.getElementById('location').value;
    const disasterType = document.getElementById('disasterType').value;
    const details = document.getElementById('details').value;
    const scenario = document.getElementById('detailsLabel').innerText.includes('setting') ? 'before' : 'after';
    
    const recommendations = getAIRecommendations(location, disasterType, details, scenario);
    
    const aiOutput = document.getElementById('aiOutput');
    aiOutput.innerHTML = recommendations;
    
    document.getElementById('response').style.display = 'block';
});

document.getElementById('searchBar').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const articleList = document.getElementById('articleList');
    
    const articles = [
        { title: "Natural Disaster Overview - Britannica", url: "https://www.britannica.com/science/natural-disaster" },
        { title: "Natural Disasters - BYJU's", url: "https://byjus.com/biology/natural-disasters/" },
        { title: "Natural Disasters - DHS", url: "https://www.dhs.gov/natural-disasters" },
        { title: "Preparing for Natural Disasters - Adjusters International", url: "https://www.adjustersinternational.com/resources/news-and-events/the-6-natural-disasters-you-need-to-prepare-for/" }
    ];
    
    articleList.innerHTML = articles
        .filter(article => article.title.toLowerCase().includes(query))
        .map(article => `<a href="${article.url}" target="_blank">${article.title}</a>`)
        .join('');
});

function showSection(sectionId) {
    document.getElementById('disasterRecoverySection').style.display = 'none';
    document.getElementById('educationPortalSection').style.display = 'none';
    document.getElementById(sectionId).style.display = 'block';
}

function showForm(labelText, scenario) {
    document.getElementById('detailsLabel').innerText = labelText;
    document.getElementById('disasterForm').style.display = 'flex';
    document.getElementById('response').style.display = 'none';
}

function getAIRecommendations(location, disasterType, details, scenario) {
    const responses = disasterTypeResponses[disasterType];
    const recommendations = scenario === 'before' ? responses.before : responses.after;
    return `
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Disaster Type:</strong> ${disasterType.charAt(0).toUpperCase() + disasterType.slice(1)}</p>
        <p><strong>Details:</strong> ${details}</p>
        <p><strong>AI Recommendations:</strong></p>
        <ul>
            ${recommendations.map(rec => `<li>${rec}</li>`).join('')}
        </ul>
    `;
}
