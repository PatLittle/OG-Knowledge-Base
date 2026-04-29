# Profil des éléments de données: Proactive Publication - Travel Expenses

_Source YAML: `travelq.yaml`_

## Ressources publiées

- https://ouvert.canada.ca/data/fr/dataset/009f9a49-c2d9-4d29-a6d4-1a228da335ce/resource/8282db2a-878f-475c-af10-ad56aa8fa72c
- https://ouvert.canada.ca/data/fr/dataset/009f9a49-c2d9-4d29-a6d4-1a228da335ce/resource/d3f883ce-4133-48da-bc76-c6b063d257a2
- Schéma recombinant: https://ouvert.canada.ca/data/fr/recombinant-schema/travelq.json


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

## Proactive Publication - Travel Expenses

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
| Exemple de valeur | T-2019-P3-0001 |

### 1-2 Groupe de divulgation

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Disclosure Group |
| Nom de la zone FR | Groupe de divulgation |
| ID | disclosure_group |
| Description EN | This field will display the group to which the individual belongs. |
| Description FR | Ce champ indique le groupe auquel appartient l’individu. |
| Obligation EN | Required if "Travel End Date" is on or after April 1st 2025 |
| Obligation FR | Requis si la "date de fin du voyage" est le 1er avril 2025 ou après |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | Required if "Travel End Date" is on or after April 1st 2025 |
| Validation FR | Requis si la "date de fin du voyage" est le 1er avril 2025 ou après |
| Exemple de valeur | SLE |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| MPSES | Minister/Ministerial adviser/Ministerial staff/Parliamentary Secretary/Exempt Staff | Ministre/Conseiller ministériel/Personnel ministériel/Secrétaire parlementaires/Personnel exonéré |
| SLE | Senior officer or employee | Cadre supérieur ou employé |

### 1-3 Titre (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Title (English) |
| Nom de la zone FR | Titre (anglais) |
| ID | title_en |
| Description EN | This field will display the position title of the person who travelled, in English |
| Description FR | Cette zone indique le titre du poste de la personne qui a voyagé, en anglais. |
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
| Description EN | This field will display the position title of the person who travelled, in French. |
| Description FR | Cette zone indique le titre du poste de la personne qui a voyagé, en français. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | Sous-Ministre, Sous- Ministre Adjoint, Chef de la Direction |

### 1-5 Nom

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Name |
| Nom de la zone FR | Nom |
| ID | name |
| Description EN | This field will display the name of the  person who travelled |
| Description FR | Ce champ affiche le nom de la personne qui a voyagé |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | John Smith |

### 1-6 But du déplacement (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Purpose of Travel (English) |
| Nom de la zone FR | But du déplacement (anglais) |
| ID | purpose_en |
| Description EN | A short description, in English, of the reason for the trip. The description should be succinct (one line if possible) and provide users with a general sense of the trip's purpose. Use of acronyms should be avoided. |
| Description FR | Brève description de la raison du voyage, en anglais. La description doit être brève (une ligne dans la mesure du possible) et donner une indication générale aux utilisateurs du but du voyage. Il faut éviter d’utiliser des acronymes. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | Attend North American Free Trade Agreement trade mission, give presentation at the Ontario Chamber of Commerce, etc |

### 1-7 But du déplacement (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Purpose of Travel (French) |
| Nom de la zone FR | But du déplacement (français) |
| ID | purpose_fr |
| Description EN | A short description, in French, of the reason for the trip. The description should be succinct (one line if possible) and provide users with a general sense of the trip's purpose. Use of acronyms should be avoided. |
| Description FR | Brève description de la raison du voyage, en français. La description doit être brève (une ligne dans la mesure du possible) et donner une indication générale aux utilisateurs du but du voyage. Il faut éviter d’utiliser des acronymes. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | Participer à une mission commerciale dans le cadre de l’Accord de libre-échange nord-américain, donner une présentation à la chambre de commerce de l’Ontario, etc |

### 1-8 Date de début du voyage

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Travel Start Date |
| Nom de la zone FR | Date de début du voyage |
| ID | start_date |
| Description EN | To cover the date the travel started |
| Description FR | Date de début du voyage |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Date |
| Validation EN | This field must not be empty.<br>Date can’t be in the future. |
| Validation FR | Ce champ ne doit pas être vide.<br>La date ne doit pas être dans le futur. |
| Exemple de valeur | 2019-06-22 |

