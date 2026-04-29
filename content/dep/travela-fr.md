# Profil des éléments de données: Proactive Publication - Annual Travel, Hospitality and Conferences

_Source YAML: `travela.yaml`_

## Ressources publiées

- https://ouvert.canada.ca/data/fr/dataset/4ae27978-0931-49ab-9c17-0b119c0ba92f/resource/a811cac0-2a2a-4440-8a81-2994fc753171
- Schéma recombinant: https://ouvert.canada.ca/data/fr/recombinant-schema/travela.json


## Légende

Le tableau qui suit décrit chaque zone que vous trouverez dans le document modèle pour tous les éléments :

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Ce texte doit correspondre directement au nom de la zone dans votre modèle en anglais. |
| Nom de la zone FR | Ce texte doit correspondre directement au nom de la zone dans votre modèle en français. |
| Description EN | Brève description de l’élément en anglais. |
| Description FR | Brève description de l’élément en français. |
| Obligation | Indicates whether the element is required to always or sometimes be present<br>(i.e., contain a value). Options are:<br>- Mandatory<br>- Mandatory, conditional<br>- Optional |
| Type de format | Options are:<br>- Integer (e.g. page count, year or month number)<br>- Numeric (e.g. decimal, currency values)<br>- Text<br>- Text Array (e.g. one or more codes from a controlled list)<br>- Date (YYYY-MM-DD)<br>- Timestamp (YYYY-MM-DD hh:mm:ss) |
| Validation EN | Décrit dans quelle(s) condition(s) une valeur doit être présente en anglais. Indique le format requis des valeurs, s’il y a lieu, au niveau de chaque fichier. |
| Validation FR | Décrit dans quelle(s) condition(s) une valeur doit être présente en anglais. Indique le format requis des valeurs, s’il y a lieu, au niveau de chaque fichier. |
| Exemple de valeur | Provide one or more real examples of the values that may appear, e.g. ?CODE1? or ?Family Services Reform Program? |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| CODE1 | Description en anglais 1 | Description en français 1 |
| CODE2 | Description en anglais 2 | Description en français 2 |

## Proactive Publication - Annual Travel, Hospitality and Conferences

### 1-1 Dépenses pour l’exercice financier se terminant

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Fiscal Year Ending |
| Nom de la zone FR | Dépenses pour l’exercice financier se terminant |
| ID | year |
| Description EN | This fields shows the current fiscal reporting period’s ending (March 31, YYYY). |
| Description FR | Ce champ montre l’année de clôture de l’exercice financier en cours (31 mars AAAA). |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Integer |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 2018 |

### 1-2 Description du mandat du ministère (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Description of departmental mandate (English) |
| Nom de la zone FR | Description du mandat du ministère (anglais) |
| ID | mandate_description_en |
| Description EN | Provide a brief explanation, in English, of the department’s mandate, major programs and linkages with core laws or regulations to help readers understand the travel, hospitality and conference expenditures incurred by the department and how they support the department’s mandate, including significant structural or program changes. |
| Description FR | Décrivez brièvement, en anglais, le mandat du ministère, ses principaux programmes et les liens avec les lois ou les règlements fondamentaux afin d’aider les lecteurs à comprendre les dépenses de voyages, d’accueil et de conférences engagées par le ministère, et en quoi ces dépenses soutiennent le mandat du ministère |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | Expenditures on travel, hospitality and conference fees incurred by federal departments and agencies are related to activities that support a departmental or agency mandate and the government’s priorities. In particular, for Fisheries and Oceans Canada, this includes playing the lead role in managing Canada’s fisheries and safeguarding its waters, ensuring safe, healthy, and productive waters and aquatic ecosystems for the benefit of present and future generations. |

### 1-3 Description du mandat du ministère (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Description of departmental mandate (French) |
| Nom de la zone FR | Description du mandat du ministère (français) |
| ID | mandate_description_fr |
| Description EN | Provide a brief explanation, in French, of the department’s mandate, major programs and linkages with core laws or regulations to help readers understand the travel, hospitality and conference expenditures incurred by the department and how they support the department’s mandate, including significant structural or program changes. |
| Description FR | Décrivez brièvement, en français, le mandat du ministère, ses principaux programmes et les liens avec les lois ou les règlements fondamentaux afin d’aider les lecteurs à comprendre les dépenses de voyages, d’accueil et de conférences engagées par le ministère, et en quoi ces dépenses soutiennent le mandat du ministère |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | Les dépenses de voyage, d'accueil et de conférence engagées par les ministères et organismes fédéraux sont liées à des activités qui appuient le mandat d'un ministère ou d'un organisme et les priorités du gouvernement. En particulier, pour Pêches et Océans Canada, cela comprend le rôle de chef de file dans la gestion des pêches du Canada et la protection de ses eaux, en assurant la sécurité, la santé et la productivité des eaux et des écosystèmes aquatiques pour le bénéfice des générations actuelles et futures. |

