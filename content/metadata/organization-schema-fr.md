# Schéma Organisation

Source: `https://open.canada.ca/data/api/action/scheming_organization_schema_show?type=organization`

Si **Extrait de formulaire** est vide, ce champ est **API seulement**.

## Champs d'organisation (10)

| Champ | Étiquette | Texte d’aide | Obligatoire | Extrait de formulaire | Preset | Validateurs | Notes |
|---|---|---|---|---|---|---|---|
| title_translated | Titre | Titre de l'organisation. Devrait être un titre appliqué s'il en existe un. | Oui | fluent_text.html |  | fluent_text unicode_safe scheming_required canada_org_title_translated_save |  |
| shortform | Abréviation | Consultez le registre des titres d'usage pour trouver l'abréviation | Oui | fluent_text.html |  | fluent_text scheming_required |  |
| name | URL | L'identifiant du département utilisé pour établir un lien avec le département, par ex. "tbs-sct" est utilisé pour créer l'URL https://registry.open.canada.ca/en/organization/tbs-sct. Si le ministère a une abréviation commune pour l'anglais et le français langues puis l'utiliser une fois, par ex. pour "statcan", l'URL est créée sous la forme https://registry.open.canada.ca/en/organization/statcan | Oui | API seulement |  | not_empty unicode_only name_validator group_name_validator |  |
| department_number | Numéro de ministère |  | Non | API seulement |  |  |  |
| umd_number | Numéro de UMD |  | Non | API seulement |  |  |  |
| faa_schedule | Annex de la loi sur la gestion des finances publiques | L'annexe de la FAA qui s'applique à l'organisation. Plus de détails sur https://laws-lois.justice.gc.ca/fra/lois/f-11/ | Oui | radio.html |  | scheming_required scheming_choices | choices=5 |
| reporting_requirements | Sélectionner les exigences en matière de rapports pour l'organisation |  | Non | multiple_checkbox.html |  | scheming_required scheming_multiple_choice protect_reporting_requirements ati_email_validate | choices=13 |
| ati_email | Courriel - Demande d'accès à l'information | Courriel de la accès à l’information sommaires de demandes complétées | Non | API seulement |  | scheming_required email_validator |  |
| opengov_email | Courriel - Gouvernement ouvert | Courriel de la gouvernement ouvert | Non | API seulement |  | scheming_required email_validator |  |
| registry_access | Accès au Registre | L’organisation accédera au Registre par l’entremise d’un réseau public ou interne (gouvernement du Canada) | Oui | radio.html |  | protect_registry_access scheming_required scheming_choices | choices=2 |

## Listes de valeurs contrôlées

### `faa_schedule` (Champs d'organisation)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| NA | Not applicable | Non applicable |
| 1 | Schedule I | Annexe I |
| 1.1 | Schedule I.1 | Annexe I.1 |
| 2 | Schedule II | Annexe II |
| 3 | Schedule III | Annexe III |

### `reporting_requirements` (Champs d'organisation)

| Valeur | Étiquette (EN) | Étiquette (FR) |
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

### `registry_access` (Champs d'organisation)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| public | Public network | Réseau public |
| internal | Internal (Government of Canada) network | Réseau interne (gouvernement du Canada) |

