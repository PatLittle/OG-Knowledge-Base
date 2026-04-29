# Data Element Profile: Proactive Publication - Position Reclassification

_Source YAML: `reclassification.yaml`_

## Published resources

- [Proactive Disclosure - Position Reclassification](https://open.canada.ca/data/dataset/f132b8a6-abad-43d6-b6ad-2301e778b1b6/resource/bdaa5515-3782-4e5c-9d44-c25e032addb7)
- [Proactive Disclosure - Position Reclassification Nothing to Report](https://open.canada.ca/data/dataset/f132b8a6-abad-43d6-b6ad-2301e778b1b6/resource/1e955e4d-df35-4441-bf38-b7086192ece2)
- Recombinant schema: https://open.canada.ca/data/en/recombinant-schema/reclassification.json


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

## Proactive Publication - Position Reclassification

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

## Proactive Publication - Position Reclassification

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
