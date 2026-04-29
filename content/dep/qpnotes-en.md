# Data Element Profile: Proactive Publication - Question Period Notes

_Source YAML: `qpnotes.yaml`_

## Legend

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

## Proactive Publication - Question Period Notes

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

## Proactive Publication - Question Period Notes

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