### 1-4 Voyage ≥2018 – activités opérationnelles (Milliers de dollars)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Travel ≥2018 – Operational activities ($ thousands) |
| Nom de la zone FR | Voyage ≥2018 – activités opérationnelles (Milliers de dollars) |
| ID | operational_activities_kdollars |
| Description EN | This field shows annual expenditures for travel of public servants and non-public servants for the expenditure category – Operational activities for the current reporting fiscal year (Year Ending March 31, YYYY) in thousands of dollars |
| Description FR | Ce champ montre les dépenses annuelles de voyage de fonctionnaires et non-fonctionnaires pour la catégorie de dépenses activités opérationnelles pour l’exercice financier en cours (année se terminant le 31 mars AAAA), en milliers de dollars |
| Obligation EN | Mandatory if year ≥ 2018 |
| Obligation FR | Mandatory if year ≥ 2018 |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 400 |

### 1-5 Voyage ≥2018 – Principaux intervenants (Milliers de dollars)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Travel ≥2018 – Key stakeholders ($ thousands) |
| Nom de la zone FR | Voyage ≥2018 – Principaux intervenants (Milliers de dollars) |
| ID | key_stakeholders_kdollars |
| Description EN | This field shows annual expenditures for travel of public servants and non-public servants for the expenditure category – key stakeholders for the current reporting fiscal year (Year Ending March 31, YYYY) in thousands of dollars |
| Description FR | Ce champ montre les dépenses annuelles de voyage de -fonctionnaires et non-fonctionnaires pour la catégorie de dépenses principaux intervenants,  pour l’exercice financier en cours (année se terminant le 31 mars AAAA), en milliers de dollars |
| Obligation EN | Mandatory if year ≥ 2018 |
| Obligation FR | Mandatory if year ≥ 2018 |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 1200 |

### 1-6 Voyage ≥2018 – Formation (Milliers de dollars)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Travel ≥2018 – Training ($ thousands) |
| Nom de la zone FR | Voyage ≥2018 – Formation (Milliers de dollars) |
| ID | training_kdollars |
| Description EN | This field shows annual expenditures for travel of public servants and non-public servants for the expenditure category – Training for the current reporting fiscal year (Year Ending March 31, YYYY) in thousands of dollars |
| Description FR | Ce champ montre les dépenses annuelles de voyage de fonctionnaires et non-fonctionnaires pour la catégorie de dépenses formation, pour l’exercice financier en cours (année se terminant le 31 mars AAAA), en milliers de dollars |
| Obligation EN | Mandatory if year ≥ 2018 |
| Obligation FR | Mandatory if year ≥ 2018 |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 3400 |

### 1-7 Voyage ≥2018 – Autre (Milliers de dollars)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Travel ≥2018 – Other ($ thousands) |
| Nom de la zone FR | Voyage ≥2018 – Autre (Milliers de dollars) |
| ID | other_kdollars |
| Description EN | This field shows annual expenditures for travel of public servants and non-public servants for the expenditure category – Other for the current reporting fiscal year (Year Ending March 31, YYYY) in thousands of dollars |
| Description FR | Ce champ montre les dépenses annuelles de voyage de fonctionnaires et non-fonctionnaires pour la catégorie de dépenses autre, pour l’exercice financier en cours (année se terminant le 31 mars AAAA), en milliers de dollars |
| Obligation EN | Mandatory if year ≥ 2018 |
| Obligation FR | Mandatory if year ≥ 2018 |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 900 |

### 1-8 Voyage ≥2018 – Gouvernance interne (Milliers de dollars)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Travel ≥2018 – Internal governance ($ thousands) |
| Nom de la zone FR | Voyage ≥2018 – Gouvernance interne (Milliers de dollars) |
| ID | internal_governance_kdollars |
| Description EN | This field shows annual expenditures for travel of public servants and non-public servants for the expenditure category – Internal governance for the current reporting fiscal year (Year Ending March 31, YYYY) in thousands of dollars |
| Description FR | Ce champ montre les dépenses annuelles de voyage de fonctionnaires et non-fonctionnaires pour la catégorie de dépenses gouvernance interne, pour l’exercice financier en cours (année se terminant le 31 mars AAAA), en milliers de dollars |
| Obligation EN | Mandatory if year ≥ 2018 |
| Obligation FR | Mandatory if year ≥ 2018 |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 5800 |

