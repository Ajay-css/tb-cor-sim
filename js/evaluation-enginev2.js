const EvaluationEngineV2 = {

    getScenarioType(scenario) {

        if (!scenario)
            return "GENERAL";

        const text =
            scenario.toLowerCase();

        if (
            text.includes("status") ||
            text.includes("progress") ||
            text.includes("project")
        ) {
            return "PROJECT_UPDATE";
        }

        if (
            text.includes("crash") ||
            text.includes("incident") ||
            text.includes("bug") ||
            text.includes("production")
        ) {
            return "INCIDENT";
        }

        if (
            text.includes("unhappy") ||
            text.includes("complaint") ||
            text.includes("escalation")
        ) {
            return "ESCALATION";
        }

        if (
            text.includes("resigned") ||
            text.includes("resource")
        ) {
            return "RESOURCE_ISSUE";
        }

        if (
            text.includes("leader") ||
            text.includes("leadership")
        ) {
            return "LEADERSHIP";
        }

        return "GENERAL";
    },



    containsAny(text, words) {

        return words.some(
            word =>
                text.includes(word)
        );

    },



    evaluate(response, scenario) {

        const text =
            (response || "")
                .toLowerCase()
                .trim();

        const scenarioType =
            this.getScenarioType(
                scenario
            );

        let score = 0;

        const strengths = [];

        const improvements = [];



        const breakdown = {

            relevance: 0,

            ownership: 0,

            actionPlan: 0,

            timeline: 0,

            professionalism: 0,

            clarity: 0,

            confidence: 0,

            empathy: 0,

            leadership: 0,

            riskAwareness: 0,

            stakeholderCommunication: 0,

            scenarioSpecific: 0

        };



        if (
            !text ||
            text === "[no response submitted]"
        ) {

            return {

                score: 0,

                rating:
                    "Needs Improvement",

                strengths: [],

                improvements: [

                    "No response was provided."

                ],

                scenarioType,

                breakdown

            };

        }



        // ======================
        // PROFESSIONAL STRUCTURE
        // ======================

        const greetingWords = [

            "hi",
            "hello",
            "dear",
            "good morning",
            "good afternoon"

        ];



        const closingWords = [

            "regards",
            "thanks",
            "thank you",
            "best regards"

        ];



        if (

            this.containsAny(
                text,
                greetingWords
            )

        ) {

            breakdown.professionalism += 5;

            strengths.push(
                "Professional opening"
            );

        }
        else {

            improvements.push(
                "Add a professional opening."
            );

        }



        if (

            this.containsAny(
                text,
                closingWords
            )

        ) {

            breakdown.professionalism += 5;

            strengths.push(
                "Professional closing"
            );

        }
        else {

            improvements.push(
                "Add a professional closing."
            );

        }



        // ======================
        // OWNERSHIP
        // ======================

        const ownershipWords = [

            "we will",
            "our team",
            "we have",
            "we are",
            "identified",
            "investigating",
            "addressing",
            "resolved"

        ];



        if (

            this.containsAny(
                text,
                ownershipWords
            )

        ) {

            breakdown.ownership = 15;

            strengths.push(
                "Ownership demonstrated"
            );

        }
        else {

            improvements.push(
                "Show stronger ownership of the situation."
            );

        }



        // ======================
        // ACTION PLAN
        // ======================

        const actionWords = [

            "action plan",
            "next step",
            "plan",
            "mitigation",
            "follow up",
            "review",
            "investigate",
            "resolve"

        ];



        const actionCount =

            actionWords.filter(
                word =>
                    text.includes(word)
            )
                .length;



        if (
            actionCount >= 2
        ) {

            breakdown.actionPlan = 15;

            strengths.push(
                "Clear action plan"
            );

        }
        else {

            breakdown.actionPlan = 8;

            improvements.push(
                "Provide stronger next steps and an action plan."
            );

        }



        // ======================
        // TIMELINE
        // ======================

        const timelineWords = [

            "today",
            "tomorrow",
            "friday",
            "monday",
            "next week",
            "this week",
            "deadline",
            "eta",
            "24 hours",
            "48 hours"

        ];



        if (

            this.containsAny(
                text,
                timelineWords
            )

        ) {

            breakdown.timeline = 10;

            strengths.push(
                "Timeline mentioned"
            );

        }
        else {

            improvements.push(
                "Provide a delivery estimate or timeline."
            );

        }



        // ======================
        // CONFIDENCE
        // ======================

        const confidenceWords = [

            "on track",
            "confirmed",
            "planned",
            "scheduled",
            "ready",
            "ensured"

        ];



        if (

            this.containsAny(
                text,
                confidenceWords
            )

        ) {

            breakdown.confidence = 5;

            strengths.push(
                "Confident communication"
            );

        }

        // ======================
        // EMPATHY
        // ======================

        const empathyWords = [

            "sorry",

            "apologize",

            "understand",

            "concern",

            "appreciate",

            "inconvenience"

        ];

        if (

            this.containsAny(
                text,
                empathyWords
            )

        ) {

            breakdown.empathy = 10;

            strengths.push(
                "Empathy demonstrated"
            );

        }

        // ======================
        // LEADERSHIP
        // ======================

        const leadershipWords = [

            "decision",

            "alignment",

            "guide",

            "direction",

            "lead",

            "collaboration",

            "motivate"

        ];

        if (

            this.containsAny(
                text,
                leadershipWords
            )

        ) {

            breakdown.leadership = 10;

            strengths.push(
                "Leadership behaviour demonstrated"
            );

        }

        // ======================
        // RISK AWARENESS
        // ======================

        const riskWords = [

            "risk",

            "mitigation",

            "impact",

            "monitor",

            "contingency",

            "backup"

        ];

        if (

            this.containsAny(
                text,
                riskWords
            )

        ) {

            breakdown.riskAwareness = 10;

            strengths.push(
                "Risk awareness demonstrated"
            );

        }

        // ======================
        // STAKEHOLDER FOCUS
        // ======================

        const stakeholderWords = [

            "stakeholder",

            "client",

            "customer",

            "communication",

            "update",

            "inform"

        ];

        if (

            this.containsAny(
                text,
                stakeholderWords
            )

        ) {

            breakdown.stakeholderCommunication = 5;

            strengths.push(
                "Stakeholder communication considered"
            );

        }


        // ======================
        // CLARITY
        // ======================

        const vagueWords = [

            "all good",
            "working on it",
            "fine",
            "okay",
            "ongoing",
            "soon",
            "will update"

        ];



        if (

            this.containsAny(
                text,
                vagueWords
            )

        ) {

            improvements.push(
                "Avoid vague statements and provide concrete details."
            );

        }
        else {

            breakdown.clarity = 10;

            strengths.push(
                "Clear communication"
            );

        }



        // ======================
        // LENGTH
        // ======================

        if (
            response.length > 80
        ) {

            breakdown.relevance += 5;

            strengths.push(
                "Sufficient detail provided"
            );

        }
        else {

            improvements.push(
                "Expand the response with more meaningful details."
            );

        }



        // ======================
        // SCENARIO SPECIFIC
        // ======================

        let keywords = [];



        switch (
        scenarioType
        ) {

            case "PROJECT_UPDATE":

                keywords = [

                    "progress",
                    "testing",
                    "development",
                    "completed",
                    "delivery"

                ];

                break;



            case "INCIDENT":

                keywords = [

                    "issue",
                    "impact",
                    "eta",
                    "resolution",
                    "root cause"

                ];

                if (

                    !this.containsAny(
                        text,
                        [
                            "impact",
                            "eta",
                            "mitigation"
                        ]
                    )

                ) {

                    improvements.push(
                        "Explain customer impact, mitigation actions and estimated resolution timeline."
                    );

                }

                break;



            case "ESCALATION":

                keywords = [

                    "sorry",
                    "apologize",
                    "understand",
                    "support",
                    "resolve"

                ];

                if (

                    !this.containsAny(
                        text,
                        [
                            "sorry",
                            "apologize",
                            "understand"
                        ]
                    )

                ) {

                    improvements.push(
                        "Acknowledge the customer's concern before presenting solutions."
                    );

                }

                break;



            case "RESOURCE_ISSUE":

                keywords = [

                    "backup",
                    "resource",
                    "reassign",
                    "plan",
                    "delivery"

                ];

                break;



            case "LEADERSHIP":

                keywords = [

                    "decision",
                    "direction",
                    "ownership",
                    "guidance",
                    "team"

                ];

                if (

                    !this.containsAny(
                        text,
                        [
                            "team",
                            "decision",
                            "direction"
                        ]
                    )

                ) {

                    improvements.push(
                        "Provide stronger leadership direction and team guidance."
                    );

                }

                break;

        }



        let matchCount = 0;

        keywords.forEach(word => {

            if (
                text.includes(word)
            ) {

                matchCount++;

            }

        });



        breakdown.scenarioSpecific =

            Math.min(
                matchCount * 5,
                15
            );



        if (
            matchCount >= 2
        ) {

            strengths.push(
                "Scenario relevant response"
            );

        }
        else {

            improvements.push(
                "Address the core business problem more directly."
            );

        }



        // ======================
        // FINAL SCORE
        // ======================

        score =

            breakdown.relevance +

            breakdown.ownership +

            breakdown.actionPlan +

            breakdown.timeline +

            breakdown.professionalism +

            breakdown.clarity +

            breakdown.confidence +

            breakdown.empathy +

            breakdown.leadership +

            breakdown.riskAwareness +

            breakdown.stakeholderCommunication +

            breakdown.scenarioSpecific;


        score = Math.max(
            0,
            Math.min(
                100,
                score
            )
        );



        let rating =
            "Needs Improvement";



        if (
            score >= 95
        ) {

            rating =
                "Excellent";

        }
        else if (
            score >= 80
        ) {

            rating =
                "Good";

        }
        else if (
            score >= 65
        ) {

            rating =
                "Average";

        }



        return {

            score,

            rating,

            strengths,

            improvements,

            scenarioType,

            breakdown

        };

    }

};