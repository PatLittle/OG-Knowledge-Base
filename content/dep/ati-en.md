# Data Element Profile: ATI Summaries

_Source YAML: `ati.yaml`_

## Published resources

- [Completed Access to Information Request Summaries dataset](https://open.canada.ca/data/dataset/0797e893-751e-4695-8229-a5066e4fe43c/resource/19383ca2-b01a-487d-88f7-e1ffbc7d39c2)
- [Completed Access to Information Request Summaries dataset (Nothing to report)](https://open.canada.ca/data/dataset/0797e893-751e-4695-8229-a5066e4fe43c/resource/5a1386a5-ba69-4725-8338-2f26004d7382)
- Recombinant schema: https://open.canada.ca/data/en/recombinant-schema/ati.json


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

## ATI Summaries

### 1-1 Year

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Year |
| Field Name FR | Année |
| ID | year |
| Description EN | This field must be populated with the four-digit calendar year that the request was closed. |
| Description FR | Ce champ doit être complété avec l’année civile à quatre chiffres durant laquelle la demande a été complétée. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | Must be not be in the future or before 2011 |
| Validation FR | Ne peux pas être dans le futur ni avant 2011 |
| Example Value | 2020 |

### 1-2 Month (1-12)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Month (1-12) |
| Field Name FR | Mois (1-12) |
| ID | month |
| Description EN | This field must be populated with a numerical representation of the month during which the request was closed. |
| Description FR | Ce champ doit être complété avec la représentation numérique du mois durant lequel la demande a été complétée. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | Must be in the range of 1-12 (representing January-December). |
| Validation FR | Doit être dans la gamme de 1-12 (représente janvier-décembre) |
| Example Value | 10 |

### 1-3 Request Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Request Number |
| Field Name FR | Numero de la demande |
| ID | request_number |
| Description EN | Your institution’s request file number of the completed Access to Information request. |
| Description FR | Numéro de dossier de demande de votre institution de la demande d’accès à l’information complétée. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | A-2020-00516 |

### 1-4 English Summary

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | English Summary |
| Field Name FR | Sommaire de la demande en anglais |
| ID | summary_en |
| Description EN | A descriptive summary of the completed Access to Information request in English. |
| Description FR | Un résumé descriptif de la demande d’accès à l’information en anglais. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Copies of the Safety Management System Audit and Evaluation Reports |

### 1-5 French Summary

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | French Summary |
| Field Name FR | Sommaire de la demande en français |
| ID | summary_fr |
| Description EN | A descriptive summary of the completed Access to Information request in French. |
| Description FR | Un résumé descriptif de la demande d’accès à l’information en français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Copies des rapports de vérification et d’évaluation du système de gestion de la sécurité |

### 1-6 Disposition

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Disposition |
| Field Name FR |   |
| ID | disposition |
| Description EN | The response disposition of the completed Access to Information request |
| Description FR | La disposition de la réponse de la demande d’accès à l’information complétée. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | DP |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| DA | All disclosed | Communication totale |
| DP | Disclosed in part | Communication partielle |
| EX | All exempted | Exception totale |
| EC | All excluded | Exclusion totale |
| NE | No records exist | Aucun document n’existe |

### 1-7 Number of Pages

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of Pages |
| Field Name FR | Nombre de pages |
| ID | pages |
| Description EN | The number of pages released in response to the completed Access to Information request. If no records were released, enter a value of “0”. |
| Description FR | Le nombre de pages publiées en réponse à la demande d’accès à l’information. Si aucun enregistrement n’a été publié, entrez la valeur « 0 ». |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | This value must not be negative |
| Validation FR | Cette valeur ne doit pas être négatif |
| Example Value | 779 |

### 1-8 Comments English

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Comments English |
| Field Name FR | Commentaires en anglais |
| ID | comments_en |
| Description EN | This field may be populated with additional or contextual comments in English. |
| Description FR | Ce champ peut être rempli avec des commentaires supplémentaires ou contextuels en anglais. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | The disclosure package also included audio recordings |

### 1-9 Comments French

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Comments French |
| Field Name FR | Commentaires en français |
| ID | comments_fr |
| Description EN | This field may be populated with additional or contextual comments in French. |
| Description FR | Ce champ peut être rempli avec des commentaires supplémentaires ou contextuels en français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Le dossier de divulgation comprend en plus des enregistrements audio |

## ATI Summaries

### 2-1 Year

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Year |
| Field Name FR | Année |
| ID | year |
| Description EN | Four-digit calendar year of the month for which you are reporting no summaries to publish. |
| Description FR | Année civile a quatre chiffres du mois pour lequel vous ne signalez aucun résumé à publier. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | Must be not be in the future or before 2011 |
| Validation FR | Ne peux pas être dans le futur ni avant 2011 |
| Example Value | 2014 |

### 2-2 Month (1-12)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Month (1-12) |
| Field Name FR | Mois (1-12) |
| ID | month |
| Description EN | A numerical representation of the month for which you are reporting no summaries to publish. |
| Description FR | Une représentation numérique du mois pour lequel vous ne signalez aucun résumé a publier. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | Must be in the range of 1-12 (representing January-December). |
| Validation FR | Doit être dans la gamme de 1-12 (représente janvier-décembre) |
| Example Value | 10 |


---
