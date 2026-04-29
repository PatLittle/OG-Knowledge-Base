# Profil des éléments de données: Proactive Publication - Hospitality Expenses

_Source YAML: `hospitalityq.yaml`_

## Ressources publiées

- https://ouvert.canada.ca/data/fr/dataset/b9f51ef4-4605-4ef2-8231-62a2edda1b54/resource/7b301f1a-2a7a-48bd-9ea9-e0ac4a5313ed
- https://ouvert.canada.ca/data/fr/dataset/b9f51ef4-4605-4ef2-8231-62a2edda1b54/resource/36a3b6cc-4f45-4081-8dbd-2340ca487041
- Schéma recombinant: https://ouvert.canada.ca/data/fr/recombinant-schema/hospitalityq.json


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

## Proactive Publication - Hospitality Expenses

### 1-1 Numéro de référence

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Reference Number |
| Nom de la zone FR | Numéro de référence |
| ID | ref_number |
| Description EN | This field is populated by the organization. It is a unique reference number given to each line item in the spreadsheet. Having a unique identifier for each item will allow users locate a specific item in the registry should they need to modify or delete. |
| Description FR | Cette zone est remplie par chaque organisation. Un identificateur unique est attribué à chaque poste dans le tableur. Un identificateur unique pour chaque poste permettra aux utilisateurs de repérer un article en particulier s’ils doivent le modifier ou le supprimer. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | H-2019-P3-001 |

### 1-2 Groupe de divulgation

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Disclosure Group |
| Nom de la zone FR | Groupe de divulgation |
| ID | disclosure_group |
| Description EN | This field will display the group to which the individual belongs. |
| Description FR | Ce champ indique le groupe auquel appartient l’individu. |
| Obligation EN | Required if "End Date" is on or after April 1st 2025 |
| Obligation FR | Requis si la "date de fin" est le 1er avril 2025 ou après |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | Required if "End Date" is on or after April 1st 2025 |
| Validation FR | Requis si la "date de fin" est le 1er avril 2025 ou après |
| Exemple de valeur | SLE |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| MPSES | Minister/Ministerial advisor / Ministerial Staff / Parliamentary Secretary/Exempt Staff | Ministre / Conseiller ministériel / Personnel ministériel / Secrétaire parlementaire / Personnel exonéré |
| SLE | Senior officer or employees | Cadre supérieur ou employé |

### 1-3 Titre (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Title (English) |
| Nom de la zone FR | Titre (anglais) |
| ID | title_en |
| Description EN | This field will display, in English, the position title of the individual who incurred the hospitality expenses (the hospitality expenses were charged to their responsibility centre). |
| Description FR | Cette zone indique, en anglais, le titre du poste de la personne qui a engagé les dépenses d’accueil (les dépenses d’accueil ont été imputées à leur centre de responsabilité). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | Vice-Chairperson, Deputy Minister, Parliamentary Secretary, Assistant Deputy Minister, Programs Branch |

### 1-4 Titre (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Title (French) |
| Nom de la zone FR | Titre (français) |
| ID | title_fr |
| Description EN | This field will display, in French, the position title of the individual who incurred the hospitality expenses (the hospitality expenses were charged to their responsibility centre). |
| Description FR | Cette zone indique, en français, le titre du poste de la personne qui a engagé les dépenses d’accueil (les dépenses d’accueil ont été imputées à leur centre de responsabilité). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | Vice-président, sous-ministre, secrétaire parlementaire, sous-ministre adjoint, Direction générale des programmes |

