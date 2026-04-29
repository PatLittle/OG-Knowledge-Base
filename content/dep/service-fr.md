# Profil des éléments de données: Service Inventory

_Source YAML: `service.yaml`_


Table of Contents

- [Ressources publiées](#ressources-publies)
- [Légende](#lgende)
- [Renseignements sur l'identification des services, données volumétrique (pour 2024)](#renseignements-sur-lidentification-des-services-donnes-volumtrique-pour-2024)
- [Normes relatives aux services et résultats de rendement (pour 2024)](#normes-relatives-aux-services-et-rsultats-de-rendement-pour-2024)

<div id="ressources-publies"></div>

## Ressources publiées

Published data: [Renseignements sur l'identification des services, données volumétrique (pour 2024)](https://ouvert.canada.ca/data/fr/dataset/3ac0d080-6149-499a-8b06-7ce5f00ec56c/resource/c0cf9766-b85b-48c3-b295-34f72305aaf6)
Published data: [Normes relatives aux services et résultats de rendement (pour 2024)](https://ouvert.canada.ca/data/fr/dataset/3ac0d080-6149-499a-8b06-7ce5f00ec56c/resource/8736cd7e-9bf9-4a45-9eee-a6cb3c43c07e)
Schéma recombinant: https://ouvert.canada.ca/data/fr/recombinant-schema/service.json


<div id="lgende"></div>

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

<div id="renseignements-sur-lidentification-des-services-donnes-volumtrique-pour-2024"></div>

## Renseignements sur l'identification des services, données volumétrique (pour 2024)

### 1-1 Exercice financier

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Fiscal Year |
| Nom de la zone FR | Exercice financier |
| ID | fiscal_yr |
| Description EN | Identifies the fiscal year (April 1 to March 31) during which service activities took place. For example, records for fiscal year 2023-2024 should include applications received from April 1, 2023, to March 31, 2024. |
| Description FR | Indique l'exercice financier (1 avril au 31 mars) durant lequel les activités du service ont eu lieu. Par exemple, les données pour l’exercice financier 2023-2024 devraient inclure les demandes de service qui ont été reçues entre le 1er avril 2023 et le 31 mars 2024. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Exemple de valeur | 2022-2023 |

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

### 1-2 Numéro d'identification du service

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Service ID Number |
| Nom de la zone FR | Numéro d'identification du service |
| ID | service_id |
| Description EN | The unique number assigned to a service in the inventory to make it easier to refer to specific services. |
| Description FR | Le numéro unique attribué à un service dans le répertoire afin de faciliter le référencement à des services précis. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field cannot contain commas. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ ne peut pas contenir de virgules. |
| Exemple de valeur | 1001 |

### 1-3 Nom du service (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Service Name (English) |
| Nom de la zone FR | Nom du service (anglais) |
| ID | service_name_en |
| Description EN | Identifies the official name of the service. |
| Description FR | Indique le nom officiel du service. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field has a maximum length of 350 characters. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ a une longueur maximale de 350 caractères. |
| Limite de caractères | 350 |
| Exemple de valeur | Old Age Security (OAS) Benefits |

### 1-4 Nom du service (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Service Name (French) |
| Nom de la zone FR | Nom du service (français) |
| ID | service_name_fr |
| Description EN | Identifies the official name of the service. |
| Description FR | Indique le nom officiel du service. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field has a maximum length of 350 characters. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ a une longueur maximale de 350 caractères. |
| Limite de caractères | 350 |
| Exemple de valeur | Prestations de la Sécurité de la vieillesse |

### 1-5 Description du service (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Service Description (English) |
| Nom de la zone FR | Description du service (anglais) |
| ID | service_description_en |
| Description EN | Provides a brief description of the service, in plain language. |
| Description FR | Offre une brève description du service, en langage simple. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field has a maximum length of 1800 characters. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ a une longueur maximale de 1800 caractères. |
| Limite de caractères | 1800 |
| Exemple de valeur | The Old Age Security (OAS) pension is a monthly payment available to most Canadians 65 years of age who meet the Canadian legal status and residence requirements. In addition to the Old Age Security pension, there are three types of Old Age Security benefits:  the Guaranteed Income Supplement, Allowance and Allowance for the Survivor. The OAS provides financial support to millions of seniors, including those that are low-income, each year. |

### 1-6 Description du service (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Service Description (French) |
| Nom de la zone FR | Description du service (français) |
| ID | service_description_fr |
| Description EN | Provides a brief description of the service, in plain language. |
| Description FR | Offre une brève description du service, en langage simple. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field has a maximum length of 1800 characters. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ a une longueur maximale de 1800 caractères. |
| Limite de caractères | 1800 |
| Exemple de valeur | La pension de la Sécurité de la vieillesse (SV) est une prestation mensuelle versée à la plupart des Canadiens âgés de 65 ans et plus qui satisfont aux exigences relatives au statut juridique et à la résidence au Canada. En plus de la pension de la Sécurité de la vieillesse, il existe trois types de prestations de la Sécurité de la vieillesse : le Supplément de revenu garanti, l'Allocation et l'Allocation au survivant. La SV verse chaque année un soutien financier à des millions d'aînés, incluant ceux à faible revenu. |

### 1-7 Type de service

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Service Type |
| Nom de la zone FR | Type de service |
| ID | service_type |
| Description EN | Identifies the service type as outlined in the Guideline on Service and Digital. Multiple values must be separated by a comma (,). |
| Description FR | Indique le type de service tel qu'indiqué dans la Ligne directrice sur les services et le numérique. Séparez les entrées par une virgule (,) s’il y en a plusieurs qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Répétable |
| Type de format | Text Array |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Exemple de valeur | RES |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| APIR | Agreements, Permissions, Inspections, Rulings | Accords, autorisations, inspections, décisions |
| CER | Care, Education, Recreation | Soins, éducation, loisirs |
| GNC | Grants and Contributions | Subventions et contributions |
| INFO | Information | Informations |
| LRP | Legislation, Regulation, Policy | Législation, réglementation, politique |
| PPI | Penalties, Protection, Intervention | Pénalités, protection, interventions |
| REG_VOL | High Volume Regulatory Transactions | Opérations réglementaires à demande élevée |
| RES | Resources | Ressources |

### 1-8 Type de bénéficiaire du service

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Service Recipient Type |
| Nom de la zone FR | Type de bénéficiaire du service |
| ID | service_recipient_type |
| Description EN | Targeted, client-based services: serve specific clients or groups, such as people, businesses, GC employees. Untargeted, Societal-based Service: serve society, not distinct people or groups, such as military, pure science. |
| Description FR | Services ciblés axés sur les clients : Répondent aux besoins de clients ou de groupes particuliers, par exemple les personnes, les entreprises ou les employés du GC. Services non ciblés axés sur la société : Répondent aux besoins de la société en général et non aux besoins de personnes ou de groupes distincts, par exemple les forces armées ou la science pure. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Exemple de valeur | CLIENT |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| CLIENT | Targeted, Client-based service | Service ciblé axé sur les clients |
| SOCIETY | Untargeted, Societal-based service | Service non-ciblé axé sur la société |

### 1-9 Étendue du service

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Service Scope |
| Nom de la zone FR | Étendue du service |
| ID | service_scope |
| Description EN | Indicates whether the service is external or internal to government. Multiple values must be separated by a comma (,). |
| Description FR | Indique si le service est offert aux clients externes ou internes au gouvernement. Séparez les entrées par une virgule (,) s’il y en a plusieurs qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Répétable |
| Type de format | Text Array |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Exemple de valeur | EXTERN |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| CLUSTER | Internal Cluster Service | Service cluster interne |
| ENTERPRISE | Internal Enterprise Service | Service interne intégré |
| EXTERN | External Service | Service externe |
| INTERN | Internal Service | Service interne |

### 1-10 Clients/groupes cibles

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Client/Target Groups |
| Nom de la zone FR | Clients/groupes cibles |
| ID | client_target_groups |
| Description EN | Identifies the clients or target groups of the service. Multiple values must be separated by a comma (,). |
| Description FR | Identifie les clients ou les groupes de services cibles. Séparez les entrées par une virgule (,) s’il y en a plusieurs qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Répétable |
| Type de format | Text Array |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Exemple de valeur | PERSON |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| ECONOM | Economic Segments (Businesses) | Segments économiques (entreprises) |
| FOR | Foreign Entities | Entités étrangères |
| INTERN_GOV | Internal to Government | Interne au gouvernement |
| NGO | Non Profit Institutions and Organizations | Institutions et organismes sans but lucratif |
| PERSON | Persons | Particuliers |
| PTC | Provinces, Territories or Communities | Provinces, territoires et collectivités |

### 1-11 Code d'identification du programme

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Program ID Code |
| Nom de la zone FR | Code d'identification du programme |
| ID | program_id |
| Description EN | Identifies the unique program code associated with program elements for all strategic outcomes, programs, sub-programs, and sub-sub-programs. The Program codes in the government-wide Chart of Accounts can be used.<br>Corporate planners in the department/agency who are responsible for the Policy on Results can assist in identifying this, if needed. Multiple values must be separated by a comma (,). |
| Description FR | Indique le code de programme unique associé aux éléments de programme pour tous les résultats stratégiques, les programmes, les sous-programmes et les sous-sous-programmes. Les codes de programme du Plan comptable à l'échelle de l'administration fédérale peuvent être utilisés.<br>Les planificateurs ministériels du ministère ou de l'organisme responsables de la Politique sur les résultats peuvent aider à déterminer le code d'identification du programme, au besoin. Séparez les entrées par une virgule (,) s’il y en a plusieurs qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Répétable |
| Type de format | Text Array |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Exemple de valeur | BGN01 |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
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

### 1-12 Désignation du programme (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Program Name (English) |
| Nom de la zone FR | Désignation du programme (anglais) |
| ID | program_name_en |
| Description EN | Identifies the name of the program under which the service is delivered. |
| Description FR | Indique le nom du programme sous lequel le service est offert. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Répétable |
| Type de format | Text Array |
| Validation EN |   |
| Validation FR |   |

### 1-13 Désignation du programme (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Program Name (French) |
| Nom de la zone FR | Désignation du programme (français) |
| ID | program_name_fr |
| Description EN | Identifies the name of the program under which the service is delivered. |
| Description FR | Indique le nom du programme sous lequel le service est offert. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Répétable |
| Type de format | Text Array |
| Validation EN |   |
| Validation FR |   |

### 1-14 Commentaires des clients, par canal

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Client Feedback, by Channel |
| Nom de la zone FR | Commentaires des clients, par canal |
| ID | client_feedback_channel |
| Description EN | Identifies which channels, if any, provide users of a service an opportunity to provide feedback on their level of satisfaction with the service. Multiple values must be separated by a comma (,). |
| Description FR | Détermine quels canaux, s'il y a lieu, offrent aux utilisateurs d'un service l'occasion de donner une rétroaction sur leur niveau de satisfaction à l'égard du service. Séparez les entrées par une virgule (,) s’il y en a plusieurs qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Répétable |
| Type de format | Text Array |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Exemple de valeur | EML,FAX,PERSON,ONL,POST,TEL |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| EML | Email | Courriel |
| FAX | Fax | Télécopieur |
| NON | No feedback collected | Aucune rétroaction possible |
| ONL | Online | En ligne |
| OTH | Other channel not listed | Autre option qui n'est pas sur la liste |
| PERSON | In-Person | En personne |
| POST | Postal Mail | Courrier postal |
| TEL | Telephone | Téléphone |

### 1-15 Système décisionnel automatisé

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Automated Decision System |
| Nom de la zone FR | Système décisionnel automatisé |
| ID | automated_decision_system |
| Description EN | An automated decision system is defined in the Directive on Automated Decision-Making and means any technology that either assists or replaces the judgment of human decision-makers, such as those that draw from fields like statistics, linguistics and computer science, and use techniques such as rules-based systems, regression, predictive analytics, machine learning, deep learning, and neural networks.<br>For the scope of this question, please answer yes if the service uses an automated decision systems to make or assist officers in making administrative decisions, those that affect legal rights, privileges or interests of clients, whether internal or external. When a system is an automated decision system that makes or assists an officer in making, the requirements of the Directive must be met, and an Algorithmic Impact Assessment published. Refer to the Guide on the Scope of the Directive on Automated Decision-Making to learn more about whether the system is in scope of the Directive on Automated Decision-Making. You can also reach out to your department’s Chief Information and Chief Data Offices to learn more about whether the system falls in scope of the Directive. |
| Description FR | Un système décisionnel automatisé est défini dans la Directive sur la prise de décisions automatisée et désigne toute technologie qui assiste ou remplace le jugement des décideurs humains, comme ceux qui proviennent de domaines tels que les statistiques, la linguistique et les sciences informatiques, et utilisent des techniques telles que les systèmes basés sur des règles, la régression, l’analytique prédictive, l’apprentissage automatique, l’apprentissage en profondeur et les réseaux neuronaux.<br>Pour la portée de cette question, veuillez répondre "oui" si le service utilise des systèmes décisionnel automatisé pour prendre ou aider les agents à prendre des décisions administratives, celles qui affectent les droits juridiques, les privilèges ou les intérêts des clients, qu'ils soient internes ou externes. Lorsqu'un système est un système décisionnel automatisé qui prend ou aide un agent à prendre des décisions, les exigences de la Directive doivent être respectées, et une Évaluation de l'incidence algorithmique doit être publiée. Référez-vous au Guide sur la portée de la Directive sur la prise de décisions automatisée pour en savoir plus sur la portée de la Directive sur la prise de décision automatisée. Vous pouvez également contacter les bureaux du Dirigeant principal de l'information et du Dirigeant principal des données de votre ministère pour en savoir plus sur la portée de la Directive. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Exemple de valeur | N |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| N | No | Non |
| Y | Yes | Oui |

### 1-16 Description du système décisionnel automatisé (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Automated Decision System Description (English) |
| Nom de la zone FR | Description du système décisionnel automatisé (anglais) |
| ID | automated_decision_system_description_en |
| Description EN | Describe what the system does. Include: the name or title of the system, the role of the system in the decision, whether it is full or partial automation, and how officers use the system to make or inform the decision. Include whether or not an Algorithmic Impact Assessment is published, and if not indicate the reason for not publishing one. |
| Description FR | Décrivez ce que fait le système. Inclure : le nom ou titre du système, le rôle du système dans la prise de décision, s'il s'agit d'une automatisation complète ou partielle, et comment les agents utilisent le système pour prendre ou informer la décision. Indiquer si une Évaluation de l'incidence algorithmique est publiée ou non, et si ce n'est pas le cas, indiquez la raison pour laquelle elle n'est pas publiée. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field is required due to a response in a different field.<br>This field has a maximum length of 1800 characters. |
| Validation FR | Ce champ est requis en raison d'une réponse présente dans un autre champ.<br>Ce champ a une longueur maximale de 1800 caractères. |
| Limite de caractères | 1800 |

### 1-17 Description du système décisionnel automatisé (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Automated Decision System Description (French) |
| Nom de la zone FR | Description du système décisionnel automatisé (français) |
| ID | automated_decision_system_description_fr |
| Description EN | Describe what the system does. Include: the name or title of the system, the role of the system in the decision, whether it is full or partial automation, and how officers use the system to make or inform the decision. Include whether or not an Algorithmic Impact Assessment is published, and if not indicate the reason for not publishing one. |
| Description FR | Décrivez ce que fait le système. Inclure : le nom ou titre du système, le rôle du système dans la prise de décision, s'il s'agit d'une automatisation complète ou partielle, et comment les agents utilisent le système pour prendre ou informer la décision. Indiquer si une Évaluation de l'incidence algorithmique est publiée ou non, et si ce n'est pas le cas, indiquez la raison pour laquelle elle n'est pas publiée. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field is required due to a response in a different field.<br>This field has a maximum length of 1800 characters. |
| Validation FR | Ce champ est requis en raison d'une réponse présente dans un autre champ.<br>Ce champ a une longueur maximale de 1800 caractères. |
| Limite de caractères | 1800 |

### 1-18 Frais de service

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Service Fees |
| Nom de la zone FR | Frais de service |
| ID | service_fee |
| Description EN | Identifies whether a service fee is collected for the provision of the service. |
| Description FR | Indique si des frais de service sont perçus pour la prestation du service. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Exemple de valeur | N |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| N | No | Non |
| Y | Yes | Oui |

### 1-19 Services en ligne : Enregistrement/inscription du compte

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Online Services: Account Registration/Enrollment |
| Nom de la zone FR | Services en ligne : Enregistrement/inscription du compte |
| ID | os_account_registration |
| Description EN | Identifies whether a client can register or enroll for a personal account where they can make use of other interaction points (applying for services, providing information, seeing their status, submitting feedback, etc.). |
| Description FR | Indique si un client peut s'inscrire ou s'inscrire à un compte personnel où il peut utiliser d'autres points d'interaction (demander des services, fournir des renseignements, voir son statut, soumettre des commentaires, etc.). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Exemple de valeur | Y |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| NA | N/A (This interaction point is not applicable to the service) | S.O. (Ce point d'interaction ne s'applique pas au service) |
| N | No (This interaction point is applicable to the service but is not currently online) | Non (Ce point d'interaction s'applique au service, mais il n'est pas en ligne présentement) |
| Y | Yes (This interaction point is applicable to the service and is online) | Oui (Ce point d'interaction s'applique au service et est en ligne) |

### 1-20 Services en ligne : Authentification

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Online Services: Authentication |
| Nom de la zone FR | Services en ligne : Authentification |
| ID | os_authentication |
| Description EN | Identifies whether a client can authenticate their identity online. |
| Description FR | Indique si un client peut confirmer son identité en ligne. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Exemple de valeur | Y |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| NA | N/A (This interaction point is not applicable to the service) | S.O. (Ce point d'interaction ne s'applique pas au service) |
| N | No (This interaction point is applicable to the service but is not currently online) | Non (Ce point d'interaction s'applique au service, mais il n'est pas en ligne présentement) |
| Y | Yes (This interaction point is applicable to the service and is online) | Oui (Ce point d'interaction s'applique au service et est en ligne) |

### 1-21 Services en ligne : Demande

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Online Services: Application |
| Nom de la zone FR | Services en ligne : Demande |
| ID | os_application |
| Description EN | Identifies whether a client can apply for a service online. |
| Description FR | Indique si un client peut présenter une demande de service en ligne. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Exemple de valeur | Y |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| NA | N/A (This interaction point is not applicable to the service) | S.O. (Ce point d'interaction ne s'applique pas au service) |
| N | No (This interaction point is applicable to the service but is not currently online) | Non (Ce point d'interaction s'applique au service, mais il n'est pas en ligne présentement) |
| Y | Yes (This interaction point is applicable to the service and is online) | Oui (Ce point d'interaction s'applique au service et est en ligne) |

### 1-22 Services en ligne : Décision

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Online Services: Decision |
| Nom de la zone FR | Services en ligne : Décision |
| ID | os_decision |
| Description EN | Identifies whether a client can be notified online of the outcome of their request for this service. |
| Description FR | Indique si un client peut être informé en ligne du résultat de sa demande de ce service. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Exemple de valeur | Y |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| NA | N/A (This interaction point is not applicable to the service) | S.O. (Ce point d'interaction ne s'applique pas au service) |
| N | No (This interaction point is applicable to the service but is not currently online) | Non (Ce point d'interaction s'applique au service, mais il n'est pas en ligne présentement) |
| Y | Yes (This interaction point is applicable to the service and is online) | Oui (Ce point d'interaction s'applique au service et est en ligne) |

### 1-23 Services en ligne : Émission

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Online Services: Issuance |
| Nom de la zone FR | Services en ligne : Émission |
| ID | os_issuance |
| Description EN | Identifies whether a client can receive the service online, perhaps in the form of permits, certificates, money or information. |
| Description FR | Indique si un client peut recevoir le service en ligne, peut-être sous forme de permis, de certificats, d'argent ou d'information. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Exemple de valeur | Y |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| NA | N/A (This interaction point is not applicable to the service) | S.O. (Ce point d'interaction ne s'applique pas au service) |
| N | No (This interaction point is applicable to the service but is not currently online) | Non (Ce point d'interaction s'applique au service, mais il n'est pas en ligne présentement) |
| Y | Yes (This interaction point is applicable to the service and is online) | Oui (Ce point d'interaction s'applique au service et est en ligne) |

### 1-24 Services en ligne : Solution de problème et rétroaction

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Online Services: Issue Resolution and Feedback |
| Nom de la zone FR | Services en ligne : Solution de problème et rétroaction |
| ID | os_issue_resolution_feedback |
| Description EN | Identifies whether a client can seek resolution to their issues or provide feedback online. |
| Description FR | Indique si un client peut demander une résolution à ses problèmes avec le service ou fournir de la rétroaction en ligne. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Exemple de valeur | Y |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| NA | N/A (This interaction point is not applicable to the service) | S.O. (Ce point d'interaction ne s'applique pas au service) |
| N | No (This interaction point is applicable to the service but is not currently online) | Non (Ce point d'interaction s'applique au service, mais il n'est pas en ligne présentement) |
| Y | Yes (This interaction point is applicable to the service and is online) | Oui (Ce point d'interaction s'applique au service et est en ligne) |

### 1-25 Commentaires sur les services électroniques - points d'interaction avec les clients (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Comments on Online Services - Client Interaction Points (English) |
| Nom de la zone FR | Commentaires sur les services électroniques - points d'interaction avec les clients (anglais) |
| ID | os_comments_client_interaction_en |
| Description EN | Comments related to online services - client Interaction points (English). For any interaction points reported as "Not Applicable", comments have to be provided. |
| Description FR | Commentaires en anglais en lien avec les services en ligne - points d'interaction avec les clients. Pour tout point d'interaction signalés comme « sans objet », des commentaires doivent être fournis. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field is required due to a response in a different field.<br>This field has a maximum length of 1000 characters. |
| Validation FR | Ce champ est requis en raison d'une réponse présente dans un autre champ.<br>Ce champ a une longueur maximale de 1000 caractères. |
| Limite de caractères | 1000 |

### 1-26 Commentaires sur les services électroniques - points d'interaction avec les clients (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Comments on Online Services - Client Interaction Points (French) |
| Nom de la zone FR | Commentaires sur les services électroniques - points d'interaction avec les clients (français) |
| ID | os_comments_client_interaction_fr |
| Description EN | Comments related to online services - client Interaction points (French). For any interaction points reported as "Not Applicable", comments have to be provided. |
| Description FR | Commentaires en français en lien avec les services en ligne - points d'interaction avec les clients (français). Pour tout point d'interaction signalés comme « sans objet », des commentaires doivent être fournis. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field is required due to a response in a different field.<br>This field has a maximum length of 1000 characters. |
| Validation FR | Ce champ est requis en raison d'une réponse présente dans un autre champ.<br>Ce champ a une longueur maximale de 1000 caractères. |
| Limite de caractères | 1000 |

### 1-27 Année du dernier examen de service

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Year of last service review |
| Nom de la zone FR | Année du dernier examen de service |
| ID | last_service_review |
| Description EN | Identifies the fiscal year when the most recent service review was completed. |
| Description FR | Identifie l’exercice financier lors duquel le plus récent examen de service a été mené. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |

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

### 1-28 Année de la dernière amélioration du service sur la base de la rétroaction du client

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Year of last service improvement based on client feedback |
| Nom de la zone FR | Année de la dernière amélioration du service sur la base de la rétroaction du client |
| ID | last_service_improvement |
| Description EN | Identifies the most recent year in which this service was improved based on client feedback. |
| Description FR | Identifie l'exercice financier la plus récente au cours de laquelle ce service a été amélioré en fonction des commentaires des clients. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 2021-2022 |

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

### 1-29 Utilisation du numéro d'assurance sociale (NAS)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Use of Social Insurance Number |
| Nom de la zone FR | Utilisation du numéro d'assurance sociale (NAS) |
| ID | sin_usage |
| Description EN | Identifies whether the Social Insurance Number (SIN) is used in the delivery of the service. |
| Description FR | Indique si le numéro d'assurance sociale (NAS) est utilisé dans la prestation du service. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Exemple de valeur | Y |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| NA | N/A (not a service to individuals) | S.O. (N'est pas un service aux particuliers) |
| N | No | Non |
| Y | Yes | Oui |

### 1-30 Utilisation du numéro d’entreprise de l’ARC en tant qu’identificateur standard

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Use of CRA Business Number as Standard Identifier |
| Nom de la zone FR | Utilisation du numéro d’entreprise de l’ARC en tant qu’identificateur standard |
| ID | cra_bn_identifier_usage |
| Description EN | Identifies whether the Canada Revenue Agency's Business Number is used in the delivery of the service as the standard identifier in accordance with the Data reference standard on the business number. |
| Description FR | Indique si le numéro d’entreprise de l’Agence du revenu du Canada est utilisé dans la prestation des services en tant qu’identificateur standard, conformément à la Norme référentielle relative aux données sur le numéro d’entreprise. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Exemple de valeur | Y |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| NA | N/A (not a service to businesses) | S.O. (N'est pas un service aux entreprises) |
| N | No | Non |
| Y | Yes | Oui |

### 1-31 Nombre de demandes de renseignements reçues par telephone

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Number of Telephone Enquiries Received |
| Nom de la zone FR | Nombre de demandes de renseignements reçues par telephone |
| ID | num_phone_enquiries |
| Description EN | Identifies the number of enquiries about the service received in this fiscal year. Note: This field represents only requests for information about the service. Report service requests or applications submitted by telephone in the "telephone applications" field. A value of 0 means no calls were received; ND means no data was collected; and NA means it is not possible to submit telephone enquiries.<br>Note: This field is not included in 'Total Applications'. |
| Description FR | Indique le nombre de demandes d'information reçues par téléphone au cours d'un exercice financier. Remarque: Ce champ indique seulement le nombre de demandes d'information au sujet d'un service. Servez-vous du champ « Nombre de demandes soumises par téléphone » pour les demandes de prestation de service reçues par téléphone. La valeur 0 signifie qu'aucun appel n'a été reçu, ND signifie qu'aucune donnée n'est disponible, et NA signifie qu'il n'est pas possible de présenter des demandes d’information par téléphone.<br>Remarque : Ce champ n'est pas inclus dans « Nombre total de demandes ». |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field must be either a number, "NA", or "ND"<br>This value must not be negative. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ doit contenir soit un chiffre, soit « NA », soit « ND ».<br>Cette valeur ne doit pas être négative. |
| Exemple de valeur | 7252346 |

### 1-32 Nombre de demandes soumises par téléphone

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Number of Applications Submitted by Telephone |
| Nom de la zone FR | Nombre de demandes soumises par téléphone |
| ID | num_applications_by_phone |
| Description EN | Identifies the number of applications submitted in a fiscal year for the telephone channel. A value of 0 means no applications were received for this channel; ND means there is no data collected for this channel; and NA means no applications can be submitted through this channel. |
| Description FR | Indique le nombre de demandes de prestation de service reçues par téléphone au cours d'un exercice. La valeur 0 signifie qu'aucune demande n'a été reçue via ce mode de prestation, aucune donnée (ND) signifie qu'aucune donnée n’est disponible, et sans objet (NA) signifie que le service n’est pas offert au moyen de ce mode de prestation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field must be either a number, "NA", or "ND"<br>This value must not be negative. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ doit contenir soit un chiffre, soit « NA », soit « ND ».<br>Cette valeur ne doit pas être négative. |

### 1-33 Nombre de visites sur le site Web

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Number of Website Visits |
| Nom de la zone FR | Nombre de visites sur le site Web |
| ID | num_website_visits |
| Description EN | Identifies the number of visits to the service's website in a fiscal year. A value of 0 means there were no visits; ND means there is no data collected website visits; and NA means there is no associated public website.<br>Note: This field is not included in 'Total Applications'. |
| Description FR | Indique le nombre de de visites au site Web du service lors d'un exercice financier. La valeur 0 signifie qu'aucune visite au site Web n’a été enregistrée, aucune donnée (ND) signifie que le nombre de visites n’est pas mesuré, et sans objet (NA) signifie qu’il n’y a aucune site web à visiter.<br>Remarque : Ce champ n'est pas inclus dans « Nombre total de demandes ». |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field must be either a number, "NA", or "ND"<br>This value must not be negative. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ doit contenir soit un chiffre, soit « NA », soit « ND ».<br>Cette valeur ne doit pas être négative. |
| Exemple de valeur | 5446484 |

### 1-34 Nombre de demandes soumises en ligne

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Number of Applications Submitted Online |
| Nom de la zone FR | Nombre de demandes soumises en ligne |
| ID | num_applications_online |
| Description EN | Identifies the number of applications submitted in a fiscal year for the online channel. A value of 0 means no applications were received for this channel; ND means there is no data collected for this channel; and NA means no applications can be submitted through this channel. Examples include applications received via a website/online portal, via web forms (e.g., MyPayEnquiry) and digitally administered audits and evaluations. |
| Description FR | Indique le nombre de demandes de prestation de service reçues en ligne au cours d'un exercice. La valeur 0 signifie qu'aucune demande n'a été reçue via ce mode de prestation, aucune donnée (ND) signifie qu'aucune donnée n’est disponible, et sans objet (NA) signifie que le service n’est pas offert au moyen de ce mode de prestation. Il s'agit par exemple des demandes reçues sur un site Web ou un portail en ligne, sur des formulaires Web (p. ex., Ma demande de paye) et des vérifications et évaluations administrés numériquement. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field must be either a number, "NA", or "ND"<br>This value must not be negative. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ doit contenir soit un chiffre, soit « NA », soit « ND ».<br>Cette valeur ne doit pas être négative. |
| Exemple de valeur | 276390 |

### 1-35 Nombre de demandes soumises en personne

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Number of Applications Submitted In-Person |
| Nom de la zone FR | Nombre de demandes soumises en personne |
| ID | num_applications_in_person |
| Description EN | Identifies number of applications received in-person in a fiscal year for the service. A value of 0 means no applications were received for this channel; ND means there is no data collected for this channel; and NA means no applications can be submitted through this channel. Examples include in-person applications, volume of inspections, audits, evaluations, etc. |
| Description FR | Indique le nombre de demandes de prestation de service reçues en personne au cours d'un exercice. La valeur 0 signifie qu'aucune demande n'a été reçue via ce mode de prestation, aucune donnée (ND) signifie qu'aucune donnée n’est disponible, et sans objet (NA) signifie que le service n’est pas offert au moyen de ce mode de prestation. Il s’agit par exemple des demandes en personne, du volume d'inspections, d'audits, d'évaluations, etc. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field must be either a number, "NA", or "ND"<br>This value must not be negative. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ doit contenir soit un chiffre, soit « NA », soit « ND ».<br>Cette valeur ne doit pas être négative. |

### 1-36 Nombre de demandes soumises par la poste

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Number of Applications Submitted via Postal Mail |
| Nom de la zone FR | Nombre de demandes soumises par la poste |
| ID | num_applications_by_mail |
| Description EN | Identifies the number of applications received through postal mail in a fiscal year. A value of 0 means no applications were received for this channel; ND means there is no data collected for this channel; and NA means no applications can be submitted through this channel. |
| Description FR | Indique le nombre de demandes de prestation de service reçues par la poste au cours d'un exercice. La valeur 0 signifie qu'aucune demande n'a été reçue via ce mode de prestation, aucune donnée (ND) signifie qu'aucune donnée n’est disponible, et sans objet (NA) signifie que le service n’est pas offert au moyen de ce mode de prestation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field must be either a number, "NA", or "ND"<br>This value must not be negative. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ doit contenir soit un chiffre, soit « NA », soit « ND ».<br>Cette valeur ne doit pas être négative. |
| Exemple de valeur | 792026 |

### 1-37 Nombre de demandes soumises par courriel

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Number of Applications Submitted by Email |
| Nom de la zone FR | Nombre de demandes soumises par courriel |
| ID | num_applications_by_email |
| Description EN | Identifies the number of applications received through email in a fiscal year for the service. A value of 0 means no applications were received for this channel; ND means there is no data collected for this channel; and NA means no applications can be submitted through this channel.<br>Examples include applications received by email and audits, reviews and evaluations by email. |
| Description FR | Indique le nombre de demandes de prestation de service reçues par courriel au cours d'un exercice. La valeur 0 signifie qu'aucune demande n'a été reçue via ce mode de prestation, aucune donnée (ND) signifie qu'aucune donnée n’est disponible, et sans objet (NA) signifie que le service n’est pas offert au moyen de ce mode de prestation.<br>Il s'agit par exemple des demandes reçues par courriel et des audits, examens et évaluations par courriel. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field must be either a number, "NA", or "ND"<br>This value must not be negative. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ doit contenir soit un chiffre, soit « NA », soit « ND ».<br>Cette valeur ne doit pas être négative. |

### 1-38 Nombre de demandes soumises par fax

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Number of Applications Submitted by Fax |
| Nom de la zone FR | Nombre de demandes soumises par fax |
| ID | num_applications_by_fax |
| Description EN | Identifies the number of applications received through fax in a fiscal year for the service. A value of 0 means no applications were received for this channel; ND means there is no data collected for this channel; and NA means no applications can be submitted through this channel. |
| Description FR | Indique le nombre de demandes de prestation de service reçues par télécopieur au cours d'un exercice. La valeur 0 signifie qu'aucune demande n'a été reçue via ce mode de prestation, aucune donnée (ND) signifie qu'aucune donnée n’est disponible, et sans objet (NA) signifie que le service n’est pas offert au moyen de ce mode de prestation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field must be either a number, "NA", or "ND"<br>This value must not be negative. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ doit contenir soit un chiffre, soit « NA », soit « ND ».<br>Cette valeur ne doit pas être négative. |

### 1-39 Nombre de demandes soumises par les autre modes de prestations

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Number of Applications Submitted via other channels |
| Nom de la zone FR | Nombre de demandes soumises par les autre modes de prestations |
| ID | num_applications_by_other |
| Description EN | Identifies the number of applications received through other channels not listed in a fiscal year for the service. A value of 0 means no applications were received for this channel; ND means there is no data collected for this channel; and NA means no applications can be submitted through this channel.<br>If service volumes are not tracked by channel, please include service volumes in this field. As well, please include in this field volumes for funding allocations without applications or other services that do not require applications (e.g. medical screening at intake, investigations, hearings, advice) or which do not disaggregate service demand by delivery channel.<br>Note: Volumes reported in each channel should be mutually exclusive. Do not report the same application or interaction in more than one channel. |
| Description FR | Indique le nombre de demandes de prestation de service reçues par des modes de prestations qui ne sont pas énumérés dans ce gabarit au cours d'un exercice. La valeur 0 signifie qu'aucune demande n'a été reçue via ce mode de prestation, aucune donnée (ND) signifie qu'aucune donnée n’est disponible, et sans objet (NA) signifie que le service n’est pas offert au moyen de ce mode de prestation.<br>Si les volumes de service ne sont pas suivis par canal, veuillez inclure les volumes de service dans ce champ. De même, veuillez inclure dans ce champ les volumes d'allocations de fonds sans demandes ou d'autres services qui ne nécessitent pas de demandes (p. ex., examen médical à l'admission, enquêtes, audiences, conseils) ou qui ne ventilent pas la demande de service par canal de prestation.<br>Remarque : les volumes déclarés dans chaque canal doivent s'exclure mutuellement. Ne déclarez pas la même demande ou interaction dans plus d'un canal. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field must be either a number, "NA", or "ND"<br>This value must not be negative. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ doit contenir soit un chiffre, soit « NA », soit « ND ».<br>Cette valeur ne doit pas être négative. |
| Exemple de valeur | 2218002 |

### 1-40 Nombre total de demandes soumises

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Total Number of Applications |
| Nom de la zone FR | Nombre total de demandes soumises |
| ID | num_applications_total |
| Description EN | Identifies the total number of applications submitted in a fiscal year for all application channels. |
| Description FR | Indique le nombre total de demandes reçues au cours d'un exercice pour tous les modes de prestation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Integer |
| Validation EN |   |
| Validation FR |   |

### 1-41 Remarques spéciales (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Special Remarks (English) |
| Nom de la zone FR | Remarques spéciales (anglais) |
| ID | special_remarks_en |
| Description EN | Provides additional space for comments related to volumetrics information. Please refer to associated Field ID, where applicable. For comments related to other fields, departments can create and publish an explanatory note on their website with a link to the GC Service Inventory dataset. This field is mandatory if there is an amount reported under “Number of applications submitted via other channels” |
| Description FR | Fournit de l'espace supplémentaire pour les commentaires relatifs aux renseignements sur les volumes. Veuillez vous reporter au code d'identification du champ, s'il y a lieu. Pour les commentaires relatifs à d'autres champs, les ministères peuvent publier une note explicative sur leur site Web suivi d'un lien vers l'ensemble de données du Répertoire des services du GC. Ce champ est requis s’il y a un montant rapporté sous le champ « Nombre de demandes soumises par les autres modes de prestation » |
| Obligation EN | This field is mandatory if there is an amount reported under “Number of applications submitted via other channels” |
| Obligation FR | Ce champ est requis s’il y a un montant rapporté sous le champ « Nombre de demandes soumises par les autres modes de prestation » |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field has a maximum length of 2000 characters. |
| Validation FR | Ce champ a une longueur maximale de 2000 caractères. |
| Limite de caractères | 2000 |
| Exemple de valeur | - The volume reflected in the 'Applications by Mail' column include the volume of paper applications for the following OAS pension benefits application types: OAS basic pension; the Guaranteed Income Supplement (GIS); Allowance; Allowance Survivor; Renewal of GIS/Allowance/Allowance Survivor; Options for GIS/Allowance/Allowance Survivor; and foreign benefits.<br>- The volume reflected in the 'Number of Automatic Enrolments' column represents the volume of Automatic Enrolment into the OAS basic pension and the GIS.<br>- The volume reflected in the 'Applications through Other Channels' column represents the volume of the Automatic Renewal of income-tested benefits through the CRA for the GIS.<br>- Applications to OAS pension benefits do not constitute the largest volume of work done by the OAS program. In addition to applications, there were also another 3,143,898 OAS and foreign benefit account revisions in 2022-2023.<br>- OAS and CPP telephone enquiries are managed through the same Pensions Toll-free service, with significant overlap between the two programs on many calls. The metrics reported for CPP and OAS,  such as the volume of calls, are therefore identical and are non-cumulative (i.e. they are not to be added together)." |

### 1-42 Remarques spéciales (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Special Remarks (French) |
| Nom de la zone FR | Remarques spéciales (français) |
| ID | special_remarks_fr |
| Description EN | Provides additional space for comments related to volumetrics information. Please refer to associated Field ID, where applicable. For comments related to other fields, departments can create and publish an explanatory note on their website with a link to the GC Service Inventory dataset. This field is mandatory if there is an amount reported under “Number of applications submitted via other channels” |
| Description FR | Fournit de l'espace supplémentaire pour les commentaires relatifs aux renseignements sur les volumes. Veuillez vous reporter au code d'identification du champ, s'il y a lieu. Pour les commentaires relatifs à d'autres champs, les ministères peuvent publier une note explicative sur leur site Web suivi d'un lien vers l'ensemble de données du Répertoire des services du GC. Ce champ est requis s’il y a un montant rapporté sous le champ « Nombre de demandes soumises par les autres modes de prestation » |
| Obligation EN | This field is mandatory if there is an amount reported under “Number of applications submitted via other channels” |
| Obligation FR | Ce champ est requis s’il y a un montant rapporté sous le champ « Nombre de demandes soumises par les autres modes de prestation » |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field has a maximum length of 2000 characters. |
| Validation FR | Ce champ a une longueur maximale de 2000 caractères. |
| Limite de caractères | 2000 |
| Exemple de valeur | - Le volume indiqué dans la colonne « Demandes par la poste » comprend le volume de demandes papier pour les types de demandes de prestations de pension de la SV suivants : pension de base de la SV ; le Supplément de revenu garanti (SRG); Allocation ; Allocation de survivant ; Renouvellement du SRG/Allocation/ Allocation de survivant ; options pour le SRG/l'allocation/l'allocation de survivant ; et les prestations étrangères.<br>- Le volume indiqué dans la colonne ""Nombre d'inscriptions automatiques"" représente le volume des inscriptions automatiques à la pension de base de la SV et au SRG.<br>- Le volume reflété dans la colonne « Demandes par d'autres canaux » représente le volume d'adhésion automatique à la pension de base de la SV et du SRG, ainsi que le renouvellement automatique des prestations fondées sur le revenu par l'intermédiaire de l'ARC pour le SRG.<br>- Les demandes de prestations de pension de la SV ne constituent pas le plus gros volume de travail effectué par le programme de la SV. En plus des demandes, il y a eu également 3 143 898 autres révisions des comptes de SV et de prestations étrangères en 2022-2023<br>- Les demandes de renseignements téléphoniques sur la SV et le RPC sont gérées par le même service téléphonique sans frais des pensions, avec un chevauchement important entre les deux programmes pour de nombreux appels. Les mesures rapportées pour le RPC et la SV, comme le volume d'appels, sont donc identiques et non cumulatives (c'est-à-dire qu'elles ne doivent pas être additionnées). " |

### 1-43 URL du service (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | URL to Service (English) |
| Nom de la zone FR | URL du service (anglais) |
| ID | service_uri_en |
| Description EN | Identifies the departmental webpage where the service is described and/or accessed. |
| Description FR | Indique la page Web du ministère où le service est décrit ou peut être lancé. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field has a maximum length of 1500 characters. |
| Validation FR | Ce champ a une longueur maximale de 1500 caractères. |
| Limite de caractères | 1500 |
| Exemple de valeur | https://www.canada.ca/en/services/benefits/publicpensions/cpp/old-age-security.html |

### 1-44 URL du service (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | URL to Service (French) |
| Nom de la zone FR | URL du service (français) |
| ID | service_uri_fr |
| Description EN | Identifies the departmental webpage where the service is described and/or accessed. |
| Description FR | Indique la page Web du ministère où le service est décrit ou peut être lancé. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field has a maximum length of 1500 characters. |
| Validation FR | Ce champ a une longueur maximale de 1500 caractères. |
| Limite de caractères | 1500 |
| Exemple de valeur | https://www.canada.ca/fr/services/prestations/pensionspubliques/rpc/securite-vieillesse.html |

<div id="normes-relatives-aux-services-et-rsultats-de-rendement-pour-2024"></div>

## Normes relatives aux services et résultats de rendement (pour 2024)

### 2-1 Exercice financier

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Fiscal Year |
| Nom de la zone FR | Exercice financier |
| ID | fiscal_yr |
| Description EN | Identifies the fiscal year (April 1 to March 31) during which service activities took place. For example, records for fiscal year 2023-2024 should include applications received from April 1, 2023, to March 31, 2024. |
| Description FR | Indique l'exercice financier (1 avril au 31 mars) durant lequel les activités du service ont eu lieu. Par exemple, les données pour l’exercice financier 2023-2024 devraient inclure les demandes de service qui ont été reçues entre le 1er avril 2023 et le 31 mars 2024. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Exemple de valeur | 2022-2023 |

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

### 2-2 Numéro d'identification du service

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Service ID Number |
| Nom de la zone FR | Numéro d'identification du service |
| ID | service_id |
| Description EN | The unique number assigned to a service in the inventory to make it easier to refer to specific services. |
| Description FR | Le numéro unique attribué à un service dans le répertoire afin de faciliter le référencement à des services précis. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field cannot contain commas. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ ne peut pas contenir de virgules. |
| Exemple de valeur | 1001 |

### 2-3 Nom du service (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Service Name (English) |
| Nom de la zone FR | Nom du service (anglais) |
| ID | service_name_en |
| Description EN | Identifies the official name of the service. |
| Description FR | Indique le nom officiel du service. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field has a maximum length of 350 characters. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ a une longueur maximale de 350 caractères. |
| Limite de caractères | 350 |
| Exemple de valeur | Old Age Security (OAS) Benefits |

### 2-4 Nom du service (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Service Name (French) |
| Nom de la zone FR | Nom du service (français) |
| ID | service_name_fr |
| Description EN | Identifies the official name of the service. |
| Description FR | Indique le nom officiel du service. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field has a maximum length of 350 characters. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ a une longueur maximale de 350 caractères. |
| Limite de caractères | 350 |
| Exemple de valeur | Prestations de la Sécurité de la vieillesse |

### 2-5 Numéro d'identification de la norme relative aux services

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Service Standard ID |
| Nom de la zone FR | Numéro d'identification de la norme relative aux services |
| ID | service_standard_id |
| Description EN | Identifies the unique number assigned to each service standard for that service. Makes it easier for reference purposes as one service may have multiple standards. |
| Description FR | Indique le numéro unique attribué à chaque norme de service pour ce service. Facilite le référencement, car un service peut avoir de multiples normes. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field cannot contain commas. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ ne peut pas contenir de virgules. |
| Exemple de valeur | 925 |

### 2-6 Norme relative aux services (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Service Standard (English) |
| Nom de la zone FR | Norme relative aux services (anglais) |
| ID | service_standard_en |
| Description EN | Identifies the service standard related to a particular service. See Guideline on Service and Digital for format to be used when defining service standards. |
| Description FR | Indique la norme de service ayant trait à un service en particulier. Voir la Ligne directrice sur les services et le numérique afin de connaître le format à utiliser pour définir une norme de service. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field has a maximum length of 500 characters. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ a une longueur maximale de 500 caractères. |
| Limite de caractères | 500 |
| Exemple de valeur | OAS basic benefits are paid within the first month of entitlement |

### 2-7 Norme relative aux services (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Service Standard (French) |
| Nom de la zone FR | Norme relative aux services (français) |
| ID | service_standard_fr |
| Description EN | Identifies the service standard related to a particular service. See Guideline on Service and Digital for format to be used when defining service standards. |
| Description FR | Indique la norme de service ayant trait à un service en particulier. Voir la Ligne directrice sur les services et le numérique afin de connaître le format à utiliser pour définir les normes relatives aux services. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field has a maximum length of 500 characters. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ a une longueur maximale de 500 caractères. |
| Limite de caractères | 500 |
| Exemple de valeur | Les prestations de base de la SV sont versées au cours du premier mois d’admissibilité. |

### 2-8 Type de norme relative aux services

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Service Standard Type |
| Nom de la zone FR | Type de norme relative aux services |
| ID | type |
| Description EN | Identifies the type of service standard as defined in the Guideline on Service and Digital. Access: a commitment outlining the ease and convenience the client should experience when attempting to access a service. Accuracy: a commitment stipulating that the client will receive a service that is up to date, free of errors, and complete. Timeliness: a commitment stating how long the client should expect to wait to receive a service once the service has been accessed. |
| Description FR | Indique le type de norme de service défini selon la Ligne directrice sur les services et le numérique. Accès : un engagement qui décrit la facilité et la convivialité que devrait connaître le client lorsqu'il essaie d'accéder à un service. Exactitude : un engagement qui stipule que le client recevra un service complet et à jour qui est exempt d'erreurs. Délai : un engagement qui indique le temps d'attente que devrait connaître le client pour recevoir un service une fois qu'il y a accédé. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Exemple de valeur | TML |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| ACS | Access | Accès |
| ACY | Accuracy | Exactitude |
| OTH | Other | Autre |
| TML | Timeliness | Délai |

### 2-9 Mode de prestation de la norme de service

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Service Standard Channel |
| Nom de la zone FR | Mode de prestation de la norme de service |
| ID | channel |
| Description EN | Identifies the service channel to which the service standard applies |
| Description FR | Indique le mode de prestation de service à laquelle s'applique la norme de service |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty. |
| Validation FR | Ce champ ne doit pas être vide. |
| Exemple de valeur | OTH |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| EML | Email | Courriel |
| FAX | Fax | Télécopieur |
| ONL | Online | En ligne |
| OTH | Other channel not listed | Autre option qui n’est pas sur la liste |
| PERSON | In-Person | En personne |
| POST | Postal Mail | Courrier postal |
| TEL | Telephone | Téléphone |

### 2-10 Commentaires sur le mode de prestation de la norme de service (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Comments on the service standard channel (English) |
| Nom de la zone FR | Commentaires sur le mode de prestation de la norme de service (anglais) |
| ID | channel_comments_en |
| Description EN | Comments related to the service standard channel and provides explanation of "Other" channel selection. |
| Description FR | Commentaires en lien au mode de prestation de la norme de service et fournit une explication de la sélection des modes de prestation « Autre ». |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field has a maximum length of 1500 characters. |
| Validation FR | Ce champ a une longueur maximale de 1500 caractères. |
| Limite de caractères | 1500 |
| Exemple de valeur | Mail, Online, Person |

### 2-11 Commentaires sur le mode de prestation de la norme de service (Francais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Comments on the service standard channel (French) |
| Nom de la zone FR | Commentaires sur le mode de prestation de la norme de service (Francais) |
| ID | channel_comments_fr |
| Description EN | Comments related to the service standard channel and provides explanation of "Other" channel selection. |
| Description FR | Commentaires en lien au mode de prestation de la norme de service et fournit une explication de la sélection des modes de prestation « Autre ». |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field has a maximum length of 1500 characters. |
| Validation FR | Ce champ a une longueur maximale de 1500 caractères. |
| Limite de caractères | 1500 |
| Exemple de valeur | Courrier, en ligne, personne |

### 2-12 Cible de la norme relative aux services

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Service Standard Target |
| Nom de la zone FR | Cible de la norme relative aux services |
| ID | target |
| Description EN | The frequency that the organization expects to meet service standard (reported as a percentage). |
| Description FR | Fréquence à laquelle l'organisation s'attend à respecter la norme de service (exprimée en pourcentage). |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN | This field must be a single number between 0 and 1 representing a percentage. |
| Validation FR | Ce champ doit contenir un seul chiffre entre 0 et 1 représentant un pourcentage. |
| Exemple de valeur | 0.9 |

### 2-13 Volume d'activités qui respectent la norme de service

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Business Volume That Met Service Standard Target |
| Nom de la zone FR | Volume d'activités qui respectent la norme de service |
| ID | volume_meeting_target |
| Description EN | Identifies the number of final outputs issued appropriate to the service (eg. payments issued, requests completed, etc) during the fiscal year that met a particular service standard target for a service. Blank indicates no information available, while 0 indicates that no final outputs issued met service standard targets. Note, this value must be less than or equal to the Total Volume. |
| Description FR | Indique le nombre total d'opérations de service effectuées (p. ex. les paiements émis, les demandes traitées, etc.) au cours de l'exercice auxquelles s'appliquent cette norme de service. Un champ vide indique qu'aucune information n'est disponible, tandis que 0 indique qu'aucune opération n'a été effectuée. Remarque : cette valeur doit être inférieure ou égale au volumes totaux. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Integer |
| Validation EN | This value must not be negative.<br>Volume Meeting Target can not exceed Total Volume. |
| Validation FR | Cette valeur ne doit être négative.<br>Les volumes atteignant la cible ne peuvent pas dépasser le volume total. |
| Exemple de valeur | 315128 |

### 2-14 Volumes totaux

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Total Volume |
| Nom de la zone FR | Volumes totaux |
| ID | total_volume |
| Description EN | Identifies the total number of final outputs issued appropriate to the service (eg. payments issued, requests completed, etc) during the fiscal year. Blank indicates no information available, while 0 indicates no final outputs issued. |
| Description FR | Indique le nombre total d'opérations de service effectuées (p. ex. les paiements émis, les demandes traitées, etc.) au cours de l'exercice auxquelles s'appliquent cette norme de service. Un champ vide indique qu'aucune information n'est disponible, tandis que 0 indique qu'aucune opération n'a été effectuée. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Integer |
| Validation EN | This value must not be negative. |
| Validation FR | Cette valeur ne doit pas être négative. |
| Exemple de valeur | 359919 |

### 2-15 Performance

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Performance |
| Nom de la zone FR |   |
| ID | performance |
| Description EN | Identifies the result achieved for this service standard. This is the "Business Volume That Met Service Standard Target" divided by the "Total Volume". |
| Description FR | Indique le rendement de cette norme de service. Il s'agit du « Volume d'activités qui respectent la norme de service » divisé par le « Volumes totaux ». |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |

### 2-16 Commentaires sur la norme de service en général (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Comments on the service standard in general (English) |
| Nom de la zone FR | Commentaires sur la norme de service en général (anglais) |
| ID | comments_en |
| Description EN | Comments related to the service standard in general. |
| Description FR | Commentaires en lien à la norme de service en general. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field has a maximum length of 2000 characters. |
| Validation FR | Ce champ a une longueur maximale de 2000 caractères. |
| Limite de caractères | 2000 |
| Exemple de valeur | The total volumes assessed against the first month of entitlement service standard excludes 3,550 decisions involving files submitted under international agreements and interactions with foreign governments. |

### 2-17 Commentaires sur la norme de service en général (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Comments on the service standard in general (French) |
| Nom de la zone FR | Commentaires sur la norme de service en général (français) |
| ID | comments_fr |
| Description EN | Comments related to the service standard in general. |
| Description FR | Commentaires en lien à la norme de service en general. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field has a maximum length of 2000 characters. |
| Validation FR | Ce champ a une longueur maximale de 2000 caractères. |
| Limite de caractères | 2000 |
| Exemple de valeur | Les volumes totaux évalués par rapport à la norme de service du premier mois de droit excluent 3 550 décisions concernant des dossiers soumis dans le cadre d'accords internationaux et d'interactions avec des gouvernements étrangers. |

### 2-18 La cible était-elle atteinte

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Was the target met |
| Nom de la zone FR | La cible était-elle atteinte |
| ID | target_met |
| Description EN |   |
| Description FR |   |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| NA | N/A | S.O. |
| N | No | Non |
| Y | Yes | Oui |

### 2-19 URL vers les normes de service et les cibles (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | URL to Service Standards and Targets (English) |
| Nom de la zone FR | URL vers les normes de service et les cibles (anglais) |
| ID | standards_targets_uri_en |
| Description EN | Identifies the departmental webpage (Canada.ca) where the service standards and targets are published. |
| Description FR | Indique la page Web ministérielle (Canada.ca) où les normes de service et les cibles sont publiées. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field has a maximum length of 1500 characters. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ a une longueur maximale de 1500 caractères. |
| Limite de caractères | 1500 |
| Exemple de valeur | https://www.canada.ca/en/employment-social-development/corporate/transparency/service-standards-2018-2019.html#h2.25 |

### 2-20 URL vers les normes de service et les cibles (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | URL to Service Standards and Targets (French) |
| Nom de la zone FR | URL vers les normes de service et les cibles (français) |
| ID | standards_targets_uri_fr |
| Description EN | Identifies the departmental webpage (Canada.ca) where the service standards and targets are published. |
| Description FR | Indique la page Web ministérielle (Canada.ca) où les normes de service et les cibles sont publiées. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty.<br>This field has a maximum length of 1500 characters. |
| Validation FR | Ce champ ne doit pas être vide.<br>Ce champ a une longueur maximale de 1500 caractères. |
| Limite de caractères | 1500 |
| Exemple de valeur | https://www.canada.ca/fr/emploi-developpement-social/ministere/transparence/normes-service-2018-2019.html#h2.21 |

### 2-21 URL aux résultats de rendement en temps réel (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | URL to Real-Time Performance Results (English) |
| Nom de la zone FR | URL aux résultats de rendement en temps réel (anglais) |
| ID | performance_results_uri_en |
| Description EN | Identifies the departmental webpage where the real-time performance results for a service are published. |
| Description FR | Indique la page Web (en anglais) sur laquelle les résultats de rendement en temps réel d'un service sont publiés. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field has a maximum length of 1500 characters. |
| Validation FR | Ce champ a une longueur maximale de 1500 caractères. |
| Limite de caractères | 1500 |
| Exemple de valeur | Not applicable |

### 2-22 URL aux résultats de rendement en temps réel (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | URL to Real-Time Performance Results (French) |
| Nom de la zone FR | URL aux résultats de rendement en temps réel (français) |
| ID | performance_results_uri_fr |
| Description EN | Identifies the departmental webpage where the real-time performance results for a service are published. |
| Description FR | Indique la page Web (en anglais) sur laquelle les résultats de rendement en temps réel d'un service sont publiés. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field has a maximum length of 1500 characters. |
| Validation FR | Ce champ a une longueur maximale de 1500 caractères. |
| Limite de caractères | 1500 |
| Exemple de valeur | Not applicable |


---