### 1-9 Voyage <2018 – non-fonctionnaires (Milliers de dollars)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Travel <2018 – Non-Public Servants ($ thousands) |
| Nom de la zone FR | Voyage <2018 – non-fonctionnaires (Milliers de dollars) |
| ID | non_public_servants_kdollars |
| Description EN | This field shows annual expenditures for travel of non-public servants for the current reporting fiscal year (Year Ending March 31, YYYY) in thousands of dollars |
| Description FR | Ce champ montre les dépenses annuelles de voyage de non-fonctionnaires pour l’exercice financier en cours (année se terminant le 31 mars AAAA), en milliers de dollars |
| Obligation EN | Mandatory if year < 2018 |
| Obligation FR | Mandatory if year < 2018 |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |

### 1-10 Voyage <2018 – fonctionnaires (Milliers de dollars)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Travel <2018 – Public Servants ($ thousands) |
| Nom de la zone FR | Voyage <2018 – fonctionnaires (Milliers de dollars) |
| ID | public_servants_kdollars |
| Description EN | This field shows annual expenditures for travel of public servants for the current reporting fiscal year (Year Ending March 31, YYYY) in thousands of dollars |
| Description FR | Ce champ montre les dépenses annuelles de voyage de fonctionnaires pour l’exercice financier en cours (année se terminant le 31 mars AAAA), en milliers de dollars |
| Obligation EN | Mandatory if year < 2018 |
| Obligation FR | Mandatory if year < 2018 |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |

### 1-11 Accueil (Milliers de dollars)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Hospitality ($ thousands) |
| Nom de la zone FR | Accueil (Milliers de dollars) |
| ID | hospitality_kdollars |
| Description EN | This field shows annual expenditures for hospitality for the previous reporting fiscal year (Year Ending March 31, YYYY-1) in thousands of dollars |
| Description FR | Ce champ montre les dépenses annuelles d’accueil pour l’exercice financier précédent (année se terminant le 31 mars AAAA-1), en milliers de dollars |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 12960 |

### 1-12 Frais de participation aux conférences (Milliers de dollars)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Conference Fees ($ thousands) |
| Nom de la zone FR | Frais de participation aux conférences (Milliers de dollars) |
| ID | conference_fees_kdollars |
| Description EN | This field shows annual expenditures for conference fees for the current reporting fiscal year (Year Ending March 31, YYYY) in thousands of dollars |
| Description FR | Ce champ montre les dépenses annuelles de conférences pour l’exercice financier en cours (année se terminant le 31 mars AAAA), en milliers de dollars |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 50 |

### 1-13 Voyages internationaux du ministre et du personnel du ministre (Milliers de dollars)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | International Travel by Minister and Minister's Staff ($ thousands) |
| Nom de la zone FR | Voyages internationaux du ministre et du personnel du ministre (Milliers de dollars) |
| ID | minister_kdollars |
| Description EN | This field shows annual expenditures for international travel by Minister and Minister’s staff for the current reporting year (Year Ending March 31, YYYY) in thousands of dollars |
| Description FR | Ce champ montre les dépenses annuelles de voyage à l’étranger du ministre et de son personnel pour l’exercice financier en cours (année se terminant le 31 mars AAAA), en milliers de dollars |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 1000 |

### 1-14 Explication d’un écart important du total des dépenses de voyages (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Explanation of Significant Variance of the total travel expenditure (English) |
| Nom de la zone FR | Explication d’un écart important du total des dépenses de voyages (anglais) |
| ID | travel_compared_fiscal_year_en |
| Description EN | Provide a brief explanation, in English, of the significant reason(s) for the increase/decrease in annual expenditures for travel of public servants and non-public servants. |
| Description FR | Expliquez brièvement, en anglais, la ou les raisons significatives de l’augmentation ou de la diminution des dépenses annuelles de voyage pour les fonctionnaires et non-fonctionnaires. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | compared with fiscal year YYYY–YY, departmental travel expenditures [increased/decreased] mainly due to [briefly explain the main reason(s) for the increase or decrease]. |

### 1-15 Explication d’un écart important du total des dépenses de voyages (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Explanation of Significant Variance of the total travel expenditure (French) |
| Nom de la zone FR | Explication d’un écart important du total des dépenses de voyages (français) |
| ID | travel_compared_fiscal_year_fr |
| Description EN | Provide a brief explanation, in French, of the significant reason(s) for the increase/decrease in annual expenditures for travel of public servants and non-public servants. |
| Description FR | Expliquez brièvement, en français, la ou les raisons significatives de l’augmentation ou de la diminution des dépenses annuelles de voyage pour les fonctionnaires et non-fonctionnaires. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Comparativement à l’exercice AAAA-AAAA, les dépenses de voyages du ministère ont [augmenté/diminué] principalement en raison de [expliquez brièvement la ou les raisons principales de l’augmentation ou de la diminution des dépenses]. |

