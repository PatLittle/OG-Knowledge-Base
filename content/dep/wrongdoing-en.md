# Data Element Profile: Proactive Publication - Acts of Founded Wrongdoing

_Source YAML: `wrongdoing.yaml`_


## [Table of Contents](#table-of-contents)

- [Published resources](#published-resources)
- [Legend](#legend)
- [Proactive Disclosure - Acts of Founded Wrongdoing](#proactive-disclosure-acts-of-founded-wrongdoing)

## [Published resources](#published-resources)

- [Proactive Disclosure - Acts of Founded Wrongdoing](https://open.canada.ca/data/dataset/6e75f19c-d19d-48aa-984e-609c8d9bc403/resource/84a77a58-6bce-4bfb-ad67-bbe452523b14)
- Recombinant schema: https://open.canada.ca/data/en/recombinant-schema/wrongdoing.json


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

## [Proactive Disclosure - Acts of Founded Wrongdoing](#proactive-disclosure-acts-of-founded-wrongdoing)

### 1-1 Reference Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reference Number |
| Field Name FR | Numéro de référence |
| ID | ref_number |
| Description EN | This field is populated by the user. It is a unique reference number given to each line item in the spreadsheet. Having a unique identifier for each item will allow users locate a specific item in the registry should they need to modify or delete. |
| Description FR | Cette zone est remplie par chaque organisation. Un identificateur unique est attribué à chaque poste dans le tableur. Un identificateur unique pour chaque poste permettra aux utilisateurs de repérer un article en particulier s’ils doivent le modifier ou le supprimer. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | 1980198 |

### 1-2 File Identification Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | File Identification Number |
| Field Name FR | Numéro d’identification du fichier |
| ID | file_id_number |
| Description EN | This field will contain the file identification number of the founded wrongdoing file. |
| Description FR | Cette zone renferme le numéro d’identification du dossier de l’acte répréhensible constaté. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | 15677 |

### 1-3 File Identification date

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | File Identification date |
| Field Name FR | Date d’identification du ficher |
| ID | file_id_date |
| Description EN | This field will provide the date that the file was created/received. |
| Description FR | Cette zone renferme la date à laquelle le dossier a été créé ou reçu. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Date |
| Validation EN |   |
| Validation FR |   |
| Example Value | 2016-01-01 |

### 1-4 English Case Description

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | English Case Description |
| Field Name FR | Description anglaise |
| ID | case_description_en |
| Description EN | The field will contain the case description, in English. |
| Description FR | Cette zone renferme la description du cas en anglais. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Description |

### 1-5 French Case Description

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | French Case Description |
| Field Name FR | Description française |
| ID | case_description_fr |
| Description EN | This field will contain the case description, in French. |
| Description FR | Cette zone renferme la description du cas en français. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Description |

### 1-6 Findings and Conclusions

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Findings and Conclusions |
| Field Name FR | Constatations et Conclusions |
| ID | findings_conclusions |
| Description EN | The field will contain value(s) a – f, separated by commas if more than one value. |
| Description FR | Le champ contiendra une (des) valeur(s) a – f, séparées par une virgule s´il y en a plus d´une. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text Array |
| Validation EN |   |
| Validation FR |   |
| Example Value | b |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| a | a contravention of any Act of Parliament or of the legislature of a province, or of any regulations made under any such Act, other than a contravention of section 19 of this Act | la contravention d’une loi fédérale ou provinciale ou d’un règlement pris sous leur régime, à l’exception de la contravention de l’article 19 de la présente loi |
| b | a misuse of public funds or a public asset | l’usage abusif des fonds ou des biens publics |
| c | a gross mismanagement in the public sector | les cas graves de mauvaise gestion dans le secteur public |
| d | an act or omission that creates a substantial and specific danger to the life, health or safety of persons, or to the environment, other than a danger that is inherent in the performance of the duties or functions of a public servant | le fait de causer — par action ou omission — un risque grave et précis pour la vie, la santé ou la sécurité humaines ou pour l’environnement, à l’exception du risque inhérent à l’exercice des attributions d’un fonctionnaire |
| e | a serious breach of a code of conduct established under section 5 or 6 | la contravention grave d’un code de conduite établi en vertu des articles 5 ou 6 |
| f | knowingly directing or counselling a person to commit a wrongdoing set out in any of paragraphs (a) to (e) | le fait de sciemment ordonner ou conseiller à une personne de commettre l’un des actes répréhensibles visés aux alinéas a) à e) |

### 1-7 English Recommendations and Corrective Measures

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | English Recommendations and Corrective Measures |
| Field Name FR | Recommendations et mesures Correctives anglaises |
| ID | recommendations_corrective_measures_en |
| Description EN | The Field will contain the Recommendations and Corrective Measures as per the article 11 of the Public Servants Disclosure Protection Act, in English. |
| Description FR | Cette zone renferme les recommandations et mesures correctives en anglais, en conformité à l’article 11 de la Loi sur la protection des fonctionnaires divulgateurs d’actes répréhensibles. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Recommendations and Corrective Measures |

### 1-8 French Recommendations and Corrective Measures

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | French Recommendations and Corrective Measures |
| Field Name FR | Recommendations et mesures Correctives françaises |
| ID | recommendations_corrective_measures_fr |
| Description EN | The Field will contain the Recommendations and Corrective Measures as per the article 11 of the Public Servants Disclosure Protection Act, in French. |
| Description FR | Cette zone renferme les recommandations et mesures correctives en français, en conformité à l’article 11 de la Loi sur la protection des fonctionnaires divulgateurs d’actes répréhensibles. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Recommandations et mesures correctives |