### 1-5 Nom

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Name |
| Nom de la zone FR | Nom |
| ID | name |
| Description EN | This field will display the name of the individual who incurred the hospitality expenses (the hospitality expenses were charged to their responsibility centre). |
| Description FR | Ce champ affiche le nom de la personne qui a engagé les dépenses d’accueil (les dépenses d’accueil ont été imputées à leur centre de responsabilité. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | John Smith |

### 1-6 But de l’activité d’accueil (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Purpose of hospitality activity (English) |
| Nom de la zone FR | But de l’activité d’accueil (anglais) |
| ID | description_en |
| Description EN | This will cover both the forms (for example, breakfast, refreshment, lunch, reception, dinner and other forms of hospitality) and circumstances (the purpose) of the hospitality, in English. |
| Description FR | Cette zone comprend la forme d’accueil (par exemple, déjeuner, rafraîchissement, dîner, réception, souper, et autres formes d’accueil) et les circonstances (le but) de l’accueil, en anglais. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | Refreshments: information management and policies committee meeting; reception: Maltese delegation, etc |

### 1-7 But de l’activité d’accueil (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Purpose of hospitality activity (French) |
| Nom de la zone FR | But de l’activité d’accueil (français) |
| ID | description_fr |
| Description EN | This will cover both the forms (for example, breakfast, refreshment, lunch, reception, dinner and other forms of hospitality) and circumstances (the purpose) of the hospitality, in French. |
| Description FR | Cette zone comprend la forme d’accueil (par exemple, déjeuner, rafraîchissement, dîner, réception, souper, et autres formes d’accueil) et les circonstances (le but) de l’accueil, en français. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | Rafraîchissements : Réunion du Comité de gestion de l’information et des politiques, Réception : Délégation maltaise, etc |

### 1-8 Date de début

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Start Date |
| Nom de la zone FR | Date de début |
| ID | start_date |
| Description EN | The start date on which the hospitality was provided. |
| Description FR | La date du début auxquelles les activités d’accueil ont eu lieu. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Date |
| Validation EN | This field must not be empty.<br>Date can’t be in the future. |
| Validation FR | Ce champ ne doit pas être vide.<br>La date ne doit pas être dans le futur. |
| Exemple de valeur | 2019-06-25 |

### 1-9 Date de fin

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | End Date |
| Nom de la zone FR | Date de fin |
| ID | end_date |
| Description EN | The end date on which the hospitality was provided. (can be the same as start date) |
| Description FR | La date de fin auxquelles les activités d’accueil ont eu lieu. (peut être la même date du début) |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Date |
| Validation EN | This field must not be empty.<br>Date can’t be in the future. |
| Validation FR | Ce champ ne doit pas être vide.<br>La date ne doit pas être dans le futur. |
| Exemple de valeur | 2019-06-25 |

### 1-10 Municipalité où l’activité d’accueil a eu lieu (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Municipality where the hospitality activity took place (English) |
| Nom de la zone FR | Municipalité où l’activité d’accueil a eu lieu (anglais) |
| ID | location_en |
| Description EN | Must include the Municipality where hospitality was provided, in English |
| Description FR | Comprend la municipalité où les services d’accueil ont été fournis, en anglais |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | Montreal, Quebec, Canada |

### 1-11 Municipalité où l’activité d’accueil a eu lieu (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Municipality where the hospitality activity took place (French) |
| Nom de la zone FR | Municipalité où l’activité d’accueil a eu lieu (français) |
| ID | location_fr |
| Description EN | Must include the Municipality where hospitality was provided, in French. |
| Description FR | Comprend la municipalité où les services d’accueil ont été fournis, en français. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | Montréal, Québec, Canada |

### 1-12 Nom du premier établissement commercial ou fournisseur impliqué dans l’activité d’accueil (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Name of the first commercial establishment or vendor involved in the hospitality activity (English) |
| Nom de la zone FR | Nom du premier établissement commercial ou fournisseur impliqué dans l’activité d’accueil (anglais) |
| ID | vendor_en |
| Description EN | Must include the name of the first commercial establishment or vendor that provided the hospitality (for example, restaurant, hotel or other location) and/or vendor (for example, a caterer), in English. |
| Description FR | Doit inclure le nom du premier établissement commercial ou fournisseur qui a fourni l’accueil (par exemple, restaurant, hôtel ou autre lieu) et/ou du fournisseur (par exemple, un traiteur), en anglais. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | Le Centre Sheraton |

### 1-13 Nom du premier établissement commercial ou fournisseur impliqué dans l’activité d’accueil (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Name of the first commercial establishment or vendor involved in the hospitality activity (French) |
| Nom de la zone FR | Nom du premier établissement commercial ou fournisseur impliqué dans l’activité d’accueil (français) |
| ID | vendor_fr |
| Description EN | Must include the name of the first commercial establishment or vendor that provided the hospitality (for example, restaurant, hotel or other location) and/or vendor (for example, a caterer), in French. |
| Description FR | Doit inclure le nom du premier établissement commercial ou fournisseur qui a fourni l’accueil (par exemple, restaurant, hôtel ou autre lieu) et/ou du fournisseur (par exemple, un traiteur), en français. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | Le Centre Sheraton |

### 1-14 Nom du deuxième établissement commercial ou fournisseur impliqué dans l’activité d’accueil (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Name of the second commercial establishment or vendor involved in the hospitality activity (English) |
| Nom de la zone FR | Nom du deuxième établissement commercial ou fournisseur impliqué dans l’activité d’accueil (anglais) |
| ID | vendor_2_en |
| Description EN | Must include the name of the second commercial establishment or vendor that provided the hospitality (for example, restaurant, hotel or other location) and/or vendor (for example, a caterer), in English. |
| Description FR | Doit inclure le nom du deuxième établissement commercial ou fournisseur qui a fourni l’accueil (par exemple, restaurant, hôtel ou autre lieu) et/ou du fournisseur (par exemple, un traiteur), en anglais. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Tim Hortons |

### 1-15 Nom du deuxième établissement commercial ou fournisseur impliqué dans l’activité d’accueil (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Name of the second commercial establishment or vendor involved in the hospitality activity (French) |
| Nom de la zone FR | Nom du deuxième établissement commercial ou fournisseur impliqué dans l’activité d’accueil (français) |
| ID | vendor_2_fr |
| Description EN | Must include the name of the second commercial establishment or vendor that provided the hospitality (for example, restaurant, hotel or other location) and/or vendor (for example, a caterer), in French. |
| Description FR | Doit inclure le nom du deuxième établissement commercial ou fournisseur qui a fourni l’accueil (par exemple, restaurant, hôtel ou autre lieu) et/ou du fournisseur (par exemple, un traiteur), en français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Tim Hortons |

### 1-16 Nom de tout autre établissement commercial ou fournisseur impliqué dans l’activité d’accueil (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Name of any other commercial establishments or vendors involved in the hospitality activity (English) |
| Nom de la zone FR | Nom de tout autre établissement commercial ou fournisseur impliqué dans l’activité d’accueil (anglais) |
| ID | vendor_other_en |
| Description EN | Must include the names of any other commercial establishments or vendors that provided the hospitality (for example, restaurant, hotel or other location) and/or vendor (for example, a caterer), in English. Note, use the format {Vendor Name};{Vendor 2 Name} (e.g. Les Impertinentes;Les Street Monkeys) |
| Description FR | Doit inclure le nom de tout autre établissement commercial ou fournisseur ayant fourni l’accueil (par exemple, restaurant, hôtel ou autre lieu) et/ou du fournisseur (par exemple, un traiteur), en anglais. Remarque : Utilisez le format <nom du fournisseur>;<nom du fournisseur 2> (par exemple : Les Impertinentes;Les Street Monkeys) |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | Must be in the format of <Vendor Name>;<Vendor 2 Name> |
| Validation FR | Doit être au format <nom du fournisseur>;<nom du fournisseur 2> |
| Exemple de valeur | Les Impertinentes;Les Street Monkeys |

### 1-17 Nom de tout autre établissement commercial ou fournisseur impliqué dans l’activité d’accueil (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Name of any other commercial establishments or vendors involved in the hospitality activity (French) |
| Nom de la zone FR | Nom de tout autre établissement commercial ou fournisseur impliqué dans l’activité d’accueil (français) |
| ID | vendor_other_fr |
| Description EN | Must include the name of any other commercial establishments or vendors that provided the hospitality (for example, restaurant, hotel or other location) and/or vendor (for example, a caterer), in French. Note, use the format <Vendor Name>;<Vendor 2 Name> (e.g. Les Impertinentes;Les Street Monkeys) |
| Description FR | Doit inclure le nom de tout autre établissement commercial ou fournisseur ayant fourni l’accueil (par exemple, restaurant, hôtel ou autre lieu) et/ou du fournisseur (par exemple, un traiteur), en français. Remarque : Utilisez le format {nom du fournisseur};{nom du fournisseur 2} (par exemple : Les Impertinentes;Les Street Monkeys)' |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | Must be in the format of <Vendor Name>;<Vendor 2 Name> |
| Validation FR | Doit être au format <nom du fournisseur>;<nom du fournisseur 2> |
| Exemple de valeur | Les Impertinentes;Les Street Monkeys |

### 1-18 Participants (Nombre de représentants du gouvernement du Canada)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Attendees (Government of Canada Officials) |
| Nom de la zone FR | Participants (Nombre de représentants du gouvernement du Canada) |
| ID | employee_attendees |
| Description EN | The total number of attendees (Government of Canada Officials). For any clarification regarding Government of Canada Officials, please refer to Table 2 of the Guide to the Proactive Publication of Travel and Hospitality Expenses- Canada.ca (https://www.tbs-sct.canada.ca/pol/doc-eng.aspx?id=32660). |
| Description FR | Nombre total de participants (représentants du gouvernement du Canada). Pour toute clarification concernant les représentants du gouvernement du Canada, veuillez référer au table 2 du Guide de publication proactive des frais de voyage et d’accueil- Canada.ca (https://www.tbs-sct.canada.ca/pol/doc-fra.aspx?id=32660). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Integer |
| Validation EN | This field must not be empty.<br>Zero is an invalid entry. |
| Validation FR | Ce champ ne doit pas être vide.<br>Zéro est une entrée invalide. |
| Exemple de valeur | 150 |

### 1-19 Participants (Nombre d’invités)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Attendees (Guests) |
| Nom de la zone FR | Participants (Nombre d’invités) |
| ID | guest_attendees |
| Description EN | The total number of attendees (Guests) |
| Description FR | Nombre total de participants (invités) |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Integer |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | 4 |

### 1-20 Total des coûts

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Total cost |
| Nom de la zone FR | Total des coûts |
| ID | total |
| Description EN | Total Amount of the expenses for the hospitality activity |
| Description FR | Montant total des dépenses pour l’activité d’accueil |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | 7710.55 |

### 1-21 Commentaires additionnels (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Additional comments (English) |
| Nom de la zone FR | Commentaires additionnels (anglais) |
| ID | additional_comments_en |
| Description EN | This field may be populated with additional explanatory comments, in English. |
| Description FR | Ce champ peut indiquer des commentaires explicatifs additionnels, en anglais. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Provide additional explanatory comments as required. |

### 1-22 Commentaires additionnels (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Additional comments (French) |
| Nom de la zone FR | Commentaires additionnels (français) |
| ID | additional_comments_fr |
| Description EN | This field may be populated with additional explanatory comments, in French. |
| Description FR | Ce champ peut indiquer des commentaires explicatifs additionnels, en français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Fournir des commentaires explicatifs additionnels au besoin. |

## Proactive Publication - Hospitality Expenses

### 2-1 Année

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Year |
| Nom de la zone FR | Année |
| ID | year |
| Description EN | This tab / field in the template is only populated if there are no hospitality expenses for the reporting period. This field should be populated with the year of the reporting period. |
| Description FR | Cet onglet/champ du modèle n’est rempli que s'il n'y a pas de frais d'accueil pour la période d’établissement de rapports. Ce champ doit être rempli avec l’année de la période d’établissement de rapports. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Integer |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | 2019 |

### 2-2 mois

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Month |
| Nom de la zone FR | mois |
| ID | month |
| Description EN | This tab / field in the template is only populated if there are no hospitality expenses for the reporting period. This field should be populated with the month of the reporting period. |
| Description FR | Cet onglet/champ du modèle n’est rempli que s'il n'y a pas de frais d'accueil pour la période d’établissement de rapports. Ce champ doit être rempli avec le mois de la période d’établissement de rapports. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | 01 |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
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
