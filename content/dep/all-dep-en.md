# Consolidated Data Element Profiles (EN)

Generated from source YAML schemas in `ckanext-canada-master/ckanext/canada/tables` and local choices files in `ckanext-canada-master/ckanext/canada/tables/choices`, following `open-data/deplane` publishing rules.

Total profiles: 20

## [Included profiles](#included-profiles)

- `adminaircraft.yaml`: Proactive Publication - Use of Administrative Aircraft
- `aistrategy.yaml`: AI Strategy Implementation Tracker
- `ati.yaml`: ATI Summaries
- `briefingt.yaml`: Proactive Publication - Briefing Note Titles and Numbers
- `consultations.yaml`: Open Dialogue - Consultations
- `contracts.yaml`: Proactive Publication - Contracts over $10,000
- `contractsa.yaml`: Proactive Publication - Aggregated Contracts from -$10,000 to $10,000
- `dac.yaml`: Proactive Publication - Departmental Audit Committee
- `experiment.yaml`: Experimentation Inventory
- `grants.yaml`: Proactive Publication - Grants and Contributions
- `hospitalityq.yaml`: Proactive Publication - Hospitality Expenses
- `inventory.yaml`: Open Data Inventory
- `nap5.yaml`: 5th National Action Plan on Open Government Tracker
- `nap6.yaml`: 6th National Action Plan on Open Government Tracker
- `qpnotes.yaml`: Proactive Publication - Question Period Notes
- `reclassification.yaml`: Proactive Publication - Position Reclassification
- `service.yaml`: Service Inventory
- `travela.yaml`: Proactive Publication - Annual Travel, Hospitality and Conferences
- `travelq.yaml`: Proactive Publication - Travel Expenses
- `wrongdoing.yaml`: Proactive Publication - Acts of Founded Wrongdoing

# Data Element Profile: Proactive Publication - Use of Administrative Aircraft

_Source YAML: `adminaircraft.yaml`_


## [Table of Contents](#table-of-contents)

- [Included profiles](#included-profiles)
- [Legend](#legend)
- [Proactive Publication - Use of Administrative Aircraft](#proactive-publication-use-of-administrative-aircraft)
- [Legend](#legend)
- [AI Strategy Implementation Tracker](#ai-strategy-implementation-tracker)
- [Legend](#legend)
- [ATI Summaries](#ati-summaries)
- [ATI Summaries](#ati-summaries)
- [Legend](#legend)
- [Proactive Publication - Briefing Note Titles and Numbers](#proactive-publication-briefing-note-titles-and-numbers)
- [Proactive Publication - Briefing Note Titles and Numbers](#proactive-publication-briefing-note-titles-and-numbers)
- [Legend](#legend)
- [Open Dialogue - Consultations](#open-dialogue-consultations)
- [Legend](#legend)
- [Proactive Publication - Contracts over $10,000](#proactive-publication-contracts-over-10000)
- [Proactive Publication - Contracts over $10,000](#proactive-publication-contracts-over-10000)
- [Legend](#legend)
- [Proactive Publication - Aggregated Contracts from -$10,000 to $10,000](#proactive-publication-aggregated-contracts-from-10000-to-10000)
- [Legend](#legend)
- [Proactive Publication - Departmental Audit Committee](#proactive-publication-departmental-audit-committee)
- [Legend](#legend)
- [Experimentation Inventory](#experimentation-inventory)
- [Legend](#legend)
- [Proactive Publication - Grants and Contributions](#proactive-publication-grants-and-contributions)
- [Proactive Publication - Grants and Contributions](#proactive-publication-grants-and-contributions)
- [Legend](#legend)
- [Proactive Publication - Hospitality Expenses](#proactive-publication-hospitality-expenses)
- [Proactive Publication - Hospitality Expenses](#proactive-publication-hospitality-expenses)
- [Legend](#legend)
- [Open Data Inventory](#open-data-inventory)
- [Legend](#legend)
- [5th National Action Plan on Open Government Tracker](#5th-national-action-plan-on-open-government-tracker)
- [Legend](#legend)
- [6th National Action Plan on Open Government Tracker](#6th-national-action-plan-on-open-government-tracker)
- [Legend](#legend)
- [Proactive Publication - Question Period Notes](#proactive-publication-question-period-notes)
- [Proactive Publication - Question Period Notes](#proactive-publication-question-period-notes)
- [Legend](#legend)
- [Proactive Publication - Position Reclassification](#proactive-publication-position-reclassification)
- [Proactive Publication - Position Reclassification](#proactive-publication-position-reclassification)
- [Legend](#legend)
- [Service Inventory](#service-inventory)
- [Service Inventory](#service-inventory)
- [Legend](#legend)
- [Proactive Publication - Annual Travel, Hospitality and Conferences](#proactive-publication-annual-travel-hospitality-and-conferences)
- [Legend](#legend)
- [Proactive Publication - Travel Expenses](#proactive-publication-travel-expenses)
- [Proactive Publication - Travel Expenses](#proactive-publication-travel-expenses)
- [Legend](#legend)
- [Proactive Publication - Acts of Founded Wrongdoing](#proactive-publication-acts-of-founded-wrongdoing)

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

## [Proactive Publication - Use of Administrative Aircraft](#proactive-publication-use-of-administrative-aircraft)

### 1-1 Reference Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reference Number |
| Field Name FR | Numéro de référence |
| ID | reference_number |
| Description EN | This field is populated by the user with the reference number of the trip. This number is a mandatory system requirement when publishing a template. |
| Description FR | Ce champ est rempli par l’utilisateur avec le numéro de référence du voyage. Le numéro est une exigence de système obligatoire pour la publication d’un modèle. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | T-2019-Q3-00001 |

### 1-2 Title of Minister

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Title of Minister |
| Field Name FR | Titre du ministre |
| ID | minister |
| Description EN | This field will display the title of the Minister who requested the trip. |
| Description FR | Ce champ affichera le titre du ministre qui a demandé le voyage. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | PTB |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| AGC | Attorney General of Canada | Procureur général du Canada |
| AMF | Associate Minister of Finance | Ministre associée des Finances |
| AMH | Associate Minister of Health | Ministre associée de la santé |
| AMND | Associate Minister of National Defence | Ministre associé de la Défense nationale |
| AMPS | Associate Minister of Public Safety | Ministre associée de la sécurité publique |
| CGW | Chief government whip | Whip en chef du gouvernement |
| DPM | Deputy Prime Minister | Vice-première ministre |
| GG | The Governor General of Canada | La gouverneure générale du Canada |
| LGHC | Leader of the Government in the House of Commons | Leader du gouvernement à la Chambre des communes |
| MAA | Minister of Agriculture and Agri-Food | Ministre de l'Agriculture et de l'Agroalimentaire |
| MAARED | Minister of Agriculture and Agri-Food and Rural Economic Development | Ministre de l’agriculture et de l’agroalimentaire et du développement économique rural |
| MAIDI | Minister of Artificial Intelligence and Digital Innovation | Ministre de l’intelligence artificielle et de l’innovation numérique |
| MCCIPC | Minister of Canadian Culture and Identity, Parks Canada | Ministre de la culture et de l’identité canadiennes, parcs canada |
| MCH | Minister of Canadian Heritage | Ministre du Patrimoine canadien |
| MCIC | Minister of Canadian Identity and Culture | Ministre de l’identité et de la culture canadiennes |
| MCR | Minister of Crown-Indigenous Relations | Ministre des Relations Couronne-Autochtones |
| MCRNA | Minister of Crown-Indigenous Relations and Northern Affairs | Ministre des relations couronne-autochtones et des affaires du nord |
| MCS | Minister of Citizens’ Services | Ministre des services aux citoyens |
| MDG | Minister of Digital Government | Ministre du Gouvernement numérique |
| MDI | Minister of Democratic Institutions | Ministre des institutions démocratiques |
| MDIPD | Minister of Diversity, Inclusion and Persons with Disabilities | Ministre de la diversité, de l’inclusion et des personnes en situation de handicap |
| MDIY | Minister of Diversity and Inclusion and Youth | Ministre de la Diversité et de l’Inclusion et de la Jeunesse |
| MECC | Minister of Environment and Climate Change | Ministre de l'Environnement et du Changement climatique |
| MECCN | Minister of the Environment, Climate Change and Nature | Ministre de l’environnement, du changement climatique et de la nature |
| MED | Minister of Economic Development | Ministre du Développement économique |
| MEMCR | Minister of Emergency Management and Community Resilience | Ministre de la gestion des urgences et de la résilience des communautés |
| MENR | Minister of Energy and Natural Resources | Ministre de l’énergie et des ressources naturelles |
| MEP | Minister of Emergency Preparedness | Ministre de la protection civile |
| MEPITED | Minister of Export Promotion, International Trade and Economic Development | Ministre de la promotion des exportations, du commerce international et du développement économique |
| MEWDDI | Minister of Employment, Workforce Development and Disability Inclusion | Ministre de l’Emploi, du Développement de la main-d’œuvre et de l'Inclusion des personnes handicapées |
| MEWDL | Minister of Employment, Workforce Development and Labour | Ministre de l’emploi, du développement de la main-d’œuvre et du travail |
| MEWDOL | Minister of Employment, Workforce Development and Official Languages | Ministre de l’emploi, du développement de la main-d’œuvre et des langues officielles |
| MF | Minister of Finance | Ministre des Finances |
| MF1 | Minister of Fisheries | Ministre des pêches |
| MFA | Minister of Foreign Affairs | Ministre des Affaires étrangères |
| MFAID | Minister of Foreign Affairs and International Development | Ministre des affaires étrangères et du développement international |
| MFCSD | Minister of Families, Children and Social Development | Ministre de la Famille, des Enfants et du Développement social |
| MFNR | Minister of Finance and National Revenue | Ministre des finances et du revenu national |
| MFOCCG | Minister of Fisheries, Oceans and the Canadian Coast Guard | Ministre des Pêches, des Océans et de la Garde côtière canadienne |
| MGTPSP | Minister of Government Transformation, Public Services and Procurement | Ministre de la transformation du gouvernement, des services publics et de l’approvisionnement |
| MGTPWP | Minister of Government Transformation, Public Works and Procurement | Ministre de la transformation du gouvernement, des travaux publics et de l’approvisionnement |
| MH | Minister of Health | Ministre de la Santé |
| MHDI | Minister of Housing and Diversity and Inclusion | Ministre du logement et de la diversité et de l’inclusion |
| MHI | Minister of Housing and Infrastructure | Ministre du logement et de l’infrastructure |
| MHIC | Minister of Housing, Infrastructure and Communities | Ministre du logement, de l’infrastructure et des collectivités |
| MI | Minister of Industry | Ministre de l’industrie |
| MIA | Minister of Intergovernmental Affairs | Ministre des Affaires intergouvernementales |
| MIAIC | Minister of Intergovernmental Affairs, Infrastructure and Communities | Ministre des affaires intergouvernementales, de l’infrastructure et des collectivités |
| MIC | Minister of Infrastructure and Communities | Ministre de l'Infrastructure et des Collectivités |
| MID | Minister of International Development | Ministre du Développement international |
| MIRC | Minister of Immigration, Refugees and Citizenship | Ministre de l’Immigration, des Réfugiés et de la Citoyenneté |
| MIS | Minister of Indigenous Services | Ministre des Services aux Autochtones |
| MISI | Minister of Innovation, Science and Industry | Ministre de l'Innovation, des Sciences et de l'Industrie |
| MIT | Minister of International Trade | Ministre du Commerce international |
| MIT1 | Minister of Internal Trade | Ministre du commerce intérieur |
| MITEPSBED | Minister of International Trade, Export Promotion, Small Business and Economic Development | Ministre du commerce international, de la promotion des exportations, de la petite entreprise et du développement économique |
| MITIA | Minister of International Trade and Intergovernmental Affairs | Ministre du commerce international et des affaires intergouvernementales |
| MJ | Minister of Justice | Ministre de la Justice |
| MJF | Minister of Jobs and Families | Ministre de l’emploi et des familles |
| ML | Minister of Labour | Ministre du Travail |
| MLS | Minister of Labour and Seniors | Ministre du travail et des aînés |
| MMCP | Minister of Middle Class Prosperity | Ministre de la Prospérité de la classe moyenne |
| MMHA | Minister of Mental Health and Addictions | Ministre de la santé mentale et des dépendances |
| MNA | Minister of Northern Affairs | Ministre des Affaires du Nord |
| MNAA | Minister of Northern and Arctic Affairs | Ministre des affaires du nord et de l’arctique |
| MND | Minister of National Defence | Ministre de la Défense nationale |
| MNR | Minister of National Revenue | Ministre du Revenu national |
| MNR1 | Minister of Natural Resources | Ministre des Ressources naturelles |
| MOL | Minister of Official Languages | Ministre des Langues officielles |
| MPS | Minister of Public Safety | Ministre de la sécurité publique |
| MPSDIIA | Minister of Public Safety, Democratic Institutions and Intergovernmental Affairs | Ministre de la sécurité publique, des institutions démocratiques et des affaires intergouvernementales |
| MPSEP | Minister of Public Safety and Emergency Preparedness | Ministre de la Sécurité publique et de la Protection civile |
| MPSP | Minister of Public Services and Procurement | Ministre des Services publics et de l’Approvisionnement |
| MRACOA | Minister responsible for the Atlantic Canada Opportunities Agency | Ministre responsable de l’agence de promotion économique du canada atlantique |
| MRCEDQR | Minister responsible for Canada Economic Development for Quebec Regions | Ministre responsable de développement économique canada pour les régions du québec |
| MRCNEDA | Minister responsible for the Canadian Northern Economic Development Agency | Ministre responsable de l’agence canadienne de développement économique du nord |
| MRCRA | Minister responsible for the Canada Revenue Agency | Ministre responsable de l’agence du revenu du canada |
| MRCTIAOCE | Minister responsible for Canada-U.S. Trade, Intergovernmental Affairs and One Canadian Economy | Ministre responsable du commerce canada–états-unis, des affaires intergouvernementales et de l’unité de l’économie canadienne |
| MRED | Minister of Rural Economic Development | Ministre du Développement économique rural |
| MREDACRQ | Minister responsible for the Economic Development Agency of Canada for the Regions of Quebec | Ministre responsable de l’agence de développement économique du canada pour les régions du québec |
| MRFEDANO | Minister responsible for the Federal Economic Development Agency for Northern Ontario | Ministre responsable de l’agence fédérale de développement économique pour le nord de l’ontario |
| MRFEDASO | Minister responsible for the Federal Economic Development Agency for Southern Ontario | Ministre responsable de l’agence fédérale de développement économique pour le sud de l’ontario |
| MROL | Minister responsible for Official Languages | Ministre responsable des langues officielles |
| MRPEDAC | Minister responsible for the Pacific Economic Development Agency of Canada | Ministre responsable de l’agence de développement économique du pacifique canada |
| MRPEDC | Minister responsible for Prairies Economic Development Canada | Ministre responsable de développement économique canada pour les prairies |
| MRPEDC1 | Minister responsible for Pacific Economic Development Canada | Ministre responsable de développement économique canada pour le pacifique |
| MS | Minister of Seniors | Ministre des Aînés |
| MS1 | Minister of Sport | Ministre des sports |
| MSB | Minister of Small Business | Ministre de la petite entreprise |
| MSBEP | Minister of Small Business and Export Promotion | Ministre de la Petite Entreprise et de la Promotion des exportations |
| MSPA | Minister of Sport and Physical Activity | Ministre des sports et de l’activité physique |
| MT | Minister of Transport | Ministre des Transports |
| MT1 | Minister of Tourism | Ministre du tourisme |
| MTIT | Minister of Transport and Internal Trade | Ministre des transports et du commerce intérieur |
| MVA | Minister of Veterans Affairs | Ministre des Anciens Combattants |
| MWGE | Minister for Women and Gender Equality | Ministre des Femmes et de l’Égalité des genres |
| MWGE1 | Minister of Women and Gender Equality | Ministre des femmes et de l’égalité des genres |
| MWGEY | Minister for Women and Gender Equality and Youth | Ministre des femmes et de l’égalité des genres et de la jeunesse |
| PKPCC | President of the King’s Privy Council for Canada | Président du conseil privé du roi pour le canada |
| PM | Prime Minister | Premier ministre |
| PQPCC | President of the Queen’s Privy Council for Canada | Président du Conseil privé de la Reine pour le Canada |
| PTB | President of the Treasury Board | Président du Conseil du Trésor |
| SRP | Special Representative for the Prairies | Représentant spécial pour les Prairies |
| SSCC | Secretary of State (Combatting Crime) | Secrétaire d’état (lutte contre la criminalité) |
| SSCRAFI | Secretary of State (Canada Revenue Agency and Financial Institutions) | Secrétaire d’état (agence du revenu du canada et institutions financières) |
| SSCY | Secretary of State (Children and Youth) | Secrétaire d’état (enfance et jeunesse) |
| SSDP | Secretary of State (Defence Procurement) | Secrétaire d’état (approvisionnement en matière de défense) |
| SSID | Secretary of State (International Development) | Secrétaire d’état (développement international) |
| SSL | Secretary of State (Labour) | Secrétaire d’état (travail) |
| SSN | Secretary of State (Nature) | Secrétaire d’état (nature) |
| SSRD | Secretary of State (Rural Development) | Secrétaire d’état (développement rural) |
| SSS | Secretary of State (Seniors) | Secrétaire d’état (aînés) |
| SSS1 | Secretary of State (Sport) | Secrétaire d’état (sports) |
| SSSBT | Secretary of State (Small Business and Tourism) | Secrétaire d’état (petites entreprises et tourisme) |

### 1-3 Purpose of the trip (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Purpose of the trip (English) |
| Field Name FR | But du voyage (anglais) |
| ID | purpose_en |
| Description EN | A description of the reason for the government trip in question. The description should be succinct (one line if possible) and provide users with a general sense of the trip's purpose. Use of acronyms should be avoided, in English. |
| Description FR | Description de la raison du voyage, en anglais, en service commandé visé. La description doit être brève (une ligne dans la mesure du possible) et donner une indication générale aux utilisateurs du but du voyage. Il faut éviter d’utiliser des acronymes. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | To attend the 2021 G7 Leaders summit meeting. |

### 1-4 Purpose of the trip (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Purpose of the trip (French) |
| Field Name FR | But du voyage (français) |
| ID | purpose_fr |
| Description EN | A description, in French, of the reason for the government trip in question. The description should be succinct (one line if possible) and provide users with a general sense of the trip's purpose. Use of acronyms should be avoided, in French |
| Description FR | Description de la raison du voyage, en français, en service commandé visé. La description doit être brève (une ligne dans la mesure du possible) et donner une indication générale aux utilisateurs du but du voyage. Il faut éviter d’utiliser des acronymes. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Participer au sommet des dirigeants G7 2021. |

### 1-5 Travel start date

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Travel start date |
| Field Name FR | Date du début du voyage |
| ID | start_date |
| Description EN | The date the travel started. |
| Description FR | Date du début du voyage. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Date |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 2019-11-25 |

### 1-6 Travel end date

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Travel end date |
| Field Name FR | Date de fin du voyage |
| ID | end_date |
| Description EN | The date the travel ended (can be the same as travel start date). |
| Description FR | Date de fin du voyage (peut être la même date que la date du début du voyage). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Date |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 2019-11-26 |

### 1-7 Location(s) visited (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Location(s) visited (English) |
| Field Name FR | Endroit(s) visité (anglais) |
| ID | locations_en |
| Description EN | To include names of all places visited to conduct government business during the trip in question, in English. (separate multiple locations with semicolons) |
| Description FR | Cette zone indique, en anglais, le nom de tous les lieux qui ont été visités dans le cadre du voyage en question réalisé pour le compte du gouvernement. (séparer plusieurs emplacements avec des points-virgules) |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | London, United Kingdom; Ottawa, Ontario, Canada |

### 1-8 Location(s) visited (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Location(s) visited (French) |
| Field Name FR | Endroit(s) visité (français) |
| ID | locations_fr |
| Description EN | To include names of all places visited to conduct government business during the trip in question, in french. (separate multiple locations with semicolons) |
| Description FR | Cette zone indique, en français, le nom de tous les lieux qui ont été visités dans le cadre du voyage en question réalisé pour le compte du gouvernement. (séparer plusieurs emplacements avec des points-virgules) |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Londres, Royaume-Uni; Ottawa, Ontario, Canada |

### 1-9 Number of hours flown

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of hours flown |
| Field Name FR | Le nombre d’heures de vol |
| ID | hours |
| Description EN | The number of hours flown. |
| Description FR | Le nombre d’heures de vol. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 11.5 |

### 1-10 Passenger names

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Passenger names |
| Field Name FR | Nom des passagers |
| ID | passengers |
| Description EN | Full list of flight passengers. (Comma seperated) |
| Description FR | Liste complète des passagers du vol. (séparées par des virgules) |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | John Smith, Martha Smith, LGen Robert Jones, Thomas Cruise |

### 1-11 Additional Information (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Additional Information (English) |
| Field Name FR | Renseignements supplémentaires (anglais) |
| ID | additional_information_en |
| Description EN | This field will display any additional information, as deemed necessary, in English. |
| Description FR | Ce champ affichera tout renseignement supplémentaire, en anglais, selon les besoins. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Repeatable |
| Format Type | Text |
| Validation EN | None |
| Validation FR | None |
| Example Value | A large focus of the 2021 G7 was resolving to work together to beat COVID-19 and rebuild. |

### 1-12 Additional Information (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Additional Information (French) |
| Field Name FR | Renseignements supplémentaires (français) |
| ID | additional_information_fr |
| Description EN | This field will display any additional information, as deemed necessary, in French. |
| Description FR | Ce champ affichera tout renseignement supplémentaire, en français, selon les besoins. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Repeatable |
| Format Type | Text |
| Validation EN | None |
| Validation FR | None |
| Example Value | Un des principaux objectifs du G7 de 2021 était de travailler ensemble pour vaincre le COVID-19 et reconstruire. |


---

# Data Element Profile: AI Strategy Implementation Tracker

_Source YAML: `aistrategy.yaml`_

## [Legend](#legend)

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

## [AI Strategy Implementation Tracker](#ai-strategy-implementation-tracker)

### 1-1 Reference Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reference Number |
| Field Name FR | Numéro de référence |
| ID | ref_number |
| Description EN | The unique number assigned to a service using AI to make it easier to refer to specific services. |
| Description FR | Le numéro unique attribué à un service à l'aide de l'IA pour faciliter le référencement à des services précis. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field cannot contain commas. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ ne peut pas contenir de virgules. |
| Example Value | TBS-001 |

### 1-2 Reporting Period

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reporting Period |
| Field Name FR | Période de déclaration |
| ID | reporting_period |
| Description EN | Year and month of the update |
| Description FR | Année et mois de la mise à jour |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Must match expected completion options in the controlled list. |
| Validation FR | Doit correspondre aux options d'achèvement prévues de la liste contrôlée. |
| Example Value | 2025-Q3 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| 2025-Q3 | 2025-Q3 | 2025-T3 |
| 2025-Q4 | 2025-Q4 | 2025-T4 |
| 2026-Q1 | 2026-Q1 | 2026-T1 |
| 2026-Q2 | 2026-Q2 | 2026-T2 |
| 2026-Q3 | 2026-Q3 | 2026-T3 |
| 2026-Q4 | 2026-Q4 | 2026-T4 |
| 2027-Q1 | 2027-Q1 | 2027-T1 |
| 2027-Q2 | 2027-Q2 | 2027-T2 |

### 1-3 Priority Area

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Priority Area |
| Field Name FR | Domaine Prioritaire |
| ID | priority_area |
| Description EN | The strategic focus area within the AI Strategy Implementation |
| Description FR | Le domaine d'action stratégique dans le cadre de la mise en œuvre de la stratégie en matière d'IA |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Must match one of the values in the controlled list. |
| Validation FR | Doit correspondre à l'une des valeurs de la liste contrôlée. |
| Example Value | A |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| A | Central AI Capacity | Capacité centrale d’IA |
| B | Policy, Legislation, and Governance | Politiques, lois et gouvernance |
| C | Talent and Training | Talents et formation |
| D | Engagement, Transparency, and Value to Canadians | Engagement, transparence et valeur pour les Canadiens |

### 1-4 Key Action

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Key Action |
| Field Name FR | Action Clé |
| ID | key_action |
| Description EN | The key action described in the AI Strategy |
| Description FR | L'action clé décrite dans la stratégie en matière d'IA |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Must match predefined action statements. |
| Validation FR | Doit correspondre à des déclarations d'action prédéfinies. |
| Example Value | A.1 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| A.1 | Establish an AI Centre of Expertise for the Government of Canada | Établir un Centre d’expertise en IA pour le gouvernement du Canada |
| A.2 | Enable common infrastructure for AI adoption and promote adoption of existing approved enterprise solutions | Mettre en place une infrastructure commune pour permettre l’adoption de l’IA et favoriser l’utilisation des solutions intégrées existantes qui sont autorisées |
| A.3 | Identify and develop a lighthouse project | Cerner et élaborer un projet phare |
| B.1 | Establish common AI governance and risk management frameworks | Établir des cadres communs de gouvernance et de gestion des risques en matière d'IA |
| B.2 | Address policy and legislative alignment, gaps, and barriers | Surmonter les lacunes, les obstacles et le manque d’harmonie dans les politiques et lois |
| B.3 | Adopt a “think AI” approach | Adopter une approche axée sur l’IA |
| C.1 | Benchmark talent needs | Évaluer les besoins en matière de talents |
| C.2 | Develop a training plan | Élaborer un plan de formation |
| C.3 | Develop a talent plan | Élaborer un plan de gestion des talents |
| D.1 | Strengthen accountability and transparency on AI use | Accroître la responsabilisation et la transparence quant à l’utilisation de l’IA |
| D.2 | Demonstrate impact and value to Canadians | Démontrer l’incidence et la valeur pour les Canadiens |
| D.3 | Commit to engagement on AI | Prendre des engagements de mobilisation sur l’IA |

### 1-5 Strategic sub-action

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Strategic sub-action |
| Field Name FR | Sous-action stratégique |
| ID | sub_action |
| Description EN | Specific sub-action under the AI Strategy |
| Description FR | Sous-action spécifique dans le cadre de la stratégie d'IA |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Must match one of the AI Strategy defined sub-action statements. |
| Validation FR | Doit correspondre à l'une des sous-actions définies dans la stratégie IA. |
| Example Value | A.1.1 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| A.1.1 | Establish an AI Centre of Expertise for the Government of Canada | Créer un centre d'expertise en IA pour le gouvernement du Canada |
| A.1.2 | Identify high value use cases for AI Integration | Identifier les cas d'utilisation à forte valeur ajoutée pour l'intégration de l'IA |
| A.2.1 | Provide high-performance computing (HPC) and cloud infrastructure that is available, secure, and scalable to meet the demands of AI projects | Fournir une infrastructure de calcul haute performance (CHP) et d'informatique en nuage disponible, sécurisée et évolutive pour répondre aux exigences des projets d'IA |
| A.2.2 | Provide common data and information management systems and practices to support sharing, scaling, and agentic capabilities across Government of Canada platforms | Fournir des systèmes et des pratiques communs de gestion des données et de l'information pour soutenir le partage, l'extension et les capacités agentiques à travers les plateformes du gouvernement du Canada |
| A.2.3 | Provide access to approved models, services, and application programming interfaces (APIs) within common Government of Canada cloud platforms to build or deploy systems | Fournir un accès aux modèles, services et interfaces de programmation d'applications (API) approuvés au sein des plates-formes en nuage communes du gouvernement du Canada pour construire ou déployer des systèmes |
| A.2.4 | Provide access to common AI solutions and capabilities in vendor solutions through a standard Government of Canada platform service | Fournir un accès aux solutions et capacités communes en matière d'IA dans les solutions des fournisseurs par l'intermédiaire d'un service de plateforme standard du gouvernement du Canada |
| A.2.5 | Support Canadian suppliers and vendors to promote the growth of the Canadian AI industry and ensure secure sovereign infrastructure and solutions | Soutenir les fournisseurs et les vendeurs canadiens afin de promouvoir la croissance de l'industrie canadienne de l'IA et de garantir la sécurité des infrastructures et des solutions souveraines |
| A.3.1 | Self-serve language hub for the Government of Canada | Carrefour linguistique libre-service pour le gouvernement du Canada |
| B.1.1 | Establish common governance framework for the AI lifecycle to provide clear guidance to AI project teams | Établir un cadre de gouvernance commun pour le cycle de vie de l'IA afin de fournir des orientations claires aux équipes chargées des projets d'IA |
| B.1.2 | Establish a common risk management framework for the AI lifecycle | Établir un cadre commun de gestion des risques pour le cycle de vie de l'IA |
| B.1.3 | Establish a government-wide governance structure | Établir une structure de gouvernance à l'échelle du gouvernement |
| B.2.1 | Review, identify and address legal and policy gaps and ambiguities | Examiner, identifier et traiter les lacunes et les ambiguïtés juridiques et politiques |
| B.2.2 | Develop agile process to review and update policy, guidance, tools and resources | Développer un processus agile pour réviser et mettre à jour la politique, les orientations, les outils et les ressources |
| B.2.3 | Identify opportunities to synthesize or interpret existing policy to increase usability | Identifier les possibilités de synthétiser ou d'interpréter la politique existante afin d'en améliorer l'utilité |
| B.2.4 | Update procurement policies, instruments, and processes | Mettre à jour les politiques, les instruments et les procédures de passation de marchés |
| B.2.5 | Align internal AI policy with domestic policy or law and with international treaties, legislation and norms | Aligner la politique interne en matière d'IA sur la politique ou la législation nationale, ainsi que sur les traités, la législation et les normes internationales |
| B.3.1 | Adopt a "think AI" approach | Adopter une approche axée sur l’IA |
| C.1.1 | Assess talent needs | Évaluer les besoins en talents |
| C.2.1 | Develop a training plan | Élaborer un plan de formation |
| C.3.1 | Explore obstacles to recruitment and retention and ways to establish flexible data science career pathways for AI practitioners | Explorer les obstacles au recrutement et à la fidélisation et les moyens d'établir des parcours de carrière flexibles en science des données pour les praticiens de l'IA |
| C.3.2 | Expand interchanges, apprenticeships, co-op programs, and partnerships with AI institutes and research centres to create a talent pipeline | Développer les échanges, l'apprentissage, les programmes coopératifs et les partenariats avec les instituts d'IA et les centres de recherche pour créer un vivier de talents |
| C.3.3 | Optimize use of AI talent through flexible assignments | Optimiser l'utilisation des talents en IA grâce à des affectations flexibles |
| C.3.4 | Competitions and challenges to meet some project-based needs | Compétitions et défis pour répondre à certains besoins liés à des projets |
| D.1.1 | Strengthen and clarify accountabilities for AI use in policy | Renforcer et clarifier les responsabilités en matière d'utilisation de l'IA dans les politiques |
| D.1.2 | New requirements and standard language for the disclosure of AI use, explanations of how an AI system reaches a decision, and information about rights and protections, including how to seek explanations or recourse and how to report problems | De nouvelles exigences et un langage standard pour la divulgation de l'utilisation de l'IA, des explications sur la manière dont un système d'IA prend une décision, et des informations sur les droits et les protections, y compris la manière de demander des explications ou des recours et de signaler les problèmes |
| D.1.3 | Identification of AI capabilities and uses that GC will not pursue | Identification des capacités et des utilisations de l'IA que le GC ne poursuivra pas |
| D.1.4 | Establishment of a public register of its AI systems within a defined scope | Mise en place d'un registre public de ses systèmes d'IA dans un périmètre défini |
| D.1.5 | Develop and publish alternative oversight processes for systems that cannot be included in register | Élaborer et publier des processus de surveillance alternatifs pour les systèmes qui ne peuvent pas être inclus dans le registre |
| D.2.1 | Develop metrics and performance indicators to demonstrate the impact and value of AI initiatives | Élaborer des mesures et des indicateurs de performance pour démontrer l'impact et la valeur des initiatives en matière d'intelligence artificielle |
| D.2.2 | Develop a framework to track AI adoption | Élaborer un cadre pour suivre l'adoption de l'IA |
| D.3.1 | Commitment to early and meaningful public and stakeholder engagement on AI initiatives of significant public interest or concern, including targeted engagement of communities that face greater impacts, risks or barriers from AI systems | Engagement en faveur d'une participation précoce et significative du public et des parties prenantes aux initiatives d'IA présentant un intérêt ou une préoccupation publique importants, y compris une participation ciblée des communautés qui sont confrontées à des impacts, des risques ou des obstacles plus importants liés aux systèmes d'IA |
| D.3.2 | Union and employee engagement on workforce impacts | L'engagement des syndicats et des employés sur l'impact de la main-d'oeuvre |
| D.3.3 | Client participation in system design to ensure that AI systems do not create or perpetuate barriers to access for clients | Participation des clients à la conception du système afin de s'assurer que les systèmes d'IA ne créent pas ou ne perpétuent pas d'obstacles à l'accès pour les clients |
| D.3.4 | Provide mechanisms for ongoing public feedback and questions on AI used by the federal government | Mettre en place des mécanismes permettant au public de formuler des commentaires et des questions sur l'IA utilisée par le gouvernement fédéral |

### 1-6 Activity

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Activity |
| Field Name FR | Activité |
| ID | activity |
| Description EN | Activity in support of the AI Strategy |
| Description FR | Activité de soutien à la stratégie en matière d'IA |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Must match predefined activities. |
| Validation FR | Doit correspondre à des activités prédéfinies. |
| Example Value | A.1.1.2 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| A.1.1.1 | Develop operating and business models, organizational and governance structures, key performance indicators, and ways to prioritize the use of the AI centre's resources | Élaborer des modèles opérationnels et intégrés, des structures organisationnelles et de gouvernance, des indicateurs de rendement clés et des procédures visant à établir l’ordre de priorité de l’utilisation des ressources du Centre d’expertise en IA |
| A.1.1.2 | Consolidate the AI communities of practice under an information hub to improve knowledge sharing and prevent duplication | Regrouper les communautés de pratique de l’IA sous un centre d’information afin d’améliorer l’échange des connaissances et d’éviter les chevauchements |
| A.1.2.1 | Identify high-value use cases that could be pursued as lighthouse projects | Cerner les cas d’utilisation ayant une grande valeur qui pourraient être réalisés en tant que projets phares |
| A.2.1.1 | Provide high-performance computing (HPC) and cloud infrastructure that is available, secure, and scalable to meet the demands of AI projects | Fournir une infrastructure infonuagique et des capacités de calcul à haute performance qui sont accessibles, sécurisées et évolutives afin de répondre aux exigences des projets d’IA |
| A.2.2.1 | Provide common data and information management systems and practices to support sharing, scaling, and agentic capabilities across Government of Canada platforms | Mettre en oeuvre des pratiques et des systèmes communs de gestion des données et de l’information pour appuyer les échanges, la mise à l’échelle et les capacités agentiques dans l’ensemble des plateformes du GC |
| A.2.3.1 | Provide access to approved models, services, and application programming interfaces (APIs) in common Government of Canada cloud platforms to build or deploy systems | Offrir l’accès à des services, des interfaces de programmation d’applications (API) et des modèles autorisés dans les plateformes infonuagiques communes du GC pour concevoir ou déployer des systèmes |
| A.2.4.1 | Provide access to common AI solutions and capabilities in vendor solutions through a standard Government of Canada platform service | Donner l’accès à des solutions et capacités communes en matière d’IA dans les solutions de fournisseurs au moyen d’une plateforme de service standard du GC |
| A.2.5.1 | Streamline the AI Source list and develop tools for institutions to procure faster with a focus on Canadian service providers | Simplifier la liste des fournisseurs d’IA et créer des outils permettant aux institutions de réaliser des achats plus rapidement, en mettant l’accent sur les fournisseurs de services canadiens |
| A.3.1.1 | Develop and scale a machine translation tool using Government of Canada data, ensuring access to secure translation services available at the same time and at the same quality in both official languages | Élaborer et déployer un outil de traduction automatique à partir des données du gouvernement du Canada, assurant l’accès à des services de traduction sécurisés disponibles en temps réel et de qualité égale dans les deux langues officielles |
| A.3.1.2 | Document project processes and lessons to identify policy and procedural barriers, and project teams’ needs for support, to develop and test governance processes, and to demonstrate how AI can be successfully scaled where necessary for Government of Canada requirements | Consigner les processus du projet et les leçons apprises pour repérer les obstacles liés aux politiques et aux procédures et les besoins des équipes de projet en matière de soutien. Cette procédure permet d’élaborer et de mettre à l’essai des processus de gouvernance et de démontrer la façon dont l’IA peut être mise à l’échelle avec succès pourraient être adaptés aux exigences du gouvernement du Canada, le cas échéant |
| B.1.1.1 | Identify best practice departmental and international governance frameworks that could be adapted where necessary for Government of Canada requirements | Cerner les pratiques exemplaires internationales et ministérielles sur les cadres de gouvernance qui pourraient être adaptés aux exigences du gouvernement du Canada, le cas échéant des organes de gouvernance ministériels et des propriétaires de solutions |
| B.1.1.2 | Develop a Government of Canada governance framework in a user-friendly format structured around the AI lifecycle with varying governance requirements according to system risk, sensitivity, and impact | Établir un cadre de gouvernance pour le gouvernement du Canada dans un format convivial structuré en fonction du cycle de vie de l’IA avec des exigences de gouvernance variables selon les risques, la sensibilité et l’incidence des systèmes |
| B.1.2.1 | Identify best practice risk frameworks that could be adapted where necessary for Government of Canada requirements | Cerner les pratiques exemplaires sur les cadres de gestion des risques qui pourraient être adaptés aux exigences du gouvernement du Canada, le cas échéant |
| B.1.3.1 | Scale PSPC’s Operational Ethics Review Board to become a government-wide AI ethics review board | Élargir le Conseil d’examen de l’éthique opérationnelle de SPAC pour qu’il devienne un conseil d’examen de l’éthique en matière d’IA à l’échelle du gouvernement |
| B.1.3.2 | Develop AI program governance structures for technical assessment and review, including determining role of existing bodies such as the Government of Canada Enterprise Architecture Review Board (EARB) | Mettre sur pied des structures de gouvernance concernant le programme d’IA pour effectuer des évaluations et des examens techniques, notamment déterminer le rôle des organes existants comme le Conseil d’examen de l’architecture intégrée (CEAI) du gouvernement du Canada |
| B.2.1.1 | Develop policy implementation notice on AI roles and responsibilities, including those of chief information, data, privacy, and security offices, chief architects, departmental governance bodies, and solution owners | Élaborer un avis de mise en œuvre de la politique sur les rôles et les responsabilités en matière d’IA, y compris ceux des dirigeants principaux de l’information et des données et les chefs de la protection des renseignements personnels et de la sécurité, des architectes en chef, des organes de gouvernance ministériels et des propriétaires de solutions |
| B.2.1.2 | Define acceptable use of AI by outside organizations in their interactions with the Government of Canada, including AI meeting transcription tools | Définir l’utilisation acceptable de l’IA par des organisations externes dans leurs interactions avec le gouvernement du Canada, y compris les outils d’IA pour la transcription de réunions |
| B.2.1.3 | Address legal and policy ambiguities related to privacy and training data, including guidance on de-identification for data sharing | Corriger les ambiguïtés juridiques et politiques liées aux données sur la protection de la vie privée et la formation, y compris des directives sur la dépersonnalisation pour l’échange des données |
| B.2.1.4 | Define scope and application of national security systems in the Policy on Service and Digital s6.3 and the national security exemption in a policy implementation notice | Définir la portée et l’application des systèmes de sécurité nationale à la section 6.3 de la Politique sur les services et le numérique et l’exemption relative à la sécurité nationale dans un avis de mise en oeuvre de la politique |
| B.2.2.1 | Establish agile process to review and update policy, guidance, tools and resources, develop new policy and guidance for emerging technologies and applications, and identify opportunities to synthesize or interpret existing policy to increase usability | Établir un processus agile pour examiner et mettre à jour les politiques, les directives, les outils et les ressources, élaborer de nouvelles politiques et directives sur des technologies et des applications émergentes et cerner les possibilités de synthétiser ou d’interpréter les politiques existantes afin de les rendre plus faciles à utiliser |
| B.2.3.1 | Review the Directive on Automated Decision-Making and the Algorithmic Impact Assessment tool, publish guidance, and consider their usability and design to ensure that they remain relevant to support departments in a changing technological and legislative landscape | Examiner la Directive sur la prise de décisions automatisée et l’outil d’évaluation de l’incidence algorithmique, publier des directives et examiner leur convivialité et leur conception pour s’assurer qu’elles sont toujours adaptées aux réalités des ministères dans un paysage technologique et législatif en évolution |
| B.2.3.2 | Update the Guide on the Use of Generative AI to adapt to reflect technological changes and address regular questions received from departments | Mettre à jour le Guide sur l’utilisation de l’intelligence artificielle générative pour qu’il soit adapté aux changements technologiques et en tienne compte et afin de répondre aux questions que reçoivent régulièrement les ministères |
| B.2.3.3 | Identify policy approaches needed to ensure the responsible use of AI for non-administrative purposes and propose action-oriented and department-focused mechanisms to address them | Cerner les approches stratégiques nécessaires pour assurer l’utilisation responsable de l’IA à des fins non administratives et proposer des mécanismes axés sur l’action et les ministères pour y remédier |
| B.2.4.1 | Review and update procurement policies, instruments and processes to make them more responsive to the pace and requirements of AI procurement | Passer en revue et mettre à jour les politiques, les instruments et les processus d’approvisionnement afin de mieux les adapter au rythme de l’IA et aux exigences d’approvisionnement en matière d’IA |
| B.2.5.1 | Review existing AI commitments in domestic policy and law, identifying where alignment is required | Examiner les engagements existants en matière d’IA dans les politiques et les lois nationales et déterminer les domaines où l’harmonisation est nécessaire |
| B.2.5.2 | Identify opportunities to align Pan-Canadian AI Strategy and the AI Strategy for the Public Service | Trouver des possibilités d’harmoniser la Stratégie pancanadienne en matière d’intelligence artificielle et la Stratégie en matière d’intelligence artificielle pour la fonction publique fédérale Examiner et mettre en oeuvre les engagements du Plan d’action de la Loi sur la Déclaration des Nations Unies sur les droits des peuples autochtones à l’égard de la souveraineté des |
| B.2.5.3 | Review and action the United Nations Declaration Act Action Plan commitments to Indigenous Data Sovereignty | Examiner et mettre en œuvre les engagements du Plan d’action de la Loi sur la Déclaration des Nations Unies sur les droits des peuples autochtones à l’égard de la souveraineté des données autochtones |
| B.2.5.4 | Identify opportunities to increase alignment with relevant international treaties, legislation and norms | Trouver des moyens de mieux harmoniser les normes, les lois et les traités internationaux applicables |
| B.3.1.1 | Update Memoranda to Cabinet drafter's guide to include AI and data considerations | Mettre à jour le guide du rédacteur des mémoires au Cabinet pour inclure les considérations relatives à l’IA et aux données |
| B.3.1.2 | Update Treasury Board Submission guide to include AI and data considerations, including data, AI, compute and other relevant resource needs and to prompt exploration of collaboration with other departments or scaling existing projects before building or buying new | Mettre à jour le guide des présentations au Conseil du Trésor afin d’inclure les considérations relatives à l’IA et aux données, y compris les besoins en matière de données, d’IA, de calcul et d’autres ressources pertinentes. Trouver des moyens de collaborer avec d’autres ministères ou d’adapter des projets existants avant d’en créer ou d’en acheter de nouveaux |
| B.3.1.3 | Strengthen TBS challenge function for AI and data | Renforcer la fonction de remise en question du SCT relativement à l’IA et aux données |
| B.3.1.4 | Clarify EARB expectations regarding the deployment of IT that includes AI or other intelligence automation including common architecture questions or presentation requirements, such as on model selection assessment, costs, and performance | Clarifier les attentes du CEAI concernant le déploiement de la technologie de l’information qui comprend l’IA ou d’autres formes d’automatisation, y compris les questions courantes sur l’architecture ou les exigences de présentation, comme l’évaluation de la sélection des modèles, les coûts et le rendement |
| B.3.1.5 | Require departments to consider and prioritize AI infrastructure and adoption in integrated IT planning | Exiger des ministères qu’ils tiennent compte de l’infrastructure et de l’adoption de l’IA dans la planification intégrée de la TI et qu’ils leur accordent la priorité |
| B.3.1.6 | Support the implementation of the Government of Canada Data Strategy mission and actions on data stewardship models, expectations, and common practices to ensure that high-quality data is available for AI implementation | Faciliter la mise en oeuvre des missions et des actions de la Stratégie relative aux données du gouvernement du Canada sur les modèles d’intendance des données, les attentes et les pratiques communes afin de s’assurer que des données de haute qualité sont disponibles pour la mise en oeuvre de l’IA |
| C.1.1.1 | Assess digital talent needs to the extent possible by leveraging available data on the Digital Talent Platform | Évaluer les besoins en matière de talents numériques en utilisant les données disponibles sur la plateforme Talents numériques dans la mesure du possible |
| C.2.1.1 | Meet AI training objectives by leveraging existing efforts under multiple plans, including the CSPS Annual Digital Academy Plan, the Office of the Chief Human Resources Officer’s Public Service Skills Strategy, and Office of the Chief Information Officer’s Digital Talent Strategy. These coordinated plans support an evergreen, role-based approach to AI training that includes foundational and advanced skills | Atteindre les objectifs de formation en matière d’IA au moyen des nombreux plans existants, notamment l’Académie du numérique de l’EFPC, la Stratégie relative aux compétences de la fonction publique du Bureau du dirigeant principal des ressources humaines et la Stratégie en matière de talents numériques du Bureau du dirigeant principal de l’information. Ces plans coordonnés favorisent une approche évolutive et axée sur les rôles de la formation en IA qui comprend des compétences de base et avancées |
| C.2.1.2 | Curate and promote tailored training and learning paths to address advanced technical skills for IT, AI and data practitioners | Organiser et promouvoir des parcours de formation et d’apprentissage personnalisés sur des compétences techniques avancées à l’intention des spécialistes de la TI, de l’IA et des données |
| C.2.1.3 | Develop, curate, and promote foundational core learning products and learning paths on AI for all public servants, including executives | Élaborer, organiser et promouvoir des parcours et des produits d’apprentissage de base sur l’IA pour tous les fonctionnaires, y compris la haute direction |
| C.2.1.4 | Convene a working group for key stakeholders in the AI learning space to discuss and evaluate ongoing needs and effectiveness of the centralized learning the Government of Canada is providing to all public servants | Convoquer un groupe de travail pour les principaux intervenants dans le domaine de l’apprentissage de l’IA afin de discuter et d’évaluer les besoins continus et l’efficacité de l’apprentissage centralisé que le gouvernement du Canada offre à tous les fonctionnaires |
| C.2.1.5 | Work with public servants through their bargaining agents to prepare the workforce through upskilling and retraining for changes resulting from AI | Travailler avec les fonctionnaires et leurs agents négociateurs afin de préparer la main-d’oeuvre aux changements découlant de l’IA en lui offrant du perfectionnement et du recyclage professionnel |
| C.3.1.1 | Develop mobility, recruitment, exchanges, and/or other types of opportunities on the Government of Canada Digital Talent Platform to recruit, develop, and retain AI and data talent | Accroître la mobilité, le recrutement, les échanges ou d’autres types d’occasions sur la plateforme Talents numériques du gouvernement du Canada pour recruter, perfectionner et maintenir en poste les talents en IA et en données |
| C.3.2.1 | Review and scale successful departmental initiatives | Examiner et reproduire les initiatives ministérielles réussies |
| C.3.3.1 | Explore options to use existing provisions for short-term and flexible staffing to optimize talent use | Étudier les options permettant d’inclure des dispositions existantes liées à la dotation à court terme et flexible afin d’optimiser l’utilisation des talents |
| C.3.4.1 | Explore reuse of challenge programs for specific projects | Étudier la possibilité de réutiliser les programmes Défi pour des projets particuliers |
| D.1.1.1 | Review Policy on Service and Digital to clarify roles and responsibilities for AI use | Examiner la Politique sur les services et le numérique pour clarifier les rôles et les responsabilités liés à l’utilisation de l’IA |
| D.1.2.1 | Develop and publish language for disclosure of AI use based on previously used examples | Élaborer et publier des libellés pour la divulgation de l’utilisation de l’IA en se fondant sur des exemples déjà utilisés |
| D.1.3.1 | Identify and publish list of prohibited uses based on existing commitments in law, policy, or treaties, with commitment to annual review and update | Établir et publier une liste des utilisations interdites en fonction des engagements existants dans les lois, les politiques ou les traités. Cette liste doit être examinée et mise à jour chaque année |
| D.1.4.1 | Define and publish register scope | Définir et publier la portée du registre |
| D.1.4.2 | Develop a minimal viable product AI register that connects to existing data sets such as personal information banks, the Service Inventory, and Algorithmic Impact Assessments | Créer un registre de l’IA de type « produit minimum viable » qui se connecte aux jeux de données existants comme les fichiers de renseignements personnels, le répertoire des services et les évaluations de l’incidence algorithmique |
| D.1.4.3 | Engage internal and external stakeholders to refine registry format and content to increase value and usability | Mobiliser les intervenants internes et externes pour améliorer le format et le contenu du registre afin d’accroître sa valeur et sa convivialité |
| D.1.5.1 | Define and publish alternative oversight processes for AI use that cannot be publicly reported in the register | Définir et publier d’autres processus de surveillance de l’utilisation de l’IA qui ne peuvent pas être déclarés publiquement dans le registre |
| D.2.1.1 | Develop metrics and performance indicators to demonstrate the impact and value of AI initiatives | Élaborer des mesures et des indicateurs de rendement pour démontrer l’incidence et la valeur des initiatives en matière d’IA |
| D.2.2.1 | Develop a consolidated dashboard that supports the outcomes and performance indicators of the AI and Data Strategies and the Digital Ambition | Élaborer un tableau de bord consolidé qui consigne les résultats et les indicateurs de rendement de la Stratégie en matière d’IA, de la Stratégie relative aux données et de l’Ambition numérique |
| D.2.2.2 | Develop metrics for deployment, collaboration, sharing and scaling of solutions, departmental investment in AI and enablers, and financial and non-financial return on investment for integration into dashboard | Élaborer des mesures liées au déploiement, à la collaboration, aux échanges et aux mises à l’échelle des solutions, aux investissements des ministères dans l’IA et les outils habilitants, ainsi qu’au retour sur les investissements financiers et non financiers aux fins d’intégration dans le tableau de bord |
| D.3.1.1 | Develop and publish expectations for meaningful public, Indigenous, and stakeholder engagement, using existing resources | Formuler et publier les attentes en matière de mobilisation constructive du public, des Autochtones et des intervenants à l’aide des ressources existantes |
| D.3.2.1 | Develop expectations and processes for engagement with bargaining agents | Formuler les attentes et établir les processus de mobilisation des agents négociateurs |
| D.3.3.1 | Develop expectations and processes for engagement with users | Formuler les attentes et établir les processus de mobilisation des utilisateurs |
| D.3.4.1 | Provide mechanisms for ongoing public feedback and questions on AI used by the federal government | Fournir des mécanismes facilitant la rétroaction continue et les questions du public sur l’IA utilisée par le gouvernement fédéral |

### 1-7 Description (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Description (English) |
| Field Name FR | Description (anglais) |
| ID | description_en |
| Description EN | Operational description in the AI Strategy |
| Description FR | Description opérationnelle de la stratégie en matière d'IA |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Limit the number of characters, free text (maximum 1500 characters). |
| Validation FR | Limiter le nombre de caractères, libre texte (maximum 1500 caractères). |
| Character Limit | 1500 |
| Example Value | Provide high-performance computing (HPC) and cloud infrastructure that is available, secure, and scalable to meet the demands of AI projects. |

### 1-8 Description (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Description (French) |
| Field Name FR | Description (français) |
| ID | description_fr |
| Description EN | Operational description in the AI Strategy |
| Description FR | Description opérationnelle de la stratégie en matière d'IA |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Limit the number of characters, free text (maximum 1500 characters). |
| Validation FR | Limiter le nombre de caractères, libre texte (maximum 1500 caractères). |
| Character Limit | 1500 |
| Example Value | Fournir une infrastructure de calcul haute performance (CHP) et d'informatique en nuage disponible, sécurisée et évolutive pour répondre aux exigences des projets d'IA. |

### 1-9 Expected Completion

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Expected Completion |
| Field Name FR | Achèvement attendu |
| ID | expected_completion |
| Description EN | Completion of activity |
| Description FR | Achèvement de l'activité |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Must match expected completion options in the controlled list. |
| Validation FR | Doit correspondre aux options d'achèvement prévues de la liste contrôlée. |
| Example Value | 2027-Q1 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| 2025-Q3 | 2025-Q3 | 2025-T3 |
| 2025-Q4 | 2025-Q4 | 2025-T4 |
| 2026-Q1 | 2026-Q1 | 2026-T1 |
| 2026-Q2 | 2026-Q2 | 2026-T2 |
| 2026-Q3 | 2026-Q3 | 2026-T3 |
| 2026-Q4 | 2026-Q4 | 2026-T4 |
| 2027-Q1 | 2027-Q1 | 2027-T1 |
| 2027-Q2 | 2027-Q2 | 2027-T2 |

### 1-10 Lead Department(s)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Lead Department(s) |
| Field Name FR | Ministère(s) responsable(s) |
| ID | lead_department |
| Description EN | Primary departments involved |
| Description FR | Principaux départements concernés |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text Array |
| Validation EN | Must match departments and organizations in the controlled list. |
| Validation FR | Doit correspondre aux départements et organisations de la liste contrôlée. |
| Example Value | TBS,PCO |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| TBS | Treasury Board of Canada Secretariat | Secrétariat du Conseil du Trésor du Canada |
| CDS | Canadian Digital Service | Service Numérique Canadien |
| CSE | Communications Security Establishment | Centre de la sécurité des télécommunications Canada |
| PCO | Privy Council Office | Bureau du Conseil Privé |
| CSPS | Canada School of Public Service | École de la fonction publique du Canada |
| GAC | Global Affairs Canada | Affaires Mondiales Canada |
| ISC | Indigenous Services Canada | Services aux Autochtones Canada |
| ISED | Innovation, Science, and Economic Development Canada | Innovation, Sciences et Développement économique Canada |
| PSPC | Public Services and Procurement Canada | Services publics et Approvisionnement Canada |
| SSC | Shared Services Canada | Services Partagés Canada |
| NRC | National Research Council Canada | Conseil national de recherches Canada |

### 1-11 Status

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Status |
| Field Name FR | État |
| ID | status |
| Description EN | AI Strategy tracker status |
| Description FR | Statut du tracker de la stratégie IA |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Must be one of: Not Started, In Progress, Completed. |
| Validation FR | Il doit s'agir de l'un des éléments suivants : Non commencé, En cours, Terminé. |
| Example Value | IP |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| NS | Not started | Non commencé |
| IP | In progress | En cours |
| CO | Completed | Réalisé |

### 1-12 Progress Made (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Progress Made (English) |
| Field Name FR | Progrès réalisés (anglais) |
| ID | progress_en |
| Description EN | Describes any progress made |
| Description FR | Décrit les progrès réalisés |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Limit the number of characters, free text (maximum 1500 characters). |
| Validation FR | Limiter le nombre de caractères, libre texte (maximum 1500 caractères). |
| Character Limit | 1500 |
| Example Value | AI Strategy is being implemented using various new initiatives. The initiatives are divided into four components. The four components of this initiative as further been broken down into various activities, sub-activities, status trackability, descriptions, and progress made. Progress made is being tracked using: In Progress, Not Started, or Completed. |

### 1-13 Progress Made (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Progress Made (French) |
| Field Name FR | Progrès réalisés (français) |
| ID | progress_fr |
| Description EN | Describes any progress made |
| Description FR | Décrit les progrès réalisés |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Limit the number of characters, free text (maximum 1500 characters). |
| Validation FR | Limiter le nombre de caractères, libre texte (maximum 1500 caractères). |
| Character Limit | 1500 |
| Example Value | La stratégie en matière d'IA est mise en œuvre à l'aide de diverses nouvelles initiatives. Ces initiatives sont divisées en quatre volets. Les quatre volets de cette initiative ont été subdivisés en diverses activités, sous-activités, suivi de l'état d'avancement, descriptions et progrès réalisés. Les progrès réalisés sont suivis à l'aide des statuts suivants : En cours, Non commencé ou Terminé. |


---

# Data Element Profile: ATI Summaries

_Source YAML: `ati.yaml`_

## [Legend](#legend)

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

## [ATI Summaries](#ati-summaries)

### 1-1 Year

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Year |
| Field Name FR | Année |
| ID | year |
| Description EN | This field must be populated with the four-digit calendar year that the request was closed. |
| Description FR | Ce champ doit être complété avec l’année civile à quatre chiffres durant laquelle la demande a été complétée. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | Must be not be in the future or before 2011 |
| Validation FR | Ne peux pas être dans le futur ni avant 2011 |
| Example Value | 2020 |

### 1-2 Month (1-12)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Month (1-12) |
| Field Name FR | Mois (1-12) |
| ID | month |
| Description EN | This field must be populated with a numerical representation of the month during which the request was closed. |
| Description FR | Ce champ doit être complété avec la représentation numérique du mois durant lequel la demande a été complétée. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | Must be in the range of 1-12 (representing January-December). |
| Validation FR | Doit être dans la gamme de 1-12 (représente janvier-décembre) |
| Example Value | 10 |

### 1-3 Request Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Request Number |
| Field Name FR | Numero de la demande |
| ID | request_number |
| Description EN | Your institution’s request file number of the completed Access to Information request. |
| Description FR | Numéro de dossier de demande de votre institution de la demande d’accès à l’information complétée. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | A-2020-00516 |

### 1-4 English Summary

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | English Summary |
| Field Name FR | Sommaire de la demande en anglais |
| ID | summary_en |
| Description EN | A descriptive summary of the completed Access to Information request in English. |
| Description FR | Un résumé descriptif de la demande d’accès à l’information en anglais. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Copies of the Safety Management System Audit and Evaluation Reports |

### 1-5 French Summary

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | French Summary |
| Field Name FR | Sommaire de la demande en français |
| ID | summary_fr |
| Description EN | A descriptive summary of the completed Access to Information request in French. |
| Description FR | Un résumé descriptif de la demande d’accès à l’information en français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Copies des rapports de vérification et d’évaluation du système de gestion de la sécurité |

### 1-6 Disposition

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Disposition |
| Field Name FR |   |
| ID | disposition |
| Description EN | The response disposition of the completed Access to Information request |
| Description FR | La disposition de la réponse de la demande d’accès à l’information complétée. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | DP |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| DA | All disclosed | Communication totale |
| DP | Disclosed in part | Communication partielle |
| EX | All exempted | Exception totale |
| EC | All excluded | Exclusion totale |
| NE | No records exist | Aucun document n’existe |

### 1-7 Number of Pages

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of Pages |
| Field Name FR | Nombre de pages |
| ID | pages |
| Description EN | The number of pages released in response to the completed Access to Information request. If no records were released, enter a value of “0”. |
| Description FR | Le nombre de pages publiées en réponse à la demande d’accès à l’information. Si aucun enregistrement n’a été publié, entrez la valeur « 0 ». |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | This value must not be negative |
| Validation FR | Cette valeur ne doit pas être négatif |
| Example Value | 779 |

### 1-8 Comments English

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Comments English |
| Field Name FR | Commentaires en anglais |
| ID | comments_en |
| Description EN | This field may be populated with additional or contextual comments in English. |
| Description FR | Ce champ peut être rempli avec des commentaires supplémentaires ou contextuels en anglais. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | The disclosure package also included audio recordings |

### 1-9 Comments French

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Comments French |
| Field Name FR | Commentaires en français |
| ID | comments_fr |
| Description EN | This field may be populated with additional or contextual comments in French. |
| Description FR | Ce champ peut être rempli avec des commentaires supplémentaires ou contextuels en français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Le dossier de divulgation comprend en plus des enregistrements audio |

## [ATI Summaries](#ati-summaries)

### 2-1 Year

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Year |
| Field Name FR | Année |
| ID | year |
| Description EN | Four-digit calendar year of the month for which you are reporting no summaries to publish. |
| Description FR | Année civile a quatre chiffres du mois pour lequel vous ne signalez aucun résumé à publier. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | Must be not be in the future or before 2011 |
| Validation FR | Ne peux pas être dans le futur ni avant 2011 |
| Example Value | 2014 |

### 2-2 Month (1-12)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Month (1-12) |
| Field Name FR | Mois (1-12) |
| ID | month |
| Description EN | A numerical representation of the month for which you are reporting no summaries to publish. |
| Description FR | Une représentation numérique du mois pour lequel vous ne signalez aucun résumé a publier. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | Must be in the range of 1-12 (representing January-December). |
| Validation FR | Doit être dans la gamme de 1-12 (représente janvier-décembre) |
| Example Value | 10 |


---

# Data Element Profile: Proactive Publication - Briefing Note Titles and Numbers

_Source YAML: `briefingt.yaml`_

## [Legend](#legend)

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

## [Proactive Publication - Briefing Note Titles and Numbers](#proactive-publication-briefing-note-titles-and-numbers)

### 1-1 Briefing Note Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Briefing Note Number |
| Field Name FR | Numéro de suivi |
| ID | tracking_number |
| Description EN | This field will display the internal tracking number of the Briefing Note. |
| Description FR | Ce champ affichera le numéro de suivi interne de la note de breffage. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 10089-4266 |

### 1-2 Title (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Title (English) |
| Field Name FR | Titre (en anglais) |
| ID | title_en |
| Description EN | This field is populated by the user with the official title of the Briefing Note, in English. |
| Description FR | Ce champ est rempli par l'utilisateur avec le titre officiel de la note de breffage, en anglais. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Partner views |

### 1-3 Title (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Title (French) |
| Field Name FR | Titre (en français) |
| ID | title_fr |
| Description EN | This field is populated by the user with the official title of the Briefing Note, in French. |
| Description FR | Ce champ est rempli par l'utilisateur avec le titre officiel de la note de breffage, en français. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Opinions des partenaires |

### 1-4 Originating Sector (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Originating Sector (English) |
| Field Name FR | Secteur d’origine (en anglais) |
| ID | originating_sector_en |
| Description EN | The Sector, Branch, or Division where the Briefing Note originated in English. If there are multiple sectors/branches/divisions, they may be separated by a semicolon (;) |
| Description FR | Le secteur, la direction ou la division d'où provient la note de breffage en anglais. S'il y a plusieurs secteurs/directions/divisions, on peut les séparer par un point-virgule (;). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Finance; Treasurer |

### 1-5 Originating Sector (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Originating Sector (French) |
| Field Name FR | Secteur d’origine (en français) |
| ID | originating_sector_fr |
| Description EN | The Sector, Branch, or Division where the Briefing Note originated in French. If there are multiple sectors/branches/divisions, they may be separated by a semicolon (;) |
| Description FR | Le secteur, la direction ou la division d'où provient la note de breffage en français S'il y a plusieurs secteurs/directions/divisions, on peut les séparer par un point-virgule (;). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Finance; Trésorier |

### 1-6 Addressee

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Addressee |
| Field Name FR | Destinataire |
| ID | addressee |
| Description EN | This field will display the person to whom the briefing note is addressed. |
| Description FR | Ce champ affichera le nom de la personne à qui la note de breffage est adressée. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | M |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| M | Minister | Ministre |
| D | Deputy head (including a person appointed to a position of an equivalent rank) | Administrateurs généraux (y compris une personne nommée à un poste de rang équivalent) |

### 1-7 Date Received

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Date Received |
| Field Name FR | Date de réception |
| ID | date_received |
| Description EN | This field will display the date on which the Briefing Note was received in the addressee's office. |
| Description FR | Ce champ affichera la date à laquelle la note de breffage a été reçue par le bureau du destinataire. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Date |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 2018-04-01 |

### 1-8 Action Required

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Action Required |
| Field Name FR | Mesure requise |
| ID | action_required |
| Description EN | The Action Required is the purpose of the briefing note; For Information: If the item is being routed solely for the information of the addressee; For Approval/Signature: If the item is for approval or signature only of the addressee; For Decision: If the item requests the addressee make a decisive decision |
| Description FR | La mesure requise représente le but de la note de breffage; À titre d'information : Si l'élément n'est envoyé que pour informer le destinataire; Pour approbation/signature; Si l'élément est envoyé à des fins d'approbation ou de signature seulement par le destinataire; Pour décision : Si l'élément demande au destinataire de prendre une décision décisive. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | D |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| I | For Information | Pour Information |
| D | For Decision | Décision attendue |
| S | For Signature | Pour Signature |

### 1-9 Additional Information (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Additional Information (English) |
| Field Name FR | Renseignements supplémentaires (en anglais) |
| ID | additional_information_en |
| Description EN | This field will display any additional information/comments for the Briefing Note, in English. |
| Description FR | Ce champ affichera de plus amples renseignements/commentaires concernant la note de breffage, en anglais. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | None |
| Validation FR | None |
| Example Value | Relates to the family services program reform |

### 1-10 Additional Information (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Additional Information (French) |
| Field Name FR | Renseignements supplémentaires (en français) |
| ID | additional_information_fr |
| Description EN | This field will display any additional information/comments for the Briefing Note, in French. |
| Description FR | Ce champ affichera de plus amples renseignements/commentaires concernant la note de breffage, en français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | None |
| Validation FR | None |
| Example Value | Programme des services familiaux |

## [Proactive Publication - Briefing Note Titles and Numbers](#proactive-publication-briefing-note-titles-and-numbers)

### 2-1 Year

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Year |
| Field Name FR | Année |
| ID | year |
| Description EN | This tab / field in the template is only populated if there are no briefing notes for the reporting period. This field should be populated with the year of the reporting period. |
| Description FR | Cet onglet/champ du modèle n’est rempli que s'il n'y a pas de notes de breffage pour la période d’établissement de rapports. Ce champ doit être rempli avec l’année de la période d’établissement de rapports. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 2023 |

### 2-2 Month (1-12)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Month (1-12) |
| Field Name FR | Mois (1-12) |
| ID | month |
| Description EN | This tab / field in the template is only populated if there are no briefing notes for the reporting period. This field should be populated with the month of the reporting period. |
| Description FR | Cet onglet/champ du modèle n’est rempli que s'il n'y a pas de notes de breffage pour la période d’établissement de rapports. Ce champ doit être rempli avec le mois de la période d’établissement de rapports. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | Must be in the range of 1-12 (representing January-December). |
| Validation FR | Doit être dans la gamme de 1-12 (représente janvier-décembre) |
| Example Value | 10 |


---

# Data Element Profile: Open Dialogue - Consultations

_Source YAML: `consultations.yaml`_

## [Legend](#legend)

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

## [Open Dialogue - Consultations](#open-dialogue-consultations)

### 1-1 Registration Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Registration Number |
| Field Name FR | Numéro d’enregistrement |
| ID | registration_number |
| Description EN | This field is populated by the user. It is a unique reference number given to each line item in the spreadsheet. Having a unique identifier for each item will allow users locate a specific item in the registry should they need to modify or delete. The Registration Number should respect the following format: C-XXXXXXX. |
| Description FR | Cette zone doit être remplie par l’utilisateur. Il s’agit d’un numéro de référence unique donné à chaque article de la feuille de calcul. Les utilisateurs peuvent ainsi trouver, dans un registre donné, un article précis à modifier ou à supprimer. Le numéro d’enregistrement doit respecter le format suivant : C-XXXXXXX. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | CCC0249 |

### 1-3 Partner Department(s)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Partner Department(s) |
| Field Name FR | Ministère(s) partenaire(s) |
| ID | partner_departments |
| Description EN | This field identifies the name(s) of the departments who are collaborating on the identified engagement process. Please provide the numerical code associated to each department and separated by commas. |
| Description FR | Cette zone indique le ministère ou les ministères qui collaborent au processus de participation en question. Il faut indiquer le nom complet des ministères (aucun acronyme). |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Repeatable |
| Format Type | Text Array |
| Validation EN | None |
| Validation FR | None |
| Example Value | D271,D141 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| D235 | Agriculture and Agri-Food Canada (AAFC) | Agriculture et Agroalimentaire Canada (AAC) |
| D229 | Canada Border Services Agency (CBSA) | Agence des services frontaliers du Canada (ASFC) |
| D87 | Canada Mortgage and Housing Corporation | Société canadienne d'hypothèques et de logement |
| D47 | Canada Revenue Agency (CRA) | Agence du revenu du Canada (ARC) |
| D202 | Canada Science and Technology Museum (CSTM) | Musée des sciences et de la technologie du Canada (MSTC) |
| D73 | Canadian School of Public Service (CSPS) | École de la fonction publique du Canada (EFPC) |
| D35 | Canadian Centre for Occupational Health and Safety (CCOHS) | Centre canadien d’hygiène et de sécurité au travail (CCHST) |
| D169 | Canadian Coast Guards (CCG) | Garde côtière canadienne  (GCC) |
| D239 | Canada Energy Regulator (CER) | La Régie de l’énergie du Canada (REC) |
| D270 | Impact Assessment Agency of Canada (IAAC) | Agence d'évaluation d'impact du Canada (AEIC) |
| D206 | Canadian Food Inspection Agency (CFIA) | Agence canadienne d’inspection des aliments (ACIA) |
| D16 | Canadian Heritage (PCH) | Patrimoine canadien (PCH) |
| D236 | Canadian Institutes of Health Research (CIHR) | Instituts de recherche en santé du Canada (IRSC) |
| D90 | Canadian Security Intelligence Service (CSIS) | Service canadien de renseignement de sécurité (SCRS) |
| D193 | Correctional Services Canada | Service correctionnel du Canada |
| D141 | Employment and Social Development Canada (ESDC) | Emploi et Dévelopement social Canada (EDSC) |
| D99 | Environment and Climate Change Canada (ECCC) | Environnement et Changement climatique Canada (ECCC) |
| D157 | Department of Finance Canada (FIN) | Ministère des finances Canada (FIN) |
| D253 | Fisheries and Oceans Canada (DFO) | Pêches et Océans Canada (MPO) |
| D64 | Global Affairs Canada (GAC) | Affaires mondiales Canada (AMC) |
| D271 | Health Canada (HC) | Santé Canada (SC) |
| D94 | Immigration, Refugees and Citizenship Canada (IRCC) | Immigration, Réfugiés et Citoyenneté Canada (IRCC) |
| D278 | Infrastructure Canada (INFC) | Infrastructure Canada (INFC) |
| D249 | Indigenous and Northern Affairs Canada (INAC) | Affaires autochtones et du Nord Canada (AANC) |
| D230 | Innovation,Science amd Econmic Development Canada (ISEDC) | Innovation, Sciences et Développement économique Canada (ISDEC) |
| D119 | Department of Justice Canada (JUS) | Ministère de la Justice Canda (JUS) |
| D231 | Law Commission of Canada | Commission du droit du Canada |
| D32 | National Defence (DND) | Défense nationale (MDN) |
| D172 | National Research Council Canada (NRCC) | Conseil national de recherches du Canada (CNRC) |
| D115 | Natural Ressources Canada (NRCan) | Ressources naturelles Canada (NRCan) |
| D154 | Parks Canada (PC) | Parcs Canada (PC) |
| D143 | Polar Knowledge Canada (POLAR) | Savoir polaire Canada (POLAIRE) |
| D173 | Privy Council Office (PCO) | Bureau du Conseil privé (BCP) |
| D135 | Public Health Agency of Canada (PHAC) | Agence de la santé publique du Canada (ADPC) |
| D214 | Public Safety Canada (PS) | Sécurité publique Canada (PS) |
| D81 | Public Services and Procurement Canada (PSPC) | Services publiques et Approvisionnement Canada (SPAC) |
| D131 | Royal Canadian Mounted Police (RCMP) | Gendarmerie Royale du Canada (GRC) |
| D110 | Science and Engineering Research Canada (SERC) | Recherche en sciences et génie du Canada (RSGC) |
| D92 | Shared Services Canada (SSC) | Services partagés Canada (SPC) |
| D207 | Social Sciences and Humanities Research Council of Canada (SSHRC) | Conseil de recherches en sciences humaines du Canada (CRSHC) |
| D256 | Statistics Canada (STATCAN) | Statistiques Canada (STATCAN) |
| D147 | Status of Women Canada (SWC) | Condition féminine Canada (CFC) |
| D262 | The National Battlefields Commission (NBC) | Commission des champs bataille nationaux (CCBN) |
| D217 | Transport Canada (TC) | Transport Canada (TC) |
| D215 | Transportation Safety Board of Canada (TSB) | Bureau de la sécurité des transports du Canada (BST) |
| D139 | Treasury Board Secretariat (TBS) | Secrétariat du Conseil du Trésor (SCT) |
| D189 | Veterans Affairs Canada (VAC) | Anciens Combattants Canada (ACC) |
| D55 | Western Economic Diversification Canada (WD) | Diversification de l’économie de l’Ouest Canada (DEO) |
| D93 | Economic Development Agency of Canada for the Regions of Quebec (CED) | Agence de développement économique du Canada pour les régions du Québec (DEC) |

### 1-4 Subjects

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Subjects |
| Field Name FR | Sujets |
| ID | subjects |
| Description EN | This field indicates the different subjects related to the engagement process. |
| Description FR | Cette zone indique les différents sujets sur lesquels porte le processus de participation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text Array |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | IP,CD,HS,SE |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| AD | Advertising / Marketing | Publicité et Marketing |
| AG | Agriculture | Agriculture |
| AM | Amendments | Modifications |
| AN | Animals | Animaux |
| AA | Arts | Arts |
| CD | Children | Enfants |
| CM | Communication | Communication |
| CR | Copyright / Trademarks / Patents | Droit d’auteur/Marques de commerce/Brevets |
| CU | Culture | Culture |
| DV | Development | Développement |
| ED | Economic development | Développement économique |
| EC | Economy | Économie |
| EM | Employment | Emploi |
| EN | Environment | Environnement |
| EU | Education | Éducation |
| EX | Exporting / Importing | Exportation/Importation |
| FI | Finance | Finances |
| FA | Financial assistance and entitlements | Aide financière et droits |
| FS | Fisheries | Pêches |
| FD | Food and drug | Aliments et drogues |
| FO | Foreign affairs | Affaires étrangères |
| GBA | Gender Based Analysis | Analyse comparative entre les sexes |
| GE | Gender | Sexes |
| GP | Government procurement | Marché public |
| HS | Health | Santé |
| HP | Heritage | Patrimoine |
| HL | Housing | Logement |
| HR | Human resources | Ressources humaines |
| IM | Immigration | Immigration |
| IN | Industry | Industrie |
| IP | Indigenous Peoples | Peuples autochtones |
| IT | International | Internationaux |
| JL | Justice and the Law | Justice et Loi |
| LT | Labour | Travail |
| ND | National Defence | Défense nationale |
| NR | Natural resources | Ressources naturelles |
| PD | Persons with disabilities | Personnes handicapées |
| PL | Plants | Végétaux |
| PO | Policy | Politique |
| PR | Private sector | Secteur privé |
| PS | Public safety | Sécurité publique |
| RL | Recreation | Loisirs |
| RE | Regulations | Règlements |
| RU | Rural and remote services | Services aux régions rurales et isolées |
| ST | Science and technology | Sciences et technologie |
| SA | Seniors | Aînés |
| SE | Service | Service |
| SO | Society | Société |
| SP | Sport | Sport |
| TX | Taxes | Impôts et taxes |
| TC | Trade | Commerce |
| TF | Training and careers | Formation et carrières |
| TR | Transportation | Transport |
| YJ | Youth | Jeunes |

### 1-5 Consultation Title (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Consultation Title (English) |
| Field Name FR | Titre de la consultation (en anglais) |
| ID | title_en |
| Description EN | This field identifies the complete name of the consultation in English. |
| Description FR | Cette zone indique le titre, en anglais, de la consultation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Family Services Program Reform |

### 1-6 Consultation Title (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Consultation Title (French) |
| Field Name FR | Titre de la consultation (en français) |
| ID | title_fr |
| Description EN | This field identifies the complete name of the consultation in French. |
| Description FR | Cette zone indique le titre, en français, de la consultation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Réforme du programme des services à l'enfance |

### 1-7 Description (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Description (English) |
| Field Name FR | Description (en anglais) |
| ID | description_en |
| Description EN | This field provides information regarding the nature of consultation and engagement activities in English. This includes a description of the main objectives and expected outcomes of the engagement process. Users are invited to explain how the engagement activities, methods and/or tools will help meet the consultation’s objectives. |
| Description FR | Cette zone fournit de l’information, en anglais, sur la nature des activités de consultation et de participation. On y trouve notamment une description des principaux objectifs et des résultats attendus du processus de participation. On invite les utilisateurs à expliquer en quoi les activités, les méthodes et les outils permettront d’atteindre les objectifs de la consultation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | To engage and obtain Provincial and Territorial partner views |

### 1-8 Description (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Description (French) |
| Field Name FR | Description (en français) |
| ID | description_fr |
| Description EN | This field provides information regarding the nature of consultation and engagement activities in French. This includes a description of the main objectives and expected outcomes of the engagement process. Users are invited to explain how the engagement activities, methods and/or tools will help meet the consultation’s objectives. |
| Description FR | Cette zone fournit de l’information, en français, sur la nature des activités de consultation et de participation. On y trouve notamment une description des principaux objectifs et des résultats attendus du processus de participation. On invite les utilisateurs à expliquer en quoi les activités, les méthodes et les outils permettront d’atteindre les objectifs de la consultation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Obtenir les opinions des partenaires provinciaux et territoriaux |

### 1-9 Target Participants and Audience

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Target Participants and Audience |
| Field Name FR | Participants visés et public cible |
| ID | target_participants_and_audience |
| Description EN | This field provides information regarding the target participants and audience of the engagement process. |
| Description FR | Cette zone précise les participants visés et le public cible du processus de participation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text Array |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | IP,IG,PT |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| AC | Academics | Universitaires |
| AD | Advocacy | Groupes de défense des intérêts |
| AG | Agriculture Production | Production agricole |
| AA | Arts and Culture Institutions | Institutions artistiques et culturelles |
| BS | Business and Industry Associations | Associations commerciales et industrielles |
| CC | Canadians | Canadiens |
| CA | Canadians Living Abroad | Canadiens vivant à l’étranger |
| CH | Charities | Organismes caritatifs |
| CU | Colleges and Universities | Collèges et universités |
| CS | Construction Companies | Entreprises de construction |
| CO | Consumers | Consommateurs |
| CI | Cultural Industries | Industries culturelles |
| ET | Ethnic groups/minorities | Groupes/minorités ethniques |
| FA | Family and Community Services | Services à la famille et à la communauté |
| FI | Financial and Insurance Institutions | Établissements financiers et compagnies d’assurance |
| FM | Food Manufacturers | Fabricants de produits alimentaires |
| FC | Foreign Countries | Pays étrangers |
| FN | First Nations | Premières Nations |
| FW | Foreign Workers | Travailleurs étrangers |
| GP | General Public | Grand public |
| HC | Health Care Providers and Social Assistance Services | Fournisseurs de soins de santé et services d’assistance sociale |
| IM | Immigrants | Immigrants |
| IO | Indigenous Organizations | Organisations autochtones |
| IP | Indigenous Peoples | Peuples autochtones |
| IG | International Governments | Gouvernement internationale |
| IB | Indigenous governing bodies | Organismes de gouvernance autochtones |
| IU | Inuit | Inuit |
| NI | International NGOs and Not-for-profit | ONG et organisations à but non lucratif internationales |
| OI | International Organizations | Organisations internationales |
| IT | IT and Security Industry | Industrie de la TI et de la sécurité |
| JM | Journalists/Media | Journalistes/Médias |
| LU | Labour Associations and Unions | Associations de travailleurs et syndicats |
| LA | Law Enforcement Bodies | Organismes d’application de la loi |
| LM | Linguistic minorities | Minorités lingustiques |
| LF | Low-income families | Familles à faible revenu |
| LP | Land and Property Owners | Propriétaires fonciers et immobiliers |
| MA | Manufacturers | Fabricants |
| EI | Mining, Quarrying, Oil and Gas Extraction Industry | Industrie des mines, des carrières et de l’extraction pétrolière et gazière |
| MT | Métis | Métis |
| MU | Municipalities | Municipalités |
| NR | Natural Resources Industry | Industrie des ressources naturelles |
| NT | Northerners | Habitants du Nord |
| NW | Newcomers | Nouveaux arrivants |
| NG | NGOs and Not for Profit | ONG et organisations à but non lucratif |
| OD | Other Federal Departments and Agencies | Autres ministères et organismes fédéraux |
| PC | Parents and Caregivers | Parents et proches aidants |
| PA | Parliamentarians | Parlementaires |
| PP | Patients | Patients |
| PD | People with disabilities | Personnes ayant un handicap |
| PR | Permanent Residents | Résidents permanents |
| PT | Provinces/Territories | Provinces/Territoires |
| PS | Public Servants | Fonctionnaires |
| RE | Real Estate Companies | Sociétés immobilières |
| RF | Refugees | Réfugiés |
| RG | Regulatory Body | Organismes de réglementation |
| RP | Regulatory and Professional Associations | Organismes de réglementation et associations profesionnelles |
| RO | Research Organizations | Organisations de recherche |
| RC | Researchers | Chercheurs |
| RT | Retail Trade Companies | Entreprises de commerce au détail |
| RU | Rural Residents | Résidents des régions rurales |
| SL | Scientific Labs | Laboratoires scientifiques |
| SE | Seniors | Aînés |
| SM | Small and Medium Businesses | Petites et moyennes entreprises |
| SP | Service Providers | Fournisseurs de services |
| ST | Students | Étudiants |
| TT | Think Tanks | Groupes de réflexion |
| TO | Transportation Organizations | Organisations de transport |
| TR | Treaty rights and self-government agreement holders | Détenteurs de droits issus des traités |
| UI | Urban Indigenous Peoples | Autochtones vivant en milieu urbain |
| UP | Unions and/or Professional Associations | Syndicats et / ou associations professionnelles |
| UR | Urban Residents | Populations urbaines |
| VV | Veterans | Vétérans et anciens combattants |
| WM | Waste Management Services | Services de gestion des déchets |
| WT | Wholesale Trade Organizations | Organisations de commerce de gros |
| WF | Women | Femmes |
| YJ | Youth | Jeunes |

### 1-10 Start Date

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Start Date |
| Field Name FR | Date de début |
| ID | start_date |
| Description EN | This field indicates when a planned consultation will begin to accept input from participants. |
| Description FR | Ce champ indique quand une séance de planification prévue commencera à accepter les commentaires des participants. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Date |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 2018-05-15 |

### 1-11 End Date

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | End Date |
| Field Name FR | Date de fin |
| ID | end_date |
| Description EN | This field indicates the end date of the consultation. The consultation is considered closed when no more engagement activities will take place and/or when a department begins analysing the input received during the engagement process. |
| Description FR | Ce champ indique la date à laquelle la consultation a pris fin. Une consultation est terminée lorsqu’il n’y a plus d’activités de participation qui se tiendront et/ou lorsqu’un ministère entreprend l’analyse des commentaires reçus dans le cadre du processus de participation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Date |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 2018-05-30 |

### 1-12 Status

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Status |
| Field Name FR | État |
| ID | status |
| Description EN | The field indicates the current status of the engagement process. |
| Description FR | Cette zone indique l’état d’avancement du processus de participation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | P |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| P | Planned | Prévue |
| O | Open – Accepting Input | Ouverte – Avis acceptés |
| CA | Closed – Analyzing Input | Fermée – Analyse en cours |
| CN | Closed – No Report Expected | Fermée – Aucun rapport en attente |
| CR | Closed – Report Available | Fermée – Rapport disponible |
| NF | Not Going Forward | Ne va pas de l'avant |

### 1-13 Link to Consultations Profile Page (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Link to Consultations Profile Page (English) |
| Field Name FR | Lien vers la page du profil des consultations (en anglais) |
| ID | profile_page_en |
| Description EN | This field provides the link to the English engagement information profile page. |
| Description FR | Cette zone contient le lien vers la page de profil (en anglais) qui donne des renseignements sur le processus de participation du public. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | http://example.gc.ca/en |

### 1-14 Link to Consultations Profile Page (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Link to Consultations Profile Page (French) |
| Field Name FR | Lien vers la page du profil des consultations (en français) |
| ID | profile_page_fr |
| Description EN | This field provides the link to the French engagement information profile page. |
| Description FR | Cette zone contient le lien vers la page profil française qui contient des renseignements sur le processus de participation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | http://example.gc.ca/fr |

### 1-15 Report Available online

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Report Available online |
| Field Name FR | Rapport disponible en ligne |
| ID | report_available_online |
| Description EN | This field indicates if the “What we Heard” report is completed, published and made available online on the Consulting with Canadians website. |
| Description FR | Cette zone indique si le rapport intitulé « Ce que nous avons entendu » est terminé, publié et disponible sur le site Web « Consultations auprès des Canadiens ». |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | N |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| Y | Yes | Oui |
| N | No | Non |

### 1-16 Link to the “What we Heard” Report in English

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Link to the “What we Heard” Report in English |
| Field Name FR | Lien – rapport « Ce que nous avons entendu » en anglais |
| ID | report_link_en |
| Description EN | This field provides the link to the “What we Heard” report when it is available online. |
| Description FR | Cette zone contient le lien vers le rapport intitulé « Ce que nous avons entendu » en anglais après que le rapport est affiché en ligne. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | None |
| Validation FR | None |

### 1-17 Link to the “What we Heard” Report in French

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Link to the “What we Heard” Report in French |
| Field Name FR | Lien – rapport « Ce que nous avons entendu » en français |
| ID | report_link_fr |
| Description EN | This field provides the link to the “What we Heard” report when it is available online. |
| Description FR | Cette zone contient le lien vers le rapport intitulé « Ce que nous avons entendu » après que le rapport est affiché en ligne. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | None |
| Validation FR | None |

### 1-22 High Profile

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | High Profile |
| Field Name FR | Haute visibilité |
| ID | high_profile |
| Description EN | This field indicates whether the consultation or public engagement initiative is considered high profile. The consultation is considered high profile if it meets one or more of the criteria in the ‘Rationale’ field. |
| Description FR | Cette zone indique si la consultation ou initiative de participation est à haute visibilité. La consultation est considérée comme de haute visibilité si elle réponde à un ou plus de critères à la zone 'Raison'. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Y |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| Y | Yes | Oui |
| N | No | Non |

### 1-23 Rationale

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Rationale |
| Field Name FR | Raison |
| ID | rationale |
| Description EN | The field indicates the rationale that prompted the public engagement initiative. This field includes only criteria that define high profile public engagement. |
| Description FR | Cette zone comprend le(s) motif(s) de l’activité de participation du public. Cette zone inclut uniquement les critères qui définissent une consultation ou participation public de profil élevé. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text Array |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | BG,PC |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| BG | Budget | Budget |
| IN | International Commitment | Engagement international |
| LC | Duty to Consult | Obligation de consulter |
| ML | Mandate Letter | Lettre de mandat |
| MP | Minister and/or Parliamentary Secretary Involvement and/or announcement | Implication ou annonce du ministre ou du secrétaire parlementaire |
| PC | Parliament Committee | Comité parlementaire |
| ST | Speech of the Throne | Discours du Trône |


---

# Data Element Profile: Proactive Publication - Contracts over $10,000

_Source YAML: `contracts.yaml`_

# Timelines
1. Organizations are required to publicly disclose quarterly, within one month after the close of each quarter, contracts entered into over $10K, and positive and negative amendments over $10K.
2. Organizations are required to provide information on contracts entered into and amendments valued from -$10K to $10K to Public Services and Procurement Canada (PSPC). Such contracts and amendments are to be reported annually by March 1st of the following calendar year. For example, a contract entered into in calendar year 2017 is to be reported by March 1, 2018.
3. Organizations are required to publicly disclose, on a calendar year basis, a separate report on the volume and cumulative dollar value of each commodity type for contracts valued $10K and under, and amendments from -$10K to $10K. For example, the report for calendar year 2017 is to be publicly disclosed by March 1, 2018. In addition, organizations are to disclose the volume and cumulative dollar value of all acquisition card transactions, regardless of dollar value. Refer to the *Centralized Publishing System for Proactive Disclosure – Data Element Profile: Annual Contracts Template (from -$10K to $10K)* document for further information.

# General Requirements
1. The Quarterly Contracts template must include contracts entered into over $10K, and positive and negative amendments over $10K. This includes contracts with amended contract values over $10K.
2. Contracts entered into $10K and under, and amendments from -$10K to $10K are to be reported in a separate Quarterly Contracts template to PSPC via email at [ncr.gwprs@gc.ca](mailto:ncr.gwprs@gc.ca). This information will be used for the purpose of enabling PSPC to monitor standing offer and supply arrangement usage and other government reporting obligations.
3. Acquisition card transactions for contracts entered into over $10K, and positive and negative amendments over $10K, should be reported in the Quarterly Contracts template. The volume and cumulative value of all acquisition card transactions regardless of dollar threshold should be reported in the Annual Contracts template. Organizations requiring assistance in determining the volume and cumulative value may contact Treasury Board Secretariat via the Proactive Disclosure of Contracts email inbox at [ZZPDCDC@tbs-sct.gc.ca](mailto:ZZPDCDC@tbs-sct.gc.ca).
4. Organizations should not report any contract or non-financial amendment with a $0 value, except when it is in the public interest to do so (for example, the cancellation of a large military procurement) or when disclosing a standing offer agreement or supply arrangement agreement.
5. A standing offer agreement and a supply arrangement agreement are not procurement contracts but are to be disclosed for the purpose of transparency by the department establishing the agreement. When a department publicly discloses information about a standing offer agreement or a supply arrangement agreement on a separate website, the department may omit this agreement from its report.
6. The government commitment is to disclose contracts or amendments with only limited very limited exceptions, such as national security. A department may withhold information regarding the following:
    a) Memoranda of understanding with other levels of government and foreign governments;
    b) Service level agreements between federal departments or with Crown corporations;
    c) Information about contracts whose proactive disclosure would compromise criminal investigations, litigation, national security or public safety; and,
    d) Third party information as described in any of the paragraphs 20(1)(a) to (d) of the Access to Information Act. For example, a contractor’s confidential pricing information.
7. When a department determines that information about a contract is exempt from disclosure, the department is encouraged to disclose the contract or amendment once the information is unclassified.
8. A contract or amendment not reported in the reporting period in which it was awarded should be included for that reporting period, as soon as practicable. Any contract or amendment included in a reporting period after its publication should be clearly indicated within the comments data field (refer to Appendix B of the Guidelines on the Proactive Disclosure of Contracts).
9. Information posted in one reporting period can be modified for that reporting period only when a material error was made in the data originally reported. This should be clearly indicated as such within the comments data field (refer to Appendix B of the Guidelines on the Proactive Disclosure of Contracts).
10. The use of accurate economic object codes is important for maintaining the integrity of the Public Accounts of Canada. Departments are to ensure that all expenditures are coded appropriately in accordance with the [Directive on Recording Financial Transactions in the Accounts of Canada](http://tbs-sct.gc.ca/pol/doc-eng.aspx?id=15793). A list of economic object codes and their descriptions can be found on the PSPC [Government-wide Chart of Accounts website](http://www.tpsgc-pwgsc.gc.ca/recgen/pceaf-gwcoa/index-eng.html).
11. When PSPC, SSC or another department or Crown corporation issues a contract on a department’s behalf, the client department should report the contract. PSPC will assist client departments by providing any information it has on such contracts through the Open Government Portal. SSC and any other contracting department will assist the client department in meeting its reporting obligations by providing any information it has on such contracts, as appropriate. In addition, the PSPC and SSC contracting authority is to provide a copy of each contract or amendment to the client department at time of award.
12. When more than one department is funding the contract, each department may disclose its portion of the contract. For a standing offer agreement or supply arrangement agreement, it is recommended that the agreement be reported by the department that authorizes the agreement.
13. When the above posting dates fall on a weekend or statutory holiday, departments may post information by the last business day before the weekend or holiday in question.
14. Departments are to provide a nil report for any quarter in which no contract or amendment is disclosed.  Departments are to populate the ‘Reporting Period’ and ‘Nil Report’ data elements within the Nil Reporting template.


## [Legend](#legend)

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

## [Proactive Publication - Contracts over $10,000](#proactive-publication-contracts-over-10000)

### 1-1 Reference Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reference Number |
| Field Name FR | Numéro de référence |
| ID | reference_number |
| Description EN | It is a unique identifier given to each line item in the spreadsheet. Having a unique identifier for each item will allow users to locate a specific item should they need to modify or delete. |
| Description FR | Un identificateur unique est attribué à chaque article d’exécution du gabarit de rapport. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | C-2017-2018-Q1-00170 |

### 1-2 Procurement Identification Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Procurement Identification Number |
| Field Name FR | Numéro d’identification d’approvisionnement |
| ID | procurement_id |
| Description EN | It is recommended that the procurement identification number be the contract number. Alternatively, the procurement identification number may be the commitment number or requisition number if this is the standard practice in the department. |
| Description FR | Il est recommandé que le numéro d’identification de l’approvisionnement corresponde au numéro du marché. Sinon, le numéro d’identification de l’approvisionnement peut correspondre au numéro d’engagement ou au numéro de la demande d’achat, s’il s’agit de la pratique courante du ministère. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Mandatory for contracts after 2019-01-01 |
| Validation FR | Obligatoire pour les marchés conclus après le 2019-01-01 |
| Example Value | 3000638243 |

### 1-3 Vendor Name

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Vendor Name |
| Field Name FR | Nom du fournisseur |
| ID | vendor_name |
| Description EN | It is recommended that the vendor name be the legal name of the contractor, as indicated on the contract. Alternatively, the vendor name may be the name in the financial system if this is the standard practice in the department. |
| Description FR | Il est recommandé que le nom du fournisseur corresponde à la dénomination sociale de l’entrepreneur, telle qu’elle est indiquée dans le marché. Sinon, le nom du fournisseur peut correspondre au nom indiqué dans le système financier, s’il s’agit de la pratique courante du ministère. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Mandatory for contracts after 2019-01-01 |
| Validation FR | Obligatoire pour les marchés conclus après le 2019-01-01 |
| Example Value | Company XYZ inc |

### 1-4 Vendor Postal Code

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Vendor Postal Code |
| Field Name FR | Code postal du fournisseur |
| ID | vendor_postal_code |
| Description EN | i. It is recommended that this field be populated with the first three digits of the postal code for the vendor identified in the contract.<br>ii. Alternatively, the vendor postal code may be the first three digits of the postal code identified in the procurement or financial system if this is the standard practice in the department.<br>iii. This field is to be populated with “NA” if the vendor is located outside of Canada, as the value “NA” for this field indicates not applicable. |
| Description FR | i. Il est recommandé de saisir dans ce champ les trois premiers chiffres du code postal du fournisseur indiqué dans le marché.<br>ii. Sinon, le code postal du fournisseur peut être les trois premiers chiffres du code postal inscrits dans le système financier ou d’approvisionnement s’il s’agit de la pratique courante du ministère.<br>iii. Il faut indiquer « NA » dans ce champ si le fournisseur se trouve à l’étranger, car la valeur « NA » dans ce champ indique qu’il ne s’applique pas. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Mandatory for contracts after 2022-01-01<br>This field must contain the first three digits of a postal code in A1A format or the value “NA” |
| Validation FR | Obligatoire pour les marchés conclus après le 2022-01-01<br>Ce champ doit contenir les trois premiers chiffres d’un code postal dans le format A1A ou la valeur « NA » |
| Example Value | A1A |

### 1-5 Buyer Name

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Buyer Name |
| Field Name FR | Nom de l’acheteur |
| ID | buyer_name |
| Description EN | i. It is recommended that the field be populated with the name of the buyer, as indicated on the original contract or, alternatively, the individual responsible for the procurement at the department.<br>ii. For the establishment of a standing offer or supply arrangement agreement, it is recommended that this field be populated with the name of the buyer that issued the original standing offer or supply arrangement agreement.<br>iii. For a call-up contract against a standing offer or supply arrangement, this field should be the name of the buyer identified in the original call-up contract.<br>iv. For a contract with task authorizations, this field may be populated with the name of the buyer indicated in the original contract or in the individual task authorization.<br>v. For amendments, it is recommended that this field be populated with the value “NA,” as the value “NA” for this field indicates not applicable.<br>vi. For contracts awarded by PSPC or Shared Services Canada (SSC) on behalf of the client department, it is recommended that this field be populated with the name of the PSPC or SSC contracting authority. If this is not available, indicate the values, “PSPC-SPAC” or “SSC-SPC” as applicable. |
| Description FR | i. Il est recommandé de saisir dans ce champ le nom de l’acheteur, comme il est indiqué dans le marché initial, sinon il faut saisir celui de la personne responsable de l’approvisionnement au ministère.<br>ii. Dans le cas de l’établissement d’une offre à commandes ou d’un arrangement en matière d’approvisionnement, il est recommandé de saisir dans ce champ le nom de l’acheteur qui a émis l’offre à commandes ou l’arrangement en matière d’approvisionnement initial.<br>iii. Dans le cas d’une commande subséquente à une offre à commandes ou à un arrangement en matière d’approvisionnement, ce champ devrait indiquer le nom de l’acheteur mentionné dans le marché ou la commande subséquente initial.<br>iv. Dans le cas d’un marché comportant des autorisations de tâches, ce champ peut comprendre le nom de l’acheteur indiqué dans le marché initial ou dans chaque autorisation de tâches.<br>v. Pour les modifications de marché, il est recommandé que ce champ soit rempli avec la valeur « NA », car la valeur « NA » pour ce champ indique qu’il ne s’applique pas.<br>vi. Pour les marchés attribués par SPAC ou SPC pour le compte du ministère client, il est recommandé de saisir le nom de l’autorité contractante de SPAC ou de SPC dans ce champ. S’il n’est pas disponible, il faut indiquer la valeur «  PSPC-SPAC  » ou «  SSC-SPC  », selon le cas. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Mandatory for contracts after 2022-01-01<br>This field must be populated with an NA if an amendment is reported under Instrument Type. |
| Validation FR | Obligatoire pour les marchés conclus après le 2022-01-01<br>Ce champ doit contenir NA si une modification est déclarée sous l’élément Type d’instrument. |
| Example Value | John Doe |

### 1-6 Contract Date

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Contract Date |
| Field Name FR | Date du contrat |
| ID | contract_date |
| Description EN | i. It is recommended that the contract date be the date the contract is awarded by the government. Alternatively, the contract date may be the hard commitment date (the date that the financial commitment is recorded in the departmental financial system) if this is the standard practice in the department.<br>ii. It is recommended that the contract date for a contract with task authorizations be the date that the contract is awarded (or the hard commitment date) for the contract. When the full value of the contract with task authorizations is likely not to be used, the contract date for each task authorization may be the date that each task authorization is issued (or the hard commitment date).<br>iii. It is recommended that the contract date for an amended contract or the exercising of an option be the date that the contract is awarded (or the hard commitment date).<br>iv. It is recommended that the contract date for a confirming order be the date of the verbal contract for goods, services or an amendment. If the date of the verbal contract cannot be determined, the contract date may be the date that the confirming order is issued. |
| Description FR | i. Il est recommandé que la date du marché corresponde à la date à laquelle le marché a été attribué par le gouvernement. Sinon, il peut s’agir de la date de l’engagement ferme (la date à laquelle l’engagement financier est consigné dans le système financier ministériel) s’il s’agit de la pratique courante du ministère.<br>ii. Il est recommandé que la date d’un marché qui comprend des autorisations de tâches corresponde à la date d’adjudication du marché (ou à la date de l’engagement ferme) du marché. S’il est probable que le montant du marché comprenant des autorisations de tâches ne sera pas utilisé en totalité, la date du marché pour chaque autorisation de tâche peut être la date à laquelle chaque autorisation de tâche a été accordée (ou la date de l’engagement ferme).<br>iii. Il est recommandé que la date du marché pour un marché modifié ou l’exercice d’une option corresponde à la date d’adjudication du marché (ou à la date de l’engagement ferme).<br>iv. Il est recommandé que la date du marché pour une commande de confirmation corresponde à la date du marché verbal de biens ou de services ou d’une modification de marché. Si la date du marché verbal ne peut pas être déterminée, la date du marché peut être la date de la commande de confirmation. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Date |
| Validation EN |   |
| Validation FR |   |
| Example Value | 2017-09-15 |

### 1-7 Economic Object Code

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Economic Object Code |
| Field Name FR | Code d’article économique |
| ID | economic_object_code |
| Description EN | i. It is recommended that this field be populated with the contract’s numeric economic object code. Economic object codes are listed in the government-wide chart of accounts. The use of accurate economic object codes is important for maintaining the integrity of the Public Accounts of Canada. Departments are to ensure that all expenditures are coded appropriately in accordance with the Directive on Accounting Standards: GC 5000 Recording Financial Transactions in the Accounts of Canada.<br>ii. For standing offers and supply arrangement agreements, this field may be populated with the data value “NA” as the value “NA” for this field means not applicable.<br>iii. When a contract involves more than one economic object, it is recommended that the economic object associated with the largest dollar value be used. A department may use a different approach if this is the standard practice in the department. |
| Description FR | i.  Il est recommandé de saisir dans ce champ les chiffres du code d’article économique du marché. Les codes d’article économique sont indiqués dans le plan comptable à l’échelle de l’administration fédérale. Il est important d’utiliser les bons codes d’article économique pour préserver l’intégrité des Comptes publics du Canada. Il y aurait lieu pour les ministères de s’assurer que toutes les dépenses sont codées de manière appropriée, conformément à la Directive sur les normes comptables : GC 5000 Inscription des opérations financières dans les comptes du Canada.<br>ii. Pour les offres à commandes et les arrangements en matière d’approvisionnement, il est recommandé que ce champ soit rempli avec la valeur « NA », car la valeur « NA » pour ce champ indique qu’il ne s’applique pas.<br>iii. Quand un marché porte sur plus d’un article économique, il est recommandé d’utiliser celui qui correspond à la valeur monétaire la plus élevée. Un ministère peut employer une approche différente si elle correspond à sa pratique courante. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Mandatory for contracts after 2019-01-01<br>This field is limited to only 3 or 4 digits.<br>If NA, then Instrument Type must be identified as a standing offer/supply arrangement (SOSA). |
| Validation FR | Obligatoire pour les marchés conclus après le 2019-01-01<br>Ce champ est limité à 3 ou 4 caractères.<br>Si NA, alors le Type d’instrument doit être identifié comme étant une offre à commandes ou un arrangement en matière d’approvisionnement (SOSA). |
| Example Value | 460 |

### 1-8 Description of Work English

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Description of Work English |
| Field Name FR | Description du travail Anglais |
| ID | description_en |
| Description EN | It is recommended that this field be populated with the economic object code’s text description as listed in the government-wide chart of accounts ( http://www.tpsgc-pwgsc.gc.ca/recgen/pceaf-gwcoa/index-eng.html ). For standing offers and supply arrangement agreements, this field may be populated with the commodity code’s text description used by the federal government for procurement activities. |
| Description FR | Il est recommandé de saisir dans ce champ le texte de description du code d’article économique figurant dans le plan comptable à l’échelle de l’administration fédérale ( http://www.tpsgc-pwgsc.gc.ca/recgen/pceaf-gwcoa/index-fra.html ). Pour les offres à commande et les arrangements en matière d’approvisionnement, ce champ peut comprendre une description du code de produit utilisée par le gouvernement fédéral pour les activités relatives à l’approvisionnement. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Mandatory for contracts after 2019-01-01 |
| Validation FR | Obligatoire pour les marchés conclus après le 2019-01-01 |
| Example Value | Protection services |

### 1-9 Description of Work French

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Description of Work French |
| Field Name FR | Description du travail Français |
| ID | description_fr |
| Description EN | It is recommended that this field be populated with the economic object code’s text description as listed in the government-wide chart of accounts ( http://www.tpsgc-pwgsc.gc.ca/recgen/pceaf-gwcoa/index-eng.html ). For standing offers and supply arrangement agreements, this field may be populated with the commodity code’s text description used by the federal government for procurement activities. |
| Description FR | Il est recommandé de saisir dans ce champ le texte de description du code d’article économique figurant dans le plan comptable à l’échelle de l’administration fédérale ( http://www.tpsgc-pwgsc.gc.ca/recgen/pceaf-gwcoa/index-fra.html ). Pour les offres à commande et les arrangements en matière d’approvisionnement, ce champ peut comprendre une description du code de produit utilisée par le gouvernement fédéral pour les activités relatives à l’approvisionnement. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Mandatory for contracts after 2019-01-01 |
| Validation FR | Obligatoire pour les marchés conclus après le 2019-01-01 |
| Example Value | Services de protection |

### 1-10 Contract Period Start Date

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Contract Period Start Date |
| Field Name FR | Date de début du contrat |
| ID | contract_period_start |
| Description EN | i. For a services or construction services contract, it is recommended that the contract period start date be the starting date for the period of time over which the services are provided.<br>ii. For a standing or supply arrangement, it is recommended that this field be populated with the starting date for the period of time over which a call-up may be entered into.<br>iii. For a contract with task authorizations, it is recommended that this field be populated with the starting date for the period of time over the entire contract. For a contract with task authorizations where the full value of a contract with task authorizations is likely not to be used, it is recommended for this field be populated with the starting date for each task authorization. |
| Description FR | i. Pour un marché de services ou de services de construction, il est recommandé que la date de début du marché corresponde à la date de début de la période au cours de laquelle les services sont fournis.<br>ii. Pour une offre à commandes ou un arrangement en matière d’approvisionnement, il est recommandé de saisir dans ce champ la date de début de la période au cours de laquelle une commande subséquente est passée.<br>iii. Pour un marché comprenant des autorisations de tâches, il est recommandé de saisir dans ce champ la date de début de la période correspondant à l’ensemble du marché. Pour un marché comportant des autorisations de tâches et pour lequel il est probable que le montant ne soit pas utilisé au complet, il est recommandé de saisir dans ce champ la date de début de chaque autorisation de tâches. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Date |
| Validation EN | Mandatory for contracts after 2019-01-01<br>If Commodity Type is a Service (S) or Construction (C) this field must not be empty and must be a valid date. |
| Validation FR | Obligatoire pour les marchés conclus après le 2019-01-01<br>Si le Type de produit est un service (S) ou une construction (C), ce champ ne doit pas être vide et doit contenir une date valide. |
| Example Value | 2017-08-15 |

### 1-11 Contract Period End Date or Delivery Date

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Contract Period End Date or Delivery Date |
| Field Name FR | Date de clôture du contrat ou Date de livraison |
| ID | delivery_date |
| Description EN | i. For a goods contract, it is recommended that this field be the date when goods are to be delivered, which may be the contract period end date. The department may use the last delivery date if the contract involves multiple items on multiple dates.<br>ii. For a services or construction services contract, it is recommended that this field be the end date for the period of time over which the services are provided.<br>iii. For a standing offer or supply arrangement, it is recommended that this field be the end date for the period of time over which a call-up may be entered into.<br>iv. For a contract with task authorizations, it is recommended that this field be populated with the end date for the period of time over the entire contract. For a contract with task authorizations where the full value of a contract with task authorization is likely not to be used, it is recommended for this field to be populated with the end date for each task authorization. |
| Description FR | i. Pour un marché de biens, il est recommandé de saisir dans ce champ la date à laquelle les biens seront livrés, ce qui peut correspondre à la date de fin de la période du marché. Le ministère peut utiliser la dernière date de livraison, si le marché prévoit différentes dates pour différents articles.<br>ii. Pour un marché de services ou de services de construction, il est recommandé de saisir dans ce champ la date de fin de la période au cours de laquelle les services sont fournis.<br>iii. Pour une offre à commandes ou un arrangement en matière d’approvisionnement, il est recommandé de saisir dans ce champ la date de fin de la période au cours de laquelle une commande subséquente est passée.<br>iv. Pour un marché comportant des autorisations de tâches, il est recommandé de saisir dans ce champ la date de fin de la période correspondant à l’ensemble du marché. Pour un marché comportant des autorisations de tâches et pour lequel il est probable que le montant ne soit pas utilisé au complet, il est recommandé de saisir dans ce champ la date de fin de chaque autorisation de tâches. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Date |
| Validation EN | Mandatory for contracts after 2019-01-01 |
| Validation FR | Obligatoire pour les marchés conclus après le 2019-01-01 |
| Example Value | 2017-09-15 |

### 1-12 Total Contract Value

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Total Contract Value |
| Field Name FR | Valeur totale du contrat |
| ID | contract_value |
| Description EN | i. It is recommended that the total contract value be the amount of the hard commitment recorded in the departmental financial system for all contracts and all subsequent amendments regardless of dollar value. It is recommended for this field be in Canadian currency and for it to include all applicable taxes.<br>ii. For a multi-year contract, it is recommended for this field to be the total amount of the contract for all years.<br>iii. For a contract amendment, it is recommended for this field to be the amended contract value.<br>iv. For a contract with task authorizations, the full potential value of the contract may be reported upon contract award unless the full value is not expected to be used. In the latter situation, each task authorization may be reported individually or cumulatively. When a contract includes a fixed deliverable and another deliverable that requires a task authorization, the department may report the contract and task authorizations in any manner that is transparent.<br>v. The value of this field for the reporting of a standing offer agreement or supply arrangement agreement is $0. |
| Description FR | i. Il est recommandé que la valeur totale du marché corresponde au montant de l’engagement ferme consigné dans le système financier ministériel pour le marché et toutes les modifications subséquentes, peu importe la valeur en dollars. Il est recommandé d’inscrire dans ce champ les montants en dollars canadiens et d’y ajouter toutes les taxes applicables.<br>ii. Pour un marché pluriannuel, il est recommandé, de fournir dans ce champ le montant total du marché pour toutes les années.<br>iii. Pour une modification d’un marché, il est recommandé de saisir dans ce champ la valeur modifiée du marché.<br>iv. Dans le cas d’un marché comportant des autorisations de tâches, la valeur totale éventuelle du marché peut être déclarée à la date d’adjudication du marché, sauf s’il n’est pas prévu d’utiliser la valeur totale du marché. Dans ce dernier cas, les autorisations de tâches peuvent être déclarées séparément ou en bloc. Si le marché comporte un produit livrable fixe et un autre qui doit être accompagné d’une autorisation de tâches, le ministère peut déclarér le marché et les autorisations de tâches de n’importe quelle façon jugée transparente.<br>v. La valeur inscrite dans ce champ pour la déclaration d’une offre à commandes ou d’un arrangement en matière d’approvisionnement doit être de 0 $. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN | Mandatory for contracts after 2019-01-01 |
| Validation FR | Mandatory for contracts after 2019-01-01 |
| Example Value | 10000 |

### 1-13 Original Contract Value

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Original Contract Value |
| Field Name FR | Valeur d'origine du contrat |
| ID | original_value |
| Description EN | i. It is recommended that the original contract value be the amount of the hard commitment recorded in the departmental financial system at the time of contract award for a contract or amended contract. It is recommended for this field be in Canadian currency and for it to include all applicable taxes.<br>ii. For a multi-year contract, it is recommended for this field to be the amount at the time of contract award for the multi-year contract period.<br>iii. For a contract option, it is recommended for this field to be excluded from the original contract value and for it to be reported at a later date as an amendment when the contract option is exercised. Alternatively, the full value of a contract, including options, may be reported at the time of contract award.<br>iv. For a contract with task authorizations, it is recommended that the original contract value be for the full amount of the contract rather than the amount specified within the minimum work guarantee clause. The full potential value of the contract may be reported in the original contract value unless the full value is not expected to be used. In the latter situation, each task authorization may be reported individually or cumulatively. When a contract includes a fixed deliverable and another deliverable that requires a task authorization, the department may report the contract and task authorizations in any manner that is transparent.<br>v. The value of this field for the reporting of a standing offer agreement or supply arrangement agreement should be $0. |
| Description FR | i. Il est recommandé que la valeur d’origine du marché corresponde au montant de l’engagement ferme consigné dans le système financier ministériel au moment de l’attribution du marché pour un marché ou un marché modifié. Il est recommandé d’inscrire dans ce champs les montants en dollars canadiens et d’y ajouter toutes les taxes applicables.<br>ii. Pour un marché pluriannuel, il est recommandé d’inscrire dans ce champ la valeur correspondant au montant au moment de l’attribution du marché pour la période du marché pluriannuel.<br>iii. Pour une option de marché, il est recommandé pour ce champ d’exclure le montant de l’option de l’élément de données « valeur d’origine du marché » pour le déclarer à une date ultérieure à titre de modification lorsqu’elle est exercée. Sinon, la valeur totale du marché, y compris les options, peut être déclarée à la date d’adjudication du marché.<br>iv. Dans le cas d’un marché comportant des autorisations de tâches, il est recommandé de déclarer dans ce champ la valeur d’origine du marché au lieu du montant précisé dans la clause de garantie des travaux minimums. La valeur totale éventuelle du marché peut être déclarée dans l’élément de données « valeur d’origine du marché », à moins qu’il ne soit par prévu d’utiliser la valeur totale du marché. Dans ce dernier cas, les autorisations de tâches peuvent être déclarées séparément ou en bloc. Si le marché comporte un produit livrable fixe et un autre qui doit être accompagné d’une autorisation de tâches, le ministère peut déclarer le marché et les autorisations de tâches de n’importe quelle façon jugée transparente.<br>v. La valeur inscrite dans ce champ pour la déclaration d’une offre à commandes ou d’un arrangement en matière d’approvisionnement devrait être de 0 $. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN | Mandatory for contracts after 2019-01-01 |
| Validation FR | Obligatoire pour les marchés conclus après le 2019-01-01 |
| Example Value | 10000 |

### 1-14 Contract Amendment Value

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Contract Amendment Value |
| Field Name FR | Valeur de modification |
| ID | amendment_value |
| Description EN | i. For an amendment, it is recommended that the contract amendment value be the value of the contract amendment. Negative amendments should include a minus sign in front of the value. It is recommended for this field to be in Canadian currency and for it to include all applicable taxes.<br>ii. Multiple amendment(s) to a contract that take place in the same fiscal quarter may be reported either individually or combined. Positive or negative amendments over $10,000 are to be reported quarterly in accordance with Appendix A. Positive or negative amendments of $10,000 and under are to be reported annually via email to PSPC in accordance with Appendix A, and to be reported annually on the Open Government Portal in accordance with Appendix B. An amendment should be reported either quarterly or annually. Reporting an amendment both quarterly and annually would result in double counting of the amendment’s value when calculating the total contracting activity of an organization.<br>iii. When a contract is entered into and subsequently amended in the same fiscal quarter, the two transactions should be reported separately. Entry into the contract should be reported as a separate entry with the value at contract entry in the original contract value and should not include the value of the contract amendment. The contract amendment should also be reported as a separate entry with the value of the amendment in the contract amendment value and the contract entry value in the original contract value.<br>iv. For a contract with task authorizations, when the full value is likely not to be used, the value of any subsequent task authorization may be reported as an amendment with its value reported in the contract amendment value.<br>v. A “0” value should be included if there are no amendments associated with the contract. |
| Description FR | i. Pour une modification, il est recommandé que l’élément de données « valeur de modification » corresponde à la valeur de la modification. Les modifications de marché négatives doivent inclure un signe négatif devant la valeur. Il est recommandé d’inscrire dans ce champ les montants en dollars canadiens et d’y ajouter toutes les taxes applicables.<br>ii. Les modifications multiples apportées à un marché au cours du même trimestre de l’exercice financier peuvent être déclarée séparément ou en bloc. Les modifications de marché positives ou négatives de plus de 10 000 $ sont à déclarer tous les trois mois, conformément à l’annexe A. Les modifications positives et négatives de 10 000 $ ou moins sont à déclarer une fois par an au moyen d’un courriel à SPAC, conformément à l’annexe A, et elles doivent être déclarée une fois par an dans le Portail du gouvernement ouvert, conformément à l’annexe B. Une modification de marché doit être déclarée tous les trois mois ou une fois par an. La déclaration d’une modification de marché de façon trimestrielle et annuelle donnerait lieu à un double dénombrement de la valeur de la modification au moment de calculer le total de l’activité contractuelle d’une organisation.<br>iii. Lorsqu’un marché est conclu, puis modifié au cours du même trimestre d’exercice, les deux opérations doivent être déclarées séparément. La signature du marché doit être saisie comme une entrée séparée, et la valeur au moment de la signature du marché doit être consignée dans l’élément de données « valeur d’origine du marché », sans la valeur de modification. La valeur de modification sera également déclarée dans une entrée distincte qui comprend la valeur de la modification figurant dans le champ de la « valeur de la modification du marché », et la valeur au moment de la signature du marché sera saisie dans l’élément de données « valeur d’origine du marché ».<br>iv. Dans le cas d’un marché comportant des autorisations de tâches, lorsqu’il est improbable que la valeur totale soit utilisée, la valeur de toute autorisation de tâche ultérieure peut être déclarée en tant que modification, sa valeur étant comprise dans la valeur de la modification.<br>v. Il faut inscrire « 0 » s’il n’y a pas de modification de marché. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN | This field must be populated if Amendment (A) was selected as the Instrument Type |
| Validation FR | Ce champ doit être rempli si Modification (A) a été sélectionné comme Type d’instrument |
| Example Value | 100000 |

### 1-15 Comments English

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Comments English |
| Field Name FR | Commentaires en anglais |
| ID | comments_en |
| Description EN | i. Standardized comments are recommended to be used (refer to Appendix C). Avoid the use of acronyms within this field.<br>ii. Departments are encouraged to provide a brief description of each contract.<br>iii. When a contract involves an economic object code specified in Appendix D, departments are to fulfill the reporting requirements specified in Appendix D. |
| Description FR | i. Il est recommandé d’utiliser les commentaires normalisés (consultez l’annexe C). Il faut éviter d’utiliser des acronymes dans ce champ.<br>ii. Les ministères sont invités à fournir une brève description de chaque marché.<br>iii. Lorsqu’un marché comprend un code d’article économique précisé à l’annexe D, les ministères doivent satisfaire aux exigences en matière de déclaration précisées à l’annexe D. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | This contract was omitted from a previous public disclosure. |

### 1-16 Comments French

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Comments French |
| Field Name FR | Commentaires en français |
| ID | comments_fr |
| Description EN | i. Standardized comments are recommended to be used (refer to Appendix C). Avoid the use of acronyms within this field.<br>ii. Departments are encouraged to provide a brief description of each contract.<br>iii. When a contract involves an economic object code specified in Appendix D, departments are to fulfill the reporting requirements specified in Appendix D. |
| Description FR | i. Il est recommandé d’utiliser les commentaires normalisés (consultez l’annexe C). Évitez d’utiliser des acronymes dans ce champ.<br>ii. Les ministères sont invités à fournir une brève description de chaque marché.<br>iii. Lorsqu’un marché comprend un code d’article économique précisé à l’annexe D, les ministères doivent satisfaire aux exigences en matière de déclaration précisées à l’annexe D. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Ce marché a été omis dans une divulgation publique précédente. |

### 1-17 Additional Comments English

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Additional Comments English |
| Field Name FR | Commentaires additionnels en anglais |
| ID | additional_comments_en |
| Description EN | The additional comments English field may be populated with additional comments when an organization needs additional capacity to fulfill the reporting requirements under the comments English data field. |
| Description FR | Ce champ sert à consigner tout commentaire additionnel lorsqu’une organisation a besoin d’une capacité additionnelle pour répondre aux exigences de déclaration dans le champ « commentaires en anglais ». |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | 10-Months subscription to Altmetric Explorer for Institutions |

### 1-18 Additional Comments French

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Additional Comments French |
| Field Name FR | Commentaires additionnels en français |
| ID | additional_comments_fr |
| Description EN | The additional comments French field may be populated with additional comments when an organization needs additional capacity to fulfill the reporting requirements under the comments French data field. |
| Description FR | Ce champ sert à consigner tout commentaire additionnel lorsqu’une organisation a besoin d’une capacité additionnelle pour répondre aux exigences de déclaration dans le champ « commentaires en   français ». |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Abonnement de 10 mois à Altmetric Explorer for Institutions |

### 1-19 Agreement Type

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Agreement Type |
| Field Name FR | Type d’accord |
| ID | agreement_type_code |
| Description EN | This data field is archived and replaced by the Appendix A data fields for Trade Agreement, Comprehensive Land Claims Agreement and Procurement Strategy for Indigenous Business. |
| Description FR | Ce champ de données est archivé et remplacé par les champs de données de l’annexe A pour l’Accord de libre-échange, l’entente sur les revendications territoriales globales et la Stratégie d’approvisionnement auprès des entreprises autochtones. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Mandatory for contracts after 2019-01-01, unless Trade Agreement specified.<br>This field must be blank if the Trade Agreement field Type is not blank. |
| Validation FR | Obligatoire pour les marchés conclus après le 2019-01-01, sauf si on précise un accord commercial.<br>Ce champ doit être vide si le champ Accord commercial n’est pas vide. |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| 0 | None | Aucun |
| Y | WTO-AGP / NAFTA / CFTA / CCFTA / CCoFTA / CHFTA / CPaFTA / CPFTA / CKFTA | AMP-OMC / ALENA / ALEC / ALECC / ALECCo / ALECH / ALECPa / ALECP / ALECCS |
| Z | WTO-AGP / NAFTA | AMP-OMC / ALENA |
| X | WTO-AGP / CFTA / CCFTA / CKFTA | AMP-OMC / ALEC / ALECC / ALECCS |
| C | NAFTA / CFTA | ALENA / ALEC |
| W | WTO-AGP / CFTA / CCFTA / CCoFTA / CHFTA / CPaFTA / CPFTA / CKFTA | AMP-OMC / ALEC / ALECC / ALECCo / ALECH / ALECPa / ALECP / ALECCS |
| N | (discontinued) NAFTA / CCFTA / CCoFTA / CHFTA / CPaFTA | (discontinué) ALENA / ALECC / ALECCo / ALECH / ALECPa |
| I | CFTA | ALEC |
| A | ABSA | MREA |
| R | LCSA | MRERT |
| P | (discontinued) NAFTA / CFTA / CCFTA / CCoFTA / CHFTA / CPaFTA | (discontinué) ALENA / ALEC / ALECC / ALECCo / ALECH / ALECPa |
| S | NAFTA / CFTA / CCFTA / CCoFTA / CHFTA / CPaFTA / CKFTA | ALENA / ALEC / ALECC / ALECCo / ALECH / ALECPa / ALECCS |
| T | NAFTA / CFTA / CCFTA / CCoFTA / CHFTA / CPaFTA / CPFTA / CKFTA | ALENA / ALEC / ALECC / ALECCo / ALECH / ALECPa / ALECP / ALECCS |
| U | (discontinued) CCFTA | (discontinué) ALECC |
| V | CFTA / CCFTA / CKFTA | ALEC / ALECC / ALECCS |
| D | CETA / TCA / CFTA | AECG / ACC / ALEC |
| E | CETA / TCA / WTO-AGP / CFTA / CCFTA / CCoFTA / CHFTA / CPaFTA / CPFTA / CKFTA | AECG / ACC / AMP-OMC / ALEC / ALECC / ALECCo / ALECH / ALECPa / ALECP / ALECCS |
| F | CETA / TCA / WTO-AGP / NAFTA / CFTA / CCFTA / CCoFTA / CHFTA / CPaFTA / CPFTA / CKFTA | AECG / ACC / AMP-OMC / ALENA / ALEC / ALECC / ALECCo / ALECH / ALECPa / ALECP / ALECCS |
| AA | (discontinued) CCFTA / CCoFTA / CHFTA / CPaFTA | (discontinué) ALECC / ALECCo / ALECH / ALECPa |
| AB | CFTA / CCFTA / CCoFTA / CHFTA / CPaFTA / CKFTA | ALEC / ALECC / ALECCo / ALECH / ALECPa / ALECCS |
| AC | CFTA / CCFTA / CCoFTA / CHFTA / CPaFTA / CPFTA / CKFTA | ALEC / ALECC / ALECCo / ALECH / ALECPa / ALECP / ALECCS |
| AD | CETA / TCA / WTO-AGP / CFTA / CCFTA / CKFTA | AECG / ACC / AMP-OMC / ALEC / ALECC / ALECCS |
| AE | (discontinued) CHFTA | (discontinué) ALECH |
| AF | CFTA / CHFTA | ALEC / ALECH |
| AG | CETA / TCA / CFTA / CHFTA | AECG / ACC / ALEC / ALECH |
| AH | CKFTA | ALECCS |
| AI | CFTA / CKFTA | ALEC / ALECCS |
| AJ | CFTA / NAFTA / CKFTA | ALEC / ALENA / ALECCS |
| AK | CPTPP | PTPGP |
| AL | (discontinued) CFTA / CPTPP | (discontinué) ALEC / PTPGP |
| AM | (discontinued) CFTA / CETA / TCA / CPTPP | (discontinué) ALEC / AECG / ACC / PTPGP |
| AN | CFTA / CHFTA / CETA / TCA / CPTPP | ALEC / ALECH / AECG / ACC / PTPGP |
| AO | CFTA / CCFTA / CKFTA / WTO-AGP / CPTPP | ALEC / ALECC / ALECCS / AMP-OMC / PTPGP |
| AP | CFTA / NAFTA / CCFTA / CCoFTA / CHFTA / CPaFTA / CPFTA / CKFTA / WTO-AGP / CETA / TCA / CPTPP | ALEC / ALENA / ALECC / ALECCo / ALECH / ALECPa / ALECP / ALECCS / AMP-OMC / AECG / ACC / PTPGP |
| AQ | CFTA / CCFTA / CCoFTA / CHFTA / CPaFTA / CPFTA / CKFTA / WTO-AGP / CETA / TCA / CPTPP | ALEC / ALECC / ALECCo / ALECH / ALECPa / ALECP / ALECCS / AMP-OMC / AECG / ACC / PTPGP |
| AR | CFTA / NAFTA / CCFTA / CCoFTA / CHFTA / CPaFTA / CPFTA / CKFTA / WTO-AGP / CPTPP | ALEC / ALENA / ALECC / ALECCo / ALECH / ALECPa / ALECP / ALECCS / AMP-OMC / PTPGP |
| AS | CFTA / CCFTA / CCoFTA / CHFTA / CPaFTA / CPFTA / CKFTA / WTO-AGP / CPTPP | ALEC / ALECC / ALECCo / ALECH / ALECPa / ALECP / ALECCS / AMP-OMC / PTPGP |
| AT | CFTA / CCFTA / CKFTA | ALEC / ALECC / ALECCS |
| AU | CFTA / CCFTA / CKFTA / WTO-AGP / CETA / TCA / CPTPP | ALEC / ALECC / ALECCS / AMP-OMC / AECG / ACC / PTPGP |
| AV | CFTA / CCFTA | ALEC / ALECC |
| AW | CFTA / CCFTA / CPTPP | ALEC / ALECC / PTPGP |
| AX | CFTA / CKFTA / WTO-AGP / CETA / TCA | ALEC / ALECCS / AMP-OMC / AECG / ACC |
| AY | CFTA / CKFTA / WTO-AGP / CETA / TCA / CPTPP | ALEC / ALECCS / AMP-OMC / AECG / ACC / PTPGP |
| AZ | CFTA / CKFTA / WTO-AGP / CPTPP | ALEC / ALECCS / AMP-OMC / PTPGP |
| BA | ABSA / LCSA | MREA / MRERT |

### 1-20 Trade Agreement

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Trade Agreement |
| Field Name FR | Accord commercial |
| ID | trade_agreement |
| Description EN | i. It is recommended that this field indicate whether the procurement is covered by each of the applicable trade agreements.<br>ii. It is recommended that this field be populated with one or more of the following alphabetic characters. Report the alphabetic characters only. All text after the alphabetic characters, including the colon, is for information purposes only. For example, a procurement covered by the Canadian Free Trade Agreement and the Comprehensive Economic Free Trade Agreement is reported as CA, EU. |
| Description FR | i. Il est recommandé d’indiquer dans ce champ si l’approvisionnement est visé par chacun des accords commerciaux applicables.<br>ii. Il est recommandé de remplir ce champ avec un ou plusieurs des caractères alphabétiques suivants. Il faut indiquer uniquement les caractères alphabétiques. Tout le texte après les caractères alphabétiques, y compris les deux-points, est fourni à titre informatif uniquement. À titre d’exemple, un approvisionnement visé par l’Accord de libre-échange canadien et l’Accord économique et commercial global entre le Canada et l’Union européenne est déclaré sous le code CA, EU. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text Array |
| Validation EN | Mandatory for contracts after 2022-01-01<br>If the value XX (none) is entered, then no other value can be entered in this field.<br>This field must be blank if the Agreement Type field is not blank. |
| Validation FR | Obligatoire pour les marchés conclus après le 2022-01-01<br>Si la valeur XX (aucun) est inscrite, alors aucune autre valeur ne peut être inscrite dans ce champ.<br>Ce champ doit être vide si le champ Type d’accord n’est pas vide. |
| Example Value | CA,EU |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| XX | None | Aucune valeur |
| NA | North American Free Trade Agreement | Accord de libre-échange nord-américain |
| GP | World Trade Organization – Agreement on Government Procurement | Accord sur les marchés publics de l’Organisation mondiale du commerce |
| CL | Canada-Chile Free Trade Agreement | Accord de libre-échange Canada-Chili |
| PE | Canada-Peru Free Trade Agreement | Accord de libre-échange Canada-Pérou |
| CO | Canada-Colombia Free Trade Agreement | Accord de libre-échange Canada-Colombie |
| PA | Canada-Panama Free Trade Agreement | Accord de libre-échange Canada-Panama |
| HN | Canada-Honduras Free Trade Agreement | Accord de libre-échange Canada-Honduras |
| KR | Canada-Korea Free Trade Agreement | Accord de libre-échange Canada-Corée du Sud |
| CA | Canadian Free Trade Agreement | Accord de libre-échange Canadien |
| EU | Comprehensive Economic Free Trade Agreement | Accord économique et commercial global |
| TP | Comprehensive and Progressive Agreement for Trans-Pacific Partnership | Accord de Partenariat transpacifique global et progressiste |
| UA | Canada-Ukraine Free Trade Agreement | Accord de libre-échange Canada-Ukraine |
| UK | Canada-United Kingdom Trade Continuity Agreement | Accord de continuité commerciale Canada Royaume-Uni |

### 1-21 Comprehensive Land Claims Agreement

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Comprehensive Land Claims Agreement |
| Field Name FR | Entente sur les revendications territoriales globales |
| ID | land_claims |
| Description EN | It is recommended that this field indicate whether the procurement is for goods, services or construction services to be delivered to an area that is within one or more of the Comprehensive Land Claims Agreements. |
| Description FR | Il est recommandé d’indiquer dans ce champ si l’approvisionnement concerne des biens, des services ou des services de construction qui doivent être fournis dans une région visée par l’une des ententes sur les revendications territoriales globales. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text Array |
| Validation EN | Mandatory for contracts after 2022-01-01.<br>If the value NA (not applicable) is entered, then no other value can be entered in this field. |
| Validation FR | Obligatoire pour les marchés conclus après le 2022-01-01.<br>Si la valeur NA (sans objet) est inscrite, alors aucune autre valeur ne peut être inscrite dans ce champ. |
| Example Value | NA |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| NA | Not Applicable | Sans objet |
| JN | James Bay and Northern Quebec Agreement | Convention de la Baie James et du Nord québécois |
| NQ | Northeastern Quebec Agreement | Convention du Nord-Est québécois |
| NI | Nunavik Inuit Land Claims Agreement | Accord sur les revendications territoriales des Inuit du Nunavik |
| EM | Eeyou Marine Region Land Claims Agreement | Accord sur les revendications territoriales concernant la région marine d’Eeyou |
| LI | Labrador Inuit Land Claim Agreement | Accord sur les revendications territoriales des Inuit du Labrador |
| NU | Nunavut Agreement (Agreement between the Inuit of the Nunavut Settlement Area and Her Majesty the Queen in right of Canada) | Accord du Nunavut (Accord entre les Inuit de la région du Nunavut et Sa Majesté la Reine du chef du Canada) |
| IF | Inuvialuit Final Agreement | Convention définitive des Inuvialuits |
| GW | Gwich'in Comprehensive Land Claim Agreement | Entente sur la revendication territoriale globale des Gwich’in |
| SD | Sahtu Dene and Metis Comprehensive Land Claim Agreement | Entente sur la revendication territoriale globale des Dénés et des Métis du Sahtu |
| TA | Tlicho Agreement | Accord tlicho |
| CH | Champagne and Aishihik First Nations Final Agreement | Entente définitive des Premières Nations de Champagne et de Aishihik |
| FN | First Nation of Nacho Nyak Dun Final Agreement | Entente définitive de la Première nation des Nacho Nyak Dun |
| TT | Teslin Tlingit Council Final Agreement | Entente définitive du Conseil des Tlingits de Teslin |
| VG | Vuntut Gwitchin First Nation Final Agreement | Entente définitive de la Première nation des Gwitchin Vuntut |
| SF | Selkirk First Nation Final Agreement | Entente définitive de la Première nation de Selkirk |
| LS | Little Salmon/Carmacks First Nation Final Agreement | Entente définitive de la Première nation de Little Salmon/Carmacks |
| TH | Tr'ondëk Hwëch'in Final Agreement | Entente définitive des Tr’ondëk Hwëch’in |
| TK | Ta'an Kwach'an Council Final Agreement | Entente définitive du conseil des Ta’an Kwach’an |
| KF | Kluane First Nation Final Agreement | Entente définitive avec la Première nation de Kluane |
| KD | Kwanlin Dun First Nation Final Agreement | Entente définitive de la Première nation des Kwanlin Dun |
| CT | Carcross/Tagish First Nation Final Agreement | Entente définitive de la Première Nation de Carcross-Tagish |
| NF | Nisga'a Final Agreement | Accord définitif Nisga’a |
| TF | Tsawwassen First Nation Final Agreement | Accord définitif de la Première Nation de Tsawwassen |
| MF | Maa-nulth First Nations Final Agreement | Accord définitif des premières nations maa-nulthes |
| TL | Tla'amin Final Agreement | Accord définitif des Tla’amins |
| YA | Yale First Nations Final Agreement | Accord définitif de la Première Nation de Yale |

### 1-22 Commodity Type

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Commodity Type |
| Field Name FR | Type de produit |
| ID | commodity_type |
| Description EN | It is recommended that the commodity type be populated with the one of the three commodity types (Good, Service or Construction). When a contract involves more than one commodity type, the commodity type associated with the largest dollar value should be used. A department may use a different approach if this is the standard practice in the department. |
| Description FR | Il est recommandé de saisir dans ce champ l’un des trois types de produits (bien, service ou construction). Lorsqu’un marché comprend plus d’un type de produit, il faut utiliser celui qui correspond à la valeur monétaire la plus élevée. Un ministère peut employer une approche différente si elle correspond à sa pratique courante. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Mandatory for contracts after 2019-01-01 |
| Validation FR | Obligatoire pour les marchés conclus après le 2019-01-01 |
| Example Value | S |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| G | Good | Biens |
| S | Service | Services |
| C | Construction | Construction |

### 1-23 Commodity Code

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Commodity Code |
| Field Name FR | Code de produit |
| ID | commodity_code |
| Description EN | i. It is recommended that the commodity code be populated with the generic product descriptions used by the federal government for procurement activities.<br>ii. When using the Goods and Services Identification Number (GSIN), only those GSINs published by PSPC may be used. The commodity code for goods must use a minimum of four numeric characters. The commodity code for services must use either a minimum of one alphabetic character and three numeric characters or, two alphabetic characters and two numeric characters. The commodity code for construction must use a minimum of “51” and one or two numeric characters.<br>iii. When a contract involves more than one commodity code, the commodity code associated with the largest dollar value should be used. A department may use a different approach if this is the standard practice in the department. |
| Description FR | i. Il est recommandé de saisir dans ce champ les descriptions de produits génériques utilisées par le gouvernement fédéral pour les activités relatives à l’approvisionnement.<br>ii. Lorsqu’il s’agit d’utiliser le numéro d’identification des biens et services (NIBS), seulement les NIBS publiés par SPAC peuvent être utilisés. Le code de produit pour les biens doit comprendre un minimum de quatre caractères numériques. Le code de produit pour les services doit comprendre au minimum un caractère alphabétique et trois caractères numériques ou deux caractères alphabétiques et deux caractères numériques. Le code de produit pour la construction doit comprendre au minimum « 51 », suivi d’un ou de deux caractères numériques.<br>iii. Lorsqu’un marché comprend plus qu’un code de produit, il faut utiliser celui qui correspond à la valeur monétaire la plus élevée. Un ministère peut employer une approche différente si elle correspond à sa pratique courante. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Mandatory for contracts after 2019-01-01<br>The field is limited to eight alpha-numeric digits or less. |
| Validation FR | Obligatoire pour les marchés conclus après le 2019-01-01 Ce champ est limité à 8 caractères alphanumériques. |
| Example Value | K105 |

### 1-24 Country of Vendor

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Country of Vendor |
| Field Name FR | Pays du fournisseur |
| ID | country_of_vendor |
| Description EN | i. It is recommended that this data field be populated with the country of the vendor’s address identified in the contract.<br>ii. Alternatively, the country of the vendor may be the country of the vendor’s address identified in the procurement or financial system if this is the standard practice in the department.<br>iii. The country of vendor must be alphabetic characters listed in the International Organization for Standardization (ISO) 3166 Country Codes. |
| Description FR | i. Il est recommandé de remplir ce champ de données en indiquant le pays indiqué dans l’adresse du fournisseur qui figure dans le marché.<br>ii. Par ailleurs, le pays du fournisseur peut être le pays indiqué dans l’adresse du fournisseur qui figure dans le système financier ou d’approvisionnement s’il s’agit de la pratique courante au sein du ministère.<br>iii. Le pays du fournisseur doit comprendre les caractères alphabétiques répertoriés dans les Codes des nom des pays - 3166 de l’Organisation internationale de normalisation (ISO). |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Mandatory for contracts after 2019-01-01 |
| Validation FR | Obligatoire pour les marchés conclus après le 2019-01-01 |
| Example Value | CA |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| AD | Andorra | Andorre |
| AE | United Arab Emirates | Émirats arabes unis |
| AF | Afghanistan | Afghanistan |
| AG | Antigua and Barbuda | Antigua-et-Barbuda |
| AI | Anguilla | Anguilla |
| AL | Albania | Albanie |
| AM | Armenia | Arménie |
| AO | Angola | Angola |
| AQ | Antarctica | Antarctique |
| AR | Argentina | Argentine |
| AS | American Samoa | Samoa américaines |
| AT | Austria | Autriche |
| AU | Australia | Australie |
| AW | Aruba | Aruba |
| AX | Åland Islands | Îles d’Åland |
| AZ | Azerbaijan | Azerbaïdjan |
| BA | Bosnia and Herzegovina | Bosnie-Herzégovine |
| BB | Barbados | Barbade |
| BD | Bangladesh | Bangladesh |
| BE | Belgium | Belgique |
| BF | Burkina Faso | Burkina Faso |
| BG | Bulgaria | Bulgarie |
| BH | Bahrain | Bahreïn |
| BI | Burundi | Burundi |
| BJ | Benin | Bénin |
| BL | Saint Barthélemy | Saint-Barthélemy |
| BM | Bermuda | Bermudes |
| BN | Brunei Darussalam | Brunéi Darussalam |
| BO | Bolivia (Plurinational State of) | Bolivie (État plurinational de) |
| BQ | Bonaire, Sint Eustatius and Saba | Bonaire, Saint-Eustache et Saba |
| BR | Brazil | Brésil |
| BS | Bahamas | Bahamas |
| BT | Bhutan | Bhoutan |
| BV | Bouvet Island | Île Bouvet |
| BW | Botswana | Botswana |
| BY | Belarus | Bélarus |
| BZ | Belize | Belize |
| CA | Canada | Canada |
| CC | Cocos (Keeling) Islands | Îles des Cocos (Keeling) |
| CD | Democratic Republic of the Congo | République démocratique du Congo |
| CF | Central African Republic | République centrafricaine |
| CG | Congo | Congo |
| CH | Switzerland | Suisse |
| CI | Ivory Coast | Côte d’Ivoire |
| CK | Cook Islands | Îles Cook |
| CL | Chile | Chili |
| CM | Cameroon | Cameroun |
| CN | China | Chine |
| CO | Colombia | Colombie |
| CR | Costa Rica | Costa Rica |
| CU | Cuba | Cuba |
| CV | Cabo Verde | Cabo Verde |
| CW | Curaçao | Curaçao |
| CX | Christmas Island | Île Christmas |
| CY | Cyprus | Chypre |
| CZ | Czechia | Tchéquie |
| DE | Germany | Allemagne |
| DJ | Djibouti | Djibouti |
| DK | Denmark | Danemark |
| DM | Dominica | Dominique |
| DO | Dominican Republic | République dominicaine |
| DZ | Algeria | Algérie |
| EC | Ecuador | Équateur |
| EE | Estonia | Estonie |
| EG | Egypt | Égypte |
| EH | Western Sahara | Sahara occidental |
| ER | Eritrea | Érythrée |
| ES | Spain | Espagne |
| ET | Ethiopia | Éthiopie |
| FI | Finland | Finlande |
| FJ | Fiji | Fidji |
| FK | Falkland Islands | Îles Falkland (Malvinas) |
| FM | Micronesia (Federated States of) | Micronésie (États fédérés de) |
| FO | Faroe Islands | Îles Féroé |
| FR | France | France |
| GA | Gabon | Gabon |
| GB | United Kingdom of Great Britain and Northern Ireland | Royaume-Uni de Grande-Bretagne et d’Irlande du Nord |
| GD | Grenada | Grenade |
| GE | Georgia | Géorgie |
| GF | French Guiana | Guyane française |
| GG | Guernsey | Guernesey |
| GH | Ghana | Ghana |
| GI | Gibraltar | Gibraltar |
| GL | Greenland | Groenland |
| GM | Gambia | Gambie |
| GN | Guinea | Guinée |
| GP | Guadeloupe | Guadeloupe |
| GQ | Equatorial Guinea | Guinée équatoriale |
| GR | Greece | Grèce |
| GS | South Georgia and the South Sandwich Islands | Géorgie du Sud-et-les Îles Sandwich du Sud |
| GT | Guatemala | Guatemala |
| GU | Guam | Guam |
| GW | Guinea-Bissau | Guinée-Bissau |
| GY | Guyana | Guyana |
| HK | China, Hong Kong Special Administrative Region | Chine, région administrative spéciale de Hong Kong |
| HM | Heard Island and McDonald Islands | Île Heard-et-Îles MacDonald |
| HN | Honduras | Honduras |
| HR | Croatia | Croatie |
| HT | Haiti | Haïti |
| HU | Hungary | Hongrie |
| ID | Indonesia | Indonésie |
| IE | Ireland | Irlande |
| IL | Israel | Israël |
| IM | Isle of Man | Île de Man |
| IN | India | Inde |
| IO | British Indian Ocean Territory | Territoire britannique de l'océan Indien |
| IQ | Iraq | Iraq |
| IR | Iran (Islamic Republic of) | Iran (République islamique d’) |
| IS | Iceland | Islande |
| IT | Italy | Italie |
| JE | Jersey | Jersey |
| JM | Jamaica | Jamaïque |
| JO | Jordan | Jordanie |
| JP | Japan | Japon |
| KE | Kenya | Kenya |
| KG | Kyrgyzstan | Kirghizistan |
| KH | Cambodia | Cambodge |
| KI | Kiribati | Kiribati |
| KM | Comoros | Comores |
| KN | Saint Kitts and Nevis | Saint-Kitts-et-Nevis |
| KP | Democratic People's Republic of Korea | République populaire démocratique de Corée |
| KR | Republic of Korea | République de Corée |
| KW | Kuwait | Koweït |
| KY | Cayman Islands | Îles Caïmanes |
| KZ | Kazakhstan | Kazakhstan |
| LA | Lao People's Democratic Republic | République démocratique populaire lao |
| LB | Lebanon | Liban |
| LC | Saint Lucia | Sainte-Lucie |
| LI | Liechtenstein | Liechtenstein |
| LK | Sri Lanka | Sri Lanka |
| LR | Liberia | Libéria |
| LS | Lesotho | Lesotho |
| LT | Lithuania | Lituanie |
| LU | Luxembourg | Luxembourg |
| LV | Latvia | Lettonie |
| LY | Libya | Libye |
| MA | Morocco | Maroc |
| MC | Monaco | Monaco |
| MD | Republic of Moldova | République de Moldova |
| ME | Montenegro | Monténégro |
| MF | Saint Martin (French Part) | Saint-Martin (partie française) |
| MG | Madagascar | Madagascar |
| MH | Marshall Islands | Îles Marshall |
| MK | North Macedonia | Macédoine du Nord |
| ML | Mali | Mali |
| MM | Myanmar | Myanmar |
| MN | Mongolia | Mongolie |
| MO | China, Macao Special Administrative Region | Chine, région administrative spéciale de Macao |
| MP | Northern Mariana Islands | Îles Mariannes du Nord |
| MQ | Martinique | Martinique |
| MR | Mauritania | Mauritanie |
| MS | Montserrat | Montserrat |
| MT | Malta | Malte |
| MU | Mauritius | Maurice |
| MV | Maldives | Maldives |
| MW | Malawi | Malawi |
| MX | Mexico | Mexique |
| MY | Malaysia | Malaisie |
| MZ | Mozambique | Mozambique |
| NA | Namibia | Namibie |
| NC | New Caledonia | Nouvelle-Calédonie |
| NE | Niger | Niger |
| NF | Norfolk Island | Île Norfolk |
| NG | Nigeria | Nigéria |
| NI | Nicaragua | Nicaragua |
| NL | Netherlands | Pays-Bas (Royaume des) |
| NO | Norway | Norvège |
| NP | Nepal | Népal |
| NR | Nauru | Nauru |
| NU | Niue | Nioué |
| NZ | New Zealand | Nouvelle-Zélande |
| OM | Oman | Oman |
| PA | Panama | Panama |
| PE | Peru | Pérou |
| PF | French Polynesia | Polynésie française |
| PG | Papua New Guinea | Papouasie-Nouvelle-Guinée |
| PH | Philippines | Philippines |
| PK | Pakistan | Pakistan |
| PL | Poland | Pologne |
| PM | Saint Pierre and Miquelon | Saint-Pierre-et-Miquelon |
| PN | Pitcairn | Pitcairn |
| PR | Puerto Rico | Porto Rico |
| PS | State of Palestine | État de Palestine |
| PT | Portugal | Portugal |
| PW | Palau | Palaos |
| PY | Paraguay | Paraguay |
| QA | Qatar | Qatar |
| RE | Réunion | Réunion |
| RO | Romania | Roumanie |
| RS | Serbia | Serbie |
| RU | Russian Federation | Fédération de Russie |
| RW | Rwanda | Rwanda |
| SA | Saudi Arabia | Arabie saoudite |
| SB | Solomon Islands | Îles Salomon |
| SC | Seychelles | Seychelles |
| SD | Sudan | Soudan |
| SE | Sweden | Suède |
| SG | Singapore | Singapour |
| SH | Saint Helena | Sainte-Hélène |
| SI | Slovenia | Slovénie |
| SJ | Svalbard and Jan Mayen Islands | Îles Svalbard-et-Jan Mayen |
| SK | Slovakia | Slovaquie |
| SL | Sierra Leone | Sierra Leone |
| SM | San Marino | Saint-Marin |
| SN | Senegal | Sénégal |
| SO | Somalia | Somalie |
| SR | Suriname | Suriname |
| SS | South Sudan | Soudan du Sud |
| ST | Sao Tome and Principe | Sao Tomé-et-Principe |
| SV | El Salvador | El Salvador |
| SX | Sint Maarten (Dutch part) | Saint-Martin (partie néerlandaise) |
| SY | Syrian Arab Republic | République arabe syrienne |
| SZ | Eswatini | Eswatini |
| TC | Turks and Caicos Islands | Îles Turques-et-Caïques |
| TD | Chad | Tchad |
| TF | French Southern Territories | Terres australes françaises |
| TG | Togo | Togo |
| TH | Thailand | Thaïlande |
| TJ | Tajikistan | Tadjikistan |
| TK | Tokelau | Tokélaou |
| TL | Timor-Leste | Timor-Leste |
| TM | Turkmenistan | Turkménistan |
| TN | Tunisia | Tunisie |
| TO | Tonga | Tonga |
| TR | Turkey | Türkiye |
| TT | Trinidad and Tobago | Trinité-et-Tobago |
| TV | Tuvalu | Tuvalu |
| TW | Taiwan | Taïwan |
| TZ | United Republic of Tanzania | République-Unie de Tanzanie |
| UA | Ukraine | Ukraine |
| UG | Uganda | Ouganda |
| UM | United States Minor Outlying Islands | Îles mineures éloignées des États-Unis |
| US | United States of America | États-Unis d’Amérique |
| UY | Uruguay | Uruguay |
| UZ | Uzbekistan | Ouzbékistan |
| VA | Holy See | Saint-Siège |
| VC | Saint Vincent and the Grenadines | Saint-Vincent-et-les Grenadines |
| VE | Venezuela (Bolivarian Republic of) | Venezuela (République bolivarienne du) |
| VG | British Virgin Islands | Îles Vierges britanniques |
| VI | United States Virgin Islands | Îles Vierges américaines |
| VN | Viet Nam | Viet Nam |
| VU | Vanuatu | Vanuatu |
| WF | Wallis and Futuna Islands | Îles Wallis-et-Futuna |
| WS | Samoa | Samoa |
| XK | Kosovo | Kosovo |
| YE | Yemen | Yémen |
| YT | Mayotte | Mayotte |
| ZA | South Africa | Afrique du Sud |
| ZM | Zambia | Zambie |
| ZW | Zimbabwe | Zimbabwe |

### 1-25 Solicitation Procedure

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Solicitation Procedure |
| Field Name FR | Méthode d’invitation à soumissionner |
| ID | solicitation_procedure |
| Description EN | It is recommended that this field be populated with one of the five solicitation procedures listed below:<br>•	AC: Advance Contract Award Notice (ACAN) refers to a contract awarded to a supplier identified under an ACAN process where it was determined that there were no other statements of capabilities that could successfully meet the government’s requirements.<br>• OB: Competitive – Open Bidding (Government Electronic Tendering System (GETS)) refers to a competitive contract where bids were solicited via GETS.<br>•	TC: Competitive – Traditional refers to a competitive contract where bids were not solicited via GETS, but through another medium, such as soliciting bids directly from suppliers by email or phone.<br>•	ST: Competitive – Selective Tendering refers to a solicitation procedure permitted under Canada’s trade agreements where qualified suppliers are selected from a source list (including single-use or multi-use lists) under the selective tendering procedural rules in Canada’s trade agreements.<br>•	TN: Non-competitive refers to a contract awarded to a supplier without soliciting bids. |
| Description FR | Il est recommandé de saisir dans ce champ l’une des cinq méthodes d’invitation à soumissionner énumérées ci-dessous.<br>•	AC: Préavis d’adjudication de contrat (PAC) fait référence à un contrat attribué à un fournisseur dans le cadre du processus de PAC lorsqu’il a été déterminé qu’aucun autre énoncé de capacités ne répondait aux exigences du gouvernement.<br>•	OB: Concurrentielle – Invitation ouverte à soumissionner (Service électronique d’appels d’offres – SEAO) fait référence à un marché concurrentiel pour lequel l’appel d’offres a été fait par le biais du SEAO.<br>•	TC: Concurrentielle – Traditionnelle fait référence à un marché concurrentiel l’appel d’offres n’a pas été fait par le biais du SEAO, mais par un autre moyen, comme la demande de soumissions directement auprès des fournisseurs par courriel ou par téléphone.<br>•	ST: Concurrentielle – Appel d’offres sélectif fait référence à une procédure de sollicitation autorisée en vertu des accords commerciaux du Canada selon laquelle les fournisseurs qualifiés sont sélectionnés à partir d’une liste de sources (y compris des listes à usage unique ou à usage multiple) en vertu des règles procédurales d’appel d’offres sélectif des accords commerciaux du Canada.<br>•	TN: Non concurrentielle fait référence à un marché attribué à un fournisseur sans appel d’offres. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Mandatory for contracts after 2022-01-01<br>If “TC” (Competitive - Traditional), “TN” (Non-Competitive) or “AC” (Advanced Contract Award Notice) is selected and trade agreement with a value other than “XX” (None) is selected, limited tendering cannot have a value of “0” or “00” (None), for contracts after 2022-01-01. |
| Validation FR | Obligatoire pour les marchés conclus après le 2022-01-01<br>Si les options « TC » (Concurrentielle - Traditionnelle), « TN » (non concurrentielle) ou « AC » (préavis d’attribution de contrat) sont sélectionnées et qu’une entente de marché ayant une valeur autre que « XX » (nulle) est sélectionnée, le champ Appel d’offres restreint ne peut avoir la valeur « 0 » ou « 00 » (nulle), pour les marchés conclus après le 2022-01-01. |
| Example Value | OB |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| AC | Advance Contract Award Notice | Préavis d’adjudication de contrat |
| OB | Competitive – Open Bidding (GETS) | Concurrentielle – Invitation ouverte à soumissionner (SEAOG) |
| ST | Competitive – Selective Tendering | Concurrentielle – Appel d’offres sélectif |
| TC | Competitive – Traditional | Concurrentielle – Traditionnelle |
| TN | Non-Competitive | Non concurrentielle |

### 1-26 Limited Tendering Reason

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Limited Tendering Reason |
| Field Name FR | Raisons justifiant le recours à l’appel d’offres limité |
| ID | limited_tendering_reason |
| Description EN | It is recommended that this field be populated with one or more of the limited tendering reasons listed below. |
| Description FR | Il est recommandé de saisir dans ce champ une ou plusieurs raisons justifiant le recours à l’appel d’offres limité énumérées ci-dessous. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text Array |
| Validation EN | Mandatory for contracts after 2022-01-01.<br>If the value 00 (none) is entered, then no other value can be entered in this field.<br>If TC, TN or AC is selected in the Solicitation Procedure data field with a value other than XX (None) selected in the Trade Agreement data field, then a Limited Tendering value other than 00 (none) must be entered, for contracts after 2022-01-01. |
| Validation FR | Obligatoire pour les marchés conclus après le 2022-01-01.<br>Si la valeur 00 (aucune) est inscrite, alors aucune autre valeur ne peut être inscrite dans ce champ.<br>Si TC, TN ou AC est sélectionné dans le champ de données Méthode d’invitation à soumissioner avec une valeur autre que XX (Aucune) sélectionnée dans le champ de données Accord commercial, une valeur d'offre limitée autre que 0 (aucune) doit être entrée, pour les marchés conclus après le 2022-01-01. |
| Example Value | 22,71 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| 00 | None | Aucune |
| 05 | No response to bid solicitation | Aucune réponse à une invitation à soumissionner |
| 20 | Goods purchased on a commodity market | Biens achetés conformément à un marché de produits de base |
| 21 | Purchases made under exceptionally advantageous conditions | Achats effectués selon des conditions exceptionnellement avantageuses |
| 22 | Winner of an architectural design contest | Lauréat d’un concours de conception architecturale |
| 23 | Consulting services regarding matters of a confidential nature (for contracts not covered by CETA, TCA ,WTO-GPA, CPTPP, CKFTA and CUFTA) | Services confidentiels d’experts-conseils (pour les marchés non visés par l’AECG, l’ACC, l’AMP-OMC, le PTPGP, l’ALECC et l’ALECU) |
| 24 | Additional construction services (discontinued as of 2022-01-01) | Services de construction supplémentaire (discontinué à partir de 2022-01-01) |
| 25 | New construction services (discontinued as of 2022-01-01) | Nouveaux services de construction (discontinué à partir de 2022-01-01) |
| 30 | Work on a property by a contractor according to a warranty or guarantee (for contracts that are only covered by the CFTA) | Travaux exécutés sur un bien par un entrepreneur conformément à une garantie (pour les marchés qui sont visés par l’ALEC seulement) |
| 31 | Work on a leased building or related property performed only by the lessor (for contracts that are only covered by the CFTA) | Travaux exécutés sur un édifice loué ou un bien connexe qui sont réalisés par le locateur seulement (pour les marchés qui sont visés par l’ALEC seulement) |
| 32 | Subscriptions to newspapers, magazines, or other periodicals (for contracts that are only covered by the CFTA) | Abonnements à des journaux, des magazines ou d’autres périodiques (pour les marchés qui sont visés par l’ALEC seulement) |
| 33 | Goods regarding matters of a confidential or privileged nature (for contracts that are only covered by the CFTA) | Biens concernant des questions de nature confidentielle ou privilégiée (pour les marchés qui sont visés par l’ALEC seulement) |
| 71 | Exclusive rights | Droits exclusifs |
| 72 | Prototype purchase | Achat de prototype |
| 74 | Additional deliveries (formerly Interchangeable Parts) | Livraisons supplémentaires (anciennement Pièces interchangeables) |
| 81 | Extreme urgency | Urgence extrême |
| 85 | Low dollar-value (discontinued as of 2022-01-01) | Faible valeur (discontinué à partir de 2022-01-01) |
| 86 | Prices and/or sources fixed by government regulations (discontinued as of 2022-01-01) | Prix ou fournisseurs déterminés par des règlements gouvernementaux (discontinué à partir de 2022-01-01) |
| 87 | Government objectives representing best interests/value (discontinued as of 2022-01-01) | Objectifs gouvernementaux représentant les meilleurs (discontinué à partir de 2022-01-01) |
| 90 | Protection of human, animal, or plant Life or health (discontinued as of 2022-01-01) | Protection de la vie ou de la santé des personnes, animaux, plantes (discontinué à partir de 2022-01-01) |

### 1-27 Trade Agreement Exceptions and Exclusions

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Trade Agreement Exceptions and Exclusions |
| Field Name FR | Exceptions et exclusions applicables aux accords commerciaux |
| ID | trade_agreement_exceptions |
| Description EN | It is recommended that this field to be populated with one or more of the exceptions or exclusions listed below. |
| Description FR | Il est recommandé de saisir dans ce champ une ou plusieurs des exceptions ou exclusions énumérées ci-dessous. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text Array |
| Validation EN | Mandatory for contracts after 2019-01-01<br>If the value 00 (none) is entered, then no other value can be entered in this field. |
| Validation FR | Obligatoire pour les marchés conclus après le 2019-01-01<br>Si la valeur 00 (aucune) est inscrite, alors aucune autre valeur ne peut être inscrite dans ce champ. |
| Example Value | 03,05 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| 00 | None | Aucune |
| 01 | Shipbuilding and repair (applies to all agreements except the CFTA) | Contrats de construction et réparation de navires (s’applique à tous les accords sauf l’ALEC) |
| 02 | Urban rail and urban transportation equipment systems, components and materials (applies to all agreements except CFTA, CETA, TCA and CPTPP) | Marchés portant sur du matériel et des systèmes de transport ferroviaire urbain et de transport en commun urbain, les éléments et matériaux servant à leur fabrication, ainsi que tous les matériaux de fer ou d’acier reliés à ces projets (s’applique à tous les accords sauf l’ALEC, l’AECG, l’ACC et le PTPGP) |
| 03 | Contracts respecting FSC 58 (communications, detection and coherent radiation equipment) (applies to all agreements except CFTA, CETA, TCA and CPTPP) | Marchés relevant de la Classification fédérale des approvisionnements (CFA) 58 (matériel de communications, de détection et de rayonnement cohérent) (s’applique à tous les accords sauf l’ALEC, l’AECG, l’ACC et le PTPGP) |
| 04 | Set-asides for small and minority businesses (discontinued as of 2022-01-01) | Marchés réservés aux petites entreprises et aux entreprises minoritaires (discontinué à partir de 2022-01-01) |
| 05 | Agricultural products made in furtherance of agricultural support programs or human feeding programs (applies to all agreements except for CFTA) | Achats de produits agricoles effectués dans le cadre de programmes de soutien à l’agriculture ou de programmes d’aide alimentaire (s’applique à tous les accords sauf l’ALEC) |
| 06 | The Depts. of Transport, Communications and Fisheries & Oceans respecting FSC 70, 74, 36 (applies to all agreements except CFTA, CKFTA, WTO-AGP, CUFTA, CETA, TCA and CPTPP) | Marchés de Transports Canada, du ministère des Communications et de Pêches et Océans dans les catégories FSC 70, 74, 36 (s’applique à tous les accords sauf l’ALEC, l’ALECC, l’AMP-OMC, l’ALECU, l’AECG, l’ACC et le PTPGC) |
| 07 | Any measures for Indigenous peoples and businesses, including set asides for Indigenous businesses (applies to all agreements) | Toute mesure en faveur des peuples et des entreprises autochtones, y compris les marchés réservés aux entreprises autochtones (s’applique à tous les accords) |
| 08 | Set-asides for small businesses other than Indigenous businesses (applies to all agreements except for CETA and TCA) | Marchés réservés aux petites entreprises (autres que des entreprises autochtones) (s’applique à tous les accords sauf l’AECG et l’ACC) |
| 09 | Measures necessary to protect public morals, order or safety (applies to all agreements) | Mesures nécessaires à la protection de la moralité publique, de l’ordre public ou de la sécurité publique (s’applique à tous les accords) |
| 10 | Measures necessary to protect human, animal or plant life or health (applies to all agreements) | Mesures nécessaires à la protection de la santé et de la vie des personnes et des animaux ou à la préservation des végétaux (s’applique à tous les accords) |
| 11 | Measures necessary to protect intellectual property (applies to all agreements) | Mesures nécessaires à la protection de la propriété intellectuelle (s’applique à tous les accords) |
| 12 | Measures relating to goods or services of persons with disabilities, philanthropic institutions or prison labour (applies to all agreements) | Mesures concernant des biens ou des services fournis par des personnes handicapées ou des organismes philanthropiques, ou encore dans le cadre du travail en milieu carcéral (s’applique à tous les accords) |
| 13 | Services procured in support of military forces located overseas (applies to all agreements) | Services obtenus à l’appui des forces militaires stationnées à l’étranger (s’applique à tous les accords) |
| 14 | Research and development services (applies to all trade agreements except for CFTA) | Services de recherche et de développement (s’applique à tous les accords commerciaux autres que l’ALEC) |

### 1-28 Procurement Strategy for Indigenous Business

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Procurement Strategy for Indigenous Business |
| Field Name FR | Stratégie d’approvisionnement auprès des entreprises autochtones |
| ID | indigenous_business |
| Description EN | It is recommended that this field indicate whether the Procurement Strategy for Indigenous Business mandatory or voluntary set-aside applies to the procurement transaction. |
| Description FR | Il est recommandé que ce champ indique si un marché réservé aux entreprises autochtones, obligatoire ou facultatif dans le cadre de la Stratégie d’approvisionnement auprès des entreprises autochtones, s’applique à l’opération liée à l’approvisionnement. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Mandatory for contracts after 2022-01-01 |
| Validation FR | Obligatoire pour les marchés conclus après le 2022-01-01 |
| Example Value | NA |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| NA | None | Aucune valeur |
| MS | Mandatory Set-Aside | Contrat réservé obligatoire |
| VS | Voluntary Set-Aside | Contrat réservé facultatif |

### 1-29 Indigenous Business excluding PSIB (formerly PSAB incidental indicator)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Indigenous Business excluding PSIB (formerly PSAB incidental indicator) |
| Field Name FR | Entreprises autochtones excluant le marché réservé en vertu de la SAEA (anciennement Indicateur d’incidence de la SAEA) |
| ID | indigenous_business_excluding_psib |
| Description EN | i. It is recommended that this field indicate whether a contract was awarded to an Indigenous business.<br>ii. Any contract awarded to an Indigenous business where the procurement is subject to a mandatory or voluntary set-aside under the Procurement Strategy for Indigenous Business should be reported as “No” under this data field as such contracts are already reported under the Procurement Strategy for Indigenous Business data field. |
| Description FR | i. Il est recommandé que ce champ indique si un marché a été attribué à une entreprise autochtone.<br>ii. Tout marché attribué à une entreprise autochtone lorsque l’approvisionnement est assujetti aux exigences relatives aux marchés réservés obligatoirement ou volontairement en vertu de la Stratégie d’approvisionnement auprès des entreprises autochtones devrait être déclaré comme étant « Non » dans ce champ, puisque de tels marchés sont déjà déclarés dans le champ de données « Stratégie d’approvisionnement auprès des entreprises autochtones ». |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Mandatory for contracts after 2019-01-01<br>This field must be N, No or Non if the Procurement Strategy for Indigenous Business field is MS or VS. |
| Validation FR | Obligatoire pour les marchés conclus après le 2019-01-01<br>Ce champ doit être N, No ou Non, si le champ Stratégie d’approvisionnement auprès des entreprises autochtones contient MS ou VS. |
| Example Value | N |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| Y | Yes | Oui |
| N | No | Non |

### 1-30 Intellectual Property Indicator

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Intellectual Property Indicator |
| Field Name FR | Indicateur de propriété intellectuelle |
| ID | intellectual_property |
| Description EN | It is recommended that this field identify whether there are terms and conditions in the contract related to intellectual property and whether those terms would result in Crown or contractor ownership of the rights to the intellectual property. |
| Description FR | Il est recommandé d’indiquer dans ce champ si le marché comporte des modalités se rapportant à la propriété intellectuelle et si, selon ces modalités, les droits de propriété intellectuelle appartiendront à l’État ou à l’entrepreneur. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Mandatory for contracts after 2019-01-01 |
| Validation FR | Obligatoire pour les marchés conclus après le 2019-01-01 |
| Example Value | A2 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| A1 | Crown owned – exception 1 (discontinued as of 2022-01-01) | Droits appartenant à l'État exception 1 (discontinué à partir de 2022-01-01) |
| A2 | Crown owned – exception 2 | Droits appartenant à l'État exception 2 |
| A3 | Crown owned – exception 3 | Droits appartenant à l'État exception 3 |
| A41 | Crown owned – exception 4.1 | Droits appartenant à l'État exception 4.1 |
| A42 | Crown owned – exception 4.2 | Droits appartenant à l'État exception 4.2 |
| A43 | Crown owned – exception 4.3 | Droits appartenant à l'État exception 4.3 |
| A5 | Crown owned – exception 5 | Droits appartenant à l'État exception 5 |
| A8 | Crown owned – exemption 8 (note: must have received approval of the Treasury Board via a Treasury Board submission) | Droits appartenant à l'État exemption 8 (nota : doit avoir reçu l’approbation du Conseil du Trésor par le \ biais d’une présentation) |
| B | Contractor Owned | Droits appartenant à l'entrepreneur |
| C | No IP Terms in Contract | Aucune modalité sur les DPI indiquée au contrat |
| NA | Not Applicable (discontinued as of 2022-01-01) | Sans objet (discontinué à partir de 2022-01-01) |
| A65 | Crown owned – exception 6.5 (discontinued as of 2017-01-01) | Droits appartenant à l'État exception 6.5 (discontinué à partir de 2017-01-01) |
| D | Organization Not Subject to IP Policy (discontinued as of 2017-01-01) | Organisation non assujettie à la Politique sur le titre de propriété intellectuel (discontinué à partir de 2017-01-01) |

### 1-31 Potential for Commercial Exploitation

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Potential for Commercial Exploitation |
| Field Name FR | Potentiel d'exploitation commerciale |
| ID | potential_commercial_exploitation |
| Description EN | It is recommended that this field identify whether intellectual property generated under the contract has the potential for commercial exploitation. |
| Description FR | Il est recommandé d’indiquer dans ce champ si la propriété intellectuelle produite en vertu du marché présente un potentiel d’exploitation commerciale. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty when the Intellectual Property data field is one of the following values (A2, A3, A41, A42, A43, A5, A8 or B). This field may be left empty if none of the Intellectual Property data field values apply. Valid formats include: Yes or No. |
| Validation FR | Ce champ ne doit pas être vide lorsque le champ Propriété intellectuelle contient l’une des valeurs suivantes : A2, A3, A41, A42, A43, A5, A8 ou B. Ce champ peut demeurer vide si aucune des valeurs de Propriété intellectuelle ne s’applique. Les formats valides incluent : Oui ou Non. |
| Example Value | N |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| Y | Yes | Oui |
| N | No | Non |

### 1-32 Former Public Servant in receipt of a PSSA pension

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Former Public Servant in receipt of a PSSA pension |
| Field Name FR | Ancien fonctionnaire recevant une pension en vertu de la LPFP |
| ID | former_public_servant |
| Description EN | It is recommended that this field identify whether the contractor is a former public servant in receipt of a pension under the Public Service Superannuation Act (PSSA). |
| Description FR | Il est recommandé pour ce champ d’indiquer si l’entrepreneur est un ancien fonctionnaire touchant une pension en vertu de la Loi sur la pension de la fonction publique (LPFP). |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Mandatory for contracts after 2019-01-01 |
| Validation FR | Obligatoire pour les marchés conclus après le 2019-01-01 |
| Example Value | Y |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| Y | Yes | Oui |
| N | No | Non |

### 1-33 Contracting Entity

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Contracting Entity |
| Field Name FR | Entité contractante |
| ID | contracting_entity |
| Description EN | i. It is recommended that this field identify whether the procurement is a contract awarded by the client department, PSPC, SSC or another departmental entity or a call-up contract against a standing offer agreement or supply arrangement agreement established by PSPC, SSC or the department.<br>ii. If PSPC awards a contract against a PSPC SOSA on behalf of a client department, it is recommended that the contract be reported as “PWC” for this field.<br>iii. If SSC awards a contract against a SSC SOSA on behalf of a client department, it is recommended that the contract be reported as “SSCC” for this field.<br>iv. If a department awards a contract against a PSPC or SSC SOSA, it is recommended that the contract be reported as “PWSOSA” or “SSCSOSA” as applicable. |
| Description FR | i. Il est recommandé d’indiquer dans ce champ si l’approvisionnement est visé par un marché attribué par le ministère client, SPAC, SPC ou une autre entité ministérielle, ou bien une commande subséquente à une offre à commandes ou à un arrangement en matière d’approvisionnement établi par SPAC, SPC ou le ministère.<br>ii. Si SPAC attribue un marché dans le cadre d’une OCAMA de SPAC au nom d’un ministère client, il est recommandé que le marché soit déclaré comme « PWC » pour ce champ.<br>iii. Si SPC attribue un marché dans le cadre d’une OCAMA des SPC au nom d’un ministère client, il est recommandé que le marché soit déclaré comme « SSCC » pour ce champ.<br>iv. Si un ministère attribue un marché dans le cadre d’une OCAMA de SPAC ou de SPC, il est recommandé que le marché soit déclaré comme « PWSOSA » ou « SSCSOSA », selon le cas. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Mandatory for contracts after 2022-01-01 |
| Validation FR | Obligatoire pour les marchés conclus après le 2022-01-01 |
| Example Value | DC |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| PWC | Contract or Call-up awarded by PSPC on behalf of the client department. | Marché ou commande subséquente attribué par SPAC au nom du ministère client. |
| SSCC | Contract awarded or Call-up by SSC on behalf of the client department. | Marché ou commande subséquente attribué par SPC au nom du ministère client. |
| OGDC | Contract awarded by another department on behalf of the client department. | Marché attribué par un autre ministère au nom du ministère client. |
| DC | Contract awarded by the department. | Marché attribué par le ministère |
| PWSOSA | Call-up or Contract awarded by client department against a Standing Offer or Supply Arrangement Agreement established by Public Services and Procurement Canada | Commande subséquente ou marché attribué par le ministère client par rapport à une l’offre à commandes ou arrangements en matière d’approvisionnement conclu par SPAC. |
| SSCSOSA | Call-up or Contract awarded by client department against a Standing Offer or Supply Arrangement Agreement established by Shared Services Canada | Commande subséquente ou marché attribué par le ministère client par rapport à une l’offre à commandes ou arrangements en matière d’approvisionnement conclu par SPC. |
| DSOSA | Call-up or Contract Against a Standing Offer or Supply Arrangement Agreement established by the department | Commande subséquente ou marché à une offre à commandes ou arrangements en matière d’approvisionnement conclu par le ministère. |

### 1-34 Standing Offer or Supply Arrangement Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Standing Offer or Supply Arrangement Number |
| Field Name FR | Numéro de l’offre à commandes |
| ID | standing_offer_number |
| Description EN | It is recommended that this field be populated with the Standing Offer or Supply Arrangement Number applicable to this contract. This field should be left blank if there is no standing offer or supply arrangement established by PSPC or SSC associated with this contract. |
| Description FR | Il est recommandé de saisir dans ce champ le numéro de l’offre à commandes ou de l’arrangement en matière d’approvisionnement qui s’applique au marché. Ce champ demeure vide en l’absence d’une offre à commandes ou d’un arrangement en matière d’approvisionnement établi par SPAC ou SPC relativement à ce marché. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must be populated if a Call-up against a standing offer or supply arrangement was identified as PWSOSA or SSCSOSA<br>If this field is populated, the Contracting Entity data field must be populated. |
| Validation FR | Ce champ doit être rempli si une commande subséquente à une offre à commandes ou un arrangement en matière d’approvisionnement a été identifié comme PWSOSA ou SSCSOSA<br>Si ce champ est rempli, le champ Entité contractante doit être rempli. |
| Example Value | EN578-160553/001/ZL |

### 1-35 Instrument Type

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Instrument Type |
| Field Name FR | Type d’instrument |
| ID | instrument_type |
| Description EN | i. It is recommended that the instrument type identify whether the transaction being reported is a contract, contract amendment, or a standing offer or supply arrangement agreement.<br>ii. The instrument type for:<br>-	A contract is “C”;<br>-	An amendment is “A”;<br>-	A standing offer agreement or supply arrangement agreement is “SOSA”;<br>-	Issuing a call-up against a standing offer or supply arrangement is “C”; and<br>-	An amendment to a call-up is “A” for this field.<br>iii. When a contract is entered into and subsequently amended in the same fiscal quarter, the two transactions should be reported separately. Entry into the contract should be reported as one entry and should be identified as a contract by entering “C” for this field. The contract amendment should be reported as a separate entry and be identified as an amendment by entering “A” for this field.<br>iv. When a standing offer or supply arrangement agreement is amended, it should continue to be identified as an “SOSA” for this field. |
| Description FR | i. Il est recommandé d’indiquer dans ce champ si l’opération déclarée est un marché, une modification de marché, une offre à commandes ou un arrangement en matière d’approvisionnement.<br>ii. Voici le type d’instrument :<br>-	un marché est « C »;<br>-	une modification est « A »;<br>-	une offre à commandes ou un arrangement en matière d’approvisionnement est « SOSA »;<br>-	l’émission d’une commande subséquente à une offre à commandes ou à un arrangement en matière d’approvisionnement est « C »;<br>-	une modification d’une commande subséquente est « A » pour ce champ.<br>iii. Lorsqu’un marché est conclu, puis modifié au cours du même trimestre de l’exercice, les deux opérations doivent être déclarées séparément. La signature du marché sera déclarée comme une seule entrée et devrait être indiquée comme étant un marché, soit « C », dans ce champ. Une modification de marché sera déclarée comme une entrée séparée et indiquée comme telle, en inscrivant « A » dans ce champ.<br>iv. Lorsqu’une offre à commandes ou un arrangement en matière d’approvisionnement est modifié, il convient de saisir le code « SOSA » dans ce champ. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Mandatory for contracts after 2019-01-01 |
| Validation FR | Obligatoire pour les marchés conclus après le 2019-01-01 |
| Example Value | C |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| C | Contract | Marché |
| A | Amendment | Modification |
| SOSA | Standing Offer or Supply Arrangement Agreement | Offre à commandes ou Arrangement en matière d’approvisionnement |

### 1-36 Minister's Office Contracts

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Minister's Office Contracts |
| Field Name FR | Marchés du cabinet du ministre |
| ID | ministers_office |
| Description EN | It is recommended that this field indicate whether the transaction is for the Minister’s office. Ministers’ offices contracts are any contracts for goods and services entered into by a minister or their exempt staff. In accordance with the Policies for Ministers’ Offices, such contracts should be charged to either a Minister’s other operating budget or to the Parliamentary Secretary’s Assistant/Advisor operating budget. Please refer to the Policies for Ministers’ Offices for more information on the Minister’s office budgets. This data field should be entered for contracts and amendments awarded effective June 21, 2019, or, alternatively, for the contracts and amendments awarded within the month of this effective date. |
| Description FR | Dans ce champ, il est recommandé d’indiquer si l’opération concerne le cabinet d’un ministre. Les marchés des cabinets de ministre sont des marchés de biens et de services qui sont conclus par un ministre ou son personnel exonéré. Conformément aux Politiques à l’intention des cabinets des ministres, les dépenses liées à ces marchés doivent être imputées aux autres budgets de fonctionnement d’un ministre ou au budget de fonctionnement de l’adjoint ou du conseiller du secrétaire parlementaire. Se reporter aux Politiques à l’intention des cabinets des ministres pour obtenir de plus amples renseignements sur les budgets des cabinets de ministre. Les données dans ce champ doivent être saisies dans le cas des marchés et des modifications de marché entrés en vigueur le 21 juin 2019 ou dans le cas des marchés attribués et des modifications de marché acceptées dans le mois de cette date d’entrée en vigueur. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Mandatory for contracts after 2019-06-21 |
| Validation FR | Obligatoire pour les marchés conclus après le 2019-06-21 |
| Example Value | Y |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| Y | Yes | Oui |
| N | No | Non |

### 1-37 Number of Bids

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of Bids |
| Field Name FR | Nombre do soumissions |
| ID | number_of_bids |
| Description EN | It is recommended that this field be populated with the total number of compliant and non-compliant bids received in the procurement.<br>i. For a competitive contract, it is recommended for this field to be the number of bids received pursuant to a bid solicitation.<br>ii. For a call-up contract against a standing offer agreement established under a competitive process, it is recommended that a value of “0” be entered for this field. In this instance, the value of “0” represents not applicable.<br>iii. For a contract with task authorizations, the number of bids of the contract may be reported if this value is known when the task authorization is issued. If the number of bids is unknown, the department may input a value of 0 to indicate it is not applicable.<br>iv. If the contract was awarded using an Advance Contract Award Notice (ACAN) and it was determined that there were no statements of capabilities that met the ACAN requirements, it is recommended that a value of “1” be entered for this field.<br>iv. For non-competitive contract, it is recommended that a value of “1” be entered for this field.<br>vi. For the establishment of a standing offer or supply arrangement agreement, it is recommended for this field to be the number of standing offer or supply arrangement bids received. If the standing offer was established under a non-competitive or an ACAN procurement process where it was determined that there were no statements of capabilities that meet the ACAN requirements, it is recommended that a value of “1” be entered for this field for subsequent contracts awarded under the standing offer.<br>vii. For a competitive contract awarded by PSPC, SSC or another department on behalf of the client department, a value of “0” may be entered if the information is not available within the reporting period for which the contract was awarded. Once the information is available, the contract record is to be updated at the next subsequent reporting period, or as soon as practicable. |
| Description FR | Il est recommandé de saisir dans ce champ le nombre total de soumissions conformes et non conformes qui ont été reçues dans le cadre du processus d’approvisionnement.<br>i. Pour un marché concurrentiel, il est recommandé que ce champ indique le nombre de soumissions reçues conformément à une invitation à soumissionner.<br>ii. Dans le cas d’une commande subséquente à une offre à commandes établie dans le cadre d’un processus concurrentiel, il est recommandé de saisir la valeur « 0 » dans ce champ. En pareil cas, la valeur « 0 » signifie sans objet.<br>iii. Pour un marché comprenant des autorisations de tâches, le nombre de soumissions pour le marché peut être déclaré si cette donnée est connue au moment de donner l’autorisation de tâches. Si le nombre de soumissions est inconnu, le ministère peut saisir la valeur « 0 ». En pareil cas, la valeur « 0 » signifie sans objet.<br>iv. Si le marché a été attribué au moyen d’un préavis d’adjudication de contrat (PAC) et qu’il a été déterminé qu’aucun énoncé de capacités ne répondait aux exigences du PAC, il est recommandé de saisir la valeur « 1 » dans ce champ.<br>v. Dans le cas d’un marché non concurrentiel, il est recommandé de saisir la valeur « 1 » dans ce champ.<br>vi. Dans le cas de l’établissement d’une offre à commandes ou d’un arrangement en matière d’approvisionnement, il est recommandé d’indiquer dans ce champ le nombre de soumissions reçues relativement à l’offre à commandes ou à l’arrangement en matière d’approvisionnement. Si l’offre à commandes a été établie dans le cadre d’un processus d’approvisionnement non concurrentiel ou d’un PAC et qu’il a été déterminé qu’il n’y avait pas d’énoncés de capacités qui répondent aux exigences du PAC, il est recommandé qu’une valeur de « 1 » soit inscrite dans ce champ pour les marches subséquents attribués en fonction de l’offre à commandes.<br>vii. Dans le cas d’un marché concurrentiel attribué par SPAC, SPC ou un autre ministère au nom du ministère client, il faut saisir la valeur « 0 » si les renseignements ne sont pas disponibles au cours de la période de déclaration au cours de laquelle le marché a été attribué. Une fois que les renseignements sont disponibles, le dossier contractuel doit être mis à jour au cours de la période de déclaration suivante, ou dès que cela est possible. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | This field must be populated with a “1” if the solicitation procedure is identified as non-competitive (TN) or Advance Contract Award Notice (ACAN). |
| Validation FR | Ce champ doit contenir un « 1 » si la méthode d’invitation à soumissionner est identifiée comme étant non concurrentielle (TN) ou un préavis d’attribution de contrat (AC). |
| Example Value | 2 |

### 1-38 Section 6 Government Contracts Regulations Exceptions

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Section 6 Government Contracts Regulations Exceptions |
| Field Name FR | Article 6 – Exceptions au Règlement concernant les marches de l’État |
| ID | article_6_exceptions |
| Description EN | i. The Government Contracts Regulations requires the solicitation of bids unless one of the s.6 exceptions to the Government Contracts Regulations applies to the contract.<br>ii. It is recommended that this field be populated with one of the s.6 exceptions to solicit bids if bids have not been solicited for the contract.<br>iii. It is recommended that this field be populated with one of the s.6 exceptions to solicit bids if the contract was awarded using an Advance Contract Award Notice (ACAN) and it was determined that there were no statements of capabilities that met the ACAN requirements.<br>iv. For contracts whereby bids have been solicited or if the procurement is not a contract subject to the Government Contracts Regulations, the value of “0” should be entered. For this data value, the value of “0” represents not applicable. |
| Description FR | i. Le Règlement sur les marchés de l’État exige le recours à un appel d’offres, à moins que l’une des exceptions prévues à l’article 6 dudit règlement ne s’applique au marché.<br>ii. Il est recommandé de saisir dans ce champ l’une des exceptions à l’appel d’offres prévues à l’article 6 si aucun appel d’offres n’a été lancé à l’égard du marché.<br>iii. Il est recommandé de saisir dans ce champ l’une des exceptions à l’appel d’offres prévues à l’article 6 si le marché a été attribué au moyen d’un préavis d’adjudication de contrat (PAC) et qu’il a été déterminé qu’aucun énoncé de capacités ne répondait aux exigences du PAC.<br>iv. Dans le cas des marchés pour lesquels un appel d’offres a été lancé, ou si l’approvisionnement n’est pas visé par un marché assujetti au Règlement sur les marchés de l’État, il faut saisir la valeur « 0 ». Pour cette valeur de données, la valeur « 0 » signifie sans objet." |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field may only be populated with “0” if the procurement was identified as competitive (open bidding (OB), traditional competitive (TC) or selective tendering (ST)). |
| Validation FR | Ce champ peut seulement contenir « 0 » si l’acquisition a été identifiée comme étant concurrentielle (invitation ouverte à soumissionner (OB) ou concurrentielle - traditionnelle (TC) ou Concurrentielle – Appel d’offres sélectif (ST)). |
| Example Value | 0 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| 0 | Not applicable | Sans objet |
| 1 | Pressing emergency in which delay would be injurious to the public interest | Extrême urgence où un retard serait préjudiciable à l’intérêt public. |
| 2 | Does not exceed s.6 (b) Government Contracts Regulations prescribed dollar limits. | N’excède pas la limite financière prescrite à l’alinéa 6 b) du Règlement sur les marchés de l’État. |
| 3 | Not in the public interest to solicit bids | Situation dans laquelle un appel d’offres ne servirait pas l’intérêt public. |
| 4 | Only one person is capable of performing the contract | Une seule personne est en mesure d’exécuter le marché. |

### 1-39 Award Criteria

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Award Criteria |
| Field Name FR | Critères d’attribution |
| ID | award_criteria |
| Description EN | It is recommended that this field be populated with one of the bid evaluation methodologies below if bids have been solicited for the contract:<br>i. If bids have not been solicited, the value of “0” is to be selected.<br>ii. For ACANs whereby it was determined that there were no statements of capabilities that met the ACAN requirements, the value of “0” should be entered.<br>iii. For amendments, select the value of “0” of this field.<br>iv. For a competitive contract awarded by PSPC, SSC or another department on behalf of the client department, a value of “0” may be entered if the information is not available within the reporting period for which the contract was awarded. Once information is available, the contract record is to be updated at the next subsequent reporting period, or as soon as practicable. |
| Description FR | Il est recommandé de saisir dans ce champ l’une des méthodes d’évaluation des soumissions indiquées ci-dessous, si un appel d’offres a été lancé à l’égard du marché :<br>i. S’il n’y a pas eu d’appel d’offres, il faut choisir la valeur « 0 ».<br>ii. Dans le cas d’un PAC à l’égard duquel il a été déterminé qu’aucun énoncé de capacités ne répondait aux exigences du PAC, il faut saisir la valeur « 0 ».<br>iii. S’il s’agit d’une modification, il faut choisir la valeur « 0 » pour ce champ.<br>iv. Dans le cas d’un marché concurrentiel attribué par SPAC, SPC ou un autre ministère au nom du ministère client, il faut saisir la valeur « 0 » si les renseignements ne sont pas disponibles au cours de la période de déclaration au cours de laquelle le marché a été attribué. Une fois que les renseignements sont disponibles, le dossier contractuel doit être mis à jour au cours de la période de déclaration suivante, ou dès que cela est possible. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | If this field is populated, it must be with a “0” if the procurement was identified<br>as non-competitive (TN) or advance contract award notice (AC) in the solicitation procedure data field or was<br>identified as an Amendment (A) in the Instrument type data field. |
| Validation FR | Si ce champ est rempli, il doit contenir un « 0 » si l’acquisition a été identifiée<br>comme étant non concurrentielle (TN) ou un préavis d’attribution de contrat<br>(AC) ou si l’acquisition a été identifiée comme un modification (A) dans le<br>champ Type d’instrument. |
| Example Value | 1 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| 0 | Not applicable | Sans objet |
| 1 | Lowest Price | Prix le plus bas |
| 2 | Lowest Cost-per-Point | Coût par point le plus bas |
| 3 | Highest Combined Rating of Technical Merit and Price | Cote combinée la plus élevée pour les qualités techniques et le meilleur prix |
| 4 | Highest Technical Merit within a Stipulated Maximum Budget | Cote la plus élevée pour les qualités techniques dans le cadre d’un budget maximal imparti |
| 5 | Variations or combinations of the above methods | Variations ou combinaisons des méthodes ci-dessus |

### 1-40 Socio-Economic Indicator

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Socio-Economic Indicator |
| Field Name FR | Indicateur socioéconomique |
| ID | socioeconomic_indicator |
| Description EN | It is recommended for this field to indicate whether the procurement is subject to one or more of the applicable Socio-economic indicators. |
| Description FR | Il est recommandé d’indiquer dans ce champ si l’approvisionnement est relié à au moins un des indicateurs socioéconomiques applicables. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | FP |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| NA | None | Aucune valeur |
| FP | Federal Contractors Program for Employment Equity | Programme de contrats fédéraux pour l’équité en matière d’emploi |

### 1-41 Reporting Period

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reporting Period |
| Field Name FR | Periode de déclaration |
| ID | reporting_period |
| Description EN | It is recommended that this field be populated in the standard format described below.<br>When published on the Open Government portal, this field will contain the fiscal quarter this particular contract entry was reported to the public. For example if a contract is being amended on May 3, 2017, and reported in the first fiscal quarter of 2017-–2018, the entry should be 2017-2018-Q1. |
| Description FR | Il est recommandé de remplir ce champ dans le format standard décrit ci-dessous.<br>Lorsqu’il est publié sur le portail du Gouvernement Ouvert, ce champ contiendra le quartier fiscal dont cette donné était déclarée. Par exemple, si un marché est modifié le 3 mai 2017, et la modification est déclarée au cours du premier trimestre de l’exercice 2017-2018, il convient d’indiquer : 2017 à 2018-Q1). |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Mandatory for contracts after 2019-01-01 |
| Validation FR | Obligatoire pour les marchés conclus après le 2019-01-01 |
| Example Value | 2016-2017-Q3 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| 2025-2026-Q4 | 2025-2026-Q4 | 2025-2026-Q4 |
| 2025-2026-Q3 | 2025-2026-Q3 | 2025-2026-Q3 |
| 2025-2026-Q2 | 2025-2026-Q2 | 2025-2026-Q2 |
| 2025-2026-Q1 | 2025-2026-Q1 | 2025-2026-Q1 |
| 2024-2025-Q4 | 2024-2025-Q4 | 2024-2025-Q4 |
| 2024-2025-Q3 | 2024-2025-Q3 | 2024-2025-Q3 |
| 2024-2025-Q2 | 2024-2025-Q2 | 2024-2025-Q2 |
| 2024-2025-Q1 | 2024-2025-Q1 | 2024-2025-Q1 |
| 2023-2024-Q4 | 2023-2024-Q4 | 2023-2024-Q4 |
| 2023-2024-Q3 | 2023-2024-Q3 | 2023-2024-Q3 |
| 2023-2024-Q2 | 2023-2024-Q2 | 2023-2024-Q2 |
| 2023-2024-Q1 | 2023-2024-Q1 | 2023-2024-Q1 |
| 2022-2023-Q4 | 2022-2023-Q4 | 2022-2023-Q4 |
| 2022-2023-Q3 | 2022-2023-Q3 | 2022-2023-Q3 |
| 2022-2023-Q2 | 2022-2023-Q2 | 2022-2023-Q2 |
| 2022-2023-Q1 | 2022-2023-Q1 | 2022-2023-Q1 |
| 2021-2022-Q4 | 2021-2022-Q4 | 2021-2022-Q4 |
| 2021-2022-Q3 | 2021-2022-Q3 | 2021-2022-Q3 |
| 2021-2022-Q2 | 2021-2022-Q2 | 2021-2022-Q2 |
| 2021-2022-Q1 | 2021-2022-Q1 | 2021-2022-Q1 |
| 2020-2021-Q4 | 2020-2021-Q4 | 2020-2021-Q4 |
| 2020-2021-Q3 | 2020-2021-Q3 | 2020-2021-Q3 |
| 2020-2021-Q2 | 2020-2021-Q2 | 2020-2021-Q2 |
| 2020-2021-Q1 | 2020-2021-Q1 | 2020-2021-Q1 |
| 2019-2020-Q4 | 2019-2020-Q4 | 2019-2020-Q4 |
| 2019-2020-Q3 | 2019-2020-Q3 | 2019-2020-Q3 |
| 2019-2020-Q2 | 2019-2020-Q2 | 2019-2020-Q2 |
| 2019-2020-Q1 | 2019-2020-Q1 | 2019-2020-Q1 |
| 2018-2019-Q4 | 2018-2019-Q4 | 2018-2019-Q4 |
| 2018-2019-Q3 | 2018-2019-Q3 | 2018-2019-Q3 |
| 2018-2019-Q2 | 2018-2019-Q2 | 2018-2019-Q2 |
| 2018-2019-Q1 | 2018-2019-Q1 | 2018-2019-Q1 |
| 2017-2018-Q4 | 2017-2018-Q4 | 2017-2018-Q4 |
| 2017-2018-Q3 | 2017-2018-Q3 | 2017-2018-Q3 |
| 2017-2018-Q2 | 2017-2018-Q2 | 2017-2018-Q2 |
| 2017-2018-Q1 | 2017-2018-Q1 | 2017-2018-Q1 |
| 2016-2017-Q4 | 2016-2017-Q4 | 2016-2017-Q4 |
| 2016-2017-Q3 | 2016-2017-Q3 | 2016-2017-Q3 |
| 2016-2017-Q2 | 2016-2017-Q2 | 2016-2017-Q2 |
| 2016-2017-Q1 | 2016-2017-Q1 | 2016-2017-Q1 |
| 2015-2016-Q4 | 2015-2016-Q4 | 2015-2016-Q4 |
| 2015-2016-Q3 | 2015-2016-Q3 | 2015-2016-Q3 |
| 2015-2016-Q2 | 2015-2016-Q2 | 2015-2016-Q2 |
| 2015-2016-Q1 | 2015-2016-Q1 | 2015-2016-Q1 |
| 2014-2015-Q4 | 2014-2015-Q4 | 2014-2015-Q4 |
| 2014-2015-Q3 | 2014-2015-Q3 | 2014-2015-Q3 |
| 2014-2015-Q2 | 2014-2015-Q2 | 2014-2015-Q2 |
| 2014-2015-Q1 | 2014-2015-Q1 | 2014-2015-Q1 |
| 2013-2014-Q4 | 2013-2014-Q4 | 2013-2014-Q4 |
| 2013-2014-Q3 | 2013-2014-Q3 | 2013-2014-Q3 |
| 2013-2014-Q2 | 2013-2014-Q2 | 2013-2014-Q2 |
| 2013-2014-Q1 | 2013-2014-Q1 | 2013-2014-Q1 |
| 2012-2013-Q4 | 2012-2013-Q4 | 2012-2013-Q4 |
| 2012-2013-Q3 | 2012-2013-Q3 | 2012-2013-Q3 |
| 2012-2013-Q2 | 2012-2013-Q2 | 2012-2013-Q2 |
| 2012-2013-Q1 | 2012-2013-Q1 | 2012-2013-Q1 |
| 2011-2012-Q4 | 2011-2012-Q4 | 2011-2012-Q4 |
| 2011-2012-Q3 | 2011-2012-Q3 | 2011-2012-Q3 |
| 2011-2012-Q2 | 2011-2012-Q2 | 2011-2012-Q2 |
| 2011-2012-Q1 | 2011-2012-Q1 | 2011-2012-Q1 |
| 2010-2011-Q4 | 2010-2011-Q4 | 2010-2011-Q4 |
| 2010-2011-Q3 | 2010-2011-Q3 | 2010-2011-Q3 |
| 2010-2011-Q2 | 2010-2011-Q2 | 2010-2011-Q2 |
| 2010-2011-Q1 | 2010-2011-Q1 | 2010-2011-Q1 |
| 2009-2010-Q4 | 2009-2010-Q4 | 2009-2010-Q4 |
| 2009-2010-Q3 | 2009-2010-Q3 | 2009-2010-Q3 |
| 2009-2010-Q2 | 2009-2010-Q2 | 2009-2010-Q2 |
| 2009-2010-Q1 | 2009-2010-Q1 | 2009-2010-Q1 |
| 2008-2009-Q4 | 2008-2009-Q4 | 2008-2009-Q4 |
| 2008-2009-Q3 | 2008-2009-Q3 | 2008-2009-Q3 |
| 2008-2009-Q2 | 2008-2009-Q2 | 2008-2009-Q2 |
| 2008-2009-Q1 | 2008-2009-Q1 | 2008-2009-Q1 |
| 2007-2008-Q4 | 2007-2008-Q4 | 2007-2008-Q4 |
| 2007-2008-Q3 | 2007-2008-Q3 | 2007-2008-Q3 |
| 2007-2008-Q2 | 2007-2008-Q2 | 2007-2008-Q2 |
| 2007-2008-Q1 | 2007-2008-Q1 | 2007-2008-Q1 |
| 2006-2007-Q4 | 2006-2007-Q4 | 2006-2007-Q4 |
| 2006-2007-Q3 | 2006-2007-Q3 | 2006-2007-Q3 |
| 2006-2007-Q2 | 2006-2007-Q2 | 2006-2007-Q2 |
| 2006-2007-Q1 | 2006-2007-Q1 | 2006-2007-Q1 |
| 2005-2006-Q4 | 2005-2006-Q4 | 2005-2006-Q4 |
| 2005-2006-Q3 | 2005-2006-Q3 | 2005-2006-Q3 |
| 2005-2006-Q2 | 2005-2006-Q2 | 2005-2006-Q2 |
| 2005-2006-Q1 | 2005-2006-Q1 | 2005-2006-Q1 |
| 2004-2005-Q4 | 2004-2005-Q4 | 2004-2005-Q4 |
| 2004-2005-Q3 | 2004-2005-Q3 | 2004-2005-Q3 |
| 2004-2005-Q2 | 2004-2005-Q2 | 2004-2005-Q2 |
| 2004-2005-Q1 | 2004-2005-Q1 | 2004-2005-Q1 |
| 2003-2004-Q4 | 2003-2004-Q4 | 2003-2004-Q4 |
| 2003-2004-Q3 | 2003-2004-Q3 | 2003-2004-Q3 |
| 2003-2004-Q2 | 2003-2004-Q2 | 2003-2004-Q2 |
| 2003-2004-Q1 | 2003-2004-Q1 | 2003-2004-Q1 |
| 2002-2003-Q4 | 2002-2003-Q4 | 2002-2003-Q4 |
| 2002-2003-Q3 | 2002-2003-Q3 | 2002-2003-Q3 |
| 2002-2003-Q2 | 2002-2003-Q2 | 2002-2003-Q2 |
| 2002-2003-Q1 | 2002-2003-Q1 | 2002-2003-Q1 |
| 2001-2002-Q4 | 2001-2002-Q4 | 2001-2002-Q4 |
| 2001-2002-Q3 | 2001-2002-Q3 | 2001-2002-Q3 |
| 2001-2002-Q2 | 2001-2002-Q2 | 2001-2002-Q2 |
| 2001-2002-Q1 | 2001-2002-Q1 | 2001-2002-Q1 |
| 2000-2001-Q4 | 2000-2001-Q4 | 2000-2001-Q4 |
| 2000-2001-Q3 | 2000-2001-Q3 | 2000-2001-Q3 |
| 2000-2001-Q2 | 2000-2001-Q2 | 2000-2001-Q2 |
| 2000-2001-Q1 | 2000-2001-Q1 | 2000-2001-Q1 |
| 1999-2000-Q4 | 1999-2000-Q4 | 1999-2000-Q4 |
| 1999-2000-Q3 | 1999-2000-Q3 | 1999-2000-Q3 |
| 1999-2000-Q2 | 1999-2000-Q2 | 1999-2000-Q2 |
| 1999-2000-Q1 | 1999-2000-Q1 | 1999-2000-Q1 |
| 1998-1999-Q4 | 1998-1999-Q4 | 1998-1999-Q4 |
| 1998-1999-Q3 | 1998-1999-Q3 | 1998-1999-Q3 |
| 1998-1999-Q2 | 1998-1999-Q2 | 1998-1999-Q2 |
| 1998-1999-Q1 | 1998-1999-Q1 | 1998-1999-Q1 |
| 1997-1998-Q4 | 1997-1998-Q4 | 1997-1998-Q4 |
| 1997-1998-Q3 | 1997-1998-Q3 | 1997-1998-Q3 |
| 1997-1998-Q2 | 1997-1998-Q2 | 1997-1998-Q2 |
| 1997-1998-Q1 | 1997-1998-Q1 | 1997-1998-Q1 |
| 1996-1997-Q4 | 1996-1997-Q4 | 1996-1997-Q4 |
| 1996-1997-Q3 | 1996-1997-Q3 | 1996-1997-Q3 |
| 1996-1997-Q2 | 1996-1997-Q2 | 1996-1997-Q2 |
| 1996-1997-Q1 | 1996-1997-Q1 | 1996-1997-Q1 |
| 1995-1996-Q4 | 1995-1996-Q4 | 1995-1996-Q4 |
| 1995-1996-Q3 | 1995-1996-Q3 | 1995-1996-Q3 |
| 1995-1996-Q2 | 1995-1996-Q2 | 1995-1996-Q2 |
| 1995-1996-Q1 | 1995-1996-Q1 | 1995-1996-Q1 |

## [Proactive Publication - Contracts over $10,000](#proactive-publication-contracts-over-10000)

### 2-1 Reporting Period

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reporting Period |
| Field Name FR | Periode de declaration |
| ID | reporting_period |
| Description EN |   |
| Description FR |   |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | 2016-2017-Q2 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| 2025-2026-Q4 | 2025-2026-Q4 | 2025-2026-Q4 |
| 2025-2026-Q3 | 2025-2026-Q3 | 2025-2026-Q3 |
| 2025-2026-Q2 | 2025-2026-Q2 | 2025-2026-Q2 |
| 2025-2026-Q1 | 2025-2026-Q1 | 2025-2026-Q1 |
| 2024-2025-Q4 | 2024-2025-Q4 | 2024-2025-Q4 |
| 2024-2025-Q3 | 2024-2025-Q3 | 2024-2025-Q3 |
| 2024-2025-Q2 | 2024-2025-Q2 | 2024-2025-Q2 |
| 2024-2025-Q1 | 2024-2025-Q1 | 2024-2025-Q1 |
| 2023-2024-Q4 | 2023-2024-Q4 | 2023-2024-Q4 |
| 2023-2024-Q3 | 2023-2024-Q3 | 2023-2024-Q3 |
| 2023-2024-Q2 | 2023-2024-Q2 | 2023-2024-Q2 |
| 2023-2024-Q1 | 2023-2024-Q1 | 2023-2024-Q1 |
| 2022-2023-Q4 | 2022-2023-Q4 | 2022-2023-Q4 |
| 2022-2023-Q3 | 2022-2023-Q3 | 2022-2023-Q3 |
| 2022-2023-Q2 | 2022-2023-Q2 | 2022-2023-Q2 |
| 2022-2023-Q1 | 2022-2023-Q1 | 2022-2023-Q1 |
| 2021-2022-Q4 | 2021-2022-Q4 | 2021-2022-Q4 |
| 2021-2022-Q3 | 2021-2022-Q3 | 2021-2022-Q3 |
| 2021-2022-Q2 | 2021-2022-Q2 | 2021-2022-Q2 |
| 2021-2022-Q1 | 2021-2022-Q1 | 2021-2022-Q1 |
| 2020-2021-Q4 | 2020-2021-Q4 | 2020-2021-Q4 |
| 2020-2021-Q3 | 2020-2021-Q3 | 2020-2021-Q3 |
| 2020-2021-Q2 | 2020-2021-Q2 | 2020-2021-Q2 |
| 2020-2021-Q1 | 2020-2021-Q1 | 2020-2021-Q1 |
| 2019-2020-Q4 | 2019-2020-Q4 | 2019-2020-Q4 |
| 2019-2020-Q3 | 2019-2020-Q3 | 2019-2020-Q3 |
| 2019-2020-Q2 | 2019-2020-Q2 | 2019-2020-Q2 |
| 2019-2020-Q1 | 2019-2020-Q1 | 2019-2020-Q1 |
| 2018-2019-Q4 | 2018-2019-Q4 | 2018-2019-Q4 |
| 2018-2019-Q3 | 2018-2019-Q3 | 2018-2019-Q3 |
| 2018-2019-Q2 | 2018-2019-Q2 | 2018-2019-Q2 |
| 2018-2019-Q1 | 2018-2019-Q1 | 2018-2019-Q1 |
| 2017-2018-Q4 | 2017-2018-Q4 | 2017-2018-Q4 |
| 2017-2018-Q3 | 2017-2018-Q3 | 2017-2018-Q3 |
| 2017-2018-Q2 | 2017-2018-Q2 | 2017-2018-Q2 |
| 2017-2018-Q1 | 2017-2018-Q1 | 2017-2018-Q1 |
| 2016-2017-Q4 | 2016-2017-Q4 | 2016-2017-Q4 |
| 2016-2017-Q3 | 2016-2017-Q3 | 2016-2017-Q3 |
| 2016-2017-Q2 | 2016-2017-Q2 | 2016-2017-Q2 |
| 2016-2017-Q1 | 2016-2017-Q1 | 2016-2017-Q1 |
| 2015-2016-Q4 | 2015-2016-Q4 | 2015-2016-Q4 |
| 2015-2016-Q3 | 2015-2016-Q3 | 2015-2016-Q3 |
| 2015-2016-Q2 | 2015-2016-Q2 | 2015-2016-Q2 |
| 2015-2016-Q1 | 2015-2016-Q1 | 2015-2016-Q1 |
| 2014-2015-Q4 | 2014-2015-Q4 | 2014-2015-Q4 |
| 2014-2015-Q3 | 2014-2015-Q3 | 2014-2015-Q3 |
| 2014-2015-Q2 | 2014-2015-Q2 | 2014-2015-Q2 |
| 2014-2015-Q1 | 2014-2015-Q1 | 2014-2015-Q1 |
| 2013-2014-Q4 | 2013-2014-Q4 | 2013-2014-Q4 |
| 2013-2014-Q3 | 2013-2014-Q3 | 2013-2014-Q3 |
| 2013-2014-Q2 | 2013-2014-Q2 | 2013-2014-Q2 |
| 2013-2014-Q1 | 2013-2014-Q1 | 2013-2014-Q1 |
| 2012-2013-Q4 | 2012-2013-Q4 | 2012-2013-Q4 |
| 2012-2013-Q3 | 2012-2013-Q3 | 2012-2013-Q3 |
| 2012-2013-Q2 | 2012-2013-Q2 | 2012-2013-Q2 |
| 2012-2013-Q1 | 2012-2013-Q1 | 2012-2013-Q1 |
| 2011-2012-Q4 | 2011-2012-Q4 | 2011-2012-Q4 |
| 2011-2012-Q3 | 2011-2012-Q3 | 2011-2012-Q3 |
| 2011-2012-Q2 | 2011-2012-Q2 | 2011-2012-Q2 |
| 2011-2012-Q1 | 2011-2012-Q1 | 2011-2012-Q1 |
| 2010-2011-Q4 | 2010-2011-Q4 | 2010-2011-Q4 |
| 2010-2011-Q3 | 2010-2011-Q3 | 2010-2011-Q3 |
| 2010-2011-Q2 | 2010-2011-Q2 | 2010-2011-Q2 |
| 2010-2011-Q1 | 2010-2011-Q1 | 2010-2011-Q1 |
| 2009-2010-Q4 | 2009-2010-Q4 | 2009-2010-Q4 |
| 2009-2010-Q3 | 2009-2010-Q3 | 2009-2010-Q3 |
| 2009-2010-Q2 | 2009-2010-Q2 | 2009-2010-Q2 |
| 2009-2010-Q1 | 2009-2010-Q1 | 2009-2010-Q1 |
| 2008-2009-Q4 | 2008-2009-Q4 | 2008-2009-Q4 |
| 2008-2009-Q3 | 2008-2009-Q3 | 2008-2009-Q3 |
| 2008-2009-Q2 | 2008-2009-Q2 | 2008-2009-Q2 |
| 2008-2009-Q1 | 2008-2009-Q1 | 2008-2009-Q1 |
| 2007-2008-Q4 | 2007-2008-Q4 | 2007-2008-Q4 |
| 2007-2008-Q3 | 2007-2008-Q3 | 2007-2008-Q3 |
| 2007-2008-Q2 | 2007-2008-Q2 | 2007-2008-Q2 |
| 2007-2008-Q1 | 2007-2008-Q1 | 2007-2008-Q1 |
| 2006-2007-Q4 | 2006-2007-Q4 | 2006-2007-Q4 |
| 2006-2007-Q3 | 2006-2007-Q3 | 2006-2007-Q3 |
| 2006-2007-Q2 | 2006-2007-Q2 | 2006-2007-Q2 |
| 2006-2007-Q1 | 2006-2007-Q1 | 2006-2007-Q1 |
| 2005-2006-Q4 | 2005-2006-Q4 | 2005-2006-Q4 |
| 2005-2006-Q3 | 2005-2006-Q3 | 2005-2006-Q3 |
| 2005-2006-Q2 | 2005-2006-Q2 | 2005-2006-Q2 |
| 2005-2006-Q1 | 2005-2006-Q1 | 2005-2006-Q1 |
| 2004-2005-Q4 | 2004-2005-Q4 | 2004-2005-Q4 |
| 2004-2005-Q3 | 2004-2005-Q3 | 2004-2005-Q3 |
| 2004-2005-Q2 | 2004-2005-Q2 | 2004-2005-Q2 |
| 2004-2005-Q1 | 2004-2005-Q1 | 2004-2005-Q1 |
| 2003-2004-Q4 | 2003-2004-Q4 | 2003-2004-Q4 |
| 2003-2004-Q3 | 2003-2004-Q3 | 2003-2004-Q3 |
| 2003-2004-Q2 | 2003-2004-Q2 | 2003-2004-Q2 |
| 2003-2004-Q1 | 2003-2004-Q1 | 2003-2004-Q1 |
| 2002-2003-Q4 | 2002-2003-Q4 | 2002-2003-Q4 |
| 2002-2003-Q3 | 2002-2003-Q3 | 2002-2003-Q3 |
| 2002-2003-Q2 | 2002-2003-Q2 | 2002-2003-Q2 |
| 2002-2003-Q1 | 2002-2003-Q1 | 2002-2003-Q1 |
| 2001-2002-Q4 | 2001-2002-Q4 | 2001-2002-Q4 |
| 2001-2002-Q3 | 2001-2002-Q3 | 2001-2002-Q3 |
| 2001-2002-Q2 | 2001-2002-Q2 | 2001-2002-Q2 |
| 2001-2002-Q1 | 2001-2002-Q1 | 2001-2002-Q1 |
| 2000-2001-Q4 | 2000-2001-Q4 | 2000-2001-Q4 |
| 2000-2001-Q3 | 2000-2001-Q3 | 2000-2001-Q3 |
| 2000-2001-Q2 | 2000-2001-Q2 | 2000-2001-Q2 |
| 2000-2001-Q1 | 2000-2001-Q1 | 2000-2001-Q1 |
| 1999-2000-Q4 | 1999-2000-Q4 | 1999-2000-Q4 |
| 1999-2000-Q3 | 1999-2000-Q3 | 1999-2000-Q3 |
| 1999-2000-Q2 | 1999-2000-Q2 | 1999-2000-Q2 |
| 1999-2000-Q1 | 1999-2000-Q1 | 1999-2000-Q1 |
| 1998-1999-Q4 | 1998-1999-Q4 | 1998-1999-Q4 |
| 1998-1999-Q3 | 1998-1999-Q3 | 1998-1999-Q3 |
| 1998-1999-Q2 | 1998-1999-Q2 | 1998-1999-Q2 |
| 1998-1999-Q1 | 1998-1999-Q1 | 1998-1999-Q1 |
| 1997-1998-Q4 | 1997-1998-Q4 | 1997-1998-Q4 |
| 1997-1998-Q3 | 1997-1998-Q3 | 1997-1998-Q3 |
| 1997-1998-Q2 | 1997-1998-Q2 | 1997-1998-Q2 |
| 1997-1998-Q1 | 1997-1998-Q1 | 1997-1998-Q1 |
| 1996-1997-Q4 | 1996-1997-Q4 | 1996-1997-Q4 |
| 1996-1997-Q3 | 1996-1997-Q3 | 1996-1997-Q3 |
| 1996-1997-Q2 | 1996-1997-Q2 | 1996-1997-Q2 |
| 1996-1997-Q1 | 1996-1997-Q1 | 1996-1997-Q1 |
| 1995-1996-Q4 | 1995-1996-Q4 | 1995-1996-Q4 |
| 1995-1996-Q3 | 1995-1996-Q3 | 1995-1996-Q3 |
| 1995-1996-Q2 | 1995-1996-Q2 | 1995-1996-Q2 |
| 1995-1996-Q1 | 1995-1996-Q1 | 1995-1996-Q1 |


---

# Data Element Profile: Proactive Publication - Aggregated Contracts from -$10,000 to $10,000

_Source YAML: `contractsa.yaml`_

## [Legend](#legend)

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

## [Proactive Publication - Aggregated Contracts from -$10,000 to $10,000](#proactive-publication-aggregated-contracts-from-10000-to-10000)

### 1-1 Calendar Year Reporting Period

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Calendar Year Reporting Period |
| Field Name FR | Période de déclaration |
| ID | year |
| Description EN | It is recommended for this field to be populated in the standard format described below. For example, if the template is being reported for the 2017 calendar year, the entry will be populated as 2017. |
| Description FR | Il est recommandé de remplir ce champ en utilisant le format standard décrit ci-dessous. Par exemple, si le modèle est déclaré pour l’année civile 2017, il faut inscrire 2017. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN |   |
| Validation FR |   |
| Example Value | 2016 |

### 1-2 Number of Goods Contracts $10K and under

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of Goods Contracts $10K and under |
| Field Name FR | Nombre de marchés de biens de 10 000 $ et moins |
| ID | contract_goods_number_of |
| Description EN | It is recommended for this field to be populated with the total number of goods contracts entered into with a value of $10,000 and under. This includes goods contracts entered into and subsequently amended in the same calendar year to an amended contract value of $10,000 and under. |
| Description FR | Il est recommandé de saisir dans ce champ le nombre total de marchés de biens conclus d’une valeur de 10 000 $ ou moins, ce qui comprend les marchés de biens conclus et modifiés par la suite au cours de la même année civile et d’une valeur de 10 000 $ ou moins. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN |   |
| Validation FR |   |
| Example Value | 100 |

### 1-3 Goods Contracts $10K and under - Original Value

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Goods Contracts $10K and under - Original Value |
| Field Name FR | Marchés de biens de 10 000 $ et moins - Valeur d’origine |
| ID | contracts_goods_original_value |
| Description EN | It is recommended for this field to be populated with the value of all goods contracts with a value of $10,000 and under, at the time of contract entry. This value should be in Canadian currency and include all applicable taxes. |
| Description FR | Il est recommandé de saisir dans ce champ la valeur des marchés de biens de 10 000 $ ou moins au moment de la conclusion du marché. Cette valeur doit être exprimée en dollars canadiens et inclure toutes les taxes qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 50000.00 |

### 1-4 Goods Contracts Amendments from -$10K to $10K - Net Amendment Value

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Goods Contracts Amendments from -$10K to $10K - Net Amendment Value |
| Field Name FR | Modifications de marchés de biens de -10 000 $ à 10 000 $ - Valeur nette des modifications |
| ID | contracts_goods_amendment_value |
| Description EN | It is recommended for this field to be populated with the value of all net amendments to goods contracts (that is, all positive and negative amendments) with a value from -$10,000 to $10,000. This value should be in Canadian currency and include all applicable taxes. An amendment should be reported either quarterly or annually. Reporting an amendment both quarterly and annually would result in double counting of the amendment’s value when calculating the total contracting activity of an organization. |
| Description FR | Il est recommandé de saisir dans ce champ la valeur nette de toutes les modifications de marché de biens (c’est-à-dire, toutes les modifications positives et négatives) de -10 000 $ à 10 000 $. Cette valeur doit être exprimée en dollars canadiens et inclure toutes les taxes qui s’appliquent. Une modification doit faire l’objet d’une déclaration trimestrielle ou annuelle. La déclaration d’une modification de façon trimestrielle et annuelle donnerait lieu au double dénombrement de la valeur de la modification au moment de calculer le total de l’activité contractuelle d’une organisation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 500.00 |

### 1-5 Number of Service Contracts $10K and under

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of Service Contracts $10K and under |
| Field Name FR | Nombre de marchés de services de 10 000 $ et moins |
| ID | contract_service_number_of |
| Description EN | It is recommended for this field to be populated with the total number of services contracts entered into with a value of $10,000 and under. This includes services contracts entered into and subsequently amended in the same calendar year to an amended contract value of $10,000 and under. |
| Description FR | Il est recommandé de saisir dans ce champ le nombre total de marchés de services conclus d’une valeur de 10 000 $ ou moins, ce qui comprend les marchés de services conclus et modifiés par la suite au cours de la même année civile et d’une valeur de 10 000 $ ou moins. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN |   |
| Validation FR |   |
| Example Value | 100 |

### 1-6 Service Contracts $10K and under - Original Value

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service Contracts $10K and under - Original Value |
| Field Name FR | Marchés de services de 10 000 $ ou moins - Valeur d’origine |
| ID | contracts_service_original_value |
| Description EN | It is recommended for this field to be populated with the value of all service contracts with a value $10,000 and under, at the time of contract entry. This value should be in Canadian currency and include all applicable taxes. |
| Description FR | Il est recommandé de saisir dans ce champ la valeur des marchés de services de 10 000 $ ou moins au moment de la conclusion du marché. Cette valeur doit être exprimée en dollars canadiens et inclure toutes les taxes qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 50000.00 |

### 1-7 Service Contracts from -$10K to $10K - Net Amendment Value

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service Contracts from -$10K to $10K - Net Amendment Value |
| Field Name FR | Modifications de marché de services de -10 000 $ à 10 000 $ - Valeur nette des modifications |
| ID | contracts_service_amendment_value |
| Description EN | It is recommended for this field to be populated with the value of all net amendments to service contracts (that is, all positive and negative amendments) with a value from -$10,000 to $10,000. This value should be in Canadian currency and include all applicable taxes. An amendment should be reported either quarterly or annually. Reporting an amendment both quarterly and annually would result in double counting of the amendment’s value when calculating the total contracting activity of an organization. |
| Description FR | Il est recommandé de saisir dans ce champ la valeur nette de toutes les modifications de marchés de services (c’est-à-dire, toutes les modifications positives et négatives) de -10 000 $ à 10 000 $. Cette valeur doit être exprimée en dollars canadiens et inclure toutes les taxes qui s’appliquent. Une modification doit faire l’objet d’une déclaration trimestrielle ou annuelle. La déclaration d’une modification de façon trimestrielle et annuelle donnerait lieu au double dénombrement de la valeur de la modification au moment de calculer le total de l’activité contractuelle d’une organisation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 500.00 |

### 1-8 Number of Construction Contracts $10K and under

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of Construction Contracts $10K and under |
| Field Name FR | Nombre de marchés de services de construction de 10 000 $ et moins |
| ID | contract_construction_number_of |
| Description EN | It is recommended for this field to be populated with the total number of construction contracts entered into with a value of $10,000 and under. This includes construction contracts entered into and subsequently amended in the same calendar year to an amended contract value of $10,000 and under. |
| Description FR | Il est recommandé de saisir dans ce champ le nombre total de marchés de services de construction conclus d’une valeur de 10 000 $ ou moins, ce qui comprend les marchés de services de construction conclus et modifiés par la suite au cours de la même année civile et d’une valeur de 10 000 $ ou moins. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN |   |
| Validation FR |   |
| Example Value | 100 |

### 1-9 Construction Contracts $10K and under - Original Value

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Construction Contracts $10K and under - Original Value |
| Field Name FR | Marchés de services de construction de 10 000 $ et moins - Valeur d’origine |
| ID | contracts_construction_original_value |
| Description EN | It is recommended for this field to be populated with the value of all construction contracts with a value $10,000 and under, at the time of contract entry. This value should be in Canadian currency and include all applicable taxes. |
| Description FR | Il est recommandé de saisir dans ce champ la valeur des marchés de services de construction de 10 000 $ ou moins au moment de la conclusion du marché. Cette valeur doit être exprimée en dollars canadiens et inclure toutes les taxes qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 50000.00 |

### 1-10 Construction Contracts Amendments from -$10K to $10K - Net Amendment Value

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Construction Contracts Amendments from -$10K to $10K - Net Amendment Value |
| Field Name FR | Modifications de marché de services de construction de -10 000 $ à 10 000 $ - Valeur nette des modifications |
| ID | contracts_construction_amendment_value |
| Description EN | It is recommended for this field to be populated with the value of all net amendments to construction contracts (that is, all positive and negative amendments) with a value from -$10,000 to $10,000. This value should be in Canadian currency and include all applicable taxes. An amendment should be reported either quarterly or annually. Reporting an amendment both quarterly and annually would result in double counting of the amendment’s value when calculating the total contracting activity of an organization. |
| Description FR | Il est recommandé de saisir dans ce champ la valeur nette de toutes les modifications de marchés de services de construction (c’est-à-dire, toutes les modifications positives et négatives) de -10 000 $ à 10 000 $. Cette valeur doit être exprimée en dollars canadiens et inclure toutes les taxes qui s’appliquent. Une modification doit faire l’objet d’une déclaration trimestrielle ou annuelle. La déclaration d’une modification de façon trimestrielle et annuelle donnerait lieu au double dénombrement de la valeur de la modification au moment de calculer le total de l’activité contractuelle d’une organisation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 500.00 |

### 1-11 Number of Acquisition Card Transactions for all Dollar Values

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of Acquisition Card Transactions for all Dollar Values |
| Field Name FR | Nombre d'opérations réalisées au moyen de la carte d'acquisition pour toutes les valeurs en dollars |
| ID | acquisition_card_transactions_number_of |
| Description EN | It is recommended for this field to be populated with the total number of all acquisition card transactions for all dollar values. |
| Description FR | Il est recommandé de saisir dans ce champ le nombre total d’opérations effectuées par carte d’achat, peu importe le montant. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN |   |
| Validation FR |   |
| Example Value | 100 |

### 1-12 Acquisition Card Transactions for all Dollar Values – Total Value

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Acquisition Card Transactions for all Dollar Values – Total Value |
| Field Name FR | Carte d'acquisition pour toutes les valeurs en dollars – Valeur totale |
| ID | acquisition_card_transactions_total_value |
| Description EN | It is recommended for this field to be populated with the sum of all dollar values for all acquisition card transactions. This value should be in Canadian currency and include all applicable taxes. |
| Description FR | Il est recommandé de saisir dans ce champ la somme des montants de toutes les opérations effectuées par carte d’achat. Cette valeur doit être exprimée en dollars canadiens et inclure toutes les taxes qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 50000.00 |


---

# Data Element Profile: Proactive Publication - Departmental Audit Committee

_Source YAML: `dac.yaml`_

## [Legend](#legend)

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

## [Proactive Publication - Departmental Audit Committee](#proactive-publication-departmental-audit-committee)

### 1-1 Reporting Period

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reporting Period |
| Field Name FR | Période de déclaration |
| ID | reporting_period |
| Description EN | The current reporting period and fiscal year |
| Description FR | La période de déclaration et l’exercice financier en cours. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | 2018-2019-Q3 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| 2018-2019-Q1 | 2018-2019-Q1 | 2018-2019-Q1 |
| 2018-2019-Q2 | 2018-2019-Q2 | 2018-2019-Q2 |
| 2018-2019-Q3 | 2018-2019-Q3 | 2018-2019-Q3 |
| 2018-2019-Q4 | 2018-2019-Q4 | 2018-2019-Q4 |
| 2019-2020-Q1 | 2019-2020-Q1 | 2019-2020-Q1 |
| 2019-2020-Q2 | 2019-2020-Q2 | 2019-2020-Q2 |
| 2019-2020-Q3 | 2019-2020-Q3 | 2019-2020-Q3 |
| 2019-2020-Q4 | 2019-2020-Q4 | 2019-2020-Q4 |
| 2020-2021-Q1 | 2020-2021-Q1 | 2020-2021-Q1 |
| 2020-2021-Q2 | 2020-2021-Q2 | 2020-2021-Q2 |
| 2020-2021-Q3 | 2020-2021-Q3 | 2020-2021-Q3 |
| 2020-2021-Q4 | 2020-2021-Q4 | 2020-2021-Q4 |
| 2021-2022-Q1 | 2021-2022-Q1 | 2021-2022-Q1 |
| 2021-2022-Q2 | 2021-2022-Q2 | 2021-2022-Q2 |
| 2021-2022-Q3 | 2021-2022-Q3 | 2021-2022-Q3 |
| 2021-2022-Q4 | 2021-2022-Q4 | 2021-2022-Q4 |
| 2022-2023-Q1 | 2022-2023-Q1 | 2022-2023-Q1 |
| 2022-2023-Q2 | 2022-2023-Q2 | 2022-2023-Q2 |
| 2022-2023-Q3 | 2022-2023-Q3 | 2022-2023-Q3 |
| 2022-2023-Q4 | 2022-2023-Q4 | 2022-2023-Q4 |
| 2023-2024-Q1 | 2023-2024-Q1 | 2023-2024-Q1 |
| 2023-2024-Q2 | 2023-2024-Q2 | 2023-2024-Q2 |
| 2023-2024-Q3 | 2023-2024-Q3 | 2023-2024-Q3 |
| 2023-2024-Q4 | 2023-2024-Q4 | 2023-2024-Q4 |
| 2024-2025-Q1 | 2024-2025-Q1 | 2024-2025-Q1 |
| 2024-2025-Q2 | 2024-2025-Q2 | 2024-2025-Q2 |
| 2024-2025-Q3 | 2024-2025-Q3 | 2024-2025-Q3 |
| 2024-2025-Q4 | 2024-2025-Q4 | 2024-2025-Q4 |
| 2025-2026-Q1 | 2025-2026-Q1 | 2025-2026-Q1 |
| 2025-2026-Q2 | 2025-2026-Q2 | 2025-2026-Q2 |
| 2025-2026-Q3 | 2025-2026-Q3 | 2025-2026-Q3 |
| 2025-2026-Q4 | 2025-2026-Q4 | 2025-2026-Q4 |

### 1-2 Line Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Line Number |
| Field Name FR | Numéro de ligne |
| ID | line_number |
| Description EN | The line number of the disclosure. |
| Description FR | Le numéro de ligne de la divulgation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN |   |
| Validation FR |   |
| Example Value | 2 |

### 1-3 Member’s Name

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Member’s Name |
| Field Name FR | Nom du membre |
| ID | member_name |
| Description EN | The member’s full name. |
| Description FR | Le nom complet du membre. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | John Smith |

### 1-4 Province or Territory of Primary Residence

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Province or Territory of Primary Residence |
| Field Name FR | Province ou territoire de résidence primaire |
| ID | province |
| Description EN | The province or territory of the member’s main residence at the time the remuneration and/or expenses were incurred. |
| Description FR | La province ou le territoire de la résidence principale du membre au moment où la rémunération et/ou les frais ont été engagés. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | AB |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| ON | Ontario | Ontario |
| QC | Quebec | Québec |
| NB | New Brunswick | Nouveau-Brunswick |
| NL | Newfoundland & Labrador | Terre-Neuve-et-Labrador |
| PE | Prince Edward Island | Île-du-Prince-Édouard |
| SK | Saskatchewan | Saskatchewan |
| YT | Yukon | Yukon |
| AB | Alberta | Alberta |
| BC | British Columbia | Colombie-Britannique |
| MB | Manitoba | Manitoba |
| NT | Northwest Territories | Territoires du Nord-Ouest |
| NU | Nunavut | Nunavut |
| NS | Nova Scotia | Nouvelle-Écosse |
| OTHER | OTHER | AUTRES |

### 1-5 Role

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Role |
| Field Name FR | Rôle |
| ID | role |
| Description EN | The member’s role at the time the remuneration and/or expenses were incurred (i.e. “C-P” is for chair and “M-M” is for member) |
| Description FR | Le rôle du membre au moment où la rémunération et/ou les frais ont été engagés (c’est-à-dire, « C-P » est pour président(e) et « M-M » est pour membre). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | M-M |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| C-P | Chair | Président(e) |
| M-M | Member | Membre |

### 1-6 Number of Hours Spent at Meeting(s)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of Hours Spent at Meeting(s) |
| Field Name FR | Nombre d'heures consacrées à la rencontre (ou aux rencontres) |
| ID | meeting_hours |
| Description EN | The number of hours when the member met with the committee in person or via teleconference during the reporting period. |
| Description FR | Le nombre d’heures où le membre a rencontré le comité en personne ou par téléconférence au cours de la période de déclaration. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 7.5 |

### 1-7 Number of hours spent on preparation, travel and/or training or orientation

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of hours spent on preparation, travel and/or training or orientation |
| Field Name FR | Nombre d'heures consacrées à la préparation, le déplacement et/ou à la formation ou à l'orientation |
| ID | other_hours |
| Description EN | The number of hours the member spent on preparation, travel and/or training or orientation during the reporting period. |
| Description FR | Le nombre d’heures que le membre a consacré à la préparation, le déplacement et/ou à la formation ou à l’orientation au cours de la période de déclaration. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 4 |

### 1-8 Total Remuneration

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Total Remuneration |
| Field Name FR | Rémunération totale |
| ID | remuneration |
| Description EN | The total amount paid to the member for time spent at meetings, preparation, travel and/or training or orientation during the reporting period (i.e. per diem rate ÷ 7.5 hours x number of hours worked). |
| Description FR | Le montant total payé au membre pour le temps consacré aux réunions, à la préparation, le déplacement et/ou à la formation ou à l’orientation au cours de la période de déclaration (c’est-à-dire, taux journalier ÷ 7,5 heures x nombre d’heures travaillées). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 2300.0 |

### 1-9 Total Travel Expenses

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Total Travel Expenses |
| Field Name FR | Frais de voyage totaux |
| ID | travel_expenses |
| Description EN | The total travel expenses incurred by the member during the reporting period, including transportation, meals, incidentals, etc. |
| Description FR | Les frais de voyage totaux engagés par le membre au cours de la période de déclaration, y compris le transport, les repas, faux frais, etc. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 500.0 |

### 1-10 Notes (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Notes (English) |
| Field Name FR | Notes (Anglais) |
| ID | notes_en |
| Description EN | Any other relevant information (e.g. description of the activities included in the total remuneration, point of origin of a member’s travel, etc.) |
| Description FR | Toute autre information pertinente (par exemple, une description des activités incluses dans la rémunération totale, le point de départ du déplacement d’un membre, etc.) |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | The total remuneration includes time spent at meetings, preparation time and travel time. |

### 1-11 Notes (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Notes (French) |
| Field Name FR | Notes (Français) |
| ID | notes_fr |
| Description EN | Any other relevant information (e.g. description of the activities included in the total remuneration, point of origin of a member’s travel, etc.) |
| Description FR | Toute autre information pertinente (par exemple, une description des activités incluses dans la rémunération totale, le point de départ du déplacement d’un membre, etc.) |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | La rémunération totale comprend le temps passé en réunions, le temps de préparation et le temps de déplacement. |


---

# Data Element Profile: Experimentation Inventory

_Source YAML: `experiment.yaml`_

## [Legend](#legend)

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

## [Experimentation Inventory](#experimentation-inventory)

### 1-1 Reference Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reference Number |
| Field Name FR | Numéro de référence |
| ID | reference_number |
| Description EN | This field is populated by the user with the reference number of the Experiment. This number is a mandatory system requirement when publishing a template. |
| Description FR | Ce champ est rempli par l’utilisateur avec le numéro de référence de l'experiment. Le numéro est une exigence de système obligatoire pour la publication d’un modèle. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | HC-2019-EI-00001 |

### 1-2 Project Title (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Project Title (English) |
| Field Name FR | Titre du projet (en anglais) |
| ID | titre_du_projet_en |
| Description EN | This field describes the project title, in English |
| Description FR | Ce champ décrira le titre du projet, en anglais |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Experimenting with content design |

### 1-3 Project Title (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Project Title (French) |
| Field Name FR | Titre du projet (en français) |
| ID | titre_du_projet_fr |
| Description EN | This field describes the project title, in French |
| Description FR | Ce champ décrira le titre du projet, en français |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Expérimentation de la conception de contenu |

### 1-4 Research Question (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Research Question (English) |
| Field Name FR | Question de recherche (en anglais) |
| ID | question_de_recherche_en |
| Description EN | This field describes the research question informing the project, in English |
| Description FR | Ce champ décrira la question de recherche guidant le projet, en anglais |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Are enhancements to the landing page, compared to the existing one, resulting in more Canadians proceeding to the consumer incident report form? |

### 1-5 Research Question (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Research Question (French) |
| Field Name FR | Question de recherche (en français) |
| ID | question_de_recherche_fr |
| Description EN | This field describes the research question informing the project, in French |
| Description FR | Ce champ décrira la question de recherche guidant le projet, en français |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Les améliorations apportées à la page d’accueil, par rapport à la page existante, ont-elles pour effet d’augmenter le nombre de Canadiens qui utilisent le rapport d’incident pour les produits de consommation? |

### 1-6 Project Summary (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Project Summary (English) |
| Field Name FR | Résumé du projet (en anglais) |
| ID | project_summary_en |
| Description EN | This field summarizes the key information about the project, including any findings once the initiative is completed, in English |
| Description FR | Ce champ résumera les information-clés à propos du projet, y compris les résultats lorque le projet est complété, en anglais |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | This experiment entailed a live, randomized A/B test using the existing consumer incident reporting landing page as well as a modified ‘intervention’ landing page. The intent was to determine if changes in language and presentation could successfully drive online users to continue through to the consumer incident reporting form. That experiment ran between December 12, 2018 and March 11, 2019. During the experimental period, there were 1,999 visits to the intervention landing page and 2,592 to the existing one. After reaching the landing page, visitors would click on a link to enter the consumer incident reporting form. A greater number of visitors from the intervention page entered the consumer incident reporting form (61%), compared to the existing page (27%). This difference in proportions (34%) is statistically significant (p<0. 01). This is an indication that optimizing the landing page content with consumer-focused changes played an important role in retaining consumers within the incident reporting pathway |

### 1-7 Project Summary (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Project Summary (French) |
| Field Name FR | Résumé du projet (en français) |
| ID | project_summary_fr |
| Description EN | This field summarizes the key information about the project, including any findings once the initiatve is completed, in French |
| Description FR | Ce champ résumera les information-clés à propos du projet, y compris les résultats lorque le projet est complété, en français |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Cette expérience comportait un test A/B en direct et aléatoire touchant la page de renvoi existante pour la déclaration des incidents concernant un produit de consommation, ainsi que la page de renvoi « intervention » modifiée. L’objectif était de déterminer si le fait d’apporter des changements dans la langue et la présentation pouvait amener les utilisateurs en ligne à naviguer vers le formulaire de déclaration des incidents concernant un produit de consommation. Cette expérience s’est déroulée entre le 12 décembre 2018 et le 11 mars 2019. Au cours de la durée du processus expérimental, il y a eu 1 999 visites à la page de renvoi d’intervention et 2 592 à la page de renvoi existante. Après avoir atteint la page de renvoi, les visiteurs doivent cliquer sur un lien pour entrer dans le formulaire de déclaration d’incident concernant un produit de consommation. Un plus grand nombre de visiteurs provenant de la page d’intervention ont rempli le formulaire de déclaration d’incident concernant un produit de consommation (61 %), comparativement à ceux provenant de la page existante (27 %). Cette différence de pourcentage (34 %) est statistiquement significative (p<0. 01). Cela indique que l’optimisation du contenu de la page de renvoi grâce à des changements axés sur les consommateurs a joué un rôle important dans le maintien des visiteurs dans le processus de déclaration des incidents |

### 1-8 Last Updated

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Last Updated |
| Field Name FR | Dernière mise à jour |
| ID | last_updated |
| Description EN | This field will display the latest update provided for the project. |
| Description FR | Ce champ décrira à quand remonte la dernière mise à jour. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Date |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 2019-12-01 |

### 1-9 Experimental area

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Experimental area |
| Field Name FR | Secteur d'expérimentation |
| ID | experimental_area |
| Description EN | This field will display the area in which the experiment is taking place. |
| Description FR | Ce champ décrira dans quel secteur l'expérience prend place. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | PR |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| PO | Policy | Politique |
| PR | Program | Programme |
| RE | Regulatory | Règlementation |
| SE | Service Delivery | Prestation de services |
| SI | Internal Services | Services internes |
| GC | Grants and Contributions | Subventions et contributions |
| OA | Other | autres |

### 1-10 Design

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Design |
| Field Name FR | Devis |
| ID | research_design |
| Description EN | This field will describe the research design used for the project. |
| Description FR | Ce champ décrira le devis de recherche employé dans le projet. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | STR |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| QEX | Quasi-experimental | Quasi-expérimental |
| RDM | Randomized | Randomisé |
| STR | Structured pre-post | Avant-après structuré |
| OTH | Other | Autre |

### 1-11 Design Details (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Design Details (English) |
| Field Name FR | Devis details (anglais) |
| ID | design_details_en |
| Description EN | This field will describe the details of the research design used for the project. |
| Description FR | Ce champ décrira les détails du devis de recherche employé dans le projet. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | The experiment was a randomized A/B test that used the existing landing page for consumer incident reporting and a modified landing page. The intent of the experiment was to determine if changes in language and presentation could successfully encourage users to complete the cosmetic or consumer incident report form. For the experiment, users were sent to either the existing landing page (that is, the control group) or the modified landing page (that is, the experimental group). |

### 1-12 Design Details (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Design Details (French) |
| Field Name FR | Devis details (français) |
| ID | design_details_fr |
| Description EN | This field will describe the details of the research design used for the project. |
| Description FR | Ce champ décrira les détails du devis de recherche employé dans le projet. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | L’expérience était un essai A/B aléatoire qui utilisait les éléments suivants : la page d’accueil existante pour signaler un incident concernant un produit de consommation; une page d’accueil modifiée. Le but de l’expérience était de déterminer si des changements dans le libellé et la présentation pourraient inciter les utilisateurs à remplir le rapport d’incident concernant un produit de consommation ou un produit cosmétique. En ce qui concerne l’expérience, les utilisateurs ont été dirigés soit vers la page d’accueil existante (c’est‑à-dire le groupe témoin), soit vers la page d’accueil modifiée (c’est-à-dire le groupe expérimental). |

### 1-13 Intervention (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Intervention (English) |
| Field Name FR | Intervention (anglais) |
| ID | intervention_en |
| Description EN | This field will describe the intervention tested in the project. |
| Description FR | Ce champ décrira l’intervention testée dans le projet. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | The modified landing page improved the user interface by providing: a button that makes it easier to submit a report form and a plain language instructions on how to fill out the report form. The modified landing page provided clearer direction to users about: which incidents should be reported to the Consumer Product Safety Program, why incidents should be reported to the program, and how to report such incidents. |

### 1-14 Intervention (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Intervention (French) |
| Field Name FR | Intervention (français) |
| ID | intervention_fr |
| Description EN | This field will describe the intervention tested in the project. |
| Description FR | Ce champ décrira l’intervention testée dans le projet. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | La page d’accueil modifiée a amélioré l’interface utilisateur grâce aux éléments suivants : un bouton qui facilite la soumission d’un rapport d’incident; des instructions en langage clair et simple sur la façon de remplir le rapport d’incident. La page d’accueil modifiée fournissait des instructions plus claires aux utilisateurs sur les éléments suivants : les incidents qui devraient être signalés au Programme de la sécurité des produits de consommation; la raison pour laquelle les incidents devraient être signalés au programme; la façon de signaler ces incidents. |

### 1-15 Outcomes (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Outcomes (English) |
| Field Name FR | Mesure des résultats (anglais) |
| ID | mesure_des_resultats_en |
| Description EN | This field will describe the intervention tested in the project. |
| Description FR | Ce champ décrira l’intervention testée dans le projet. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | There were two main outcomes for this project: the number of unique page visits for each webpage used; the number of visitors accessing the cosmetic or consumer incident report form. |

### 1-16 Outcomes (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Outcomes (French) |
| Field Name FR | Mesure des résultats (françcais) |
| ID | mesure_des_resultats_fr |
| Description EN | This field will describe the outcomes measured in the project. |
| Description FR | Ce champ décrira la/les mesure(s) de résultat(s) employée(s) dans le projet. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Il y avait deux mesures principales dans ce projet: le nombre de visites uniques aux pages web employées; le nombre de visiteurs accédant au rapport d’incident concernant un produit de consommation ou un produit cosmétique. |

### 1-17 Findings (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Findings (English) |
| Field Name FR | Résultats (anglais) |
| ID | resultats_en |
| Description EN | This field will describe the outcomes measured in the project. |
| Description FR | Ce champ décrira la/les mesure(s) de résultat(s) employée(s) dans le projet. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | None |
| Validation FR | None |
| Example Value | The experiment ran for 3 months, from December 12, 2018, to March 11, 2019. During this time, there were 2,592 page visits to the existing landing page and 1,999 page visits to the modified landing page. After reaching the landing page, visitors would click on a link to access the consumer incident report form. A greater number of visitors of the modified page accessed the cosmetic or consumer incident report form (61%), compared to visitors of the existing page (27%). The difference (34.0%) in the percentage of visitors who accessed the report form is statistically significant. This difference indicates that making the landing page more user-focused played an important role in encouraging users to access the incident report form. |

### 1-18 Findings (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Findings (French) |
| Field Name FR | Résultats (françcais) |
| ID | resultats_fr |
| Description EN | This field will describe the findings of the project. |
| Description FR | Ce champ décrira les résultats observés dans le projet. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | None |
| Validation FR | None |
| Example Value | L’expérience a duré trois mois, du 12 décembre 2018 au 11 mars 2019. Au cours de cette période, la page d’accueil existante a été consultée 2 592 fois et la page d’accueil modifiée, 1 999 fois. Après avoir accédé à la page d’accueil, les visiteurs cliquaient sur un lien pour accéder au rapport d’incident concernant un produit de consommation. Un plus grand nombre de visiteurs de la page modifiée ont accédé au rapport d’incident concernant un produit de consommation ou un produit cosmétique (61 %), comparativement aux visiteurs de la page existante (27 %). La différence (34 %) dans le pourcentage de visiteurs qui ont accédé au rapport d’incident est statistiquement significative. Cette différence indique que le fait de rendre la page d’accueil plus axée sur l’utilisateur a joué un rôle important pour inciter les utilisateurs à accéder au rapport d’incident. |

### 1-19 Status

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Status |
| Field Name FR | Statut |
| ID | status |
| Description EN | This field will describe the status of the project. |
| Description FR | Ce champ décrira le statut du projet. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | COM |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| ACT | Active | Actif |
| INA | Inactive | Inactif |
| COM | Completed | Complété |

### 1-20 Lead Branch and/or Unit (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Lead Branch and/or Unit (English) |
| Field Name FR | Direction et/ou unité responsable (en anglais) |
| ID | lead_branch_en |
| Description EN | This field describes the organizational structure tied to the project owner (if applicable), in English |
| Description FR | Ce champ décrira la structure organisationnelle liée à ce projet (si applicable), en anglais |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | None |
| Validation FR | None |
| Example Value | Consumer Product Safety Program |

### 1-21 Lead Branch and/or Unit (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Lead Branch and/or Unit (French) |
| Field Name FR | Direction et/ou unité responsable (en français)) |
| ID | lead_branch_fr |
| Description EN | This field describes the organizational structure tied to the project owner (if applicable), in French. |
| Description FR | Ce champ décrira la structure organisationnelle liée à ce projet (si applicable), en français |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | None |
| Validation FR | None |
| Example Value | Programme de la sécurité des produits de consommation |

### 1-22 Further Information / Links (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Further Information / Links (English) |
| Field Name FR | Informations supplémentaires / liens (anglais) |
| ID | info_supplementaire_en |
| Description EN | This field includes a URL link to additional information on the project (e.g. report, blog post, etc.), in English. |
| Description FR | Ce champ incluera un lien URL fournissant des information additionnelles (p.ex. rapport, blogue), en anglais. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | None |
| Validation FR | None |

### 1-23 Further Information / Links (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Further Information / Links (French) |
| Field Name FR | Informations supplémentaires / liens (en français) |
| ID | info_supplementaire_fr |
| Description EN | This field includes a URL link to additional information on the project (e.g. report, blog post, etc.), in Frencjh. |
| Description FR | Ce champ incluera un lien URL fournissant des information additionnelles (p.ex. rapport, blogue), en français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | None |
| Validation FR | None |


---

# Data Element Profile: Proactive Publication - Grants and Contributions

_Source YAML: `grants.yaml`_

## [Legend](#legend)

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

## [Proactive Publication - Grants and Contributions](#proactive-publication-grants-and-contributions)

### 1-1 Reference Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reference Number |
| Field Name FR | Numéro de référence |
| ID | ref_number |
| Description EN | The Reference number is populated by departments. It is a unique reference number given to each entry. Having a unique identifier for each item will allow departments to locate a specific item in the registry should they need to modify or delete.<br>Controlled format; This field is populated in the following format DDD-YYYY-YYYY-QX-XXXXX<br>1. DDD represents the department number – Use the same three-digit number as the ‘Departmental Identifier’, which is the department number per the Chart of Accounts list of departments. Ensure you are reviewing the most current year: https://www.tpsgc-pwgsc.gc.ca/recgen/pceaf-gwcoa/2425/txt/rg-3-num-eng.html<br>2. YYYY-YYYY represents the fiscal year<br>3. QX represents the fiscal quarter<br>4. XXXXX represents the unique number assigned by the department for each entry.<br>For example, entries in the 2018-2019 Q1 fiscal year should be assigned numbers as follows: 001-2018-2019-Q1-00001, 001-2018-2019-Q1-00002, 001-2018-2019-Q1-00003, etc.' |
| Description FR | Ce champ est rempli par l’utilisateur. L’identificateur de projet ministériel permet aux ministères d’identifier rapidement les rapports produits dans leur propre système. Les ministères devraient utiliser un chiffre qui est logique pour le ministère. Ces renseignements seront publiés dans le cadre du rapport.<br>Format contrôlé; Ce champ est rempli au format suivant: DDD-YYYY-YYYY-QX-XXXXX<br>1.	DDD représente le numéro du ministère - Utilisez le même numéro à trois chiffres que l’«Identificateur ministériel», qui est le numéro de ministère selon la liste du plan comptable des ministères. Assurez-vous de consulter l’année la plus récente : https://www.tpsgc-pwgsc.gc.ca/recgen/pceaf-gwcoa/2425/txt/rg-3-num-fra.html<br>2.	AAAA-AAAA représente l'année fiscale<br>3.	QX représente le trimestre fiscal<br>4.	XXXXX représente le numéro unique attribué par le département pour chaque entrée.<br>Par exemple, les numéros de l'exercice 2018-2019 du T1 devraient recevoir les numéros suivants: 001-2018-2019-Q1-00001, 001-2018-2019-Q1-00002, 001-2018-2019-Q1-00003, etc.' |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | 001-2018-2019-Q2-00045 |

### 1-2 Amendment Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Amendment Number |
| Field Name FR | Numéro de modification |
| ID | amendment_number |
| Description EN | This field is populated by departments and identifies that an amendment is occurring to original information. Use 0 for original records. The first amendment after the original agreement should be identified as 1, then 2, etc. Agreement terminations should be identified as another amendment number and report 'termination' in the 'Additional information' column. |
| Description FR | Ce champ est rempli par les ministères et indique qu'une modification est apportée aux renseignements originaux. Utiliser 0 pour les enregistrements originaux. La première modification après l'accord initial doit être identifiée comme numéro 1, puis 2, etc. Les résiliations d'accord doivent être identifiées comme un autre numéro de modification et indiquer 'résiliation' dans la colonne 'Renseignements supplémentaires'. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN |   |
| Validation FR |   |
| Example Value | 3 |

### 1-3 Amendment Date

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Amendment Date |
| Field Name FR | Date de modification |
| ID | amendment_date |
| Description EN | This field is populated by departments and indicates the date on which an amendment (or amendments) took place. If the amendment number is not zero, this field is required. |
| Description FR | Ce champ est rempli par les ministères et indique la date à laquelle une modification (ou des modifications) a été apportée. Vous devez remplir ce champ si le numéro de la modification indique un autre chiffre que 0. |
| Obligation EN | Mandatory if amendment number set |
| Obligation FR | Obligatoire si le numéro de modification est défini |
| Occurrence | Single |
| Format Type | Date |
| Validation EN |   |
| Validation FR |   |
| Example Value | 2018-04-01 |

### 1-4 Agreement Type

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Agreement Type |
| Field Name FR | Type d’entente |
| ID | agreement_type |
| Description EN | This field is populated by departments and indicates whether the agreement signed is a grant, contribution or other transfer payment. |
| Description FR | Ce champ est rempli par les ministères et indique si l'entente signée vise une subvention, une contribution ou un autre paiement de transfert. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | G |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| G | Grant | subvention |
| C | Contribution | contribution |
| O | Other transfer payment | autre |

### 1-5 Recipient Type

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Recipient Type |
| Field Name FR | Type de bénéficiaire |
| ID | recipient_type |
| Description EN | The recipient type helps identify who is receiving the money. |
| Description FR | Le type de bénéficiaire permet d'identifier qui reçoit l'argent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Required if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Requis si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Example Value | G |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| F | For-profit organizations | organisme à but lucratif |
| N | Not-for-profit organizations and charities | organisme à but non lucratif et organisme de bienfaisance |
| S | Academia | établissement universitaire et institution publique |
| A | Indigenous recipients | bénéficiaire autochtone |
| G | Government | gouvernement |
| I | International (non-government) | organisation internationale (non gouvernementale) |
| P | Individual or sole proprietorships | particulier ou entreprise à propriétaire unique |
| O | Other | autre |

### 1-6 Recipient Business Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Recipient Business Number |
| Field Name FR | Numéro d'entreprise du bénéficiaire |
| ID | recipient_business_number |
| Description EN | The Business Number is a nine digit number issued by the Canada Revenue Agency since 1994. Per the Directive on the Business Number, it has been identified as the standard identifier for all transactions between businesses and the Government of Canada, including transactions linked to grant and/or contribution funding.<br>This guidance further aligns with the Government of Canada data reference standard on business number: Data reference standard on the business number - Canada.ca (https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/enabling-interoperability/gc-enterprise-data-reference-standards/data-reference-standard-business-number.html)<br>The business number should be populated for an organization or charity.<br>Real-time validation of business identity information linked to the Business Number, including legal name and operating name, for sole proprietorship, partnerships and incorporations, is available to departments through the Business Number Web Validation Service. For more details contact ic.bnadoptionne.ic@canada.ca.<br>To validate a Business Number associated with a charity, departments can access the List of Charities basic search on the Canada.ca website. Enter the Charity name and click the Search button. Then click the Charity name of the search result to find additional information about the charity (e.g., Charity Program number, charity status, effective date of status, designation, etc.) Legal name and operating name cannot be validated using this basic search.<br>A business number is issued when an organization is registered federally, provincially or municipally. It does not change and will allow for consistent identification even if the legal name, the operation name or the organization changes over the life cycle of the grant or contribution. |
| Description FR | Depuis 1994, l’Agence du revenu du Canada émet des numéros d’entreprise à neuf chiffres. Aux termes de la Directive sur le numéro d’entreprise, le numéro d’entreprise constitue l’identificateur standard de toutes les opérations effectuées entre une entreprise et le gouvernement du Canada, y compris les opérations associées à une subvention ou à un financement de contribution.<br>Cette directive est également conforme à la norme de référence sur les données du numéro d'entreprise du gouvernement du Canada : Norme référentielle relative aux données sur le numéro d’entreprise - Canada.ca (https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/innovations-gouvernementales-numeriques/permettre-interoperabilite/normes-referentielles-pangouvernementales-relatives-donnees-gc/norme-referentielle-relative-donnees-numero-entreprise.html)<br>Le numéro d’entreprise devrait être consigné pour une organisation ou un organisme de bienfaisance.<br>Les ministères peuvent obtenir la validation en temps réel de l’identité d’une entreprise en saisissant son numéro d’entreprise dans le Service de validation du numéro d’entreprise en ligne, qui inclut le nom légal et le nom commercial pour les entreprises individuelles, les partenariats et les constitutions en personne morale. Si vous voulez obtenir de plus amples renseignements, envoyez un courriel à ic.bnadoptionne.ic@canada.ca.<br>Pour valider un numéro d’entreprise associé à un organisme de bienfaisance, les ministères peuvent effectuer une recherche de base dans la Liste d’organismes de bienfaisance, sur le site Web Canada.ca. Entrez le nom de l’organisme de bienfaisance, puis cliquez sur le bouton de Recherche. Ensuite, cliquez sur le nom de l’organisme de bienfaisance tiré du résultat de la recherche afin de trouver de plus amples renseignements sur l’organisme de bienfaisance (p. ex., le numéro du programme de bienfaisance, le statut de l’organisme de bienfaisance, la date d’entrée en vigueur du statut et la désignation de l’organisme de bienfaisance). Il est impossible de valider le nom légal et le nom commercial au moyen de la fonction de recherche de base. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Must be a 9 digit number if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Doit être un numéro à neuf chiffres si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Example Value | 123456789 |

### 1-7 Recipient Legal Name (English|French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Recipient Legal Name (English\|French) |
| Field Name FR | Nom légal du bénéficiaire (anglais\|français) |
| ID | recipient_legal_name |
| Description EN | The recipient legal name is meant to complement the existing “Recipient business number” field. It is the legal name of the recipient. This information should be taken from the agreement.<br>Only translated if the legal name is provided in both official languages by the recipient.  Provide in the following format: name English\|name French. |
| Description FR | Le nom légal du bénéficiaire se veut complémentaire au champ « Numéro d'entreprise du bénéficiaire ». Cette information devrait être tirée de l'entente de subvention ou de contribution.<br>Traduction seulement si le nom légal est fourni dans les deux langues officielles par le bénéficiaire. Fournir dans le format suivant : nom anglais\|nom français. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | ACME Services Limited\|Services ACME Limitée |

### 1-8 Recipient Operating Name (English|French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Recipient Operating Name (English\|French) |
| Field Name FR | Nom commercial du bénéficiaire (anglais\|français) |
| ID | recipient_operating_name |
| Description EN | The “Recipient operating name” is an optional field used when an organization operates under a name that differs from its legal name or business number. When a researcher receives funding through a university, this information would be populated here. This field is not intended to capture the ultimate recipient of a grant or contribution; instead, the name of the person receiving funding from the Government of Canada should be entered.<br>Only translated if the name is provided in both official languages by the recipient. Provide in the following format: Legal name English\|Legal name French. |
| Description FR | Le champ « Nom commercial du bénéficiaire » est un champ facultatif utilisé dans le cas d'organisations qui exercent leurs activités sous un nom différent de leur nom légal ou de leur numéro d'entreprise. Dans le cas de chercheurs qui reçoivent leur financement par l'entremise d'une université, cette information doit être entrée ici. Ce champ ne sert pas à saisir le nom du bénéficiaire ultime de la subvention ou de la contribution, mais plutôt celui de la personne qui reçoit le financement du gouvernement du Canada.<br>Traduction seulement si le nom est fourni dans les deux langues officielles par le bénéficiaire. Fournir dans le format suivant : nom anglais\|nom français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | ACME |

### 1-9 Research Organization (English|French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Research Organization (English\|French) |
| Field Name FR | Organisme de recherche (anglais\|français) |
| ID | research_organization_name |
| Description EN | The “Research organization” is an optional field for including information about the organization that the recipient represents. This field will be used mainly to highlight academic organizations that researchers have partnered with.<br>Only translated if the organization name is provided in both official languages by the recipient in the following format: name English\|name French. |
| Description FR | Le champ « Organisme de recherche » est facultatif. Il sert à inclure les renseignements sur l'organisation que le bénéficiaire représente. Ce champ sera surtout utilisé pour mettre en évidence les organisations avec lesquelles les chercheurs ont formé un partenariat.<br>Traduction seulement si le nom de l'organisme est fourni dans les deux langues officielles par le bénéficiaire. Fournir dans le format suivant : nom anglais\|nom français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | York University\|Université York |

### 1-10 Recipient Country

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Recipient Country |
| Field Name FR | Pays du bénéficiaire |
| ID | recipient_country |
| Description EN | The “Recipient country” is a mandatory field. It is the country in which the recipient resides. |
| Description FR | Le « Pays du bénéficiaire » est un champ obligatoire qui indique le pays de résidence du bénéficiaire. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | CA |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| AD | Andorra | Andorre |
| AE | United Arab Emirates | Émirats arabes unis |
| AF | Afghanistan | Afghanistan |
| AG | Antigua and Barbuda | Antigua-et-Barbuda |
| AI | Anguilla | Anguilla |
| AL | Albania | Albanie |
| AM | Armenia | Arménie |
| AO | Angola | Angola |
| AQ | Antarctica | Antarctique |
| AR | Argentina | Argentine |
| AS | American Samoa | Samoa américaines |
| AT | Austria | Autriche |
| AU | Australia | Australie |
| AW | Aruba | Aruba |
| AX | Åland Islands | Îles d’Åland |
| AZ | Azerbaijan | Azerbaïdjan |
| BA | Bosnia and Herzegovina | Bosnie-Herzégovine |
| BB | Barbados | Barbade |
| BD | Bangladesh | Bangladesh |
| BE | Belgium | Belgique |
| BF | Burkina Faso | Burkina Faso |
| BG | Bulgaria | Bulgarie |
| BH | Bahrain | Bahreïn |
| BI | Burundi | Burundi |
| BJ | Benin | Bénin |
| BL | Saint Barthélemy | Saint-Barthélemy |
| BM | Bermuda | Bermudes |
| BN | Brunei Darussalam | Brunéi Darussalam |
| BO | Bolivia (Plurinational State of) | Bolivie (État plurinational de) |
| BQ | Bonaire, Sint Eustatius and Saba | Bonaire, Saint-Eustache et Saba |
| BR | Brazil | Brésil |
| BS | Bahamas | Bahamas |
| BT | Bhutan | Bhoutan |
| BV | Bouvet Island | Île Bouvet |
| BW | Botswana | Botswana |
| BY | Belarus | Bélarus |
| BZ | Belize | Belize |
| CA | Canada | Canada |
| CC | Cocos (Keeling) Islands | Îles des Cocos (Keeling) |
| CD | Democratic Republic of the Congo | République démocratique du Congo |
| CF | Central African Republic | République centrafricaine |
| CG | Congo | Congo |
| CH | Switzerland | Suisse |
| CI | Ivory Coast | Côte d’Ivoire |
| CK | Cook Islands | Îles Cook |
| CL | Chile | Chili |
| CM | Cameroon | Cameroun |
| CN | China | Chine |
| CO | Colombia | Colombie |
| CR | Costa Rica | Costa Rica |
| CU | Cuba | Cuba |
| CV | Cabo Verde | Cabo Verde |
| CW | Curaçao | Curaçao |
| CX | Christmas Island | Île Christmas |
| CY | Cyprus | Chypre |
| CZ | Czechia | Tchéquie |
| DE | Germany | Allemagne |
| DJ | Djibouti | Djibouti |
| DK | Denmark | Danemark |
| DM | Dominica | Dominique |
| DO | Dominican Republic | République dominicaine |
| DZ | Algeria | Algérie |
| EC | Ecuador | Équateur |
| EE | Estonia | Estonie |
| EG | Egypt | Égypte |
| EH | Western Sahara | Sahara occidental |
| ER | Eritrea | Érythrée |
| ES | Spain | Espagne |
| ET | Ethiopia | Éthiopie |
| FI | Finland | Finlande |
| FJ | Fiji | Fidji |
| FK | Falkland Islands | Îles Falkland (Malvinas) |
| FM | Micronesia (Federated States of) | Micronésie (États fédérés de) |
| FO | Faroe Islands | Îles Féroé |
| FR | France | France |
| GA | Gabon | Gabon |
| GB | United Kingdom of Great Britain and Northern Ireland | Royaume-Uni de Grande-Bretagne et d’Irlande du Nord |
| GD | Grenada | Grenade |
| GE | Georgia | Géorgie |
| GF | French Guiana | Guyane française |
| GG | Guernsey | Guernesey |
| GH | Ghana | Ghana |
| GI | Gibraltar | Gibraltar |
| GL | Greenland | Groenland |
| GM | Gambia | Gambie |
| GN | Guinea | Guinée |
| GP | Guadeloupe | Guadeloupe |
| GQ | Equatorial Guinea | Guinée équatoriale |
| GR | Greece | Grèce |
| GS | South Georgia and the South Sandwich Islands | Géorgie du Sud-et-les Îles Sandwich du Sud |
| GT | Guatemala | Guatemala |
| GU | Guam | Guam |
| GW | Guinea-Bissau | Guinée-Bissau |
| GY | Guyana | Guyana |
| HK | China, Hong Kong Special Administrative Region | Chine, région administrative spéciale de Hong Kong |
| HM | Heard Island and McDonald Islands | Île Heard-et-Îles MacDonald |
| HN | Honduras | Honduras |
| HR | Croatia | Croatie |
| HT | Haiti | Haïti |
| HU | Hungary | Hongrie |
| ID | Indonesia | Indonésie |
| IE | Ireland | Irlande |
| IL | Israel | Israël |
| IM | Isle of Man | Île de Man |
| IN | India | Inde |
| IO | British Indian Ocean Territory | Territoire britannique de l'océan Indien |
| IQ | Iraq | Iraq |
| IR | Iran (Islamic Republic of) | Iran (République islamique d’) |
| IS | Iceland | Islande |
| IT | Italy | Italie |
| JE | Jersey | Jersey |
| JM | Jamaica | Jamaïque |
| JO | Jordan | Jordanie |
| JP | Japan | Japon |
| KE | Kenya | Kenya |
| KG | Kyrgyzstan | Kirghizistan |
| KH | Cambodia | Cambodge |
| KI | Kiribati | Kiribati |
| KM | Comoros | Comores |
| KN | Saint Kitts and Nevis | Saint-Kitts-et-Nevis |
| KP | Democratic People's Republic of Korea | République populaire démocratique de Corée |
| KR | Republic of Korea | République de Corée |
| KW | Kuwait | Koweït |
| KY | Cayman Islands | Îles Caïmanes |
| KZ | Kazakhstan | Kazakhstan |
| LA | Lao People's Democratic Republic | République démocratique populaire lao |
| LB | Lebanon | Liban |
| LC | Saint Lucia | Sainte-Lucie |
| LI | Liechtenstein | Liechtenstein |
| LK | Sri Lanka | Sri Lanka |
| LR | Liberia | Libéria |
| LS | Lesotho | Lesotho |
| LT | Lithuania | Lituanie |
| LU | Luxembourg | Luxembourg |
| LV | Latvia | Lettonie |
| LY | Libya | Libye |
| MA | Morocco | Maroc |
| MC | Monaco | Monaco |
| MD | Republic of Moldova | République de Moldova |
| ME | Montenegro | Monténégro |
| MF | Saint Martin (French Part) | Saint-Martin (partie française) |
| MG | Madagascar | Madagascar |
| MH | Marshall Islands | Îles Marshall |
| MK | North Macedonia | Macédoine du Nord |
| ML | Mali | Mali |
| MM | Myanmar | Myanmar |
| MN | Mongolia | Mongolie |
| MO | China, Macao Special Administrative Region | Chine, région administrative spéciale de Macao |
| MP | Northern Mariana Islands | Îles Mariannes du Nord |
| MQ | Martinique | Martinique |
| MR | Mauritania | Mauritanie |
| MS | Montserrat | Montserrat |
| MT | Malta | Malte |
| MU | Mauritius | Maurice |
| MV | Maldives | Maldives |
| MW | Malawi | Malawi |
| MX | Mexico | Mexique |
| MY | Malaysia | Malaisie |
| MZ | Mozambique | Mozambique |
| NA | Namibia | Namibie |
| NC | New Caledonia | Nouvelle-Calédonie |
| NE | Niger | Niger |
| NF | Norfolk Island | Île Norfolk |
| NG | Nigeria | Nigéria |
| NI | Nicaragua | Nicaragua |
| NL | Netherlands | Pays-Bas (Royaume des) |
| NO | Norway | Norvège |
| NP | Nepal | Népal |
| NR | Nauru | Nauru |
| NU | Niue | Nioué |
| NZ | New Zealand | Nouvelle-Zélande |
| OM | Oman | Oman |
| PA | Panama | Panama |
| PE | Peru | Pérou |
| PF | French Polynesia | Polynésie française |
| PG | Papua New Guinea | Papouasie-Nouvelle-Guinée |
| PH | Philippines | Philippines |
| PK | Pakistan | Pakistan |
| PL | Poland | Pologne |
| PM | Saint Pierre and Miquelon | Saint-Pierre-et-Miquelon |
| PN | Pitcairn | Pitcairn |
| PR | Puerto Rico | Porto Rico |
| PS | State of Palestine | État de Palestine |
| PT | Portugal | Portugal |
| PW | Palau | Palaos |
| PY | Paraguay | Paraguay |
| QA | Qatar | Qatar |
| RE | Réunion | Réunion |
| RO | Romania | Roumanie |
| RS | Serbia | Serbie |
| RU | Russian Federation | Fédération de Russie |
| RW | Rwanda | Rwanda |
| SA | Saudi Arabia | Arabie saoudite |
| SB | Solomon Islands | Îles Salomon |
| SC | Seychelles | Seychelles |
| SD | Sudan | Soudan |
| SE | Sweden | Suède |
| SG | Singapore | Singapour |
| SH | Saint Helena | Sainte-Hélène |
| SI | Slovenia | Slovénie |
| SJ | Svalbard and Jan Mayen Islands | Îles Svalbard-et-Jan Mayen |
| SK | Slovakia | Slovaquie |
| SL | Sierra Leone | Sierra Leone |
| SM | San Marino | Saint-Marin |
| SN | Senegal | Sénégal |
| SO | Somalia | Somalie |
| SR | Suriname | Suriname |
| SS | South Sudan | Soudan du Sud |
| ST | Sao Tome and Principe | Sao Tomé-et-Principe |
| SV | El Salvador | El Salvador |
| SX | Sint Maarten (Dutch part) | Saint-Martin (partie néerlandaise) |
| SY | Syrian Arab Republic | République arabe syrienne |
| SZ | Eswatini | Eswatini |
| TC | Turks and Caicos Islands | Îles Turques-et-Caïques |
| TD | Chad | Tchad |
| TF | French Southern Territories | Terres australes françaises |
| TG | Togo | Togo |
| TH | Thailand | Thaïlande |
| TJ | Tajikistan | Tadjikistan |
| TK | Tokelau | Tokélaou |
| TL | Timor-Leste | Timor-Leste |
| TM | Turkmenistan | Turkménistan |
| TN | Tunisia | Tunisie |
| TO | Tonga | Tonga |
| TR | Turkey | Türkiye |
| TT | Trinidad and Tobago | Trinité-et-Tobago |
| TV | Tuvalu | Tuvalu |
| TW | Taiwan | Taïwan |
| TZ | United Republic of Tanzania | République-Unie de Tanzanie |
| UA | Ukraine | Ukraine |
| UG | Uganda | Ouganda |
| UM | United States Minor Outlying Islands | Îles mineures éloignées des États-Unis |
| US | United States of America | États-Unis d’Amérique |
| UY | Uruguay | Uruguay |
| UZ | Uzbekistan | Ouzbékistan |
| VA | Holy See | Saint-Siège |
| VC | Saint Vincent and the Grenadines | Saint-Vincent-et-les Grenadines |
| VE | Venezuela (Bolivarian Republic of) | Venezuela (République bolivarienne du) |
| VG | British Virgin Islands | Îles Vierges britanniques |
| VI | United States Virgin Islands | Îles Vierges américaines |
| VN | Viet Nam | Viet Nam |
| VU | Vanuatu | Vanuatu |
| WF | Wallis and Futuna Islands | Îles Wallis-et-Futuna |
| WS | Samoa | Samoa |
| XK | Kosovo | Kosovo |
| YE | Yemen | Yémen |
| YT | Mayotte | Mayotte |
| ZA | South Africa | Afrique du Sud |
| ZM | Zambia | Zambie |
| ZW | Zimbabwe | Zimbabwe |

### 1-11 Recipient Province or Territory

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Recipient Province or Territory |
| Field Name FR | Province ou territoire du bénéficiaire |
| ID | recipient_province |
| Description EN | The "Recipient province or territory" is a mandatory field if the Recipient Country is Canada and identifies where, within Canada, the recipient resides. |
| Description FR | Le champ « province ou territoire du bénéficiaire » est un champ obligatoire si le pays destinataire est le Canada et indique le lieu de résidence du bénéficiaire au Canada. |
| Obligation EN | Mandatory if Recipient Country is Canada |
| Obligation FR | Obligatoire si le pays destinataire est le Canada |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | ON |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| ON | Ontario | Ontario |
| QC | Quebec | Québec |
| NB | New Brunswick | Nouveau-Brunswick |
| NL | Newfoundland & Labrador | Terre-Neuve-et-Labrador |
| PE | Prince Edward Island | Île-du-Prince-Édouard |
| SK | Saskatchewan | Saskatchewan |
| YT | Yukon | Yukon |
| AB | Alberta | Alberta |
| BC | British Columbia | Colombie-Britannique |
| MB | Manitoba | Manitoba |
| NT | Northwest Territories | Territoires du Nord-Ouest |
| NU | Nunavut | Nunavut |
| NS | Nova Scotia | Nouvelle-Écosse |

### 1-12 Recipient City (English|French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Recipient City (English\|French) |
| Field Name FR | Ville du bénéficiaire (anglais\|français) |
| ID | recipient_city |
| Description EN | The "Recipient city" is a mandatory field that identifies which city the recipient operates in. This field can be populated with Canadian or foreign cities.<br>Official city names should be provided, including both official languages (where applicable in the following format: name English\|name French<br>Free text, but a controlled list from Canada Revenue Agency’s qualified donees list of municipalities can be consulted: Canada Revenue Agency website (http://www.cra-arc.gc.ca/chrts-gvng/qlfd-dns/mncplts-eng.html). |
| Description FR | La « Ville du bénéficiaire » est un champ obligatoire qui indique la ville où le bénéficiaire exerce ses activités. On peut y inscrire le nom de villes canadiennes ou de villes étrangères.<br>Nom officiel exact de la ville, y compris dans les deux langues officielles (le cas échéant) au format suivant : nom anglais\|nom français<br>Texte libre, mais une liste contrôlée de la liste des municipalités désignées donataires de l’Agence du revenu du Canada peut être consultée: site Web de l’Agence du revenu du Canada (http://www.cra-arc.gc.ca/chrts-gvng/qlfd-dns/mncplts-fra.html). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Grand Falls\|Grand-Sault |

### 1-13 Recipient Postal Code

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Recipient Postal Code |
| Field Name FR | Code postal du bénéficiaire |
| ID | recipient_postal_code |
| Description EN | The "Recipient postal code" is a mandatory field that serves to identify the specific area in which the recipient operates. In cases where this field cannot be populated this field may be left blank.<br>Should be in the format "A1A 1A1"; The Canada Post tool for looking up a postal code can be found on the Canada Post website. |
| Description FR | Le « Code postal du bénéficiaire » est un champ obligatoire qui sert à identifier avec précision la région où le bénéficiaire exerce ses activités. Si le fait de remplir ce champ suscite des préoccupations à l'égard de la vie privée, il est possible de le laisser vide.<br>Devrait être selon le format « A1A 1A1 »; L'outil de Postes Canada permettant de rechercher un code postal se trouve sur le site Web de Postes Canada. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Must be in the format "A1A 1A1" if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Doit être selon le format « A1A 1A1 » si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Example Value | A1A 1A1 |

### 1-14 Federal Riding Name (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Federal Riding Name (English) |
| Field Name FR | Nom de la circonscription fédérale (anglais) |
| ID | federal_riding_name_en |
| Description EN | The federal riding name is the name of the riding in which the recipient resides. |
| Description FR | Le nom de la circonscription fédérale où réside le bénéficiaire. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Winnipeg South Centre |

### 1-15 Federal Riding Name (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Federal Riding Name (French) |
| Field Name FR | Nom de la circonscription fédérale (français) |
| ID | federal_riding_name_fr |
| Description EN | The federal riding name is the name of the riding in which the recipient resides. |
| Description FR | Le nom de la circonscription fédérale où réside le bénéficiaire. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Winnipeg-Centre-Sud |

### 1-16 Federal Riding Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Federal Riding Number |
| Field Name FR | Numéro de la circonscription fédérale |
| ID | federal_riding_number |
| Description EN | The federal riding number is based on the riding in which the recipient resides. Departments can consult the Elections Canada website in order to retrieve the federal riding number. http://www.elections.ca/content.aspx?section=res&dir=cir/list&document=index338&lang=e |
| Description FR | Numéro de la circonscription fédérale où réside le bénéficiaire. Les départements peuvent consulter le site-web d’Élections Canada pour trouver le numéro de la circonscription fédérale. http://www.elections.ca/content.aspx?section=res&dir=cir/list&document=index338&lang=f |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Must be a 5 digit number if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Doit être un numéro à cinq chiffres si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Example Value | 46014 |

### 1-17 Program Name (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Program Name (English) |
| Field Name FR | Nom du programme (anglais) |
| ID | prog_name_en |
| Description EN | The program name is the name of the program, according to the terms and conditions (Ts&Cs), under which a recipient is funded. |
| Description FR | Le nom du programme selon les modalités en vertu desquelles le financement est versé au bénéficiaire. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Required if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Requis si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Example Value | Canada Granting Program |

### 1-18 Program Name (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Program Name (French) |
| Field Name FR | Nom du programme (français) |
| ID | prog_name_fr |
| Description EN | The program name is the name of the program, according to the terms and conditions (Ts&Cs), under which a recipient is funded. |
| Description FR | Le nom du programme selon les modalités en vertu desquelles le financement est versé au bénéficiaire. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Required if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Requis si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Example Value | Le programme de subvention du Canada |

### 1-19 Program Purpose (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Program Purpose (English) |
| Field Name FR | But du programme (anglais) |
| ID | prog_purpose_en |
| Description EN | The program purpose is the program’s purpose according to the Ts&Cs. |
| Description FR | Le but du programme est celui dans lequel le programme a été créé, selon les modalités du programme. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Required if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Requis si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Example Value | The Canada Granting Program encourage Canadians to learn about Canada’s geography, history, and economy. The Program provides networking opportunities to enhance recipients’ understanding of Canada. |

### 1-20 Program Purpose (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Program Purpose (French) |
| Field Name FR | But du programme (français) |
| ID | prog_purpose_fr |
| Description EN | The program purpose is the program’s purpose according to the Ts&Cs. |
| Description FR | Le but du programme est celui dans lequel le programme a été créé, selon les modalités du programme. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Required if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Requis si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Example Value | Le programme de subventions du Canada incite les Canadiens à se renseigner sur la géographie, l’histoire et l’économie du Canada. Le programme offre des opportunités de réseautage pour aider les bénéficiaires d’améliorer leur compréhension du Canada. |

### 1-21 Agreement Title (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Agreement Title (English) |
| Field Name FR | Titre de l’entente (anglais) |
| ID | agreement_title_en |
| Description EN | The agreement title is the title of the project or agreement that the recipient is undertaking. In cases where there is no title, the agreement number will be duplicated here. |
| Description FR | Le nom de l'entente est le titre du projet ou de l'entente à l'égard duquel s'engage le bénéficiaire. S'il n'y a pas de titre, le numéro de l'entente peut être réinscrit ici. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Required if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Requis si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Example Value | Building better buildings |

### 1-22 Agreement Title (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Agreement Title (French) |
| Field Name FR | Titre de l’entente (français) |
| ID | agreement_title_fr |
| Description EN | The agreement title is the title of the project or agreement that the recipient is undertaking. In cases where there is no title, the agreement number will be duplicated here. |
| Description FR | Le nom de l'entente est le titre du projet ou de l'entente à l'égard duquel s'engage le bénéficiaire. S'il n'y a pas de titre, le numéro de l'entente peut être réinscrit ici. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Required if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Requis si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Example Value | Construire des meilleurs bâtiments |

### 1-23 Agreement Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Agreement Number |
| Field Name FR | Numéro de l’entente |
| ID | agreement_number |
| Description EN | The agreement number should be the number on the agreement and/or in the departmental Gs&Cs system. |
| Description FR | Le numéro de l'entente est celui qui figure à l'entente et/ou dans le système de subventions et de contributions du ministère. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | F1580-140737 |

### 1-24 Agreement Value in CAD

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Agreement Value in CAD |
| Field Name FR | Valeur de l’entente en dollars canadiens |
| ID | agreement_value |
| Description EN | The agreement value is the dollar amount stated in the grant or contribution agreement. This field should be populated with a monetary value in Canadian dollars. This field should report on the total grant or contribution value, and not the change in agreement value. |
| Description FR | La valeur de l'entente est le montant en dollars indiqué dans l'entente de subvention ou de contribution. Ce champ doit indiquer une valeur monétaire en dollars canadiens. Ce champ doit indiquer la valeur totale de la subvention ou de la contribution, et non la variation de la valeur de l'accord. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN | This field must not be empty.<br>The number must be greater than 0. |
| Validation FR | Ce champ ne doit pas être vide.<br>Le nombre doit être supérieur à 0. |
| Example Value | 500000 |

### 1-25 Foreign Currency Type

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Foreign Currency Type |
| Field Name FR | Type de monnaie étrangère |
| ID | foreign_currency_type |
| Description EN | The foreign currency type should be selected if a recipient is paid in a currency other than Canadian dollars. Select the type of foreign currency in this field (for example, US dollar (USD), Australian dollar (AUD), British pound (GBP)). This field is mandatory if the agreement is awarded in foreign currency.'<br>Foreign currency type is populated using the ISO 4217 alphabetic codes for foreign currency. This list can be found on the XE website. Entry is selected from a drop-down list. |
| Description FR | Le champ Type de monnaie étrangère doit être rempli si le bénéficiaire est payé dans une devise autre que le dollar canadien. Il faut sélectionner le type de monnaie étrangère; par exemple, dollar américain (USD), dollar australien (AUD), livre sterling (GBP). Ce champ est obligatoire si l'entente est en devise étrangère.<br>Le type de monnaie étrangère est complété à l'aide des codes alphabétiques ISO 4217 pour les monnaie étrangères. Cette liste se trouve sur le site Web XE. L'entrée est sélectionnée dans une liste déroulante. |
| Obligation EN | Optional (Mandatory when funding provided in foreign currency) |
| Obligation FR | Facultatif ( obligatoire si le financement est fourni en devise étrangère ) |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | USD |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| ALL | Lek | Lek |
| AMD | Armenian Dram | Dram arménien |
| ANG | Netherlands Antillean Guilder | Florin des Antilles |
| AOA | Kwanza | Kwanza |
| ARS | Argentine Peso | Peso argentin |
| AUD | Australian Dollar | Dollar australien |
| AWG | Aruban Florin | Aruba Florin |
| AZN | Azerbaijanian Manat | Azerbaïdjan Manat |
| BAM | Convertible Mark | Mark convertible |
| BBD | Barbados Dollar | Dollar de la Barbade |
| BDT | Taka | Taka |
| BGN | Bulgarian Lev | Lev bulgare |
| BHD | Bahraini Dinar | Dinar de Bahreïn |
| BIF | Burundi Franc | Burundi Franc |
| BND | Brunei Dollar | Dollar de Brunei |
| BOB | Boliviano | bolivien |
| BOV | Mvdol | Mvdol |
| BRL | Brazilian Real | Real brésilien |
| BSD | Bahamian Dollar | Dollar Bahaméen |
| BTN | Ngultrum | Ngultrum |
| BWP | Pula | Pula |
| BYR | Belarussian Ruble | Rouble biélorusse |
| BZD | Belize Dollar | Belize Dollar |
| CAD | Canadian Dollar | Dollar canadien |
| CDF | Congolese Franc | Franc Congolais |
| CHF | Swiss Franc | Franc suisse |
| CLF | Unidad de Fomento | Unidad de Fomento  td> |
| CLP | Chilean Peso | Peso chilien |
| CNY | Yuan Renminbi | Yuan Renminbi |
| COP | Colombian Peso | Peso colombien |
| CRC | Costa Rican Colon | Colon Costa Rica |
| CUC | Peso Convertible | Peso Convertible |
| CVE | Cabo Verde Escudo | Escudo Cabo Verde |
| CZK | Czech Koruna | Couronne tchèque |
| DJF | Djibouti Franc | Djibouti Franc |
| DKK | Danish Krone | Couronne danoise |
| DOP | Dominican Peso | Peso dominicain |
| DZD | Algerian Dinar | Dinar algérien |
| EGP | Egyptian Pound | Livre égyptienne |
| ERN | Nakfa | Nakfa |
| ETB | Ethiopian Birr | Birr éthiopien |
| EUR | Euro | Euro |
| FJD | Fiji Dollar | Fidji Dollar |
| GBP | Pound Sterling | Livre Sterling |
| GEL | Lari | Lari |
| GIP | Gibraltar Pound | Livre de Gibraltar |
| GMD | Dalasi | Dalasi |
| GNF | Guinea Franc | Guinée Franc |
| GTQ | Quetzal | Quetzal |
| GYD | Guyana Dollar | Dollar de Guyana |
| HKD | Hong Kong Dollar | Dollar de Hong Kong |
| HNL | Lempira | Lempira |
| HRK | Kuna | Kuna |
| HTG | Gourde | Gourde |
| HUF | Forint | Forint |
| IDR | Rupiah | Rupiah |
| ILS | New Israeli Sheqel | Nouveau Shekel Israelien |
| INR | Indian Rupee | Roupie indienne |
| IQD | Iraqi Dinar | Dinar irakien |
| IRR | Iranian Rial | Rial iranien |
| ISK | Iceland Krona | Couronne islandaise |
| JMD | Jamaican Dollar | Dollar Jamaïquain |
| JOD | Jordanian Dinar | Dinar jordanien |
| JPY | Yen | Yen |
| KES | Kenyan Shilling | Shilling kenyan |
| KGS | Som | Som |
| KHR | Riel | Riel |
| KMF | Comoro Franc | Comores Franc |
| KRW | Won | Won |
| KWD | Kuwaiti Dinar | Dinar koweïtien |
| KYD | Cayman Islands Dollar | Dollar des Iles Caïmans |
| KZT | Tenge | Tenge |
| LAK | Kip | Kip |
| LBP | Lebanese Pound | Livre libanaise |
| LRD | Liberian Dollar | Dollar libérien |
| LSL | Loti | Loti |
| LYD | Libyan Dinar | Dinar libyen |
| MGA | Malagasy Ariary | Ariary Malgache |
| MKD | Denar | Denar |
| MOP | Pataca | Pataca |
| MUR | Mauritius Rupee | Roupie de Maurice |
| MVR | Rufiyaa | Rufiyaa |
| MWK | Kwacha | Kwacha |
| MYR | Malaysian Ringgit | Ringgit malaisien |
| NOK | Norwegian Krone | Couronne norvégienne |
| NZD | New Zealand Dollar | Dollar néo-zélandais |
| SVC | El Salvador Colon | Colon El Salvador |
| USD | US Dollar | Dollar US |
| XAF | CFA Franc BEAC | Franc CFA BEAC |
| XCD | East Caribbean Dollar | Dollar des Caraïbes orientales |
| XDR | SDR (Special Drawing Right) | DTS (droit de tirage spécial) |
| XOF | CFA Franc BCEAO | Franc CFA BCEAO |
| XPF | CFP Franc | Franc CFP |
| ZAR | Rand | Rand |

### 1-26 Foreign Currency Value

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Foreign Currency Value |
| Field Name FR | Valeur de la monnaie étrangère |
| ID | foreign_currency_value |
| Description EN | The foreign currency value is the amount as signed in the grant or contribution agreement with the recipient. This field should be populated with a monetary value in the foreign currency. This field is mandatory if the agreement is awarded in a foreign currency. |
| Description FR | La valeur en monnaie étrangère est le montant convenu aux termes de l'entente de subvention ou de contribution avec le bénéficiaire. Ce champ doit être rempli en inscrivant la valeur dans la monnaie étrangère. Ce champ est obligatoire si l'entente est en devise étrangère. |
| Obligation EN | Mandatory if foreign currency type is selected |
| Obligation FR | Mandatory if foreign currency type is selected |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 450000 |

### 1-27 Agreement Start Date

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Agreement Start Date |
| Field Name FR | Date de début de l’entente |
| ID | agreement_start_date |
| Description EN | The agreement start date is the assumed start of the agreement, normally identified based on the last date of signature, as captured in the initial agreement.<br>This date should identify the start of the funding agreement, and not the date of the grant or contribution project. |
| Description FR | La date de début de l'entente est la date d'entrée en vigueur présumée de l'entente, commence généralement à être identifié en fonction de la dernière date de signature, conformément à l'entente initiale.<br>Cette date doit indiquer le début de l'accord de financement, et non la date du projet de subvention ou de contribution. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Date |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Example Value | 2025-04-01 |

### 1-28 Projected Agreement End Date

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Projected Agreement End Date |
| Field Name FR | Date de fin prévue de l’entente |
| ID | agreement_end_date |
| Description EN | The projected agreement end date is the assumed end of the agreement, or when the project is supposed to end, as captured in the initial agreement. |
| Description FR | La date de fin prévue de l'entente est la date de fin présumée de l'entente, ou la date à laquelle le projet est censé prendre fin, conformément à l'entente initiale. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Date |
| Validation EN | Required if "Agreement Start Date" is on or after December 1st 2025. |
| Validation FR | Requis si la "date de début de l’entente" est le 1er décembre 2025 ou après. |
| Example Value | 2026-04-30 |

### 1-29 Coverage (English|French; ...)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Coverage (English\|French; ...) |
| Field Name FR | Portée (anglais\|français; ...) |
| ID | coverage |
| Description EN | Coverage provides information about what will benefit from the project or agreement. Departments should populate this with any information they have available. |
| Description FR | Le champ « Portée » fournit des renseignements sur l'incidence générale prévue du projet ou de l'entente. Les ministères peuvent entrer ici tout renseignement dont ils disposent. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Canada; Mexico\|Mexique; United States\|États-Unis |

### 1-30 Description (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Description (English) |
| Field Name FR | Description (anglais) |
| ID | description_en |
| Description EN | The description explains why the recipient received funding. It should provide a brief yet accurate description of what the recipient is undertaking. |
| Description FR | La description explique à quelles fins le bénéficiaire a reçu le financement. Elle doit décrire de façon brève, mais explicite, en quoi consistent les travaux du bénéficiaire. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Developing models and other tools to predict the safety performance of buildings. |

### 1-31 Description (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Description (French) |
| Field Name FR | Description (français) |
| ID | description_fr |
| Description EN | The description explains why the recipient received funding. It should provide a brief yet accurate description of what the recipient is undertaking. |
| Description FR | La description explique à quelles fins le bénéficiaire a reçu le financement. Elle doit décrire de façon brève, mais explicite, en quoi consistent les travaux du bénéficiaire. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Met au point des modèles et d'autres outils pour prévoir la sécurité des bâtiments. |

### 1-32 NAICS Identifier

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | NAICS Identifier |
| Field Name FR | Identificateur du SCIAN |
| ID | naics_identifier |
| Description EN | The North American Industry Classification System (NAICS) is an industry classification system developed by the statistical agencies of Canada, Mexico and the United States. |
| Description FR | Le Système de classification des industries de l'Amérique du Nord (SCIAN) est un système de classification des industries conçu par les organismes statistiques du Canada, du Mexique et des États-Unis. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | 611710 |

### 1-33 Expected Results or Intended Outcome (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Expected Results or Intended Outcome (English) |
| Field Name FR | Résultats attendus ou visés (anglais) |
| ID | expected_results_en |
| Description EN | The expected results or intended outcome is the assumed result of project completion. It should be populated in accordance with the project that the recipient is undertaking or the program under which it is funded. This field will attempt to explain why the project is being undertaken, and what the final results should be. |
| Description FR | Les résultats attendus ou visés sont les résultats présumés qui découlent de l'exécution d'un projet. Le champ doit être rempli en fonction du projet qu'entreprend le bénéficiaire ou conformément au programme en vertu duquel il est financé. Ce champ vise à offrir une description de la raisond'être du projet et de ce que devraient être les résultats finaux. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Required if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Requis si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Example Value | Develop highly qualified personnel available to pursue various careers within industry, academia, government and other sectors of the economy. |

### 1-34 Expected Results or Intended Outcome (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Expected Results or Intended Outcome (French) |
| Field Name FR | Résultats attendus ou visés (français) |
| ID | expected_results_fr |
| Description EN | The expected results or intended outcome is the assumed result of project completion. It should be populated in accordance with the project that the recipient is undertaking or the program under which it is funded. This field will attempt to explain why the project is being undertaken, and what the final results should be. |
| Description FR | Les résultats attendus ou visés sont les résultats présumés qui découlent de l'exécution d'un projet. Le champ doit être rempli en fonction du projet qu'entreprend le bénéficiaire ou conformément au programme en vertu duquel il est financé. Ce champ vise à offrir une description de la raisond'être du projet et de ce que devraient être les résultats finaux. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Required if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Requis si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Example Value | Développé un personnel hautement qualifié prêt à mener une carrière variée au sein de l’industrie, du milieu académique, de la fonction publique ou dans d’autres secteurs de l’économie. |

### 1-35 Additional Information (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Additional Information (English) |
| Field Name FR | Renseignements supplémentaires (anglais) |
| ID | additional_information_en |
| Description EN | Additional information is information that departments are required to enter under the guidance instructions for exceptions but that is not captured in any of the aforementioned fields. It may contain information on:<br>• additional funding departments<br>• funding through a third party<br>• ministerial announcements<br>• research fields<br>• joint funding<br>• collaborators and partners<br>• keywords<br>• belated reporting<br>• novation agreements<br>• terminations<br>• repayability |
| Description FR | Lorsqu'ils sont tenus de le faire conformément aux « Indications » qui traitent des exceptions, les ministères doivent entrer ici les renseignements supplémentaires qui ne sont pas saisis dans les champs précédents. Il peut s'agir de renseignements comme ceux-ci :<br>• autres ministères participent au financement;<br>• financement par l'intermédiaire d'un tiers;<br>• annonces ministérielles;<br>• domaines de recherche;<br>• financement conjoint;<br>• collaborateurs et partenaires;<br>• mots-clés;<br>• divulgation tardive;<br>• entente d'innovation;<br>• résiliations;<br>• remboursement. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Recipient reallocates or redistributes grant or contribution awarded to third-party beneficiaries |

### 1-36 Additional Information (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Additional Information (French) |
| Field Name FR | Renseignements supplémentaires (français) |
| ID | additional_information_fr |
| Description EN | Additional information is information that departments are required to enter under the guidance instructions for exceptions but that is not captured in any of the aforementioned fields. It may contain information on:<br>• additional funding departments<br>• funding through a third party<br>• ministerial announcements<br>• research fields<br>• joint funding<br>• collaborators and partners<br>• keywords<br>• belated reporting<br>• novation agreements<br>• terminations<br>• repayability |
| Description FR | Lorsqu'ils sont tenus de le faire conformément aux « Indications » qui traitent des exceptions, les ministères doivent entrer ici les renseignements supplémentaires qui ne sont pas saisis dans les champs précédents. Il peut s'agir de renseignements comme ceux-ci :<br>• autres ministères participent au financement;<br>• financement par l'intermédiaire d'un tiers;<br>• annonces ministérielles;<br>• domaines de recherche;<br>• financement conjoint;<br>• collaborateurs et partenaires;<br>• mots-clés;<br>• divulgation tardive;<br>• entente d'innovation;<br>• résiliations;<br>• remboursement. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Le bénéficiaire réaffecte ou redistribue la subvention ou la contribution octroyée à des tiers |

## [Proactive Publication - Grants and Contributions](#proactive-publication-grants-and-contributions)

### 2-1 Year

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Year |
| Field Name FR | Année |
| ID | fiscal_year |
| Description EN |   |
| Description FR |   |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | 2016-2017 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| 2029-2030 | 2029-2030 | 2029-2030 |
| 2028-2029 | 2028-2029 | 2028-2029 |
| 2027-2028 | 2027-2028 | 2027-2028 |
| 2026-2027 | 2026-2027 | 2026-2027 |
| 2025-2026 | 2025-2026 | 2025-2026 |
| 2024-2025 | 2024-2025 | 2024-2025 |
| 2023-2024 | 2023-2024 | 2023-2024 |
| 2022-2023 | 2022-2023 | 2022-2023 |
| 2021-2022 | 2021-2022 | 2021-2022 |
| 2020-2021 | 2020-2021 | 2020-2021 |
| 2019-2020 | 2019-2020 | 2019-2020 |
| 2018-2019 | 2018-2019 | 2018-2019 |
| 2017-2018 | 2017-2018 | 2017-2018 |
| 2016-2017 | 2016-2017 | 2016-2017 |
| 2015-2016 | 2015-2016 | 2015-2016 |
| 2014-2015 | 2014-2015 | 2014-2015 |
| 2013-2014 | 2013-2014 | 2013-2014 |
| 2012-2013 | 2012-2013 | 2012-2013 |
| 2011-2012 | 2011-2012 | 2011-2012 |
| 2010-2011 | 2010-2011 | 2010-2011 |
| 2009-2010 | 2009-2010 | 2009-2010 |
| 2008-2009 | 2008-2009 | 2008-2009 |
| 2007-2008 | 2007-2008 | 2007-2008 |
| 2006-2007 | 2006-2007 | 2006-2007 |
| 2005-2006 | 2005-2006 | 2005-2006 |

### 2-2 Quarter

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Quarter |
| Field Name FR | Trimestre |
| ID | quarter |
| Description EN |   |
| Description FR |   |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Q2 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| Q1 | April 1 - June 30 | 1 avril - 30 juin |
| Q2 | July 1 - September 30 | 1 juillet - 30 septembre |
| Q3 | October 1 - December 31 | 1 octobre - 31 décembre |
| Q4 | January 1 - March 31 | 1 janvier - 31 mars |


---

# Data Element Profile: Proactive Publication - Hospitality Expenses

_Source YAML: `hospitalityq.yaml`_

## [Legend](#legend)

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

## [Proactive Publication - Hospitality Expenses](#proactive-publication-hospitality-expenses)

### 1-1 Reference Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reference Number |
| Field Name FR | Numéro de référence |
| ID | ref_number |
| Description EN | This field is populated by the organization. It is a unique reference number given to each line item in the spreadsheet. Having a unique identifier for each item will allow users locate a specific item in the registry should they need to modify or delete. |
| Description FR | Cette zone est remplie par chaque organisation. Un identificateur unique est attribué à chaque poste dans le tableur. Un identificateur unique pour chaque poste permettra aux utilisateurs de repérer un article en particulier s’ils doivent le modifier ou le supprimer. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | H-2019-P3-001 |

### 1-2 Disclosure Group

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Disclosure Group |
| Field Name FR | Groupe de divulgation |
| ID | disclosure_group |
| Description EN | This field will display the group to which the individual belongs. |
| Description FR | Ce champ indique le groupe auquel appartient l’individu. |
| Obligation EN | Required if "End Date" is on or after April 1st 2025 |
| Obligation FR | Requis si la "date de fin" est le 1er avril 2025 ou après |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Required if "End Date" is on or after April 1st 2025 |
| Validation FR | Requis si la "date de fin" est le 1er avril 2025 ou après |
| Example Value | SLE |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| MPSES | Minister/Ministerial advisor / Ministerial Staff / Parliamentary Secretary/Exempt Staff | Ministre / Conseiller ministériel / Personnel ministériel / Secrétaire parlementaire / Personnel exonéré |
| SLE | Senior officer or employees | Cadre supérieur ou employé |

### 1-3 Title (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Title (English) |
| Field Name FR | Titre (anglais) |
| ID | title_en |
| Description EN | This field will display, in English, the position title of the individual who incurred the hospitality expenses (the hospitality expenses were charged to their responsibility centre). |
| Description FR | Cette zone indique, en anglais, le titre du poste de la personne qui a engagé les dépenses d’accueil (les dépenses d’accueil ont été imputées à leur centre de responsabilité). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Vice-Chairperson, Deputy Minister, Parliamentary Secretary, Assistant Deputy Minister, Programs Branch |

### 1-4 Title (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Title (French) |
| Field Name FR | Titre (français) |
| ID | title_fr |
| Description EN | This field will display, in French, the position title of the individual who incurred the hospitality expenses (the hospitality expenses were charged to their responsibility centre). |
| Description FR | Cette zone indique, en français, le titre du poste de la personne qui a engagé les dépenses d’accueil (les dépenses d’accueil ont été imputées à leur centre de responsabilité). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Vice-président, sous-ministre, secrétaire parlementaire, sous-ministre adjoint, Direction générale des programmes |

### 1-5 Name

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Name |
| Field Name FR | Nom |
| ID | name |
| Description EN | This field will display the name of the individual who incurred the hospitality expenses (the hospitality expenses were charged to their responsibility centre). |
| Description FR | Ce champ affiche le nom de la personne qui a engagé les dépenses d’accueil (les dépenses d’accueil ont été imputées à leur centre de responsabilité. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | John Smith |

### 1-6 Purpose of hospitality activity (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Purpose of hospitality activity (English) |
| Field Name FR | But de l’activité d’accueil (anglais) |
| ID | description_en |
| Description EN | This will cover both the forms (for example, breakfast, refreshment, lunch, reception, dinner and other forms of hospitality) and circumstances (the purpose) of the hospitality, in English. |
| Description FR | Cette zone comprend la forme d’accueil (par exemple, déjeuner, rafraîchissement, dîner, réception, souper, et autres formes d’accueil) et les circonstances (le but) de l’accueil, en anglais. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Refreshments: information management and policies committee meeting; reception: Maltese delegation, etc |

### 1-7 Purpose of hospitality activity (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Purpose of hospitality activity (French) |
| Field Name FR | But de l’activité d’accueil (français) |
| ID | description_fr |
| Description EN | This will cover both the forms (for example, breakfast, refreshment, lunch, reception, dinner and other forms of hospitality) and circumstances (the purpose) of the hospitality, in French. |
| Description FR | Cette zone comprend la forme d’accueil (par exemple, déjeuner, rafraîchissement, dîner, réception, souper, et autres formes d’accueil) et les circonstances (le but) de l’accueil, en français. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Rafraîchissements : Réunion du Comité de gestion de l’information et des politiques, Réception : Délégation maltaise, etc |

### 1-8 Start Date

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Start Date |
| Field Name FR | Date de début |
| ID | start_date |
| Description EN | The start date on which the hospitality was provided. |
| Description FR | La date du début auxquelles les activités d’accueil ont eu lieu. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Date |
| Validation EN | This field must not be empty.<br>Date can’t be in the future. |
| Validation FR | Ce champ ne doit pas être vide.<br>La date ne doit pas être dans le futur. |
| Example Value | 2019-06-25 |

### 1-9 End Date

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | End Date |
| Field Name FR | Date de fin |
| ID | end_date |
| Description EN | The end date on which the hospitality was provided. (can be the same as start date) |
| Description FR | La date de fin auxquelles les activités d’accueil ont eu lieu. (peut être la même date du début) |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Date |
| Validation EN | This field must not be empty.<br>Date can’t be in the future. |
| Validation FR | Ce champ ne doit pas être vide.<br>La date ne doit pas être dans le futur. |
| Example Value | 2019-06-25 |

### 1-10 Municipality where the hospitality activity took place (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Municipality where the hospitality activity took place (English) |
| Field Name FR | Municipalité où l’activité d’accueil a eu lieu (anglais) |
| ID | location_en |
| Description EN | Must include the Municipality where hospitality was provided, in English |
| Description FR | Comprend la municipalité où les services d’accueil ont été fournis, en anglais |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Montreal, Quebec, Canada |

### 1-11 Municipality where the hospitality activity took place (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Municipality where the hospitality activity took place (French) |
| Field Name FR | Municipalité où l’activité d’accueil a eu lieu (français) |
| ID | location_fr |
| Description EN | Must include the Municipality where hospitality was provided, in French. |
| Description FR | Comprend la municipalité où les services d’accueil ont été fournis, en français. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Montréal, Québec, Canada |

### 1-12 Name of the first commercial establishment or vendor involved in the hospitality activity (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Name of the first commercial establishment or vendor involved in the hospitality activity (English) |
| Field Name FR | Nom du premier établissement commercial ou fournisseur impliqué dans l’activité d’accueil (anglais) |
| ID | vendor_en |
| Description EN | Must include the name of the first commercial establishment or vendor that provided the hospitality (for example, restaurant, hotel or other location) and/or vendor (for example, a caterer), in English. |
| Description FR | Doit inclure le nom du premier établissement commercial ou fournisseur qui a fourni l’accueil (par exemple, restaurant, hôtel ou autre lieu) et/ou du fournisseur (par exemple, un traiteur), en anglais. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Le Centre Sheraton |

### 1-13 Name of the first commercial establishment or vendor involved in the hospitality activity (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Name of the first commercial establishment or vendor involved in the hospitality activity (French) |
| Field Name FR | Nom du premier établissement commercial ou fournisseur impliqué dans l’activité d’accueil (français) |
| ID | vendor_fr |
| Description EN | Must include the name of the first commercial establishment or vendor that provided the hospitality (for example, restaurant, hotel or other location) and/or vendor (for example, a caterer), in French. |
| Description FR | Doit inclure le nom du premier établissement commercial ou fournisseur qui a fourni l’accueil (par exemple, restaurant, hôtel ou autre lieu) et/ou du fournisseur (par exemple, un traiteur), en français. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Le Centre Sheraton |

### 1-14 Name of the second commercial establishment or vendor involved in the hospitality activity (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Name of the second commercial establishment or vendor involved in the hospitality activity (English) |
| Field Name FR | Nom du deuxième établissement commercial ou fournisseur impliqué dans l’activité d’accueil (anglais) |
| ID | vendor_2_en |
| Description EN | Must include the name of the second commercial establishment or vendor that provided the hospitality (for example, restaurant, hotel or other location) and/or vendor (for example, a caterer), in English. |
| Description FR | Doit inclure le nom du deuxième établissement commercial ou fournisseur qui a fourni l’accueil (par exemple, restaurant, hôtel ou autre lieu) et/ou du fournisseur (par exemple, un traiteur), en anglais. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Tim Hortons |

### 1-15 Name of the second commercial establishment or vendor involved in the hospitality activity (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Name of the second commercial establishment or vendor involved in the hospitality activity (French) |
| Field Name FR | Nom du deuxième établissement commercial ou fournisseur impliqué dans l’activité d’accueil (français) |
| ID | vendor_2_fr |
| Description EN | Must include the name of the second commercial establishment or vendor that provided the hospitality (for example, restaurant, hotel or other location) and/or vendor (for example, a caterer), in French. |
| Description FR | Doit inclure le nom du deuxième établissement commercial ou fournisseur qui a fourni l’accueil (par exemple, restaurant, hôtel ou autre lieu) et/ou du fournisseur (par exemple, un traiteur), en français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Tim Hortons |

### 1-16 Name of any other commercial establishments or vendors involved in the hospitality activity (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Name of any other commercial establishments or vendors involved in the hospitality activity (English) |
| Field Name FR | Nom de tout autre établissement commercial ou fournisseur impliqué dans l’activité d’accueil (anglais) |
| ID | vendor_other_en |
| Description EN | Must include the names of any other commercial establishments or vendors that provided the hospitality (for example, restaurant, hotel or other location) and/or vendor (for example, a caterer), in English. Note, use the format {Vendor Name};{Vendor 2 Name} (e.g. Les Impertinentes;Les Street Monkeys) |
| Description FR | Doit inclure le nom de tout autre établissement commercial ou fournisseur ayant fourni l’accueil (par exemple, restaurant, hôtel ou autre lieu) et/ou du fournisseur (par exemple, un traiteur), en anglais. Remarque : Utilisez le format <nom du fournisseur>;<nom du fournisseur 2> (par exemple : Les Impertinentes;Les Street Monkeys) |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Must be in the format of <Vendor Name>;<Vendor 2 Name> |
| Validation FR | Doit être au format <nom du fournisseur>;<nom du fournisseur 2> |
| Example Value | Les Impertinentes;Les Street Monkeys |

### 1-17 Name of any other commercial establishments or vendors involved in the hospitality activity (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Name of any other commercial establishments or vendors involved in the hospitality activity (French) |
| Field Name FR | Nom de tout autre établissement commercial ou fournisseur impliqué dans l’activité d’accueil (français) |
| ID | vendor_other_fr |
| Description EN | Must include the name of any other commercial establishments or vendors that provided the hospitality (for example, restaurant, hotel or other location) and/or vendor (for example, a caterer), in French. Note, use the format <Vendor Name>;<Vendor 2 Name> (e.g. Les Impertinentes;Les Street Monkeys) |
| Description FR | Doit inclure le nom de tout autre établissement commercial ou fournisseur ayant fourni l’accueil (par exemple, restaurant, hôtel ou autre lieu) et/ou du fournisseur (par exemple, un traiteur), en français. Remarque : Utilisez le format {nom du fournisseur};{nom du fournisseur 2} (par exemple : Les Impertinentes;Les Street Monkeys)' |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Must be in the format of <Vendor Name>;<Vendor 2 Name> |
| Validation FR | Doit être au format <nom du fournisseur>;<nom du fournisseur 2> |
| Example Value | Les Impertinentes;Les Street Monkeys |

### 1-18 Attendees (Government of Canada Officials)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Attendees (Government of Canada Officials) |
| Field Name FR | Participants (Nombre de représentants du gouvernement du Canada) |
| ID | employee_attendees |
| Description EN | The total number of attendees (Government of Canada Officials). For any clarification regarding Government of Canada Officials, please refer to Table 2 of the Guide to the Proactive Publication of Travel and Hospitality Expenses- Canada.ca (https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32660). |
| Description FR | Nombre total de participants (représentants du gouvernement du Canada). Pour toute clarification concernant les représentants du gouvernement du Canada, veuillez référer au table 2 du Guide de publication proactive des frais de voyage et d’accueil- Canada.ca (https://www.tbs-sct.canada.ca/pol/doc-fra.aspx?id=32660). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | This field must not be empty.<br>Zero is an invalid entry. |
| Validation FR | Ce champ ne doit pas être vide.<br>Zéro est une entrée invalide. |
| Example Value | 150 |

### 1-19 Attendees (Guests)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Attendees (Guests) |
| Field Name FR | Participants (Nombre d’invités) |
| ID | guest_attendees |
| Description EN | The total number of attendees (Guests) |
| Description FR | Nombre total de participants (invités) |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 4 |

### 1-20 Total cost

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Total cost |
| Field Name FR | Total des coûts |
| ID | total |
| Description EN | Total Amount of the expenses for the hospitality activity |
| Description FR | Montant total des dépenses pour l’activité d’accueil |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 7710.55 |

### 1-21 Additional comments (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Additional comments (English) |
| Field Name FR | Commentaires additionnels (anglais) |
| ID | additional_comments_en |
| Description EN | This field may be populated with additional explanatory comments, in English. |
| Description FR | Ce champ peut indiquer des commentaires explicatifs additionnels, en anglais. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Provide additional explanatory comments as required. |

### 1-22 Additional comments (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Additional comments (French) |
| Field Name FR | Commentaires additionnels (français) |
| ID | additional_comments_fr |
| Description EN | This field may be populated with additional explanatory comments, in French. |
| Description FR | Ce champ peut indiquer des commentaires explicatifs additionnels, en français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Fournir des commentaires explicatifs additionnels au besoin. |

## [Proactive Publication - Hospitality Expenses](#proactive-publication-hospitality-expenses)

### 2-1 Year

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Year |
| Field Name FR | Année |
| ID | year |
| Description EN | This tab / field in the template is only populated if there are no hospitality expenses for the reporting period. This field should be populated with the year of the reporting period. |
| Description FR | Cet onglet/champ du modèle n’est rempli que s'il n'y a pas de frais d'accueil pour la période d’établissement de rapports. Ce champ doit être rempli avec l’année de la période d’établissement de rapports. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 2019 |

### 2-2 Month

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Month |
| Field Name FR | mois |
| ID | month |
| Description EN | This tab / field in the template is only populated if there are no hospitality expenses for the reporting period. This field should be populated with the month of the reporting period. |
| Description FR | Cet onglet/champ du modèle n’est rempli que s'il n'y a pas de frais d'accueil pour la période d’établissement de rapports. Ce champ doit être rempli avec le mois de la période d’établissement de rapports. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 01 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| 01 | January | janvier |
| 02 | February | février |
| 03 | March | mars |
| 04 | April | avril |
| 05 | May | mai |
| 06 | June | juin |
| 07 | July | juillet |
| 08 | August | août |
| 09 | September | septembre |
| 10 | October | octobre |
| 11 | November | novembre |
| 12 | December | décembre |


---

# Data Element Profile: Open Data Inventory

_Source YAML: `inventory.yaml`_

## [Legend](#legend)

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

## [Open Data Inventory](#open-data-inventory)

### 1-1 Reference Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reference Number |
| Field Name FR | Numéro de référence |
| ID | ref_number |
| Description EN | The unique reference number given to each line item in the spreadsheet. Having a unique identifier for each item will allow departments to locate a specific item in the system if revisions or deletions are required. This element will not be displayed to the public. |
| Description FR | Un identificateur unique est attribué à chaque poste dans la feuille de calcul. Un identificateur unique pour chaque poste permettra aux ministères de trouver un élément précis dans le système, si des modifications ou des suppressions sont nécessaires. Cet élément ne sera pas présenté au public. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | OD-2016-00001 |

### 1-2 Title (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Title (English) |
| Field Name FR |   |
| ID | title_en |
| Description EN | The English name by which the dataset is known. |
| Description FR | Le nom en anglais sous lequel le jeu de données est connu. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Annual Insolvency Rates |

### 1-3 Title (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Title (French) |
| Field Name FR |   |
| ID | title_fr |
| Description EN | The French name by which the dataset is known. |
| Description FR | Le nom en français sous lequel le jeu de données est connu. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Taux annuels d’insolvabilité |

### 1-4 Description (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Description (English) |
| Field Name FR |   |
| ID | description_en |
| Description EN | An account of the dataset, in English. A description may include but is not limited to, an abstract, a table of contents, or a free-text account of the dataset. |
| Description FR | Un compte rendu du jeu de données en anglais. Une description peut inclure, entre autres, un résumé, une table des matières ou du texte libre sur le jeu de données. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | The consumer insolvency rate is defined as the number of consumer insolvencies per thousand residents aged 18 years or above. The business insolvency rate is defined as the number of business insolvencies per thousand businesses. Annual insolvency rates are available for consumers starting from 1987 and for businesses starting from 1998. [Office of the Superintendent of Bankruptcy Canada] |

### 1-5 Description (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Description (French) |
| Field Name FR |   |
| ID | description_fr |
| Description EN | An account of the dataset, in French. A description may include but is not limited to, an abstract, a table of contents, or a free-text account of the dataset. |
| Description FR | Un compte rendu du jeu de données en français. Une description peut inclure, entre autres, un résumé, une table des matières ou du texte libre sur le jeu de données. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Le taux d'insolvabilité des consommateurs renvoie au nombre de personnes insolvables par millier d'habitants âgés de 18 ans ou plus et le taux d'insolvabilité des entreprises désigne le nombre d'entreprises insolvables par millier d'entreprises. Les taux annuels d'insolvabilité sont présentés à partir de 1987 pour les consommateurs et de 1998 pour les entreprises. [Bureau du surintendant des faillites Canada] |

### 1-6 Publisher - Name at Publication (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Publisher - Name at Publication (English) |
| Field Name FR |   |
| ID | publisher_en |
| Description EN | Name, in English, of the organization primarily responsible for publishing the dataset at the time of the publication (if applicable, i.e. if different than current name). |
| Description FR | Nom, en anglais, de l’organisation principalement responsable de l’édition du jeu de données au moment de la publication (s’il y a lieu, c.-à-d. s’il est différent du nom actuel) |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Repeatable |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Industry Canada |

### 1-7 Publisher - Name at Publication (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Publisher - Name at Publication (French) |
| Field Name FR |   |
| ID | publisher_fr |
| Description EN | Name, in French, of the organization primarily responsible for publishing the dataset at the time of the publication (if applicable, i.e. if different than current name). |
| Description FR | Nom, en français, de l’organisation principalement responsable de l’édition du jeu de données au moment de la publication (s’il y a lieu, c.-à-d. s’il est différent du nom actuel) |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Repeatable |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Industrie Canada |

### 1-8 Date Published

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Date Published |
| Field Name FR |   |
| ID | date_published |
| Description EN | The date of issuance (e.g., publication) of the dataset |
| Description FR | Date de diffusion (p. ex., publication) du jeu de données. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Date |
| Validation EN |   |
| Validation FR |   |
| Example Value | 2016-04-01 |

### 1-9 Language

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Language |
| Field Name FR |   |
| ID | language |
| Description EN | The language of the resource. |
| Description FR | Langue de la ressource |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | en+fr |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| en | English | Anglais |
| fr | French | Français |
| en+fr | Bilingual (English and French) | Bilingue (Anglais et Français) |
| iu | Inuktitut | Inuktitut |
| zxx | No linguistic content ; Not applicable | Pas de contenu linguistique; non applicable |
| other | Other | Autre |

### 1-10 Size

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Size |
| Field Name FR |   |
| ID | size |
| Description EN | The [estimated] size of the resource(in Bytes) |
| Description FR | La taille [estimée] de la ressource (en octets). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN |   |
| Validation FR |   |
| Example Value | 392000 |

### 1-11 Eligible for Release

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Eligible for Release |
| Field Name FR |   |
| ID | eligible_for_release |
| Description EN | Is all of the content within the dataset eligible to be publicly released based on the application of the Eligibility Criteria in the Guide to Implementing the Directive on Open Government? |
| Description FR | Tout le contenu du jeu de données peut être diffusé publiquement selon les critères d’admissibilité mentionnés dans le guide de la mise en œuvre de la Directive sur le gouvernement ouvert? |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Y |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| Y | Yes | Oui |
| N | No | Non |

### 1-12 Program Alignment Architecture (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Program Alignment Architecture (English) |
| Field Name FR |   |
| ID | program_alignment_architecture_en |
| Description EN | The Program Alignment Architecture (PAA) in English. The Program Alignment Architecture (PAA) is an inventory of each organization’s programs. It provides an overview of the organization’s responsibilities. |
| Description FR | L’Architecture d’alignement des programmes (AAP) en anglais. L’Architecture d’alignement des programmes (AAP) est un inventaire des programmes de chaque organisation. Il offre un aperçu des responsabilités de l’organisation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Government wide programs design and delivery |

### 1-13 Program Alignment Architecture (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Program Alignment Architecture (French) |
| Field Name FR |   |
| ID | program_alignment_architecture_fr |
| Description EN | The Program Alignment Architecture (PAA) in French. The Program Alignment Architecture (PAA) is an inventory of each organization’s programs. It provides an overview of the organization’s responsibilities. |
| Description FR | L’Architecture d’alignement des programmes (AAP) en français. L’Architecture d’alignement des programmes (AAP) est un inventaire des programmes de chaque organisation. Il offre un aperçu des responsabilités de l’organisation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Conception et prestation des programmes pangouvernementaux |

### 1-14 Date Released

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Date Released |
| Field Name FR |   |
| ID | date_released |
| Description EN | The date on which the metadata record was released, made available, on the Open Government portal; only if applicable |
| Description FR | La date à laquelle l’enregistrement de métadonnées a été diffusé et rendu accessible à partir du Portail du gouvernement ouvert, s’il y a lieu seulement. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Date |
| Validation EN |   |
| Validation FR |   |
| Example Value | 2016-04-01 |

### 1-15 Open Government Portal Record (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Open Government Portal Record (English) |
| Field Name FR |   |
| ID | portal_url_en |
| Description EN | The location for online access to the distribution of the resource, in French. This element is only mandatory if applicable The entry should point to the metadata record page on Open.Canada.ca. |
| Description FR | L’emplacement en ligne où il est possible d’accéder à la ressource, en anglais. Cet élément n’est obligatoire que le cas échéant. La valeur saisie doit mener à la page de l’enregistrement sur ouvert.canada.ca. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | http://open.canada.ca/data/en/dataset/0e52f1b0-089a-430e-bbd1-1367d7328a2e |

### 1-16 Open Government Portal Record (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Open Government Portal Record (French) |
| Field Name FR |   |
| ID | portal_url_fr |
| Description EN | The location for online access to the distribution of the resource, in French. This element is only mandatory if applicable The entry should point to the metadata record page on Open.Canada.ca. |
| Description FR | L’emplacement en ligne où il est possible d’accéder à la ressource, en français. Cet élément n’est obligatoire que le cas échéant. La valeur saisie doit mener à la page de l’enregistrement sur ouvert.canada.ca. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | http://ouvert.canada.ca/data/fr/dataset/0e52f1b0-089a-430e-bbd1-1367d7328a2e |


---

# Data Element Profile: 5th National Action Plan on Open Government Tracker

_Source YAML: `nap5.yaml`_

## [Legend](#legend)

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

## [5th National Action Plan on Open Government Tracker](#5th-national-action-plan-on-open-government-tracker)

### 1-1 Reporting Period

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reporting Period |
| Field Name FR | Période de déclaration |
| ID | reporting_period |
| Description EN | Year and month of the update |
| Description FR | Année et mois de la mise à jour |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | 2022-03 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| 2022-03 | 2022-03 | 2022-03 |
| 2022-06 | 2022-06 | 2022-06 |
| 2022-09 | 2022-09 | 2022-09 |
| 2022-12 | 2022-12 | 2022-12 |
| 2023-03 | 2023-03 | 2023-03 |
| 2023-06 | 2023-06 | 2023-06 |
| 2023-09 | 2023-09 | 2023-09 |
| 2023-12 | 2023-12 | 2023-12 |
| 2024-03 | 2024-03 | 2024-03 |
| 2024-06 | 2024-06 | 2024-06 |
| 2024-09 | 2024-09 | 2024-09 |
| 2024-12 | 2024-12 | 2024-12 |

### 1-2 Commitments

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Commitments |
| Field Name FR | Engagements |
| ID | commitments |
| Description EN | The 5 commitments in the 2022-2024 National Action Plan on Open Government |
| Description FR | Les 5 engagements dans le Plan d'action national du Canada pour un gouvernement ouvert de 2022-2024 |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | C01 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| C01 | Climate Change and Sustainable Growth | Changements climatiques et croissance durable |
| C02 | Democracy and Civic Space | Démocratie et espace civique |
| C03 | Fiscal, Financial and Corporate Transparency | Transparence fiscale, financière et des entreprises |
| C04 | Justice | Justice |
| C05 | Open Data for Results | Données ouvertes aux fins des résultats |

### 1-3 Milestones

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Milestones |
| Field Name FR | Jalons |
| ID | milestones |
| Description EN | This list contains milestones that correspond to the chosen commitment |
| Description FR | Cette liste contient des jalons correspondant à l'engagement choisi |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | C01.1 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| C01.1 | Through the Open Science and Data Platform make information related to cumulative effects, including climate change and sustainable growth, easier for people in Canada to find and understand | Grâce à la Plateforme de science et de données ouvertes, rendre l'information relative aux effets cumulatifs, y compris les changements climatiques et la croissance durable, plus facile à trouver et à comprendre pour les personnes au Canada |
| C01.2 | Improve and expand information on energy use and greenhouse gas emissions through the Physical Flow Accounts as part of the Canadian Centre for Energy Information (CCEI) | Améliorer et élargir l'information sur la consommation d'énergie et les émissions de GES au moyen des comptes de flux physiques et par l'intermédiaire du Centre canadien d'information sur l'énergie (CCEI) |
| C01.3 | Making climate change science more open and accessible | Rendre la science des changements climatiques plus ouverte et accessible |
| C01.4 | Provide accessible, reliable, and practical climate data and information to support adaptation decision-making and help people of Canada, across all sectors and regions, build their resilience to climate change | Fournir des données et de l'information climatiques accessibles, fiables et pratiques pour faciliter la prise de décisions en matière d'adaptation et aider les personnes au Canada dans l'ensemble des secteurs et des régions à renforcer leur résilience face aux changements climatiques |
| C02.1 | Take action to address the rising spread of disinformation in Canada and its consequences on the health of our democracy | Prendre des mesures pour s'attaquer à la propagation croissante de la désinformation au Canada et aux conséquences qui en découlent pour la santé de notre démocratie |
| C02.2 | Continue protecting democracy at home and abroad and safeguarding Canada's electoral and democracy processes by combatting foreign threats to democracy | Continuer à protéger la démocratie au pays et à l'étranger et le processus électoral et démocratique du Canada tout en luttant contre les menaces étrangères pour la démocratie |
| C02.3 | Take steps towards strengthening trust, inclusion, and social cohesion in Canada | Prendre des mesures pour renforcer la confiance, l'inclusion et la cohésion sociale au Canada |
| C02.4 | Advance digital inclusion at home and abroad with a focus on shaping global norms, empowering multistakeholder engagement and boosting communication and outreach | Faire progresser l'inclusion numérique au pays et à l'étranger, principalement en définissant les normes mondiales, en favorisant la mobilisation multi-intervenants et en améliorant les efforts de communication et de sensibilisation |
| C03.1 | Pursuant to the Budget 2022 commitment the Government of Canada will implement a public and searchable beneficial ownership registry by the end of 2023. The registry will cover federally regulated corporations and will be scalable to allow access to the beneficial ownership data held by provinces and territories that agree to participate in a national registry | Conformément à l'engagement qu'il a pris dans le budget 2022, le gouvernement du Canada mettra en place un registre public et consultable des bénéficiaires effectifs d'ici la fin de 2023. Le registre visera les sociétés sous réglementation fédérale et pourra être élargi pour permettre l'accès aux données sur la propriété effective détenues par les provinces et les territoires qui acceptent de participer à un registre national |
| C03.2 | Engage federal, provincial and territorial partners to support coordinated implementation and a harmonized approach to ultimate beneficial ownership | Mobiliser les partenaires fédéraux, provinciaux et territoriaux pour faciliter une mise en oeuvre coordonnée du registre et l'adoption d'une approche harmonisée visant la propriété effective |
| C03.3 | Monitor the strategic management of procurement of technology and software within the Government of Canada | Surveiller la gestion stratégique des achats de technologies et de logiciels au sein du gouvernement du Canada |
| C04.1 | Collect and share data, including disaggregated data | Collecter et partager les données, y compris les données désagrégées |
| C04.2 | Identify and share promising practices | Relever les pratiques prometteuses et les partager |
| C04.3 | Advance legal literacy and empowerment | Améliorer les connaissances juridiques et l'autonomisation juridique |
| C04.4 | Foster partnerships and collaborate to advance access to justice | Renforcer les partenariats et la collaboration pour faire progresser l'accès à la justice |
| C04.5 | A multi-year roadmap for Open Government at the RCMP | Une feuille de route pluriannuelle pour un gouvernement ouvert à la GRC |
| C05.1 | Ensure open and strategic management of data and information | Assurer une gestion ouverte et stratégique des données et de l'information |
| C05.2 | Build an open government and open data ecosystem | Bâtir un gouvernement ouvert et un écosystème de données ouvertes |
| C05.3 | Create a roadmap toward a more inclusive barrier-free Canada | Créer une feuille de route vers un Canada plus inclusif et exempt d'obstacles |

### 1-4 Indicators

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Indicators |
| Field Name FR | Indicateurs |
| ID | indicators |
| Description EN | The indicators related to the chosen milestone |
| Description FR | Les indicateurs liés au jalon choisi |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | C01.1.1 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| C01.1.1 | Add content and features to the Open Science and Data Platform, using user engagement and feedback, both internal and external to government to set priorities for additions | Ajouter du contenu et des fonctionnalités à la Plateforme de science et de données ouvertes, en mobilisant les utilisateurs et en obtenant leurs commentaires, tant à l'intérieur qu'à l'extérieur du gouvernement, pour établir des priorités |
| C01.1.2 | Provide accessible science-based educational content on 10 key topics (air, biodiversity, climate, cumulative effects, development activities, economy and industry, health, land, society and culture, and water), which may be supported by interactive maps | Fournir un contenu éducatif axé sur les sciences en langage accessible sur dix sujets clés (air, biodiversité, climat, effets cumulatifs, activités de développement, économie et industrie, santé, terre, société et culture, et eau), qui peut être complété par des cartes interactives |
| C01.1.3 | Engage with governments, Indigenous Peoples, and external groups (e.g. industry, environmental non – government organizations) to verify that cumulative effects are better understood, new content is identified (data, publications) and overall use of the platform is increased | Mobiliser les gouvernements, les peuples autochtones et les groupes externes (par exemple, industrie et organisations non gouvernementales environnementales) pour vérifier s'ils comprennent mieux les effets cumulatifs, s'ils ont repéré de nouveaux contenus (données et publications) et s'ils utilisent davantage la plateforme dans son ensemble |
| C01.2.1 | Disseminate an infographic and datasets related to greenhouse gas (GHG) emissions embedded in goods and services purchased by households. Link and disseminate environmental data on energy consumption and GHG emission physical flow accounts with economic satellite accounts on tourism, clean technologies, natural resources | Diffuser une infographie et des jeux de données relatifs aux émissions de GES intégrées aux biens et services achetés par les ménages. Partager les données environnementales des comptes de flux physiques pour la consommation d'énergie et les émissions de GES et établir un lien entre celles-ci et les données des comptes satellites économiques pour le tourisme, les technologies propres et les ressources naturelles |
| C01.2.2 | Develop an "Energy and Environment" webpage for the Canadian Centre for Energy Information portal that will include detailed GHG information from both Statistics Canada and Environment and Climate Change Canada, including several data visualization dashboards and indicators | Créer une page Web « Énergie et environnement » pour le portail du CCEI, qui comprendra de l'information détaillée sur les GES provenant de StatCan et d'ECCC, y compris plusieurs indicateurs et tableaux de bord de visualisation des données |
| C01.2.3 | Link and disseminate environmental data on energy consumption and GHG emission Physical Flow Accounts with economic satellite accounts on transportation and agriculture | Partager les données environnementales des comptes de flux physiques pour la consommation d'énergie et les émissions de GES et établir un lien entre celles-ci et les données des comptes satellites économiques pour le transport et l'agriculture |
| C01.3.1 | New metric to be designed and included in yearly reports to assess open access of climate change science publication using data from an abstract and citation database | Concevoir une nouvelle mesure à inclure dans les rapports annuels pour évaluer le libre accès aux publications scientifiques sur les changements climatiques en utilisant les données d'une base de données de résumés et de citations |
| C01.3.2 | Yearly reports on progress against existing metrics measuring implementation of open science by Science-Based Departments and Agencies, with a focus on open access metrics and diverse types of open access, to be released in the open | Établir des rapports annuels sur les progrès réalisés en fonction des indicateurs existants qui mesurent la façon dont les ministères et organismes à vocation scientifique mettent en oeuvre la science ouverte, en mettant l'accent sur les indicateurs de libre accès et les divers types de libre accès, et les mettre à disposition du public |
| C01.3.3 | Support 10 climate change innovation research projects as well as 10 master's students focused on the intersection of machine learning and climate change in Sub-Saharan Africa and promote knowledge exchange with Canadian scholars | Appuyer dix projets de recherche sur l'innovation en matière de changement climatique et les travaux de dix étudiants à la maîtrise qui seront axés sur les recoupements entre l'apprentissage automatique et les changements climatiques en Afrique subsaharienne et promouvoir l'échange de connaissances avec des chercheurs canadiens |
| C01.3.4 | Work with Lacuna Fund to support the creation, aggregation, and maintenance of open datasets for the training and evaluation of machine learning models by and for local communities most affected by climate change around the world | Collaborer avec Lacuna Fund pour contribuer à la création, au regroupement et à mise à jour de jeux de données ouvertes pour des projets de formation et d'évaluation sur les modèles d'apprentissage automatique visant les communautés locales les plus touchées par les changements climatiques dans le monde |
| C01.4.1 | Increase the number of clients accessing climate information through Canadian Centre for Climate Services (CCCS) services by 10% by 2023 from 2021 baseline, by working to increase climate data and addressing information gaps driven by user needs | Augmenter de 10 % le nombre de clients ayant accès à l'information climatique par l'intermédiaire du Centre canadien des services climatiques (CCSC) d'ici 2023 par rapport au niveau de référence de 2021, en s'efforçant d'accroître la quantité de données climatiques et de combler les lacunes en matière d'information d'après les besoins des utilisateurs |
| C01.4.2 | Publish two sector-based modules on Climate Data by 2023 to provide relevant climate projections and information for users in the buildings and transportation sectors | Publier deux modules sectoriels sur Données climatiques d'ici 2023, afin de fournir des projections et de l'information pertinentes sur le climat aux utilisateurs des secteurs du bâtiment et du transport |
| C01.4.3 | Respond to at least 300 user enquiries via the Canadian Centre for Climate Services support desk each year to continue to provide high-level quality of support, and use their feedback to help us advance our mandate to help users understand and become more resilient to climate change | Répondre à au moins 300 demandes de renseignements des utilisateurs chaque année par l'intermédiaire du bureau de service du CCSC afin de continuer à fournir un soutien de grande qualité et d'utiliser les commentaires de ceux ci pour remplir notre mandat qui consiste à les aider à mieux comprendre les changements climatiques et à devenir plus résilients face à ceux-ci |
| C02.1.01 | Projects are supported by the Digital Citizen Contribution Program with a focus of combatting online disinformation and other harms in a Canadian context to better understand the origins, impacts and potential response to online disinformation | les projets sont appuyés par le Programme de contributions en matière de citoyenneté numérique et ont pour objectif premier de lutter contre la désinformation en ligne et d'autres préjudices dans un contexte canadien afin de mieux comprendre les origines, les répercussions et les mesures d'intervention possibles pour lutter contre la désinformation en ligne |
| C02.1.02 | Projects are supported by Canadian Heritage's Joint Initiative with Social Sciences and Humanities Research Council with a focus on combatting online disinformation and other harms in a Canadian context | les projets sont appuyés par l'initiative conjointe de Patrimoine canadien et du Conseil de recherches en sciences humaines et visent à combattre la désinformation en ligne et d'autres préjudices dans un contexte canadien |
| C02.1.03 | Annual Digital Citizen Initiative conferences are held, bringing together stakeholders for capacity building and knowledge dissemination | des conférences annuelles sur l'initiative de citoyenneté numérique sont organisées, réunissant des intervenants afin de renforcer les capacités et de favoriser le transfert de connaissances |
| C02.1.04 | New models are explored that enable private giving and philanthropic support for trusted, professional, non-profit journalism and local news | de nouveaux modèles sont explorés pour permettre les dons privés et un soutien philanthropique pour un journalisme et des nouvelles locales de confiance, professionnels et à but non lucratif |
| C02.1.05 | The Local Journalism Initiative supports the hiring of journalists to provide coverage for underserved communities across Canada to support a healthy, diverse, and reliable news ecosystem | l'Initiative sur le journalisme local soutient l'embauche de journalistes pour fournir une couverture médiatique aux communautés mal desservies à travers le Canada et favoriser un écosystème de nouvelles sain, diversifié et fiable |
| C02.1.06 | Lead a multi-stakeholder working group to develop and advance international priorities related to Diversity of Content Online | Diriger un groupe de travail multi-intervenants pour définir des priorités internationales liées à la diversité des contenus en ligne, et en assurer la concrétisation |
| C02.1.07 | Finalize voluntary actions in line with the Guiding Principles on diversity of content online | Mettre la touche finale à des actions volontaires en tenant compte des principes directeurs s'appliquant à la diversité des contenus en ligne |
| C02.1.08 | Countries, private sector, and civil society organizations sign on to the Guiding Principles and commit to advance voluntary actions | Les pays, le secteur privé et les organisations de la société civile adhèrent aux principes directeurs et s'engagent à faire progresser des actions volontaires |
| C02.1.09 | During its tenure as Chair of the International Institute for Democracy and Electoral Assistance (IDEA) in 2022, Canada will engage partners on the challenges created by disinformation, particularly those affecting governments and marginalized and vulnerable groups, and its impact on democratic processes, including participation and representation | pendant son mandat de président de l'Institut international pour la démocratie et l'assistance électorale en 2022, le Canada fera appel à des partenaires pour s'attaquer aux défis liés à la désinformation, en particulier ceux qui touchent les gouvernements et les groupes marginalisés et vulnérables, et leurs répercussions sur les processus démocratiques, y compris la participation et la représentation |
| C02.1.10 | Publish an educational document for Canadians that would raise awareness on what the national security community does, why they do it and how, with specific reference to national security efforts to combat disinformation meant to undermine our democratic system and social cohesion | Publier un document éducatif à l'intention des Canadiens pour les sensibiliser à ce que fait la communauté de la sécurité nationale, pourquoi elle le fait et comment elle le fait, en faisant particulièrement référence aux efforts déployés par la communauté de la sécurité nationale pour lutter contre la désinformation qui visent à porter atteinte à notre système démocratique et à notre cohésion sociale |
| C02.1.11 | Launch an online engagement tool to foster dialogue with Canadians on national security transparency issues, with specific reference to national security efforts to combat disinformation meant to undermine our democratic system and social cohesion | Lancer un outil de mobilisation en ligne pour favoriser le dialogue avec les Canadiens sur les questions de transparence en matière de sécurité nationale, en faisant particulièrement référence aux efforts déployés par la communauté de la sécurité nationale pour lutter contre la désinformation qui visent à porter atteinte à notre système démocratique et à notre cohésion sociale |
| C02.2.1 | Release an annual G7 Rapid Response Mechanism public report aimed at raising awareness of and strengthening societal resilience to foreign interference, including state sponsored disinformation, by keeping publics in the G7 member states informed about the latest threats and countermeasures | publier un rapport public annuel sur le mécanisme de réponse rapide du G7 visant à sensibiliser la société à l'ingérence étrangère, notamment la désinformation parrainée par l'État – et à renforcer la résilience de la société face à celle-ci, en informant la population des États membres du G7 des dernières menaces et contre-mesures |
| C02.2.2 | Share Canada's experience implementing its Plan to Protect Democracy, such as the Critical Election Incident Public Protocol and the Declaration, with domestic and international partners | partager avec les partenaires nationaux et internationaux l'expérience du Canada dans la mise en oeuvre de son plan de protection de la démocratie, comme le Protocole public en cas d'incident électoral majeur et la Déclaration du Canada sur l'intégrité électorale en ligne |
| C02.2.3 | Engage provincial and territorial officials on threat awareness including countering cyber threats and disinformation in electoral processes | mobiliser des représentants provinciaux et territoriaux pour les sensibiliser aux menaces, notamment à la lutte contre les cybermenaces et la désinformation dans les processus électoraux |
| C02.2.4 | Implement the Declaration for Electoral Integrity Online commitment to enhance the circulation of authoritative and verifiable government information in the Internet ecosystem, including ensuring that electoral management bodies are identified as the leading source of information online for where, when, and how to vote | réaliser l'engagement pris au titre de la Déclaration du Canada sur l'intégrité électorale en ligne afin d'améliorer la circulation d'informations gouvernementales officielles et vérifiables dans l'écosystème Internet, notamment veiller à ce que les organismes de gestion électorale soient désignés comme la principale source d'information en ligne sur le lieu, la date du scrutin et la manière de voter |
| C02.2.5 | Work with social media companies on the next iteration of the Declaration | collaborer avec les entreprises de médias sociaux concernant la prochaine version de la Déclaration du Canada sur l'intégrité électorale en ligne |
| C02.2.6 | Canada will establish a new centre to expand the availability of Canadian expertise and assistance to those seeking to build peace, advance justice, promote human rights, inclusion and democracy, and deliver good governance | le Canada établira un nouveau centre qui mettra l'aide et l'expertise du Canada à la disposition de tous ceux qui aspirent à consolider la paix, à faire avancer la justice, à promouvoir les droits de la personne et la démocratie, et à favoriser la bonne gouvernance |
| C02.2.7 | As co-chairs of the Media Freedom Coalition in 2022, Canada will take positive steps towards strengthening capacity to defend journalists around the world and protect the right to freedom of expression, public interest media, and the safety of journalists | en tant que coprésident de la Coalition pour la liberté des médias en 2022, le Canada prendra des mesures positives pour renforcer sa capacité à défendre les journalistes dans le monde entier et à protéger le droit à la liberté d'expression, les médias d'intérêt public et la sécurité des journalistes |
| C02.3.1 | Monitor trends on trust in government and identify lessons learned from other countries through the OECD's work and survey on the drivers of trust and how it can foster greater social cohesion | surveiller les tendances dans la confiance à l'égard du gouvernement, et relever les leçons retenues des autres pays en consultant les travaux et les résultats des enquêtes de l'OCDE sur les facteurs de confiance et la manière ils peuvent favoriser une plus grande cohésion sociale |
| C02.3.2 | Support research to better understand the state of civic discourse (both online and offline) and social cohesion in Canada | soutenir la recherche pour mieux comprendre l'état du discours civique (en ligne et hors ligne) et la cohésion sociale au Canada |
| C02.3.3 | Canada will launch its first-ever federal LGBTQ2 Action Plan with a view to advance the health, social and economic outcomes of LGBTQ2 people in Canada and the human rights of LGBTQ2 individuals internationally | le Canada lancera son tout premier plan d'action fédéral pour les communautés LGBTQ2 en vue d'améliorer les résultats des communautés LGBTQ2 au Canada sur les plans social, économique et de la santé et de faire progresser les droits de leurs membres à l'échelle internationale |
| C02.4.1 | Launch a program of action for 2022 Canada's chairship of the Freedom Online Coalition to advance digital inclusion that will foster meaningful participation in society online and offline, at home and abroad, with a focus on shaping global norms and expanding diplomatic networks, promoting multi-stakeholder engagement, and ramping up advocacy, communication and outreach | lancer un programme d'action pour la présidence canadienne de la Coalition pour la liberté en ligne 2022 afin de promouvoir l'inclusion numérique et, ainsi, favoriser une participation significative à la société en ligne et hors ligne, au pays et à l'étranger, en mettant l'accent sur l'élaboration de normes mondiales et l'expansion des réseaux diplomatiques, la promotion de la mobilisation multi-intervenants et l'intensification des activités de défense, de communication et de sensibilisation |
| C02.4.2 | Conduct a landscape study and a mapping on disinformation in the four global south regions - Middle East and North Africa, Latin America, sub-Saharan Africa, Asia; examine policies and actors; and build an agenda to work together to reduce disinformation | Réaliser une étude du paysage de la désinformation et en établir la cartographie dans les quatre régions du Sud (Moyen-Orient et Afrique du Nord, Amérique latine, Afrique subsaharienne et Asie), examiner les politiques et les acteurs et élaborer un programme de collaboration pour réduire la désinformation |
| C02.4.3 | Support research in 18 countries on the extent of technology facilitated Gender-based violence (GBV) | Appuyer des projets de recherche dans 18 pays sur la façon dont la technologie a facilité la violence fondée sur le sexe (VFS) |
| C02.4.4 | Conduct research on fostering a feminist Internet - infrastructure, data, discourse from artificial intelligence to LGBTQI+ (lesbian, gay, bisexual, transgender, queer and intersex, plus) to labour to Gender-based violence (GBV) | Mener des recherches sur la promotion d'un Internet féministe - infrastructure, données, discours, de l'IA aux communautés LGBTQI+ (lesbiennes, gaies, bisexuelles, transgenres, queers et intersexuées plus), en passant par le travail et la VFS |
| C02.4.5 | Support 2 countries in the global south to advance legal and gender transformative approaches to countering sexist hate speech online [India and Brazil] | Offrir un soutien à deux pays du Sud de la planète afin de promouvoir des approches transformatrices juridiques et en matière de genre pour mettre fin aux discours sexistes haineux en ligne (Inde et Brésil) |
| C03.1.1 | The Government's approach to beneficial ownership disclosures is informed by stakeholders' views on specifications for a made-in-Canada solution | L'approche du gouvernement en matière de divulgation de la propriété effective repose sur les points de vue des intervenants portant sur les spécifications d'une solution proprement canadienne |
| C03.1.2 | Federal legislative provisions necessary to implement the national beneficial ownership registry are in place in a timely manner, to support launch of the registry | Les dispositions législatives fédérales nécessaires à la mise en oeuvre du registre national des bénéficiaires effectifs sont en place en temps opportun, afin de soutenir le lancement du registre |
| C03.1.3 | The registry is accessible to the public by the end of 2023 | Le registre sera accessible au public d'ici la fin de 2023 |
| C03.2.1 | Regular consultations are held with federal, provincial and territorial partners and counterparts to discuss a harmonized made-in-Canada solution that is scalable and can facilitate participation by the provinces and territories | Des consultations régulières ont lieu avec les partenaires et les homologues fédéraux, provinciaux et territoriaux afin de discuter d'une solution harmonisée proprement canadienne, qui peut être élargie et qui peut faciliter la participation des provinces et des territoires |
| C03.2.2 | Canada consults with international counterparts to acquire lessons learned and best practices for implementing a publicly accessible beneficial ownership registry | Le Canada consulte ses homologues internationaux afin d'obtenir des leçons apprises et des pratiques exemplaires pour la mise en oeuvre d'un registre des bénéficiaires effectifs accessible au public |
| C03.3.1 | Subject to data availability, release the aggregate details of applications used by the Government of Canada | Selon la disponibilité des données, publier des renseignements agrégés sur les applications utilisées par le gouvernement du Canada |
| C03.3.2 | Work towards developing policy instruments around the ethical use of information technology in the Government of Canada | Travailler à l'élaboration d'instruments de politique concernant l'utilisation éthique des technologies de l'information au sein du gouvernement du Canada |
| C04.1.1 | Completion of Canadian Legal Problems Survey (CLPS) and sharing of results, including Public Use Microdata File (PUMF) | Répondre à l'Enquête canadienne sur les problèmes juridiques (ECPJ) et partager les résultats, y compris le fichier de microdonnées à grande diffusion (FMGD) |
| C04.1.2 | Completion and sharing of findings of Qualitative Studies on LGBTQ2S+ populations, Black Canadians, persons with disabilities, immigrants and Indigenous peoples, to complement the CLPS quantitative data | Mener à bien des études qualitatives sur les populations LGBTQ2S, les Canadiens noirs, les personnes en situation de handicap, les immigrants et les peuples autochtones, et en partager les résultats, afin de compléter les données quantitatives de l'ECPJ |
| C04.1.3 | Preparing and publishing Legal Aid Reports (annually) | Préparer et publier les Rapports sur l'aide juridique |
| C04.1.4 | Updating and maintaining the State of the Criminal Justice System Report and Dashboard (annually) | Tenir à jour le Rapport et le Tableau de bord sur l'État du système de justice pénale |
| C04.1.5 | Collecting and releasing high value data related to various policing activities, workforce composition and more | Collecter des données de grande valeur concernant, entre autres, les diverses activités de maintien de l'ordre et la composition de la main-d'oeuvre, et les communiquer |
| C04.2.1 | Collaboration with Council of Canadian Administrative Tribunals (CCAT) to support delivery of workshops to better understand and promote good practices | Collaborer avec le Conseil des tribunaux administratifs canadiens (CTAC) pour appuyer la tenue d'ateliers ayant pour but d'assurer une meilleure compréhension des bonnes pratiques et d'en faire la promotion |
| C04.2.2 | Support development of Community Justice Centres as a promising practice (ongoing) | Soutenir le développement de centres de justice communautaires en tant que pratique prometteuse |
| C04.2.3 | Publish promising practices from evaluations, annual reports and Federal, Provincial, Territorial work, as appropriate (ongoing) | Publier les pratiques prometteuses issues des évaluations, des rapports annuels et des travaux effectués par les gouvernements fédéral, provinciaux et territoriaux, le cas échéant |
| C04.3.1 | Regularly update Charterpedia on the Justice website (ongoing) | Assurer la mise à jour régulière de Chartepédia sur le site du ministère de la Justice |
| C04.3.2 | Publication of geo-spatial mapping of services funded by Indigenous Justice Program (ongoing) | Publier une cartographie géospatiale des services financés par le Programme de la justice applicable aux Autochtones |
| C04.3.3 | Release Five forthcoming online courses on Bill C-78 (family violence, relocation, family dispute resolution and the duties of the parties, parenting and, interjurisdictional support) | Diffuser Cinq cours en ligne à venir sur le projet de loi C-78 (violence familiale, réinstallation, règlement des différends familiaux et obligations des parties, rôle parental et exécution réciproque des ordonnances alimentaires) |
| C04.3.4 | Develop a Children's Rights Impact Assessment (CRIA) tool, and accompanying online course on the United Nations Convention on the Rights of the Child and how to use the CRIA tool | Mettre au point un outil d'évaluation de l'incidence sur les droits de l'enfant et un guide sur la façon d'utiliser cet outil, ainsi que le cours en ligne connexe sur la Convention relative aux droits de l'enfant des Nations Unies |
| C04.3.5 | Support for a network of legal information hubs providing free services to Official Language Minority Communities (ongoing) | Assurer le soutien à un réseau de centres d'information juridique offrant des services gratuits aux communautés de langues officielles en situation minoritaire |
| C04.3.6 | Communications activities to support legal literacy | Mener des activités de communication pour appuyer l'amélioration des connaissances juridiques |
| C04.4.1 | Work in concert with Provincial and Territorial partners | Collaborer avec les partenaires provinciaux et territoriaux |
| C04.4.2 | Participation on OGP Coalition on Justice | Participer à la Coalition du PGO pour la justice |
| C04.4.3 | Collaboration with Action Committee on Access to Justice in Civil and Family Matters | Collaborer avec le Comité d'action sur l'accès à la justice en matière civile et familiale |
| C04.4.4 | Fostering international partnerships including the Organisation for Economic Co-operation and Development (OECD) and Pathfinders | Encourager les partenariats internationaux, y compris ceux avec l'OCDE et Pathfinders |
| C04.5.1 | Develop an RCMP Open Government strategy with multi-year action plan (Released publicly) | Élaborer une stratégie de gouvernement ouvert pour la GRC et un plan d'action pluriannuel connexe (rendu public) |
| C04.5.2 | Establish an Open Government Office with resources dedicated to the advancement of openness and transparency across the RCMP | Établir un bureau pour un gouvernement ouvert comprenant des ressources consacrées à la promotion de l'ouverture et de la transparence à la GRC |
| C04.5.3 | Establish an RCMP Open Government Working Group comprised of key stakeholders across the RCMP to identify and release data and information as well as advance a culture of openness, transparency and accountability based on open government principles and practices. In addition, the RCMP will be an active participant in interdepartmental working groups/efforts around Justice and Justice related topics of transparency and Open Government | Créer un Groupe de travail sur le gouvernement ouvert pour la GRC regroupant des intervenants clés provenant de l'ensemble de la GRC, à qui il appartiendra de trouver des données et de l'information, et de les publier, et de promouvoir une culture d'ouverture, de transparence et de responsabilisation fondée sur les principes et les pratiques d'un gouvernement ouvert. De plus, la GRC participera activement aux initiatives et aux groupes de travail interministériels sur la justice et les questions connexes à la justice portant sur la transparence et le gouvernement ouvert |
| C04.5.4 | Establish an RCMP Multi-Stakeholder Forum (ex. non-governmental organizations, other government departments, private sector, academia, community representatives including Indigenous Peoples, LBGTQ, youth, etc..) to help engage in discussions around priorities and areas of focus for openness and transparency in the RCMP | Créer un Forum multi intervenants à la GRC (p. ex., organisations non gouvernementales, autres ministères, secteur privé, milieu universitaire, représentants de la collectivité, notamment les peuples autochtones, les communautés LGBTQ et les jeunes) pour faciliter l'entretien de discussions sur les priorités et les domaines d'intérêt pour favoriser l'ouverture et la transparence à la GRC |
| C05.1.1 | Develop a roadmap identifying and prioritizing federal data standards | Élaborer une feuille de route indiquant, en ordre de priorité, les normes de données fédérales |
| C05.1.2 | Create a protocol for the development and management of federal data standards | Créer un protocole pour l'élaboration et la gestion des normes de données fédérales |
| C05.1.3 | Establish a data and information governance framework to support a holistic approach to governance and inform direction and decision-making on federal data and information initiatives | Établir un cadre de gouvernance des données et de l'information à l'appui d'une approche holistique de la gouvernance et éclairer l'orientation et la prise de décisions concernant les initiatives fédérales en matière de données et d'information |
| C05.1.4 | Define a federal data quality framework to build a common understanding of data quality and harmonize approaches to optimizing the quality of data assets in the Government of Canada | Définir un cadre fédéral sur la qualité des données afin de parvenir à une compréhension commune de la qualité des données et d'harmoniser les approches visant à optimiser la qualité des ressources de données au sein du gouvernement du Canada |
| C05.1.5 | Develop a new standard for systems that manage information and data in the Government of Canada, anchored in principles and business outcomes, to provide an enterprise approach for all federal records management and business systems | Élaborer une nouvelle norme relative aux systèmes qui gèrent l'information et les données au sein du gouvernement du Canada, qui repose sur les principes et les résultats opérationnels, afin de fournir une approche intégrée pour tous les systèmes de gestion des documents et les systèmes opérationnels fédéraux |
| C05.1.6 | Develop an assessment and reporting framework that supports implementation of the standard for systems that manage information and data and enables decision making in the Government of Canada | Mettre au point un cadre d'évaluation et de production de rapports qui soutient la mise en oeuvre de la norme relative aux systèmes qui gèrent l'information et les données et qui facilite la prise de décision au sein du gouvernement du Canada |
| C05.2.01 | As part of the development of an Open Government Strategy, include a robust open data pillar | Prévoir un pilier solide en matière de données ouvertes lors de l'élaboration d'une stratégie pour un gouvernement ouvert |
| C05.2.02 | Establish an internal and external stakeholder open data advisory working group to help inform open data priorities, help inform the establishment of public reporting on open data release progress, identify open data users and experts, and report publicly on the work and deliberations of the working group and impact of open data | Créer un groupe de travail consultatif sur les données ouvertes, composé d'intervenants internes et externes, à qui il appartiendra de contribuer à la définition des priorités en matière de données ouvertes et à la production de rapports publics sur les progrès réalisés à l'égard de la publication des données ouvertes, de trouver les utilisateurs et les experts en matière de données ouvertes et de rendre compte publiquement de ses travaux et de ses délibérations et de l'incidence des données ouvertes |
| C05.2.03 | As part of the OG Strategy and open data pillar, prioritize the development of a dedicated open data plan to expand on key open data activities, including but not limited to inclusive engagement | Dans le cadre de la stratégie pour un gouvernement ouvert et du pilier des données ouvertes, accorder la priorité à l'élaboration d'un plan consacré aux données ouvertes afin de développer les activités clés en matière de données ouvertes, y compris, mais sans s'y limiter, la participation inclusive |
| C05.2.04 | Consult on and develop service standards for prioritizing and releasing open data and using the portal as part of the open data plan | Mener des consultations en vue de l'élaboration de normes de service sur l'établissement de l'ordre de priorité des données ouvertes et la publication de celles-ci, et l'utilisation du portail dans le cadre du plan de données ouvertes |
| C05.2.05 | Using existing maturity models, develop a maturity model for open data for the Government of Canada | Au moyen des modèles de maturité existants, mettre au point un modèle de maturité pour les données ouvertes pour le gouvernement du Canada |
| C05.2.06 | Equip departments with criteria and a template so they can develop Implementation Plans to align themselves to the Strategy and maturity models to optimize their efforts for growth, as well as self-assessment and annual reporting tools to monitor progress and outcomes | Fournir aux ministères des critères et un modèle pour qu'ils puissent élaborer des plans de mise en oeuvre et s'aligner sur la stratégie pour un gouvernement ouvert et les modèles de maturité, et, ainsi, optimiser leurs efforts de croissance, ainsi que des outils d'auto-évaluation et de production de rapports annuels pour suivre les progrès et les résultats |
| C05.2.07 | Expand the federated open data search to include open data from all thirteen jurisdictions thereby providing Canadians with access to open and discoverable data in one place | Élargir la capacité de recherche fédérée de données ouvertes pour tenir compte des données ouvertes des treize administrations, offrant ainsi aux Canadiens un accès aux données ouvertes et repérables en un seul endroit |
| C05.2.08 | Working in collaboration with Indigenous Peoples and internal and external stakeholders, create a data sharing policy that would facilitate data sharing with Indigenous governments and organizations and their partners, while addressing key data governance issues such as protecting the confidentiality of community-level information | En collaboration avec les peuples autochtones et les intervenants internes et externes, créer une politique de partage des données qui faciliterait le partage des données avec les gouvernements et organisations autochtones et leurs partenaires, tout en abordant des questions clés de gouvernance des données comme la protection de la confidentialité des renseignements au niveau de la collectivité |
| C05.2.09 | Develop and test an infrastructure, with supporting governance, to facilitate uptake of citizen science in a health research context [this may include, but is not limited to, research in environmental health (e.g., air, water, chemicals, radiation), COVID-19, or other health-related topics] | Développer une infrastructure, dont une structure de gouvernance de soutien, et la mettre à l'essai, pour faciliter l'adoption de la science citoyenne dans un contexte de recherche sur la santé (il peut s'agir, entre autres, de la recherche sur la santé environnementale [air, eau, produits chimiques et radiations], la COVID-19, ou d'autres sujets liés à la santé) |
| C05.2.10 | Support the Global Data Barometer and disclose comparative analysis on data in 100+ countries | Appuyer le Baromètre mondial des données et communiquer des analyses comparatives sur les données dans plus de 100 pays |
| C05.2.11 | Increase the number of new women's rights groups engaged in open government practices and data production consultations around the world (at least 15) | Augmenter le nombre de nouveaux groupes de défense des droits des femmes qui ont adopté des pratiques de gouvernement ouvert et qui participent à des consultations sur la production de données partout dans le monde (au moins 15) |
| C05.2.12 | Support organizations in at least 15 OGP countries in developing regions to advance open, fair and efficient use of data to strengthen their democracies | Soutenir les organisations d'au moins 15 pays membres du PGO dans les régions en développement afin de promouvoir l'utilisation ouverte, équitable et efficace des données pour renforcer leur démocratie |
| C05.2.13 | Produce a series of synthesis reports, case studies and in-person events that support the global open data community, including the work with the Government of Kenya to co-host the International Open Data Conference | Produire une série de rapports de synthèse, d'études de cas et d'activités en personne qui soutiennent la communauté mondiale des données ouvertes, notamment le travail accompli avec le gouvernement du Kenya pour co-organiser la Conférence internationale sur les données ouvertes |
| C05.2.14 | Plan and develop a central online hub to facilitate public access to GBA Plus data, information and resources, and to provide a space for learning and participation | Planifier et développer une plateforme centrale en ligne pour faciliter l'accès du public aux données, à l'information et aux ressources sur l'ACS+, et offrir un espace d'apprentissage et de participation |
| C05.3.01 | Disaggregated Data Action Plan Developmental Phase - Develop a collection strategy for major surveys, survey design for new surveys, terms and conditions for collaborations with partners on the acquisition of new data, establishment and promotion of statistical standards for disaggregated data, exploration of existing data sources, start of release of new data and new indicators | Phase d'élaboration du plan d'action sur les données désagrégées - élaborer une stratégie de collecte pour les grands sondages et une conception pour les nouveaux sondages; définir des modalités de collaboration avec les partenaires pour l'acquisition de nouvelles données; établir des normes statistiques pour les données désagrégées, et en faire la promotion; explorer les sources de données existantes; lancer la publication de nouvelles données et de nouveaux indicateurs |
| C05.3.02 | Disaggregated Data Action Plan Implementation Phase I - Launch of enhanced surveys, a collaborative analysis space, and an intersectional, population-level platform; further exploration of existing data sources and release of survey data, new indicators, and new analytical studies | Phase I de la mise en oeuvre du plan d'action sur les données désagrégées - lancer les sondages améliorés, un espace d'analyse collaborative et une plateforme intersectionnelle au niveau de la population; poursuivre l'exploration des sources de données existantes et la publication des données des sondages, des nouveaux indicateurs et des résultats des nouvelles analyses |
| C05.3.03 | Disaggregated Data Action Plan Implementation Phase II - Continued release of new indicators, survey data, and analyses; enhancement of the portal of the Centre for Gender, Diversity and Inclusion Statistics, enhanced data integration | Phase II de la mise en oeuvre du plan d'action sur les données désagrégées - publier de façon continue de nouveaux indicateurs, des données de sondages et des résultats d'analyses; améliorer le portail du Centre pour les statistiques sur le genre, la diversité et l'inclusion, et l'intégration des données |
| C05.3.04 | Disaggregated Data Action Plan Monitoring Phase - Continued release of new indicators, survey data, and analyses; completion of the evaluation framework; course correction | Phase de suivi du plan d'action sur les données désagrégées - publier de façon continue de nouveaux indicateurs, des données de sondages et des résultats d'analyses; achever le cadre d'évaluation; apporter des corrections, au besoin |
| C05.3.05 | Disaggregated Data Action Plan Evaluation Phase - Continued release of new indicators, survey data, and analyses; evaluation report and recommendations for ongoing data collection and dissemination | Phase d'évaluation du plan d'action sur les données désagrégées - publier de façon continue de nouveaux indicateurs, des données de sondages et des résultats d'analyses; élaborer un rapport d'évaluation et des recommandations pour la collecte et la diffusion continues des données |
| C05.3.06 | Disaggregated Data Action Plan Continuous Improvement and Monitoring Phase - Continued release of new indicators, survey data, and analyses; monitoring of data gaps and emerging needs that should be covered, adherence to diversity data standards (in collaboration with TBS where appropriate) at the agency and all levels of government, flow of data to the agency and statistics from the agency and use of statistics in policymaking | Phase de suivi et d'amélioration continue du plan d'action sur les données désagrégées - publier de façon continue de nouveaux indicateurs, des données de sondages et des résultats d'analyses; faire un suivi des lacunes dans les données et des besoins émergents qui devraient être pris en considération; satisfaire aux normes de données sur la diversité (en collaboration avec le SCT, le cas échéant) au sein de l'organisation et à tous les ordres de gouvernement; gérer le flux de données vers l'organisation et les statistiques provenant de celle-ci; utiliser les statistiques dans l'élaboration des politiques |
| C05.3.07 | 2022 Canadian Survey on Disability data collection | Collecter les données de l'Enquête canadienne sur l'incapacité 2022 |
| C05.3.08 | 2022 Canadian Survey on Disability data initial results available | Mettre à disposition les résultats initiaux de l'Enquête canadienne sur l'incapacité 2022 |
| C05.3.09 | Disability screening questions included in future cycles of the General Social Survey, Canadian Income Survey, and Indigenous Peoples Survey | Inclure les questions d'identification des personnes en situation de handicap dans les prochains cycles de l'Enquête sociale générale, de l'Enquête canadienne sur le revenu et de l'Enquête auprès des peuples autochtones |
| C05.3.10 | 2017 Canadian Survey on Disabilities data integrated with Canada Recovery Benefits data accessible in Federal Research Data Centre | Intégrer les données de l'Enquête canadienne sur l'incapacité de 2017 aux données sur la Prestation canadienne de la relance économique accessibles dans le Centre fédéral de données de recherche |
| C05.3.11 | First set of UN Convention on the Rights of Persons with Disabilities (CRPD) and Sustainable Development Goals indicators available | Publier la première série d'indicateurs de la Convention des Nations Unies relative aux droits des personnes handicapées (CDPH) et des objectifs de développement durable disponibles |
| C05.3.12 | Develop a methodology to better understand Chronic Wasting Disease in Canada (CWD) | Élaborer une méthodologie pour mieux comprendre les maladies débilitantes chroniques (MDC) au Canada |
| C05.3.13 | Development of a new survey on children with disabilities | Élaborer une nouvelle enquête sur les enfants en situation de handicap |
| C05.3.14 | Launch of the Accessibility Statistics Data Hub in June 2021, and ongoing updates | Lancer le Carrefour de données statistiques sur l'accessibilité en juin 2021, et faire des mises à jour continues |
| C05.3.15 | Analyze and publish the data on the Survey on Accessibility in Federal Sector Organizations (SAFSO) | Analyser et publier les données du Sondage sur l'accessibilité dans les organisations du secteur public (SAOSP) |
| C05.3.16 | Publish the 2019-20 public opinion research on the Accessibility Statistics Data Hub | Publier les résultats de recherche sur l'opinion publique de 2019-2020 sur le Carrefour de données statistiques sur l'accessibilité |
| C05.3.17 | Conduct additional public opinion research to address further data gaps | Mener des recherches supplémentaires sur l'opinion publique pour combler d'autres lacunes dans les données |
| C05.3.18 | Publish additional Canada Pension Plan Disability datasets on the Open Government Portal | Publier d'autres jeux de données sur le Programme de prestations d'invalidité du Canada sur le Portail du gouvernement ouvert |

**Extras for: C01.1.1**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-12 |
| Deadline (English) | By 2023 |
| Deadline (French) | D'ici 2023 |
| Lead Department | nrcan-rncan |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C01.1.2**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-12 |
| Deadline (English) | By 2023 |
| Deadline (French) | D'ici 2023 |
| Lead Department | nrcan-rncan |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C01.1.3**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-12 |
| Deadline (English) | By 2023 |
| Deadline (French) | D'ici 2023 |
| Lead Department | nrcan-rncan |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C01.2.1**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-06 |
| Deadline (English) | By June 2024 |
| Deadline (French) | D'ici juin 2024 |
| Lead Department | statcan |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C01.2.2**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-12 |
| Deadline (English) | By 2022 |
| Deadline (French) | D'ici 2022 |
| Lead Department | statcan |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C01.2.3**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-06 |
| Deadline (English) | By June 2024 |
| Deadline (French) | D'ici juin 2024 |
| Lead Department | statcan |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C01.3.1**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-06 |
| Deadline (English) | By June 2022 |
| Deadline (French) | D'ici juin 2022 |
| Lead Department | ec |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C01.3.2**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-06 |
| Deadline (English) | By June 2022 for reporting year 2022, and June 2023 for reporting year 2023 |
| Deadline (French) | D'ici juin 2022 pour le rapport de 2022, et juin 2023 pour le rapport de 2023 |
| Lead Department | ec |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C01.3.3**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | By December 2024 |
| Deadline (French) | D'ici décembre 2024 |
| Lead Department | idrc-crdi |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C01.3.4**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-03 |
| Deadline (English) | By March 2023 |
| Deadline (French) | D'ici mars 2023 |
| Lead Department | idrc-crdi |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C01.4.1**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-03 |
| Deadline (English) | By March 2023 |
| Deadline (French) | D'ici mars 2023 |
| Lead Department | ec |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C01.4.2**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-03 |
| Deadline (English) | By March 2023 |
| Deadline (French) | D'ici mars 2023 |
| Lead Department | ec |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C01.4.3**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-03 |
| Deadline (English) | By March 2023 |
| Deadline (French) | D'ici mars 2023 |
| Lead Department | ec |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C02.1.01**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-03 |
| Deadline (English) | By March 2023 |
| Deadline (French) | D'ici mars 2023 |
| Lead Department | pch |
| Summit for Democracy | True |

**Extras for: C02.1.02**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-03 |
| Deadline (English) | By March 2023 |
| Deadline (French) | D'ici mars 2023 |
| Lead Department | pch |
| Summit for Democracy | True |

**Extras for: C02.1.03**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-02 |
| Deadline (English) | By February 2022 and February 2023 |
| Deadline (French) | D'ici février 2022 et février 2023 |
| Lead Department | pch |
| Summit for Democracy | True |

**Extras for: C02.1.04**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-03 |
| Deadline (English) | By March 2024 |
| Deadline (French) | D'ici mars 2024 |
| Lead Department | pch |
| Summit for Democracy | True |

**Extras for: C02.1.05**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-03 |
| Deadline (English) | By March 2024 |
| Deadline (French) | D'ici mars 2024 |
| Lead Department | pch |
| Summit for Democracy | True |

**Extras for: C02.1.06**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-03 |
| Deadline (English) | By March 2023 |
| Deadline (French) | D'ici mars 2023 |
| Lead Department | pch |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C02.1.07**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-12 |
| Deadline (English) | By December 2022 |
| Deadline (French) | D'ici décembre 2022 |
| Lead Department | pch |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C02.1.08**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-03 |
| Deadline (English) | By March 2023 |
| Deadline (French) | D'ici mars 2023 |
| Lead Department | pch |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C02.1.09**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-12 |
| Deadline (English) | By December 2022 |
| Deadline (French) | D'ici décembre 2022 |
| Lead Department | dfatd-maecd |
| Summit for Democracy | True |

**Extras for: C02.1.10**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-09 |
| Deadline (English) | By September 2022 |
| Deadline (French) | D'ici septembre 2022 |
| Lead Department | ps-sp |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C02.1.11**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-06 |
| Deadline (English) | By June 2022 |
| Deadline (French) | D'ici juin 2022 |
| Lead Department | ps-sp |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C02.2.1**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-05 |
| Deadline (English) | By May 2022 |
| Deadline (French) | D'ici mai 2022 |
| Lead Department | dfatd-maecd |
| Summit for Democracy | True |

**Extras for: C02.2.2**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-11 |
| Deadline (English) | By fall 2022 |
| Deadline (French) | D'ici l'automne 2022 |
| Lead Department | pco-bcp |
| Summit for Democracy | True |

**Extras for: C02.2.3**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-11 |
| Deadline (English) | By fall 2022 |
| Deadline (French) | D'ici l'automne 2022 |
| Lead Department | pco-bcp |
| Summit for Democracy | True |

**Extras for: C02.2.4**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-11 |
| Deadline (English) | By fall 2022 |
| Deadline (French) | D'ici l'automne 2022 |
| Lead Department | pco-bcp |
| Summit for Democracy | True |

**Extras for: C02.2.5**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-11 |
| Deadline (English) | By fall 2022 |
| Deadline (French) | D'ici l'automne 2022 |
| Lead Department | pco-bcp |
| Summit for Democracy | True |

**Extras for: C02.2.6**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-03 |
| Deadline (English) | By fiscal year 2023-24 |
| Deadline (French) | D'ici l'exercice 2023-2024 |
| Lead Department | dfatd-maecd |
| Summit for Democracy | True |

**Extras for: C02.2.7**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-12 |
| Deadline (English) | By December 2022 |
| Deadline (French) | D'ici décembre 2022 |
| Lead Department | dfatd-maecd |
| Summit for Democracy | True |

**Extras for: C02.3.1**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-11 |
| Deadline (English) | By fall 2022 |
| Deadline (French) | D'ici l'automne 2022 |
| Lead Department | pco-bcp |
| Summit for Democracy | True |

**Extras for: C02.3.2**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-11 |
| Deadline (English) | By fall 2022 |
| Deadline (French) | D'ici l'automne 2022 |
| Lead Department | pco-bcp |
| Summit for Democracy | True |

**Extras for: C02.3.3**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-12 |
| Deadline (English) | By December 2022 |
| Deadline (French) | D'ici décembre 2022 |
| Lead Department | wage |
| Summit for Democracy | True |

**Extras for: C02.4.1**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-12 |
| Deadline (English) | By December 2022 |
| Deadline (French) | D'ici décembre 2022 |
| Lead Department | dfatd-maecd |
| Summit for Democracy | True |

**Extras for: C02.4.2**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-05 |
| Deadline (English) | By spring 2022 |
| Deadline (French) | D'ici le printemps 2022 |
| Lead Department | idrc-crdi |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C02.4.3**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-05 |
| Deadline (English) | By spring 2022 |
| Deadline (French) | D'ici le printemps 2022 |
| Lead Department | idrc-crdi |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C02.4.4**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-06 |
| Deadline (English) | By June 2022 |
| Deadline (French) | D'ici juin 2022 |
| Lead Department | idrc-crdi |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C02.4.5**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-12 |
| Deadline (English) | By December 2022 |
| Deadline (French) | D'ici décembre 2022 |
| Lead Department | idrc-crdi |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C03.1.1**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-12 |
| Deadline (English) | By December 2023 |
| Deadline (French) | D'ici décembre 2023 |
| Lead Department | ic |
| Summit for Democracy | True |

**Extras for: C03.1.2**

| Extra Value |   |
| --- | --- |
| Due Date | TODO - supply value (must be one of reporting_period values) |
| Deadline (English) | By December 2023 |
| Deadline (French) | D'ici décembre 2023 |
| Lead Department | ic |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C03.1.3**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-12 |
| Deadline (English) | By December 2023 |
| Deadline (French) | D'ici décembre 2023 |
| Lead Department | ic |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C03.2.1**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-12 |
| Deadline (English) | By December 2023 |
| Deadline (French) | D'ici décembre 2023 |
| Lead Department | ic |
| Summit for Democracy | True |

**Extras for: C03.2.2**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-12 |
| Deadline (English) | By December 2023 |
| Deadline (French) | D'ici décembre 2023 |
| Lead Department | ic |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C03.3.1**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-06 |
| Deadline (English) | By June 2024 |
| Deadline (French) | D'ici juin 2024 |
| Lead Department | tbs-sct |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C03.3.2**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-06 |
| Deadline (English) | By June 2024 |
| Deadline (French) | D'ici juin 2024 |
| Lead Department | tbs-sct |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.1.1**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-02 |
| Deadline (English) | By February 2022 |
| Deadline (French) | D'ici février 2022 |
| Lead Department | jus |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.1.2**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-05 |
| Deadline (English) | By spring 2022 |
| Deadline (French) | D'ici le printemps 2022 |
| Lead Department | jus |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.1.3**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | Annually |
| Deadline (French) | Chaque année |
| Lead Department | jus |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.1.4**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | Annually |
| Deadline (French) | Chaque année |
| Lead Department | jus |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.1.5**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-05 |
| Deadline (English) | May 2023 and ongoing |
| Deadline (French) | Mai 2023 et en cours |
| Lead Department | rcmp-grc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.2.1**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-06 |
| Deadline (English) | By June 2022 |
| Deadline (French) | D'ici juin 2022 |
| Lead Department | jus |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.2.2**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | Ongoing |
| Deadline (French) | En cours |
| Lead Department | jus |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.2.3**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | Ongoing |
| Deadline (French) | En cours |
| Lead Department | jus |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.3.1**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | Ongoing |
| Deadline (French) | En cours |
| Lead Department | jus |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.3.2**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | Ongoing |
| Deadline (French) | En cours |
| Lead Department | jus |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.3.3**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-08 |
| Deadline (English) | By Summer 2023 |
| Deadline (French) | D'ici l'été 2023 |
| Lead Department | jus |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.3.4**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-05 |
| Deadline (English) | By May 2022 |
| Deadline (French) | D'ici mai 2022 |
| Lead Department | jus |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.3.5**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | Ongoing |
| Deadline (French) | En cours |
| Lead Department | jus |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.3.6**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | Ongoing |
| Deadline (French) | En cours |
| Lead Department | jus |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.4.1**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | Ongoing |
| Deadline (French) | En cours |
| Lead Department | jus |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.4.2**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-05 |
| Deadline (English) | By spring 2022 |
| Deadline (French) | D'ici le printemps 2022 |
| Lead Department | jus |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.4.3**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | Ongoing |
| Deadline (French) | En cours |
| Lead Department | jus |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.4.4**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | Ongoing |
| Deadline (French) | En cours |
| Lead Department | jus |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.5.1**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-09 |
| Deadline (English) | By September 2022 |
| Deadline (French) | D'ici septembre 2022 |
| Lead Department | rcmp-grc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.5.2**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-08 |
| Deadline (English) | Ongoing |
| Deadline (French) | En cours |
| Lead Department | rcmp-grc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.5.3**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-08 |
| Deadline (English) | Ongoing |
| Deadline (French) | En cours |
| Lead Department | rcmp-grc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C04.5.4**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-08 |
| Deadline (English) | Ongoing |
| Deadline (French) | En cours |
| Lead Department | rcmp-grc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.1.1**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-12 |
| Deadline (English) | By end of 2022 |
| Deadline (French) | D'ici la fin de 2022 |
| Lead Department | tbs-sct |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.1.2**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-12 |
| Deadline (English) | By 2023 |
| Deadline (French) | D'ici 2023 |
| Lead Department | tbs-sct |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.1.3**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-12 |
| Deadline (English) | By end of 2022 |
| Deadline (French) | D'ici la fin de 2022 |
| Lead Department | tbs-sct |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.1.4**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-08 |
| Deadline (English) | By Summer 2023 |
| Deadline (French) | D'ici l'été 2023 |
| Lead Department | tbs-sct |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.1.5**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-12 |
| Deadline (English) | By end of 2022 |
| Deadline (French) | D'ici la fin de 2022 |
| Lead Department | tbs-sct |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.1.6**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-12 |
| Deadline (English) | By end of 2022 |
| Deadline (French) | D'ici la fin de 2022 |
| Lead Department | tbs-sct |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.2.01**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | By 2024 |
| Deadline (French) | D'ici 2024 |
| Lead Department | tbs-sct |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.2.02**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | By 2024 |
| Deadline (French) | D'ici 2024 |
| Lead Department | tbs-sct |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.2.03**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | By 2024 |
| Deadline (French) | D'ici 2024 |
| Lead Department | tbs-sct |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.2.04**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | By 2024 |
| Deadline (French) | D'ici 2024 |
| Lead Department | tbs-sct |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.2.05**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | By 2024 |
| Deadline (French) | D'ici 2024 |
| Lead Department | tbs-sct |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.2.06**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | By 2024 |
| Deadline (French) | D'ici 2024 |
| Lead Department | tbs-sct |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.2.07**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-03 |
| Deadline (English) | By March 2023 |
| Deadline (French) | D'ici mars 2023 |
| Lead Department | nrcan-rncan |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.2.08**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | By 2024 |
| Deadline (French) | D'ici 2024 |
| Lead Department | isc-sac |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.2.09**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | By 2024 |
| Deadline (French) | D'ici 2024 |
| Lead Department | hc-sc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.2.10**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-05 |
| Deadline (English) | By spring 2022 |
| Deadline (French) | D'ici le printemps 2022 |
| Lead Department | idrc-crdi |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.2.11**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-10 |
| Deadline (English) | By October 2022 |
| Deadline (French) | D'ici octobre 2022 |
| Lead Department | idrc-crdi |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.2.12**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-12 |
| Deadline (English) | By December 2022 |
| Deadline (French) | D'ici décembre 2022 |
| Lead Department | idrc-crdi |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.2.13**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-06 |
| Deadline (English) | By June 2023 |
| Deadline (French) | D'ici juin 2023 |
| Lead Department | idrc-crdi |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.2.14**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-12 |
| Deadline (English) | By December 2023 |
| Deadline (French) | D'ici décembre 2023 |
| Lead Department | wage |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.3.01**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | Ongoing |
| Deadline (French) | En cours |
| Lead Department | esdc-edsc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.3.02**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-03 |
| Deadline (English) | By March 2023 |
| Deadline (French) | D'ici mars 2023 |
| Lead Department | esdc-edsc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.3.03**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-03 |
| Deadline (English) | By March 2024 |
| Deadline (French) | D'ici mars 2024 |
| Lead Department | esdc-edsc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.3.04**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | Completion by March 2025; report initial progress by 2024 |
| Deadline (French) | Achèvement d'ici mars 2025; rapport sur les progrès initiaux réalisés d'ici 2024 |
| Lead Department | esdc-edsc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.3.05**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | Completion by March 2026; report initial progress by 2024 |
| Deadline (French) | Achèvement d'ici mars 2026; rapport sur les progrès initiaux réalisés d'ici 2024 |
| Lead Department | esdc-edsc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.3.06**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | Ongoing |
| Deadline (French) | En cours |
| Lead Department | esdc-edsc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.3.07**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-09 |
| Deadline (English) | By September 2022 |
| Deadline (French) | D'ici septembre 2022 |
| Lead Department | esdc-edsc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.3.08**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-10 |
| Deadline (English) | By October 2023 |
| Deadline (French) | D'ici octobre 2023 |
| Lead Department | esdc-edsc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.3.09**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-10 |
| Deadline (English) | Ongoing |
| Deadline (French) | En cours |
| Lead Department | esdc-edsc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.3.10**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | Ongoing |
| Deadline (French) | En cours |
| Lead Department | esdc-edsc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.3.11**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-09 |
| Deadline (English) | By September 2023 |
| Deadline (French) | D'ici septembre 2023 |
| Lead Department | esdc-edsc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.3.12**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-08 |
| Deadline (English) | By Summer 2023 |
| Deadline (French) | D'ici l'été 2023 |
| Lead Department | esdc-edsc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.3.13**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-11 |
| Deadline (English) | By fall 2023 |
| Deadline (French) | D'ici l'automne 2023 |
| Lead Department | esdc-edsc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.3.14**

| Extra Value |   |
| --- | --- |
| Due Date | 2024-12 |
| Deadline (English) | Ongoing |
| Deadline (French) | En cours |
| Lead Department | esdc-edsc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.3.15**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-03 |
| Deadline (English) | By March 2022 |
| Deadline (French) | D'ici mars 2022 |
| Lead Department | esdc-edsc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.3.16**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-03 |
| Deadline (English) | By March 2022 |
| Deadline (French) | D'ici mars 2022 |
| Lead Department | esdc-edsc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.3.17**

| Extra Value |   |
| --- | --- |
| Due Date | 2022-12 |
| Deadline (English) | By December 2022 |
| Deadline (French) | D'ici décembre 2022 |
| Lead Department | esdc-edsc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

**Extras for: C05.3.18**

| Extra Value |   |
| --- | --- |
| Due Date | 2023-12 |
| Deadline (English) | By December 2023 |
| Deadline (French) | D'ici décembre 2023 |
| Lead Department | esdc-edsc |
| Summit for Democracy | TODO - supply value (must be "true" or "false") |

### 1-5 Status

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Status |
| Field Name FR | État |
| ID | status |
| Description EN | Indicate the current status of the commitment |
| Description FR | Indiquer l'état actuel de l'engagement |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | SP |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| NS | Not started | Non commencé |
| LP | Limited progress | Progrès limité |
| SP | Substantial progress | Progrès important |
| C | Complete | Réalisé |

### 1-6 Progress during previous quarter (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Progress during previous quarter (English) |
| Field Name FR | Progrès au cours du trimestre précédent (anglais) |
| ID | progress_en |
| Description EN | 1-3 bullets outlining progress made during the most recent quarter. If no progress has been made, please write "NIL" |
| Description FR | 1-3 balles décrivant les progrès réalisés au cours du dernier trimestre. Si aucun progrès n'a été réalisé, veuillez écrire "NIL" |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | - Open government learning materials for teachers have been drafted<br>- Initiating call for proposals to find contractor who can ensure materials are presented in a useful format for teachers and educators |

### 1-7 Progress during previous quarter (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Progress during previous quarter (French) |
| Field Name FR | Progrès au cours du trimestre précédent (français) |
| ID | progress_fr |
| Description EN | 1-3 bullets outlining progress made during the most recent quarter. If no progress has been made, please write "NUL" |
| Description FR | 1-3 balles décrivant les progrès réalisés au cours du dernier trimestre. Si aucun progrès n'a été réalisé, veuillez écrire "NUL" |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | - Des matériels d'apprentissage sur le gouvernement ouvert pour les enseignants ont été rédigés<br>- Lancer un appel à propositions pour trouver un contractant capable de garantir que le matériel est présenté dans un format utile pour les enseignants et les éducateurs. |

### 1-8 Evidence of progress (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Evidence of progress (English) |
| Field Name FR | Preuve de progrès (anglais) |
| ID | evidence_en |
| Description EN | Any supporting evidence to demonstrate the progress you have made. This could include websites, links to documents, or other information. |
| Description FR | Toute preuve à l'appui pour démontrer les progrès que vous avez accomplis. Cela peut inclure des sites Web, des liens vers des documents ou d'autres informations. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Materials are still being drafted and not yet available publicly |

### 1-9 Evidence of progress (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Evidence of progress (French) |
| Field Name FR | Preuve de progrès (français) |
| ID | evidence_fr |
| Description EN | Any supporting evidence to demonstrate the progress you have made. This could include websites, links to documents, or other information. |
| Description FR | Toute preuve à l'appui pour démontrer les progrès que vous avez accomplis. Cela peut inclure des sites Web, des liens vers des documents ou d'autres informations. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Le matériel est toujours en cours de rédaction et n'est pas encore disponible publiquement |

### 1-10 Challenges (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Challenges (English) |
| Field Name FR | Défis (anglais) |
| ID | challenges_en |
| Description EN | Describe any challenges faced |
| Description FR | Décrivez les défis rencontrés |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | What sorts of open government learning materials would you like to see? Which formats are most useful for learning purposes? |

### 1-11 Challenges (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Challenges (French) |
| Field Name FR | Défis (français) |
| ID | challenges_fr |
| Description EN | Describe any challenges faced |
| Description FR | Décrivez les défis rencontrés |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Quels types de matériels d'apprentissage du gouvernement ouvert aimeriez-vous voir? Quels formats sont les plus utiles à des fins d'apprentissage? |


---

# Data Element Profile: 6th National Action Plan on Open Government Tracker

_Source YAML: `nap6.yaml`_

## [Legend](#legend)

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

## [6th National Action Plan on Open Government Tracker](#6th-national-action-plan-on-open-government-tracker)

### 1-1 Reporting Period

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reporting Period |
| Field Name FR | Période de déclaration |
| ID | reporting_period |
| Description EN | Year and month of the update |
| Description FR | Année et mois de la mise à jour |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | 2025-12 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| 2025-12 | 2025-12 | 2025-12 |
| 2026-06 | 2026-06 | 2026-06 |
| 2026-12 | 2026-12 | 2026-12 |
| 2027-06 | 2027-06 | 2027-06 |
| 2027-12 | 2027-12 | 2027-12 |
| 2028-06 | 2028-06 | 2028-06 |
| 2028-12 | 2028-12 | 2028-12 |
| 2029-06 | 2029-06 | 2029-06 |
| 2029-12 | 2029-12 | 2029-12 |

### 1-2 Commitments

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Commitments |
| Field Name FR | Engagements |
| ID | commitments |
| Description EN | The 4 commitments in the 2025-2029 National Action Plan on Open Government |
| Description FR | Les 4 engagements dans le Plan d'action national du Canada pour un gouvernement ouvert de 2025-2029 |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | C01 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| C01 | Inclusive and meaningful public participation | Participation inclusive et significative |
| C02 | Protecting civic space and democracy in the digital era | Protection de l'espace civique et de la démocratie à l'ère du numérique |
| C03 | Anti-corruption, public confidence, and corporate transparency | Lutte contre la corruption, confiance du public et transparence organisationnelle |
| C04 | Designing inclusive government programs and services | Conception de programmes et de services gouvernementaux inclusifs |

### 1-3 Milestones

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Milestones |
| Field Name FR | Jalons |
| ID | milestones |
| Description EN | This list contains milestones that correspond to the chosen commitment |
| Description FR | Cette liste contient des jalons correspondant à l'engagement choisi |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | C01.1 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| C01.1 | Establish a multi-collaborator forum at the RCMP, made up of people from non-governmental organizations; other government departments; the private sector; academia; and community representatives, including Indigenous people, 2SLBGTQIA+ people and youth to discuss priorities and areas of focus for openness and transparency in the RCMP. | Établir un Forum multi-intervenants au sein de la GRC qui serait composé de représentants d'organisations non gouvernementales, d'autres ministères, du secteur privé, des universités et de communautés, y compris des représentants autochtones, des personnes faisant partie de la communauté 2ELGBTQQIA+ et des jeunes, pour discuter des priorités et des domaines d'intérêt en matière d'ouverture et de transparence à la GRC. |
| C01.2 | Establish a feedback loop using an enterprise-wide consultation platform to gather input from racialized communities on the methods the RCMP's Hate Crimes Task Force is recommending to provincial and municipal law enforcement. | Mettre en place une boucle de rétroaction au moyen d'une plateforme de consultation pangouvernementale permettant de recueillir les commentaires des communautés racisées sur les méthodes que le Groupe de travail sur les crimes haineux de la GRC recommande aux organismes provinciaux et municipaux d'application de la loi. |
| C01.3 | Contribute to Working Group on Indigenous Data Sovereignty | Participer au Groupe de travail sur la souveraineté des Autochtones en matière de données. |
| C01.4 | Increase public participation through a maturity model framework | Accroître la participation du public au moyen d'un cadre de modèle de maturité. |
| C01.5 | Foster meaningful public engagement throughout the federal science ecosystem by reducing barriers to the integration and promotion of citizen-science methods across the Government of Canada | Favoriser une participation significative du public dans l'ensemble de l'écosystème scientifique fédéral en réduisant les obstacles à l'intégration et à la promotion des méthodes de science citoyenne à l'échelle du gouvernement du Canada. |
| C01.6 | Proactively address Indigenous organizations' data needs, when feasible, to improve efficiency and increase transparency | Dans la mesure du possible, combler de façon proactive les besoins en données des organisations autochtones afin d'accroître l'efficacité et la transparence. |
| C01.7 | Establish an internal working group at VAC to identify and act on opportunities to promote open government at VAC | Former un groupe de travail interne au sein d'ACC chargé de cerner et de mettre en oeuvre les occasions de promouvoir le gouvernement ouvert dans ACC. |
| C02.1 | Establish an organization-wide approach to conducting public participation activities with Canadian communities. Engage with communities on a wide variety of topics and encourage feedback at multiple levels to demonstrate the RCMP's commitment to the principles in the Government of Canada (GC) Digital Standards: Playbook | Mettre en place une approche pangouvernementale pour la réalisation d'activités de participation publique auprès des communautés canadiennes. Mobiliser les communautés sur un grand nombre de sujets et encourager la rétroaction à plusieurs niveaux pour démontrer l'engagement de la GRC envers les principes figurant dans les Normes relatives au numérique du gouvernement du Canada : Directives. |
| C02.2 | Improve the effectiveness of the Digital Citizen | Accroître l'efficacité de l'Initiative de citoyenneté numérique. |
| C02.3 | Increase Canadians' access to government information | Accroître l'accès des Canadiens à l'information gouvernementale. |
| C03.1 | Disclose crime occurrence data and calls for service received through the Police Reporting and Occurrence System (PROS) | Communiquer les données sur les crimes commis et les appels de service reçus par l'intermédiaire du Système d'incidents et de rapports de police. |
| C03.2 | Consolidate key data from the Creative Export Strategy into one user-friendly interface that is interactive and accessible | Regrouper les données clés de la Stratégie d'exportation créative en une seule interface conviviale, interactive et accessible. |
| C03.3 | Publish a Government of Canada Artificial Intelligence (AI) Register that would include information about what and how data is being used, how the AI model was trained, and what quality assurance, accountability, success metrics, bias identification and mitigation, and privacy and security measures are in place | Publier un registre de l'intelligence artificielle (IA) du gouvernement du Canada qui contiendrait des renseignements sur les données qui sont utilisées et la façon dont celles-ci sont utilisées, sur la façon dont le modèle d'IA a été entraîné, ainsi que sur l'assurance de la qualité, la responsabilisation, les indicateurs de réussite, la détermination et l'atténuation des préjugés, et les mesures de sécurité et de protection de la vie privée en place. |
| C03.4 | Advance trust and transparency for the Government of Canada's human resources (HR) and pay transformation | Accroître la confiance et la transparence par rapport à la transformation des ressources humaines (RH) et de la paye du gouvernement du Canada. |
| C04.1 | Align the "open-by- default" and "secure-by- design" approaches to advance Indigenous and information sovereignty and limit legislative barriers through proactive disclosure to facilitate greater information sharing with Indigenous communities | Harmoniser les approches d'« ouverture par défaut » et de « sécurité dès la conception » afin de faire progresser la souveraineté autochtone et en matière d'information, et de limiter les obstacles législatifs au moyen de la communication proactive afin de faciliter un meilleur échange d'information avec les communautés autochtones. |
| C04.2 | Develop a targeted learning series on open data for use by federal public servants | Préparer un programme d'apprentissage ciblé sur les données ouvertes à l'intention des fonctionnaires fédéraux. |
| C04.3 | Monitor Canadians' experiences with serious legal problems and enhance the Department of Justice Canada's understanding of effective responses using findings from the National Justice Survey and Serious Legal Problems in Canada<br>Publish findings from the National Justice Survey and from Statistics Canada's Canadian Legal Problems Survey (CLPS), in user-friendly formats (for example, infographics or a simple dashboard).<br>Use the National Justice Survey data to inform decision-making both by the Department of Justice Canada and by key external stakeholders. | Faire le suivi de l'expérience des Canadiens aux prises avec des problèmes juridiques graves et approfondir la compréhension qu'a le ministère de la Justice Canada des réponses efficaces, en s'appuyant sur les résultats du Sondage national sur la justice et de l'Enquête canadienne sur les problèmes juridiques.<br>Publier les résultats du Sondage national sur la justice et de l'Enquête canadienne sur les problèmes juridiques de Statistique Canada dans des formats conviviaux (par exemple, infographies ou tableau de bord simple).<br>Utiliser les données du Sondage national sur la justice pour éclairer le processus décisionnel du ministère de la Justice Canada et des principaux intervenants externes. |
| C04.4 | Update Justice Canada's State of the Criminal Justice System Dashboard and pursue the automation of updates to support easier dissemination of data to the public.<br>Explore, in collaboration with key partners, the possibility of expanding the indicators in the Department of Justice Canada's State of the Criminal Justice System dashboard to include available disaggregated data related to court delays and other key justice system issues. | Mettre à jour le Tableau de bord sur l'état du système de justice pénale du ministère de la Justice Canada et automatiser les mises à jour pour faciliter la diffusion des données au public.<br>Explorer, en collaboration avec les partenaires clés, la possibilité d'élargir les indicateurs du Tableau de bord sur l'état du système de justice pénale du ministère de la Justice Canada pour y inclure les données désagrégées disponibles concernant les retards judiciaires et d'autres enjeux importants du système de justice. |
| C04.5 | Support the design and delivery of accessible administrative services. | Appuyer la conception et la prestation de services administratifs accessibles. |

### 1-4 Indicators

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Indicators |
| Field Name FR | Indicateurs |
| ID | indicators |
| Description EN | The indicators related to the chosen milestone |
| Description FR | Les indicateurs liés au jalon choisi |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | C01.1.1 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| C01.1.1 | Draft a strategic plan to establish a multi-collaborator forum. The draft strategic plan outlines the role and mandate of, and the context behind, the creation of the consultation body. | Rédiger un plan stratégique pour établir un Forum multi-intervenants. L'ébauche de plan stratégique décrit le rôle et le mandat de l'organisme de consultation, ainsi que le contexte dans lequel il a été créé. |
| C01.1.2 | Conduct a three-week consultation with communities across Canada to gather feedback on the strategic plan. | Mener une consultation de trois semaines auprès de communautés de partout au Canada pour recueillir des commentaires sur le plan stratégique. |
| C01.1.3 | Analyze the feedback received during the consultation period, incorporate it into the final draft of the strategic plan and publish the strategic plan as an open asset (in other words, designed for reuse in future initiatives). | Analyser les commentaires reçus durant la période de consultation, les intégrer à la version finale du plan stratégique et publier le plan stratégique en tant qu'actif ouvert (autrement dit, conçu pour être réutilisé dans des initiatives futures). |
| C01.1.4 | Set up the multi-collaborator forum (that is, decide on nomination criteria, governance structure, engagement approach, and so on). | Mettre en place le Forum multi-intervenants (par exemple, déterminer les critères de mise en candidature, la structure de gouvernance, l'approche en matière d'engagement). |
| C01.1.5 | Secure additional resources for the forum's activities. | Obtenir des ressources supplémentaires pour les activités du Forum. |
| C01.2.1 | Establish an enterprise-wide consultation platform. | Mettre en place une plateforme de consultation pangouvernementale. |
| C01.2.2 | Using the RCMP's public participation framework, incorporate a feedback loop into each consultation. Publish feedback on the Open Government portal. | Intégrer une boucle de rétroaction à chaque consultation au moyen du cadre de participation du public de la GRC. Publier la rétroaction sur le Portail du gouvernement ouvert. |
| C01.2.3 | Increase the percentage of Canadians who respond to the Organisation for Economic Co-operation and Development (OECD) survey on drivers of trust in public institutions from the 2024 baseline of 49%. | Accroître le pourcentage de Canadiens qui répondent à l'enquête de l'Organisation de coopération et de développement économiques sur les déterminants de la confiance dans les institutions publiques par rapport au pourcentage de référence de 2024, soit 49 %. |
| C01.2.4 | Reduce the percentage of ethnically diverse Canadians who report a hate crime or hate- motivated event from the 79% high in 2022. | Réduire le pourcentage de Canadiens de diverses origines ethniques qui signalent un crime haineux ou un événement motivé par la haine par rapport au niveau record de 79 % atteint en 2022. |
| C01.3.1 | Contribute to the government-wide implementation of the Action Plan Measure for Shared Priority 30 of the United Nations Declaration on the Rights of Indigenous Peoples Act. | Contribuer à la mise en oeuvre pangouvernementale de la mesure pour la priorité partagée 30 du Plan d'action de la Loi sur la Déclaration des Nations Unies sur les droits des peuples autochtones. |
| C01.3.2 | Identify concrete steps the Government of Canada can take to advance this approach, including identifying how to leverage each department's mandate. | Déterminer les mesures concrètes que le gouvernement du Canada peut prendre pour faire progresser cette approche, y compris quant à la façon de mettre à profit le mandat de chaque ministère. |
| C01.3.3 | Make meaningful progress on the RCMP's commitments to reconciliation that were outlined by the Truth and Reconciliation Council. | Réaliser des progrès significatifs par rapport aux engagements de la GRC en matière de réconciliation qui ont été présentés par le Conseil national de la réconciliation. |
| C01.4.1 | Publicly launch the Public Participation Maturity Model tool, including launching a webinar, and a presentation at the 2025 Open Government Partnership Summit. | Lancer publiquement l'outil du modèle de maturité pour la participation du public, qui comprend le lancement d'un webinaire et d'une présentation au Sommet du Partenariat pour un gouvernement ouvert 2025. |
| C01.4.2 | Test the maturity model framework through the Maturity Model Pilot Program, which includes two one-year test groups (four to six departments in each) to assess the functionality of the model in different settings. | Mettre à l'essai le cadre de modèle de maturité au moyen du programme pilote du modèle de maturité, qui comprend deux groupes d'essai sur une période d'un an (quatre à six ministères pour chaque groupe) afin d'évaluer la fonctionnalité du modèle dans différents contextes. |
| C01.4.3 | Collect input from two years of the Maturity Model Pilot Program and refine the model based on the evidence collected. | Recueillir les commentaires pendant les deux années du programme pilote du modèle de maturité et peaufiner le modèle en fonction des données probantes recueillies. |
| C01.4.4 | Share reflections and best practices from the pilot program and make recommendations to senior leadership on the future of public participation in the Government of Canada. | Transmettre les réflexions et les pratiques exemplaires qui ont découlé du programme pilote et faire des recommandations à la haute direction sur l'avenir de la participation du public au sein du gouvernement du Canada. |
| C01.5.1 | Develop and advance infrastructure by, for example, building capacity, providing guidance and creating a digital prototype platform, to facilitate dialogue and the successful adoption of participatory research and citizen science in the federal science ecosystem. | Concevoir et consolider l'infrastructure, par exemple, en renforçant les capacités, en fournissant une orientation et en créant une plateforme numérique prototype afin de faciliter le dialogue et d'assurer l'adoption de la recherche participative et de la science citoyenne dans l'écosystème scientifique fédéral. |
| C01.6.1 | Development of a proposal detailing the design, framework and governance structure for a new external portal that will provide controlled, login-based access to unprotected, non-sensitive data assets and datasets for selected Indigenous organizations and governments. | Élaborer une proposition détaillant la conception, le cadre et la structure de gouvernance d'un nouveau portail externe qui offrira un accès contrôlé, avec authentification, à des actifs et ensembles de données non protégés et non sensibles pour certains gouvernements et certaines organisations autochtones. |
| C01.6.2 | Development of a data-sensitivity framework to help identify and categorize non-sensitive data assets that should be proactively shared, including determination of potential data-sharing platforms, in collaboration with Indigenous governments and organizations. | Élaborer un cadre de sensibilité des données pour aider à cerner les actifs de données qui ne sont pas sensibles, et à les catégoriser en conséquence, et qui devraient donc être transmis de façon proactive. Comprend le choix des plateformes potentielles de partage de données, en collaboration avec les gouvernements et les organisations autochtones. |
| C01.6.3 | Identification and prioritization of datasets that should be proactively shared. | Cerner les ensembles de données qui devraient être transmis de façon proactive et établir leur ordre de priorité. |
| C01.7.1 | Invite branches to think about their own holdings and consider what could be made available through the Open Government Portal in an accessible format. | Inviter les directions générales à réfléchir à leurs propres données et à ce qu'elles pourraient publier dans un format accessible par l'intermédiaire du Portail du gouvernement ouvert. |
| C01.7.2 | Encourage branches to consider whether the work they are doing will include opportunities to promote accountability and citizen engagement. | Encourager les directions générales à se demander si le travail qu'elles accomplissent comprendra des occasions de promouvoir la responsabilité et l'engagement des citoyens. |
| C01.7.3 | Ensure that twice annually, open government awareness activities are highlighted (once during Open Government Week and once during “Right to Know” week), with the goal of raising awareness at VAC. Success would be measured through participatory activities like employee knowledge challenges. | Veiller à ce que deux fois par année, les activités de sensibilisation à l'égard du gouvernement ouvert soient mises en évidence (une fois dans le cadre de la Semaine du gouvernement ouvert et une fois dans le cadre de la Semaine du droit à l'information), dans le but de mieux faire connaître le gouvernement ouvert au sein d'ACC. Le succès serait évalué au moyen d'activités participatives comme des tests de connaissances à l'intention des employés. |
| C02.1.1 | Publish the RCMP Public Participation Framework and accompanying guidebook. | Publier le cadre de participation du public de la GRC et le guide connexe. |
| C02.1.2 | Promote the framework and guidebook throughout the RCMP to facilitate their adoption and implementation. | Faire la promotion du cadre et du guide dans l'ensemble de la GRC afin de faciliter leur adoption et leur mise en oevreu. |
| C02.1.3 | Create an ethics and personal data tool to ensure that data is collected legally and ethically during public consultations. | Créer un outil d'éthique et de données personnelles pour veiller à ce que les données soient recueillies de manière légale et éthique durant les consultations publiques. |
| C02.2.1 | Prepare a draft paper that assesses progress to date, identifies domestic and international best practices, and lays out potential approaches to strengthen Canadians' resilience to online disinformation. | Préparer une ébauche d'un document qui évalue les progrès réalisés à ce jour, dégage les pratiques exemplaires nationales et internationales et présente des approches possibles pour renforcer la capacité des Canadiens à faire face à la désinformation en ligne. |
| C02.2.2 | Consult on the paper with government and non-government partners. | Consulter les partenaires gouvernementaux et non gouvernementaux au sujet du document. |
| C02.2.3 | Develop a revised knowledge-sharing and communications strategy for the Digital Citizen Initiative. | Élaborer une stratégie révisée de partage des connaissances et de communication pour l'Initiative de citoyenneté numérique. |
| C02.2.4 | Host three events to build capacity and share best practices among researchers and civil society organizations that work in civic engagement and digital media literacy. | Organiser trois événements pour renforcer les capacités et permettre l'échange de pratiques exemplaires entre les chercheurs et les organisations de la société civile qui oeuvrent dans le domaine de l'engagement civique et de la littératie numérique. |
| C02.3.1 | Renew and revise LAC's Access Policy Framework and programs and processes to maximize access to federal records held by LAC. | Renouveler et réviser le Cadre de politique d'accès de BAC ainsi que ses programmes et processus afin de maximiser l'accès aux documents fédéraux détenus par BAC. |
| C02.3.2 | Proactively remove access barriers to GC archival records and have 30% to 50% of the archival GC records held at LAC open and readily available for Canadians to access either in person or online. | Éliminer de façon proactive les obstacles à l'accès aux documents archivés du gouvernement du Canada. Faire en sorte que de 30 % à 50 % des documents archivés du gouvernement du Canada détenus par BAC soient ouverts et facilement accessibles aux Canadiens, en personne ou en ligne. |
| C02.3.3 | Integrate public demand into the prioritization process of federal archival records to be proactively opened and maximize access to those records. | Intégrer la demande du public dans le processus d'établissement de la priorité des documents fédéraux archivés afin qu'ils soient ouverts de façon proactive et d'optimiser l'accès à ces documents. |
| C03.1.1 | Increase transparency at the RCMP by publicly disclosing data and information that demonstrates what evidence warrants an investigation into potential criminal activity. Information disclosed complies with requirements of releasing information about ongoing investigations. | Accroître la transparence au sein de la GRC en publiant publiquement des données et des renseignements qui démontrent les éléments probants justifiant une enquête sur une activité criminelle potentielle. De telles communications sont conformes aux exigences pour la communication de renseignements concernant les enquêtes en cours. |
| C03.1.2 | Increase Canadians' trust in the federal government, which was at 49% in 2023 according to the OECD Surveys on Drivers of Trust in Public Institutions. | Accroître la confiance des Canadiens envers le gouvernement fédéral, qui était de 49 % en 2023 selon l'enquête de l'Organisation de coopération et de développement économiques sur les déterminants de la confiance dans les institutions publiques. |
| C03.1.3 | Provide dashboards on high-level crime statistics and aggregated occurrence maps. | Fournir des tableaux de bord sur les statistiques criminelles globales et des cartes d'événements agrégées. |
| C03.2.1 | Develop interactive and accessible versions of the Creative Export Strategy's data viewer. | Développer des versions interactives et accessibles du visualiseur de données sur la Stratégie d'exportation créative. |
| C03.2.2 | Publish the Creative Export Strategy Interactive Data Viewer on the Canadian Heritage website. | Publier le visualiseur de données interactif sur la Stratégie d'exportation créative dans le site Web de Patrimoine canadien. |
| C03.2.3 | Announce the publication of the data viewer to stakeholders. | Annoncer la publication du visualiseur de données aux intervenants. |
| C03.3.1 | Research to identify existing sources of data, information and good practices from other jurisdictions, researchers and organizations. | Effectuer des recherches pour déterminer les sources existantes de données, de renseignements et de bonnes pratiques provenant d'autres administrations, chercheurs et organisations. |
| C03.3.2 | Publication of minimum viable product (MVP) register using existing data and information. | Publier un registre sur le produit minimum viable au moyen des données et renseignements existants. |
| C03.3.3 | Engagement of internal and external stakeholders to further develop and refine MVP content, format and functionality, and to identify where needed data and information can be sourced. | Mobiliser des intervenants internes et externes afin de poursuivre l'élaboration et le peaufinage du contenu, du format et des fonctionnalités du produit minimum viable ainsi que de déterminer où les données et l'information nécessaires peuvent être obtenues. |
| C03.3.4 | Development and publication of second version of register incorporating user feedback. | Préparer et publier une deuxième version du registre intégrant les commentaires des utilisateurs. |
| C03.4.1 | Foster dialogue with key stakeholders (for example, unions, media and federal public servants) through activities like polling, public opinion research, question-and-answer sessions with senior officials, newsletters, and technical briefings. | Favoriser un dialogue avec les principaux intervenants (par exemple, les syndicats, les médias et les fonctionnaires fédéraux) au moyen d'activités comme des sondages, des recherches sur l'opinion publique, des séances de questions et réponses avec les hauts fonctionnaires, des bulletins et des séances d'information technique. |
| C03.4.2 | PSPC and TBS collaborate to publish internal documents related to HR and pay initiatives, as well as relevant data and findings. Share these documents on the Open Government Portal and promote them through multiple channels to ensure broader access. | SPAC et le SCT collaborent pour publier des documents internes liés aux initiatives de RH et de paye, ainsi que des données et des constatations pertinentes. Diffuser ces documents sur le Portail du gouvernement ouvert et en faire la promotion sur de multiples canaux afin de permettre un plus grand accès. |
| C03.4.3 | Develop and maintain a publicly accessible tracker to monitor progress on key commitments related to HR and pay operations and transformation activities. | Créer et tenir à jour un outil de suivi accessible au public pour surveiller les progrès réalisés par rapport aux principaux engagements liés aux opérations des RH et de la paye et aux activités de transformation. |
| C04.1.1 | Review the processes required for Indigenous people when accessing their data and information held by the RCMP. | Examiner les processus requis pour les peuples autochtones lorsqu'ils accèdent à leurs données et aux renseignements détenus par la GRC. |
| C04.1.2 | Collaborate with Indigenous communities (First Nations, Inuit and Métis communities) to determine what information should be prioritized in the process. | Collaborer avec les communautés autochtones (communautés inuites, métisses et des Premières Nations) pour déterminer les renseignements prioritaires dans le cadre du processus. |
| C04.1.3 | Identify and address key barriers in the process to promote proactive disclosure for Indigenous communities accessing their data. | Cerner et éliminer les principaux obstacles au processus afin de promouvoir la communication proactive pour les communautés autochtones qui accèdent à leurs données. |
| C04.2.1 | Consult stakeholders on the essential content and desired outcomes of a foundational training or learning program for the federal public service on open data. | Consulter les intervenants sur le contenu essentiel et les résultats souhaités relativement à une formation de base ou à un programme d'apprentissage sur les données ouvertes s'adressant à la fonction publique fédérale. |
| C04.2.2 | Co-create the module(s) with civil society and Canada School of Public Service and do user testing. | Créer un ou des modules en collaboration avec la société civile et l'École de la fonction publique du Canada et procéder à des essais par les utilisateurs. |
| C04.2.3 | Publish the module(s) on an appropriate platform. | Publier le ou les modules sur une plateforme appropriée. |
| C04.2.4 | Assess the effectiveness of the update of the module, by soliciting feedback on how to continually improve it. | Évaluer l'efficacité de la mise à jour du module en sollicitant de la rétroaction sur la façon de l'améliorer de manière continue. |
| C04.3.1 | Number of hits on the National Justice Survey results | Nombre de consultations des résultats du Sondage national sur la justice. |
| C04.3.2 | Number of Justice Canada research publications and resources that use National Justice Survey data and are publicly available | Nombre de ressources et de publications de recherche du ministère de la Justice Canada utilisant les données du Sondage national sur la justice et qui sont accessibles au public. |
| C04.3.3 | Provide examples of National Justice Survey data being used to inform decision-making | Fournir des exemples de données du Sondage national sur la justice qui sont utilisées pour éclairer le processus décisionnel. |
| C04.3.4 | Qualitative feedback from key stakeholders on accessibility and usability of the data. | Rétroaction qualitative des intervenants clés sur l'accessibilité et la facilité d'utilisation des données. |
| C04.4.1 | Number of Canada's State of the Criminal Justice System Dashboard indicators that have been automated | Nombre d'indicateurs du Tableau de bord sur l'état du système de justice pénale du Canada qui ont été automatisés. |
| C04.4.2 | Number of hits on Canada's State of the Criminal Justice System Dashboard webpages | Nombre de visites des pages Web du Tableau de bord sur l'état du système de justice pénale du Canada. |
| C04.4.3 | Provide examples of data being used to inform decision-making. | Fournir des exemples de données qui sont utilisées pour éclairer le processus décisionnel. |
| C04.4.4 | Qualitative feedback from key stakeholders on accessibility and usability of the data. | Rétroaction qualitative des intervenants clés sur l'accessibilité et la facilité d'utilisation des données. |
| C04.5.1 | The number of administrative bodies (federal, provincial and territorial) that apply the Access to Justice Index to their operations for an initial assessment. | Nombre d'entités administratives (fédérales, provinciales et territoriales) qui appliquent l'Indice de l'accès à la justice à leurs activités pour une première évaluation. |
| C04.5.2 | The number of administrative bodies that use the index for a further self-assessment to evaluate progress and identify additional improvements. | Nombre d'entités administratives qui utilisent l'Indice pour procéder à une autoévaluation plus poussée visant à évaluer les progrès et à cerner toute amélioration supplémentaire requise. |
| C04.5.3 | Feedback from administrative bodies on the effectiveness of the index as a tool to support more accessible and user-friendly services. | Rétroaction des entités administratives sur l'efficacité de l'Indice comme outil favorisant des services plus accessibles et conviviaux. |
| C04.5.4 | Number of awareness raising activities (for example, webinars, talks at conferences). | Nombre d'activités de sensibilisation (par exemple, webinaires, présentations lors de conférences). |

**Extras for: C01.1.1**

| Extra Value |   |
| --- | --- |
| Deadline (English) | Fall 2027 |
| Deadline (French) | Automne 2027 |
| Lead Department | rcmp-grc |

**Extras for: C01.1.2**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By winter 2025 |
| Deadline (French) | D'ici l'hiver 2025 |
| Lead Department | rcmp-grc |

**Extras for: C01.1.3**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By summer 2025 |
| Deadline (French) | D'ici l'été 2025 |
| Lead Department | rcmp-grc |

**Extras for: C01.1.4**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By fall 2028 |
| Deadline (French) | D'ici l'automne 2028 |
| Lead Department | rcmp-grc |

**Extras for: C01.1.5**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By fall 2028 |
| Deadline (French) | D'ici l'automne 2028 |
| Lead Department | rcmp-grc |

**Extras for: C01.2.1**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By fall 2027 |
| Deadline (French) | D'ici l'automne 2027 |
| Lead Department | rcmp-grc |

**Extras for: C01.2.2**

| Extra Value |   |
| --- | --- |
| Deadline (English) | Ongoing |
| Deadline (French) | Permanent |
| Lead Department | rcmp-grc |

**Extras for: C01.2.3**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By winter 2028 |
| Deadline (French) | D'ici l'hiver 2028 |
| Lead Department | rcmp-grc |

**Extras for: C01.2.4**

| Extra Value |   |
| --- | --- |
| Deadline (English) | Ongoing |
| Deadline (French) | Permanent |
| Lead Department | rcmp-grc |

**Extras for: C01.3.1**

| Extra Value |   |
| --- | --- |
| Deadline (English) | Ongoing |
| Deadline (French) | Permanent |
| Lead Department | rcmp-grc |

**Extras for: C01.3.2**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By end of 2028 |
| Deadline (French) | D'ici la fin de 2028 |
| Lead Department | rcmp-grc |

**Extras for: C01.3.3**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By end of 2028 |
| Deadline (French) | D'ici la fin de 2028 |
| Lead Department | rcmp-grc |

**Extras for: C01.4.1**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By end of 2025 |
| Deadline (French) | D'ici la fin de 2025 |
| Lead Department | tbs-sct |

**Extras for: C01.4.2**

| Extra Value |   |
| --- | --- |
| Deadline (English) | 2026-27 |
| Deadline (French) | 2026‑2027 |
| Lead Department | tbs-sct |

**Extras for: C01.4.3**

| Extra Value |   |
| --- | --- |
| Deadline (English) | 2026-27 |
| Deadline (French) | 2026‑2027 |
| Lead Department | tbs-sct |

**Extras for: C01.4.4**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By end of 2028 |
| Deadline (French) | D'ici la fin de 2028 |
| Lead Department | tbs-sct |

**Extras for: C01.5.1**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By end of 2029 |
| Deadline (French) | D'ici la fin de 2029 |
| Lead Department | pspc-spac,hc-sc |

**Extras for: C01.6.1**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By March 2026 |
| Deadline (French) | D'ici mars 2026 |
| Lead Department | isc-sac |

**Extras for: C01.6.2**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By March 2027 |
| Deadline (French) | D'ici mars 2027 |
| Lead Department | isc-sac |

**Extras for: C01.6.3**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By March 2027 |
| Deadline (French) | D'ici mars 2027 |
| Lead Department | isc-sac |

**Extras for: C01.7.1**

| Extra Value |   |
| --- | --- |
| Deadline (English) | March 2029 |
| Deadline (French) | Mars 2029 |
| Lead Department | vac-acc |

**Extras for: C01.7.2**

| Extra Value |   |
| --- | --- |
| Deadline (English) | March 2029 |
| Deadline (French) | Mars 2029 |
| Lead Department | vac-acc |

**Extras for: C01.7.3**

| Extra Value |   |
| --- | --- |
| Deadline (English) | Annually, by March 31; to be reported as part of VAC's access to information and privacy annual reports |
| Deadline (French) | Chaque année, au plus tard le 31 mars; en rendre compte dans le cadre des rapports annuels d'ACC sur l'accès à l'information et la protection des renseignements personnels |
| Lead Department | vac-acc |

**Extras for: C02.1.1**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By summer 2025 |
| Deadline (French) | D'ici l'été 2025 |
| Lead Department | rcmp-grc |

**Extras for: C02.1.2**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By summer 2025 |
| Deadline (French) | D'ici l'été 2025 |
| Lead Department | rcmp-grc |

**Extras for: C02.1.3**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By summer 2025 |
| Deadline (French) | D'ici l'été 2025 |
| Lead Department | rcmp-grc |

**Extras for: C02.2.1**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By April 2026 |
| Deadline (French) | D'ici avril 2026 |
| Lead Department | pch |

**Extras for: C02.2.2**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By spring 2026 |
| Deadline (French) | D'ici le printemps 2026 |
| Lead Department | pch |

**Extras for: C02.2.3**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By June 2026 |
| Deadline (French) | D'ici juin 2026 |
| Lead Department | pch |

**Extras for: C02.2.4**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By 2026 |
| Deadline (French) | D'ici 2026 |
| Lead Department | pch |

**Extras for: C02.3.1**

| Extra Value |   |
| --- | --- |
| Deadline (English) | 2025 to 2028 |
| Deadline (French) | De 2025 à 2028 |
| Lead Department | lac-bac |

**Extras for: C02.3.2**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By 2029 |
| Deadline (French) | D'ici 2029 |
| Lead Department | lac-bac |

**Extras for: C02.3.3**

| Extra Value |   |
| --- | --- |
| Deadline (English) | 2025 to 2029 |
| Deadline (French) | De 2025 à 2029 |
| Lead Department | lac-bac |

**Extras for: C03.1.1**

| Extra Value |   |
| --- | --- |
| Deadline (English) | Ongoing |
| Deadline (French) | Permanent |
| Lead Department | rcmp-grc |

**Extras for: C03.1.2**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By winter 2028 |
| Deadline (French) | D'ici l'hiver 2028 |
| Lead Department | rcmp-grc |

**Extras for: C03.1.3**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By fall 2027 |
| Deadline (French) | D'ici l'automne 2027 |
| Lead Department | rcmp-grc |

**Extras for: C03.2.1**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By summer 2025 |
| Deadline (French) | D'ici l'été 2025 |
| Lead Department | pch |

**Extras for: C03.2.2**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By fall 2025 |
| Deadline (French) | D'ici l'automne 2025 |
| Lead Department | pch |

**Extras for: C03.2.3**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By fall 2025 |
| Deadline (French) | D'ici l'automne 2025 |
| Lead Department | pch |

**Extras for: C03.3.1**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By fall 2025 |
| Deadline (French) | D'ici l'automne 2025 |
| Lead Department | tbs-sct |

**Extras for: C03.3.2**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By November 2025 |
| Deadline (French) | D'ici novembre 2025 |
| Lead Department | tbs-sct |

**Extras for: C03.3.3**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By early 2026 |
| Deadline (French) | D'ici le début de 2026 |
| Lead Department | tbs-sct |

**Extras for: C03.3.4**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By end of 2026 |
| Deadline (French) | D'ici la fin de 2026 |
| Lead Department | tbs-sct |

**Extras for: C03.4.1**

| Extra Value |   |
| --- | --- |
| Deadline (English) | Ongoing, annually |
| Deadline (French) | Permanent, chaque année |
| Lead Department | pspc-spac |

**Extras for: C03.4.2**

| Extra Value |   |
| --- | --- |
| Deadline (English) | Ongoing, annually |
| Deadline (French) | Permanent, chaque année |
| Lead Department | pspc-spac |

**Extras for: C03.4.3**

| Extra Value |   |
| --- | --- |
| Deadline (English) | Updated monthly internally to reflect progress and published quarterly to the [Integrated strategy for human resources and pay webpage](https://www.canada.ca/en/public-services-procurement/services/pay-pension/pay-administration/integrated-strategy-human-resources-pay.html).<br>Updated annually to reflect new commitments. |
| Deadline (French) | Effectuer une mise à jour à l'interne chaque mois pour refléter les progrès et procéder à une publication trimestrielle sur [la page Web Stratégie intégrée en matière de ressources humaines et de paye](https://www.canada.ca/fr/services-publics-approvisionnement/services/paye-pension/administration-paye/strategie-integree-ressources-humaines-salaire.html).<br>Procéder à une mise à jour annuelle pour refléter les nouveaux engagements. |
| Lead Department | pspc-spac |

**Extras for: C04.1.1**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By end of 2028 |
| Deadline (French) | D'ici la fin de 2028 |
| Lead Department | rcmp-grc |

**Extras for: C04.1.2**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By end of 2028 |
| Deadline (French) | D'ici la fin de 2028 |
| Lead Department | rcmp-grc |

**Extras for: C04.1.3**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By end of 2028 |
| Deadline (French) | D'ici la fin de 2028 |
| Lead Department | rcmp-grc |

**Extras for: C04.2.1**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By December 2026 |
| Deadline (French) | D'ici décembre 2026 |
| Lead Department | tbs-sct |

**Extras for: C04.2.2**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By December 2027 |
| Deadline (French) | D'ici décembre 2027 |
| Lead Department | tbs-sct |

**Extras for: C04.2.3**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By December 2028 |
| Deadline (French) | D'ici décembre 2028 |
| Lead Department | tbs-sct |

**Extras for: C04.2.4**

| Extra Value |   |
| --- | --- |
| Deadline (English) | By December 2029 |
| Deadline (French) | D'ici décembre 2029 |
| Lead Department | tbs-sct |

**Extras for: C04.3.1**

| Extra Value |   |
| --- | --- |
| Deadline (English) | Biannually until 2029 |
| Deadline (French) | Deux fois par année jusqu'en 2029 |
| Lead Department | jus |

**Extras for: C04.3.2**

| Extra Value |   |
| --- | --- |
| Deadline (English) | Biannually until 2029 |
| Deadline (French) | Deux fois par année jusqu'en 2029 |
| Lead Department | jus |

**Extras for: C04.3.3**

| Extra Value |   |
| --- | --- |
| Deadline (English) | Feedback will be compiled in March 2027 and at the end of the commitment and published in a report. |
| Deadline (French) | La rétroaction sera compilée en mars 2027 ainsi qu'à la fin de l'engagement et publiée dans un rapport. |
| Lead Department | jus |

**Extras for: C04.3.4**

| Extra Value |   |
| --- | --- |
| Deadline (English) | Feedback will be compiled in March 2027 and at the end of the commitment and published in a report. |
| Deadline (French) | La rétroaction sera compilée en mars 2027 ainsi qu'à la fin de l'engagement et publiée dans un rapport |
| Lead Department | jus |

**Extras for: C04.4.1**

| Extra Value |   |
| --- | --- |
| Deadline (English) | Biannually until 2029 |
| Deadline (French) | Deux fois par année jusqu'en 2029 |
| Lead Department | jus |

**Extras for: C04.4.2**

| Extra Value |   |
| --- | --- |
| Deadline (English) | Biannually until 2029 |
| Deadline (French) | Deux fois par année jusqu'en 2029 |
| Lead Department | jus |

**Extras for: C04.4.3**

| Extra Value |   |
| --- | --- |
| Deadline (English) | Examples will be compiled in March 2027 and at the end of the commitment and shared via public report. |
| Deadline (French) | Les exemples seront compilés en mars 2027 ainsi qu'à la fin de l'engagement et publiés dans un rapport public |
| Lead Department | jus |

**Extras for: C04.4.4**

| Extra Value |   |
| --- | --- |
| Deadline (English) | Feedback will be compiled in March 2027 and at the end of the commitment and shared via public report. |
| Deadline (French) | La rétroaction sera compilée en mars 2027 ainsi qu'à la fin de l'engagement et publiée dans un rapport public |
| Lead Department | jus |

**Extras for: C04.5.1**

| Extra Value |   |
| --- | --- |
| Deadline (English) | Biannually until 2029 |
| Deadline (French) | Deux fois par année jusqu'en 2029 |
| Lead Department | jus |

**Extras for: C04.5.2**

| Extra Value |   |
| --- | --- |
| Deadline (English) | Biannually until 2029 |
| Deadline (French) | Deux fois par année jusqu'en 2029 |
| Lead Department | jus |

**Extras for: C04.5.3**

| Extra Value |   |
| --- | --- |
| Deadline (English) | Feedback will be compiled at the end of two years of promoting the Index, November 2027. |
| Deadline (French) | La rétroaction sera compilée à la fin des deux années de promotion de l'Indice, soit en novembre 2027 |
| Lead Department | jus |

**Extras for: C04.5.4**

| Extra Value |   |
| --- | --- |
| Deadline (English) | Biannually until 2029 |
| Deadline (French) | Deux fois par année jusqu'en 2029 |
| Lead Department | jus |

### 1-5 Indicator (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Indicator (English) |
| Field Name FR | Indicateur (anglais) |
| ID | indicator_en |
| Description EN | The indicator related to the chosen milestone, in English |
| Description FR | L'indicateurs liés au jalon choisi en anglais |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |

### 1-6 Indicator (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Indicator (French) |
| Field Name FR | Indicateur (français) |
| ID | indicator_fr |
| Description EN | The indicator related to the chosen milestone, in French |
| Description FR | L'indicateur liés au jalon choisi en français |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |

### 1-7 Indicator Deadline (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Indicator Deadline (English) |
| Field Name FR | Date limite de l'indicateur (anglais) |
| ID | indicator_deadline_en |
| Description EN | Completion deadline for selected indicator, in English |
| Description FR | Date limite d'achèvement pour l'indicateur sélectionné en anglais |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |

### 1-8 Indicator Deadline (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Indicator Deadline (French) |
| Field Name FR | Date limite de l'indicateur (français) |
| ID | indicator_deadline_fr |
| Description EN | Completion deadline for selected indicator, in French |
| Description FR | Date limite d'achèvement pour l'indicateur sélectionné en français |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |

### 1-9 Indicator Lead Department

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Indicator Lead Department |
| Field Name FR | Ministère responsable |
| ID | indicator_lead_dept |
| Description EN | Department responsible for the implementation of the selected indicator |
| Description FR | Ministère responsable de la mise en oeuvre de l'indicateur sélectionné |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text Array |
| Validation EN |   |
| Validation FR |   |

### 1-10 Status

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Status |
| Field Name FR | État |
| ID | status |
| Description EN | Indicate the current status of the commitment |
| Description FR | Indiquer l'état actuel de l'engagement |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | SP |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| NS | Not started | Non commencé |
| LP | Limited progress | Progrès limité |
| SP | Substantial progress | Progrès important |
| C | Complete | Réalisé |

### 1-11 Progress during reporting period (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Progress during reporting period (English) |
| Field Name FR | Progrès au cours du  période de déclaration (anglais) |
| ID | progress_en |
| Description EN | 1-3 bullets outlining progress made during the most recent reportnig period. If no progress has been made, please write "NIL" |
| Description FR | 1-3 balles décrivant les progrès réalisés au cours dupériode de déclaration. Si aucun progrès n'a été réalisé, veuillez écrire "NIL" |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | - Open government learning materials for teachers have been drafted<br>- Initiating call for proposals to find contractor who can ensure materials are presented in a useful format for teachers and educators |

### 1-12 Progress during reporting period (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Progress during reporting period (French) |
| Field Name FR | Progrès au cours du période de déclaration (français) |
| ID | progress_fr |
| Description EN | 1-3 bullets outlining progress made during the most recent reporting period. If no progress has been made, please write "NUL" |
| Description FR | 1-3 balles décrivant les progrès réalisés au cours du dernier période de déclaration. Si aucun progrès n'a été réalisé, veuillez écrire "NUL" |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | - Des matériels d'apprentissage sur le gouvernement ouvert pour les enseignants ont été rédigés<br>- Lancer un appel à propositions pour trouver un contractant capable de garantir que le matériel est présenté dans un format utile pour les enseignants et les éducateurs. |

### 1-13 Evidence of progress (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Evidence of progress (English) |
| Field Name FR | Preuve de progrès (anglais) |
| ID | evidence_en |
| Description EN | Any supporting evidence to demonstrate the progress you have made. This could include websites, links to documents, or other information. |
| Description FR | Toute preuve à l'appui pour démontrer les progrès que vous avez accomplis. Cela peut inclure des sites Web, des liens vers des documents ou d'autres informations. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Materials are drafted and posted at [link] |

### 1-14 Evidence of progress (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Evidence of progress (French) |
| Field Name FR | Preuve de progrès (français) |
| ID | evidence_fr |
| Description EN | Any supporting evidence to demonstrate the progress you have made. This could include websites, links to documents, or other information. |
| Description FR | Toute preuve à l'appui pour démontrer les progrès que vous avez accomplis. Cela peut inclure des sites Web, des liens vers des documents ou d'autres informations. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Les documents sont rédigés et publiés sur [link] |

### 1-15 Challenges (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Challenges (English) |
| Field Name FR | Défis (anglais) |
| ID | challenges_en |
| Description EN | Describe any challenges faced, in English |
| Description FR | Décrivez les défis rencontrés en anglais |
| Obligation EN | Mandatory, conditional |
| Obligation FR | Obligatoire, conditionnel |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Required if "Status" is "Limited progress" or "Not started" |
| Validation FR | Obligatoire si « État » est « Progrès limité » ou « Pas commencé ». |
| Example Value | - Change of funding<br>- Lack of resources |

### 1-16 Challenges (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Challenges (French) |
| Field Name FR | Défis (français) |
| ID | challenges_fr |
| Description EN | Describe any challenges faced, in French |
| Description FR | Décrivez les défis rencontrés en français |
| Obligation EN | Mandatory, conditional |
| Obligation FR | Obligatoire, conditionnel |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Required if "Status" is "Limited progress" or "Not started" |
| Validation FR | Obligatoire si « État » est « Progrès limité » ou « Pas commencé ». |
| Example Value | - Changement de financement<br>- Manque de ressources |


---

# Data Element Profile: Proactive Publication - Question Period Notes

_Source YAML: `qpnotes.yaml`_

## [Legend](#legend)

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

## [Proactive Publication - Question Period Notes](#proactive-publication-question-period-notes)

### 1-1 Reference Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reference Number |
| Field Name FR | Numéro de référence |
| ID | reference_number |
| Description EN | This field is populated by the user with the reference number of the Question Period Note. This number is a mandatory system requirement when publishing a template. |
| Description FR | Ce champ est rempli par l’utilisateur avec le numéro de référence de la note pour la période de questions. Le numéro est une exigence de système obligatoire pour la publication d’un modèle. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | DND-2019-QP-00001 |

### 1-2 Title (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Title (English) |
| Field Name FR | Titre (anglais) |
| ID | title_en |
| Description EN | This field is populated by the user with the official title of the Question Period Note, in English. |
| Description FR | L’utilisateur indique le titre officiel en anglais de la note pour la période de questions dans ce champ. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Bill C-58 (Access to Information Reform) |

### 1-3 Title (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Title (French) |
| Field Name FR | Titre (français) |
| ID | title_fr |
| Description EN | This field is populated by the user with the official title of the Question Period Note, in French. |
| Description FR | L’utilisateur indique le titre officiel en français de la note pour la période de questions dans ce champ. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Projet de loi C-58 (réforme de l'accès à l'information) |

### 1-4 Title of Minister

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Title of Minister |
| Field Name FR | Titre du ministre |
| ID | minister |
| Description EN | This field will display the title of the Minister for whom the Question Period Note was created. |
| Description FR | Ce champ affichera le titre du ministre pour qui la note pour la période de questions a été créée. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | PM |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| AGC | Attorney General of Canada | Procureur général du Canada |
| AMF | Associate Minister of Finance | Ministre associée des Finances |
| AMH | Associate Minister of Health | Ministre associée de la santé |
| AMND | Associate Minister of National Defence | Ministre associé de la Défense nationale |
| AMPS | Associate Minister of Public Safety | Ministre associée de la sécurité publique |
| CGW | Chief government whip | Whip en chef du gouvernement |
| DPM | Deputy Prime Minister | Vice-première ministre |
| GG | The Governor General of Canada | La gouverneure générale du Canada |
| LGHC | Leader of the Government in the House of Commons | Leader du gouvernement à la Chambre des communes |
| MAA | Minister of Agriculture and Agri-Food | Ministre de l'Agriculture et de l'Agroalimentaire |
| MAARED | Minister of Agriculture and Agri-Food and Rural Economic Development | Ministre de l’agriculture et de l’agroalimentaire et du développement économique rural |
| MAIDI | Minister of Artificial Intelligence and Digital Innovation | Ministre de l’intelligence artificielle et de l’innovation numérique |
| MCCIPC | Minister of Canadian Culture and Identity, Parks Canada | Ministre de la culture et de l’identité canadiennes, parcs canada |
| MCH | Minister of Canadian Heritage | Ministre du Patrimoine canadien |
| MCIC | Minister of Canadian Identity and Culture | Ministre de l’identité et de la culture canadiennes |
| MCR | Minister of Crown-Indigenous Relations | Ministre des Relations Couronne-Autochtones |
| MCRNA | Minister of Crown-Indigenous Relations and Northern Affairs | Ministre des relations couronne-autochtones et des affaires du nord |
| MCS | Minister of Citizens’ Services | Ministre des services aux citoyens |
| MDG | Minister of Digital Government | Ministre du Gouvernement numérique |
| MDI | Minister of Democratic Institutions | Ministre des institutions démocratiques |
| MDIPD | Minister of Diversity, Inclusion and Persons with Disabilities | Ministre de la diversité, de l’inclusion et des personnes en situation de handicap |
| MDIY | Minister of Diversity and Inclusion and Youth | Ministre de la Diversité et de l’Inclusion et de la Jeunesse |
| MECC | Minister of Environment and Climate Change | Ministre de l'Environnement et du Changement climatique |
| MECCN | Minister of the Environment, Climate Change and Nature | Ministre de l’environnement, du changement climatique et de la nature |
| MED | Minister of Economic Development | Ministre du Développement économique |
| MEMCR | Minister of Emergency Management and Community Resilience | Ministre de la gestion des urgences et de la résilience des communautés |
| MENR | Minister of Energy and Natural Resources | Ministre de l’énergie et des ressources naturelles |
| MEP | Minister of Emergency Preparedness | Ministre de la protection civile |
| MEPITED | Minister of Export Promotion, International Trade and Economic Development | Ministre de la promotion des exportations, du commerce international et du développement économique |
| MEWDDI | Minister of Employment, Workforce Development and Disability Inclusion | Ministre de l’Emploi, du Développement de la main-d’œuvre et de l'Inclusion des personnes handicapées |
| MEWDL | Minister of Employment, Workforce Development and Labour | Ministre de l’emploi, du développement de la main-d’œuvre et du travail |
| MEWDOL | Minister of Employment, Workforce Development and Official Languages | Ministre de l’emploi, du développement de la main-d’œuvre et des langues officielles |
| MF | Minister of Finance | Ministre des Finances |
| MF1 | Minister of Fisheries | Ministre des pêches |
| MFA | Minister of Foreign Affairs | Ministre des Affaires étrangères |
| MFAID | Minister of Foreign Affairs and International Development | Ministre des affaires étrangères et du développement international |
| MFCSD | Minister of Families, Children and Social Development | Ministre de la Famille, des Enfants et du Développement social |
| MFNR | Minister of Finance and National Revenue | Ministre des finances et du revenu national |
| MFOCCG | Minister of Fisheries, Oceans and the Canadian Coast Guard | Ministre des Pêches, des Océans et de la Garde côtière canadienne |
| MGTPSP | Minister of Government Transformation, Public Services and Procurement | Ministre de la transformation du gouvernement, des services publics et de l’approvisionnement |
| MGTPWP | Minister of Government Transformation, Public Works and Procurement | Ministre de la transformation du gouvernement, des travaux publics et de l’approvisionnement |
| MH | Minister of Health | Ministre de la Santé |
| MHDI | Minister of Housing and Diversity and Inclusion | Ministre du logement et de la diversité et de l’inclusion |
| MHI | Minister of Housing and Infrastructure | Ministre du logement et de l’infrastructure |
| MHIC | Minister of Housing, Infrastructure and Communities | Ministre du logement, de l’infrastructure et des collectivités |
| MI | Minister of Industry | Ministre de l’industrie |
| MIA | Minister of Intergovernmental Affairs | Ministre des Affaires intergouvernementales |
| MIAIC | Minister of Intergovernmental Affairs, Infrastructure and Communities | Ministre des affaires intergouvernementales, de l’infrastructure et des collectivités |
| MIC | Minister of Infrastructure and Communities | Ministre de l'Infrastructure et des Collectivités |
| MID | Minister of International Development | Ministre du Développement international |
| MIRC | Minister of Immigration, Refugees and Citizenship | Ministre de l’Immigration, des Réfugiés et de la Citoyenneté |
| MIS | Minister of Indigenous Services | Ministre des Services aux Autochtones |
| MISI | Minister of Innovation, Science and Industry | Ministre de l'Innovation, des Sciences et de l'Industrie |
| MIT | Minister of International Trade | Ministre du Commerce international |
| MIT1 | Minister of Internal Trade | Ministre du commerce intérieur |
| MITEPSBED | Minister of International Trade, Export Promotion, Small Business and Economic Development | Ministre du commerce international, de la promotion des exportations, de la petite entreprise et du développement économique |
| MITIA | Minister of International Trade and Intergovernmental Affairs | Ministre du commerce international et des affaires intergouvernementales |
| MJ | Minister of Justice | Ministre de la Justice |
| MJF | Minister of Jobs and Families | Ministre de l’emploi et des familles |
| ML | Minister of Labour | Ministre du Travail |
| MLS | Minister of Labour and Seniors | Ministre du travail et des aînés |
| MMCP | Minister of Middle Class Prosperity | Ministre de la Prospérité de la classe moyenne |
| MMHA | Minister of Mental Health and Addictions | Ministre de la santé mentale et des dépendances |
| MNA | Minister of Northern Affairs | Ministre des Affaires du Nord |
| MNAA | Minister of Northern and Arctic Affairs | Ministre des affaires du nord et de l’arctique |
| MND | Minister of National Defence | Ministre de la Défense nationale |
| MNR | Minister of National Revenue | Ministre du Revenu national |
| MNR1 | Minister of Natural Resources | Ministre des Ressources naturelles |
| MOL | Minister of Official Languages | Ministre des Langues officielles |
| MPS | Minister of Public Safety | Ministre de la sécurité publique |
| MPSDIIA | Minister of Public Safety, Democratic Institutions and Intergovernmental Affairs | Ministre de la sécurité publique, des institutions démocratiques et des affaires intergouvernementales |
| MPSEP | Minister of Public Safety and Emergency Preparedness | Ministre de la Sécurité publique et de la Protection civile |
| MPSP | Minister of Public Services and Procurement | Ministre des Services publics et de l’Approvisionnement |
| MRACOA | Minister responsible for the Atlantic Canada Opportunities Agency | Ministre responsable de l’agence de promotion économique du canada atlantique |
| MRCEDQR | Minister responsible for Canada Economic Development for Quebec Regions | Ministre responsable de développement économique canada pour les régions du québec |
| MRCNEDA | Minister responsible for the Canadian Northern Economic Development Agency | Ministre responsable de l’agence canadienne de développement économique du nord |
| MRCRA | Minister responsible for the Canada Revenue Agency | Ministre responsable de l’agence du revenu du canada |
| MRCTIAOCE | Minister responsible for Canada-U.S. Trade, Intergovernmental Affairs and One Canadian Economy | Ministre responsable du commerce canada–états-unis, des affaires intergouvernementales et de l’unité de l’économie canadienne |
| MRED | Minister of Rural Economic Development | Ministre du Développement économique rural |
| MREDACRQ | Minister responsible for the Economic Development Agency of Canada for the Regions of Quebec | Ministre responsable de l’agence de développement économique du canada pour les régions du québec |
| MRFEDANO | Minister responsible for the Federal Economic Development Agency for Northern Ontario | Ministre responsable de l’agence fédérale de développement économique pour le nord de l’ontario |
| MRFEDASO | Minister responsible for the Federal Economic Development Agency for Southern Ontario | Ministre responsable de l’agence fédérale de développement économique pour le sud de l’ontario |
| MROL | Minister responsible for Official Languages | Ministre responsable des langues officielles |
| MRPEDAC | Minister responsible for the Pacific Economic Development Agency of Canada | Ministre responsable de l’agence de développement économique du pacifique canada |
| MRPEDC | Minister responsible for Prairies Economic Development Canada | Ministre responsable de développement économique canada pour les prairies |
| MRPEDC1 | Minister responsible for Pacific Economic Development Canada | Ministre responsable de développement économique canada pour le pacifique |
| MS | Minister of Seniors | Ministre des Aînés |
| MS1 | Minister of Sport | Ministre des sports |
| MSB | Minister of Small Business | Ministre de la petite entreprise |
| MSBEP | Minister of Small Business and Export Promotion | Ministre de la Petite Entreprise et de la Promotion des exportations |
| MSPA | Minister of Sport and Physical Activity | Ministre des sports et de l’activité physique |
| MT | Minister of Transport | Ministre des Transports |
| MT1 | Minister of Tourism | Ministre du tourisme |
| MTIT | Minister of Transport and Internal Trade | Ministre des transports et du commerce intérieur |
| MVA | Minister of Veterans Affairs | Ministre des Anciens Combattants |
| MWGE | Minister for Women and Gender Equality | Ministre des Femmes et de l’Égalité des genres |
| MWGE1 | Minister of Women and Gender Equality | Ministre des femmes et de l’égalité des genres |
| MWGEY | Minister for Women and Gender Equality and Youth | Ministre des femmes et de l’égalité des genres et de la jeunesse |
| PKPCC | President of the King’s Privy Council for Canada | Président du conseil privé du roi pour le canada |
| PM | Prime Minister | Premier ministre |
| PQPCC | President of the Queen’s Privy Council for Canada | Président du Conseil privé de la Reine pour le Canada |
| PTB | President of the Treasury Board | Président du Conseil du Trésor |
| SRP | Special Representative for the Prairies | Représentant spécial pour les Prairies |
| SSCC | Secretary of State (Combatting Crime) | Secrétaire d’état (lutte contre la criminalité) |
| SSCRAFI | Secretary of State (Canada Revenue Agency and Financial Institutions) | Secrétaire d’état (agence du revenu du canada et institutions financières) |
| SSCY | Secretary of State (Children and Youth) | Secrétaire d’état (enfance et jeunesse) |
| SSDP | Secretary of State (Defence Procurement) | Secrétaire d’état (approvisionnement en matière de défense) |
| SSID | Secretary of State (International Development) | Secrétaire d’état (développement international) |
| SSL | Secretary of State (Labour) | Secrétaire d’état (travail) |
| SSN | Secretary of State (Nature) | Secrétaire d’état (nature) |
| SSRD | Secretary of State (Rural Development) | Secrétaire d’état (développement rural) |
| SSS | Secretary of State (Seniors) | Secrétaire d’état (aînés) |
| SSS1 | Secretary of State (Sport) | Secrétaire d’état (sports) |
| SSSBT | Secretary of State (Small Business and Tourism) | Secrétaire d’état (petites entreprises et tourisme) |

### 1-5 Issue/Question (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Issue/Question (English) |
| Field Name FR | Enjeu ou question (anglais) |
| ID | question_en |
| Description EN | This section will display the issue or question the Minister is responding to, in English. |
| Description FR | Cette section affichera en anglais la question ou l’enjeu auquel répond le ministère. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Repeatable |
| Format Type | Text |
| Validation EN | None |
| Validation FR | None |
| Example Value | What is the Government doing to reform the Access to Information Act (Bill C-58)? |

### 1-6 Issue/Question (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Issue/Question (French) |
| Field Name FR | Enjeu ou question (français) |
| ID | question_fr |
| Description EN | This section will display the issue or question the Minister is responding to, in French. |
| Description FR | Cette section affichera en français la question ou l’enjeu auquel répond le ministère. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Repeatable |
| Format Type | Text |
| Validation EN | None |
| Validation FR | None |
| Example Value | Que fait le gouvernement pour réformer la Loi sur l'accès à l'information (projet de loi C-58)? |

### 1-7 Date Provided to the Minister's Office

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Date Provided to the Minister's Office |
| Field Name FR | Date de fourniture au bureau du minister |
| ID | date_received |
| Description EN | This field will display the date on which the Question Period Note was provided to the Minister's Office. |
| Description FR | Ce champ affichera la date à laquelle la note pour la période de questions a été fournie au ministre aux fins d’utilisation au cours d’une période de questions. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Date |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 2019-11-25 |

### 1-8 Suggested Response (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Suggested Response (English) |
| Field Name FR | Réponse suggérée (anglais) |
| ID | response_en |
| Description EN | This field will display the Suggested Response section of the Question Period Note, in English. |
| Description FR | Ce champ affichera la section de la réponse suggérée de la note pour la période de questions en anglais. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | * Bill C-58 contains the first significant amendments to the Access to Information Act since it was introduced over three decades ago.<br>* This Bill is the first phase of a two-step approach to update access to information. The targeted changes will be followed by a full review of the Act in Phase II, to begin within one year of royal assent.<br>* The Government thanks the members of the Senate Committee on Legal and Constitutional Affairs for their careful review of Bill C-58. |

### 1-9 Suggested Response (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Suggested Response (French) |
| Field Name FR | Réponse suggérée (français) |
| ID | response_fr |
| Description EN | This field will display the Suggested Response section of the Question Period Note, in French. |
| Description FR | Ce champ affichera la section de la réponse suggérée de la note pour la période de questions en français. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | * Le projet de loi C-58 contient les premières modifications importantes touchant la Loi sur l’accès à l’information depuis l’adoption de celle-ci il y a plus de trente ans.<br>* Le projet de loi C-58 est la première phase d’une approche en deux étapes qui vise à mettre à jour l’accès à l’information. Les changements visés seront suivis d’un examen complet de la Loi au cours de la deuxième phase, qui commencera dans l’année suivant la sanction royale du projet de loi.<br>* Le gouvernement remercie les membres du Comité sénatorial permanent des affaires juridiques et constitutionnelles pour l’examen approfondi du projet de loi C-58 qu’ils ont effectué. |

### 1-10 Background (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Background (English) |
| Field Name FR | Contexte (anglais) |
| ID | background_en |
| Description EN | This field should display the background section of the Question Period note, In English. |
| Description FR | Ce champ devrait afficher en anglais la section du contexte de la note pour la période de questions. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Government of Canada institutions subject to the [Access to Information Act](http://laws-lois.justice.gc.ca/eng/acts/a-1/) (ATIA) are required to post summaries of processed ATI requests. |

### 1-11 Background (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Background (French) |
| Field Name FR | Contexte (français) |
| ID | background_fr |
| Description EN | This field should display the background section of the Question Period note, In French. |
| Description FR | Ce champ devrait afficher en français la section du contexte de la note pour la période de questions. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Les institutions du gouvernement du Canada visées par la [Loi sur l’accès à l’information](http://laws-lois.justice.gc.ca/fra/lois/a-1/) (LAI) sont tenues de publier les sommaires des demandes d’accès à l’information qu’elles ont traitées. |

### 1-12 Additional Information (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Additional Information (English) |
| Field Name FR | Renseignements supplémentaires (anglais) |
| ID | additional_information_en |
| Description EN | This field will display any additional information, as deemed necessary, in English. |
| Description FR | Ce champ affichera tout renseignement supplémentaire, en anglais, selon les besoins. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Repeatable |
| Format Type | Text |
| Validation EN | None |
| Validation FR | None |
| Example Value | The Government will continue to work with the Information Commissioner, parliamentarians, and other stakeholders to further strengthen government openness and transparency. |

### 1-13 Additional Information (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Additional Information (French) |
| Field Name FR | Renseignements supplémentaires (français) |
| ID | additional_information_fr |
| Description EN | This field will display any additional information, as deemed necessary, in French. |
| Description FR | Ce champ affichera tout renseignement supplémentaire, en français, selon les besoins. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Repeatable |
| Format Type | Text |
| Validation EN | None |
| Validation FR | None |
| Example Value | Le gouvernement continuera de travailler avec la commissaire à l’information, les parlementaires et d’autres intervenants afin d’être encore plus ouvert et transparent. |

## [Proactive Publication - Question Period Notes](#proactive-publication-question-period-notes)

### 2-1 Year

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Year |
| Field Name FR | Année |
| ID | year |
| Description EN | This tab / field in the template is only populated if there are no question period notes for the reporting period. This field should be populated with the year of the reporting period. |
| Description FR | Cet onglet/champ du modèle n’est rempli que s'il n'y a pas de notes pour la période de questions pour la période d’établissement de rapports. Ce champ doit être rempli avec l’année de la période d’établissement de rapports. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 2023 |

### 2-2 Reporting Period

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reporting Period |
| Field Name FR | Période de déclaration |
| ID | reporting_period |
| Description EN | This tab / field in the template is only populated if there are no briefing notes for the reporting period. This field should be populated with the reporting period. |
| Description FR | Cet onglet/champ du modèle n’est rempli que s'il n'y a pas de note pour la période de questions pour la période d’établissement de rapports. Ce champ doit être rempli avec la période d’établissement de rapports. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | P01 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| P01 | Jan. - June | jan. - juin |
| P02 | July - Dec. | juil. - déc. |


---

# Data Element Profile: Proactive Publication - Position Reclassification

_Source YAML: `reclassification.yaml`_

## [Legend](#legend)

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

## [Proactive Publication - Position Reclassification](#proactive-publication-position-reclassification)

### 1-1 Reference Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reference Number |
| Field Name FR | Numéro de référence |
| ID | ref_number |
| Description EN |   |
| Description FR |   |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | PR-2019-Q1-00005 |

### 1-2 Job Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Job Number |
| Field Name FR | Numéro d'emploi |
| ID | job_number |
| Description EN |   |
| Description FR |   |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |

### 1-3 Position Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Position Number |
| Field Name FR | Numéro du poste |
| ID | pos_number |
| Description EN |   |
| Description FR |   |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 14999 |

### 1-4 Date

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Date |
| Field Name FR |   |
| ID | date |
| Description EN |   |
| Description FR |   |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Date |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 2019-03-01 |

### 1-5 Position Title (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Position Title (English) |
| Field Name FR | Titre du poste (anglais) |
| ID | pos_title_en |
| Description EN |   |
| Description FR |   |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Chief, Facilities Services Management |

### 1-6 Position Title (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Position Title (French) |
| Field Name FR | Titre du poste (français) |
| ID | pos_title_fr |
| Description EN |   |
| Description FR |   |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Chef, Gestion des services aux immeubles |

### 1-7 Previous Position Classification Group

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Previous Position Classification Group |
| Field Name FR | Groupe de classification du poste antérieur |
| ID | old_class_group_code |
| Description EN |   |
| Description FR |   |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | AS |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| AC | Actuarial Science | Actuariat |
| AG | Agriculture | Agriculture |
| AI-NOP | Air Traffic Control - Non-Operational | Contrôle de la circulation aérienne - Non-opérationnel |
| AO-CAI | Aircraft Operations - Civil Aviation Inspection | Navigation aérienne - Inspection de l’aviation civile |
| AO-ETP | Aircraft Operations - Engineering Test Pilots | Navigation aérienne - Pilotes ingénieurs d’essai |
| AO-HPS | Aircraft Operations - Helicopter Pilots and Supervisors | Navigation aérienne - Pilotes d’hélicoptère et des superviseurs |
| AR | Architecture and Town Planning | Architecture et urbanisme |
| AS | Administrative Services | Services administratifs |
| AU | Auditing | Vérification |
| BI | Biological Sciences | Sciences biologiques |
| CH | Chemistry | Chimie |
| CI-ASC | CIHR - Administrative Support | IRSC - Soutien administratif |
| CI-PTC | CIHR - Professional and Technical | IRSC - Professionnel et technique |
| CI-SPC | CIHR - Senior Professional | IRSC - Haute gestion professionnelle |
| CI-EXC | CIHR - Executive | IRSC - Direction |
| CM | Communications | Communications |
| CO | Commerce | Commerce |
| CR | Clerical and Regulatory | Commis aux écritures et aux règlements |
| CRA-EC | CRA - Senior Executive | ARC - Cadre de direction |
| CS | Computer Systems | Systèmes d’ordinateurs |
| CT-EAV | Comptrollership - External Audit | Fonction de contrôleur - Vérification externe |
| CT-FIN | Comptrollership - Financial Management | Fonction de contrôleur - Gestion financière |
| CT-IAU | Comptrollership - Internal Audit | Fonction de contrôleur - Audit interne |
| CX | Correctional Services | Services correctionnels |
| DA-CON | Data Processing - Data Conversion | Traitement mécanique des données - Conversion des données |
| DA-PRO | Data Processing - Data Production | Traitement mécanique des données - Production des données |
| DD | Drafting and Illustration | Dessin et illustrations |
| DE | Dentistry | Art dentaire |
| DM | Deputy Ministers | Sous-ministres |
| DS | Defence Scientific Service | Services scientifiques de la défense |
| EC | Economics and Social Science Services | Économique et services de sciences sociales |
| ED-EDS | Education - Education Services | Enseignement - Services d’éducation |
| ED-EST | Education - Elementary and Secondary Teaching | Enseignement - Enseignement élémentaire et secondaire |
| ED-LAT | Education - Language Teaching | Enseignement - Enseignement des langues |
| EG | Engineering and Scientific Support | Soutien technologique et scientifique |
| EL | Electronics | Électronique |
| EN-ENG | Engineering and Land Survey - Engineering | Génie et arpentage - Génie |
| EN-SUR | Engineering and Land Survey - Land Survey | Génie et arpentage - Arpentage |
| EO | Chief Electoral Officer | Directeur général des électionscteur |
| ES | Economics, Sociology and Statistics | Économie, sociologie et statistique |
| EU-LAI | Educational Support - Language Instructor | Soutien de l’enseignement - Moniteurs de langues |
| EU-PEI | Educational Support - Physical Education Instructor | Soutien de l’enseignement - Moniteurs d’éducation physique |
| EU-TEA | Educational Support - Teachers' Aide | Soutien de l’enseignement - Aides-enseignants |
| EX | Executive Group | Groupe de la direction |
| FB | Border Services | Services frontaliers |
| FI | Financial Management | Gestion financière |
| FO | Forestry | Sciences forestières |
| FR | Firefighters | Pompiers |
| FS | Foreign Service | Service extérieur |
| GL-AIM | General Labour and Trades - Aircraft Maintaining | Manoeuvres et hommes de métier - Entretien d’aéronefs |
| GL-AMW | General Labour and Trades - Ammunition Working | Manoeuvres et hommes de métier - Fabrication de munitions |
| GL-BOB | General Labour and Trades - Boilermaking and Blacksmithing | Manoeuvres et hommes de métier - Chaudronnerie et forge |
| GL-COI | General Labour and Trades - Construction Inspecting | Manoeuvres et hommes de métier - Inspection de la construction |
| GL-EIM | General Labour and Trades - Electrical Installing and Maintaining | Manoeuvres et hommes de métier - Installations électriques et entretien |
| GL-ELE | General Labour and Trades - Elemental | Manoeuvres et hommes de métier - Fonctions élémentaires |
| GL-GHW | General Labour and Trades - Grain Handling and Weighing | Manoeuvres et hommes de métier - Manutention et pesage de céréales |
| GL-INM | General Labour and Trades - Instrument Maintaining | Manoeuvres et hommes de métier - Entretien d’instruments |
| GL-MAM | General Labour and Trades - Machinery Maintaining | Manoeuvres et hommes de métier - Entretien de machines |
| GL-MAN | General Labour and Trades - Manipulating | Manoeuvres et hommes de métier - Manipulation |
| GL-MDO | General Labour and Trades - Machine Driving-Operating | Manoeuvres et hommes de métier - Conduite et fonctionnement de machines |
| GL-MOC | General Labour and Trades - Machine Operating-Controlling | Manoeuvres et hommes de métier - Fonctionnement et surveillance de machines |
| GL-MST | General Labour and Trades - Metal Machining | Manoeuvres et hommes de métier - Usinage des métaux |
| GL-PCF | General Labour and Trades - Painting and Construction Finishing | Manoeuvres et hommes de métier - Peinture et finissage de construction |
| GL-PIP | General Labour and Trades - Pipefitting | Manoeuvres et hommes de métier - Tuyauterie |
| GL-PRW | General Labour and Trades - Precision Working | Manoeuvres et hommes de métier - Travail de précision |
| GL-SMW | General Labour and Trades - Sheet Metal Working | Manoeuvres et hommes de métier - Tôlerie |
| GL-VHE | General Labour and Trades - Vehicle Heavy Equipment Maintaining | Manoeuvres et hommes de métier - Entretien de véhicules et de matériel lourd |
| GL-WOW | General Labour and Trades - Woodworking | Manoeuvres et hommes de métier - Menuiserie |
| GS-BUS | General Services - Building Services | Services divers - Service d’entretien d’immeubles |
| GS-FOS | General Services - Food Services | Services divers - Services alimentaires |
| GS-LAS | General Services - Laundry Services | Services divers - Services de buanderie |
| GS-MES | General Services - Messenger Services | Services divers - Services de messagers |
| GS-MPS | General Services - Miscellaneous Personal Services | Services divers - Services personnels divers |
| GS-PRC | General Services - Protective and Custodial Services | Services divers - Services de protection et de garde |
| GS-STS | General Services - Stores Services | Services divers - Services de magasins |
| GT | General Technical | Techniciens divers |
| GX | General Executive Group | Groupe de la direction supérieure |
| HP | Heating, Power and Stationary Plant Operations | Chauffage, force motrice et opérations de machines fixes |
| HR | Historical Research | Recherche historique |
| HR/RH | Human Resources | Ressources humaines |
| HS-HDO | Hospital Services - Housekeeping, Dietary and Other Services | Services hospitaliers - Services ménagers, diététiques et autres |
| HS-PHS | Hospital Services - Patient and Health Services | Services hospitaliers - Services des malades et de l’hygiène publique |
| IS | Information Services | Services d’information |
| IT | Information Technology | Technologies de l’information |
| LC | Law Management | Gestion du droit |
| LE | Locally Engaged Staff | Émployés recrutés sur place |
| LI | Lightkeepers | Gardiens de phares |
| LP | Law Practitioner | Praticiens du droit |
| LS | Library Science | Bibliothéconomie |
| MA | Mathematics | Mathématiques |
| MD-MOF | Medicine - Medical Officer |   |
| MD-MSP | Medicine - Medical Specialist |   |
| MD-MDG | Management Development | Développment en gestion |
| MG-AFS | Management | Groupe de gestion |
| MG-SPS | Management Group | Groupe de gestion |
| MT | Meteorology | Météorologie |
| ND-ADV | Nutrition and Dietetics - Advisory | Nutrition et diététique - Conseillers |
| ND-DIT | Nutrition and Dietetics - Dietitian | Nutrition et diététique - Diététiciens |
| ND-HME | Nutrition and Dietetics - Home Economist | Nutrition et diététique - Économistes ménagères |
| NU-CHN | Nursing - Community Health | Sciences infirmières - Infirmières en santé communautaire |
| NU-EMA | Nursing - Medical Adjudicator Nursing | Sciences infirmières - Évaluateurs médicaux |
| NU-HOS | Nursing - Hospital Nursing | Sciences infirmières - Infirmières d’hôpital |
| OC-AST | Governor-in-Council Appointees | Personnes nommées par le gouverneur en conseil |
| OC-GC | Governor-in-Council Appointees | Personnes nommées par le gouverneur en conseil |
| OC-GCQ | Governor-in-Council Appointees | Personnes nommées par le gouverneur en conseil |
| OC-GIC | Governor-in-Council Appointees | Personnes nommées par le gouverneur en conseil |
| OC-GRP | Governor-in-Council Appointees | Personnes nommées par le gouverneur en conseil |
| OE-BEO | Office Equipment - Bookkeeping Equipment Operator | Mécanographie - Opérateur de machines comptable |
| OE-CEO | Office Equipment - Calculating Equipment Operator | Mécanographie - Opérateur de machines à calculer |
| OE-DEO | Office Equipment - Duplicating Equipment Operator | Mécanographie - Opérateur de machine à reprographier |
| OE-MEO | Office Equipment - Microphotography Equipment Operator | Mécanographie - Opérateur d’appareils de microphotographie |
| OE-MSE | Office Equipment - Mailing Service Equipment Operator | Mécanographie - Opérateur de machines à courrier |
| OM | Organization and Methods | Organisation et méthodes |
| OP | Occupational and Physical Therapy | Ergothérapie et physiothérapie |
| PC | Physical Sciences | Sciences physiques |
| PE | Personnel Administration | Gestion du personnel |
| PG | Purchasing and Supply | Achat et approvisionnement |
| PH | Pharmacy | Pharmacie |
| PI-CGC | Primary Products Inspection - Grain Inspection | Inspection des produits primaires - Inspection des grains |
| PM | Programme Administration | Administration des programmes |
| PO-IMA | Police Operations Support - Intercept Monitoring and Analysis | Soutien aux opérations policières - Monitorage et analyse des interceptions |
| PO-TCO | Police Operations Support - Telecommunications Operations | Soutien aux opérations policières - Opérations des télécommunications |
| PR | Printing Operations | Services d’imprimerie |
| PR-BIN | Printing Operations - Bindery | Services d’imprimerie - Reliure |
| PR-COM | Printing Operations - Composition | Services d’imprimerie - Composition |
| PR-MAI | Printing Operations - Maintenance | Services d’imprimerie - Entretien |
| PR-OFE | Printing Operations - Pre-Press Preparation | Services d’imprimerie - Prépresse |
| PR-OFO | Printing Operations - Press Operations | Services d’imprimerie - Presses |
| PR-PRC | Printing Operations - Job Planning and Control | Services d’imprimerie - Planification et contrôle des travaux |
| PS | Psychology | Psychologie |
| PY | Photography | Photographie |
| RO | Radio Operations | Radiotélégraphie |
| SC-DED | Ships' Crews - Deck Department | Équipages de navires - Service du pont |
| SC-EQO | Ships' Crews - Equipment Operation Department | Équipages de navires - Service de l’utilisation du matériel |
| SC-ERD | Ships' Crews - Engine Room Department | Équipages de navires - Service de la salle des machines |
| SC-SPT | Ships' Crews - Specialist Trades Department | Équipages de navires - Service des métier spécialisés |
| SC-STD | Ships' Crews - Supply Department | Équipages de navires - Service d’approvisionnement |
| SE-REM | Scientific Research - Research Manager | Recherche scientifique - Directeur de recherche |
| SE-RES | Scientific Research - Research Scientist | Recherche scientifique - Chercheur scientifique |
| SG-PAT | Scientific Regulation and Patent Examination | Réglementation scientifique et examen des brevets |
| SG-SRE | Scientific Regulation and Patent Examination | Réglementation scientifique et examen des brevets |
| SI | Social Science Support | Soutien des sciences sociales |
| SP | Services and Programs Group | Groupe de services et programmes |
| SO-FLP | Ships' Officers - Floating Plant | Officiers de navire - Installations flottantes |
| SO-INS | Ships' Officers - Instructor | Officiers de navire - Instructeur |
| SO-MAO | Ships' Officers - Marine Operations | Officiers de navire - Navigation maritime |
| SO-RAD | Ships' Officers - Radio | Officiers de navire - Radio |
| SR-APA | Ship Repair - Apprentices 4 years | Réparation des navires - Apprentissage, 4 ans |
| SR-APB | Ship Repair - Apprentices 5 years | Réparation des navires - Apprentissage, 5 ans |
| SR-APP | Ship Repair - Apprentice | Réparation des navires - Apprentissage |
| SR-BOB | Ship Repair - Boilermaking and Blacksmithing | Réparation des navires - Chaudronnerie et forge |
| SR-CPS | Ship Repair - Chargehands and Production Supervisors | Réparation des navires - Chefs d’équipe et superviseurs et superviseures de la production |
| SR-EEW | Ship Repair - Electrical and Electronics Working | Réparation des navires - Électricité et mécanique |
| SR-ELE | Ship Repair - Elemental | Réparation des navires - Fonctions élémentaires |
| SR-EME | Ship Repair - Engine and Mechanical Equipment Maintaining | Réparation des navires - Entretien des moteurs et de l’équipement mécanique |
| SR-INM | Ship Repair - Instrument Maintaining | Réparation des navires - Entretien des instruments |
| SR-MAC | Ship Repair - Machining and Toolmaking | Réparation des navires - Usinage et taillanderie |
| SR-MAM | Ship Repair - Machinery Maintaining | Réparation des navires - Entretien des machines |
| SR-MAN | Ship Repair - Manipulating | Réparation des navires - Manipulation |
| SR-MAT | Ship Repair - Machine Tending | Réparation des navires - Surveillance des machines |
| SR-MDO | Ship Repair - Machine Driving-Operating | Réparation des navires - Conduite et actionnement des machines |
| SR-MGT | Ship Repair - Management | Réparation des navires - Gestion |
| SR-MOC | Ship Repair - Machine Operating-Controlling | Réparation des navires - Actionnement et contrôle des machines |
| SR-PIP | Ship Repair - Pipefitting | Réparation des navires - Tuyauterie |
| SR-PLE | Ship Repair - Planning and Estimating | Réparation des navires - Planification et évaluation |
| SR-PRW | Ship Repair - Precision Working | Réparation des navires - Travail de précision |
| SR-QCW | Ship Repair - Quality Control and Weapons Examining | Réparation des navires - Contrôle de la qualité et inspection des armes |
| SR-SMW | Ship Repair - Sheet Metal Working | Réparation des navires - Tôlerie |
| SR-SPS | Ship Repair - Ship Painting and Surface Protecting | Réparation des navires - Peinture et protection superficielle des navires |
| SR-WOW | Ship Repair - Woodworking | Réparation des navires - Menuiserie |
| ST-COR | Secretarial, Stenographic and Typing - Court Reporter | Secrétariat, sténographie et dactylographie - Sténographie de comptes rendus |
| ST-DNT | Secretarial, Stenographic and Typing | Secrétariat, sténographie et dactylographie |
| ST-OCE | Secretarial, Stenographic and Typing - Office Composing Equipment | Secrétariat, sténographie et dactylographie - Mécanographie (composition de bureau) |
| ST-SCY | Secretarial, Stenographic and Typing - Secretary | Secrétariat, sténographie et dactylographie - Secrétariat |
| ST-STN | Secretarial, Stenographic and Typing - Stenographer | Secrétariat, sténographie et dactylographie - Sténographie |
| ST-TYP | Secretarial, Stenographic and Typing - Typist | Secrétariat, sténographie et dactylographie - Dactylographie |
| SW-CHA | Social Work - Chaplain | Service social - Aumôniers |
| SW-SCW | Social Work - Social Welfare | Service social - Bien-être social |
| TI | Technical Inspection | Inspection technique |
| TR | Translation | Traduction |
| UT | University Teaching | Enseignement universitaire |
| VM | Veterinary Medicine | Médecine vétérinaire |
| WP | Welfare Programmes | Programmes de bien-être social |

### 1-8 Previous Position Classification Level Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Previous Position Classification Level Number |
| Field Name FR | Numéro de niveau de la classification du poste antérieur |
| ID | old_class_level |
| Description EN |   |
| Description FR |   |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 03 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| 00 | 00 | 00 |
| 01 | 01 | 01 |
| 02 | 02 | 02 |
| 03 | 03 | 03 |
| 04 | 04 | 04 |
| 05 | 05 | 05 |
| 06 | 06 | 06 |
| 07 | 07 | 07 |
| 08 | 08 | 08 |
| 09 | 09 | 09 |
| 10 | 10 | 10 |
| 11 | 11 | 11 |
| 12 | 12 | 12 |
| 13 | 13 | 13 |
| 14 | 14 | 14 |
| 15 | 15 | 15 |
| 16 | 16 | 16 |
| 17 | 17 | 17 |
| 18 | 18 | 18 |
| 19 | 19 | 19 |

### 1-9 Reclassified Position Classification Group

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reclassified Position Classification Group |
| Field Name FR | Groupe de classification du poste reclassifié |
| ID | new_class_group_code |
| Description EN |   |
| Description FR |   |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | AS |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| AC | Actuarial Science | Actuariat |
| AG | Agriculture | Agriculture |
| AI-NOP | Air Traffic Control - Non-Operational | Contrôle de la circulation aérienne - Non-opérationnel |
| AO-CAI | Aircraft Operations - Civil Aviation Inspection | Navigation aérienne - Inspection de l’aviation civile |
| AO-ETP | Aircraft Operations - Engineering Test Pilots | Navigation aérienne - Pilotes ingénieurs d’essai |
| AO-HPS | Aircraft Operations - Helicopter Pilots and Supervisors | Navigation aérienne - Pilotes d’hélicoptère et des superviseurs |
| AR | Architecture and Town Planning | Architecture et urbanisme |
| AS | Administrative Services | Services administratifs |
| AU | Auditing | Vérification |
| BI | Biological Sciences | Sciences biologiques |
| CH | Chemistry | Chimie |
| CI-ASC | CIHR - Administrative Support | IRSC - Soutien administratif |
| CI-PTC | CIHR - Professional and Technical | IRSC - Professionnel et technique |
| CI-SPC | CIHR - Senior Professional | IRSC - Haute gestion professionnelle |
| CI-EXC | CIHR - Executive | IRSC - Direction |
| CM | Communications | Communications |
| CO | Commerce | Commerce |
| CR | Clerical and Regulatory | Commis aux écritures et aux règlements |
| CRA-EC | CRA - Senior Executive | ARC - Cadre de direction |
| CS | Computer Systems | Systèmes d’ordinateurs |
| CT-EAV | Comptrollership - External Audit | Fonction de contrôleur - Vérification externe |
| CT-FIN | Comptrollership - Financial Management | Fonction de contrôleur - Gestion financière |
| CT-IAU | Comptrollership - Internal Audit | Fonction de contrôleur - Audit interne |
| CX | Correctional Services | Services correctionnels |
| DA-CON | Data Processing - Data Conversion | Traitement mécanique des données - Conversion des données |
| DA-PRO | Data Processing - Data Production | Traitement mécanique des données - Production des données |
| DD | Drafting and Illustration | Dessin et illustrations |
| DE | Dentistry | Art dentaire |
| DM | Deputy Ministers | Sous-ministres |
| DS | Defence Scientific Service | Services scientifiques de la défense |
| EC | Economics and Social Science Services | Économique et services de sciences sociales |
| ED-EDS | Education - Education Services | Enseignement - Services d’éducation |
| ED-EST | Education - Elementary and Secondary Teaching | Enseignement - Enseignement élémentaire et secondaire |
| ED-LAT | Education - Language Teaching | Enseignement - Enseignement des langues |
| EG | Engineering and Scientific Support | Soutien technologique et scientifique |
| EL | Electronics | Électronique |
| EN-ENG | Engineering and Land Survey - Engineering | Génie et arpentage - Génie |
| EN-SUR | Engineering and Land Survey - Land Survey | Génie et arpentage - Arpentage |
| EO | Chief Electoral Officer | Directeur général des électionscteur |
| ES | Economics, Sociology and Statistics | Économie, sociologie et statistique |
| EU-LAI | Educational Support - Language Instructor | Soutien de l’enseignement - Moniteurs de langues |
| EU-PEI | Educational Support - Physical Education Instructor | Soutien de l’enseignement - Moniteurs d’éducation physique |
| EU-TEA | Educational Support - Teachers' Aide | Soutien de l’enseignement - Aides-enseignants |
| EX | Executive Group | Groupe de la direction |
| FB | Border Services | Services frontaliers |
| FI | Financial Management | Gestion financière |
| FO | Forestry | Sciences forestières |
| FR | Firefighters | Pompiers |
| FS | Foreign Service | Service extérieur |
| GL-AIM | General Labour and Trades - Aircraft Maintaining | Manoeuvres et hommes de métier - Entretien d’aéronefs |
| GL-AMW | General Labour and Trades - Ammunition Working | Manoeuvres et hommes de métier - Fabrication de munitions |
| GL-BOB | General Labour and Trades - Boilermaking and Blacksmithing | Manoeuvres et hommes de métier - Chaudronnerie et forge |
| GL-COI | General Labour and Trades - Construction Inspecting | Manoeuvres et hommes de métier - Inspection de la construction |
| GL-EIM | General Labour and Trades - Electrical Installing and Maintaining | Manoeuvres et hommes de métier - Installations électriques et entretien |
| GL-ELE | General Labour and Trades - Elemental | Manoeuvres et hommes de métier - Fonctions élémentaires |
| GL-GHW | General Labour and Trades - Grain Handling and Weighing | Manoeuvres et hommes de métier - Manutention et pesage de céréales |
| GL-INM | General Labour and Trades - Instrument Maintaining | Manoeuvres et hommes de métier - Entretien d’instruments |
| GL-MAM | General Labour and Trades - Machinery Maintaining | Manoeuvres et hommes de métier - Entretien de machines |
| GL-MAN | General Labour and Trades - Manipulating | Manoeuvres et hommes de métier - Manipulation |
| GL-MDO | General Labour and Trades - Machine Driving-Operating | Manoeuvres et hommes de métier - Conduite et fonctionnement de machines |
| GL-MOC | General Labour and Trades - Machine Operating-Controlling | Manoeuvres et hommes de métier - Fonctionnement et surveillance de machines |
| GL-MST | General Labour and Trades - Metal Machining | Manoeuvres et hommes de métier - Usinage des métaux |
| GL-PCF | General Labour and Trades - Painting and Construction Finishing | Manoeuvres et hommes de métier - Peinture et finissage de construction |
| GL-PIP | General Labour and Trades - Pipefitting | Manoeuvres et hommes de métier - Tuyauterie |
| GL-PRW | General Labour and Trades - Precision Working | Manoeuvres et hommes de métier - Travail de précision |
| GL-SMW | General Labour and Trades - Sheet Metal Working | Manoeuvres et hommes de métier - Tôlerie |
| GL-VHE | General Labour and Trades - Vehicle Heavy Equipment Maintaining | Manoeuvres et hommes de métier - Entretien de véhicules et de matériel lourd |
| GL-WOW | General Labour and Trades - Woodworking | Manoeuvres et hommes de métier - Menuiserie |
| GS-BUS | General Services - Building Services | Services divers - Service d’entretien d’immeubles |
| GS-FOS | General Services - Food Services | Services divers - Services alimentaires |
| GS-LAS | General Services - Laundry Services | Services divers - Services de buanderie |
| GS-MES | General Services - Messenger Services | Services divers - Services de messagers |
| GS-MPS | General Services - Miscellaneous Personal Services | Services divers - Services personnels divers |
| GS-PRC | General Services - Protective and Custodial Services | Services divers - Services de protection et de garde |
| GS-STS | General Services - Stores Services | Services divers - Services de magasins |
| GT | General Technical | Techniciens divers |
| GX | General Executive Group | Groupe de la direction supérieure |
| HP | Heating, Power and Stationary Plant Operations | Chauffage, force motrice et opérations de machines fixes |
| HR | Historical Research | Recherche historique |
| HR/RH | Human Resources | Ressources humaines |
| HS-HDO | Hospital Services - Housekeeping, Dietary and Other Services | Services hospitaliers - Services ménagers, diététiques et autres |
| HS-PHS | Hospital Services - Patient and Health Services | Services hospitaliers - Services des malades et de l’hygiène publique |
| IS | Information Services | Services d’information |
| IT | Information Technology | Technologies de l’information |
| LC | Law Management | Gestion du droit |
| LE | Locally Engaged Staff | Émployés recrutés sur place |
| LI | Lightkeepers | Gardiens de phares |
| LP | Law Practitioner | Praticiens du droit |
| LS | Library Science | Bibliothéconomie |
| MA | Mathematics | Mathématiques |
| MD-MOF | Medicine - Medical Officer |   |
| MD-MSP | Medicine - Medical Specialist |   |
| MD-MDG | Management Development | Développment en gestion |
| MG-AFS | Management | Groupe de gestion |
| MG-SPS | Management Group | Groupe de gestion |
| MT | Meteorology | Météorologie |
| ND-ADV | Nutrition and Dietetics - Advisory | Nutrition et diététique - Conseillers |
| ND-DIT | Nutrition and Dietetics - Dietitian | Nutrition et diététique - Diététiciens |
| ND-HME | Nutrition and Dietetics - Home Economist | Nutrition et diététique - Économistes ménagères |
| NU-CHN | Nursing - Community Health | Sciences infirmières - Infirmières en santé communautaire |
| NU-EMA | Nursing - Medical Adjudicator Nursing | Sciences infirmières - Évaluateurs médicaux |
| NU-HOS | Nursing - Hospital Nursing | Sciences infirmières - Infirmières d’hôpital |
| OC-AST | Governor-in-Council Appointees | Personnes nommées par le gouverneur en conseil |
| OC-GC | Governor-in-Council Appointees | Personnes nommées par le gouverneur en conseil |
| OC-GCQ | Governor-in-Council Appointees | Personnes nommées par le gouverneur en conseil |
| OC-GIC | Governor-in-Council Appointees | Personnes nommées par le gouverneur en conseil |
| OC-GRP | Governor-in-Council Appointees | Personnes nommées par le gouverneur en conseil |
| OE-BEO | Office Equipment - Bookkeeping Equipment Operator | Mécanographie - Opérateur de machines comptable |
| OE-CEO | Office Equipment - Calculating Equipment Operator | Mécanographie - Opérateur de machines à calculer |
| OE-DEO | Office Equipment - Duplicating Equipment Operator | Mécanographie - Opérateur de machine à reprographier |
| OE-MEO | Office Equipment - Microphotography Equipment Operator | Mécanographie - Opérateur d’appareils de microphotographie |
| OE-MSE | Office Equipment - Mailing Service Equipment Operator | Mécanographie - Opérateur de machines à courrier |
| OM | Organization and Methods | Organisation et méthodes |
| OP | Occupational and Physical Therapy | Ergothérapie et physiothérapie |
| PC | Physical Sciences | Sciences physiques |
| PE | Personnel Administration | Gestion du personnel |
| PG | Purchasing and Supply | Achat et approvisionnement |
| PH | Pharmacy | Pharmacie |
| PI-CGC | Primary Products Inspection - Grain Inspection | Inspection des produits primaires - Inspection des grains |
| PM | Programme Administration | Administration des programmes |
| PO-IMA | Police Operations Support - Intercept Monitoring and Analysis | Soutien aux opérations policières - Monitorage et analyse des interceptions |
| PO-TCO | Police Operations Support - Telecommunications Operations | Soutien aux opérations policières - Opérations des télécommunications |
| PR | Printing Operations | Services d’imprimerie |
| PR-BIN | Printing Operations - Bindery | Services d’imprimerie - Reliure |
| PR-COM | Printing Operations - Composition | Services d’imprimerie - Composition |
| PR-MAI | Printing Operations - Maintenance | Services d’imprimerie - Entretien |
| PR-OFE | Printing Operations - Pre-Press Preparation | Services d’imprimerie - Prépresse |
| PR-OFO | Printing Operations - Press Operations | Services d’imprimerie - Presses |
| PR-PRC | Printing Operations - Job Planning and Control | Services d’imprimerie - Planification et contrôle des travaux |
| PS | Psychology | Psychologie |
| PY | Photography | Photographie |
| RO | Radio Operations | Radiotélégraphie |
| SC-DED | Ships' Crews - Deck Department | Équipages de navires - Service du pont |
| SC-EQO | Ships' Crews - Equipment Operation Department | Équipages de navires - Service de l’utilisation du matériel |
| SC-ERD | Ships' Crews - Engine Room Department | Équipages de navires - Service de la salle des machines |
| SC-SPT | Ships' Crews - Specialist Trades Department | Équipages de navires - Service des métier spécialisés |
| SC-STD | Ships' Crews - Supply Department | Équipages de navires - Service d’approvisionnement |
| SE-REM | Scientific Research - Research Manager | Recherche scientifique - Directeur de recherche |
| SE-RES | Scientific Research - Research Scientist | Recherche scientifique - Chercheur scientifique |
| SG-PAT | Scientific Regulation and Patent Examination | Réglementation scientifique et examen des brevets |
| SG-SRE | Scientific Regulation and Patent Examination | Réglementation scientifique et examen des brevets |
| SI | Social Science Support | Soutien des sciences sociales |
| SP | Services and Programs Group | Groupe de services et programmes |
| SO-FLP | Ships' Officers - Floating Plant | Officiers de navire - Installations flottantes |
| SO-INS | Ships' Officers - Instructor | Officiers de navire - Instructeur |
| SO-MAO | Ships' Officers - Marine Operations | Officiers de navire - Navigation maritime |
| SO-RAD | Ships' Officers - Radio | Officiers de navire - Radio |
| SR-APA | Ship Repair - Apprentices 4 years | Réparation des navires - Apprentissage, 4 ans |
| SR-APB | Ship Repair - Apprentices 5 years | Réparation des navires - Apprentissage, 5 ans |
| SR-APP | Ship Repair - Apprentice | Réparation des navires - Apprentissage |
| SR-BOB | Ship Repair - Boilermaking and Blacksmithing | Réparation des navires - Chaudronnerie et forge |
| SR-CPS | Ship Repair - Chargehands and Production Supervisors | Réparation des navires - Chefs d’équipe et superviseurs et superviseures de la production |
| SR-EEW | Ship Repair - Electrical and Electronics Working | Réparation des navires - Électricité et mécanique |
| SR-ELE | Ship Repair - Elemental | Réparation des navires - Fonctions élémentaires |
| SR-EME | Ship Repair - Engine and Mechanical Equipment Maintaining | Réparation des navires - Entretien des moteurs et de l’équipement mécanique |
| SR-INM | Ship Repair - Instrument Maintaining | Réparation des navires - Entretien des instruments |
| SR-MAC | Ship Repair - Machining and Toolmaking | Réparation des navires - Usinage et taillanderie |
| SR-MAM | Ship Repair - Machinery Maintaining | Réparation des navires - Entretien des machines |
| SR-MAN | Ship Repair - Manipulating | Réparation des navires - Manipulation |
| SR-MAT | Ship Repair - Machine Tending | Réparation des navires - Surveillance des machines |
| SR-MDO | Ship Repair - Machine Driving-Operating | Réparation des navires - Conduite et actionnement des machines |
| SR-MGT | Ship Repair - Management | Réparation des navires - Gestion |
| SR-MOC | Ship Repair - Machine Operating-Controlling | Réparation des navires - Actionnement et contrôle des machines |
| SR-PIP | Ship Repair - Pipefitting | Réparation des navires - Tuyauterie |
| SR-PLE | Ship Repair - Planning and Estimating | Réparation des navires - Planification et évaluation |
| SR-PRW | Ship Repair - Precision Working | Réparation des navires - Travail de précision |
| SR-QCW | Ship Repair - Quality Control and Weapons Examining | Réparation des navires - Contrôle de la qualité et inspection des armes |
| SR-SMW | Ship Repair - Sheet Metal Working | Réparation des navires - Tôlerie |
| SR-SPS | Ship Repair - Ship Painting and Surface Protecting | Réparation des navires - Peinture et protection superficielle des navires |
| SR-WOW | Ship Repair - Woodworking | Réparation des navires - Menuiserie |
| ST-COR | Secretarial, Stenographic and Typing - Court Reporter | Secrétariat, sténographie et dactylographie - Sténographie de comptes rendus |
| ST-DNT | Secretarial, Stenographic and Typing | Secrétariat, sténographie et dactylographie |
| ST-OCE | Secretarial, Stenographic and Typing - Office Composing Equipment | Secrétariat, sténographie et dactylographie - Mécanographie (composition de bureau) |
| ST-SCY | Secretarial, Stenographic and Typing - Secretary | Secrétariat, sténographie et dactylographie - Secrétariat |
| ST-STN | Secretarial, Stenographic and Typing - Stenographer | Secrétariat, sténographie et dactylographie - Sténographie |
| ST-TYP | Secretarial, Stenographic and Typing - Typist | Secrétariat, sténographie et dactylographie - Dactylographie |
| SW-CHA | Social Work - Chaplain | Service social - Aumôniers |
| SW-SCW | Social Work - Social Welfare | Service social - Bien-être social |
| TI | Technical Inspection | Inspection technique |
| TR | Translation | Traduction |
| UT | University Teaching | Enseignement universitaire |
| VM | Veterinary Medicine | Médecine vétérinaire |
| WP | Welfare Programmes | Programmes de bien-être social |

### 1-10 Reclassified Position Classification Level Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reclassified Position Classification Level Number |
| Field Name FR | Numéro de niveau de la classification du poste reclassifié |
| ID | new_class_level |
| Description EN |   |
| Description FR |   |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 04 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| 00 | 00 | 00 |
| 01 | 01 | 01 |
| 02 | 02 | 02 |
| 03 | 03 | 03 |
| 04 | 04 | 04 |
| 05 | 05 | 05 |
| 06 | 06 | 06 |
| 07 | 07 | 07 |
| 08 | 08 | 08 |
| 09 | 09 | 09 |
| 10 | 10 | 10 |
| 11 | 11 | 11 |
| 12 | 12 | 12 |
| 13 | 13 | 13 |
| 14 | 14 | 14 |
| 15 | 15 | 15 |
| 16 | 16 | 16 |
| 17 | 17 | 17 |
| 18 | 18 | 18 |
| 19 | 19 | 19 |

### 1-11 Previous Supervisory Differential

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Previous Supervisory Differential |
| Field Name FR | Ancienne prime de surveillance |
| ID | old_differential |
| Description EN |   |
| Description FR |   |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |

### 1-12 Reclassified Supervisory Differential

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reclassified Supervisory Differential |
| Field Name FR | Prime de surveillance précédente |
| ID | new_differential |
| Description EN |   |
| Description FR |   |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |

### 1-13 Reason for Reclassification (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reason for Reclassification (English) |
| Field Name FR | Raison de la decision en anglais |
| ID | reason_en |
| Description EN |   |
| Description FR |   |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Change of Duties |

### 1-14 Reason for Reclassification (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reason for Reclassification (French) |
| Field Name FR | Raison de la decision en français |
| ID | reason_fr |
| Description EN |   |
| Description FR |   |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Changements des les fonctions de travail |

## [Proactive Publication - Position Reclassification](#proactive-publication-position-reclassification)

### 2-1 Year

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Year |
| Field Name FR | Année |
| ID | year |
| Description EN |   |
| Description FR |   |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 2016 |

### 2-2 Quarter

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Quarter |
| Field Name FR | Trimestre |
| ID | quarter |
| Description EN |   |
| Description FR |   |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Q2 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| Q1 | April 1 - June 30 | 1 avril - 30 juin |
| Q2 | July 1 - September 30 | 1 juillet - 30 septembre |
| Q3 | October 1 - December 31 | 1 octobre - 31 décembre |
| Q4 | January 1 - March 31 | 1 janvier - 31 mars |


---

# Data Element Profile: Service Inventory

_Source YAML: `service.yaml`_

## [Legend](#legend)

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

## [Service Inventory](#service-inventory)

### 1-1 Fiscal Year

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Fiscal Year |
| Field Name FR | Exercice financier |
| ID | fiscal_yr |
| Description EN | Identifies the fiscal year (April 1 to March 31) during which service activities took place. For example, records for fiscal year 2023-2024 should include applications received from April 1, 2023, to March 31, 2024. |
| Description FR | Indique l'exercice financier (1 avril au 31 mars) durant lequel les activités du service ont eu lieu. Par exemple, les données pour l’exercice financier 2023-2024 devraient inclure les demandes de service qui ont été reçues entre le 1er avril 2023 et le 31 mars 2024. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Example Value | 2022-2023 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| 2029-2030 | 2029-2030 | 2029-2030 |
| 2028-2029 | 2028-2029 | 2028-2029 |
| 2027-2028 | 2027-2028 | 2027-2028 |
| 2026-2027 | 2026-2027 | 2026-2027 |
| 2025-2026 | 2025-2026 | 2025-2026 |
| 2024-2025 | 2024-2025 | 2024-2025 |
| 2023-2024 | 2023-2024 | 2023-2024 |
| 2022-2023 | 2022-2023 | 2022-2023 |
| 2021-2022 | 2021-2022 | 2021-2022 |
| 2020-2021 | 2020-2021 | 2020-2021 |
| 2019-2020 | 2019-2020 | 2019-2020 |
| 2018-2019 | 2018-2019 | 2018-2019 |
| 2017-2018 | 2017-2018 | 2017-2018 |
| 2016-2017 | 2016-2017 | 2016-2017 |
| 2015-2016 | 2015-2016 | 2015-2016 |
| 2014-2015 | 2014-2015 | 2014-2015 |
| 2013-2014 | 2013-2014 | 2013-2014 |
| 2012-2013 | 2012-2013 | 2012-2013 |
| 2011-2012 | 2011-2012 | 2011-2012 |
| 2010-2011 | 2010-2011 | 2010-2011 |
| 2009-2010 | 2009-2010 | 2009-2010 |
| 2008-2009 | 2008-2009 | 2008-2009 |
| 2007-2008 | 2007-2008 | 2007-2008 |
| 2006-2007 | 2006-2007 | 2006-2007 |
| 2005-2006 | 2005-2006 | 2005-2006 |

### 1-2 Service ID Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service ID Number |
| Field Name FR | Numéro d'identification du service |
| ID | service_id |
| Description EN | The unique number assigned to a service in the inventory to make it easier to refer to specific services. |
| Description FR | Le numéro unique attribué à un service dans le répertoire afin de faciliter le référencement à des services précis. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field cannot contain commas. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ ne peut pas contenir de virgules. |
| Example Value | 1001 |

### 1-3 Service Name (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service Name (English) |
| Field Name FR | Nom du service (anglais) |
| ID | service_name_en |
| Description EN | Identifies the official name of the service. |
| Description FR | Indique le nom officiel du service. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field has a maximum length of 350 characters. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ a une longueur maximale de 350 caractères. |
| Character Limit | 350 |
| Example Value | Old Age Security (OAS) Benefits |

### 1-4 Service Name (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service Name (French) |
| Field Name FR | Nom du service (français) |
| ID | service_name_fr |
| Description EN | Identifies the official name of the service. |
| Description FR | Indique le nom officiel du service. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field has a maximum length of 350 characters. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ a une longueur maximale de 350 caractères. |
| Character Limit | 350 |
| Example Value | Prestations de la Sécurité de la vieillesse |

### 1-5 Service Description (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service Description (English) |
| Field Name FR | Description du service (anglais) |
| ID | service_description_en |
| Description EN | Provides a brief description of the service, in plain language. |
| Description FR | Offre une brève description du service, en langage simple. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field has a maximum length of 1800 characters. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ a une longueur maximale de 1800 caractères. |
| Character Limit | 1800 |
| Example Value | The Old Age Security (OAS) pension is a monthly payment available to most Canadians 65 years of age who meet the Canadian legal status and residence requirements. In addition to the Old Age Security pension, there are three types of Old Age Security benefits:  the Guaranteed Income Supplement, Allowance and Allowance for the Survivor. The OAS provides financial support to millions of seniors, including those that are low-income, each year. |

### 1-6 Service Description (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service Description (French) |
| Field Name FR | Description du service (français) |
| ID | service_description_fr |
| Description EN | Provides a brief description of the service, in plain language. |
| Description FR | Offre une brève description du service, en langage simple. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field has a maximum length of 1800 characters. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ a une longueur maximale de 1800 caractères. |
| Character Limit | 1800 |
| Example Value | La pension de la Sécurité de la vieillesse (SV) est une prestation mensuelle versée à la plupart des Canadiens âgés de 65 ans et plus qui satisfont aux exigences relatives au statut juridique et à la résidence au Canada. En plus de la pension de la Sécurité de la vieillesse, il existe trois types de prestations de la Sécurité de la vieillesse : le Supplément de revenu garanti, l'Allocation et l'Allocation au survivant. La SV verse chaque année un soutien financier à des millions d'aînés, incluant ceux à faible revenu. |

### 1-7 Service Type

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service Type |
| Field Name FR | Type de service |
| ID | service_type |
| Description EN | Identifies the service type as outlined in the Guideline on Service and Digital. Multiple values must be separated by a comma (,). |
| Description FR | Indique le type de service tel qu'indiqué dans la Ligne directrice sur les services et le numérique. Séparez les entrées par une virgule (,) s’il y en a plusieurs qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text Array |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Example Value | RES |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| APIR | Agreements, Permissions, Inspections, Rulings | Accords, autorisations, inspections, décisions |
| CER | Care, Education, Recreation | Soins, éducation, loisirs |
| GNC | Grants and Contributions | Subventions et contributions |
| INFO | Information | Informations |
| LRP | Legislation, Regulation, Policy | Législation, réglementation, politique |
| PPI | Penalties, Protection, Intervention | Pénalités, protection, interventions |
| REG_VOL | High Volume Regulatory Transactions | Opérations réglementaires à demande élevée |
| RES | Resources | Ressources |

### 1-8 Service Recipient Type

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service Recipient Type |
| Field Name FR | Type de bénéficiaire du service |
| ID | service_recipient_type |
| Description EN | Targeted, client-based services: serve specific clients or groups, such as people, businesses, GC employees. Untargeted, Societal-based Service: serve society, not distinct people or groups, such as military, pure science. |
| Description FR | Services ciblés axés sur les clients : Répondent aux besoins de clients ou de groupes particuliers, par exemple les personnes, les entreprises ou les employés du GC. Services non ciblés axés sur la société : Répondent aux besoins de la société en général et non aux besoins de personnes ou de groupes distincts, par exemple les forces armées ou la science pure. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Example Value | CLIENT |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| CLIENT | Targeted, Client-based service | Service ciblé axé sur les clients |
| SOCIETY | Untargeted, Societal-based service | Service non-ciblé axé sur la société |

### 1-9 Service Scope

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service Scope |
| Field Name FR | Étendue du service |
| ID | service_scope |
| Description EN | Indicates whether the service is external or internal to government. Multiple values must be separated by a comma (,). |
| Description FR | Indique si le service est offert aux clients externes ou internes au gouvernement. Séparez les entrées par une virgule (,) s’il y en a plusieurs qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text Array |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Example Value | EXTERN |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| CLUSTER | Internal Cluster Service | Service cluster interne |
| ENTERPRISE | Internal Enterprise Service | Service interne intégré |
| EXTERN | External Service | Service externe |
| INTERN | Internal Service | Service interne |

### 1-10 Client/Target Groups

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Client/Target Groups |
| Field Name FR | Clients/groupes cibles |
| ID | client_target_groups |
| Description EN | Identifies the clients or target groups of the service. Multiple values must be separated by a comma (,). |
| Description FR | Identifie les clients ou les groupes de services cibles. Séparez les entrées par une virgule (,) s’il y en a plusieurs qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text Array |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Example Value | PERSON |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| ECONOM | Economic Segments (Businesses) | Segments économiques (entreprises) |
| FOR | Foreign Entities | Entités étrangères |
| INTERN_GOV | Internal to Government | Interne au gouvernement |
| NGO | Non Profit Institutions and Organizations | Institutions et organismes sans but lucratif |
| PERSON | Persons | Particuliers |
| PTC | Provinces, Territories or Communities | Provinces, territoires et collectivités |

### 1-11 Program ID Code

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Program ID Code |
| Field Name FR | Code d'identification du programme |
| ID | program_id |
| Description EN | Identifies the unique program code associated with program elements for all strategic outcomes, programs, sub-programs, and sub-sub-programs. The Program codes in the government-wide Chart of Accounts can be used.<br>Corporate planners in the department/agency who are responsible for the Policy on Results can assist in identifying this, if needed. Multiple values must be separated by a comma (,). |
| Description FR | Indique le code de programme unique associé aux éléments de programme pour tous les résultats stratégiques, les programmes, les sous-programmes et les sous-sous-programmes. Les codes de programme du Plan comptable à l'échelle de l'administration fédérale peuvent être utilisés.<br>Les planificateurs ministériels du ministère ou de l'organisme responsables de la Politique sur les résultats peuvent aider à déterminer le code d'identification du programme, au besoin. Séparez les entrées par une virgule (,) s’il y en a plusieurs qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text Array |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Example Value | BGN01 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| AYO00 | Police Operations | Opérations policières |
| AYR00 | Canadian Law Enforcement Services | Services canadiens d'application de la loi |
| AYX00 | Civilian review of Royal Canadian Mounted Police members' conduct in the performance of their duties | Examen civil de la conduite des membres de la Gendarmerie royale du Canada dans l'exercice de leurs fonctions |
| BAA00 | Nuclear laboratories | Laboratoires nucléaires |
| BAB00 | Nuclear decommissioning and radioactive waste management | Déclassement nucléaire et gestion des déchets radioactifs |
| BCZ01 | Data Partnerships and Pan-Canadian Collaboration | Partenariats de données et Collaboration pancanadienne |
| BCZ02 | Marketing | Marketing |
| BCZ03 | Investor Services | Services aux investisseurs |
| BED01 | Inclusive Communities | Collectivités inclusives |
| BED02 | Diversified Communities | Collectivités diversifiées |
| BED03 | Research and Development and Commercialization | Recherche-développement et commercialisation |
| BED04 | Innovation Ecosystem | Écosystème d'innovation |
| BED05 | Business Growth | Croissance des entreprises |
| BED06 | Trade and Investment | Commerce et investissement |
| BED07 | Policy Research and Engagement | Recherche stratégique et mobilisation |
| BEE01 | Registry Services | Service de greffe |
| BEE02 | Legal Services | Services juridiques |
| BEE03 | Mandate and Members Services | Services liés aux mandats et aux membres |
| BEG01 | Judicial Services | Services judiciaires |
| BEG02 | Registry Services | Services de greffe |
| BEG03 | E-Courts | Tribunaux électroniques |
| BEG04 | Security | Sécurité |
| BEN00 | Appeal case reviews | Examen d'appels |
| BEO00 | Canadian Air Transport Security Authority | Administration canadienne de la sûreté du transport aérien |
| BEZ01 | Copyright Tariff Setting and Issuance of Licences | Établissement de tarifs et délivrance de licences pour l'utilisation des droits d'auteur |
| BFD00 | Canadian Broadcasting Corporation | Société Radio-Canada |
| BFJ00 | Canada Council for the Arts | Conseil des Arts du Canada |
| BFO01 | Maintenance of infrastructure and security | Entretien des infrastructures et sécurité |
| BFY01 | Educational, cultural and heritage activities | Activités pédagogiques, culturelles et patrimoniales |
| BFZ01 | Occupational health and safety information and services | Services et renseignements sur la santé et la sécurité au travail |
| BGA00 | Canadian Dairy Commission | Commission canadienne du lait |
| BGB01 | Grain Quality | Qualité des grains |
| BGB02 | Grain Research | Recherches sur les grains |
| BGB03 | Safeguards for Grain Farmers | Mesures de protection des producteurs de grain |
| BGC01 | Refugee Protection Decisions | Décisions relatives à la protection des réfugiés |
| BGC02 | Refugee Appeal Decisions | Décisions relatives aux appels des réfugiés |
| BGC03 | Admissibility and Detention Decisions | Décisions relatives aux enquêtes et à la détention |
| BGC04 | Immigration Appeal Decisions | Décisions relatives aux appels en matière d'immigration |
| BGD01 | Visitors | Visiteurs |
| BGD02 | International Students | Étudiants étrangers |
| BGD03 | Temporary Workers | Travailleurs temporaires |
| BGE01 | Federal Economic Immigration | Immigration économique fédérale |
| BGE02 | Regional Economic Immigration | Immigration économique régionale |
| BGE03 | Family Reunification | Regroupement familial |
| BGE04 | Humanitarian/Compassionate and Discretionary Immigration | Immigration pour considérations d'ordre humanitaire et discrétionnaire |
| BGE05 | Refugee Resettlement | Réinstallation des réfugiés |
| BGE06 | Asylum | Asile |
| BGE07 | Settlement | Établissement |
| BGF01 | Citizenship | Citoyenneté |
| BGF02 | Passport | Passeports |
| BGG01 | Voting Services Delivery and Field Management | Prestation des services de vote et gestion en région |
| BGG02 | National Register of Electors and Electoral Geography | Registre national des électeurs et géographie électorale |
| BGG03 | Public Education and Information | Éducation et information du public |
| BGG04 | Electoral Integrity and Regulatory Oversight | Intégrité électorale et surveillance réglementaire |
| BGH01 | Protection of Official Languages Rights | Protection des droits liés aux langues officielles |
| BGI01 | Advancement of Official Languages | Avancement des langues officielles |
| BGJ00 | Assistance for housing needs | Aide pour combler les besoins en matière de logement |
| BGK00 | Financing for housing | Financement de l'habitation |
| BGL00 | Housing expertise and capacity development | Savoir-faire en matière de logement et développement du potentiel |
| BGM01 | Reaching Home | Vers un chez-soi |
| BGM02 | Social Development Partnerships Program | Programme de partenariats pour le développement social |
| BGM03 | New Horizons for Seniors Program | Programme Nouveaux Horizons pour les aînés |
| BGM04 | Enabling Accessibility Fund | Fonds pour l'accessibilité |
| BGM05 | Early Learning and Child Care | Apprentissage et garde des jeunes enfants |
| BGM06 | Canadian Benefit for Parents of Young Victims of Crime | Allocation canadienne aux parents de jeunes victimes de crimes |
| BGM07 | Indigenous Early Learning Child Care Transformation Initiative | Initiative de transformation de l'apprentissage et de la garde des jeunes enfants autochtones |
| BGM08 | Sustainable Development Goals Funding Program | Programme de financement des Objectifs de développement durable |
| BGM09 | Accessible Canada Initiative | Canada Accessible |
| BGM10 | Social Innovation and Social Finance Strategy | Stratégie d'innovation sociale et de finance sociale |
| BGM11 | Strategic Engagement and Research Program | Programme stratégique de mobilisation des partenaires et de recherche |
| BGM12 | Black-led Philanthropic Endowment Fund | Le Fonds de dotation philanthropique dirigé par des Noirs |
| BGM13 | National School Food Program | Programme national d'alimentation dans les écoles |
| BGN01 | Old Age Security | Sécurité de la vieillesse |
| BGN02 | Canada Disability Savings Program | Programme canadien pour l'épargne-invalidité |
| BGN03 | Canada Pension Plan | Régime de pensions du Canada |
| BGN04 | Personal Support Worker Retirement Savings Innovation Program | Programme d'innovation pour l'épargne-retraite des préposés aux services de soutien à la personne |
| BGN05 | Canada Disability Benefit | Prestation canadienne pour les personnes handicapées |
| BGO01 | Employment Insurance | Assurance-emploi |
| BGO02 | Workforce Development Agreements | Ententes sur le développement de la main-d'œuvre |
| BGO03 | Labour Market Development Agreements | Ententes sur le développement du marché du travail |
| BGO04 | Opportunities Fund for Persons with Disabilities | Fonds d'intégration pour les personnes handicapées |
| BGO05 | Job Bank | Guichet-Emplois |
| BGO06 | Youth Employment and Skills Strategy | Stratégie emploi et compétences jeunesse |
| BGO07 | Canada Service Corps | Service jeunesse Canada |
| BGO08 | Skills and Partnership Fund | Fonds pour les compétences et les partenariats |
| BGO09 | Skills for Success | Compétences pour réussir |
| BGO10 | Indigenous Skills and Employment Training (ISET) Program | Programme de formation pour les compétences et l'emploi destiné aux Autochtones |
| BGO11 | Student Work Placement Program | Programme de stages pratiques pour étudiants |
| BGO12 | Union Training and Innovation Program | Programme pour la formation et l'innovation en milieu syndical |
| BGO13 | Sectoral Workforce Solutions Program | Programme de solutions pour la main-d'œuvre sectorielle |
| BGO14 | Temporary Foreign Worker Program | Programme des travailleurs étrangers temporaires |
| BGO15 | Foreign Credential Recognition Program | Programme de reconnaissance des titres de compétences étrangers |
| BGO16 | Enabling Fund for Official Language Minority Communities | Fonds d'habilitation pour les communautés de langue officielle en situation minoritaire |
| BGO17 | Canada Student Financial Assistance Program and Canada Apprentice Loans | Programme canadien d'aide financière aux étudiants et prêts aux apprentis |
| BGO18 | Canada Education Savings Program | Programme canadien pour l'épargne-études |
| BGO19 | Skilled Trades and Apprenticeship (Red Seal Program) | Métiers spécialisés et apprentissage (programme du Sceau rouge) |
| BGO20 | Apprenticeship Grants | Subvention aux apprentis |
| BGO21 | Future Skills | Compétences futures |
| BGO22 | Skilled Trades Awareness and Readiness (STAR) Program | Programme de sensibilisation et de préparation aux métiers spécialisés (PSPMS) |
| BGO23 | Supports for Student Learning | Soutien à l'apprentissage des étudiants |
| BGO24 | Canada Emergency Response Benefit | Prestation canadienne d'urgence |
| BGO25 | Canada Recovery Benefits | Prestations canadiennes de relance économique |
| BGO26 | Apprenticeship Service | Service d'apprentissage |
| BGO27 | Community Workforce Development Program | Le programme de développement de la main-d'œuvre des communautés |
| BGO28 | Canada Worker Lockdown Benefit | Prestation canadienne pour les travailleurs en cas de confinement |
| BGO29 | Canadian Apprenticeship Strategy | Stratégie canadienne de formation en apprentissage |
| BGO30 | Pandemic-Related Benefits | Prestations liées à la pandémie |
| BGO31 | Canadian Benefit for Parents of Young Victims of Crime | Allocation canadienne aux parents de jeunes victimes de crimes |
| BGP01 | Labour Relations | Relations de travail |
| BGP02 | Federal Workers' Compensation | Service fédéral d'indemnisation des accidentés du travail |
| BGP03 | Occupational Health and Safety | Santé et sécurité au travail |
| BGP04 | Workplace Equity | Équité en milieu de travail |
| BGP05 | Labour Standards | Normes du travail |
| BGP06 | Wage Earner Protection Program | Programme de protection des salariés |
| BGP07 | International Labour Affairs | Affaires internationales du travail |
| BGQ01 | Government of Canada Telephone General Enquiries Services | Services téléphoniques de renseignements généraux du gouvernement du Canada |
| BGQ02 | Government of Canada Internet Presence | Présence du gouvernement du Canada sur Internet |
| BGQ03 | Citizen Service Network | Réseau de service aux citoyens |
| BGQ04 | Passport | Passeport |
| BGQ05 | Service Delivery Partnerships | Partenariats de prestation de services |
| BGQ06 | Canadian Digital Service | Service numérique canadien |
| BGR01 | Clean Growth and Climate Change Mitigation | Croissance propre et atténuation des changements climatiques |
| BGR02 | International Environment and Climate Action | Action internationale sur l'environnement et le climat |
| BGR03 | Climate Change Adaptation | Adaptation aux changements climatiques |
| BGS01 | Air Quality | Qualité de l'air |
| BGS02 | Water Quality and Ecosystems Partnerships | Qualité de l'eau et partenariat sur les ecosystèmes |
| BGS03 | Community and Sustainability | Communauté et durabilité |
| BGS04 | Aquatic Ecosystems Health, Substances and Waste Management | Santé des écosystèmes aquatiques et gestion des substances et des déchets |
| BGS05 | Compliance Promotion and Enforcement - Pollution | Promotion de la conformité et application de la loi - Pollution |
| BGS06 | Canada Water Agency Program | Programme de l'Agence canadienne de l'eau |
| BGT01 | Species at Risk | Espèces en péril |
| BGT02 | Migratory Birds and Other Wildlife | Oiseaux migrateurs et autres espèces sauvages |
| BGT03 | Habitat Conservation and Protection | Conservation et protection des habitats |
| BGT04 | Biodiversity Policy and Partnerships | Politiques et partenariats sur la biodiversité |
| BGT05 | Environmental Assessment | Évaluation environnementale |
| BGT06 | Compliance Promotion and Enforcement - Wildlife | Promotion de la conformité et application de la loi - Faune |
| BGU01 | Weather and Environmental Observations, Forecasts and Warnings | Observations, prévisions et avertissements météorologiques et environnementaux |
| BGU02 | Hydrological Services | Services hydrologiques |
| BGV01 | Impact Assessment Policy Development | Élaboration de politiques en matière d'évaluation d'impact |
| BGV02 | Assessment Delivery | Réalisation des évaluations |
| BGV03 | Assessment Administration, Conduct, and Monitoring | Administration, réalisation et surveillance de l'évaluation |
| BGV04 | Indigenous Relations and Engagement | Relations avec les Autochtones et participation des Autochtones |
| BGW01 | Heritage Places Establishment | Création de lieux patrimoniaux |
| BGW02 | Heritage Places Conservation | Conservation des lieux patrimoniaux |
| BGW03 | Heritage Places Promotion and Public Support | Promotion des lieux patrimoniaux et soutien du public |
| BGW04 | Visitor Experience | Expérience du visiteur |
| BGW05 | Heritage Canals, Highways and Townsites Management | Gestion des canaux patrimoniaux, des routes et des lotissements urbains |
| BGX01 | Legislative Audit | Audit législatif |
| BGY00 | Shared water resources management | Gestion des ressources communes en eau |
| BGZ00 | Great Lakes water quality management | Gestion de la qualité de l'eau des Grands Lacs |
| BKX00 | International Development Research Centre | Centre de recherches pour le développement international |
| BKY00 | Governor General Support | Soutien du gouverneur général |
| BKZ00 | Canadian Tourism Commission | Commission canadienne du tourisme |
| BLL01 | Business innovation and growth | Innovation et croissance des entreprises |
| BLL02 | Vitality of communities | Vitalité des collectivités |
| BLL03 | Targeted or temporary support | Soutien ponctuel ou ciblé |
| BLL04 | Regional Innovation | Innovation régionale |
| BLM01 | Space Exploration | Exploration spatiale |
| BLM02 | Space Utilization | Utilisation de l'espace |
| BLM03 | Space Capacity Development | Développement de la capacité spatiale |
| BNL01 | Community Development | Développement communautaire |
| BNL02 | Business Development | Expansion des entreprises |
| BNL03 | Policy and Advocacy | Politiques et défense des intérêts |
| BNL04 | Northern Projects Management | Gestion des projets nordiques |
| BNM01 | Advanced Manufacturing | Fabrication de pointe |
| BNM02 | Commercialization Partnerships | Partenariats de commercialisation |
| BNM03 | Business Growth and Productivity | Croissance et productivité des entreprises |
| BNM04 | Business Investment | Investissement dans les entreprises |
| BNM05 | Business Services | Services aux entreprises |
| BNM06 | Community Futures Program | Programme de développement des collectivités |
| BNM07 | Eastern Ontario Development Program | Programme de développement de l'Est de l'Ontario |
| BNM08 | Official Languages Minority Communities | Communautés de langue officielle en situation minoritaire |
| BNM09 | Regional Diversification | Diversification régionale |
| BNM10 | Business Scale Up and Productivity | Accroissement d'échelle et productivité des entreprises |
| BNM11 | Regional Innovation Ecosystem | Écosystème d'innovation régional |
| BNM12 | Community Economic Development and Diversification | Développement économique et diversification des collectivités |
| BNN01 | Talent Development | Développement des talents |
| BNN02 | Support for Underrepresented Entrepreneurs | Soutien aux entrepreneurs sous-représentés |
| BNN03 | Bridging Digital Divides | Combler le fossé numérique |
| BNN04 | Economic Development in Northern Ontario | Développement économique du Nord de l'Ontario |
| BNN05 | Consumer Affairs | Programme des consommateurs |
| BNO01 | Science and Research | Sciences et recherche |
| BNO02 | Horizontal Science, Research and Technology Policy | Politique horizontale sur les sciences, la recherche et la technologie |
| BNO03 | Innovation Superclusters Initiative | Initiative des supergrappes d'innovation |
| BNO04 | Support to External Advisors | Soutien aux conseillers externes |
| BNP01 | Business Innovation | L'innovation en entreprises |
| BNP02 | Support for Small Business | Aide pour les petites entreprises |
| BNP03 | Business Policy and Analysis | Politique de l'entreprise et analyse |
| BNP04 | Economic Outcomes from Procurement | Retombées économiques de l'approvisionnement |
| BNP05 | Digital Service | Services numériques |
| BNP06 | Spectrum and Telecommunications | Spectre et télécommunications |
| BNP07 | Clean Technology and Clean Growth | Technologies et croissance propres |
| BNP08 | Communication Technologies, Research and Innovation | Recherche et innovation dans le domaine des technologies des communications |
| BNP09 | Business Conditions Policy | Politique sur les conditions commerciales |
| BNP10 | Insolvency | Insolvabilité |
| BNP11 | Intellectual Property | Propriété intellectuelle |
| BNP12 | Competition Law Enforcement and Promotion | Promotion et application du droit de la concurrence |
| BNP13 | Federal Incorporation | Constitution en société sous le régime fédéral |
| BNP14 | Investment Review | Examen des investissements |
| BNP15 | Trade Measurement | Mesure commerciale |
| BNP16 | Tourism | Tourisme |
| BNP17 | Talent Development | Développement des talents |
| BNP18 | Marketplace Protection and Promotion | Protection et promotion du marché |
| BNQ01 | Aerospace | Aérospatiale |
| BNQ02 | Aquatic and Crop Resource Development | Développement des cultures et des ressources aquatiques |
| BNQ03 | Automotive and Surface Transportation | Automobile et Transports de surface |
| BNQ04 | Construction | Construction |
| BNQ05 | Clean Energy Innovation | Innovations dans les énergies propres |
| BNQ06 | Herzberg Astronomy & Astrophysics | Herzberg, Astronomie et astrophysique |
| BNQ07 | Human Health Therapeutics | Thérapeutiques en santé humaine |
| BNQ08 | Industrial Research Assistance Program | Programme d'aide à la recherche industrielle |
| BNQ09 | Information and Communications Technologies | Technologies de l'information et des communications |
| BNQ10 | International Affiliations | Affiliations internationales |
| BNQ11 | Metrology | Métrologie |
| BNQ12 | Medical Devices | Dispositifs médicaux |
| BNQ13 | Nanotechnology | Nanotechnologie |
| BNQ14 | National Science Library | Bibliothèque scientifique nationale |
| BNQ15 | Ocean, Coastal and River Engineering | Génie océanique, côtier et fluvial |
| BNQ16 | Security and Disruptive Technologies | Technologies de sécurité et de rupture |
| BNQ17 | TRIUMF | TRIUMF |
| BNQ18 | Business Management Support (Enabling) | Soutien à la gestion des affaires (fonction habilitante) |
| BNQ19 | Design & Fabrication Services (Enabling) | Services de conception et de fabrication (fonction habilitante) |
| BNQ20 | Research Information Technology Platforms (Enabling) | Technologies spécialisées d'information en R-D (fonction habilitante) |
| BNQ21 | Special Purpose Real Property (Enabling) | Biens immobiliers à vocation particulière (fonction habilitante) |
| BNQ22 | Collaborative Science, Technology and Innovation Program | Programme de collaboration en science, en technologie et en innovation |
| BNQ23 | Advanced Electronics and Photonics | Électronique et photonique avancées |
| BNQ24 | Digital Technologies | Technologies numériques |
| BNQ25 | Genomics Research and Development Initiative Shared Priority Projects | Projets à priorité partagée de l'Initiative de recherche et développement en génomique |
| BNQ26 | Biologics Manufacturing Centre | Centre de production de produits biologiques |
| BNQ27 | Canadian Photonics Fabrication Centre | Centre de fabrication pour la photonique du Canada |
| BNQ28 | Quantum and Nanotechnologies | Quantique et nanotechnologies |
| BNR01 | Discovery Research | Recherche axée sur la découverte |
| BNR02 | Research Training and Talent Development | Formation en recherche et perfectionnement des compétences |
| BNR03 | Research Partnerships | Partenariats de recherche |
| BNS00 | Standards Council of Canada | Conseil canadien des normes |
| BNT01 | Insight Research | Recherche axée sur la connaissance |
| BNT02 | Research Training and Talent Development | Formation en recherche et perfectionnement des compétences |
| BNT03 | Research Partnerships | Partenariats de recherche |
| BNT04 | New Frontiers in Research Fund | Fonds Nouvelles frontières en recherche |
| BNT05 | Canada Research Continuity Emergency Fund | Fonds d'urgence pour la continuité de la recherche au Canada |
| BNT06 | Canada Biomedical Research Fund | Fonds de recherche biomédicale du Canada |
| BNU01 | Research Support Fund | Fonds de soutien à la recherche |
| BNV01 | Economic and Environmental Statistics | Statistique économique et environnementale |
| BNV02 | Socio-economic Statistics | Statistique socioéconomique |
| BNV03 | Censuses | Recensements |
| BNV04 | Cost-Recovered Statistical Services | Services statistiques à frais recouvrables |
| BNV05 | Centres of Expertise | Centres d'expertise |
| BNW01 | Innovation | Innovation |
| BNW02 | Business Growth | Croissance des entreprises |
| BNW03 | Business Services | Services aux entreprises |
| BNW04 | Community Initiatives | Initiatives communautaires |
| BNX01 | Litigation Services | Services de contentieux |
| BNX02 | Legislative Services | Services législatifs |
| BNX03 | Advisory Services | Services de consultation juridique |
| BNY01 | Legal Policies, Laws and Governance | Politiques juridiques, lois et gouvernance |
| BNY02 | Legal Representation | Représentation juridique |
| BNY03 | Contraventions Regime | Régime de contraventions |
| BNY04 | Drug Treatment Court Funding Program | Programme de financement des tribunaux de traitement de la toxicomanie |
| BNY05 | Victims of Crime | Victimes d'actes criminels |
| BNY06 | Youth Justice | Justice pour les jeunes |
| BNY07 | Family Justice | Justice pour la famille |
| BNY08 | Indigenous Justice | Justice pour les autochtones |
| BNY09 | Justice System Partnerships | Partenariats avec le système de justice |
| BNY10 | Ombudsman for Victims of Crime | Ombudsman des victimes d'actes criminels |
| BNZ01 | Payments pursuant to the Judges Act | Paiements en application de la Loi sur les juges |
| BNZ02 | Federal Judicial Affairs | Commissariat à la magistrature fédérale |
| BNZ03 | Canadian Judicial Council | Conseil canadien de la magistrature |
| BRA01 | Tax Services and Processing | Services fiscaux et traitement |
| BRA02 | Returns Compliance | Observation en matière de production des déclarations |
| BRA03 | Collections | Recouvrements |
| BRA04 | Domestic Compliance | Observation nationale |
| BRA05 | International and Large Business Compliance and Criminal Investigations | Observation du secteur international et grandes entreprises et enquêtes criminelles |
| BRA06 | Objections and Appeals | Oppositions et appels |
| BRA07 | Taxpayer Relief | Allègement pour les contribuables |
| BRA08 | Service Feedback | Rétroaction sur le service |
| BRA09 | Charities | Organismes de bienfaisance |
| BRA10 | Registered Plans | Régimes enregistrés |
| BRA11 | Policy, Rulings, and Interpretations | Politique, décisions et interprétations |
| BRA12 | Reporting Compliance | Observation en matière d'exactitude des déclarations |
| BRB01 | Benefits | Prestations |
| BRC01 | Taxpayers' Ombudsperson | Ombudsman des contribuables |
| BRD01 | Federal Prosecutions | Poursuites fédérales |
| BRD02 | Regulatory Offences and Economic Crime Prosecution Program | Programme de poursuites des infractions réglementaires et des crimes économiques |
| BRE01 | Compliance and Enforcement | Observation et contrôle d'application |
| BRF01 | Compliance with access to information obligations | Conformité avec les obligations prévues à la Loi sur l'accès à l'information |
| BRG01 | Promotion Program | Programme de promotion |
| BRG02 | Compliance Program | Programme de conformité |
| BRH01 | Court administration | Administration de la Cour |
| BRH02 | Administration of the Judges Act for the Judges of the Supreme Court of Canada | Administration de la Loi sur les juges pour les juges de la Cour suprême du Canada |
| BRI00 | Canadian Museum of History | Musée canadien de l'histoire |
| BRL00 | Canadian Museum for Human Rights | Musée canadien des droits de la personne |
| BRN00 | Canadian Museum of Immigration at Pier 21 | Musée canadien de l'immigration du Quai 21 |
| BRQ00 | Canadian Museum of Nature | Musée canadien de la nature |
| BRT01 | Support for Canadian Content Creation | Soutien pour la création de contenu canadien |
| BRT02 | Connection to the Communications System | Connexion au système de communication |
| BRT03 | Protection Within the Communications System | Protection au sein du système de communication |
| BRU00 | National Museum of Science and Technology | Musée national des sciences et de la technologie |
| BRY00 | National Gallery of Canada | Musée des beaux-arts du Canada |
| BSA01 | Promotion Program | Programme de promotion |
| BSB01 | Protection Program | Programme de protection |
| BSC01 | Audit Program | Programme d'audit |
| BSD01 | Arts | Arts |
| BSD02 | Cultural Marketplace Framework | Cadre du marché culturel |
| BSD03 | Cultural Industries Support and Development | Soutien et développement des industries culturelles |
| BSE01 | National Celebrations, Commemorations and Symbols | Célébrations, commémorations, symboles nationaux |
| BSE02 | Community Engagement and Heritage | Engagement communautaire et patrimoine |
| BSE03 | Preservation of and Access to Heritage | Préservation et accès au patrimoine |
| BSE04 | Learning About Canadian History | Apprentissage de l'histoire canadienne |
| BSF01 | Sport Development and High Performance | Développement du sport et performance de haut niveau |
| BSG01 | Multiculturalism and Anti-Racism | Multiculturalisme et lutte contre le racisme |
| BSG02 | Human Rights | Droits de la personne |
| BSG03 | Indigenous Languages | Langues autochtones |
| BSG04 | Youth Engagement | Engagement des jeunes |
| BSH01 | Official Languages | Langues officielles |
| BSI01 | Acquisition and processing of government records | Acquisition et traitement de documents gouvernementaux |
| BSI02 | Acquisition and processing of published heritage | Acquisition et traitement du patrimoine publié |
| BSI03 | Acquisition and processing of private archives | Acquisition et traitement d'archives privées |
| BSI04 | Preservation | Préservation |
| BSJ01 | Public services | Services publics |
| BSJ02 | Outreach and support to communities | Sensibilisation et soutien aux collectivités |
| BSJ03 | Access to information and privacy | Accès à l'information et protection des renseignements personnels |
| BSK00 | National Arts Centre Corporation | Société du Centre national des Arts |
| BSM01 | Audiovisual programming and production | Programmation et production audiovisuelles |
| BSN00 | National Capital Commission | Commission de la capitale nationale |
| BSP01 | Distribution of works and audience engagement | Distribution des œuvres et interaction avec les auditoires |
| BSP02 | Promotion of works and National Film Board outreach | Promotion des œuvres et rayonnement de l'Office national du film |
| BSP03 | Preservation, conservation and digitization of works | Préservation, conservation et numérisation des œuvres |
| BSQ00 | Funding the production of Canadian content | Financement à la production de contenus canadiens |
| BSR00 | Promoting Canadian talent and content | Promotion des talents et des contenus canadiens |
| BSS00 | Administration and Interpretation of the Conflict of Interest Act and the Conflict of Interest Code for Members of the House of Commons | Application et interprétation de la Loi sur les conflits d'intérêts et du Code régissant les conflits d'intérêts des députés |
| BST00 | Members and House Officers | Députés et agents supérieurs de la Chambre |
| BSU00 | House Administration | Administration de la Chambre |
| BSV00 | Information Support for Parliament | Services d'information aux parlementaires |
| BSW00 | Physical security | Sécurité physique |
| BSX00 | Senators, House Officers, and their Offices | Sénateurs, hauts fonctionnaires, et bureaux des sénateurs |
| BSY00 | Administrative Support | Soutien administratif |
| BSZ00 | Chamber, Committees and Associations | Chambre, comités et associations |
| BTA01 | Infrastructure, Tolls and Export Applications | Demandes relatives aux infrastructures, aux droits et aux exportations |
| BTA02 | Participant Funding | Aide financière aux participants |
| BTB01 | Company Performance | Rendement des sociétés |
| BTB02 | Management System and Industry Performance | Système de gestion et rendement du secteur |
| BTB03 | Emergency Management | Gestion des situations d'urgence |
| BTB04 | Regulatory Framework | Cadre de réglementation |
| BTC01 | Energy System Information | Information sur les filières énergétiques |
| BTC02 | Pipeline Information | Information sur les pipelines |
| BTD01 | Stakeholder Engagement | Mobilisation des parties prenantes |
| BTD02 | Indigenous Engagement | Mobilisation des Autochtones |
| BTE00 | Administration and Interpretation of the Ethics and Conflict of Interest Code for Senators | Administration et interprétation du Code régissant l'éthique et les conflits d'intérêts |
| BTF01 | Fisheries Management | Gestion des pêches |
| BTF02 | Aboriginal Programs and Treaties | Programmes Autochtones et traités |
| BTF03 | Aquaculture Management | Gestion de l'aquaculture |
| BTF04 | Salmonid Enhancement | Mise en valeur des salmonidés |
| BTF05 | International Engagement | Engagement à l'échelle internationale |
| BTF06 | Small Craft Harbours | Ports pour petits bateaux |
| BTF07 | Conservation and Protection | Conservation et protection |
| BTF08 | Aquatic Animal Health | Santé des animaux aquatiques |
| BTF09 | Biotechnology and Genomics | Biotechnologie et génomique |
| BTF10 | Aquaculture Science | Sciences de l'aquaculture |
| BTF11 | Fisheries Science | Sciences halieutiques |
| BTF12 | Economics and Statistics | Économie et statistiques |
| BTF13 | Fish and Seafood Sector | Secteur du poisson et des fruits de mer |
| BTG01 | Fish and Fish Habitat Protection | Programme de protection du poisson et de son habitat |
| BTG02 | Aquatic Invasive Species | Espèces aquatiques envahissantes |
| BTG03 | Species at Risk | Espèces en péril |
| BTG04 | Marine Planning and Conservation | Planification et conservation marines |
| BTG05 | Aquatic Ecosystem Science | Science liée aux écosystèmes aquatiques |
| BTG06 | Oceans and Climate Change Science | Science liée aux océans et au changement climatique |
| BTG07 | Aquatic Ecosystems Economics | Économie liée aux écosystèmes aquatiques |
| BTH01 | Icebreaking Services | Services de déglaçage |
| BTH02 | Aids to Navigation | Aides à la navigation |
| BTH03 | Waterways Management | Gestion des voies navigables |
| BTH04 | Marine Communications and Traffic Services | Services de communications et de trafic maritimes |
| BTH05 | Shore-based Asset Readiness | État de préparation des actifs terrestres |
| BTH06 | Hydrographic Services, Data and Science | Services hydrographiques, données et sciences |
| BTI01 | Search and Rescue | Recherche et sauvetage |
| BTI02 | Marine Environmental and Hazards Response | Réponse aux Intervention environnementale et dangers maritimes |
| BTI03 | Maritime Security | Sécurité maritime |
| BTI04 | Fleet Operational Capability | Capacité opérationnelle de la flotte |
| BTI05 | Fleet Maintenance | Entretien de la flotte |
| BTI06 | Fleet Procurement | Acquisitions de la flotte |
| BTI07 | Canadian Coast Guard College | Collège de la Garde côtière canadienne |
| BTI08 | Marine Operations Economics | Économie liée aux opérations maritimes |
| BTJ01 | Nuclear Fuel Cycle Program | Programme de cycle du combustible nucléaire |
| BTJ02 | Nuclear Reactors Program | Programme des réacteurs nucléaires |
| BTJ03 | Nuclear Substances and Prescribed Equipment Program | Programme des substances nucléaires et de l'équipement réglementé |
| BTJ04 | Nuclear Non-Proliferation Program | Programme de non prolifération nucléaire |
| BTJ05 | Scientific, Regulatory and Public Information Program | Programme de renseignements scientifiques, réglementaires et publics |
| BTK01 | Investing in Canada Phase 1 – Funding Allocations for Provinces and Territories | Phase 1 du plan Investir dans le Canada – Allocations de financement pour les provinces et les territoires |
| BTK02 | Investing in Canada Phase 1 – Funding for Federation of Canadian Municipalities | Phase 1 du plan Investir dans le Canada – Financement de la Fédération canadienne des municipalités |
| BTK03 | Investing in Canada Infrastructure Program | Programme d'infrastructure du plan Investir dans le Canada |
| BTK04 | Gas Tax Fund – Permanent Funding for Municipalities | Fonds de la taxe sur l'essence – Financement permanent pour les municipalités |
| BTK05 | New Building Canada Fund – National Infrastructure Component | Nouveau Fonds Chantiers Canada – volet Infrastructures nationales |
| BTK06 | New Building Canada Fund – Funding Allocations for Provinces and Territories | Nouveau Fonds Chantiers Canada – Allocations de financement pour les provinces et les territoires |
| BTK07 | Historical Programs | Programmes déjà en place |
| BTK08 | New Champlain Bridge Corridor Project | Projet de corridor du nouveau pont Champlain |
| BTK09 | Gordie Howe International Bridge Team | Projet du pont international Gordie-Howe |
| BTK10 | Toronto Waterfront Revitalization Initiative | Initiative de revitalisation du secteur riverain de Toronto |
| BTK11 | Smart Cities Challenge | Défi des villes intelligentes |
| BTK12 | Disaster Mitigation and Adaption Fund | Fonds d'atténuation et d'adaptation en matière de catastrophes |
| BTK13 | Research and Knowledge Initiative | Initiative de recherche et de connaissances |
| BTL01 | Canadian Geodetic Survey: Spatially Enabling Canada | Levés géodésiques du Canada : Le Canada à référence spatiale |
| BTL02 | Geological Knowledge for Canada's Onshore and Offshore Land | Connaissances géologiques des terres côtières et extracôtières du Canada |
| BTL03 | Core Geospatial Data | Données géospatiales essentielles |
| BTL04 | Canada-US International Boundary Treaty | Traité de la frontière internationale entre le Canada et les États-Unis |
| BTL05 | Canada Lands Survey System | Système d'arpentage des terres du Canada |
| BTL06 | Geoscience for Sustainable Development of Natural Resources | Géoscience pour la valorisation durable des ressources naturelles |
| BTL07 | Pest Risk Management | Gestion des risques liés aux ravageurs |
| BTL08 | Forest Climate Change | Changements climatiques liés aux forêts |
| BTL09 | Climate Change Adaptation | Adaptation aux changements climatiques |
| BTL10 | Explosives Safety and Security | Sécurité et sûreté des explosifs |
| BTL11 | Geoscience to Keep Canada Safe | Géoscience pour assurer la sécurité des Canadiens |
| BTL12 | Wildfire Risk Management | Gestion du risque de feux de végétation |
| BTL13 | Polar Continental Shelf Program | Programme du plateau continental polaire |
| BTM01 | Clean Energy Technology Policy, Research and Engagement | Politique, recherche et mobilisation en matière de technologies énergétiques propres |
| BTM02 | Clean Growth in Natural Resource Sectors | Croissance propre dans les secteurs des ressources naturelles |
| BTM03 | Energy Innovation Program | Programme d'innovation énergétique |
| BTM04 | Green Mining Innovation | Innovation Mines vertes |
| BTM05 | Fibre Solutions | Solutions axées sur les fibres |
| BTM06 | Sustainable Forest Management | Aménagement forestier durable |
| BTM07 | Cumulative Effects | Effets cumulatifs |
| BTM08 | Lower Carbon Transportation | Transport faible en carbone |
| BTM09 | Electricity Resources | Ressources en électricité |
| BTM10 | Energy Efficiency | Efficacité énergétique |
| BTM11 | Energy and Climate Change Policy | Politique en matière d'énergie et de changements climatiques |
| BTM12 | Innovative Geospatial Solutions | Solutions géospatiales novatrices |
| BTM13 | Energy Innovation and Clean Technology (EICT) | Innovation énergétique et technologies propres (IETP) |
| BTN00 | The Jacques-Cartier and Champlain Bridges Inc. | Les Ponts Jacques-Cartier et Champlain Inc. |
| BTO01 | Forest Sector Competitiveness | Compétitivité du secteur forestier |
| BTO02 | Provision of Federal Leadership in the Minerals and Metals Sector | Prestation d'un leadership fédéral dans le secteur des minéraux et des métaux |
| BTO03 | Energy Safety and Security, and Petroleum Resources | Sûreté et sécurité énergétique, et ressources pétrolières |
| BTO04 | International Energy Engagement | Mobilisation au titre de l'énergie à l'échelle internationale |
| BTO05 | Statutory Offshore Payments | Paiements législatifs pour les hydrocarbures extracôtiers |
| BTO06 | Indigenous Partnerships Office | Bureau des partenariats avec les Autochtones |
| BTO07 | Nòkwewashk | Nòkwewashk |
| BTO08 | Youth Employment and Skills Strategy - Science and Technology Internship Program (Green Jobs) | La Stratégie emploi et compétences jeunesse - Programme de stages en sciences et technologie (Emplois verts) |
| BTO09 | Indigenous Reconciliation and Regulatory Coordination | Réconciliation avec les peuples autochtones et coordination réglementaire |
| BTQ00 | Windsor-Detroit Bridge Authority | Autorité du pont Windsor-Détroit |
| BTR01 | Learning | Apprentissage |
| BTS01 | Disclosure and Reprisal Management | Gestion des divulgations et des représailles |
| BTT01 | Analysis and Outreach | Analyse et liaison |
| BTT02 | Dispute Resolution | Règlement des différends |
| BTT03 | Determinations and Compliance | Déterminations et conformité |
| BTU00 | Manage International Bridges | Gestion de ponts internationaux |
| BTV00 | Marine Atlantic Inc. | Marine Atlantique S.C.C. |
| BTW01 | Aviation Safety Regulatory Framework | Cadre réglementaire de la sécurité aérienne |
| BTW02 | Aviation Safety Oversight | Surveillance de la sécurité aérienne |
| BTW03 | Aviation Safety Certification | Certification de la sécurité aérienne |
| BTW04 | Aviation Security Regulatory Framework | Cadre réglementaire de la sûreté aérienne |
| BTW05 | Aviation Security Oversight | Surveillance de la sûreté aérienne |
| BTW06 | Aircraft Services | Services aériens |
| BTW07 | Marine Safety Regulatory Framework | Cadre réglementaire de la sécurité maritime |
| BTW08 | Marine Safety Oversight | Surveillance de la sécurité maritime |
| BTW09 | Marine Safety Certification | Certification de la sécurité maritime |
| BTW10 | Marine Security Regulatory Framework | Cadre réglementaire de la sûreté maritime |
| BTW11 | Marine Security Oversight | Surveillance de la sûreté maritime |
| BTW12 | Navigation Protection Program | Programme de protection de la navigation |
| BTW13 | Rail Safety Regulatory Framework | Cadre réglementaire de la sécurité ferroviaire |
| BTW14 | Rail Safety Oversight | Surveillance de la sécurité ferroviaire |
| BTW15 | Rail Safety Improvement Program | Programme d'amélioration de la sécurité ferroviaire |
| BTW16 | Multi-Modal and Road Safety Regulatory Framework | Cadre réglementaire du transport multimodal et de la sécurité de l'automobile |
| BTW17 | Multi-Modal and Road Safety Oversight | Surveillance du transport multimodal et de la sécurité de l'automobile |
| BTW18 | Intermodal Surface Security Regulatory Framework | Cadre réglementaire de la sûreté intermodale du transport terrestre |
| BTW19 | Rail Security Program | Programme de la sûreté ferroviaire |
| BTW20 | Transportation of Dangerous Goods Regulatory Framework | Cadre réglementaire pour le transport des marchandises dangereuses |
| BTW21 | Transportation of Dangerous Goods Oversight | Surveillance du transport des marchandises dangereuses |
| BTW22 | Transportation of Dangerous Goods Technical Support | Soutien technique du transport des marchandises dangereuses |
| BTW23 | Multimodal Safety & Security Services | Services de la sécurité et la sûreté multimodales |
| BTW24 | Security Clearances | Habilitations de sécurité |
| BTW25 | Emergency Management | Gestion des urgences |
| BTW26 | National Enforcement Program | Programme national d'application de la loi |
| BTW27 | National Security and Intelligence Program | Programmes de sécurité nationale et de renseignement |
| BTX01 | Climate Change and Clean Air | Changement climatique et qualité de l'air |
| BTX02 | Protecting Oceans and Waterways | Protéger les océans et les voies navigables |
| BTX03 | Environmental Stewardship of Transportation | Gérance environnementale des transports |
| BTX04 | Transportation Innovation | Innovation dans le secteur des transports |
| BTX05 | Indigenous Partnerships and Engagement | Partenariats avec les Autochtones et mobilisation |
| BTX06 | Navigation Protection Program | Programme de protection de la navigation |
| BTY01 | Transportation Marketplace Frameworks | Cadres qui appuient le marché des transports |
| BTY02 | Transportation Analysis | Analyse du secteur des transports |
| BTY03 | Transportation Infrastructure | Infrastructure de transport |
| BTY04 | National Trade Corridors | Corridors commerciaux nationaux |
| BTZ00 | VIA Rail Canada Inc. | VIA Rail Canada Inc. |
| BUA01 | Conditional Release Decisions | Décisions relatives à la mise en liberté sous condition |
| BUB01 | Conditional Release Openness and Accountability | Application transparente et responsable du processus de mise en liberté sous condition |
| BUC01 | Record Suspension Decisions/Clemency Recommendations | Décisions relatives à la suspension du casier et recommandations concernant la clémence |
| BUD00 | Canada Post Corporation | Société canadienne des postes |
| BUE01 | Reviews | Examens |
| BUF01 | Targeting | Ciblage |
| BUF02 | Intelligence Collection and Analysis | Collecte et analyse du renseignement |
| BUF03 | Security Screening | Filtrage de sécurité |
| BUF04 | Traveller Facilitation and Compliance | Facilitation de la circulation et conformité des voyageurs |
| BUF05 | Commercial Facilitation and Compliance | Facilitation et conformité des opérations commerciales |
| BUF06 | Anti-Dumping and Countervailing | Antidumping et compensation |
| BUF07 | Trusted Traveller | Voyageurs fiables |
| BUF08 | Trusted Trader | Négociants fiables |
| BUF09 | Recourse | Recours |
| BUF10 | Force Generation | Constitution des forces |
| BUF11 | Buildings and Equipment | Immeubles et d'équipements |
| BUF12 | Field Technology Support | Support technologique |
| BUF13 | Trade Facilitation and Compliance | Facilitation et conformité des échanges commerciaux |
| BUG01 | Immigration Investigations | Enquêtes en matière d'immigration |
| BUG02 | Detentions | Détentions |
| BUG03 | Hearings | Audiences |
| BUG04 | Removals | Renvois |
| BUG05 | Criminal Investigations | Enquêtes criminelles |
| BUH01 | Setting Rules for Plant Health | Établissement des règles pour la protection des végétaux |
| BUH02 | Plant Health Compliance Promotion | Promotion de la conformité en matière de protection des végétaux |
| BUH03 | Monitoring and Enforcement for Plant Health | Surveillance et application de la loi en matière de protection des végétaux |
| BUH04 | Permissions for Plant Products | Autorisations pour les produits d'origine végétale |
| BUH05 | Setting Rules for Animal Health | Établissement des règles pour la santé animale |
| BUH06 | Animal Health Compliance Promotion | Promotion de la conformité en matière de santé animale |
| BUH07 | Monitoring and Enforcement for Animal Health | Surveillance et application de la loi en matière de santé animale |
| BUH08 | Permissions for Animal Products | Autorisations pour les produits d'origine animale |
| BUH09 | Setting Rules for Food Safety and Consumer Protection | Établissement de règles pour la salubrité des aliments et la protection des consommateurs |
| BUH10 | Food Safety and Consumer Protection Compliance Promotion | Promotion de la conformité en matière de salubrité des aliments et de protection des consommateurs |
| BUH11 | Monitoring and Enforcement for Food Safety and Consumer Protection | Surveillance et application de la loi en matière de salubrité des aliments et de protection des consommateurs |
| BUH12 | Permissions for Food Products | Autorisations pour les produits alimentaires |
| BUH13 | International Standards Setting | Définition de normes internationales |
| BUH14 | International Regulatory Cooperation and Science Collaboration | Coopération internationale en matière de réglementation et collaboration scientifique |
| BUH15 | Market Access Support | Soutien à l'accès aux marchés |
| BUI01 | Investigator-Initiated Research | Recherche libre |
| BUI02 | Training and Career Support | Formation et soutien professionnel |
| BUI03 | Research in Priority Areas | Recherche priorisée |
| BUJ01 | Institutional Management and Support | Gestion et soutien en établissement |
| BUJ02 | Supervision | Surveillance |
| BUJ03 | Drug Enforcement | Lutte antidrogue |
| BUJ04 | Clinical Services and Public Health | Services cliniques et de santé publique |
| BUJ05 | Mental Health Services | Services de santé mentale |
| BUJ06 | Food Services | Services d'alimentation |
| BUJ07 | Accommodation Services | Services de logement |
| BUJ08 | Preventive Security and Intelligence | Sécurité préventive et renseignement |
| BUK01 | Offender Case Management | Gestion des cas des délinquants |
| BUK02 | Community Engagement | Engagement des collectivités |
| BUK03 | Chaplaincy Services | Services d'aumônerie |
| BUK04 | Elder Services | Services d'aînés |
| BUK05 | Correctional Program Readiness | Préparation aux programmes correctionnels |
| BUK06 | Correctional Programs | Programmes correctionnels |
| BUK07 | Correctional Program Maintenance | Programme de maintien des acquis |
| BUK08 | Offender Education | Éducation des délinquants |
| BUK09 | CORCAN Employment and Employability | CORCAN – Emploi et employabilité |
| BUK10 | Social Program | Programme social |
| BUK11 | Correctional Programs | Programmes correctionnels |
| BUL01 | Community Management and Security | Sécurité et gestion dans la collectivité |
| BUL02 | Community-Based Residential Facilities | Établissements résidentiels communautaires |
| BUL03 | Community Correctional Centres | Centres correctionnels communautaires |
| BUL04 | Community Health Services | Services de santé dans la collectivité |
| BUM01 | Foreign Signals Intelligence | Renseignement électromagnétique étranger |
| BUM02 | Cyber Security and Information Assurance | Cybersécurité et assurance de l'information |
| BUM03 | Foreign Cyber Operations | Cyber opérations étrangères |
| BUM04 | Operations Enablement | Soutien aux opérations |
| BUN01 | Operations in Canada | Opérations au Canada |
| BUN02 | Operations in North America | Opérations en Amérique du Nord |
| BUN03 | International Operations | Opérations internationales |
| BUN04 | Global Engagement | Engagement mondial |
| BUN05 | Cyber Operations | Cyberopérations |
| BUN06 | Command, Control and Sustainment of Operations | Commandement, contrôle et poursuite prolongée des opérations |
| BUN07 | Special Operations | Opérations spéciales |
| BUO01 | Strategic Command and Control | Commandement et contrôle stratégiques |
| BUO02 | Ready Naval Forces | Forces navales prêtes au combat |
| BUO03 | Ready Land Forces | Forces terrestres prêtes au combat |
| BUO04 | Ready Air and Space Forces | Forces aériennes et spatiales prêtes au combat |
| BUO05 | Ready Special Operations Forces | Forces d'opérations spéciales prêtes au combat |
| BUO06 | Ready Cyber and Joint Communication Information Systems (CIS) Forces | Cyberforces et systèmes de communication et d'information (SCI) interarmées prêts au combat |
| BUO07 | Ready Intelligence Forces | Forces du renseignement prêtes au combat |
| BUO08 | Ready Joint and Combined Forces | Forces interarmées et multinationales prêtes au combat |
| BUO09 | Ready Health, Military Police and Support Forces | Soins de santé, police militaire et forces de soutien prêts à l'action |
| BUO10 | Equipment Support | Soutien de l'équipement |
| BUO11 | Canadian Forces Liaison Council and Employer Support | Conseil de liaison des Forces canadiennes et appui des employeurs |
| BUP01 | Recruitment | Recrutement |
| BUP02 | Individual Training and Professional Military Education | Instruction individuelle et formation professionnelle militaire |
| BUP03 | Total Health Care | Gamme complète des soins de santé |
| BUP04 | Defence Team Management | Gestion de l'Équipe de la Défense |
| BUP05 | Military Transition | Transition de la vie militaire à la vie civile |
| BUP06 | Military Member and Family Support | Soutien fourni au militaire et à sa famille |
| BUP07 | Military History and Heritage | Histoire et patrimoine militaires |
| BUP08 | Military Law Services/Military Justice Superintendence | Services du droit militaire/Exercice de l'autorité de justice militaire |
| BUP09 | Ombudsman | Ombudsman |
| BUP10 | Cadets and Junior Canadian Rangers (Youth Program) | Cadets et Rangers juniors canadiens (Programme jeunesse) |
| BUQ01 | Joint Force Development | Développement des forces interarmées |
| BUQ02 | Naval Force Development | Développement de la force navale |
| BUQ03 | Land Force Development | Développement de la force terrestre |
| BUQ04 | Air and Space Force Development | Développement de la force aérienne et spatiale |
| BUQ05 | Special Operations Force Development | Développement des forces d'opérations spéciales |
| BUQ06 | Cyber and Joint Communication Information Systems (CIS) Force Development | Développement de la cyberforce et de la force du systèmes d'information et communications (SIC) interarmées |
| BUQ07 | Intelligence Force Development | Développement de la force du renseignement |
| BUQ08 | Science, Technology and Innovation | Sciences, technologie et innovation |
| BUR01 | Maritime Equipment Acquisition | Acquisition d'équipements maritimes |
| BUR02 | Land Equipment Acquisition | Acquisition d'équipements terrestres |
| BUR03 | Aerospace Equipment Acquisition | Acquisition d'équipements aérospatiaux |
| BUR04 | Defence Information Technology Systems Acquisition, Design and Delivery | Acquisition, conception et livraison de systèmes de technologie de l'information de la Défense |
| BUR05 | Defence Materiel Management | Gestion du matériel de la Défense |
| BUS01 | Defence Infrastructure Program Management | Gestion du Programme d'infrastructure de la Défense |
| BUS02 | Defence Infrastructure Construction, Recapitalization and Investment | Infrastructure de la Défense : construction, réfection et investissement |
| BUS03 | Defence Infrastructure Maintenance, Support and Operations | Infrastructure de la Défense : entretien, soutien et opérations |
| BUS04 | Defence Residential Housing | Logements résidentiels de la Défense |
| BUS05 | Defence Information Systems, Services and Programme Management | Gestion des programmes, systèmes et services d'information de la Défense |
| BUS06 | Environment and Sustainable Management | Environnement et gestion durable |
| BUS07 | Indigenous Affairs | Affaires autochtones |
| BUS08 | Naval Bases | Bases navales |
| BUS09 | Land Bases | Bases terrestres |
| BUS10 | Air and Space Wings | Escadres aérospatiales |
| BUS11 | Joint, Common and International Bases | Bases interarmées, communes et internationales |
| BUS12 | Military Police Institutional Operations | Opérations institutionnelles de la Police militaire |
| BUS13 | Safety | Sécurité |
| BUT01 | Supervision and Enforcement | Surveillance et mise en application |
| BUT02 | Research, Policy and Education | Recherche, politique et éducation |
| BUU00 | Financial Literacy | Littératie financière |
| BUU01 | Financial Literacy | Littératie financière |
| BUV01 | Tax Policy and Legislation | Politique et législation fiscales |
| BUV02 | Economic and Fiscal Policy, Planning and Forecasting | Politiques économique et budgétaire, planification et prévisions |
| BUV03 | Economic Development Policy | Politique de développement économique |
| BUV04 | Federal-Provincial Relations and Social Policy | Relations fédérales-provinciales et politique sociale |
| BUV05 | Financial Sector Policy | Politique du secteur financier |
| BUV06 | International Trade and Finance Policy | Politique des finances et échanges internationaux |
| BUV07 | Canada Health Transfer | Transfert canadien en matière de santé |
| BUV08 | Fiscal Arrangements with Provinces and Territories | Arrangements fiscaux avec les provinces et les territoires |
| BUV09 | Tax Collection and Administration Agreements | Accords de perception fiscale et d'administration fiscale |
| BUV10 | Commitments to International Financial Organizations | Engagements envers les organisations financières internationales |
| BUV11 | Market Debt and Foreign Reserves Management | Dette contractée sur les marchés et gestion des réserves de change |
| BUW01 | Compliance Program | Programme de conformité |
| BUW02 | Strategic Policy and Reviews | Politique stratégique et examens |
| BUX01 | Financial Intelligence Program | Programme du renseignement financier |
| BUX02 | Strategic Intelligence, Research and Analytics | Renseignements stratégiques, recherche et analyse |
| BUY00 | Security and Intelligence | Sécurité et renseignement |
| BUZ01 | Independent review of military grievances | Examen indépendant des griefs militaires |
| BVA01 | Registry of Lobbyists | Registre des lobbyistes |
| BVA02 | Outreach and Education | Sensibilisation et éducation |
| BVA03 | Compliance and Enforcement | Conformité et exécution |
| BVA04 | Registration, education and compliance | Enregistrement, éducation et conformité |
| BVB01 | International Policy Coordination | Coordination des politiques internationales |
| BVB02 | Trade, Investment and International Economic Policy | Politique sur le commerce, l'investissement et l'économie internationale |
| BVB03 | Multilateral Policy | Politiques multilatérales |
| BVB04 | International Law | Droit international |
| BVB05 | The Office of Protocol | Le Bureau du Protocole |
| BVB06 | Europe, Arctic, Middle East and Maghreb Policy & Diplomacy | Politique et diplomatie en Europe, dans l'Arctique, au Moyen-Orient et au Maghreb |
| BVB07 | Americas Policy & Diplomacy | Politique et diplomatie pour les Amériques |
| BVB08 | Asia Pacific Policy & Diplomacy | Politique et diplomatie en Asie-Pacifique |
| BVB09 | Sub-Saharan Africa Policy & Diplomacy | Politique et diplomatie en Afrique subsaharienne |
| BVB10 | Geographic Coordination and Mission Support | Coordination géographique et appui aux missions |
| BVB11 | Gender Equality and the Empowerment of Women and Girls | L'égalité des genres et le renforcement du pouvoir des femmes et des filles |
| BVB12 | Humanitarian Action | Action humanitaire |
| BVB13 | Human Development: Health & Education | Développement de la personne: Santé et éducation |
| BVB14 | Growth that works for everyone | Une croissance au service de tous |
| BVB15 | Environment and Climate Action | Environnement et l'action pour le climat |
| BVB16 | Human Rights, Governance, Democracy & Inclusion | Droits de la personne, gouvernance, démocratie et inclusion |
| BVB17 | Peace and Security Policy | Politique liée à la Paix et sécurité |
| BVB18 | Inclusive Governance | Gouvernance inclusive |
| BVB19 | International Security Policy and Diplomacy | Politique de sécurité internationale et diplomatie |
| BVB20 | International Assistance Policy | Politique d'aide internationale |
| BVB21 | International Strategy and Engagement | Stratégie et engagement internationaux |
| BVB22 | International Security | Sécurité internationale |
| BVC01 | Trade Policy, Agreements, Negotiations and Disputes | Politiques et négociations commerciales, accords et différends |
| BVC02 | Trade Controls | Réglementation commerciale |
| BVC03 | International Business Development | Développement du commerce international |
| BVC04 | International Innovation and Investment | Innovation et investissement international |
| BVC05 | Europe, Arctic, Middle East and Maghreb Trade | Commerce en Europe, dans l'Arctique, au Moyen-Orient et au Maghreb |
| BVC06 | Americas Trade | Commerce dans les Amériques |
| BVC07 | Asia Pacific Trade | Commerce en Asie-Pacifique |
| BVC08 | Sub-Saharan Africa Trade | Commerce en Afrique subsaharienne |
| BVC10 | Trade Policy and Negotiations | Politique et négociations commerciales |
| BVC11 | International Business Development, Investment Attraction and Innovation Support | Développement du commerce international, attraction des investissements et soutien à l'innovation |
| BVD01 | International Assistance Operations | Opérations d'aide internationale |
| BVD02 | Humanitarian Assistance | Aide humanitaire |
| BVD03 | Partnerships for Development Innovation | Partenariats pour innovation dans le développement |
| BVD04 | Multilateral International Assistance | Aide internationale multilatérale |
| BVD05 | Peace and Stabilization Operations | Stabilisation et opérations de paix |
| BVD06 | Anti-Crime and Counter-Terrorism Capacity Building | Programmes visant à renforcer les capacités de lutte contre la criminalité et le terrorisme |
| BVD07 | Weapons Threat Reduction | Réduction des menaces d'armes |
| BVD08 | Canada Fund for Local Initiatives | Fonds canadien d'initiatives locales |
| BVD09 | Europe, Arctic, Middle East and Maghreb International Assistance | Aide internationale en Europe, dans l'Arctique, au Moyen-Orient et au Maghreb |
| BVD10 | Americas International Assistance | Aide internationale dans les Amériques |
| BVD11 | Asia Pacific International Assistance | Aide internationale en Asie-Pacifique |
| BVD12 | Sub-Saharan Africa International Assistance | Aide internationale en Afrique subsaharienne |
| BVD13 | Grants and Contributions Policy and Operations | Politiques et opérations concernant les subventions et les contributions |
| BVD14 | Office of Human Rights, Freedom and Inclusion (OHRFI) Programming | Programmation du Bureau des droits de la personne, des libertés et de l'inclusion (BDPLI) |
| BVD15 | Development, Humanitarian, and Peace and Security Programming | Programme de développement, d'aide humanitaire, de paix et de sécurité |
| BVE01 | Consular Assistance and Services for Canadians Abroad | Aide consulaire et les services aux Canadiens à l'étranger |
| BVE02 | Emergency Preparedness and Response | Préparation et intervention en cas d'urgence |
| BVE03 | Emergency Management, Consular assistance and services to Canadians abroad | Gestion des urgences, aide consulaire et services aux Canadiens à l'étranger |
| BVF01 | Platform Corporate Services | Services ministériels au niveau de la plateforme |
| BVF02 | Foreign Service Directives | Directives sur le service extérieur |
| BVF03 | Client Relations and Mission Operations | Relations avec les clients et opérations des missions |
| BVF04 | Locally Engaged Staff Services | Services aux employés recrutés sur place |
| BVF05 | Real Property Planning and Stewardship | Planification et intendance des biens immobiliers |
| BVF06 | Real Property Project Delivery, Professional and Technical Services | Services professionnels et techniques pour l'exécution des projets de biens immobiliers |
| BVF07 | Mission Readiness and Security | Préparation et sécurité de la mission |
| BVF08 | Mission Network IM/IT | Gestion de l'information et technologie de l'information du réseau des missions |
| BVF09 | International Platform | Plateforme internationale |
| BVF10 | People at Missions | Personnel dans les missions |
| BVG01 | Health Care Systems Analysis and Policy | Analyse et politique des systèmes de soins de santé |
| BVG02 | Access, Affordability, and Appropriate Use of Drugs and Medical Devices | Accessibilité, abordabilité et usage approprié des médicaments et des instruments médicaux |
| BVG03 | Home, Community and Palliative Care | Soins à domicile, en milieu communautaire et palliatifs |
| BVG04 | Mental Health | Santé Mentale |
| BVG05 | Substance Use and Addictions | Dépendances et usage de substances |
| BVG06 | Digital Health | Santé numérique |
| BVG07 | Health Information | Information sur la Santé |
| BVG08 | Canada Health Act | Loi canadienne sur la santé |
| BVG09 | Medical Assistance in Dying | Aide médicale à mourir |
| BVG10 | Cancer Control | Lutte contre le cancer |
| BVG11 | Patient Safety | Sécurité des patients |
| BVG12 | Organs, Tissues and Blood | Organes, tissus et sang |
| BVG13 | Promoting Minority Official Languages in the Health Care Systems | Promotion des langues officielles des minorités dans le système de santé |
| BVG14 | Brain Research | Recherche sur le cerveau |
| BVG15 | Thalidomide | Thalidomide |
| BVG16 | Territorial Health Investment Fund | Fonds d'investissement-santé pour les territoires |
| BVG21 | Responsive Health Care Systems | Systèmes de soins de santé adaptés |
| BVG22 | Healthy People and Communities | Personnes et communautés en santé |
| BVG23 | Quality Health Science, Data and Evidence | Science, données et preuves de qualité sur la santé |
| BVH01 | Pharmaceutical Drugs | Produits pharmaceutiques |
| BVH02 | Biologic and Radiopharmaceutical Drugs | Médicaments biologiques et radiopharmaceutiques |
| BVH03 | Medical Devices | Matériels médicaux |
| BVH04 | Natural Health Products | Produits de santé naturels |
| BVH05 | Food & Nutrition | Aliments et nutrition |
| BVH06 | Air Quality | Qualité de l'air |
| BVH07 | Climate Change | Changements climatiques |
| BVH08 | Water Quality | Qualité de l'eau |
| BVH09 | Health Impacts of Chemicals | Incidence des produits chimiques sur la santé |
| BVH10 | Consumer Product Safety | Sécurité des produits de consommation |
| BVH11 | Workplace Hazardous Products | Matières dangereuses utilisées au travail |
| BVH12 | Tobacco Control | Lutte antitabac (y compris le vapotage) |
| BVH13 | Controlled Substances | Substances contrôlées |
| BVH14 | Cannabis | Cannabis |
| BVH15 | Radiation Protection | Radioprotection |
| BVH16 | Pesticides | Pesticides |
| BVH17 | Health Canada Specialized Services | Services spécialisés de Santé Canada |
| BVJ01 | Complaints Resolution | Règlement des plaintes |
| BVK01 | The Communications Security Establishment Commissioner's Review Program | Programme d'examen du commissaire du Centre de la sécurité des télécommunications |
| BVL01 | Ombuds for federally sentenced individuals | Ombuds pour les personnes purgeant une peine de ressort fédérale |
| BVM01 | Patented Medicine Price Regulation Program | Le programme de réglementation du prix des médicaments brevetés |
| BVM02 | Pharmaceutical Trends Program | Le programme sur les tendances relatives aux produits pharmaceutiques |
| BVN01 | Risk Assessment and Intervention – Federally Regulated Financial Institutions | Évaluation des risques et prise de mesures – Institutions financières fédérales |
| BVN02 | Regulation and Guidance of Federally Regulated Financial Institutions | Réglementation et établissement de consigne à l'intention des Institutions financières fédérales |
| BVN03 | Regulatory Approvals and Legislative Precedents | Approbations réglementaires et précédents législatifs |
| BVN04 | Federally Regulated Private Pension Plans | Régimes de retraite privés fédéraux |
| BVO01 | Actuarial Valuation and Advice | Évaluation actuarielle et conseils |
| BVP01 | Health Promotion | Promotion de la santé |
| BVP02 | Chronic Disease Prevention | Prévention des maladies chroniques |
| BVP03 | Evidence for Health Promotion, and Chronic Disease and Injury Prevention | Données probantes liées à la promotion de la santé et à la prévention des maladies chroniques et des blessures |
| BVQ01 | Laboratory Science Leadership and Services | Services et leadership en matière de science en laboratoire |
| BVQ02 | Communicable Disease and Infection Control | Contrôle des maladies transmissibles et des infections |
| BVQ03 | Vaccination | Vaccination |
| BVQ04 | Foodborne and Zoonotic Diseases | Maladies zoonotiques et d'origine alimentaire |
| BVR01 | Emergency Preparedness and Response | Préparation et intervention en cas d'urgence |
| BVR02 | Biosecurity | Biosécurité |
| BVR03 | Border and Travel Health | Santé des voyageurs et santé transfrontalière |
| BVS01 | National Security Leadership | Leadership en matière de sécurité nationale |
| BVS02 | Critical Infrastructure | Infrastructures essentielles |
| BVS03 | Cyber Security | Cybersécurité |
| BVT01 | Crime Prevention | Prévention du crime |
| BVT02 | Law Enforcement and Policing | Application de la loi et police |
| BVT03 | Serious and Organized Crime | Crime organisé et crimes graves |
| BVT04 | Border Policy | Politique frontalière |
| BVT05 | Indigenous Policing | Services de police autochtones |
| BVT06 | Corrections | Services correctionnels |
| BVU01 | Emergency Prevention/Mitigation | Prévention et atténuation des urgences |
| BVU02 | Emergency Preparedness | Préparation aux urgences |
| BVU03 | Emergency Response/Recovery | Intervention d'urgence et rétablissement |
| BVV01 | Procurement Leadership | Leadership en matière d'approvisionnement |
| BVV02 | Procurement Services | Services d'approvisionnement |
| BVV03 | Procurement Program | Programme des approvisionnements |
| BVW01 | Federal Pay Administration | Administration de la paye fédérale |
| BVW02 | Federal pension Administration | Administration de la pension fédérale |
| BVW03 | Payments Instead of Property Taxes to Local Governments | Paiements en remplacement d'impôts aux administrations locales |
| BVW04 | Payments and Revenue Collection | Paiements et perception des recettes |
| BVW05 | Government-Wide Accounting and Reporting | Comptabilité et production de rapports à l'échelle du gouvernement |
| BVW06 | Cape Breton Operations (CBO) – HR Legacy Benefits | Opérations du Cap-Breton (OCB) – Avantages des legs en matière de RH |
| BVX01 | Federal Accommodation and Infrastructure | Locaux fédéraux et Infrastructure |
| BVX02 | Real Property Services | Services immobiliers |
| BVX03 | Parliament Hill and Surroundings | Colline du Parlement et ses environs |
| BVX04 | Cape Breton Operations (CBO) – Portfolio Management | Opérations du Cap-Breton (OCB) – Gestion du portefeuille |
| BVY01 | Linguistic services | Services linguistiques |
| BVY02 | Communication Services | Services de communication |
| BVY03 | Government-wide Corporate Services | Services organisationnels pangouvernementaux |
| BVY04 | Document Imaging Services | Services d'imagerie documentaire |
| BVY05 | Asset Disposal | Aliénation des biens |
| BVY06 | Service Management | Gestion des services |
| BVY07 | Canadian General Standards Board | Office des normes générales du Canada |
| BVY08 | Security and Oversight Services | Services de sécurité et de surveillance |
| BVZ01 | Procurement Ombudsman | Ombudsman de l'approvisionnement |
| BWA01 | Aviation occurrence investigations | Enquêtes d'événements aéronautiques |
| BWA02 | Marine occurrence investigations | Enquêtes d'événements maritimes |
| BWA03 | Rail Occurrence Investigations | Enquêtes d'événements ferroviaires |
| BWA04 | Pipeline occurrence investigations | Enquêtes d'événements de pipeline |
| BWB01 | Policy Direction and Support | Soutien et orientation en matière de politiques |
| BWB02 | Recruitment and Assessment Services | Services de recrutement et d'évaluation |
| BWB03 | Oversight and Monitoring | Surveillance |
| BWC01 | Email Services | Services liés au courriel |
| BWC02 | Hardware Provisioning | Achat de matériel |
| BWC03 | Software Provisioning | Achat de logiciels |
| BWC04 | Workplace Technology Services | Services de technologie en milieu de travail |
| BWC05 | Digital Communications | Communications numériques |
| BWC06 | Workplace Technologies | Technologies en milieu de travail |
| BWD01 | Bulk Print | Impression en bloc |
| BWD02 | File and Print | Fichiers et impression |
| BWD03 | Middleware & Database | Intergiciels et bases de données |
| BWD04 | Data Centre Facility | Installations des centres de données |
| BWD05 | High Performance  Computing Solution | Solution informatique de haute performance |
| BWD06 | Mid-Range | Milieu de gamme |
| BWD07 | Mainframe | Ordinateur central |
| BWD08 | Storage | Entreposage |
| BWD09 | Cloud | Infonuagique |
| BWD10 | Data Centre Information Technology Operations | Opérations en technologies de l'information des centres de données |
| BWE01 | Local Area Network | Réseau local |
| BWE02 | Wide Area Network | Réseau étendu |
| BWE03 | Internet | Internet |
| BWE04 | Satellite | Services satellites |
| BWE05 | Mobile Devices and Fixed-Line Phones | Appareils mobiles et téléphones fixes |
| BWE06 | Conferencing Services | Services de conférence |
| BWE07 | Contact Centre Infrastructure | Infrastructure du centre de contact |
| BWE08 | Toll-Free Voice | Services de voix sans frais |
| BWE09 | Telecommunications | Télécommunications |
| BWE10 | Networks | Réseaux |
| BWF01 | Identity and Access Management | Identité et gestion de l'accès |
| BWF02 | Secret Infrastructure | Infrastructure secrète |
| BWF03 | Infrastructure Security | Sécurité de l'infrastructure |
| BWF04 | Cyber Security Strategic Planning | Planification stratégique de la cybersécurité |
| BWF05 | Security Management and Governance | Gestion et gouvernance de la sécurité |
| BWF06 | Secure Remote Access | Accès à distance protégé |
| BWF07 | Security | Sécurité |
| BWG01 | Strategic Direction | Orientation stratégique |
| BWG02 | Service Management | Gestion des services |
| BWG03 | Customer Relationships | Relations avec les clients |
| BWG04 | Enterprise Services Design and Delivery | Conception et prestation des services d'entreprise |
| BWH01 | Expertise and Outreach | Expertise et information |
| BWH02 | Community Action and Innovation | Action communautaire et innovation |
| BWI01 | Disability Pension Benefits and Allowances | Avantages et allocations pour pensions d'invalidité |
| BWI02 | Disability Awards, Critical Injury and Death Benefits | Indemnités d'invalidité, avantages pour blessure grave et de décès |
| BWI03 | Earnings Loss Benefit | Allocation pour perte de revenus |
| BWI04 | Career Impact Allowance | Allocation pour incidence sur la carrière |
| BWI05 | Retirement Benefits | Prestations de retraite |
| BWI06 | Health Care Benefits | Avantages pour soins de santé |
| BWI07 | Transition Services | Services de transition |
| BWI08 | Long Term Care | Soins de longue durée |
| BWI09 | Veterans Independence Program | Programme pour l'autonomie des anciens combattants |
| BWI10 | Caregiver Recognition Benefit | Allocation de reconnaissance des aidants naturels |
| BWI11 | War Veterans Allowance | Allocation aux anciens combattants |
| BWI12 | Income Support | Soutien du revenu |
| BWI13 | Veterans Emergency Fund | Fonds d'urgence pour les vétérans |
| BWI14 | Centre of Excellence on Post Traumatic Stress Disorder and Related Mental Health Conditions | Centre d'excellence sur le trouble de stress post-traumatique et les états de santé mentale connexes |
| BWI15 | Veteran and Family Well Being Fund | Fonds pour le bien être des vétérans et de leur famille |
| BWI16 | Disability Benefits | Prestations d'invalidité |
| BWI17 | Research Funding | Financement de la recherche |
| BWI18 | Research and Innovation | Recherche et innovation |
| BWJ01 | Canada Remembers Program | Programme Le Canada se souvient |
| BWJ02 | Funeral and Burial Program | Programme de funérailles et d'inhumation |
| BWK01 | Veterans Ombudsperson | Ombudsman des vétérans |
| BWL01 | Review and Appeal | Révision et appel |
| BWM01 | Statutory, Legislative and Policy Support to First Nations Governance | Soutien statutaire, législatif et politique à la gouvernance autochtone |
| BWM02 | Negotiations of Claims and Self-Government Agreements | Négociation des accords en matière de revendications et d'autonomie gouvernementale |
| BWM03 | Specific Claims | Revendications particulières |
| BWM04 | Management and Implementation of Agreements and Treaties | Gestion et mise en oeuvre des accords et traités |
| BWM05 | Consultation and Accommodation | Consultation et accommodement |
| BWM06 | Consultation and Policy Development | Consultation et élaboration de politiques |
| BWM07 | Federal Interlocutor's Contribution Program | Programme de contribution de l'Interlocuteur fédéral |
| BWM08 | Basic Organizational Capacity | Capacité organisationnelle de base |
| BWM09 | Other Claims | Autres revendications |
| BWM10 | First Nation Jurisdiction over Land and Fiscal Management | Juridiction des Premières Nations en matière de terre et de gestion fiscale |
| BWM11 | Northern and Arctic Governance and Partnerships | Gouvernance et partenariats dans le Nord et l'Arctique |
| BWM12 | Individual Affairs | Affaires individuelles |
| BWM13 | Indian Residential Schools Settlement Agreement | Convention de règlement relative aux pensionnats indiens |
| BWM14 | Residential Schools Legacy | Séquelles des pensionnats |
| BWM15 | Indigenous Engagement and Capacity Support | Mobilisation et soutien de la capacité des Autochtones |
| BWM16 | Indigenous-led Services | Services dirigés par les Autochtones |
| BWN01 | Trade and Market Expansion | Croissance du commerce et des marchés |
| BWN02 | Sector Engagement and Development | Mobilisation et développement du secteur |
| BWN03 | Farm Products Council of Canada | Conseil des produits agricoles du Canada |
| BWN04 | Supply Management Initiatives | Initiatives de gestion de l'offre |
| BWN05 | Canadian Pari-Mutuel Agency | Agence canadienne du pari mutuel |
| BWN06 | Water Infrastructure | Infrastructure hydraulique |
| BWN07 | Federal, Provincial and Territorial Cost-shared Markets and Trade | Programmes à frais partagés fédéral, provinciaux et territoriaux reliés aux marchés et au commerce |
| BWN08 | Community Pastures | Pâturages communautaires |
| BWN09 | Food Policy Initiatives | Initiatives relatives à la politique alimentaire |
| BWN10 | Water Infrastructure Divesture | Cession des infrastructures hydrauliques |
| BWO01 | Foundational Science and Research | Science et recherche fondamentales |
| BWO02 | AgriScience | Agri-science |
| BWO03 | AgriInnovate | Agri-innover |
| BWO04 | Environment and Climate Change Programs | Programmes en matière d'environnement et de changements climatiques |
| BWO05 | Canadian Agricultural Strategic Priorities Program | Programme canadien des priorités stratégiques de l'agriculture |
| BWO06 | Federal, Provincial and Territorial Cost-shared Science, Research, Innovation and Environment | Programmes à frais partagés fédéral, provinciaux et territoriaux reliés à la science, à la recherche, à l'innovation et à l'environnement |
| BWP01 | AgriStability | Agri-stabilité |
| BWP02 | AgriInvest | Agri-investissement |
| BWP03 | AgriRecovery | Agri-relance |
| BWP04 | AgriInsurance | Agri-protection |
| BWP05 | AgriRisk | Agri-risques |
| BWP06 | Loan Guarantee Programs | Programmes de garantie de prêts |
| BWP07 | Farm Debt Mediation Service | Service de médiation en matière d'endettement agricole |
| BWP08 | Pest Management | Lutte antiparasitaire |
| BWP09 | Assurance Program | Programme d'assurance |
| BWP10 | Federal, Provincial and Territorial Cost-shared Assurance | Programmes à frais partagés fédéral, provinciaux et territoriaux reliés à l'assurance |
| BWP11 | Return of Payments | Retour de paiements |
| BWP12 | Mandatory Isolation Support for Temporary Foreign Workers Program | Programme d'aide pour l'isolement obligatoire des travailleurs étrangers temporaires |
| BWP13 | African Swine Fever Response | Intervention en cas d'éclosion de la peste porcine africaine |
| BWP14 | Livestock Price Insurance Program | Programme d'assurance des prix du bétail |
| BWQ01 | Oversee and regulate the planning and construction of the Canadian portion of the Alaska Highway Natural Gas Pipeline Project | Surveiller et réglementer la planification et la construction de la partie canadienne du projet de gazoduc de la route de l'Alaska |
| BWR01 | Indigenous Entrepreneurship and Business Development | Entreprenariat et développement des entreprises autochtones |
| BWR02 | Economic Development Capacity and Readiness | Capacité de développement économique et disponibilité |
| BWR03 | Land, Natural Resources and Environmental Management | Gestion des terres, des ressources naturelles et de l'environnement |
| BWR04 | Climate Change Adaptation and Clean Energy | Adaptation aux changements climatiques et énergie propre |
| BWR05 | Northern Strategic and Science Policy | Politique stratégique et scientifique du Nord |
| BWR06 | Northern Regulatory and Legislative Frameworks | Cadres réglementaires et législatifs du Nord |
| BWR07 | Northern and Arctic Environmental Sustainability | Durabilité environnementale dans le Nord et l'Arctique |
| BWR08 | Northern Contaminated Sites | Sites contaminés dans le Nord |
| BWR09 | Canadian High Arctic Research Station | Station canadienne de recherche dans l'Extrême-Arctique |
| BWR10 | Nutrition North | Nutrition Nord |
| BWR11 | Northern and Arctic Governance and Partnerships | Gouvernance et partenariats dans le Nord et l'Arctique |
| BWS01 | Education | Éducation |
| BWS02 | Income Assistance | Aide au revenu |
| BWS03 | Assisted Living | Aide à la vie autonome |
| BWS04 | First Nations Child and Family Services | Services d'aide à l'enfance et à la famille des Premières Nations |
| BWS05 | Family Violence Prevention | Prévention de la violence familiale |
| BWS06 | Urban Programming for Indigenous | Programmes urbains pour les peuples autochtones |
| BWT01 | Indigenous Governance and Capacity | Gouvernance autochtone et capacités |
| BWT02 | Water and Wastewater | L'eau et les eaux usées |
| BWT03 | Education Facilities | Installations d'enseignement |
| BWT04 | Housing | Logement |
| BWT05 | Other Community Infrastructure and Activities | Autres infrastructures et activités communautaires |
| BWT06 | Emergency Management Assistance | Aide à la gestion des urgences |
| BWU01 | Clinical and Client Care | Pratique clinique et soins aux clients |
| BWU02 | Home and Community Care | Soins à domicile et en milieu communautaire |
| BWU03 | Communicable Diseases Control and Management | Contrôle et gestion des maladies transmissibles |
| BWU04 | Mental Wellness | Bien-être mental |
| BWU05 | Healthy Living | Vie saine |
| BWU06 | Healthy Child Development | Développement des enfants en santé |
| BWU07 | Child First Initiative – Jordan's Principle | Initiative du principe de Jordan – Principe de l'enfant d'abord |
| BWU08 | Supplementary Health Benefits | Prestations supplémentaires en santé |
| BWU09 | Health Planning, Quality Management and Systems Integration | Planification de la santé, gestion de la qualité et intégration des systèmes |
| BWU10 | Health Human Resources | Ressources humaines en santé |
| BWU11 | Health Facilities | Établissements de santé |
| BWU12 | e-Health Infostructure | Infostructure cybersanté |
| BWU13 | British Columbia Tripartite Health Governance | Gouvernance tripartite de la Colombie-Britannique en matière de santé |
| BWU14 | Environmental Public Health | Hygiène du milieu |
| BWV01 | Conference Services | Services aux conférences |
| BWW01 | Senior Personnel and Public Service Renewal | Personnel supérieur et renouvellement de la fonction publique |
| BWW02 | International Affairs and National Security | Affaires internationales et sécurité nationale |
| BWW03 | Planning and Operation of Cabinet | Planification et Opérations du Cabinet |
| BWW04 | Commissions of Inquiry | Commissions d'enquête |
| BWW05 | Youth | Jeunesse |
| BWW06 | Legislative and Parliamentary Governance | Gouvernance législative et parlementaire |
| BWW07 | Results, Delivery, Impact and Innovation | Résultats, livraison, impact et innovation |
| BWW08 | Intergovernmental Affairs | Affaires intergouvernementales |
| BWW09 | Social and Economic Policy | Politique économique et sociale |
| BWX01 | Science and Technology | Science et technologie |
| BWX02 | Knowledge Management and Engagement | Gestion des connaissances et mobilisation |
| BWX03 | Canadian High Arctic Research Station (CHARS) Operations and Logistics | Opérations et logistique de la Station de recherche de l'Extrême-Arctique canadien |
| BWY01 | Review of Canadian Security Intelligence Service operations | Examen des opérations du Service canadien du renseignement de sécurité |
| BWY02 | Investigation of complaints against the Canadian Security Intelligence Service | Enquêtes sur les plaintes contre le Service canadien du renseignement de sécurité |
| BWZ00 | Economic and fiscal analysis | Analyse financière et économique |
| BXA01 | Oversight and Treasury Board Support | Surveillance et soutien au Conseil du Trésor |
| BXA02 | Expenditure Data, Analysis, Results, and Reviews | Données, analyses, résultats et examens des dépenses |
| BXA03 | Results and Performance Reporting Policies and Initiatives | Initiatives et politiques relatives aux rapports sur les résultats et le rendement |
| BXA04 | Government-wide Funds | Fonds pangouvernementaux |
| BXB01 | Financial Management Policies and Initiatives | Politiques et initiatives liées à la gestion financière |
| BXB02 | Digital Policy | Politique numérique |
| BXB03 | Digital Strategy, Planning, and Oversight | Stratégie, planification et surveillance du numérique |
| BXB04 | Management Accountability Framework | Cadre de responsabilisation de gestion |
| BXB05 | Acquired Services and Assets Policies and Initiatives | Politiques et initiatives sur les biens et services acquis |
| BXB06 | Digital Comptrollership Program | Programme de la fonction de contrôle numérique |
| BXB07 | Internal Audit Policies and Initiatives | Politiques et initiatives sur la vérification interne |
| BXB08 | Communications and Federal Identity Policies and Initiatives | Politiques et initiatives sur les communications et l'image de marque du GC |
| BXB09 | Canadian Digital Service | Service numérique canadien |
| BXB10 | Greening Government Operations | Écologisation des activités gouvernementales |
| BXB11 | Public Service Accessibility | Accessibilité de la fonction publique |
| BXB12 | Comptrollership Program | Programme de la fonction de contrôleur |
| BXB13 | Digital Government Program | Programme du gouvernement numérique |
| BXC01 | Employee Relations and Total Compensation | Relations avec les employés et de la rémunération globale |
| BXC02 | Pension and Benefits Management | Gestion des pensions et des avantages sociaux |
| BXC03 | Workplace Policies and Services | Politiques et services en milieu de travail |
| BXC04 | Public Service Employer Payments | Paiements en tant qu'employeur de la fonction publique |
| BXC05 | Executive and Leadership Development | Perfectionnement des cadres supérieurs et en leadership |
| BXC06 | People Management Systems and Processes | Systèmes et processus de gestion des personnes |
| BXC07 | Research, Planning and Renewal | Recherche, planification et renouvellement |
| BXC08 | Employer Program | Programme d'employeur |
| BXD01 | Regulatory Policy, Oversight, and Cooperation | Politique, surveillance et coopération réglementaires |
| BXD02 | Regulatory Cooperation | Coopération en matière de réglementation |
| BXE01 | Export Development Canada (Canada Account) | Exportation et développement Canada (Compte du Canada) |
| BXF01 | Public Complaints | Plaintes du public |
| BXF02 | Investigations | Enquêtes |
| BXF03 | Public Education | Éducation du public |
| BXG01 | Federal Policing Investigations | Enquêtes de la Police fédérale |
| BXG02 | Intelligence | Renseignement |
| BXG03 | Protective Services | Services de protection |
| BXG04 | Federal Policing Prevention and Engagement | Prévention et engagement de la Police fédérale |
| BXG05 | International Policing | Police internationale |
| BXG06 | Federal Operations Support | Soutien aux opérations fédérales |
| BXG07 | Governance | Gouvernance |
| BXH01 | Canadian Firearms Investigative and Enforcement Services | Services d'enquête et d'application de la loi en matière d'armes à feu |
| BXH02 | Criminal Intelligence Service Canada | Service canadien de renseignements criminels |
| BXH03 | Forensic Science and Identification Services | Services des sciences judiciaires et de l'identité |
| BXH04 | Canadian Police College | Collège canadien de police |
| BXH05 | Sensitive and Specialized Investigative Services | Services d'enquêtes spécialisées et de nature délicate |
| BXH06 | RCMP Specialized Technical Investigative Services | Services spécialisés d'enquêtes techniques de la GRC |
| BXH07 | RCMP Departmental Security | Sécurité ministérielle de la GRC |
| BXH08 | RCMP Operational IM/IT Services | Services opérationnels de la GI-TI de la GRC |
| BXH09 | Firearms Licensing and Registration | Délivrance de permis et enregistrement des armes à feu |
| BXH10 | National Cybercrime Coordination Unit | Groupe national de coordination contre la cybercriminalité |
| BXI01 | Provincial/Territorial Policing | Services de police provinciaux et territoriaux |
| BXI02 | Municipal Policing | Services de police municipaux |
| BXI03 | Indigenous Policing | Services de police autochtones |
| BXI04 | Contract and Indigenous Policing Operations Support | Soutien aux opérations des Services de police contractuels et autochtones |
| BXI05 | Force Generation | Mise sur pied de la force |
| BXJ01 | Appeal case reviews | Examen d'appels |
| BXK01 | Leaders' Debates | Débats des chefs |
| BXL01 | Supplementary Health Benefits | Prestations supplémentaires en santé |
| BXL02 | Clinical and Client Care | Pratique clinique et soins aux clients |
| BXL03 | Community Oral Health Services | Services communautaires en santé buccodentaire |
| BXL04 | Individual Affairs | Affaires individuelles |
| BXM01 | Jordan's Principle and the Inuit Child First Initiative | Principe de Jordan et l'Initiative: les enfants Inuits d'abord |
| BXM02 | Mental Wellness | Bien-être mental |
| BXM03 | Healthy Living | Vie saine |
| BXM04 | Healthy Child Development | Développement des enfants en santé |
| BXM05 | Home and Community Care | Soins à domicile et en milieu communautaire |
| BXM06 | Health Human Resources | Ressources humaines en santé |
| BXM07 | Environmental Public Health | Hygiène du milieu |
| BXM08 | Communicable Disease Control and Management | Contrôle et gestion des maladies transmissibles |
| BXM09 | Education | Éducation |
| BXM10 | Income Assistance | Le programme d'aide au revenu |
| BXM11 | Assisted Living | Le Programme d'aide à la vie autonome |
| BXM12 | First Nations Child and Family Services | Programme des services à l'enfance et à la famille des Premières Nations |
| BXM13 | Family Violence Prevention | Le Programme de prévention de la violence familiale |
| BXM14 | Urban Programming for Indigenous Peoples | Programmes urbains pour les peuples autochtones |
| BXP01 | Health Facilities | Établissements de santé |
| BXP02 | e-Health Infostructure | Infostructure cybersanté |
| BXP03 | Health Planning, Quality Management and Systems Integration | Planification de la santé, gestion de la qualité et intégration des systèmes |
| BXP04 | Indigenous Governance and Capacity | Gouvernance et capacités autochtones |
| BXP05 | Water and Wastewater | L'eau et les eaux usées |
| BXP06 | Education Facilities | Installations d'enseignement |
| BXP07 | Housing | Logement |
| BXP08 | Other Community Infrastructure and Activities | Autres infrastructures et activités communautaires |
| BXP09 | Emergency Management Assistance | Aide à la gestion des urgences |
| BXP10 | Indigenous Entrepreneurship and Business Development | Entreprenariat et développement des entreprises autochtones |
| BXP11 | Economic Development Capacity and Readiness | Capacité de développement économique et disponibilité |
| BXP12 | Lands, Natural Resources and Environmental Management | Gestion des terres, des ressources naturelles et de l'environnement |
| BXP13 | Statutory, Legislative and Policy Support to First Nations Governance | Soutien statutaire, législatif et politique à la gouvernance autochtone |
| BXQ01 | New Fiscal Relationship | Nouvelle relation financière |
| BXQ02 | Self-Determined Services | Services autodéterminés |
| BXQ03 | British Columbia Tripartite Health Governance | Gouvernance tripartite de la Colombie-Britannique en matière de santé |
| BXR01 | Expertise and Outreach | Expertise et information |
| BXR02 | Community Action and Innovation | Action communautaire et innovation |
| BXS01 | Quasi-judicial Review Program | Programme d'examen quasi judiciaire |
| BXT01 | Company Performance | Rendement des sociétés |
| BXT02 | Management System and Industry Performance | Système de gestion et rendement du secteur |
| BXT03 | Emergency Management | Gestion des situations d'urgence |
| BXT04 | Regulatory Framework | Cadre de réglementation |
| BXU01 | Energy System Information | Information sur les filières énergétiques |
| BXU02 | Pipeline Information | Information sur les pipelines |
| BXV01 | Stakeholder Engagement | Mobilisation des parties prenantes |
| BXV02 | Indigenous Engagement | Mobilisation des Autochtones |
| BXW01 | National security and intelligence activity reviews and complaints investigations | Surveillance des activités de sécurité nationale et de renseignement et enquêtes sur les plaintes |
| BXX01 | Compliance and Enforcement | Observation et contrôle d'application |
| BXY01 | Infrastructure, Tolls and Export Applications | Demandes relatives aux infrastructures, aux droits et aux exportations |
| BXY02 | Participant Funding | Aide financière aux participants |
| BXZ01 | Standards Development | Élaboration des normes |
| BXZ02 | Outreach and Knowledge Application | Sensibilisation et application des connaissances |
| BYB01 | Allocation-based and Direct Funding Stewardship | Gérance du financement fondé sur l'allocation et du financement direct |
| BYB02 | Major Bridges Oversight | Surveillance des grands ponts |
| BYB03 | Alternative Financing Oversight | Surveillance du financement alternatif |
| BYB04 | Homelessness Funding Oversight | Surveillance du financement en matière d'itinérance |
| BYC01 | Alternative Financing Investment | Investissement de financement alternatif |
| BYC02 | Public Infrastructure and Communities Investment | Investissement dans les infrastructures publiques et les collectivités |
| BYC03 | Major Bridges Investment | Investissement dans les grands ponts |
| BYC04 | Homelessness Investment | Investissements en matière d'itinérance |
| BYD01 | Rural Economic Development Policy | Politique de développement économique rural |
| BYD02 | Major Bridges Policy | Politique des grands ponts |
| BYD03 | Public Infrastructure and Communities Policy | Politique sur les infrastructures publiques et les collectivités |
| BYD04 | Alternative Financing Policy | Politique de financement alternatif |
| BYD05 | Homelessness Policy | Politiques en matière d'itinérance |
| BYE01 | Workplace Technologies | Technologies en milieu de travail |
| BYE02 | Cloud | Infonuagique |
| BYE03 | Data Centre Information Technology Operations | Opérations en technologies de l'information des centres de données |
| BYE04 | Telecommunications | Télécommunications |
| BYE05 | Networks | Réseaux |
| BYE06 | Security | Sécurité |
| BYE07 | Enterprise Services Design and Delivery | Conception et prestation des services d'entreprise |
| BYF00 | Canadian Race Relations Foundation | Fondation canadienne des relations raciales |
| BYG01 | Electoral Boundaries Readjustment Administration | Révision des limites des circonscriptions électorales |
| BYH00 | Canadian Commercial Corporation | Corporation commerciale Canadienne |
| BYI01 | Voting Services | Services de vote |
| BYI02 | Field Management | Gestion des activités en région |
| BYI03 | Public Education and Information | Éducation et information du public |
| BYI04 | Electoral Data Services | Services liés aux données électorales |
| BYJ01 | Office of the Commissioner of Canada Elections | Bureau du commissaire aux élections fédérales |
| BYJ02 | Political Entities Regulatory Compliance | Conformité régulatoire des entités politiques |
| BYJ03 | Electoral Integrity and Regulatory Policy | Intégrité électorale et politique réglementaire |
| BYK01 | Innovation | Innovation |
| BYK02 | Business Growth | Croissance des entreprises |
| BYK03 | Business Services | Services aux entreprises |
| BYK04 | Community Initiatives | Initiatives communautaires |
| BYL01 | Business Development | Développement des affaires |
| BYL02 | Regional Innovation Ecosystem | Écosystème régional de l'innovation |
| BYL03 | Community Economic Development and Diversification | Développement et diversification économiques des collectivités |
| BYM01 | Innovation | Innovation |
| BYM02 | Business Growth | Croissance des entreprises |
| BYM03 | Business Services | Services aux entreprises |
| BYM04 | Community Initiatives | Initiatives communautaires |
| BYO01 | Law Review | Examen du droit |
| BYP01 | Public Health Promotion and Disease Prevention | Promotion de la santé publique et prévention des maladies |
| BYP02 | Home and Long-Term Care | Soins à domicile et soins de longue durée |
| BYP03 | Primary Health Care | Soins de santé primaires |
| BYP04 | Health Systems Support | Soutien aux systèmes de santé |
| BYP05 | Supplementary Health Benefits | Prestations supplémentaires en santé |
| BYP06 | Jordan's Principle and the Inuit Child First Initiative | Principe de Jordan et Initiative : Les enfants inuits d'abord |
| BYP07 | Safety and Prevention Services | Services de sécurité et de prévention |
| BYP08 | Child and Family Services | Services à l'enfance et à la famille |
| BYP09 | Income Assistance | Le programme d'aide au revenu |
| BYP10 | Urban Programming for Indigenous Peoples | Programmes urbains pour les peuples autochtones |
| BYP11 | Elementary and Secondary Education | Éducation primaire et secondaire |
| BYP12 | Post-Secondary Education | Éducation postsecondaire |
| BYP13 | Community Infrastructure | Infrastructures communautaires |
| BYP14 | Communities & The Environment | Communautés et environnement |
| BYP15 | Emergency Management Assistance | Aide à la gestion des urgences |
| BYP16 | Community Economic Development | Développement économique communautaire |
| BYP17 | Indigenous Entrepreneurship and Business Development | Entrepreneuriat et développement des entreprises autochtones |
| BYP18 | Indigenous Governance and Capacity Supports | Gouvernance autochtone et soutien des capacités |
| BYQ00 | VIA HFR – VIA TGF Inc | VIA HFR – VIA TGF Inc |
| BYR01 | Freshwater Management | Gestion de l'eau douce |
| BYR02 | Freshwater Policy and Engagement | Politique et mobilisation de l'eau douce |
| BYS01 | Housing Policy and Programming | Politiques et programmes de logement |
| BYS02 | Homelessness Policy and Programming | Politiques et programmes sur l'itinérance |
| BYT01 | Public Transit and Active Transportation | Transport en commun et transport actif |
| BYT02 | Water, Wastewater and Solid Waste | Eau, eaux usées et déchets solides |
| BYT03 | Resilient Infrastructure | Infrastructures résilientes |
| BYT04 | Community Building | Développement des collectivités |
| BYT05 | Major Bridges and Projects | Grands ponts et projets |
| BYT06 | Alternative Financing | Autres modes de financement |
| BYU01 | Pharmaceutical Trends Program | Le programme sur les tendances relatives aux produits pharmaceutiques |
| BYU02 | Patented Medicine Price Monitoring Program | Programme de surveillance du prix des médicaments brevetés |
| HGD00 | International Policing Operations | Opérations policières internationales |
| HGE00 | Canadian Police Culture and Heritage | Culture et patrimoine de la police canadienne |
| HGF00 | Transfer Payments | Paiements de transfert |
| ISS00 | Internal services | Services internes |
| ISS01 | Management and Oversight Services | Services de gestion et de surveillance |
| ISS02 | Communications Services | Services de communication |
| ISS03 | Legal Services | Services juridiques |
| ISS04 | Human Resources Management Services | Services de gestion des ressources humaines |
| ISS05 | Financial Management Services | Services de gestion financière |
| ISS06 | Information Management Services | Services de gestion de l'information |
| ISS07 | Information Technology Services | Services de la technologie de l'information |
| ISS08 | Real Property Management Services | Services de gestion des biens immobiliers |
| ISS09 | Materiel Management Services | Services de gestion du matériel |
| ISS0Z | Acquisition Management Services | Services de gestion des acquisitions |
| ISS10 | Internal services | Services internes |
| ISS11 | Management and Oversight Services | Services de gestion et de surveillance |
| ISS12 | Communications Services | Services de communication |
| ISS13 | Legal Services | Services juridiques |
| ISS14 | Human Resources Management Services | Services de gestion des ressources humaines |
| ISS15 | Financial Management Services | Services de gestion financière |
| ISS16 | Information Management Services | Services de gestion de l'information |
| ISS17 | Information Technology Services | Services de la technologie de l'information |
| ISS18 | Real Property Management Services | Services de gestion des biens immobiliers |
| ISS19 | Materiel Management Services | Services de gestion du matériel |
| ISS1Z | Acquisition Management Services | Services de gestion des acquisitions |
| ISS20 | Internal services | Services internes |
| ISS30 | Internal services | Services internes |
| ISS40 | Internal services | Services internes |
| ISS50 | Internal services | Services internes |
| ISSA0 | Internal services | Services internes |
| ISSA1 | Management and Oversight Services | Services de gestion et de surveillance |
| ISSA2 | Communications Services | Services de communication |
| ISSA3 | Legal Services | Services juridiques |
| ISSA4 | Human Resources Management Services | Services de gestion des ressources humaines |
| ISSA5 | Financial Management Services | Services de gestion financière |
| ISSA6 | Information Management Services | Services de gestion de l'information |
| ISSA7 | Information Technology Management Services | Services de gestion de la technologie de l'information |
| ISSA8 | Real Property Management Services | Services de gestion des biens immobiliers |
| ISSA9 | Materiel Management Services | Services de gestion du matériel |
| ISSAZ | Acquisition Management Services | Services de gestion des acquisitions |

### 1-12 Program Name (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Program Name (English) |
| Field Name FR | Désignation du programme (anglais) |
| ID | program_name_en |
| Description EN | Identifies the name of the program under which the service is delivered. |
| Description FR | Indique le nom du programme sous lequel le service est offert. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text Array |
| Validation EN |   |
| Validation FR |   |

### 1-13 Program Name (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Program Name (French) |
| Field Name FR | Désignation du programme (français) |
| ID | program_name_fr |
| Description EN | Identifies the name of the program under which the service is delivered. |
| Description FR | Indique le nom du programme sous lequel le service est offert. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text Array |
| Validation EN |   |
| Validation FR |   |

### 1-14 Client Feedback, by Channel

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Client Feedback, by Channel |
| Field Name FR | Commentaires des clients, par canal |
| ID | client_feedback_channel |
| Description EN | Identifies which channels, if any, provide users of a service an opportunity to provide feedback on their level of satisfaction with the service. Multiple values must be separated by a comma (,). |
| Description FR | Détermine quels canaux, s'il y a lieu, offrent aux utilisateurs d'un service l'occasion de donner une rétroaction sur leur niveau de satisfaction à l'égard du service. Séparez les entrées par une virgule (,) s’il y en a plusieurs qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text Array |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Example Value | EML,FAX,PERSON,ONL,POST,TEL |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| EML | Email | Courriel |
| FAX | Fax | Télécopieur |
| NON | No feedback collected | Aucune rétroaction possible |
| ONL | Online | En ligne |
| OTH | Other channel not listed | Autre option qui n'est pas sur la liste |
| PERSON | In-Person | En personne |
| POST | Postal Mail | Courrier postal |
| TEL | Telephone | Téléphone |

### 1-15 Automated Decision System

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Automated Decision System |
| Field Name FR | Système décisionnel automatisé |
| ID | automated_decision_system |
| Description EN | An automated decision system is defined in the Directive on Automated Decision-Making and means any technology that either assists or replaces the judgment of human decision-makers, such as those that draw from fields like statistics, linguistics and computer science, and use techniques such as rules-based systems, regression, predictive analytics, machine learning, deep learning, and neural networks.<br>For the scope of this question, please answer yes if the service uses an automated decision systems to make or assist officers in making administrative decisions, those that affect legal rights, privileges or interests of clients, whether internal or external. When a system is an automated decision system that makes or assists an officer in making, the requirements of the Directive must be met, and an Algorithmic Impact Assessment published. Refer to the Guide on the Scope of the Directive on Automated Decision-Making to learn more about whether the system is in scope of the Directive on Automated Decision-Making. You can also reach out to your department’s Chief Information and Chief Data Offices to learn more about whether the system falls in scope of the Directive. |
| Description FR | Un système décisionnel automatisé est défini dans la Directive sur la prise de décisions automatisée et désigne toute technologie qui assiste ou remplace le jugement des décideurs humains, comme ceux qui proviennent de domaines tels que les statistiques, la linguistique et les sciences informatiques, et utilisent des techniques telles que les systèmes basés sur des règles, la régression, l’analytique prédictive, l’apprentissage automatique, l’apprentissage en profondeur et les réseaux neuronaux.<br>Pour la portée de cette question, veuillez répondre "oui" si le service utilise des systèmes décisionnel automatisé pour prendre ou aider les agents à prendre des décisions administratives, celles qui affectent les droits juridiques, les privilèges ou les intérêts des clients, qu'ils soient internes ou externes. Lorsqu'un système est un système décisionnel automatisé qui prend ou aide un agent à prendre des décisions, les exigences de la Directive doivent être respectées, et une Évaluation de l'incidence algorithmique doit être publiée. Référez-vous au Guide sur la portée de la Directive sur la prise de décisions automatisée pour en savoir plus sur la portée de la Directive sur la prise de décision automatisée. Vous pouvez également contacter les bureaux du Dirigeant principal de l'information et du Dirigeant principal des données de votre ministère pour en savoir plus sur la portée de la Directive. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Example Value | N |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| N | No | Non |
| Y | Yes | Oui |

### 1-16 Automated Decision System Description (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Automated Decision System Description (English) |
| Field Name FR | Description du système décisionnel automatisé (anglais) |
| ID | automated_decision_system_description_en |
| Description EN | Describe what the system does. Include: the name or title of the system, the role of the system in the decision, whether it is full or partial automation, and how officers use the system to make or inform the decision. Include whether or not an Algorithmic Impact Assessment is published, and if not indicate the reason for not publishing one. |
| Description FR | Décrivez ce que fait le système. Inclure : le nom ou titre du système, le rôle du système dans la prise de décision, s'il s'agit d'une automatisation complète ou partielle, et comment les agents utilisent le système pour prendre ou informer la décision. Indiquer si une Évaluation de l'incidence algorithmique est publiée ou non, et si ce n'est pas le cas, indiquez la raison pour laquelle elle n'est pas publiée. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field is required due to a response in a different field.<br>This field has a maximum length of 1800 characters. |
| Validation FR | Ce champ est requis en raison d'une réponse présente dans un autre champ.<br>Ce champ a une longueur maximale de 1800 caractères. |
| Character Limit | 1800 |

### 1-17 Automated Decision System Description (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Automated Decision System Description (French) |
| Field Name FR | Description du système décisionnel automatisé (français) |
| ID | automated_decision_system_description_fr |
| Description EN | Describe what the system does. Include: the name or title of the system, the role of the system in the decision, whether it is full or partial automation, and how officers use the system to make or inform the decision. Include whether or not an Algorithmic Impact Assessment is published, and if not indicate the reason for not publishing one. |
| Description FR | Décrivez ce que fait le système. Inclure : le nom ou titre du système, le rôle du système dans la prise de décision, s'il s'agit d'une automatisation complète ou partielle, et comment les agents utilisent le système pour prendre ou informer la décision. Indiquer si une Évaluation de l'incidence algorithmique est publiée ou non, et si ce n'est pas le cas, indiquez la raison pour laquelle elle n'est pas publiée. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field is required due to a response in a different field.<br>This field has a maximum length of 1800 characters. |
| Validation FR | Ce champ est requis en raison d'une réponse présente dans un autre champ.<br>Ce champ a une longueur maximale de 1800 caractères. |
| Character Limit | 1800 |

### 1-18 Service Fees

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service Fees |
| Field Name FR | Frais de service |
| ID | service_fee |
| Description EN | Identifies whether a service fee is collected for the provision of the service. |
| Description FR | Indique si des frais de service sont perçus pour la prestation du service. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Example Value | N |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| N | No | Non |
| Y | Yes | Oui |

### 1-19 Online Services: Account Registration/Enrollment

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Online Services: Account Registration/Enrollment |
| Field Name FR | Services en ligne : Enregistrement/inscription du compte |
| ID | os_account_registration |
| Description EN | Identifies whether a client can register or enroll for a personal account where they can make use of other interaction points (applying for services, providing information, seeing their status, submitting feedback, etc.). |
| Description FR | Indique si un client peut s'inscrire ou s'inscrire à un compte personnel où il peut utiliser d'autres points d'interaction (demander des services, fournir des renseignements, voir son statut, soumettre des commentaires, etc.). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Example Value | Y |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| NA | N/A (This interaction point is not applicable to the service) | S.O. (Ce point d'interaction ne s'applique pas au service) |
| N | No (This interaction point is applicable to the service but is not currently online) | Non (Ce point d'interaction s'applique au service, mais il n'est pas en ligne présentement) |
| Y | Yes (This interaction point is applicable to the service and is online) | Oui (Ce point d'interaction s'applique au service et est en ligne) |

### 1-20 Online Services: Authentication

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Online Services: Authentication |
| Field Name FR | Services en ligne : Authentification |
| ID | os_authentication |
| Description EN | Identifies whether a client can authenticate their identity online. |
| Description FR | Indique si un client peut confirmer son identité en ligne. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Example Value | Y |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| NA | N/A (This interaction point is not applicable to the service) | S.O. (Ce point d'interaction ne s'applique pas au service) |
| N | No (This interaction point is applicable to the service but is not currently online) | Non (Ce point d'interaction s'applique au service, mais il n'est pas en ligne présentement) |
| Y | Yes (This interaction point is applicable to the service and is online) | Oui (Ce point d'interaction s'applique au service et est en ligne) |

### 1-21 Online Services: Application

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Online Services: Application |
| Field Name FR | Services en ligne : Demande |
| ID | os_application |
| Description EN | Identifies whether a client can apply for a service online. |
| Description FR | Indique si un client peut présenter une demande de service en ligne. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Example Value | Y |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| NA | N/A (This interaction point is not applicable to the service) | S.O. (Ce point d'interaction ne s'applique pas au service) |
| N | No (This interaction point is applicable to the service but is not currently online) | Non (Ce point d'interaction s'applique au service, mais il n'est pas en ligne présentement) |
| Y | Yes (This interaction point is applicable to the service and is online) | Oui (Ce point d'interaction s'applique au service et est en ligne) |

### 1-22 Online Services: Decision

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Online Services: Decision |
| Field Name FR | Services en ligne : Décision |
| ID | os_decision |
| Description EN | Identifies whether a client can be notified online of the outcome of their request for this service. |
| Description FR | Indique si un client peut être informé en ligne du résultat de sa demande de ce service. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Example Value | Y |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| NA | N/A (This interaction point is not applicable to the service) | S.O. (Ce point d'interaction ne s'applique pas au service) |
| N | No (This interaction point is applicable to the service but is not currently online) | Non (Ce point d'interaction s'applique au service, mais il n'est pas en ligne présentement) |
| Y | Yes (This interaction point is applicable to the service and is online) | Oui (Ce point d'interaction s'applique au service et est en ligne) |

### 1-23 Online Services: Issuance

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Online Services: Issuance |
| Field Name FR | Services en ligne : Émission |
| ID | os_issuance |
| Description EN | Identifies whether a client can receive the service online, perhaps in the form of permits, certificates, money or information. |
| Description FR | Indique si un client peut recevoir le service en ligne, peut-être sous forme de permis, de certificats, d'argent ou d'information. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Example Value | Y |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| NA | N/A (This interaction point is not applicable to the service) | S.O. (Ce point d'interaction ne s'applique pas au service) |
| N | No (This interaction point is applicable to the service but is not currently online) | Non (Ce point d'interaction s'applique au service, mais il n'est pas en ligne présentement) |
| Y | Yes (This interaction point is applicable to the service and is online) | Oui (Ce point d'interaction s'applique au service et est en ligne) |

### 1-24 Online Services: Issue Resolution and Feedback

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Online Services: Issue Resolution and Feedback |
| Field Name FR | Services en ligne : Solution de problème et rétroaction |
| ID | os_issue_resolution_feedback |
| Description EN | Identifies whether a client can seek resolution to their issues or provide feedback online. |
| Description FR | Indique si un client peut demander une résolution à ses problèmes avec le service ou fournir de la rétroaction en ligne. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Example Value | Y |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| NA | N/A (This interaction point is not applicable to the service) | S.O. (Ce point d'interaction ne s'applique pas au service) |
| N | No (This interaction point is applicable to the service but is not currently online) | Non (Ce point d'interaction s'applique au service, mais il n'est pas en ligne présentement) |
| Y | Yes (This interaction point is applicable to the service and is online) | Oui (Ce point d'interaction s'applique au service et est en ligne) |

### 1-25 Comments on Online Services - Client Interaction Points (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Comments on Online Services - Client Interaction Points (English) |
| Field Name FR | Commentaires sur les services électroniques - points d'interaction avec les clients (anglais) |
| ID | os_comments_client_interaction_en |
| Description EN | Comments related to online services - client Interaction points (English). For any interaction points reported as "Not Applicable", comments have to be provided. |
| Description FR | Commentaires en anglais en lien avec les services en ligne - points d'interaction avec les clients. Pour tout point d'interaction signalés comme « sans objet », des commentaires doivent être fournis. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field is required due to a response in a different field.<br>This field has a maximum length of 1000 characters. |
| Validation FR | Ce champ est requis en raison d'une réponse présente dans un autre champ.<br>Ce champ a une longueur maximale de 1000 caractères. |
| Character Limit | 1000 |

### 1-26 Comments on Online Services - Client Interaction Points (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Comments on Online Services - Client Interaction Points (French) |
| Field Name FR | Commentaires sur les services électroniques - points d'interaction avec les clients (français) |
| ID | os_comments_client_interaction_fr |
| Description EN | Comments related to online services - client Interaction points (French). For any interaction points reported as "Not Applicable", comments have to be provided. |
| Description FR | Commentaires en français en lien avec les services en ligne - points d'interaction avec les clients (français). Pour tout point d'interaction signalés comme « sans objet », des commentaires doivent être fournis. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field is required due to a response in a different field.<br>This field has a maximum length of 1000 characters. |
| Validation FR | Ce champ est requis en raison d'une réponse présente dans un autre champ.<br>Ce champ a une longueur maximale de 1000 caractères. |
| Character Limit | 1000 |

### 1-27 Year of last service review

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Year of last service review |
| Field Name FR | Année du dernier examen de service |
| ID | last_service_review |
| Description EN | Identifies the fiscal year when the most recent service review was completed. |
| Description FR | Identifie l’exercice financier lors duquel le plus récent examen de service a été mené. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| 2029-2030 | 2029-2030 | 2029-2030 |
| 2028-2029 | 2028-2029 | 2028-2029 |
| 2027-2028 | 2027-2028 | 2027-2028 |
| 2026-2027 | 2026-2027 | 2026-2027 |
| 2025-2026 | 2025-2026 | 2025-2026 |
| 2024-2025 | 2024-2025 | 2024-2025 |
| 2023-2024 | 2023-2024 | 2023-2024 |
| 2022-2023 | 2022-2023 | 2022-2023 |
| 2021-2022 | 2021-2022 | 2021-2022 |
| 2020-2021 | 2020-2021 | 2020-2021 |
| 2019-2020 | 2019-2020 | 2019-2020 |
| 2018-2019 | 2018-2019 | 2018-2019 |
| 2017-2018 | 2017-2018 | 2017-2018 |
| 2016-2017 | 2016-2017 | 2016-2017 |
| 2015-2016 | 2015-2016 | 2015-2016 |
| 2014-2015 | 2014-2015 | 2014-2015 |
| 2013-2014 | 2013-2014 | 2013-2014 |
| 2012-2013 | 2012-2013 | 2012-2013 |
| 2011-2012 | 2011-2012 | 2011-2012 |
| 2010-2011 | 2010-2011 | 2010-2011 |
| 2009-2010 | 2009-2010 | 2009-2010 |
| 2008-2009 | 2008-2009 | 2008-2009 |
| 2007-2008 | 2007-2008 | 2007-2008 |
| 2006-2007 | 2006-2007 | 2006-2007 |
| 2005-2006 | 2005-2006 | 2005-2006 |

### 1-28 Year of last service improvement based on client feedback

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Year of last service improvement based on client feedback |
| Field Name FR | Année de la dernière amélioration du service sur la base de la rétroaction du client |
| ID | last_service_improvement |
| Description EN | Identifies the most recent year in which this service was improved based on client feedback. |
| Description FR | Identifie l'exercice financier la plus récente au cours de laquelle ce service a été amélioré en fonction des commentaires des clients. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | 2021-2022 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| 2029-2030 | 2029-2030 | 2029-2030 |
| 2028-2029 | 2028-2029 | 2028-2029 |
| 2027-2028 | 2027-2028 | 2027-2028 |
| 2026-2027 | 2026-2027 | 2026-2027 |
| 2025-2026 | 2025-2026 | 2025-2026 |
| 2024-2025 | 2024-2025 | 2024-2025 |
| 2023-2024 | 2023-2024 | 2023-2024 |
| 2022-2023 | 2022-2023 | 2022-2023 |
| 2021-2022 | 2021-2022 | 2021-2022 |
| 2020-2021 | 2020-2021 | 2020-2021 |
| 2019-2020 | 2019-2020 | 2019-2020 |
| 2018-2019 | 2018-2019 | 2018-2019 |
| 2017-2018 | 2017-2018 | 2017-2018 |
| 2016-2017 | 2016-2017 | 2016-2017 |
| 2015-2016 | 2015-2016 | 2015-2016 |
| 2014-2015 | 2014-2015 | 2014-2015 |
| 2013-2014 | 2013-2014 | 2013-2014 |
| 2012-2013 | 2012-2013 | 2012-2013 |
| 2011-2012 | 2011-2012 | 2011-2012 |
| 2010-2011 | 2010-2011 | 2010-2011 |
| 2009-2010 | 2009-2010 | 2009-2010 |
| 2008-2009 | 2008-2009 | 2008-2009 |
| 2007-2008 | 2007-2008 | 2007-2008 |
| 2006-2007 | 2006-2007 | 2006-2007 |
| 2005-2006 | 2005-2006 | 2005-2006 |

### 1-29 Use of Social Insurance Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Use of Social Insurance Number |
| Field Name FR | Utilisation du numéro d'assurance sociale (NAS) |
| ID | sin_usage |
| Description EN | Identifies whether the Social Insurance Number (SIN) is used in the delivery of the service. |
| Description FR | Indique si le numéro d'assurance sociale (NAS) est utilisé dans la prestation du service. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Example Value | Y |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| NA | N/A (not a service to individuals) | S.O. (N'est pas un service aux particuliers) |
| N | No | Non |
| Y | Yes | Oui |

### 1-30 Use of CRA Business Number as Standard Identifier

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Use of CRA Business Number as Standard Identifier |
| Field Name FR | Utilisation du numéro d’entreprise de l’ARC en tant qu’identificateur standard |
| ID | cra_bn_identifier_usage |
| Description EN | Identifies whether the Canada Revenue Agency's Business Number is used in the delivery of the service as the standard identifier in accordance with the Data reference standard on the business number. |
| Description FR | Indique si le numéro d’entreprise de l’Agence du revenu du Canada est utilisé dans la prestation des services en tant qu’identificateur standard, conformément à la Norme référentielle relative aux données sur le numéro d’entreprise. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Example Value | Y |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| NA | N/A (not a service to businesses) | S.O. (N'est pas un service aux entreprises) |
| N | No | Non |
| Y | Yes | Oui |

### 1-31 Number of Telephone Enquiries Received

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of Telephone Enquiries Received |
| Field Name FR | Nombre de demandes de renseignements reçues par telephone |
| ID | num_phone_enquiries |
| Description EN | Identifies the number of enquiries about the service received in this fiscal year. Note: This field represents only requests for information about the service. Report service requests or applications submitted by telephone in the "telephone applications" field. A value of 0 means no calls were received; ND means no data was collected; and NA means it is not possible to submit telephone enquiries.<br>Note: This field is not included in 'Total Applications'. |
| Description FR | Indique le nombre de demandes d'information reçues par téléphone au cours d'un exercice financier. Remarque: Ce champ indique seulement le nombre de demandes d'information au sujet d'un service. Servez-vous du champ « Nombre de demandes soumises par téléphone » pour les demandes de prestation de service reçues par téléphone. La valeur 0 signifie qu'aucun appel n'a été reçu, ND signifie qu'aucune donnée n'est disponible, et NA signifie qu'il n'est pas possible de présenter des demandes d’information par téléphone.<br>Remarque : Ce champ n'est pas inclus dans « Nombre total de demandes ». |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field must be either a number, "NA", or "ND"<br>This value must not be negative. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ doit contenir soit un chiffre, soit « NA », soit « ND ».<br>Cette valeur ne doit pas être négative. |
| Example Value | 7252346 |

### 1-32 Number of Applications Submitted by Telephone

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of Applications Submitted by Telephone |
| Field Name FR | Nombre de demandes soumises par téléphone |
| ID | num_applications_by_phone |
| Description EN | Identifies the number of applications submitted in a fiscal year for the telephone channel. A value of 0 means no applications were received for this channel; ND means there is no data collected for this channel; and NA means no applications can be submitted through this channel. |
| Description FR | Indique le nombre de demandes de prestation de service reçues par téléphone au cours d'un exercice. La valeur 0 signifie qu'aucune demande n'a été reçue via ce mode de prestation, aucune donnée (ND) signifie qu'aucune donnée n’est disponible, et sans objet (NA) signifie que le service n’est pas offert au moyen de ce mode de prestation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field must be either a number, "NA", or "ND"<br>This value must not be negative. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ doit contenir soit un chiffre, soit « NA », soit « ND ».<br>Cette valeur ne doit pas être négative. |

### 1-33 Number of Website Visits

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of Website Visits |
| Field Name FR | Nombre de visites sur le site Web |
| ID | num_website_visits |
| Description EN | Identifies the number of visits to the service's website in a fiscal year. A value of 0 means there were no visits; ND means there is no data collected website visits; and NA means there is no associated public website.<br>Note: This field is not included in 'Total Applications'. |
| Description FR | Indique le nombre de de visites au site Web du service lors d'un exercice financier. La valeur 0 signifie qu'aucune visite au site Web n’a été enregistrée, aucune donnée (ND) signifie que le nombre de visites n’est pas mesuré, et sans objet (NA) signifie qu’il n’y a aucune site web à visiter.<br>Remarque : Ce champ n'est pas inclus dans « Nombre total de demandes ». |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field must be either a number, "NA", or "ND"<br>This value must not be negative. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ doit contenir soit un chiffre, soit « NA », soit « ND ».<br>Cette valeur ne doit pas être négative. |
| Example Value | 5446484 |

### 1-34 Number of Applications Submitted Online

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of Applications Submitted Online |
| Field Name FR | Nombre de demandes soumises en ligne |
| ID | num_applications_online |
| Description EN | Identifies the number of applications submitted in a fiscal year for the online channel. A value of 0 means no applications were received for this channel; ND means there is no data collected for this channel; and NA means no applications can be submitted through this channel. Examples include applications received via a website/online portal, via web forms (e.g., MyPayEnquiry) and digitally administered audits and evaluations. |
| Description FR | Indique le nombre de demandes de prestation de service reçues en ligne au cours d'un exercice. La valeur 0 signifie qu'aucune demande n'a été reçue via ce mode de prestation, aucune donnée (ND) signifie qu'aucune donnée n’est disponible, et sans objet (NA) signifie que le service n’est pas offert au moyen de ce mode de prestation. Il s'agit par exemple des demandes reçues sur un site Web ou un portail en ligne, sur des formulaires Web (p. ex., Ma demande de paye) et des vérifications et évaluations administrés numériquement. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field must be either a number, "NA", or "ND"<br>This value must not be negative. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ doit contenir soit un chiffre, soit « NA », soit « ND ».<br>Cette valeur ne doit pas être négative. |
| Example Value | 276390 |

### 1-35 Number of Applications Submitted In-Person

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of Applications Submitted In-Person |
| Field Name FR | Nombre de demandes soumises en personne |
| ID | num_applications_in_person |
| Description EN | Identifies number of applications received in-person in a fiscal year for the service. A value of 0 means no applications were received for this channel; ND means there is no data collected for this channel; and NA means no applications can be submitted through this channel. Examples include in-person applications, volume of inspections, audits, evaluations, etc. |
| Description FR | Indique le nombre de demandes de prestation de service reçues en personne au cours d'un exercice. La valeur 0 signifie qu'aucune demande n'a été reçue via ce mode de prestation, aucune donnée (ND) signifie qu'aucune donnée n’est disponible, et sans objet (NA) signifie que le service n’est pas offert au moyen de ce mode de prestation. Il s’agit par exemple des demandes en personne, du volume d'inspections, d'audits, d'évaluations, etc. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field must be either a number, "NA", or "ND"<br>This value must not be negative. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ doit contenir soit un chiffre, soit « NA », soit « ND ».<br>Cette valeur ne doit pas être négative. |

### 1-36 Number of Applications Submitted via Postal Mail

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of Applications Submitted via Postal Mail |
| Field Name FR | Nombre de demandes soumises par la poste |
| ID | num_applications_by_mail |
| Description EN | Identifies the number of applications received through postal mail in a fiscal year. A value of 0 means no applications were received for this channel; ND means there is no data collected for this channel; and NA means no applications can be submitted through this channel. |
| Description FR | Indique le nombre de demandes de prestation de service reçues par la poste au cours d'un exercice. La valeur 0 signifie qu'aucune demande n'a été reçue via ce mode de prestation, aucune donnée (ND) signifie qu'aucune donnée n’est disponible, et sans objet (NA) signifie que le service n’est pas offert au moyen de ce mode de prestation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field must be either a number, "NA", or "ND"<br>This value must not be negative. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ doit contenir soit un chiffre, soit « NA », soit « ND ».<br>Cette valeur ne doit pas être négative. |
| Example Value | 792026 |

### 1-37 Number of Applications Submitted by Email

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of Applications Submitted by Email |
| Field Name FR | Nombre de demandes soumises par courriel |
| ID | num_applications_by_email |
| Description EN | Identifies the number of applications received through email in a fiscal year for the service. A value of 0 means no applications were received for this channel; ND means there is no data collected for this channel; and NA means no applications can be submitted through this channel.<br>Examples include applications received by email and audits, reviews and evaluations by email. |
| Description FR | Indique le nombre de demandes de prestation de service reçues par courriel au cours d'un exercice. La valeur 0 signifie qu'aucune demande n'a été reçue via ce mode de prestation, aucune donnée (ND) signifie qu'aucune donnée n’est disponible, et sans objet (NA) signifie que le service n’est pas offert au moyen de ce mode de prestation.<br>Il s'agit par exemple des demandes reçues par courriel et des audits, examens et évaluations par courriel. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field must be either a number, "NA", or "ND"<br>This value must not be negative. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ doit contenir soit un chiffre, soit « NA », soit « ND ».<br>Cette valeur ne doit pas être négative. |

### 1-38 Number of Applications Submitted by Fax

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of Applications Submitted by Fax |
| Field Name FR | Nombre de demandes soumises par fax |
| ID | num_applications_by_fax |
| Description EN | Identifies the number of applications received through fax in a fiscal year for the service. A value of 0 means no applications were received for this channel; ND means there is no data collected for this channel; and NA means no applications can be submitted through this channel. |
| Description FR | Indique le nombre de demandes de prestation de service reçues par télécopieur au cours d'un exercice. La valeur 0 signifie qu'aucune demande n'a été reçue via ce mode de prestation, aucune donnée (ND) signifie qu'aucune donnée n’est disponible, et sans objet (NA) signifie que le service n’est pas offert au moyen de ce mode de prestation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field must be either a number, "NA", or "ND"<br>This value must not be negative. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ doit contenir soit un chiffre, soit « NA », soit « ND ».<br>Cette valeur ne doit pas être négative. |

### 1-39 Number of Applications Submitted via other channels

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of Applications Submitted via other channels |
| Field Name FR | Nombre de demandes soumises par les autre modes de prestations |
| ID | num_applications_by_other |
| Description EN | Identifies the number of applications received through other channels not listed in a fiscal year for the service. A value of 0 means no applications were received for this channel; ND means there is no data collected for this channel; and NA means no applications can be submitted through this channel.<br>If service volumes are not tracked by channel, please include service volumes in this field. As well, please include in this field volumes for funding allocations without applications or other services that do not require applications (e.g. medical screening at intake, investigations, hearings, advice) or which do not disaggregate service demand by delivery channel.<br>Note: Volumes reported in each channel should be mutually exclusive. Do not report the same application or interaction in more than one channel. |
| Description FR | Indique le nombre de demandes de prestation de service reçues par des modes de prestations qui ne sont pas énumérés dans ce gabarit au cours d'un exercice. La valeur 0 signifie qu'aucune demande n'a été reçue via ce mode de prestation, aucune donnée (ND) signifie qu'aucune donnée n’est disponible, et sans objet (NA) signifie que le service n’est pas offert au moyen de ce mode de prestation.<br>Si les volumes de service ne sont pas suivis par canal, veuillez inclure les volumes de service dans ce champ. De même, veuillez inclure dans ce champ les volumes d'allocations de fonds sans demandes ou d'autres services qui ne nécessitent pas de demandes (p. ex., examen médical à l'admission, enquêtes, audiences, conseils) ou qui ne ventilent pas la demande de service par canal de prestation.<br>Remarque : les volumes déclarés dans chaque canal doivent s'exclure mutuellement. Ne déclarez pas la même demande ou interaction dans plus d'un canal. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field must be either a number, "NA", or "ND"<br>This value must not be negative. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ doit contenir soit un chiffre, soit « NA », soit « ND ».<br>Cette valeur ne doit pas être négative. |
| Example Value | 2218002 |

### 1-40 Total Number of Applications

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Total Number of Applications |
| Field Name FR | Nombre total de demandes soumises |
| ID | num_applications_total |
| Description EN | Identifies the total number of applications submitted in a fiscal year for all application channels. |
| Description FR | Indique le nombre total de demandes reçues au cours d'un exercice pour tous les modes de prestation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN |   |
| Validation FR |   |

### 1-41 Special Remarks (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Special Remarks (English) |
| Field Name FR | Remarques spéciales (anglais) |
| ID | special_remarks_en |
| Description EN | Provides additional space for comments related to volumetrics information. Please refer to associated Field ID, where applicable. For comments related to other fields, departments can create and publish an explanatory note on their website with a link to the GC Service Inventory dataset. This field is mandatory if there is an amount reported under “Number of applications submitted via other channels” |
| Description FR | Fournit de l'espace supplémentaire pour les commentaires relatifs aux renseignements sur les volumes. Veuillez vous reporter au code d'identification du champ, s'il y a lieu. Pour les commentaires relatifs à d'autres champs, les ministères peuvent publier une note explicative sur leur site Web suivi d'un lien vers l'ensemble de données du Répertoire des services du GC. Ce champ est requis s’il y a un montant rapporté sous le champ « Nombre de demandes soumises par les autres modes de prestation » |
| Obligation EN | This field is mandatory if there is an amount reported under “Number of applications submitted via other channels” |
| Obligation FR | Ce champ est requis s’il y a un montant rapporté sous le champ « Nombre de demandes soumises par les autres modes de prestation » |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field has a maximum length of 2000 characters. |
| Validation FR | Ce champ a une longueur maximale de 2000 caractères. |
| Character Limit | 2000 |
| Example Value | - The volume reflected in the 'Applications by Mail' column include the volume of paper applications for the following OAS pension benefits application types: OAS basic pension; the Guaranteed Income Supplement (GIS); Allowance; Allowance Survivor; Renewal of GIS/Allowance/Allowance Survivor; Options for GIS/Allowance/Allowance Survivor; and foreign benefits.<br>- The volume reflected in the 'Number of Automatic Enrolments' column represents the volume of Automatic Enrolment into the OAS basic pension and the GIS.<br>- The volume reflected in the 'Applications through Other Channels' column represents the volume of the Automatic Renewal of income-tested benefits through the CRA for the GIS.<br>- Applications to OAS pension benefits do not constitute the largest volume of work done by the OAS program. In addition to applications, there were also another 3,143,898 OAS and foreign benefit account revisions in 2022-2023.<br>- OAS and CPP telephone enquiries are managed through the same Pensions Toll-free service, with significant overlap between the two programs on many calls. The metrics reported for CPP and OAS,  such as the volume of calls, are therefore identical and are non-cumulative (i.e. they are not to be added together)." |

### 1-42 Special Remarks (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Special Remarks (French) |
| Field Name FR | Remarques spéciales (français) |
| ID | special_remarks_fr |
| Description EN | Provides additional space for comments related to volumetrics information. Please refer to associated Field ID, where applicable. For comments related to other fields, departments can create and publish an explanatory note on their website with a link to the GC Service Inventory dataset. This field is mandatory if there is an amount reported under “Number of applications submitted via other channels” |
| Description FR | Fournit de l'espace supplémentaire pour les commentaires relatifs aux renseignements sur les volumes. Veuillez vous reporter au code d'identification du champ, s'il y a lieu. Pour les commentaires relatifs à d'autres champs, les ministères peuvent publier une note explicative sur leur site Web suivi d'un lien vers l'ensemble de données du Répertoire des services du GC. Ce champ est requis s’il y a un montant rapporté sous le champ « Nombre de demandes soumises par les autres modes de prestation » |
| Obligation EN | This field is mandatory if there is an amount reported under “Number of applications submitted via other channels” |
| Obligation FR | Ce champ est requis s’il y a un montant rapporté sous le champ « Nombre de demandes soumises par les autres modes de prestation » |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field has a maximum length of 2000 characters. |
| Validation FR | Ce champ a une longueur maximale de 2000 caractères. |
| Character Limit | 2000 |
| Example Value | - Le volume indiqué dans la colonne « Demandes par la poste » comprend le volume de demandes papier pour les types de demandes de prestations de pension de la SV suivants : pension de base de la SV ; le Supplément de revenu garanti (SRG); Allocation ; Allocation de survivant ; Renouvellement du SRG/Allocation/ Allocation de survivant ; options pour le SRG/l'allocation/l'allocation de survivant ; et les prestations étrangères.<br>- Le volume indiqué dans la colonne ""Nombre d'inscriptions automatiques"" représente le volume des inscriptions automatiques à la pension de base de la SV et au SRG.<br>- Le volume reflété dans la colonne « Demandes par d'autres canaux » représente le volume d'adhésion automatique à la pension de base de la SV et du SRG, ainsi que le renouvellement automatique des prestations fondées sur le revenu par l'intermédiaire de l'ARC pour le SRG.<br>- Les demandes de prestations de pension de la SV ne constituent pas le plus gros volume de travail effectué par le programme de la SV. En plus des demandes, il y a eu également 3 143 898 autres révisions des comptes de SV et de prestations étrangères en 2022-2023<br>- Les demandes de renseignements téléphoniques sur la SV et le RPC sont gérées par le même service téléphonique sans frais des pensions, avec un chevauchement important entre les deux programmes pour de nombreux appels. Les mesures rapportées pour le RPC et la SV, comme le volume d'appels, sont donc identiques et non cumulatives (c'est-à-dire qu'elles ne doivent pas être additionnées). " |

### 1-43 URL to Service (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | URL to Service (English) |
| Field Name FR | URL du service (anglais) |
| ID | service_uri_en |
| Description EN | Identifies the departmental webpage where the service is described and/or accessed. |
| Description FR | Indique la page Web du ministère où le service est décrit ou peut être lancé. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field has a maximum length of 1500 characters. |
| Validation FR | Ce champ a une longueur maximale de 1500 caractères. |
| Character Limit | 1500 |
| Example Value | https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security.html |

### 1-44 URL to Service (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | URL to Service (French) |
| Field Name FR | URL du service (français) |
| ID | service_uri_fr |
| Description EN | Identifies the departmental webpage where the service is described and/or accessed. |
| Description FR | Indique la page Web du ministère où le service est décrit ou peut être lancé. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field has a maximum length of 1500 characters. |
| Validation FR | Ce champ a une longueur maximale de 1500 caractères. |
| Character Limit | 1500 |
| Example Value | https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse.html |

## [Service Inventory](#service-inventory)

### 2-1 Fiscal Year

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Fiscal Year |
| Field Name FR | Exercice financier |
| ID | fiscal_yr |
| Description EN | Identifies the fiscal year (April 1 to March 31) during which service activities took place. For example, records for fiscal year 2023-2024 should include applications received from April 1, 2023, to March 31, 2024. |
| Description FR | Indique l'exercice financier (1 avril au 31 mars) durant lequel les activités du service ont eu lieu. Par exemple, les données pour l’exercice financier 2023-2024 devraient inclure les demandes de service qui ont été reçues entre le 1er avril 2023 et le 31 mars 2024. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Example Value | 2022-2023 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| 2029-2030 | 2029-2030 | 2029-2030 |
| 2028-2029 | 2028-2029 | 2028-2029 |
| 2027-2028 | 2027-2028 | 2027-2028 |
| 2026-2027 | 2026-2027 | 2026-2027 |
| 2025-2026 | 2025-2026 | 2025-2026 |
| 2024-2025 | 2024-2025 | 2024-2025 |
| 2023-2024 | 2023-2024 | 2023-2024 |
| 2022-2023 | 2022-2023 | 2022-2023 |
| 2021-2022 | 2021-2022 | 2021-2022 |
| 2020-2021 | 2020-2021 | 2020-2021 |
| 2019-2020 | 2019-2020 | 2019-2020 |
| 2018-2019 | 2018-2019 | 2018-2019 |
| 2017-2018 | 2017-2018 | 2017-2018 |
| 2016-2017 | 2016-2017 | 2016-2017 |
| 2015-2016 | 2015-2016 | 2015-2016 |
| 2014-2015 | 2014-2015 | 2014-2015 |
| 2013-2014 | 2013-2014 | 2013-2014 |
| 2012-2013 | 2012-2013 | 2012-2013 |
| 2011-2012 | 2011-2012 | 2011-2012 |
| 2010-2011 | 2010-2011 | 2010-2011 |
| 2009-2010 | 2009-2010 | 2009-2010 |
| 2008-2009 | 2008-2009 | 2008-2009 |
| 2007-2008 | 2007-2008 | 2007-2008 |
| 2006-2007 | 2006-2007 | 2006-2007 |
| 2005-2006 | 2005-2006 | 2005-2006 |

### 2-2 Service ID Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service ID Number |
| Field Name FR | Numéro d'identification du service |
| ID | service_id |
| Description EN | The unique number assigned to a service in the inventory to make it easier to refer to specific services. |
| Description FR | Le numéro unique attribué à un service dans le répertoire afin de faciliter le référencement à des services précis. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field cannot contain commas. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ ne peut pas contenir de virgules. |
| Example Value | 1001 |

### 2-3 Service Name (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service Name (English) |
| Field Name FR | Nom du service (anglais) |
| ID | service_name_en |
| Description EN | Identifies the official name of the service. |
| Description FR | Indique le nom officiel du service. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field has a maximum length of 350 characters. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ a une longueur maximale de 350 caractères. |
| Character Limit | 350 |
| Example Value | Old Age Security (OAS) Benefits |

### 2-4 Service Name (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service Name (French) |
| Field Name FR | Nom du service (français) |
| ID | service_name_fr |
| Description EN | Identifies the official name of the service. |
| Description FR | Indique le nom officiel du service. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field has a maximum length of 350 characters. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ a une longueur maximale de 350 caractères. |
| Character Limit | 350 |
| Example Value | Prestations de la Sécurité de la vieillesse |

### 2-5 Service Standard ID

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service Standard ID |
| Field Name FR | Numéro d'identification de la norme relative aux services |
| ID | service_standard_id |
| Description EN | Identifies the unique number assigned to each service standard for that service. Makes it easier for reference purposes as one service may have multiple standards. |
| Description FR | Indique le numéro unique attribué à chaque norme de service pour ce service. Facilite le référencement, car un service peut avoir de multiples normes. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field cannot contain commas. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ ne peut pas contenir de virgules. |
| Example Value | 925 |

### 2-6 Service Standard (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service Standard (English) |
| Field Name FR | Norme relative aux services (anglais) |
| ID | service_standard_en |
| Description EN | Identifies the service standard related to a particular service. See Guideline on Service and Digital for format to be used when defining service standards. |
| Description FR | Indique la norme de service ayant trait à un service en particulier. Voir la Ligne directrice sur les services et le numérique afin de connaître le format à utiliser pour définir une norme de service. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field has a maximum length of 500 characters. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ a une longueur maximale de 500 caractères. |
| Character Limit | 500 |
| Example Value | OAS basic benefits are paid within the first month of entitlement |

### 2-7 Service Standard (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service Standard (French) |
| Field Name FR | Norme relative aux services (français) |
| ID | service_standard_fr |
| Description EN | Identifies the service standard related to a particular service. See Guideline on Service and Digital for format to be used when defining service standards. |
| Description FR | Indique la norme de service ayant trait à un service en particulier. Voir la Ligne directrice sur les services et le numérique afin de connaître le format à utiliser pour définir les normes relatives aux services. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field has a maximum length of 500 characters. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ a une longueur maximale de 500 caractères. |
| Character Limit | 500 |
| Example Value | Les prestations de base de la SV sont versées au cours du premier mois d’admissibilité. |

### 2-8 Service Standard Type

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service Standard Type |
| Field Name FR | Type de norme relative aux services |
| ID | type |
| Description EN | Identifies the type of service standard as defined in the Guideline on Service and Digital. Access: a commitment outlining the ease and convenience the client should experience when attempting to access a service. Accuracy: a commitment stipulating that the client will receive a service that is up to date, free of errors, and complete. Timeliness: a commitment stating how long the client should expect to wait to receive a service once the service has been accessed. |
| Description FR | Indique le type de norme de service défini selon la Ligne directrice sur les services et le numérique. Accès : un engagement qui décrit la facilité et la convivialité que devrait connaître le client lorsqu'il essaie d'accéder à un service. Exactitude : un engagement qui stipule que le client recevra un service complet et à jour qui est exempt d'erreurs. Délai : un engagement qui indique le temps d'attente que devrait connaître le client pour recevoir un service une fois qu'il y a accédé. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Example Value | TML |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| ACS | Access | Accès |
| ACY | Accuracy | Exactitude |
| OTH | Other | Autre |
| TML | Timeliness | Délai |

### 2-9 Service Standard Channel

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service Standard Channel |
| Field Name FR | Mode de prestation de la norme de service |
| ID | channel |
| Description EN | Identifies the service channel to which the service standard applies |
| Description FR | Indique le mode de prestation de service à laquelle s'applique la norme de service |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Example Value | OTH |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| EML | Email | Courriel |
| FAX | Fax | Télécopieur |
| ONL | Online | En ligne |
| OTH | Other channel not listed | Autre option qui n’est pas sur la liste |
| PERSON | In-Person | En personne |
| POST | Postal Mail | Courrier postal |
| TEL | Telephone | Téléphone |

### 2-10 Comments on the service standard channel (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Comments on the service standard channel (English) |
| Field Name FR | Commentaires sur le mode de prestation de la norme de service (anglais) |
| ID | channel_comments_en |
| Description EN | Comments related to the service standard channel and provides explanation of "Other" channel selection. |
| Description FR | Commentaires en lien au mode de prestation de la norme de service et fournit une explication de la sélection des modes de prestation « Autre ». |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field has a maximum length of 1500 characters. |
| Validation FR | Ce champ a une longueur maximale de 1500 caractères. |
| Character Limit | 1500 |
| Example Value | Mail, Online, Person |

### 2-11 Comments on the service standard channel (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Comments on the service standard channel (French) |
| Field Name FR | Commentaires sur le mode de prestation de la norme de service (Francais) |
| ID | channel_comments_fr |
| Description EN | Comments related to the service standard channel and provides explanation of "Other" channel selection. |
| Description FR | Commentaires en lien au mode de prestation de la norme de service et fournit une explication de la sélection des modes de prestation « Autre ». |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field has a maximum length of 1500 characters. |
| Validation FR | Ce champ a une longueur maximale de 1500 caractères. |
| Character Limit | 1500 |
| Example Value | Courrier, en ligne, personne |

### 2-12 Service Standard Target

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service Standard Target |
| Field Name FR | Cible de la norme relative aux services |
| ID | target |
| Description EN | The frequency that the organization expects to meet service standard (reported as a percentage). |
| Description FR | Fréquence à laquelle l'organisation s'attend à respecter la norme de service (exprimée en pourcentage). |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN | This field must be a single number between 0 and 1 representing a percentage. |
| Validation FR | Ce champ doit contenir un seul chiffre entre 0 et 1 représentant un pourcentage. |
| Example Value | 0.9 |

### 2-13 Business Volume That Met Service Standard Target

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Business Volume That Met Service Standard Target |
| Field Name FR | Volume d'activités qui respectent la norme de service |
| ID | volume_meeting_target |
| Description EN | Identifies the number of final outputs issued appropriate to the service (eg. payments issued, requests completed, etc) during the fiscal year that met a particular service standard target for a service. Blank indicates no information available, while 0 indicates that no final outputs issued met service standard targets. Note, this value must be less than or equal to the Total Volume. |
| Description FR | Indique le nombre total d'opérations de service effectuées (p. ex. les paiements émis, les demandes traitées, etc.) au cours de l'exercice auxquelles s'appliquent cette norme de service. Un champ vide indique qu'aucune information n'est disponible, tandis que 0 indique qu'aucune opération n'a été effectuée. Remarque : cette valeur doit être inférieure ou égale au volumes totaux. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | This value must not be negative.<br>Volume Meeting Target can not exceed Total Volume. |
| Validation FR | Cette valeur ne doit être négative.<br>Les volumes atteignant la cible ne peuvent pas dépasser le volume total. |
| Example Value | 315128 |

### 2-14 Total Volume

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Total Volume |
| Field Name FR | Volumes totaux |
| ID | total_volume |
| Description EN | Identifies the total number of final outputs issued appropriate to the service (eg. payments issued, requests completed, etc) during the fiscal year. Blank indicates no information available, while 0 indicates no final outputs issued. |
| Description FR | Indique le nombre total d'opérations de service effectuées (p. ex. les paiements émis, les demandes traitées, etc.) au cours de l'exercice auxquelles s'appliquent cette norme de service. Un champ vide indique qu'aucune information n'est disponible, tandis que 0 indique qu'aucune opération n'a été effectuée. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | This value must not be negative. |
| Validation FR | Cette valeur ne doit pas être négative. |
| Example Value | 359919 |

### 2-15 Performance

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Performance |
| Field Name FR |   |
| ID | performance |
| Description EN | Identifies the result achieved for this service standard. This is the "Business Volume That Met Service Standard Target" divided by the "Total Volume". |
| Description FR | Indique le rendement de cette norme de service. Il s'agit du « Volume d'activités qui respectent la norme de service » divisé par le « Volumes totaux ». |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |

### 2-16 Comments on the service standard in general (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Comments on the service standard in general (English) |
| Field Name FR | Commentaires sur la norme de service en général (anglais) |
| ID | comments_en |
| Description EN | Comments related to the service standard in general. |
| Description FR | Commentaires en lien à la norme de service en general. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field has a maximum length of 2000 characters. |
| Validation FR | Ce champ a une longueur maximale de 2000 caractères. |
| Character Limit | 2000 |
| Example Value | The total volumes assessed against the first month of entitlement service standard excludes 3,550 decisions involving files submitted under international agreements and interactions with foreign governments. |

### 2-17 Comments on the service standard in general (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Comments on the service standard in general (French) |
| Field Name FR | Commentaires sur la norme de service en général (français) |
| ID | comments_fr |
| Description EN | Comments related to the service standard in general. |
| Description FR | Commentaires en lien à la norme de service en general. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field has a maximum length of 2000 characters. |
| Validation FR | Ce champ a une longueur maximale de 2000 caractères. |
| Character Limit | 2000 |
| Example Value | Les volumes totaux évalués par rapport à la norme de service du premier mois de droit excluent 3 550 décisions concernant des dossiers soumis dans le cadre d'accords internationaux et d'interactions avec des gouvernements étrangers. |

### 2-18 Was the target met

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Was the target met |
| Field Name FR | La cible était-elle atteinte |
| ID | target_met |
| Description EN |   |
| Description FR |   |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| NA | N/A | S.O. |
| N | No | Non |
| Y | Yes | Oui |

### 2-19 URL to Service Standards and Targets (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | URL to Service Standards and Targets (English) |
| Field Name FR | URL vers les normes de service et les cibles (anglais) |
| ID | standards_targets_uri_en |
| Description EN | Identifies the departmental webpage (Canada.ca) where the service standards and targets are published. |
| Description FR | Indique la page Web ministérielle (Canada.ca) où les normes de service et les cibles sont publiées. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field has a maximum length of 1500 characters. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ a une longueur maximale de 1500 caractères. |
| Character Limit | 1500 |
| Example Value | https://www.canada.ca/en/employment-social-development/corporate/transparency/service-standards-2018-2019.html#h2.25 |

### 2-20 URL to Service Standards and Targets (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | URL to Service Standards and Targets (French) |
| Field Name FR | URL vers les normes de service et les cibles (français) |
| ID | standards_targets_uri_fr |
| Description EN | Identifies the departmental webpage (Canada.ca) where the service standards and targets are published. |
| Description FR | Indique la page Web ministérielle (Canada.ca) où les normes de service et les cibles sont publiées. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty.<br>This field has a maximum length of 1500 characters. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ a une longueur maximale de 1500 caractères. |
| Character Limit | 1500 |
| Example Value | https://www.canada.ca/fr/emploi-developpement-social/ministere/transparence/normes-service-2018-2019.html#h2.21 |

### 2-21 URL to Real-Time Performance Results (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | URL to Real-Time Performance Results (English) |
| Field Name FR | URL aux résultats de rendement en temps réel (anglais) |
| ID | performance_results_uri_en |
| Description EN | Identifies the departmental webpage where the real-time performance results for a service are published. |
| Description FR | Indique la page Web (en anglais) sur laquelle les résultats de rendement en temps réel d'un service sont publiés. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field has a maximum length of 1500 characters. |
| Validation FR | Ce champ a une longueur maximale de 1500 caractères. |
| Character Limit | 1500 |
| Example Value | Not applicable |

### 2-22 URL to Real-Time Performance Results (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | URL to Real-Time Performance Results (French) |
| Field Name FR | URL aux résultats de rendement en temps réel (français) |
| ID | performance_results_uri_fr |
| Description EN | Identifies the departmental webpage where the real-time performance results for a service are published. |
| Description FR | Indique la page Web (en anglais) sur laquelle les résultats de rendement en temps réel d'un service sont publiés. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field has a maximum length of 1500 characters. |
| Validation FR | Ce champ a une longueur maximale de 1500 caractères. |
| Character Limit | 1500 |
| Example Value | Not applicable |


---

# Data Element Profile: Proactive Publication - Annual Travel, Hospitality and Conferences

_Source YAML: `travela.yaml`_

## [Legend](#legend)

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

## [Proactive Publication - Annual Travel, Hospitality and Conferences](#proactive-publication-annual-travel-hospitality-and-conferences)

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

# Data Element Profile: Proactive Publication - Travel Expenses

_Source YAML: `travelq.yaml`_

## [Legend](#legend)

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

## [Proactive Publication - Travel Expenses](#proactive-publication-travel-expenses)

### 1-1 Reference Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reference Number |
| Field Name FR | Numéro de référence |
| ID | ref_number |
| Description EN | This field is populated by the organization. It is a unique reference number given to each line item in the spreadsheet. Having a unique identifier for each item will allow users locate a specific item in the registry should they need to modify or delete. |
| Description FR | Cette zone est remplie par chaque organisation. Un identificateur unique est attribué à chaque poste dans le tableur. Un identificateur unique pour chaque poste permettra aux utilisateurs de repérer un article en particulier s’ils doivent le modifier ou le supprimer. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | T-2019-P3-0001 |

### 1-2 Disclosure Group

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Disclosure Group |
| Field Name FR | Groupe de divulgation |
| ID | disclosure_group |
| Description EN | This field will display the group to which the individual belongs. |
| Description FR | Ce champ indique le groupe auquel appartient l’individu. |
| Obligation EN | Required if "Travel End Date" is on or after April 1st 2025 |
| Obligation FR | Requis si la "date de fin du voyage" est le 1er avril 2025 ou après |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Required if "Travel End Date" is on or after April 1st 2025 |
| Validation FR | Requis si la "date de fin du voyage" est le 1er avril 2025 ou après |
| Example Value | SLE |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| MPSES | Minister/Ministerial adviser/Ministerial staff/Parliamentary Secretary/Exempt Staff | Ministre/Conseiller ministériel/Personnel ministériel/Secrétaire parlementaires/Personnel exonéré |
| SLE | Senior officer or employee | Cadre supérieur ou employé |

### 1-3 Title (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Title (English) |
| Field Name FR | Titre (anglais) |
| ID | title_en |
| Description EN | This field will display the position title of the person who travelled, in English |
| Description FR | Cette zone indique le titre du poste de la personne qui a voyagé, en anglais. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Vice-Chairperson, Deputy Minister, Parliamentary Secretary, Assistant Deputy Minister, Programs Branch |

### 1-4 Title (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Title (French) |
| Field Name FR | Titre (français) |
| ID | title_fr |
| Description EN | This field will display the position title of the person who travelled, in French. |
| Description FR | Cette zone indique le titre du poste de la personne qui a voyagé, en français. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Sous-Ministre, Sous- Ministre Adjoint, Chef de la Direction |

### 1-5 Name

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Name |
| Field Name FR | Nom |
| ID | name |
| Description EN | This field will display the name of the  person who travelled |
| Description FR | Ce champ affiche le nom de la personne qui a voyagé |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | John Smith |

### 1-6 Purpose of Travel (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Purpose of Travel (English) |
| Field Name FR | But du déplacement (anglais) |
| ID | purpose_en |
| Description EN | A short description, in English, of the reason for the trip. The description should be succinct (one line if possible) and provide users with a general sense of the trip's purpose. Use of acronyms should be avoided. |
| Description FR | Brève description de la raison du voyage, en anglais. La description doit être brève (une ligne dans la mesure du possible) et donner une indication générale aux utilisateurs du but du voyage. Il faut éviter d’utiliser des acronymes. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Attend North American Free Trade Agreement trade mission, give presentation at the Ontario Chamber of Commerce, etc |

### 1-7 Purpose of Travel (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Purpose of Travel (French) |
| Field Name FR | But du déplacement (français) |
| ID | purpose_fr |
| Description EN | A short description, in French, of the reason for the trip. The description should be succinct (one line if possible) and provide users with a general sense of the trip's purpose. Use of acronyms should be avoided. |
| Description FR | Brève description de la raison du voyage, en français. La description doit être brève (une ligne dans la mesure du possible) et donner une indication générale aux utilisateurs du but du voyage. Il faut éviter d’utiliser des acronymes. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Participer à une mission commerciale dans le cadre de l’Accord de libre-échange nord-américain, donner une présentation à la chambre de commerce de l’Ontario, etc |

### 1-8 Travel Start Date

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Travel Start Date |
| Field Name FR | Date de début du voyage |
| ID | start_date |
| Description EN | To cover the date the travel started |
| Description FR | Date de début du voyage |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Date |
| Validation EN | This field must not be empty.<br>Date can’t be in the future. |
| Validation FR | Ce champ ne doit pas être vide.<br>La date ne doit pas être dans le futur. |
| Example Value | 2019-06-22 |

### 1-9 Travel End Date

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Travel End Date |
| Field Name FR | Date de fin du voyage |
| ID | end_date |
| Description EN | To cover the date the travel ended (can be the same as travel start date) |
| Description FR | Date de fin du voyage (peut être la même date que la date du début du voyage) |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Date |
| Validation EN | This field must not be empty.<br>Date can’t be in the future. |
| Validation FR | Ce champ ne doit pas être vide.<br>La date ne doit pas être dans le futur. |
| Example Value | 2019-06-23 |

### 1-10 Place visited (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Place visited (English) |
| Field Name FR | Endroits visités (anglais) |
| ID | destination_en |
| Description EN | To include name of the first place visited during the trip in question, in English. |
| Description FR | Inclure le nom du premier lieu visité lors du voyage en question, en anglais. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty<br>Must be in the format of <City Name>, <State/Province Name>, <Country Name> for Canada and US, or <City Name>, <Country Name> for international |
| Validation FR | Ce champ ne doit pas être vide<br>Doit être au format <Nom de la ville>, <Nom de l'État/de la province>, <Nom du pays> pour le Canada et les États-Unis, ou <Nom de la ville>, <Nom du pays> pour l'international (p. ex. Ottawa, Ontario, Canada ou Londres, Angleterre) |
| Example Value | Montreal, Quebec, Canada |

### 1-11 Place visited (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Place visited (French) |
| Field Name FR | Endroits visités (français) |
| ID | destination_fr |
| Description EN | To include name of the first place visited during the trip in question, in French. |
| Description FR | Inclure le nom du premier lieu visité lors du voyage en question, en français. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty<br>Must be in the format of <City Name>, <State/Province Name>, <Country Name> for Canada and US, or <City Name>, <Country Name> for international |
| Validation FR | Ce champ ne doit pas être vide<br>Doit être au format <Nom de la ville>, <Nom de l'État/de la province>, <Nom du pays> pour le Canada et les États-Unis, ou <Nom de la ville>, <Nom du pays> pour l'international |
| Example Value | Montréal, Québec, Canada |

### 1-12 Second place visited (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Second place visited (English) |
| Field Name FR | Deuxième lieu visité (anglais) |
| ID | destination_2_en |
| Description EN | To include name of second place visited during the trip in question, in English. |
| Description FR | Inclure le nom du deuxième lieu visité au cours du voyage en question, en anglais. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Must be in the format of <City Name>, <State/Province Name>, <Country Name> for Canada and US, or <City Name>, <Country Name> for international |
| Validation FR | Doit être au format <Nom de la ville>, <Nom de l'État/de la province>, <Nom du pays> pour le Canada et les États-Unis, ou <Nom de la ville>, <Nom du pays> pour l'international |
| Example Value | Toronto, Ontario, Canada |

### 1-13 Second place visited (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Second place visited (French) |
| Field Name FR | Deuxième lieu visité (français) |
| ID | destination_2_fr |
| Description EN | To include name of second place visited during the trip in question, in French. |
| Description FR | Inclure le nom du deuxième lieu visité au cours du voyage en question, en français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Must be in the format of <City Name>, <State/Province Name>, <Country Name> for Canada and US, or <City Name>, <Country Name> for international |
| Validation FR | Doit être au format <Nom de la ville>, <Nom de l'État/de la province>, <Nom du pays> pour le Canada et les États-Unis, ou <Nom de la ville>, <Nom du pays> pour l'international |
| Example Value | Toronto, Ontario, Canada |

### 1-14 Other places visited (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Other places visited (English) |
| Field Name FR | Autres lieux visités (anglais) |
| ID | destination_other_en |
| Description EN | To include names of all other places visited during the trip in question, in English. |
| Description FR | Inclure les noms de tous les autres lieux visités au cours du voyage en question, en anglais. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Must be in the format of <City Name>, <State/Province Name>, <Country Name>;<City 2 Name>, <Country 2 Name> |
| Validation FR | Doit être au format <Nom de la ville>, <Nom de l'État/de la province>, <Nom du pays>;<Nom de la ville 2>, <Nom du pays 2> |
| Example Value | San Francisco, California, USA;London, England |

### 1-15 Other places visited (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Other places visited (French) |
| Field Name FR | Autres lieux visités (français) |
| ID | destination_other_fr |
| Description EN | To include names of all other places visited during the trip in question, in French. |
| Description FR | Inclure les noms de tous les autres lieux visités au cours du voyage en question, en français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | Must be in the format of <City Name>, <State/Province Name>, <Country Name>;<City 2 Name>, <Country 2 Name> |
| Validation FR | Doit être au format <Nom de la ville>, <Nom de l'État/de la province>, <Nom du pays>;<Nom de la ville 2>, <Nom du pays 2> |
| Example Value | San Francisco, California, USA;London, England |

### 1-16 Airfare

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Airfare |
| Field Name FR | Tarif aérien |
| ID | airfare |
| Description EN | Total cost of any airline tickets, if applicable. |
| Description FR | Coût total des billets d’avion, s’il y a lieu. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 1000.00 |

### 1-17 Other transportation

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Other transportation |
| Field Name FR | Autres moyens de transport |
| ID | other_transport |
| Description EN | Total cost of any other forms of transportation (for example, train, bus, vehicle rental, private vehicle, taxis, etc), if applicable. |
| Description FR | Coût total de toutes autres forme de transport (par exemple, train, autobus, véhicule loué, véhicule particulier, taxis), s’il y a lieu. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 50.00 |

### 1-18 Lodging

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Lodging |
| Field Name FR | Hébergement |
| ID | lodging |
| Description EN | Total cost of accommodation |
| Description FR | Coût total de l’hébergement |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 300.00 |

### 1-19 Meals and incidentals

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Meals and incidentals |
| Field Name FR | Frais de repas et frais accessoires |
| ID | meals |
| Description EN | Total cost of meals and incidentals expenses. |
| Description FR | Total des frais de repas et accessoires |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 150.00 |

### 1-20 Other expenses

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Other expenses |
| Field Name FR | Autres dépenses |
| ID | other_expenses |
| Description EN | Total cost of all other items that are not covered by the above fields (for example. special passport, visas, associated photos, calls to the office or home, dependant care where applicable, etc.). |
| Description FR | Coût total de tous les autres éléments qui ne sont pas couverts par les champs ci-dessus (par exemple, passeport spécial, visas, photos connexes, appels au bureau ou à la maison, soin aux personnes à charge, le cas échéant) |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 0.00 |

### 1-21 Total Amount

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Total Amount |
| Field Name FR | Montant total |
| ID | total |
| Description EN | The total of the amount listed above. |
| Description FR | Le total des montants énumérés ci-dessus |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 1500.00 |

### 1-22 Additional Comments English

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Additional Comments English |
| Field Name FR |   |
| ID | additional_comments_en |
| Description EN | This field may be populated with additional comments in English. |
| Description FR | Ce champ peut indiquer des commentaires supplémentaires en anglais. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Provide additional explanatory comments as required. |

### 1-23 Additional Comments French

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Additional Comments French |
| Field Name FR |   |
| ID | additional_comments_fr |
| Description EN | This field may be populated with additional comments in French. |
| Description FR | Ce champ peut indiquer des commentaires supplémentaires en français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Fournir des commentaires explicatifs supplémentaires au besoin. |

## [Proactive Publication - Travel Expenses](#proactive-publication-travel-expenses)

### 2-1 Year

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Year |
| Field Name FR | Année |
| ID | year |
| Description EN | This tab / field in the template is only populated if there are no travel expenses for the reporting period. This field should be populated with the year of the reporting period. |
| Description FR | Cet onglet/champ du modèle n’est rempli que s'il n'y a pas de frais de voyage pour la période d’établissement de rapports. Ce champ doit être rempli avec l’année de la période d’établissement de rapports. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 2019 |

### 2-2 Month

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Month |
| Field Name FR | mois |
| ID | month |
| Description EN | This tab / field in the template is only populated if there are no travel expenses for the reporting period. This field should be populated with the month of the reporting period. |
| Description FR | Cet onglet/champ du modèle n’est rempli que s'il n'y a pas de frais de voyage pour la période d’établissement de rapports. Ce champ doit être rempli avec le mois de la période d’établissement de rapports. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 01 |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| 01 | January | janvier |
| 02 | February | février |
| 03 | March | mars |
| 04 | April | avril |
| 05 | May | mai |
| 06 | June | juin |
| 07 | July | juillet |
| 08 | August | août |
| 09 | September | septembre |
| 10 | October | octobre |
| 11 | November | novembre |
| 12 | December | décembre |


---

# Data Element Profile: Proactive Publication - Acts of Founded Wrongdoing

_Source YAML: `wrongdoing.yaml`_

## [Legend](#legend)

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

## [Proactive Publication - Acts of Founded Wrongdoing](#proactive-publication-acts-of-founded-wrongdoing)

### 1-1 Reference Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reference Number |
| Field Name FR | Numéro de référence |
| ID | ref_number |
| Description EN | This field is populated by the user. It is a unique reference number given to each line item in the spreadsheet. Having a unique identifier for each item will allow users locate a specific item in the registry should they need to modify or delete. |
| Description FR | Cette zone est remplie par chaque organisation. Un identificateur unique est attribué à chaque poste dans le tableur. Un identificateur unique pour chaque poste permettra aux utilisateurs de repérer un article en particulier s’ils doivent le modifier ou le supprimer. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | 1980198 |

### 1-2 File Identification Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | File Identification Number |
| Field Name FR | Numéro d’identification du fichier |
| ID | file_id_number |
| Description EN | This field will contain the file identification number of the founded wrongdoing file. |
| Description FR | Cette zone renferme le numéro d’identification du dossier de l’acte répréhensible constaté. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | 15677 |

### 1-3 File Identification date

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | File Identification date |
| Field Name FR | Date d’identification du ficher |
| ID | file_id_date |
| Description EN | This field will provide the date that the file was created/received. |
| Description FR | Cette zone renferme la date à laquelle le dossier a été créé ou reçu. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Date |
| Validation EN |   |
| Validation FR |   |
| Example Value | 2016-01-01 |

### 1-4 English Case Description

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | English Case Description |
| Field Name FR | Description anglaise |
| ID | case_description_en |
| Description EN | The field will contain the case description, in English. |
| Description FR | Cette zone renferme la description du cas en anglais. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Description |

### 1-5 French Case Description

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | French Case Description |
| Field Name FR | Description française |
| ID | case_description_fr |
| Description EN | This field will contain the case description, in French. |
| Description FR | Cette zone renferme la description du cas en français. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Description |

### 1-6 Findings and Conclusions

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Findings and Conclusions |
| Field Name FR | Constatations et Conclusions |
| ID | findings_conclusions |
| Description EN | The field will contain value(s) a – f, separated by commas if more than one value. |
| Description FR | Le champ contiendra une (des) valeur(s) a – f, séparées par une virgule s´il y en a plus d´une. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text Array |
| Validation EN |   |
| Validation FR |   |
| Example Value | b |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| a | a contravention of any Act of Parliament or of the legislature of a province, or of any regulations made under any such Act, other than a contravention of section 19 of this Act | la contravention d’une loi fédérale ou provinciale ou d’un règlement pris sous leur régime, à l’exception de la contravention de l’article 19 de la présente loi |
| b | a misuse of public funds or a public asset | l’usage abusif des fonds ou des biens publics |
| c | a gross mismanagement in the public sector | les cas graves de mauvaise gestion dans le secteur public |
| d | an act or omission that creates a substantial and specific danger to the life, health or safety of persons, or to the environment, other than a danger that is inherent in the performance of the duties or functions of a public servant | le fait de causer — par action ou omission — un risque grave et précis pour la vie, la santé ou la sécurité humaines ou pour l’environnement, à l’exception du risque inhérent à l’exercice des attributions d’un fonctionnaire |
| e | a serious breach of a code of conduct established under section 5 or 6 | la contravention grave d’un code de conduite établi en vertu des articles 5 ou 6 |
| f | knowingly directing or counselling a person to commit a wrongdoing set out in any of paragraphs (a) to (e) | le fait de sciemment ordonner ou conseiller à une personne de commettre l’un des actes répréhensibles visés aux alinéas a) à e) |

### 1-7 English Recommendations and Corrective Measures

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | English Recommendations and Corrective Measures |
| Field Name FR | Recommendations et mesures Correctives anglaises |
| ID | recommendations_corrective_measures_en |
| Description EN | The Field will contain the Recommendations and Corrective Measures as per the article 11 of the Public Servants Disclosure Protection Act, in English. |
| Description FR | Cette zone renferme les recommandations et mesures correctives en anglais, en conformité à l’article 11 de la Loi sur la protection des fonctionnaires divulgateurs d’actes répréhensibles. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Recommendations and Corrective Measures |

### 1-8 French Recommendations and Corrective Measures

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | French Recommendations and Corrective Measures |
| Field Name FR | Recommendations et mesures Correctives françaises |
| ID | recommendations_corrective_measures_fr |
| Description EN | The Field will contain the Recommendations and Corrective Measures as per the article 11 of the Public Servants Disclosure Protection Act, in French. |
| Description FR | Cette zone renferme les recommandations et mesures correctives en français, en conformité à l’article 11 de la Loi sur la protection des fonctionnaires divulgateurs d’actes répréhensibles. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Recommandations et mesures correctives |
