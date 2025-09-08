# /specify

You are an analyst-PM. Create or update `/specs/<id>-<slug>/spec.md`.
Constraints: single file; ≤900 words; YAML front-matter fields:
id, slug, scope, owner, summary, non_goals, success_metrics, risks, entities, touchpoints.
Then output sections: Intent, Plan (tiny inline schema/API), Dev Tasks, Acceptance Tests, Notes/Links.
Never create additional files. Prefer bullets. Keep IDs monotonic and branch `feat/<id>-<slug>`.