### 1-16 Accueil - Explication d’un écart important (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Hospitality - Explanation of Significant Variance (English) |
| Nom de la zone FR | Accueil - Explication d’un écart important (anglais) |
| ID | hospitality_compared_fiscal_year_en |
| Description EN | Provide a brief explanation, in English, of the significant reason(s) for the increase/decrease in annual expenditures for hospitality. |
| Description FR | Expliquez brièvement, en anglais, la ou les raisons significatives de l’augmentation ou de la diminution des dépenses annuelles d’accueil. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | compared with fiscal year YYYY–YY, departmental hospitality expenditures [increased/decreased] mainly due to [briefly explain the main reason(s) for the increase or decrease]. |

### 1-17 Accueil - Explication d’un écart important (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Hospitality - Explanation of Significant Variance (French) |
| Nom de la zone FR | Accueil - Explication d’un écart important (français) |
| ID | hospitality_compared_fiscal_year_fr |
| Description EN | Provide a brief explanation, in French, of the significant reason(s) for the increase/decrease in annual expenditures for hospitality. |
| Description FR | Expliquez brièvement, en français, la ou les raisons significatives de l’augmentation ou de la diminution des dépenses annuelles d’accueil. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Comparativement à l’exercice AAAA-AAAA, les dépenses d’accueil du ministère ont [augmenté/diminué] principalement en raison de [expliquez brièvement la ou les raisons principales de l’augmentation ou de la diminution des dépenses]. |

### 1-18 Frais de participation aux conférences - Explication d’un écart important (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Conference Fees - Explanation of Significant Variance (English) |
| Nom de la zone FR | Frais de participation aux conférences - Explication d’un écart important (anglais) |
| ID | conference_fees_compared_fiscal_year_en |
| Description EN | Provide a brief explanation, in English, of the significant reason(s) for the increase/decrease in annual expenditures for conference fees. |
| Description FR | Expliquez brièvement, en anglais, la ou les raisons significatives de l’augmentation ou de la diminution des dépenses annuelles de conférences. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |

### 1-19 Frais de participation aux conférences - Explication d’un écart important (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Conference Fees - Explanation of Significant Variance (French) |
| Nom de la zone FR | Frais de participation aux conférences - Explication d’un écart important (français) |
| ID | conference_fees_compared_fiscal_year_fr |
| Description EN | Provide a brief explanation, in French, of the significant reason(s) for the increase/decrease in annual expenditures for conference fees. |
| Description FR | Expliquez brièvement, en français, la ou les raisons significatives de l’augmentation ou de la diminution des dépenses annuelles de conférences |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |

### 1-20 Voyages internationaux du ministre et du personnel du ministre - Explication d’un écart important (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | International Travel by Minister and Minister’s Staff - Explanation of Significant Variance (English) |
| Nom de la zone FR | Voyages internationaux du ministre et du personnel du ministre - Explication d’un écart important (anglais) |
| ID | minister_compared_fiscal_year_en |
| Description EN | Provide a brief explanation, in English, of the significant reason(s) for the increase/decrease in annual expenditures for international travel by the minister and minister's staff. |
| Description FR | Expliquez brièvement, en anglais, la ou les raisons significatives de l’augmentation ou de la diminution des dépenses annuelles de voyage à l’étranger pour le ministre et son personnel. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | compared with fiscal year YYYY–YY, departmental expenditures for international travel by the Minister and the Minister’s exempt staff [increased/decreased] mainly due to [briefly explain the main reason(s) for the increase or decrease]. |

### 1-21 Voyages internationaux du ministre et du personnel du ministre - Explication d’un écart important (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | International Travel by Minister and Minister’s Staff - Explanation of Significant Variance (French) |
| Nom de la zone FR | Voyages internationaux du ministre et du personnel du ministre - Explication d’un écart important (français) |
| ID | minister_compared_fiscal_year_fr |
| Description EN | Provide a brief explanation, in French, of the significant reason(s) for the increase/decrease in annual expenditures for international travel by the minister and minister's staff. |
| Description FR | Expliquez brièvement, en français, la ou les raisons significatives de l’augmentation ou de la diminution des dépenses annuelles de voyage à l’étranger pour le ministre et son personnel. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Comparativement à l’exercice AAAA-AAAA, les dépenses ministérielles liées aux voyages internationaux du ministre et de son personnel exempté ont [augmenté/diminué] principalement en raison de [expliquez brièvement la ou les raisons principales de l’augmentation ou de la diminution des dépenses]. |


---
