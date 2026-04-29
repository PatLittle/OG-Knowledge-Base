# Data Element Profile: Proactive Publication - Annual Travel, Hospitality and Conferences

_Source YAML: `travela.yaml`_


## [Table of Contents](#table-of-contents)

- [Published resources](#published-resources)
- [Legend](#legend)
- [Annual Expenditures on Travel, Hospitality and Conferences](#annual-expenditures-on-travel-hospitality-and-conferences)

## [Published resources](#published-resources)

- [Annual Expenditures on Travel, Hospitality and Conferences](https://open.canada.ca/data/dataset/4ae27978-0931-49ab-9c17-0b119c0ba92f/resource/a811cac0-2a2a-4440-8a81-2994fc753171)
- Recombinant schema: https://open.canada.ca/data/en/recombinant-schema/travela.json


## [Legend](#legend)

<details>
<summary>Show legend</summary>


The following sample table provides a description of each field you will see for all elements:

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | This text should correspond directly with the field name in your template in English |
| Field Name FR | This text should correspond directly with the field name in your template in French |
| Description EN | This provides a brief description of the element in English |
| Description FR | This provides a brief description of the element in French |
| Obligation | Indicates whether the element is required to always or sometimes be present<br>(i.e., contain a value). Options are:<br>- Mandatory<br>- Mandatory, conditional<br>- Optional |
| Format Type | Options are:<br>- Integer (e.g. page count, year or month number)<br>- Numeric (e.g. decimal, currency values)<br>- Text<br>- Text Array (e.g. one or more codes from a controlled list)<br>- Date (YYYY-MM-DD)<br>- Timestamp (YYYY-MM-DD hh:mm:ss) |
| Validation EN | Describes the condition or conditions according to which a value shall be present in English.<br>Indicates what the system will accept in this field. |
| Validation FR | Describes the condition or conditions according to which a value shall be present in French.<br>Indicates what the system will accept in this field. |
| Example Value | Provide one or more real examples of the values that may appear, e.g. ?CODE1? or ?Family Services Reform Program? |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| CODE1 | English Description 1 | French Description 1 |
| CODE2 | English Description 2 | French Description 2 |


</details>

## [Annual Expenditures on Travel, Hospitality and Conferences](#annual-expenditures-on-travel-hospitality-and-conferences)

### 1-1 Fiscal Year Ending

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Fiscal Year Ending |
| Field Name FR | Dépenses pour l’exercice financier se terminant |
| ID | year |
| Description EN | This fields shows the current fiscal reporting period’s ending (March 31, YYYY). |
| Description FR | Ce champ montre l’année de clôture de l’exercice financier en cours (31 mars AAAA). |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN |   |
| Validation FR |   |
| Example Value | 2018 |

### 1-2 Description of departmental mandate (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Description of departmental mandate (English) |
| Field Name FR | Description du mandat du ministère (anglais) |
| ID | mandate_description_en |
| Description EN | Provide a brief explanation, in English, of the department’s mandate, major programs and linkages with core laws or regulations to help readers understand the travel, hospitality and conference expenditures incurred by the department and how they support the department’s mandate, including significant structural or program changes. |
| Description FR | Décrivez brièvement, en anglais, le mandat du ministère, ses principaux programmes et les liens avec les lois ou les règlements fondamentaux afin d’aider les lecteurs à comprendre les dépenses de voyages, d’accueil et de conférences engagées par le ministère, et en quoi ces dépenses soutiennent le mandat du ministère |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Expenditures on travel, hospitality and conference fees incurred by federal departments and agencies are related to activities that support a departmental or agency mandate and the government’s priorities. In particular, for Fisheries and Oceans Canada, this includes playing the lead role in managing Canada’s fisheries and safeguarding its waters, ensuring safe, healthy, and productive waters and aquatic ecosystems for the benefit of present and future generations. |

### 1-3 Description of departmental mandate (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Description of departmental mandate (French) |
| Field Name FR | Description du mandat du ministère (français) |
| ID | mandate_description_fr |
| Description EN | Provide a brief explanation, in French, of the department’s mandate, major programs and linkages with core laws or regulations to help readers understand the travel, hospitality and conference expenditures incurred by the department and how they support the department’s mandate, including significant structural or program changes. |
| Description FR | Décrivez brièvement, en français, le mandat du ministère, ses principaux programmes et les liens avec les lois ou les règlements fondamentaux afin d’aider les lecteurs à comprendre les dépenses de voyages, d’accueil et de conférences engagées par le ministère, et en quoi ces dépenses soutiennent le mandat du ministère |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Les dépenses de voyage, d'accueil et de conférence engagées par les ministères et organismes fédéraux sont liées à des activités qui appuient le mandat d'un ministère ou d'un organisme et les priorités du gouvernement. En particulier, pour Pêches et Océans Canada, cela comprend le rôle de chef de file dans la gestion des pêches du Canada et la protection de ses eaux, en assurant la sécurité, la santé et la productivité des eaux et des écosystèmes aquatiques pour le bénéfice des générations actuelles et futures. |

### 1-4 Travel ≥2018 – Operational activities ($ thousands)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Travel ≥2018 – Operational activities ($ thousands) |
| Field Name FR | Voyage ≥2018 – activités opérationnelles (Milliers de dollars) |
| ID | operational_activities_kdollars |
| Description EN | This field shows annual expenditures for travel of public servants and non-public servants for the expenditure category – Operational activities for the current reporting fiscal year (Year Ending March 31, YYYY) in thousands of dollars |
| Description FR | Ce champ montre les dépenses annuelles de voyage de fonctionnaires et non-fonctionnaires pour la catégorie de dépenses activités opérationnelles pour l’exercice financier en cours (année se terminant le 31 mars AAAA), en milliers de dollars |
| Obligation EN | Mandatory if year ≥ 2018 |
| Obligation FR | Mandatory if year ≥ 2018 |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 400 |

### 1-5 Travel ≥2018 – Key stakeholders ($ thousands)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Travel ≥2018 – Key stakeholders ($ thousands) |
| Field Name FR | Voyage ≥2018 – Principaux intervenants (Milliers de dollars) |
| ID | key_stakeholders_kdollars |
| Description EN | This field shows annual expenditures for travel of public servants and non-public servants for the expenditure category – key stakeholders for the current reporting fiscal year (Year Ending March 31, YYYY) in thousands of dollars |
| Description FR | Ce champ montre les dépenses annuelles de voyage de -fonctionnaires et non-fonctionnaires pour la catégorie de dépenses principaux intervenants,  pour l’exercice financier en cours (année se terminant le 31 mars AAAA), en milliers de dollars |
| Obligation EN | Mandatory if year ≥ 2018 |
| Obligation FR | Mandatory if year ≥ 2018 |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 1200 |

### 1-6 Travel ≥2018 – Training ($ thousands)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Travel ≥2018 – Training ($ thousands) |
| Field Name FR | Voyage ≥2018 – Formation (Milliers de dollars) |
| ID | training_kdollars |
| Description EN | This field shows annual expenditures for travel of public servants and non-public servants for the expenditure category – Training for the current reporting fiscal year (Year Ending March 31, YYYY) in thousands of dollars |
| Description FR | Ce champ montre les dépenses annuelles de voyage de fonctionnaires et non-fonctionnaires pour la catégorie de dépenses formation, pour l’exercice financier en cours (année se terminant le 31 mars AAAA), en milliers de dollars |
| Obligation EN | Mandatory if year ≥ 2018 |
| Obligation FR | Mandatory if year ≥ 2018 |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 3400 |

### 1-7 Travel ≥2018 – Other ($ thousands)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Travel ≥2018 – Other ($ thousands) |
| Field Name FR | Voyage ≥2018 – Autre (Milliers de dollars) |
| ID | other_kdollars |
| Description EN | This field shows annual expenditures for travel of public servants and non-public servants for the expenditure category – Other for the current reporting fiscal year (Year Ending March 31, YYYY) in thousands of dollars |
| Description FR | Ce champ montre les dépenses annuelles de voyage de fonctionnaires et non-fonctionnaires pour la catégorie de dépenses autre, pour l’exercice financier en cours (année se terminant le 31 mars AAAA), en milliers de dollars |
| Obligation EN | Mandatory if year ≥ 2018 |
| Obligation FR | Mandatory if year ≥ 2018 |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 900 |

### 1-8 Travel ≥2018 – Internal governance ($ thousands)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Travel ≥2018 – Internal governance ($ thousands) |
| Field Name FR | Voyage ≥2018 – Gouvernance interne (Milliers de dollars) |
| ID | internal_governance_kdollars |
| Description EN | This field shows annual expenditures for travel of public servants and non-public servants for the expenditure category – Internal governance for the current reporting fiscal year (Year Ending March 31, YYYY) in thousands of dollars |
| Description FR | Ce champ montre les dépenses annuelles de voyage de fonctionnaires et non-fonctionnaires pour la catégorie de dépenses gouvernance interne, pour l’exercice financier en cours (année se terminant le 31 mars AAAA), en milliers de dollars |
| Obligation EN | Mandatory if year ≥ 2018 |
| Obligation FR | Mandatory if year ≥ 2018 |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 5800 |

### 1-9 Travel <2018 – Non-Public Servants ($ thousands)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Travel <2018 – Non-Public Servants ($ thousands) |
| Field Name FR | Voyage <2018 – non-fonctionnaires (Milliers de dollars) |
| ID | non_public_servants_kdollars |
| Description EN | This field shows annual expenditures for travel of non-public servants for the current reporting fiscal year (Year Ending March 31, YYYY) in thousands of dollars |
| Description FR | Ce champ montre les dépenses annuelles de voyage de non-fonctionnaires pour l’exercice financier en cours (année se terminant le 31 mars AAAA), en milliers de dollars |
| Obligation EN | Mandatory if year < 2018 |
| Obligation FR | Mandatory if year < 2018 |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |

### 1-10 Travel <2018 – Public Servants ($ thousands)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Travel <2018 – Public Servants ($ thousands) |
| Field Name FR | Voyage <2018 – fonctionnaires (Milliers de dollars) |
| ID | public_servants_kdollars |
| Description EN | This field shows annual expenditures for travel of public servants for the current reporting fiscal year (Year Ending March 31, YYYY) in thousands of dollars |
| Description FR | Ce champ montre les dépenses annuelles de voyage de fonctionnaires pour l’exercice financier en cours (année se terminant le 31 mars AAAA), en milliers de dollars |
| Obligation EN | Mandatory if year < 2018 |
| Obligation FR | Mandatory if year < 2018 |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |

### 1-11 Hospitality ($ thousands)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Hospitality ($ thousands) |
| Field Name FR | Accueil (Milliers de dollars) |
| ID | hospitality_kdollars |
| Description EN | This field shows annual expenditures for hospitality for the previous reporting fiscal year (Year Ending March 31, YYYY-1) in thousands of dollars |
| Description FR | Ce champ montre les dépenses annuelles d’accueil pour l’exercice financier précédent (année se terminant le 31 mars AAAA-1), en milliers de dollars |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 12960 |

### 1-12 Conference Fees ($ thousands)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Conference Fees ($ thousands) |
| Field Name FR | Frais de participation aux conférences (Milliers de dollars) |
| ID | conference_fees_kdollars |
| Description EN | This field shows annual expenditures for conference fees for the current reporting fiscal year (Year Ending March 31, YYYY) in thousands of dollars |
| Description FR | Ce champ montre les dépenses annuelles de conférences pour l’exercice financier en cours (année se terminant le 31 mars AAAA), en milliers de dollars |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 50 |

### 1-13 International Travel by Minister and Minister's Staff ($ thousands)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | International Travel by Minister and Minister's Staff ($ thousands) |
| Field Name FR | Voyages internationaux du ministre et du personnel du ministre (Milliers de dollars) |
| ID | minister_kdollars |
| Description EN | This field shows annual expenditures for international travel by Minister and Minister’s staff for the current reporting year (Year Ending March 31, YYYY) in thousands of dollars |
| Description FR | Ce champ montre les dépenses annuelles de voyage à l’étranger du ministre et de son personnel pour l’exercice financier en cours (année se terminant le 31 mars AAAA), en milliers de dollars |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 1000 |

### 1-14 Explanation of Significant Variance of the total travel expenditure (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Explanation of Significant Variance of the total travel expenditure (English) |
| Field Name FR | Explication d’un écart important du total des dépenses de voyages (anglais) |
| ID | travel_compared_fiscal_year_en |
| Description EN | Provide a brief explanation, in English, of the significant reason(s) for the increase/decrease in annual expenditures for travel of public servants and non-public servants. |
| Description FR | Expliquez brièvement, en anglais, la ou les raisons significatives de l’augmentation ou de la diminution des dépenses annuelles de voyage pour les fonctionnaires et non-fonctionnaires. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | compared with fiscal year YYYY–YY, departmental travel expenditures [increased/decreased] mainly due to [briefly explain the main reason(s) for the increase or decrease]. |

### 1-15 Explanation of Significant Variance of the total travel expenditure (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Explanation of Significant Variance of the total travel expenditure (French) |
| Field Name FR | Explication d’un écart important du total des dépenses de voyages (français) |
| ID | travel_compared_fiscal_year_fr |
| Description EN | Provide a brief explanation, in French, of the significant reason(s) for the increase/decrease in annual expenditures for travel of public servants and non-public servants. |
| Description FR | Expliquez brièvement, en français, la ou les raisons significatives de l’augmentation ou de la diminution des dépenses annuelles de voyage pour les fonctionnaires et non-fonctionnaires. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Comparativement à l’exercice AAAA-AAAA, les dépenses de voyages du ministère ont [augmenté/diminué] principalement en raison de [expliquez brièvement la ou les raisons principales de l’augmentation ou de la diminution des dépenses]. |

### 1-16 Hospitality - Explanation of Significant Variance (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Hospitality - Explanation of Significant Variance (English) |
| Field Name FR | Accueil - Explication d’un écart important (anglais) |
| ID | hospitality_compared_fiscal_year_en |
| Description EN | Provide a brief explanation, in English, of the significant reason(s) for the increase/decrease in annual expenditures for hospitality. |
| Description FR | Expliquez brièvement, en anglais, la ou les raisons significatives de l’augmentation ou de la diminution des dépenses annuelles d’accueil. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | compared with fiscal year YYYY–YY, departmental hospitality expenditures [increased/decreased] mainly due to [briefly explain the main reason(s) for the increase or decrease]. |

### 1-17 Hospitality - Explanation of Significant Variance (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Hospitality - Explanation of Significant Variance (French) |
| Field Name FR | Accueil - Explication d’un écart important (français) |
| ID | hospitality_compared_fiscal_year_fr |
| Description EN | Provide a brief explanation, in French, of the significant reason(s) for the increase/decrease in annual expenditures for hospitality. |
| Description FR | Expliquez brièvement, en français, la ou les raisons significatives de l’augmentation ou de la diminution des dépenses annuelles d’accueil. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Comparativement à l’exercice AAAA-AAAA, les dépenses d’accueil du ministère ont [augmenté/diminué] principalement en raison de [expliquez brièvement la ou les raisons principales de l’augmentation ou de la diminution des dépenses]. |

### 1-18 Conference Fees - Explanation of Significant Variance (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Conference Fees - Explanation of Significant Variance (English) |
| Field Name FR | Frais de participation aux conférences - Explication d’un écart important (anglais) |
| ID | conference_fees_compared_fiscal_year_en |
| Description EN | Provide a brief explanation, in English, of the significant reason(s) for the increase/decrease in annual expenditures for conference fees. |
| Description FR | Expliquez brièvement, en anglais, la ou les raisons significatives de l’augmentation ou de la diminution des dépenses annuelles de conférences. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |

### 1-19 Conference Fees - Explanation of Significant Variance (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Conference Fees - Explanation of Significant Variance (French) |
| Field Name FR | Frais de participation aux conférences - Explication d’un écart important (français) |
| ID | conference_fees_compared_fiscal_year_fr |
| Description EN | Provide a brief explanation, in French, of the significant reason(s) for the increase/decrease in annual expenditures for conference fees. |
| Description FR | Expliquez brièvement, en français, la ou les raisons significatives de l’augmentation ou de la diminution des dépenses annuelles de conférences |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |

### 1-20 International Travel by Minister and Minister’s Staff - Explanation of Significant Variance (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | International Travel by Minister and Minister’s Staff - Explanation of Significant Variance (English) |
| Field Name FR | Voyages internationaux du ministre et du personnel du ministre - Explication d’un écart important (anglais) |
| ID | minister_compared_fiscal_year_en |
| Description EN | Provide a brief explanation, in English, of the significant reason(s) for the increase/decrease in annual expenditures for international travel by the minister and minister's staff. |
| Description FR | Expliquez brièvement, en anglais, la ou les raisons significatives de l’augmentation ou de la diminution des dépenses annuelles de voyage à l’étranger pour le ministre et son personnel. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | compared with fiscal year YYYY–YY, departmental expenditures for international travel by the Minister and the Minister’s exempt staff [increased/decreased] mainly due to [briefly explain the main reason(s) for the increase or decrease]. |

### 1-21 International Travel by Minister and Minister’s Staff - Explanation of Significant Variance (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | International Travel by Minister and Minister’s Staff - Explanation of Significant Variance (French) |
| Field Name FR | Voyages internationaux du ministre et du personnel du ministre - Explication d’un écart important (français) |
| ID | minister_compared_fiscal_year_fr |
| Description EN | Provide a brief explanation, in French, of the significant reason(s) for the increase/decrease in annual expenditures for international travel by the minister and minister's staff. |
| Description FR | Expliquez brièvement, en français, la ou les raisons significatives de l’augmentation ou de la diminution des dépenses annuelles de voyage à l’étranger pour le ministre et son personnel. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Comparativement à l’exercice AAAA-AAAA, les dépenses ministérielles liées aux voyages internationaux du ministre et de son personnel exempté ont [augmenté/diminué] principalement en raison de [expliquez brièvement la ou les raisons principales de l’augmentation ou de la diminution des dépenses]. |


---
