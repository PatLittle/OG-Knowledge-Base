# Organization schema

Source: `https://open.canada.ca/data/api/action/scheming_organization_schema_show?type=organization`

If **Form snippet** is empty, this field is **API only**.

## Organization fields (10)

| Field | Label | Help text | Required | Form snippet | Preset | Validators | Notes |
|---|---|---|---|---|---|---|---|
| title_translated | Title | Title for the organization. Should be an applied title if one exists. | Yes | fluent_text.html |  | fluent_text unicode_safe scheming_required canada_org_title_translated_save |  |
| shortform | Abbreviation | Consult registry of applied titles to find the abbreviation | Yes | fluent_text.html |  | fluent_text scheming_required |  |
| name | URL | The department identifier used for linking to the department e.g. "tbs-sct" is used to create URL https://registry.open.canada.ca/en/organization/tbs-sct. If the department has a common abbreviation for both English and French languages then use it once, e.g. for "statcan" the URL is created as https://registry.open.canada.ca/en/organization/statcan | Yes | API only |  | not_empty unicode_only name_validator group_name_validator |  |
| department_number | Department number |  | No | API only |  |  |  |
| umd_number | UMD Number |  | No | API only |  |  |  |
| faa_schedule | Financial Administration Act Schedule | The FAA Schedule that applies to the organization. More details on https://laws-lois.justice.gc.ca/eng/acts/f-11/ | Yes | radio.html |  | scheming_required scheming_choices | choices=5 |
| reporting_requirements | Select reporting requirements for the organization |  | No | multiple_checkbox.html |  | scheming_required scheming_multiple_choice protect_reporting_requirements ati_email_validate | choices=13 |
| ati_email | ATI Email | The email for access to information completed request summaries | No | API only |  | scheming_required email_validator |  |
| opengov_email | Open government Email | The email for open government | No | API only |  | scheming_required email_validator |  |
| registry_access | Access to the Registry | The organization will be accessing the Registry through a public or internal (Government of Canada) network | Yes | radio.html |  | protect_registry_access scheming_required scheming_choices | choices=2 |

## Controlled value lists

### `faa_schedule` (Organization fields)

| Value | Label (EN) | Label (FR) |
|---|---|---|
| NA | Not applicable | Non applicable |
| 1 | Schedule I | Annexe I |
| 1.1 | Schedule I.1 | Annexe I.1 |
| 2 | Schedule II | Annexe II |
| 3 | Schedule III | Annexe III |

### `reporting_requirements` (Organization fields)

| Value | Label (EN) | Label (FR) |
|---|---|---|
| wrongdoing | Acts of Founded Wrongdoing | Dossiers sur les actes répréhensibles fondés |
| contractsa | Aggregated Contracts from -$10K to $10K | Contrats agrégés de -10 000$ à 10 000$ |
| ati | ATI Summaries | Accès à l'information sommaires complétés |
| briefingt | Briefing Note Titles and Numbers | Titres et numéros des notes d'information |
| contracts | Contracts over 10K | Contrats attribués de plus de 10 000 $ |
| dac | Departmental Audit Committee | Comités ministériels d'audit |
| grants | Grants and Contributions | Subventions et les contributions |
| hospitalityq | Hospitality Expenses | Dépenses d'accueil |
| reclassification | Position Reclassification | Reclassifications de postes |
| qpnotes | Question Period Notes | Notes pour la période des questions |
| travelq | Travel Expenses | Dépenses de voyage |
| travela | Annual Travel, Hospitality and Conferences | Dépenses annuelles de voyages, d'accueil, de conférences et d'événements |
| adminaircraft | Use of Administrative Aircraft | Utilisation des avions d'affaires |

### `registry_access` (Organization fields)

| Value | Label (EN) | Label (FR) |
|---|---|---|
| public | Public network | Réseau public |
| internal | Internal (Government of Canada) network | Réseau interne (gouvernement du Canada) |

