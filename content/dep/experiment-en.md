# Data Element Profile: Experimentation Inventory

_Source YAML: `experiment.yaml`_

## Published resources

- https://open.canada.ca/data/dataset/39954bc7-ff7a-4180-8b6e-b02bee35078a/resource/07151ad9-52e2-4f99-b4fd-7cd208816a64
- Recombinant schema: https://open.canada.ca/data/en/recombinant-schema/experiment.json


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

## Experimentation Inventory

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
