# Data Element Profile: Proactive Publication - Grants and Contributions

_Source YAML: `grants.yaml`_


## [Table of Contents](#table-of-contents)

- [Published resources](#published-resources)
- [Legend](#legend)
- [Proactive Disclosure - Grants and Contributions](#proactive-disclosure-grants-and-contributions)
- [Proactive Disclosure - Grants and Contributions Nothing to Report](#proactive-disclosure-grants-and-contributions-nothing-to-report)

## [Published resources](#published-resources)

- [Proactive Disclosure - Grants and Contributions](https://open.canada.ca/data/dataset/432527ab-7aac-45b5-81d6-7597107a7013/resource/1d15a62f-5656-49ad-8c88-f40ce689d831)
- [Proactive Disclosure - Grants and Contributions Nothing to Report](https://open.canada.ca/data/dataset/432527ab-7aac-45b5-81d6-7597107a7013/resource/4e4db232-f5e8-43c7-b8b2-439eb7d55475)
- Recombinant schema: https://open.canada.ca/data/en/recombinant-schema/grants.json


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

## [Proactive Disclosure - Grants and Contributions](#proactive-disclosure-grants-and-contributions)

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

## [Proactive Disclosure - Grants and Contributions Nothing to Report](#proactive-disclosure-grants-and-contributions-nothing-to-report)

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