### 1-9 Date de fin du voyage

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Travel End Date |
| Nom de la zone FR | Date de fin du voyage |
| ID | end_date |
| Description EN | To cover the date the travel ended (can be the same as travel start date) |
| Description FR | Date de fin du voyage (peut être la même date que la date du début du voyage) |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Date |
| Validation EN | This field must not be empty.<br>Date can’t be in the future. |
| Validation FR | Ce champ ne doit pas être vide.<br>La date ne doit pas être dans le futur. |
| Exemple de valeur | 2019-06-23 |

### 1-10 Endroits visités (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Place visited (English) |
| Nom de la zone FR | Endroits visités (anglais) |
| ID | destination_en |
| Description EN | To include name of the first place visited during the trip in question, in English. |
| Description FR | Inclure le nom du premier lieu visité lors du voyage en question, en anglais. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty<br>Must be in the format of <City Name>, <State/Province Name>, <Country Name> for Canada and US, or <City Name>, <Country Name> for international |
| Validation FR | Ce champ ne doit pas être vide<br>Doit être au format <Nom de la ville>, <Nom de l'État/de la province>, <Nom du pays> pour le Canada et les États-Unis, ou <Nom de la ville>, <Nom du pays> pour l'international (p. ex. Ottawa, Ontario, Canada ou Londres, Angleterre) |
| Exemple de valeur | Montreal, Quebec, Canada |

### 1-11 Endroits visités (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Place visited (French) |
| Nom de la zone FR | Endroits visités (français) |
| ID | destination_fr |
| Description EN | To include name of the first place visited during the trip in question, in French. |
| Description FR | Inclure le nom du premier lieu visité lors du voyage en question, en français. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty<br>Must be in the format of <City Name>, <State/Province Name>, <Country Name> for Canada and US, or <City Name>, <Country Name> for international |
| Validation FR | Ce champ ne doit pas être vide<br>Doit être au format <Nom de la ville>, <Nom de l'État/de la province>, <Nom du pays> pour le Canada et les États-Unis, ou <Nom de la ville>, <Nom du pays> pour l'international |
| Exemple de valeur | Montréal, Québec, Canada |

### 1-12 Deuxième lieu visité (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Second place visited (English) |
| Nom de la zone FR | Deuxième lieu visité (anglais) |
| ID | destination_2_en |
| Description EN | To include name of second place visited during the trip in question, in English. |
| Description FR | Inclure le nom du deuxième lieu visité au cours du voyage en question, en anglais. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | Must be in the format of <City Name>, <State/Province Name>, <Country Name> for Canada and US, or <City Name>, <Country Name> for international |
| Validation FR | Doit être au format <Nom de la ville>, <Nom de l'État/de la province>, <Nom du pays> pour le Canada et les États-Unis, ou <Nom de la ville>, <Nom du pays> pour l'international |
| Exemple de valeur | Toronto, Ontario, Canada |

### 1-13 Deuxième lieu visité (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Second place visited (French) |
| Nom de la zone FR | Deuxième lieu visité (français) |
| ID | destination_2_fr |
| Description EN | To include name of second place visited during the trip in question, in French. |
| Description FR | Inclure le nom du deuxième lieu visité au cours du voyage en question, en français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | Must be in the format of <City Name>, <State/Province Name>, <Country Name> for Canada and US, or <City Name>, <Country Name> for international |
| Validation FR | Doit être au format <Nom de la ville>, <Nom de l'État/de la province>, <Nom du pays> pour le Canada et les États-Unis, ou <Nom de la ville>, <Nom du pays> pour l'international |
| Exemple de valeur | Toronto, Ontario, Canada |

### 1-14 Autres lieux visités (anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Other places visited (English) |
| Nom de la zone FR | Autres lieux visités (anglais) |
| ID | destination_other_en |
| Description EN | To include names of all other places visited during the trip in question, in English. |
| Description FR | Inclure les noms de tous les autres lieux visités au cours du voyage en question, en anglais. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | Must be in the format of <City Name>, <State/Province Name>, <Country Name>;<City 2 Name>, <Country 2 Name> |
| Validation FR | Doit être au format <Nom de la ville>, <Nom de l'État/de la province>, <Nom du pays>;<Nom de la ville 2>, <Nom du pays 2> |
| Exemple de valeur | San Francisco, California, USA;London, England |

