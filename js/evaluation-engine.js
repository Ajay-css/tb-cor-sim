const EvaluationEngine = {

    getScenarioType(scenario) {

        if (
            !scenario ||
            typeof scenario !== "string"
        ) {
            return "GENERAL";
        }

        const text =
            scenario.toLowerCase();

        if (
            text.includes("status") ||
            text.includes("project")
        ) {
            return "PROJECT_UPDATE";
        }

        if (
            text.includes("bug") ||
            text.includes("crash") ||
            text.includes("production")
        ) {
            return "INCIDENT";
        }

        if (
            text.includes("client") &&
            text.includes("unhappy")
        ) {
            return "ESCALATION";
        }

        if (
            text.includes("resigned")
        ) {
            return "RESOURCE_ISSUE";
        }

        return "GENERAL";
    },

    containsAny(text, words) {

        return words.some(
            word =>
                text.includes(word)
        );

    },

    containsTimeline(text) {

        const timelineWords = [

            "today",
            "tomorrow",
            "this week",
            "next week",
            "friday",
            "monday",
            "deadline",
            "eta",
            "48 hours",
            "24 hours"

        ];

        return this.containsAny(
            text,
            timelineWords
        );

    },

    containsOwnership(text) {

        const ownershipWords = [

            "we will",
            "our team",
            "we have",
            "we are",
            "identified",
            "investigating",
            "resolved",
            "addressing"

        ];

        return this.containsAny(
            text,
            ownershipWords
        );

    },

    isVague(text) {

        const vagueWords = [

            "all good",

            "working on it",

            "in progress",

            "fine",

            "okay",

            "soon",

            "ongoing",

            "will update"

        ];

        return this.containsAny(
            text,
            vagueWords
        );

    },

    evaluate(response, scenario) {

        const text =
            (response || "")
                .toLowerCase()
                .trim();

        let score = 0;

        const feedback = [];

        const strengths = [];

        const scenarioType =
            this.getScenarioType(
                scenario
            );



        // EMPTY RESPONSE

        if (
            !text ||
            text === "[no response submitted]"
        ) {

            return {

                score: 0,

                rating: "Poor",

                feedback: [
                    "No response was provided."
                ],

                strengths: [],

                scenarioType

            };

        }



        // ==========================
        // PROJECT UPDATE RULES
        // ==========================

        if (
            scenarioType ===
            "PROJECT_UPDATE"
        ) {

            const required = [

                "completed",
                "progress",
                "testing",
                "delivery",
                "timeline"

            ];

            let found = 0;

            required.forEach(word => {

                if (
                    text.includes(word)
                ) {

                    found++;

                }

            });

            score +=
                found * 5;

            if (
                found >= 2
            ) {

                strengths.push(
                    "Clear Project Progress"
                );

            }
            else {

                feedback.push(
                    "Project update lacks progress details."
                );

            }

        }



        // ==========================
        // INCIDENT RULES
        // ==========================

        if (
            scenarioType ===
            "INCIDENT"
        ) {

            const required = [

                "investigating",
                "issue",
                "resolved",
                "resolution",
                "eta",
                "root cause"

            ];

            let found = 0;

            required.forEach(word => {

                if (
                    text.includes(word)
                ) {

                    found++;

                }

            });

            score +=
                found * 5;

            if (
                found >= 2
            ) {

                strengths.push(
                    "Strong Incident Handling"
                );

            }
            else {

                feedback.push(
                    "Incident response lacks action plan."
                );

            }

        }



        // ==========================
        // ESCALATION RULES
        // ==========================

        if (
            scenarioType ===
            "ESCALATION"
        ) {

            const required = [

                "sorry",
                "apologize",
                "understand",
                "resolve",
                "support"

            ];

            let found = 0;

            required.forEach(word => {

                if (
                    text.includes(word)
                ) {

                    found++;

                }

            });

            score +=
                found * 5;

            if (
                found >= 2
            ) {

                strengths.push(
                    "Customer Empathy"
                );

            }
            else {

                feedback.push(
                    "Escalation response lacks empathy."
                );

            }

        }



        // ==========================
        // RESOURCE ISSUE RULES
        // ==========================

        if (
            scenarioType ===
            "RESOURCE_ISSUE"
        ) {

            const required = [

                "backup",
                "resource",
                "reassign",
                "plan",
                "delivery"

            ];

            let found = 0;

            required.forEach(word => {

                if (
                    text.includes(word)
                ) {

                    found++;

                }

            });

            score +=
                found * 5;

            if (
                found >= 2
            ) {

                strengths.push(
                    "Resource Planning"
                );

            }
            else {

                feedback.push(
                    "Resource management plan missing."
                );

            }

        }



        // ==========================
        // PROFESSIONAL GREETING
        // ==========================

        const greetings = [

            "hi",
            "hello",
            "good morning",
            "good afternoon",
            "dear"

        ];

        if (

            greetings.some(
                word =>
                    text.includes(word)
            )

        ) {

            score += 10;

            strengths.push(
                "Professional Greeting"
            );

        }
        else {

            feedback.push(
                "Professional greeting missing."
            );

        }



        // ==========================
        // OWNERSHIP
        // ==========================

        const ownershipWords = [

            "we will",
            "our team",
            "we have",
            "currently",
            "working on",
            "identified",
            "resolved",
            "investigating",
            "addressing"

        ];

        if (

            ownershipWords.some(
                word =>
                    text.includes(word)
            )

        ) {

            score += 20;

            strengths.push(
                "Ownership Demonstrated"
            );

        }
        else {

            feedback.push(
                "Response lacks ownership."
            );

        }



        // ==========================
        // TIMELINE
        // ==========================

        const timelineWords = [

            "today",
            "tomorrow",
            "this week",
            "next week",
            "friday",
            "monday",
            "deadline",
            "delivery",
            "eta",
            "by end of"

        ];

        if (

            timelineWords.some(
                word =>
                    text.includes(word)
            )

        ) {

            score += 20;

            strengths.push(
                "Timeline Mentioned"
            );

        }
        else {

            feedback.push(
                "No delivery timeline mentioned."
            );

        }



        // ==========================
        // PROGRESS
        // ==========================

        const progressWords = [

            "%",
            "completed",
            "progress",
            "development",
            "testing",
            "phase",
            "done",
            "finished"

        ];

        if (

            progressWords.some(
                word =>
                    text.includes(word)
            )

        ) {

            score += 20;

            strengths.push(
                "Progress Details Included"
            );

        }
        else {

            feedback.push(
                "Progress status is unclear."
            );

        }



        // ==========================
        // CONFIDENCE
        // ==========================

        const confidenceWords = [

            "confirmed",
            "on track",
            "planned",
            "scheduled",
            "ready",
            "ensured"

        ];

        if (

            confidenceWords.some(
                word =>
                    text.includes(word)
            )

        ) {

            score += 10;

            strengths.push(
                "Confident Communication"
            );

        }



        // ==========================
        // LENGTH
        // ==========================

        if (
            response.length > 80
        ) {

            score += 10;

            strengths.push(
                "Well Structured Response"
            );

        }
        else {

            feedback.push(
                "Response is too short."
            );

        }



        // ==========================
        // VAGUE RESPONSES
        // ==========================

        const vaguePatterns = [

            "project is going well",
            "all good",
            "working on it",
            "in progress",
            "doing fine",
            "it is okay",
            "will update soon",
            "ongoing"

        ];

        if (

            vaguePatterns.some(
                value =>
                    text.includes(value)
            )

        ) {

            score -= 25;

            feedback.push(
                "Response is vague and lacks actionable information."
            );

        }



        // ==========================
        // SCORE LIMIT
        // ==========================

        if (
            score < 0
        ) {
            score = 0;
        }

        if (
            score > 100
        ) {
            score = 100;
        }



        // ==========================
        // RATING
        // ==========================

        let rating = "Poor";

        if (
            score >= 85
        ) {

            rating =
                "Excellent";

        }
        else if (
            score >= 70
        ) {

            rating =
                "Good";

        }
        else if (
            score >= 50
        ) {

            rating =
                "Average";

        }



        return {

            score,

            rating,

            feedback,

            strengths,

            scenarioType

        };

    }

};