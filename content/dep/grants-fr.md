# Profil des éléments de données: Proactive Publication - Grants and Contributions

_Source YAML: `grants.yaml`_

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

## Proactive Publication - Grants and Contributions

### 1-1 Numéro de référence

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Reference Number |
| Nom de la zone FR | Numéro de référence |
| ID | ref_number |
| Description EN | The Reference number is populated by departments. It is a unique reference number given to each entry. Having a unique identifier for each item will allow departments to locate a specific item in the registry should they need to modify or delete.<br>Controlled format; This field is populated in the following format DDD-YYYY-YYYY-QX-XXXXX<br>1. DDD represents the department number – Use the same three-digit number as the ‘Departmental Identifier’, which is the department number per the Chart of Accounts list of departments. Ensure you are reviewing the most current year: https://www.tpsgc-pwgsc.gc.ca/recgen/pceaf-gwcoa/2425/txt/rg-3-num-eng.html<br>2. YYYY-YYYY represents the fiscal year<br>3. QX represents the fiscal quarter<br>4. XXXXX represents the unique number assigned by the department for each entry.<br>For example, entries in the 2018-2019 Q1 fiscal year should be assigned numbers as follows: 001-2018-2019-Q1-00001, 001-2018-2019-Q1-00002, 001-2018-2019-Q1-00003, etc.' |
| Description FR | Ce champ est rempli par l’utilisateur. L’identificateur de projet ministériel permet aux ministères d’identifier rapidement les rapports produits dans leur propre système. Les ministères devraient utiliser un chiffre qui est logique pour le ministère. Ces renseignements seront publiés dans le cadre du rapport.<br>Format contrôlé; Ce champ est rempli au format suivant: DDD-YYYY-YYYY-QX-XXXXX<br>1.	DDD représente le numéro du ministère - Utilisez le même numéro à trois chiffres que l’«Identificateur ministériel», qui est le numéro de ministère selon la liste du plan comptable des ministères. Assurez-vous de consulter l’année la plus récente : https://www.tpsgc-pwgsc.gc.ca/recgen/pceaf-gwcoa/2425/txt/rg-3-num-fra.html<br>2.	AAAA-AAAA représente l'année fiscale<br>3.	QX représente le trimestre fiscal<br>4.	XXXXX représente le numéro unique attribué par le département pour chaque entrée.<br>Par exemple, les numéros de l'exercice 2018-2019 du T1 devraient recevoir les numéros suivants: 001-2018-2019-Q1-00001, 001-2018-2019-Q1-00002, 001-2018-2019-Q1-00003, etc.' |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 001-2018-2019-Q2-00045 |

### 1-2 Numéro de modification

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Amendment Number |
| Nom de la zone FR | Numéro de modification |
| ID | amendment_number |
| Description EN | This field is populated by departments and identifies that an amendment is occurring to original information. Use 0 for original records. The first amendment after the original agreement should be identified as 1, then 2, etc. Agreement terminations should be identified as another amendment number and report 'termination' in the 'Additional information' column. |
| Description FR | Ce champ est rempli par les ministères et indique qu'une modification est apportée aux renseignements originaux. Utiliser 0 pour les enregistrements originaux. La première modification après l'accord initial doit être identifiée comme numéro 1, puis 2, etc. Les résiliations d'accord doivent être identifiées comme un autre numéro de modification et indiquer 'résiliation' dans la colonne 'Renseignements supplémentaires'. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Integer |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 3 |

### 1-3 Date de modification

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Amendment Date |
| Nom de la zone FR | Date de modification |
| ID | amendment_date |
| Description EN | This field is populated by departments and indicates the date on which an amendment (or amendments) took place. If the amendment number is not zero, this field is required. |
| Description FR | Ce champ est rempli par les ministères et indique la date à laquelle une modification (ou des modifications) a été apportée. Vous devez remplir ce champ si le numéro de la modification indique un autre chiffre que 0. |
| Obligation EN | Mandatory if amendment number set |
| Obligation FR | Obligatoire si le numéro de modification est défini |
| Occurrence | Une seule |
| Type de format | Date |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 2018-04-01 |