### 1-15 Autres lieux visités (français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Other places visited (French) |
| Nom de la zone FR | Autres lieux visités (français) |
| ID | destination_other_fr |
| Description EN | To include names of all other places visited during the trip in question, in French. |
| Description FR | Inclure les noms de tous les autres lieux visités au cours du voyage en question, en français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | Must be in the format of <City Name>, <State/Province Name>, <Country Name>;<City 2 Name>, <Country 2 Name> |
| Validation FR | Doit être au format <Nom de la ville>, <Nom de l'État/de la province>, <Nom du pays>;<Nom de la ville 2>, <Nom du pays 2> |
| Exemple de valeur | San Francisco, California, USA;London, England |

### 1-16 Tarif aérien

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Airfare |
| Nom de la zone FR | Tarif aérien |
| ID | airfare |
| Description EN | Total cost of any airline tickets, if applicable. |
| Description FR | Coût total des billets d’avion, s’il y a lieu. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 1000.00 |

### 1-17 Autres moyens de transport

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Other transportation |
| Nom de la zone FR | Autres moyens de transport |
| ID | other_transport |
| Description EN | Total cost of any other forms of transportation (for example, train, bus, vehicle rental, private vehicle, taxis, etc), if applicable. |
| Description FR | Coût total de toutes autres forme de transport (par exemple, train, autobus, véhicule loué, véhicule particulier, taxis), s’il y a lieu. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 50.00 |

### 1-18 Hébergement

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Lodging |
| Nom de la zone FR | Hébergement |
| ID | lodging |
| Description EN | Total cost of accommodation |
| Description FR | Coût total de l’hébergement |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | 300.00 |

### 1-19 Frais de repas et frais accessoires

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Meals and incidentals |
| Nom de la zone FR | Frais de repas et frais accessoires |
| ID | meals |
| Description EN | Total cost of meals and incidentals expenses. |
| Description FR | Total des frais de repas et accessoires |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | 150.00 |

### 1-20 Autres dépenses

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Other expenses |
| Nom de la zone FR | Autres dépenses |
| ID | other_expenses |
| Description EN | Total cost of all other items that are not covered by the above fields (for example. special passport, visas, associated photos, calls to the office or home, dependant care where applicable, etc.). |
| Description FR | Coût total de tous les autres éléments qui ne sont pas couverts par les champs ci-dessus (par exemple, passeport spécial, visas, photos connexes, appels au bureau ou à la maison, soin aux personnes à charge, le cas échéant) |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 0.00 |

### 1-21 Montant total

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Total Amount |
| Nom de la zone FR | Montant total |
| ID | total |
| Description EN | The total of the amount listed above. |
| Description FR | Le total des montants énumérés ci-dessus |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | 1500.00 |

### 1-22 Additional Comments English

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Additional Comments English |
| Nom de la zone FR |   |
| ID | additional_comments_en |
| Description EN | This field may be populated with additional comments in English. |
| Description FR | Ce champ peut indiquer des commentaires supplémentaires en anglais. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Provide additional explanatory comments as required. |

### 1-23 Additional Comments French

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Additional Comments French |
| Nom de la zone FR |   |
| ID | additional_comments_fr |
| Description EN | This field may be populated with additional comments in French. |
| Description FR | Ce champ peut indiquer des commentaires supplémentaires en français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Fournir des commentaires explicatifs supplémentaires au besoin. |

## Proactive Publication - Travel Expenses

### 2-1 Année

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Year |
| Nom de la zone FR | Année |
| ID | year |
| Description EN | This tab / field in the template is only populated if there are no travel expenses for the reporting period. This field should be populated with the year of the reporting period. |
| Description FR | Cet onglet/champ du modèle n’est rempli que s'il n'y a pas de frais de voyage pour la période d’établissement de rapports. Ce champ doit être rempli avec l’année de la période d’établissement de rapports. |
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
| Description EN | This tab / field in the template is only populated if there are no travel expenses for the reporting period. This field should be populated with the month of the reporting period. |
| Description FR | Cet onglet/champ du modèle n’est rempli que s'il n'y a pas de frais de voyage pour la période d’établissement de rapports. Ce champ doit être rempli avec le mois de la période d’établissement de rapports. |
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
