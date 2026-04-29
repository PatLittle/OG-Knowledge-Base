# Profil des éléments de données: Open Dialogue - Consultations

_Source YAML: `consultations.yaml`_


## [Table of Contents](#table-of-contents)

- [Ressources publiées](#ressources-publies)
- [Légende](#lgende)
- [Consultations - Toutes](#consultations-toutes)

## [Ressources publiées](#ressources-publies)

- [Consultations - Toutes](https://ouvert.canada.ca/data/fr/dataset/7c03f039-3753-4093-af60-74b0f7b2385d/resource/92bec4b7-6feb-4215-a5f7-61da342b2354)
- Schéma recombinant: https://ouvert.canada.ca/data/fr/recombinant-schema/consultations.json


## [Légende](#lgende)

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

## [Consultations - Toutes](#consultations-toutes)

### 1-1 Numéro d’enregistrement

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Registration Number |
| Nom de la zone FR | Numéro d’enregistrement |
| ID | registration_number |
| Description EN | This field is populated by the user. It is a unique reference number given to each line item in the spreadsheet. Having a unique identifier for each item will allow users locate a specific item in the registry should they need to modify or delete. The Registration Number should respect the following format: C-XXXXXXX. |
| Description FR | Cette zone doit être remplie par l’utilisateur. Il s’agit d’un numéro de référence unique donné à chaque article de la feuille de calcul. Les utilisateurs peuvent ainsi trouver, dans un registre donné, un article précis à modifier ou à supprimer. Le numéro d’enregistrement doit respecter le format suivant : C-XXXXXXX. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | CCC0249 |

### 1-3 Ministère(s) partenaire(s)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Partner Department(s) |
| Nom de la zone FR | Ministère(s) partenaire(s) |
| ID | partner_departments |
| Description EN | This field identifies the name(s) of the departments who are collaborating on the identified engagement process. Please provide the numerical code associated to each department and separated by commas. |
| Description FR | Cette zone indique le ministère ou les ministères qui collaborent au processus de participation en question. Il faut indiquer le nom complet des ministères (aucun acronyme). |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Répétable |
| Type de format | Text Array |
| Validation EN | None |
| Validation FR | None |
| Exemple de valeur | D271,D141 |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
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

### 1-4 Sujets

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Subjects |
| Nom de la zone FR | Sujets |
| ID | subjects |
| Description EN | This field indicates the different subjects related to the engagement process. |
| Description FR | Cette zone indique les différents sujets sur lesquels porte le processus de participation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Répétable |
| Type de format | Text Array |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | IP,CD,HS,SE |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
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

### 1-5 Titre de la consultation (en anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Consultation Title (English) |
| Nom de la zone FR | Titre de la consultation (en anglais) |
| ID | title_en |
| Description EN | This field identifies the complete name of the consultation in English. |
| Description FR | Cette zone indique le titre, en anglais, de la consultation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | Family Services Program Reform |

### 1-6 Titre de la consultation (en français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Consultation Title (French) |
| Nom de la zone FR | Titre de la consultation (en français) |
| ID | title_fr |
| Description EN | This field identifies the complete name of the consultation in French. |
| Description FR | Cette zone indique le titre, en français, de la consultation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | Réforme du programme des services à l'enfance |

### 1-7 Description (en anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Description (English) |
| Nom de la zone FR | Description (en anglais) |
| ID | description_en |
| Description EN | This field provides information regarding the nature of consultation and engagement activities in English. This includes a description of the main objectives and expected outcomes of the engagement process. Users are invited to explain how the engagement activities, methods and/or tools will help meet the consultation’s objectives. |
| Description FR | Cette zone fournit de l’information, en anglais, sur la nature des activités de consultation et de participation. On y trouve notamment une description des principaux objectifs et des résultats attendus du processus de participation. On invite les utilisateurs à expliquer en quoi les activités, les méthodes et les outils permettront d’atteindre les objectifs de la consultation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Répétable |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | To engage and obtain Provincial and Territorial partner views |

### 1-8 Description (en français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Description (French) |
| Nom de la zone FR | Description (en français) |
| ID | description_fr |
| Description EN | This field provides information regarding the nature of consultation and engagement activities in French. This includes a description of the main objectives and expected outcomes of the engagement process. Users are invited to explain how the engagement activities, methods and/or tools will help meet the consultation’s objectives. |
| Description FR | Cette zone fournit de l’information, en français, sur la nature des activités de consultation et de participation. On y trouve notamment une description des principaux objectifs et des résultats attendus du processus de participation. On invite les utilisateurs à expliquer en quoi les activités, les méthodes et les outils permettront d’atteindre les objectifs de la consultation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Répétable |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | Obtenir les opinions des partenaires provinciaux et territoriaux |

### 1-9 Participants visés et public cible

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Target Participants and Audience |
| Nom de la zone FR | Participants visés et public cible |
| ID | target_participants_and_audience |
| Description EN | This field provides information regarding the target participants and audience of the engagement process. |
| Description FR | Cette zone précise les participants visés et le public cible du processus de participation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Répétable |
| Type de format | Text Array |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | IP,IG,PT |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
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

### 1-10 Date de début

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Start Date |
| Nom de la zone FR | Date de début |
| ID | start_date |
| Description EN | This field indicates when a planned consultation will begin to accept input from participants. |
| Description FR | Ce champ indique quand une séance de planification prévue commencera à accepter les commentaires des participants. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Date |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | 2018-05-15 |

### 1-11 Date de fin

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | End Date |
| Nom de la zone FR | Date de fin |
| ID | end_date |
| Description EN | This field indicates the end date of the consultation. The consultation is considered closed when no more engagement activities will take place and/or when a department begins analysing the input received during the engagement process. |
| Description FR | Ce champ indique la date à laquelle la consultation a pris fin. Une consultation est terminée lorsqu’il n’y a plus d’activités de participation qui se tiendront et/ou lorsqu’un ministère entreprend l’analyse des commentaires reçus dans le cadre du processus de participation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Date |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | 2018-05-30 |

### 1-12 État

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Status |
| Nom de la zone FR | État |
| ID | status |
| Description EN | The field indicates the current status of the engagement process. |
| Description FR | Cette zone indique l’état d’avancement du processus de participation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | P |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| P | Planned | Prévue |
| O | Open – Accepting Input | Ouverte – Avis acceptés |
| CA | Closed – Analyzing Input | Fermée – Analyse en cours |
| CN | Closed – No Report Expected | Fermée – Aucun rapport en attente |
| CR | Closed – Report Available | Fermée – Rapport disponible |
| NF | Not Going Forward | Ne va pas de l'avant |

### 1-13 Lien vers la page du profil des consultations (en anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Link to Consultations Profile Page (English) |
| Nom de la zone FR | Lien vers la page du profil des consultations (en anglais) |
| ID | profile_page_en |
| Description EN | This field provides the link to the English engagement information profile page. |
| Description FR | Cette zone contient le lien vers la page de profil (en anglais) qui donne des renseignements sur le processus de participation du public. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | http://example.gc.ca/en |

### 1-14 Lien vers la page du profil des consultations (en français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Link to Consultations Profile Page (French) |
| Nom de la zone FR | Lien vers la page du profil des consultations (en français) |
| ID | profile_page_fr |
| Description EN | This field provides the link to the French engagement information profile page. |
| Description FR | Cette zone contient le lien vers la page profil française qui contient des renseignements sur le processus de participation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | http://example.gc.ca/fr |

### 1-15 Rapport disponible en ligne

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Report Available online |
| Nom de la zone FR | Rapport disponible en ligne |
| ID | report_available_online |
| Description EN | This field indicates if the “What we Heard” report is completed, published and made available online on the Consulting with Canadians website. |
| Description FR | Cette zone indique si le rapport intitulé « Ce que nous avons entendu » est terminé, publié et disponible sur le site Web « Consultations auprès des Canadiens ». |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | N |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| Y | Yes | Oui |
| N | No | Non |

### 1-16 Lien – rapport « Ce que nous avons entendu » en anglais

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Link to the “What we Heard” Report in English |
| Nom de la zone FR | Lien – rapport « Ce que nous avons entendu » en anglais |
| ID | report_link_en |
| Description EN | This field provides the link to the “What we Heard” report when it is available online. |
| Description FR | Cette zone contient le lien vers le rapport intitulé « Ce que nous avons entendu » en anglais après que le rapport est affiché en ligne. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | None |
| Validation FR | None |

### 1-17 Lien – rapport « Ce que nous avons entendu » en français

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Link to the “What we Heard” Report in French |
| Nom de la zone FR | Lien – rapport « Ce que nous avons entendu » en français |
| ID | report_link_fr |
| Description EN | This field provides the link to the “What we Heard” report when it is available online. |
| Description FR | Cette zone contient le lien vers le rapport intitulé « Ce que nous avons entendu » après que le rapport est affiché en ligne. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | None |
| Validation FR | None |

### 1-22 Haute visibilité

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | High Profile |
| Nom de la zone FR | Haute visibilité |
| ID | high_profile |
| Description EN | This field indicates whether the consultation or public engagement initiative is considered high profile. The consultation is considered high profile if it meets one or more of the criteria in the ‘Rationale’ field. |
| Description FR | Cette zone indique si la consultation ou initiative de participation est à haute visibilité. La consultation est considérée comme de haute visibilité si elle réponde à un ou plus de critères à la zone 'Raison'. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | Y |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| Y | Yes | Oui |
| N | No | Non |

### 1-23 Raison

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Rationale |
| Nom de la zone FR | Raison |
| ID | rationale |
| Description EN | The field indicates the rationale that prompted the public engagement initiative. This field includes only criteria that define high profile public engagement. |
| Description FR | Cette zone comprend le(s) motif(s) de l’activité de participation du public. Cette zone inclut uniquement les critères qui définissent une consultation ou participation public de profil élevé. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Répétable |
| Type de format | Text Array |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | BG,PC |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| BG | Budget | Budget |
| IN | International Commitment | Engagement international |
| LC | Duty to Consult | Obligation de consulter |
| ML | Mandate Letter | Lettre de mandat |
| MP | Minister and/or Parliamentary Secretary Involvement and/or announcement | Implication ou annonce du ministre ou du secrétaire parlementaire |
| PC | Parliament Committee | Comité parlementaire |
| ST | Speech of the Throne | Discours du Trône |


---