### 1-4 Type d’entente

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Agreement Type |
| Nom de la zone FR | Type d’entente |
| ID | agreement_type |
| Description EN | This field is populated by departments and indicates whether the agreement signed is a grant, contribution or other transfer payment. |
| Description FR | Ce champ est rempli par les ministères et indique si l'entente signée vise une subvention, une contribution ou un autre paiement de transfert. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | G |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| G | Grant | subvention |
| C | Contribution | contribution |
| O | Other transfer payment | autre |

### 1-5 Type de bénéficiaire

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Recipient Type |
| Nom de la zone FR | Type de bénéficiaire |
| ID | recipient_type |
| Description EN | The recipient type helps identify who is receiving the money. |
| Description FR | Le type de bénéficiaire permet d'identifier qui reçoit l'argent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | Required if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Requis si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Exemple de valeur | G |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| F | For-profit organizations | organisme à but lucratif |
| N | Not-for-profit organizations and charities | organisme à but non lucratif et organisme de bienfaisance |
| S | Academia | établissement universitaire et institution publique |
| A | Indigenous recipients | bénéficiaire autochtone |
| G | Government | gouvernement |
| I | International (non-government) | organisation internationale (non gouvernementale) |
| P | Individual or sole proprietorships | particulier ou entreprise à propriétaire unique |
| O | Other | autre |

