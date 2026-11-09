const SCENARIOS = [
    {
        "id": 1,
        "category": "PROJECT_UPDATE",
        "question": "Hi Team, I just wanted to know the project status."
    },
    {
        "id": 2,
        "category": "PROJECT_UPDATE",
        "question": "Can you share the current completion percentage of the project?"
    },
    {
        "id": 3,
        "category": "PROJECT_UPDATE",
        "question": "What tasks are currently in progress?"
    },
    {
        "id": 4,
        "category": "PROJECT_UPDATE",
        "question": "Are there any blockers affecting delivery?"
    },
    {
        "id": 5,
        "category": "PROJECT_UPDATE",
        "question": "How much testing has been completed so far?"
    },
    {
        "id": 6,
        "category": "PROJECT_UPDATE",
        "question": "Can you provide an estimated delivery date?"
    },
    {
        "id": 7,
        "category": "PROJECT_UPDATE",
        "question": "What is the current sprint status?"
    },
    {
        "id": 8,
        "category": "PROJECT_UPDATE",
        "question": "Can you summarize project achievements this week?"
    },
    {
        "id": 9,
        "category": "PROJECT_UPDATE",
        "question": "What modules are completed and pending?"
    },
    {
        "id": 10,
        "category": "PROJECT_UPDATE",
        "question": "Please provide this week's progress update."
    },
    {
        "id": 11,
        "category": "RESOURCE_ISSUE",
        "question": "A developer resigned before release. What is your plan?"
    },
    {
        "id": 12,
        "category": "RESOURCE_ISSUE",
        "question": "Two key developers are on leave during testing."
    },
    {
        "id": 13,
        "category": "RESOURCE_ISSUE",
        "question": "Your project suddenly lost 40% of its team."
    },
    {
        "id": 14,
        "category": "RESOURCE_ISSUE",
        "question": "A critical team member is unavailable for two weeks."
    },
    {
        "id": 15,
        "category": "RESOURCE_ISSUE",
        "question": "You are short on skilled resources."
    },
    {
        "id": 16,
        "category": "RESOURCE_ISSUE",
        "question": "A replacement resource requires training."
    },
    {
        "id": 17,
        "category": "RESOURCE_ISSUE",
        "question": "The project manager resigned unexpectedly."
    },
    {
        "id": 18,
        "category": "RESOURCE_ISSUE",
        "question": "The testing team is understaffed."
    },
    {
        "id": 19,
        "category": "RESOURCE_ISSUE",
        "question": "Your senior architect moved to another account."
    },
    {
        "id": 20,
        "category": "RESOURCE_ISSUE",
        "question": "Half your team is allocated to another project."
    },
    {
        "id": 21,
        "category": "INCIDENT",
        "question": "Production server crashed during a client demo."
    },
    {
        "id": 22,
        "category": "INCIDENT",
        "question": "Application is down for all users."
    },
    {
        "id": 23,
        "category": "INCIDENT",
        "question": "Critical bug found in production."
    },
    {
        "id": 24,
        "category": "INCIDENT",
        "question": "Database connection failure reported."
    },
    {
        "id": 25,
        "category": "INCIDENT",
        "question": "Users cannot log in to the platform."
    },
    {
        "id": 26,
        "category": "INCIDENT",
        "question": "The API is returning 500 errors."
    },
    {
        "id": 27,
        "category": "INCIDENT",
        "question": "Production data is corrupted."
    },
    {
        "id": 28,
        "category": "INCIDENT",
        "question": "A deployment caused system instability."
    },
    {
        "id": 29,
        "category": "INCIDENT",
        "question": "Unexpected downtime impacted thousands of users."
    },
    {
        "id": 30,
        "category": "INCIDENT",
        "question": "Client reports severe performance issues."
    },
    {
        "id": 31,
        "category": "ESCALATION",
        "question": "Client is unhappy about delivery delay."
    },
    {
        "id": 32,
        "category": "ESCALATION",
        "question": "Client escalation received regarding quality issues."
    },
    {
        "id": 33,
        "category": "ESCALATION",
        "question": "Client says there was no communication from your team."
    },
    {
        "id": 34,
        "category": "ESCALATION",
        "question": "Client is demanding immediate resolution."
    },
    {
        "id": 35,
        "category": "ESCALATION",
        "question": "Client threatens to stop the project."
    },
    {
        "id": 36,
        "category": "ESCALATION",
        "question": "Client claims commitments were not met."
    },
    {
        "id": 37,
        "category": "ESCALATION",
        "question": "Customer satisfaction score dropped significantly."
    },
    {
        "id": 38,
        "category": "ESCALATION",
        "question": "Stakeholders are questioning project direction."
    },
    {
        "id": 39,
        "category": "ESCALATION",
        "question": "Client is disappointed with sprint outcomes."
    },
    {
        "id": 40,
        "category": "ESCALATION",
        "question": "Major complaint received from the customer."
    },
    {
        "id": 41,
        "category": "DEADLINE_PRESSURE",
        "question": "Delivery deadline was moved closer by one week."
    },
    {
        "id": 42,
        "category": "DEADLINE_PRESSURE",
        "question": "CEO wants the release by tomorrow."
    },
    {
        "id": 43,
        "category": "DEADLINE_PRESSURE",
        "question": "Client asks for same-day delivery."
    },
    {
        "id": 44,
        "category": "DEADLINE_PRESSURE",
        "question": "Critical deliverable is due in six hours."
    },
    {
        "id": 45,
        "category": "DEADLINE_PRESSURE",
        "question": "Testing is incomplete but go-live is tomorrow."
    },
    {
        "id": 46,
        "category": "DEADLINE_PRESSURE",
        "question": "Your team missed the sprint deadline."
    },
    {
        "id": 47,
        "category": "DEADLINE_PRESSURE",
        "question": "There are pending defects before release."
    },
    {
        "id": 48,
        "category": "DEADLINE_PRESSURE",
        "question": "Management rejected the extension request."
    },
    {
        "id": 49,
        "category": "DEADLINE_PRESSURE",
        "question": "Release timeline is at risk."
    },
    {
        "id": 50,
        "category": "DEADLINE_PRESSURE",
        "question": "Business wants immediate deployment."
    },
    {
        "id": 51,
        "category": "CLIENT_MEETING",
        "question": "The client has scheduled an emergency meeting. How will you prepare?"
    },
    {
        "id": 52,
        "category": "CLIENT_MEETING",
        "question": "Client asks for a detailed walkthrough of project status."
    },
    {
        "id": 53,
        "category": "CLIENT_MEETING",
        "question": "Stakeholders have conflicting expectations during the meeting."
    },
    {
        "id": 54,
        "category": "CLIENT_MEETING",
        "question": "The client requests an unscheduled demo today."
    },
    {
        "id": 55,
        "category": "CLIENT_MEETING",
        "question": "A senior client executive joins the project review unexpectedly."
    },
    {
        "id": 56,
        "category": "CLIENT_MEETING",
        "question": "Client wants to discuss project risks and mitigation plans."
    },
    {
        "id": 57,
        "category": "CLIENT_MEETING",
        "question": "A client questions your team's technical approach."
    },
    {
        "id": 58,
        "category": "CLIENT_MEETING",
        "question": "The client asks why deadlines were missed."
    },
    {
        "id": 59,
        "category": "CLIENT_MEETING",
        "question": "Client requests a roadmap presentation for the next quarter."
    },
    {
        "id": 60,
        "category": "CLIENT_MEETING",
        "question": "Customer wants live updates during the meeting."
    },
    {
        "id": 61,
        "category": "EMAIL_COMMUNICATION",
        "question": "Draft a professional delay notification email."
    },
    {
        "id": 62,
        "category": "EMAIL_COMMUNICATION",
        "question": "Send a follow-up email after a client meeting."
    },
    {
        "id": 63,
        "category": "EMAIL_COMMUNICATION",
        "question": "Respond to a customer complaint via email."
    },
    {
        "id": 64,
        "category": "EMAIL_COMMUNICATION",
        "question": "Write an email requesting timeline extension."
    },
    {
        "id": 65,
        "category": "EMAIL_COMMUNICATION",
        "question": "Draft an escalation email to management."
    },
    {
        "id": 66,
        "category": "EMAIL_COMMUNICATION",
        "question": "Write an email confirming project completion."
    },
    {
        "id": 67,
        "category": "EMAIL_COMMUNICATION",
        "question": "Inform stakeholders about a production issue."
    },
    {
        "id": 68,
        "category": "EMAIL_COMMUNICATION",
        "question": "Request resources from another team through email."
    },
    {
        "id": 69,
        "category": "EMAIL_COMMUNICATION",
        "question": "Share weekly project updates through email."
    },
    {
        "id": 70,
        "category": "EMAIL_COMMUNICATION",
        "question": "Politely reject an unrealistic customer request."
    },
    {
        "id": 71,
        "category": "STAKEHOLDER_MANAGEMENT",
        "question": "Two stakeholders disagree on project priorities."
    },
    {
        "id": 72,
        "category": "STAKEHOLDER_MANAGEMENT",
        "question": "Business wants speed while QA wants more testing."
    },
    {
        "id": 73,
        "category": "STAKEHOLDER_MANAGEMENT",
        "question": "A stakeholder is unhappy with current progress."
    },
    {
        "id": 74,
        "category": "STAKEHOLDER_MANAGEMENT",
        "question": "Management asks for a project status briefing."
    },
    {
        "id": 75,
        "category": "STAKEHOLDER_MANAGEMENT",
        "question": "Different departments demand competing changes."
    },
    {
        "id": 76,
        "category": "STAKEHOLDER_MANAGEMENT",
        "question": "Stakeholders want additional reports every day."
    },
    {
        "id": 77,
        "category": "STAKEHOLDER_MANAGEMENT",
        "question": "Executive leadership asks for justification of delays."
    },
    {
        "id": 78,
        "category": "STAKEHOLDER_MANAGEMENT",
        "question": "A stakeholder suddenly changes project direction."
    },
    {
        "id": 79,
        "category": "STAKEHOLDER_MANAGEMENT",
        "question": "Project priorities changed after executive review."
    },
    {
        "id": 80,
        "category": "STAKEHOLDER_MANAGEMENT",
        "question": "Key stakeholders demand immediate visibility on risks."
    },
    {
        "id": 81,
        "category": "TEAM_CONFLICT",
        "question": "Two developers disagree on implementation approach."
    },
    {
        "id": 82,
        "category": "TEAM_CONFLICT",
        "question": "A team member repeatedly misses commitments."
    },
    {
        "id": 83,
        "category": "TEAM_CONFLICT",
        "question": "The testing team blames developers for defects."
    },
    {
        "id": 84,
        "category": "TEAM_CONFLICT",
        "question": "There is a communication gap between onsite and offshore teams."
    },
    {
        "id": 85,
        "category": "TEAM_CONFLICT",
        "question": "A disagreement arises over task ownership."
    },
    {
        "id": 86,
        "category": "TEAM_CONFLICT",
        "question": "A senior engineer rejects team decisions."
    },
    {
        "id": 87,
        "category": "TEAM_CONFLICT",
        "question": "Team morale is dropping due to constant pressure."
    },
    {
        "id": 88,
        "category": "TEAM_CONFLICT",
        "question": "A team member feels unfairly treated."
    },
    {
        "id": 89,
        "category": "TEAM_CONFLICT",
        "question": "The project manager and architect disagree publicly."
    },
    {
        "id": 90,
        "category": "TEAM_CONFLICT",
        "question": "Conflict between development and support teams is slowing progress."
    },
    {
        "id": 91,
        "category": "REQUIREMENT_CHANGE",
        "question": "Client requests a major feature change one week before release."
    },
    {
        "id": 92,
        "category": "REQUIREMENT_CHANGE",
        "question": "Requirements changed after development was completed."
    },
    {
        "id": 93,
        "category": "REQUIREMENT_CHANGE",
        "question": "Product owner introduces new scope without timeline extension."
    },
    {
        "id": 94,
        "category": "REQUIREMENT_CHANGE",
        "question": "A feature must be redesigned due to business changes."
    },
    {
        "id": 95,
        "category": "REQUIREMENT_CHANGE",
        "question": "Client changes priorities during development."
    },
    {
        "id": 96,
        "category": "REQUIREMENT_CHANGE",
        "question": "The approved requirements are now outdated."
    },
    {
        "id": 97,
        "category": "REQUIREMENT_CHANGE",
        "question": "Project scope increased by 40% unexpectedly."
    },
    {
        "id": 98,
        "category": "REQUIREMENT_CHANGE",
        "question": "Stakeholders request multiple additional features."
    },
    {
        "id": 99,
        "category": "REQUIREMENT_CHANGE",
        "question": "Customer rejects the original requirement document."
    },
    {
        "id": 100,
        "category": "REQUIREMENT_CHANGE",
        "question": "A mandatory regulatory update impacts the project scope."
    },
    {
        "id": 101,
        "category": "TESTING_ISSUES",
        "question": "Testing found 120 defects before release. How will you proceed?"
    },
    {
        "id": 102,
        "category": "TESTING_ISSUES",
        "question": "A critical bug was discovered one day before go-live."
    },
    {
        "id": 103,
        "category": "TESTING_ISSUES",
        "question": "UAT failed due to multiple functionality issues."
    },
    {
        "id": 104,
        "category": "TESTING_ISSUES",
        "question": "Performance testing results are below expectations."
    },
    {
        "id": 105,
        "category": "TESTING_ISSUES",
        "question": "Regression testing uncovered previously fixed defects."
    },
    {
        "id": 106,
        "category": "TESTING_ISSUES",
        "question": "A customer rejected the UAT sign-off."
    },
    {
        "id": 107,
        "category": "TESTING_ISSUES",
        "question": "Automated test suites are failing unexpectedly."
    },
    {
        "id": 108,
        "category": "TESTING_ISSUES",
        "question": "QA reported severe usability concerns."
    },
    {
        "id": 109,
        "category": "TESTING_ISSUES",
        "question": "The testing phase is behind schedule."
    },
    {
        "id": 110,
        "category": "TESTING_ISSUES",
        "question": "A security defect was found during validation."
    },
    {
        "id": 111,
        "category": "DEPLOYMENT",
        "question": "Deployment failed in the production environment."
    },
    {
        "id": 112,
        "category": "DEPLOYMENT",
        "question": "The release package contains incorrect configurations."
    },
    {
        "id": 113,
        "category": "DEPLOYMENT",
        "question": "Rollback was triggered after deployment."
    },
    {
        "id": 114,
        "category": "DEPLOYMENT",
        "question": "Production deployment exceeded the approved window."
    },
    {
        "id": 115,
        "category": "DEPLOYMENT",
        "question": "Unexpected issues appeared immediately after deployment."
    },
    {
        "id": 116,
        "category": "DEPLOYMENT",
        "question": "The deployment team is unavailable during release."
    },
    {
        "id": 117,
        "category": "DEPLOYMENT",
        "question": "Deployment approvals are still pending."
    },
    {
        "id": 118,
        "category": "DEPLOYMENT",
        "question": "The release plan lacks rollback procedures."
    },
    {
        "id": 119,
        "category": "DEPLOYMENT",
        "question": "Customer requests deployment during peak business hours."
    },
    {
        "id": 120,
        "category": "DEPLOYMENT",
        "question": "Infrastructure limitations blocked deployment."
    },
    {
        "id": 121,
        "category": "SECURITY",
        "question": "A security vulnerability was reported by the client."
    },
    {
        "id": 122,
        "category": "SECURITY",
        "question": "Sensitive customer data is exposed publicly."
    },
    {
        "id": 123,
        "category": "SECURITY",
        "question": "A phishing attack targeted project users."
    },
    {
        "id": 124,
        "category": "SECURITY",
        "question": "Unauthorized access was detected in production."
    },
    {
        "id": 125,
        "category": "SECURITY",
        "question": "A penetration test revealed major weaknesses."
    },
    {
        "id": 126,
        "category": "SECURITY",
        "question": "Customer passwords were stored incorrectly."
    },
    {
        "id": 127,
        "category": "SECURITY",
        "question": "Security compliance audit failed."
    },
    {
        "id": 128,
        "category": "SECURITY",
        "question": "An employee accidentally shared confidential information."
    },
    {
        "id": 129,
        "category": "SECURITY",
        "question": "A third-party library contains critical vulnerabilities."
    },
    {
        "id": 130,
        "category": "SECURITY",
        "question": "Multi-factor authentication stopped working."
    },
    {
        "id": 131,
        "category": "DATA_LOSS",
        "question": "Production database records were accidentally deleted."
    },
    {
        "id": 132,
        "category": "DATA_LOSS",
        "question": "A backup restoration process failed."
    },
    {
        "id": 133,
        "category": "DATA_LOSS",
        "question": "Customer transaction history is missing."
    },
    {
        "id": 134,
        "category": "DATA_LOSS",
        "question": "Data synchronization stopped unexpectedly."
    },
    {
        "id": 135,
        "category": "DATA_LOSS",
        "question": "Storage corruption affected business records."
    },
    {
        "id": 136,
        "category": "DATA_LOSS",
        "question": "The latest backup file is unavailable."
    },
    {
        "id": 137,
        "category": "DATA_LOSS",
        "question": "Customer reports missing documents."
    },
    {
        "id": 138,
        "category": "DATA_LOSS",
        "question": "A migration caused loss of application data."
    },
    {
        "id": 139,
        "category": "DATA_LOSS",
        "question": "Archived records cannot be retrieved."
    },
    {
        "id": 140,
        "category": "DATA_LOSS",
        "question": "Users lost saved preferences after an upgrade."
    },
    {
        "id": 141,
        "category": "MANAGER_PRESSURE",
        "question": "Your manager demands daily progress meetings."
    },
    {
        "id": 142,
        "category": "MANAGER_PRESSURE",
        "question": "Management expects delivery despite known risks."
    },
    {
        "id": 143,
        "category": "MANAGER_PRESSURE",
        "question": "Your manager asks for an unrealistic commitment."
    },
    {
        "id": 144,
        "category": "MANAGER_PRESSURE",
        "question": "Management questions team productivity."
    },
    {
        "id": 145,
        "category": "MANAGER_PRESSURE",
        "question": "Your manager requests delivery with fewer resources."
    },
    {
        "id": 146,
        "category": "MANAGER_PRESSURE",
        "question": "Leadership is concerned about missed milestones."
    },
    {
        "id": 147,
        "category": "MANAGER_PRESSURE",
        "question": "Senior management requests immediate project acceleration."
    },
    {
        "id": 148,
        "category": "MANAGER_PRESSURE",
        "question": "Your manager wants a revised recovery plan."
    },
    {
        "id": 149,
        "category": "MANAGER_PRESSURE",
        "question": "Project visibility has increased after executive attention."
    },
    {
        "id": 150,
        "category": "MANAGER_PRESSURE",
        "question": "The manager expects weekend work to meet deadlines."
    },
    {
        "id": 151,
        "category": "CEO_QUESTIONS",
        "question": "The CEO asks why the project missed its delivery target."
    },
    {
        "id": 152,
        "category": "CEO_QUESTIONS",
        "question": "The CEO wants a one-minute update on project status."
    },
    {
        "id": 153,
        "category": "CEO_QUESTIONS",
        "question": "The CEO questions the return on investment of the project."
    },
    {
        "id": 154,
        "category": "CEO_QUESTIONS",
        "question": "The CEO asks how project risks are being managed."
    },
    {
        "id": 155,
        "category": "CEO_QUESTIONS",
        "question": "The CEO requests a recovery plan for missed milestones."
    },
    {
        "id": 156,
        "category": "CEO_QUESTIONS",
        "question": "The CEO demands a customer satisfaction improvement plan."
    },
    {
        "id": 157,
        "category": "CEO_QUESTIONS",
        "question": "The CEO asks how the team plans to reduce costs."
    },
    {
        "id": 158,
        "category": "CEO_QUESTIONS",
        "question": "The CEO wants assurance that the project will succeed."
    },
    {
        "id": 159,
        "category": "CEO_QUESTIONS",
        "question": "The CEO asks for the biggest challenge facing the project."
    },
    {
        "id": 160,
        "category": "CEO_QUESTIONS",
        "question": "The CEO wants an executive summary of project progress."
    },
    {
        "id": 161,
        "category": "BUDGET_CUT",
        "question": "Your project budget was reduced by 20%."
    },
    {
        "id": 162,
        "category": "BUDGET_CUT",
        "question": "Budget approval for new tools was rejected."
    },
    {
        "id": 163,
        "category": "BUDGET_CUT",
        "question": "You must maintain quality with reduced funding."
    },
    {
        "id": 164,
        "category": "BUDGET_CUT",
        "question": "Resource costs exceeded approved limits."
    },
    {
        "id": 165,
        "category": "BUDGET_CUT",
        "question": "Management requests cost optimization immediately."
    },
    {
        "id": 166,
        "category": "BUDGET_CUT",
        "question": "Travel budgets have been removed from the project."
    },
    {
        "id": 167,
        "category": "BUDGET_CUT",
        "question": "The customer reduced the project budget unexpectedly."
    },
    {
        "id": 168,
        "category": "BUDGET_CUT",
        "question": "The finance team requests a spending reduction plan."
    },
    {
        "id": 169,
        "category": "BUDGET_CUT",
        "question": "Infrastructure spending exceeds approved estimates."
    },
    {
        "id": 170,
        "category": "BUDGET_CUT",
        "question": "Business leaders request a lower-cost delivery approach."
    },
    {
        "id": 171,
        "category": "FUNNY_CORPORATE",
        "question": "You accidentally sent a meme to the client. How do you respond?"
    },
    {
        "id": 172,
        "category": "FUNNY_CORPORATE",
        "question": "Your microphone stays unmuted during a meeting and everyone hears background noise."
    },
    {
        "id": 173,
        "category": "FUNNY_CORPORATE",
        "question": "A client joined the wrong meeting and started asking unrelated questions."
    },
    {
        "id": 174,
        "category": "FUNNY_CORPORATE",
        "question": "You replied-all to a company-wide email by mistake."
    },
    {
        "id": 175,
        "category": "FUNNY_CORPORATE",
        "question": "The CEO enters your project call accidentally."
    },
    {
        "id": 176,
        "category": "FUNNY_CORPORATE",
        "question": "Your laptop restarted during a customer demo."
    },
    {
        "id": 177,
        "category": "FUNNY_CORPORATE",
        "question": "The presentation opened with the wrong slides."
    },
    {
        "id": 178,
        "category": "FUNNY_CORPORATE",
        "question": "A team member accidentally shared a personal tab while presenting."
    },
    {
        "id": 179,
        "category": "FUNNY_CORPORATE",
        "question": "The customer calls you by the wrong team name throughout the meeting."
    },
    {
        "id": 180,
        "category": "FUNNY_CORPORATE",
        "question": "An intern accidentally sends deployment instructions to clients."
    },
    {
        "id": 181,
        "category": "HYBRID_WORK",
        "question": "Half of your team works remotely and communication is slowing down."
    },
    {
        "id": 182,
        "category": "HYBRID_WORK",
        "question": "Remote employees report collaboration challenges."
    },
    {
        "id": 183,
        "category": "HYBRID_WORK",
        "question": "Key meetings are missing important remote participants."
    },
    {
        "id": 184,
        "category": "HYBRID_WORK",
        "question": "Time zone differences are delaying decisions."
    },
    {
        "id": 185,
        "category": "HYBRID_WORK",
        "question": "The remote team reports access issues."
    },
    {
        "id": 186,
        "category": "HYBRID_WORK",
        "question": "A remote employee misses several critical updates."
    },
    {
        "id": 187,
        "category": "HYBRID_WORK",
        "question": "Project documentation is not updated across locations."
    },
    {
        "id": 188,
        "category": "HYBRID_WORK",
        "question": "Hybrid work arrangements are reducing team visibility."
    },
    {
        "id": 189,
        "category": "HYBRID_WORK",
        "question": "Remote onboarding of new team members is proving difficult."
    },
    {
        "id": 190,
        "category": "HYBRID_WORK",
        "question": "Stakeholders are concerned about hybrid productivity."
    },
    {
        "id": 191,
        "category": "PRESENTATION_DAY",
        "question": "You must present the project status to senior leadership."
    },
    {
        "id": 192,
        "category": "PRESENTATION_DAY",
        "question": "The customer requests a live demonstration of the application."
    },
    {
        "id": 193,
        "category": "PRESENTATION_DAY",
        "question": "Presentation slides contain outdated project information."
    },
    {
        "id": 194,
        "category": "PRESENTATION_DAY",
        "question": "A stakeholder asks difficult questions during your presentation."
    },
    {
        "id": 195,
        "category": "PRESENTATION_DAY",
        "question": "The presentation environment is not ready before the meeting."
    },
    {
        "id": 196,
        "category": "PRESENTATION_DAY",
        "question": "Your internet connection becomes unstable during a presentation."
    },
    {
        "id": 197,
        "category": "PRESENTATION_DAY",
        "question": "The customer requests immediate clarifications after the demo."
    },
    {
        "id": 198,
        "category": "PRESENTATION_DAY",
        "question": "Senior leadership asks for unexpected project details."
    },
    {
        "id": 199,
        "category": "PRESENTATION_DAY",
        "question": "The live demo fails during the most important feature showcase."
    },
    {
        "id": 200,
        "category": "PRESENTATION_DAY",
        "question": "The presentation exceeds the allocated time limit."
    },
    {
        "id": 201,
        "category": "HR_SCENARIO",
        "question": "A new employee is struggling to adapt to the project."
    },
    {
        "id": 202,
        "category": "HR_SCENARIO",
        "question": "A team member raised concerns about workload stress."
    },
    {
        "id": 203,
        "category": "HR_SCENARIO",
        "question": "An employee requests emergency leave during a critical milestone."
    },
    {
        "id": 204,
        "category": "HR_SCENARIO",
        "question": "HR requests performance feedback for a team member."
    },
    {
        "id": 205,
        "category": "HR_SCENARIO",
        "question": "A new joiner requires onboarding support immediately."
    },
    {
        "id": 206,
        "category": "HR_SCENARIO",
        "question": "An employee reports workplace communication issues."
    },
    {
        "id": 207,
        "category": "HR_SCENARIO",
        "question": "The team reports low morale after multiple deadline extensions."
    },
    {
        "id": 208,
        "category": "HR_SCENARIO",
        "question": "A high performer is considering resignation."
    },
    {
        "id": 209,
        "category": "HR_SCENARIO",
        "question": "A team member is consistently arriving late to meetings."
    },
    {
        "id": 210,
        "category": "HR_SCENARIO",
        "question": "An employee requests a role change within the project."
    },
    {
        "id": 211,
        "category": "CUSTOMER_SUPPORT",
        "question": "A customer reports a login issue affecting business operations."
    },
    {
        "id": 212,
        "category": "CUSTOMER_SUPPORT",
        "question": "A user is unable to access purchased services."
    },
    {
        "id": 213,
        "category": "CUSTOMER_SUPPORT",
        "question": "Customer reports slow application performance."
    },
    {
        "id": 214,
        "category": "CUSTOMER_SUPPORT",
        "question": "The support team has a backlog of unresolved tickets."
    },
    {
        "id": 215,
        "category": "CUSTOMER_SUPPORT",
        "question": "A VIP customer demands immediate assistance."
    },
    {
        "id": 216,
        "category": "CUSTOMER_SUPPORT",
        "question": "A customer requests compensation for service downtime."
    },
    {
        "id": 217,
        "category": "CUSTOMER_SUPPORT",
        "question": "Users report inconsistent application behavior."
    },
    {
        "id": 218,
        "category": "CUSTOMER_SUPPORT",
        "question": "Customer support documentation is outdated."
    },
    {
        "id": 219,
        "category": "CUSTOMER_SUPPORT",
        "question": "Several customers reported the same recurring problem."
    },
    {
        "id": 220,
        "category": "CUSTOMER_SUPPORT",
        "question": "A client requests after-hours support coverage."
    },
    {
        "id": 221,
        "category": "LEADERSHIP",
        "question": "Your team needs guidance after a major project setback."
    },
    {
        "id": 222,
        "category": "LEADERSHIP",
        "question": "The team is losing confidence in project success."
    },
    {
        "id": 223,
        "category": "LEADERSHIP",
        "question": "You must motivate the team during a difficult delivery phase."
    },
    {
        "id": 224,
        "category": "LEADERSHIP",
        "question": "A critical decision must be made with incomplete information."
    },
    {
        "id": 225,
        "category": "LEADERSHIP",
        "question": "Your team is divided between two technical approaches."
    },
    {
        "id": 226,
        "category": "LEADERSHIP",
        "question": "You need to balance quality and delivery speed."
    },
    {
        "id": 227,
        "category": "LEADERSHIP",
        "question": "The team expects leadership during a production crisis."
    },
    {
        "id": 228,
        "category": "LEADERSHIP",
        "question": "Senior management requests a project recovery strategy."
    },
    {
        "id": 229,
        "category": "LEADERSHIP",
        "question": "A project failure requires immediate accountability."
    },
    {
        "id": 230,
        "category": "LEADERSHIP",
        "question": "The team requires a clear vision for upcoming deliverables."
    },
    {
        "id": 231,
        "category": "GENERAL_PROFESSIONALISM",
        "question": "A customer asks for clarification about a technical topic."
    },
    {
        "id": 232,
        "category": "GENERAL_PROFESSIONALISM",
        "question": "You must communicate bad news professionally."
    },
    {
        "id": 233,
        "category": "GENERAL_PROFESSIONALISM",
        "question": "A stakeholder requests an unplanned status update."
    },
    {
        "id": 234,
        "category": "GENERAL_PROFESSIONALISM",
        "question": "You need to explain project risks to non-technical users."
    },
    {
        "id": 235,
        "category": "GENERAL_PROFESSIONALISM",
        "question": "The customer expects a detailed action plan."
    },
    {
        "id": 236,
        "category": "GENERAL_PROFESSIONALISM",
        "question": "A project update meeting starts unexpectedly early."
    },
    {
        "id": 237,
        "category": "GENERAL_PROFESSIONALISM",
        "question": "The customer asks for weekly delivery assurance."
    },
    {
        "id": 238,
        "category": "GENERAL_PROFESSIONALISM",
        "question": "A stakeholder questions team productivity."
    },
    {
        "id": 239,
        "category": "GENERAL_PROFESSIONALISM",
        "question": "The project needs transparent communication on current risks."
    },
    {
        "id": 240,
        "category": "GENERAL_PROFESSIONALISM",
        "question": "Client asks what support will be available after deployment."
    },
    {
        "id": 241,
        "category": "ADVANCED_CORPORATE",
        "question": "A client wants the project completed with no additional budget."
    },
    {
        "id": 242,
        "category": "ADVANCED_CORPORATE",
        "question": "Competing stakeholders request contradictory outcomes."
    },
    {
        "id": 243,
        "category": "ADVANCED_CORPORATE",
        "question": "The project must comply with a newly introduced regulation."
    },
    {
        "id": 244,
        "category": "ADVANCED_CORPORATE",
        "question": "A major business dependency failed unexpectedly."
    },
    {
        "id": 245,
        "category": "ADVANCED_CORPORATE",
        "question": "Customer confidence is decreasing due to repeated delays."
    },
    {
        "id": 246,
        "category": "ADVANCED_CORPORATE",
        "question": "The executive team requests a detailed risk mitigation plan."
    },
    {
        "id": 247,
        "category": "ADVANCED_CORPORATE",
        "question": "A critical production defect impacts business revenue."
    },
    {
        "id": 248,
        "category": "ADVANCED_CORPORATE",
        "question": "The organization is planning a large-scale transformation initiative."
    },
    {
        "id": 249,
        "category": "ADVANCED_CORPORATE",
        "question": "A client requests a complete review of project governance."
    },
    {
        "id": 250,
        "category": "ADVANCED_CORPORATE",
        "question": "Business leadership wants a strategy to improve delivery reliability."
    }
]