# Profil des éléments de données: Proactive Publication - Acts of Founded Wrongdoing

_Source YAML: `wrongdoing.yaml`_

## Ressources publiées

- [Divulgation proactive – Dossiers sur les actes répréhensibles fondés](https://ouvert.canada.ca/data/fr/dataset/6e75f19c-d19d-48aa-984e-609c8d9bc403/resource/84a77a58-6bce-4bfb-ad67-bbe452523b14)
- Schéma recombinant: https://ouvert.canada.ca/data/fr/recombinant-schema/wrongdoing.json


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

## Proactive Publication - Acts of Founded Wrongdoing

### 1-1 Numéro de référence

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Reference Number |
| Nom de la zone FR | Numéro de référence |
| ID | ref_number |
| Description EN | This field is populated by the user. It is a unique reference number given to each line item in the spreadsheet. Having a unique identifier for each item will allow users locate a specific item in the registry should they need to modify or delete. |
| Description FR | Cette zone est remplie par chaque organisation. Un identificateur unique est attribué à chaque poste dans le tableur. Un identificateur unique pour chaque poste permettra aux utilisateurs de repérer un article en particulier s’ils doivent le modifier ou le supprimer. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 1980198 |

### 1-2 Numéro d’identification du fichier

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | File Identification Number |
| Nom de la zone FR | Numéro d’identification du fichier |
| ID | file_id_number |
| Description EN | This field will contain the file identification number of the founded wrongdoing file. |
| Description FR | Cette zone renferme le numéro d’identification du dossier de l’acte répréhensible constaté. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 15677 |

### 1-3 Date d’identification du ficher

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | File Identification date |
| Nom de la zone FR | Date d’identification du ficher |
| ID | file_id_date |
| Description EN | This field will provide the date that the file was created/received. |
| Description FR | Cette zone renferme la date à laquelle le dossier a été créé ou reçu. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Date |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 2016-01-01 |

### 1-4 Description anglaise

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | English Case Description |
| Nom de la zone FR | Description anglaise |
| ID | case_description_en |
| Description EN | The field will contain the case description, in English. |
| Description FR | Cette zone renferme la description du cas en anglais. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Description |

### 1-5 Description française

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | French Case Description |
| Nom de la zone FR | Description française |
| ID | case_description_fr |
| Description EN | This field will contain the case description, in French. |
| Description FR | Cette zone renferme la description du cas en français. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Description |

### 1-6 Constatations et Conclusions

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Findings and Conclusions |
| Nom de la zone FR | Constatations et Conclusions |
| ID | findings_conclusions |
| Description EN | The field will contain value(s) a – f, separated by commas if more than one value. |
| Description FR | Le champ contiendra une (des) valeur(s) a – f, séparées par une virgule s´il y en a plus d´une. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Répétable |
| Type de format | Text Array |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | b |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| a | a contravention of any Act of Parliament or of the legislature of a province, or of any regulations made under any such Act, other than a contravention of section 19 of this Act | la contravention d’une loi fédérale ou provinciale ou d’un règlement pris sous leur régime, à l’exception de la contravention de l’article 19 de la présente loi |
| b | a misuse of public funds or a public asset | l’usage abusif des fonds ou des biens publics |
| c | a gross mismanagement in the public sector | les cas graves de mauvaise gestion dans le secteur public |
| d | an act or omission that creates a substantial and specific danger to the life, health or safety of persons, or to the environment, other than a danger that is inherent in the performance of the duties or functions of a public servant | le fait de causer — par action ou omission — un risque grave et précis pour la vie, la santé ou la sécurité humaines ou pour l’environnement, à l’exception du risque inhérent à l’exercice des attributions d’un fonctionnaire |
| e | a serious breach of a code of conduct established under section 5 or 6 | la contravention grave d’un code de conduite établi en vertu des articles 5 ou 6 |
| f | knowingly directing or counselling a person to commit a wrongdoing set out in any of paragraphs (a) to (e) | le fait de sciemment ordonner ou conseiller à une personne de commettre l’un des actes répréhensibles visés aux alinéas a) à e) |

### 1-7 Recommendations et mesures Correctives anglaises

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | English Recommendations and Corrective Measures |
| Nom de la zone FR | Recommendations et mesures Correctives anglaises |
| ID | recommendations_corrective_measures_en |
| Description EN | The Field will contain the Recommendations and Corrective Measures as per the article 11 of the Public Servants Disclosure Protection Act, in English. |
| Description FR | Cette zone renferme les recommandations et mesures correctives en anglais, en conformité à l’article 11 de la Loi sur la protection des fonctionnaires divulgateurs d’actes répréhensibles. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Recommendations and Corrective Measures |

### 1-8 Recommendations et mesures Correctives françaises

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | French Recommendations and Corrective Measures |
| Nom de la zone FR | Recommendations et mesures Correctives françaises |
| ID | recommendations_corrective_measures_fr |
| Description EN | The Field will contain the Recommendations and Corrective Measures as per the article 11 of the Public Servants Disclosure Protection Act, in French. |
| Description FR | Cette zone renferme les recommandations et mesures correctives en français, en conformité à l’article 11 de la Loi sur la protection des fonctionnaires divulgateurs d’actes répréhensibles. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Recommandations et mesures correctives |