### 1-6 Numéro d'entreprise du bénéficiaire

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Recipient Business Number |
| Nom de la zone FR | Numéro d'entreprise du bénéficiaire |
| ID | recipient_business_number |
| Description EN | The Business Number is a nine digit number issued by the Canada Revenue Agency since 1994. Per the Directive on the Business Number, it has been identified as the standard identifier for all transactions between businesses and the Government of Canada, including transactions linked to grant and/or contribution funding.<br>This guidance further aligns with the Government of Canada data reference standard on business number: Data reference standard on the business number - Canada.ca (https://www.canada.ca/en/government/system/digital-government/digital-government-innovations/enabling-interoperability/gc-enterprise-data-reference-standards/data-reference-standard-business-number.html)<br>The business number should be populated for an organization or charity.<br>Real-time validation of business identity information linked to the Business Number, including legal name and operating name, for sole proprietorship, partnerships and incorporations, is available to departments through the Business Number Web Validation Service. For more details contact ic.bnadoptionne.ic@canada.ca.<br>To validate a Business Number associated with a charity, departments can access the List of Charities basic search on the Canada.ca website. Enter the Charity name and click the Search button. Then click the Charity name of the search result to find additional information about the charity (e.g., Charity Program number, charity status, effective date of status, designation, etc.) Legal name and operating name cannot be validated using this basic search.<br>A business number is issued when an organization is registered federally, provincially or municipally. It does not change and will allow for consistent identification even if the legal name, the operation name or the organization changes over the life cycle of the grant or contribution. |
| Description FR | Depuis 1994, l’Agence du revenu du Canada émet des numéros d’entreprise à neuf chiffres. Aux termes de la Directive sur le numéro d’entreprise, le numéro d’entreprise constitue l’identificateur standard de toutes les opérations effectuées entre une entreprise et le gouvernement du Canada, y compris les opérations associées à une subvention ou à un financement de contribution.<br>Cette directive est également conforme à la norme de référence sur les données du numéro d'entreprise du gouvernement du Canada : Norme référentielle relative aux données sur le numéro d’entreprise - Canada.ca (https://www.canada.ca/fr/gouvernement/systeme/gouvernement-numerique/innovations-gouvernementales-numeriques/permettre-interoperabilite/normes-referentielles-pangouvernementales-relatives-donnees-gc/norme-referentielle-relative-donnees-numero-entreprise.html)<br>Le numéro d’entreprise devrait être consigné pour une organisation ou un organisme de bienfaisance.<br>Les ministères peuvent obtenir la validation en temps réel de l’identité d’une entreprise en saisissant son numéro d’entreprise dans le Service de validation du numéro d’entreprise en ligne, qui inclut le nom légal et le nom commercial pour les entreprises individuelles, les partenariats et les constitutions en personne morale. Si vous voulez obtenir de plus amples renseignements, envoyez un courriel à ic.bnadoptionne.ic@canada.ca.<br>Pour valider un numéro d’entreprise associé à un organisme de bienfaisance, les ministères peuvent effectuer une recherche de base dans la Liste d’organismes de bienfaisance, sur le site Web Canada.ca. Entrez le nom de l’organisme de bienfaisance, puis cliquez sur le bouton de Recherche. Ensuite, cliquez sur le nom de l’organisme de bienfaisance tiré du résultat de la recherche afin de trouver de plus amples renseignements sur l’organisme de bienfaisance (p. ex., le numéro du programme de bienfaisance, le statut de l’organisme de bienfaisance, la date d’entrée en vigueur du statut et la désignation de l’organisme de bienfaisance). Il est impossible de valider le nom légal et le nom commercial au moyen de la fonction de recherche de base. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | Must be a 9 digit number if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Doit être un numéro à neuf chiffres si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Exemple de valeur | 123456789 |

### 1-7 Nom légal du bénéficiaire (anglais|français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Recipient Legal Name (English\|French) |
| Nom de la zone FR | Nom légal du bénéficiaire (anglais\|français) |
| ID | recipient_legal_name |
| Description EN | The recipient legal name is meant to complement the existing “Recipient business number” field. It is the legal name of the recipient. This information should be taken from the agreement.<br>Only translated if the legal name is provided in both official languages by the recipient.  Provide in the following format: name English\|name French. |
| Description FR | Le nom légal du bénéficiaire se veut complémentaire au champ « Numéro d'entreprise du bénéficiaire ». Cette information devrait être tirée de l'entente de subvention ou de contribution.<br>Traduction seulement si le nom légal est fourni dans les deux langues officielles par le bénéficiaire. Fournir dans le format suivant : nom anglais\|nom français. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | ACME Services Limited\|Services ACME Limitée |

### 1-8 Nom commercial du bénéficiaire (anglais|français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Recipient Operating Name (English\|French) |
| Nom de la zone FR | Nom commercial du bénéficiaire (anglais\|français) |
| ID | recipient_operating_name |
| Description EN | The “Recipient operating name” is an optional field used when an organization operates under a name that differs from its legal name or business number. When a researcher receives funding through a university, this information would be populated here. This field is not intended to capture the ultimate recipient of a grant or contribution; instead, the name of the person receiving funding from the Government of Canada should be entered.<br>Only translated if the name is provided in both official languages by the recipient. Provide in the following format: Legal name English\|Legal name French. |
| Description FR | Le champ « Nom commercial du bénéficiaire » est un champ facultatif utilisé dans le cas d'organisations qui exercent leurs activités sous un nom différent de leur nom légal ou de leur numéro d'entreprise. Dans le cas de chercheurs qui reçoivent leur financement par l'entremise d'une université, cette information doit être entrée ici. Ce champ ne sert pas à saisir le nom du bénéficiaire ultime de la subvention ou de la contribution, mais plutôt celui de la personne qui reçoit le financement du gouvernement du Canada.<br>Traduction seulement si le nom est fourni dans les deux langues officielles par le bénéficiaire. Fournir dans le format suivant : nom anglais\|nom français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | ACME |

### 1-9 Organisme de recherche (anglais|français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Research Organization (English\|French) |
| Nom de la zone FR | Organisme de recherche (anglais\|français) |
| ID | research_organization_name |
| Description EN | The “Research organization” is an optional field for including information about the organization that the recipient represents. This field will be used mainly to highlight academic organizations that researchers have partnered with.<br>Only translated if the organization name is provided in both official languages by the recipient in the following format: name English\|name French. |
| Description FR | Le champ « Organisme de recherche » est facultatif. Il sert à inclure les renseignements sur l'organisation que le bénéficiaire représente. Ce champ sera surtout utilisé pour mettre en évidence les organisations avec lesquelles les chercheurs ont formé un partenariat.<br>Traduction seulement si le nom de l'organisme est fourni dans les deux langues officielles par le bénéficiaire. Fournir dans le format suivant : nom anglais\|nom français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | York University\|Université York |

### 1-10 Pays du bénéficiaire

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Recipient Country |
| Nom de la zone FR | Pays du bénéficiaire |
| ID | recipient_country |
| Description EN | The “Recipient country” is a mandatory field. It is the country in which the recipient resides. |
| Description FR | Le « Pays du bénéficiaire » est un champ obligatoire qui indique le pays de résidence du bénéficiaire. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | CA |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
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

### 1-11 Province ou territoire du bénéficiaire

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Recipient Province or Territory |
| Nom de la zone FR | Province ou territoire du bénéficiaire |
| ID | recipient_province |
| Description EN | The "Recipient province or territory" is a mandatory field if the Recipient Country is Canada and identifies where, within Canada, the recipient resides. |
| Description FR | Le champ « province ou territoire du bénéficiaire » est un champ obligatoire si le pays destinataire est le Canada et indique le lieu de résidence du bénéficiaire au Canada. |
| Obligation EN | Mandatory if Recipient Country is Canada |
| Obligation FR | Obligatoire si le pays destinataire est le Canada |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | ON |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
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

### 1-12 Ville du bénéficiaire (anglais|français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Recipient City (English\|French) |
| Nom de la zone FR | Ville du bénéficiaire (anglais\|français) |
| ID | recipient_city |
| Description EN | The "Recipient city" is a mandatory field that identifies which city the recipient operates in. This field can be populated with Canadian or foreign cities.<br>Official city names should be provided, including both official languages (where applicable in the following format: name English\|name French<br>Free text, but a controlled list from Canada Revenue Agency’s qualified donees list of municipalities can be consulted: Canada Revenue Agency website (http://www.cra-arc.gc.ca/chrts-gvng/qlfd-dns/mncplts-eng.html). |
| Description FR | La « Ville du bénéficiaire » est un champ obligatoire qui indique la ville où le bénéficiaire exerce ses activités. On peut y inscrire le nom de villes canadiennes ou de villes étrangères.<br>Nom officiel exact de la ville, y compris dans les deux langues officielles (le cas échéant) au format suivant : nom anglais\|nom français<br>Texte libre, mais une liste contrôlée de la liste des municipalités désignées donataires de l’Agence du revenu du Canada peut être consultée: site Web de l’Agence du revenu du Canada (http://www.cra-arc.gc.ca/chrts-gvng/qlfd-dns/mncplts-fra.html). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Grand Falls\|Grand-Sault |

### 1-13 Code postal du bénéficiaire

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Recipient Postal Code |
| Nom de la zone FR | Code postal du bénéficiaire |
| ID | recipient_postal_code |
| Description EN | The "Recipient postal code" is a mandatory field that serves to identify the specific area in which the recipient operates. In cases where this field cannot be populated this field may be left blank.<br>Should be in the format "A1A 1A1"; The Canada Post tool for looking up a postal code can be found on the Canada Post website. |
| Description FR | Le « Code postal du bénéficiaire » est un champ obligatoire qui sert à identifier avec précision la région où le bénéficiaire exerce ses activités. Si le fait de remplir ce champ suscite des préoccupations à l'égard de la vie privée, il est possible de le laisser vide.<br>Devrait être selon le format « A1A 1A1 »; L'outil de Postes Canada permettant de rechercher un code postal se trouve sur le site Web de Postes Canada. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | Must be in the format "A1A 1A1" if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Doit être selon le format « A1A 1A1 » si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Exemple de valeur | A1A 1A1 |

### 1-14 Nom de la circonscription fédérale (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Federal Riding Name (English) |
| Nom de la zone FR | Nom de la circonscription fédérale (anglais) |
| ID | federal_riding_name_en |
| Description EN | The federal riding name is the name of the riding in which the recipient resides. |
| Description FR | Le nom de la circonscription fédérale où réside le bénéficiaire. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Winnipeg South Centre |

### 1-15 Nom de la circonscription fédérale (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Federal Riding Name (French) |
| Nom de la zone FR | Nom de la circonscription fédérale (français) |
| ID | federal_riding_name_fr |
| Description EN | The federal riding name is the name of the riding in which the recipient resides. |
| Description FR | Le nom de la circonscription fédérale où réside le bénéficiaire. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Winnipeg-Centre-Sud |

### 1-16 Numéro de la circonscription fédérale

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Federal Riding Number |
| Nom de la zone FR | Numéro de la circonscription fédérale |
| ID | federal_riding_number |
| Description EN | The federal riding number is based on the riding in which the recipient resides. Departments can consult the Elections Canada website in order to retrieve the federal riding number. http://www.elections.ca/content.aspx?section=res&dir=cir/list&document=index338&lang=e |
| Description FR | Numéro de la circonscription fédérale où réside le bénéficiaire. Les départements peuvent consulter le site-web d’Élections Canada pour trouver le numéro de la circonscription fédérale. http://www.elections.ca/content.aspx?section=res&dir=cir/list&document=index338&lang=f |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | Must be a 5 digit number if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Doit être un numéro à cinq chiffres si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Exemple de valeur | 46014 |

### 1-17 Nom du programme (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Program Name (English) |
| Nom de la zone FR | Nom du programme (anglais) |
| ID | prog_name_en |
| Description EN | The program name is the name of the program, according to the terms and conditions (Ts&Cs), under which a recipient is funded. |
| Description FR | Le nom du programme selon les modalités en vertu desquelles le financement est versé au bénéficiaire. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | Required if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Requis si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Exemple de valeur | Canada Granting Program |

### 1-18 Nom du programme (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Program Name (French) |
| Nom de la zone FR | Nom du programme (français) |
| ID | prog_name_fr |
| Description EN | The program name is the name of the program, according to the terms and conditions (Ts&Cs), under which a recipient is funded. |
| Description FR | Le nom du programme selon les modalités en vertu desquelles le financement est versé au bénéficiaire. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | Required if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Requis si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Exemple de valeur | Le programme de subvention du Canada |

### 1-19 But du programme (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Program Purpose (English) |
| Nom de la zone FR | But du programme (anglais) |
| ID | prog_purpose_en |
| Description EN | The program purpose is the program’s purpose according to the Ts&Cs. |
| Description FR | Le but du programme est celui dans lequel le programme a été créé, selon les modalités du programme. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | Required if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Requis si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Exemple de valeur | The Canada Granting Program encourage Canadians to learn about Canada’s geography, history, and economy. The Program provides networking opportunities to enhance recipients’ understanding of Canada. |

### 1-20 But du programme (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Program Purpose (French) |
| Nom de la zone FR | But du programme (français) |
| ID | prog_purpose_fr |
| Description EN | The program purpose is the program’s purpose according to the Ts&Cs. |
| Description FR | Le but du programme est celui dans lequel le programme a été créé, selon les modalités du programme. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | Required if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Requis si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Exemple de valeur | Le programme de subventions du Canada incite les Canadiens à se renseigner sur la géographie, l’histoire et l’économie du Canada. Le programme offre des opportunités de réseautage pour aider les bénéficiaires d’améliorer leur compréhension du Canada. |

### 1-21 Titre de l’entente (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Agreement Title (English) |
| Nom de la zone FR | Titre de l’entente (anglais) |
| ID | agreement_title_en |
| Description EN | The agreement title is the title of the project or agreement that the recipient is undertaking. In cases where there is no title, the agreement number will be duplicated here. |
| Description FR | Le nom de l'entente est le titre du projet ou de l'entente à l'égard duquel s'engage le bénéficiaire. S'il n'y a pas de titre, le numéro de l'entente peut être réinscrit ici. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | Required if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Requis si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Exemple de valeur | Building better buildings |

### 1-22 Titre de l’entente (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Agreement Title (French) |
| Nom de la zone FR | Titre de l’entente (français) |
| ID | agreement_title_fr |
| Description EN | The agreement title is the title of the project or agreement that the recipient is undertaking. In cases where there is no title, the agreement number will be duplicated here. |
| Description FR | Le nom de l'entente est le titre du projet ou de l'entente à l'égard duquel s'engage le bénéficiaire. S'il n'y a pas de titre, le numéro de l'entente peut être réinscrit ici. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | Required if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Requis si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Exemple de valeur | Construire des meilleurs bâtiments |

### 1-23 Numéro de l’entente

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Agreement Number |
| Nom de la zone FR | Numéro de l’entente |
| ID | agreement_number |
| Description EN | The agreement number should be the number on the agreement and/or in the departmental Gs&Cs system. |
| Description FR | Le numéro de l'entente est celui qui figure à l'entente et/ou dans le système de subventions et de contributions du ministère. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | F1580-140737 |

### 1-24 Valeur de l’entente en dollars canadiens

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Agreement Value in CAD |
| Nom de la zone FR | Valeur de l’entente en dollars canadiens |
| ID | agreement_value |
| Description EN | The agreement value is the dollar amount stated in the grant or contribution agreement. This field should be populated with a monetary value in Canadian dollars. This field should report on the total grant or contribution value, and not the change in agreement value. |
| Description FR | La valeur de l'entente est le montant en dollars indiqué dans l'entente de subvention ou de contribution. Ce champ doit indiquer une valeur monétaire en dollars canadiens. Ce champ doit indiquer la valeur totale de la subvention ou de la contribution, et non la variation de la valeur de l'accord. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN | This field must not be empty.<br>The number must be greater than 0. |
| Validation FR | Ce champ ne doit pas être vide.<br>Le nombre doit être supérieur à 0. |
| Exemple de valeur | 500000 |

### 1-25 Type de monnaie étrangère

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Foreign Currency Type |
| Nom de la zone FR | Type de monnaie étrangère |
| ID | foreign_currency_type |
| Description EN | The foreign currency type should be selected if a recipient is paid in a currency other than Canadian dollars. Select the type of foreign currency in this field (for example, US dollar (USD), Australian dollar (AUD), British pound (GBP)). This field is mandatory if the agreement is awarded in foreign currency.'<br>Foreign currency type is populated using the ISO 4217 alphabetic codes for foreign currency. This list can be found on the XE website. Entry is selected from a drop-down list. |
| Description FR | Le champ Type de monnaie étrangère doit être rempli si le bénéficiaire est payé dans une devise autre que le dollar canadien. Il faut sélectionner le type de monnaie étrangère; par exemple, dollar américain (USD), dollar australien (AUD), livre sterling (GBP). Ce champ est obligatoire si l'entente est en devise étrangère.<br>Le type de monnaie étrangère est complété à l'aide des codes alphabétiques ISO 4217 pour les monnaie étrangères. Cette liste se trouve sur le site Web XE. L'entrée est sélectionnée dans une liste déroulante. |
| Obligation EN | Optional (Mandatory when funding provided in foreign currency) |
| Obligation FR | Facultatif ( obligatoire si le financement est fourni en devise étrangère ) |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | USD |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
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

### 1-26 Valeur de la monnaie étrangère

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Foreign Currency Value |
| Nom de la zone FR | Valeur de la monnaie étrangère |
| ID | foreign_currency_value |
| Description EN | The foreign currency value is the amount as signed in the grant or contribution agreement with the recipient. This field should be populated with a monetary value in the foreign currency. This field is mandatory if the agreement is awarded in a foreign currency. |
| Description FR | La valeur en monnaie étrangère est le montant convenu aux termes de l'entente de subvention ou de contribution avec le bénéficiaire. Ce champ doit être rempli en inscrivant la valeur dans la monnaie étrangère. Ce champ est obligatoire si l'entente est en devise étrangère. |
| Obligation EN | Mandatory if foreign currency type is selected |
| Obligation FR | Mandatory if foreign currency type is selected |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 450000 |

### 1-27 Date de début de l’entente

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Agreement Start Date |
| Nom de la zone FR | Date de début de l’entente |
| ID | agreement_start_date |
| Description EN | The agreement start date is the assumed start of the agreement, normally identified based on the last date of signature, as captured in the initial agreement.<br>This date should identify the start of the funding agreement, and not the date of the grant or contribution project. |
| Description FR | La date de début de l'entente est la date d'entrée en vigueur présumée de l'entente, commence généralement à être identifié en fonction de la dernière date de signature, conformément à l'entente initiale.<br>Cette date doit indiquer le début de l'accord de financement, et non la date du projet de subvention ou de contribution. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Date |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Exemple de valeur | 2025-04-01 |

### 1-28 Date de fin prévue de l’entente

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Projected Agreement End Date |
| Nom de la zone FR | Date de fin prévue de l’entente |
| ID | agreement_end_date |
| Description EN | The projected agreement end date is the assumed end of the agreement, or when the project is supposed to end, as captured in the initial agreement. |
| Description FR | La date de fin prévue de l'entente est la date de fin présumée de l'entente, ou la date à laquelle le projet est censé prendre fin, conformément à l'entente initiale. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Date |
| Validation EN | Required if "Agreement Start Date" is on or after December 1st 2025. |
| Validation FR | Requis si la "date de début de l’entente" est le 1er décembre 2025 ou après. |
| Exemple de valeur | 2026-04-30 |

### 1-29 Portée (anglais|français; ...)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Coverage (English\|French; ...) |
| Nom de la zone FR | Portée (anglais\|français; ...) |
| ID | coverage |
| Description EN | Coverage provides information about what will benefit from the project or agreement. Departments should populate this with any information they have available. |
| Description FR | Le champ « Portée » fournit des renseignements sur l'incidence générale prévue du projet ou de l'entente. Les ministères peuvent entrer ici tout renseignement dont ils disposent. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Canada; Mexico\|Mexique; United States\|États-Unis |

### 1-30 Description (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Description (English) |
| Nom de la zone FR | Description (anglais) |
| ID | description_en |
| Description EN | The description explains why the recipient received funding. It should provide a brief yet accurate description of what the recipient is undertaking. |
| Description FR | La description explique à quelles fins le bénéficiaire a reçu le financement. Elle doit décrire de façon brève, mais explicite, en quoi consistent les travaux du bénéficiaire. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Developing models and other tools to predict the safety performance of buildings. |

### 1-31 Description (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Description (French) |
| Nom de la zone FR | Description (français) |
| ID | description_fr |
| Description EN | The description explains why the recipient received funding. It should provide a brief yet accurate description of what the recipient is undertaking. |
| Description FR | La description explique à quelles fins le bénéficiaire a reçu le financement. Elle doit décrire de façon brève, mais explicite, en quoi consistent les travaux du bénéficiaire. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Met au point des modèles et d'autres outils pour prévoir la sécurité des bâtiments. |

### 1-32 Identificateur du SCIAN

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | NAICS Identifier |
| Nom de la zone FR | Identificateur du SCIAN |
| ID | naics_identifier |
| Description EN | The North American Industry Classification System (NAICS) is an industry classification system developed by the statistical agencies of Canada, Mexico and the United States. |
| Description FR | Le Système de classification des industries de l'Amérique du Nord (SCIAN) est un système de classification des industries conçu par les organismes statistiques du Canada, du Mexique et des États-Unis. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 611710 |

### 1-33 Résultats attendus ou visés (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Expected Results or Intended Outcome (English) |
| Nom de la zone FR | Résultats attendus ou visés (anglais) |
| ID | expected_results_en |
| Description EN | The expected results or intended outcome is the assumed result of project completion. It should be populated in accordance with the project that the recipient is undertaking or the program under which it is funded. This field will attempt to explain why the project is being undertaken, and what the final results should be. |
| Description FR | Les résultats attendus ou visés sont les résultats présumés qui découlent de l'exécution d'un projet. Le champ doit être rempli en fonction du projet qu'entreprend le bénéficiaire ou conformément au programme en vertu duquel il est financé. Ce champ vise à offrir une description de la raisond'être du projet et de ce que devraient être les résultats finaux. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | Required if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Requis si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Exemple de valeur | Develop highly qualified personnel available to pursue various careers within industry, academia, government and other sectors of the economy. |

### 1-34 Résultats attendus ou visés (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Expected Results or Intended Outcome (French) |
| Nom de la zone FR | Résultats attendus ou visés (français) |
| ID | expected_results_fr |
| Description EN | The expected results or intended outcome is the assumed result of project completion. It should be populated in accordance with the project that the recipient is undertaking or the program under which it is funded. This field will attempt to explain why the project is being undertaken, and what the final results should be. |
| Description FR | Les résultats attendus ou visés sont les résultats présumés qui découlent de l'exécution d'un projet. Le champ doit être rempli en fonction du projet qu'entreprend le bénéficiaire ou conformément au programme en vertu duquel il est financé. Ce champ vise à offrir une description de la raisond'être du projet et de ce que devraient être les résultats finaux. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | Required if "Agreement Start Date" is on or after December 1st 2025 |
| Validation FR | Requis si la "date de début de l’entente" est le 1er décembre 2025 ou après |
| Exemple de valeur | Développé un personnel hautement qualifié prêt à mener une carrière variée au sein de l’industrie, du milieu académique, de la fonction publique ou dans d’autres secteurs de l’économie. |

### 1-35 Renseignements supplémentaires (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Additional Information (English) |
| Nom de la zone FR | Renseignements supplémentaires (anglais) |
| ID | additional_information_en |
| Description EN | Additional information is information that departments are required to enter under the guidance instructions for exceptions but that is not captured in any of the aforementioned fields. It may contain information on:<br>• additional funding departments<br>• funding through a third party<br>• ministerial announcements<br>• research fields<br>• joint funding<br>• collaborators and partners<br>• keywords<br>• belated reporting<br>• novation agreements<br>• terminations<br>• repayability |
| Description FR | Lorsqu'ils sont tenus de le faire conformément aux « Indications » qui traitent des exceptions, les ministères doivent entrer ici les renseignements supplémentaires qui ne sont pas saisis dans les champs précédents. Il peut s'agir de renseignements comme ceux-ci :<br>• autres ministères participent au financement;<br>• financement par l'intermédiaire d'un tiers;<br>• annonces ministérielles;<br>• domaines de recherche;<br>• financement conjoint;<br>• collaborateurs et partenaires;<br>• mots-clés;<br>• divulgation tardive;<br>• entente d'innovation;<br>• résiliations;<br>• remboursement. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Recipient reallocates or redistributes grant or contribution awarded to third-party beneficiaries |

### 1-36 Renseignements supplémentaires (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Additional Information (French) |
| Nom de la zone FR | Renseignements supplémentaires (français) |
| ID | additional_information_fr |
| Description EN | Additional information is information that departments are required to enter under the guidance instructions for exceptions but that is not captured in any of the aforementioned fields. It may contain information on:<br>• additional funding departments<br>• funding through a third party<br>• ministerial announcements<br>• research fields<br>• joint funding<br>• collaborators and partners<br>• keywords<br>• belated reporting<br>• novation agreements<br>• terminations<br>• repayability |
| Description FR | Lorsqu'ils sont tenus de le faire conformément aux « Indications » qui traitent des exceptions, les ministères doivent entrer ici les renseignements supplémentaires qui ne sont pas saisis dans les champs précédents. Il peut s'agir de renseignements comme ceux-ci :<br>• autres ministères participent au financement;<br>• financement par l'intermédiaire d'un tiers;<br>• annonces ministérielles;<br>• domaines de recherche;<br>• financement conjoint;<br>• collaborateurs et partenaires;<br>• mots-clés;<br>• divulgation tardive;<br>• entente d'innovation;<br>• résiliations;<br>• remboursement. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Le bénéficiaire réaffecte ou redistribue la subvention ou la contribution octroyée à des tiers |

## Proactive Publication - Grants and Contributions

### 2-1 Année

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Year |
| Nom de la zone FR | Année |
| ID | fiscal_year |
| Description EN |   |
| Description FR |   |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 2016-2017 |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
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

### 2-2 Trimestre

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Quarter |
| Nom de la zone FR | Trimestre |
| ID | quarter |
| Description EN |   |
| Description FR |   |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Q2 |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| Q1 | April 1 - June 30 | 1 avril - 30 juin |
| Q2 | July 1 - September 30 | 1 juillet - 30 septembre |
| Q3 | October 1 - December 31 | 1 octobre - 31 décembre |
| Q4 | January 1 - March 31 | 1 janvier - 31 mars |


---
