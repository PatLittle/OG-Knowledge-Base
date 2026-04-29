# Data Element Profile: Open Data Inventory

_Source YAML: `inventory.yaml`_

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

## Open Data Inventory

### 1-1 Reference Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Reference Number |
| Field Name FR | Numéro de référence |
| ID | ref_number |
| Description EN | The unique reference number given to each line item in the spreadsheet. Having a unique identifier for each item will allow departments to locate a specific item in the system if revisions or deletions are required. This element will not be displayed to the public. |
| Description FR | Un identificateur unique est attribué à chaque poste dans la feuille de calcul. Un identificateur unique pour chaque poste permettra aux ministères de trouver un élément précis dans le système, si des modifications ou des suppressions sont nécessaires. Cet élément ne sera pas présenté au public. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | OD-2016-00001 |

### 1-2 Title (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Title (English) |
| Field Name FR |   |
| ID | title_en |
| Description EN | The English name by which the dataset is known. |
| Description FR | Le nom en anglais sous lequel le jeu de données est connu. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Annual Insolvency Rates |

### 1-3 Title (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Title (French) |
| Field Name FR |   |
| ID | title_fr |
| Description EN | The French name by which the dataset is known. |
| Description FR | Le nom en français sous lequel le jeu de données est connu. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Taux annuels d’insolvabilité |

### 1-4 Description (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Description (English) |
| Field Name FR |   |
| ID | description_en |
| Description EN | An account of the dataset, in English. A description may include but is not limited to, an abstract, a table of contents, or a free-text account of the dataset. |
| Description FR | Un compte rendu du jeu de données en anglais. Une description peut inclure, entre autres, un résumé, une table des matières ou du texte libre sur le jeu de données. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | The consumer insolvency rate is defined as the number of consumer insolvencies per thousand residents aged 18 years or above. The business insolvency rate is defined as the number of business insolvencies per thousand businesses. Annual insolvency rates are available for consumers starting from 1987 and for businesses starting from 1998. [Office of the Superintendent of Bankruptcy Canada] |

### 1-5 Description (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Description (French) |
| Field Name FR |   |
| ID | description_fr |
| Description EN | An account of the dataset, in French. A description may include but is not limited to, an abstract, a table of contents, or a free-text account of the dataset. |
| Description FR | Un compte rendu du jeu de données en français. Une description peut inclure, entre autres, un résumé, une table des matières ou du texte libre sur le jeu de données. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Le taux d'insolvabilité des consommateurs renvoie au nombre de personnes insolvables par millier d'habitants âgés de 18 ans ou plus et le taux d'insolvabilité des entreprises désigne le nombre d'entreprises insolvables par millier d'entreprises. Les taux annuels d'insolvabilité sont présentés à partir de 1987 pour les consommateurs et de 1998 pour les entreprises. [Bureau du surintendant des faillites Canada] |

### 1-6 Publisher - Name at Publication (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Publisher - Name at Publication (English) |
| Field Name FR |   |
| ID | publisher_en |
| Description EN | Name, in English, of the organization primarily responsible for publishing the dataset at the time of the publication (if applicable, i.e. if different than current name). |
| Description FR | Nom, en anglais, de l’organisation principalement responsable de l’édition du jeu de données au moment de la publication (s’il y a lieu, c.-à-d. s’il est différent du nom actuel) |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Repeatable |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Industry Canada |

### 1-7 Publisher - Name at Publication (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Publisher - Name at Publication (French) |
| Field Name FR |   |
| ID | publisher_fr |
| Description EN | Name, in French, of the organization primarily responsible for publishing the dataset at the time of the publication (if applicable, i.e. if different than current name). |
| Description FR | Nom, en français, de l’organisation principalement responsable de l’édition du jeu de données au moment de la publication (s’il y a lieu, c.-à-d. s’il est différent du nom actuel) |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Repeatable |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Industrie Canada |

### 1-8 Date Published

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Date Published |
| Field Name FR |   |
| ID | date_published |
| Description EN | The date of issuance (e.g., publication) of the dataset |
| Description FR | Date de diffusion (p. ex., publication) du jeu de données. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Date |
| Validation EN |   |
| Validation FR |   |
| Example Value | 2016-04-01 |

### 1-9 Language

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Language |
| Field Name FR |   |
| ID | language |
| Description EN | The language of the resource. |
| Description FR | Langue de la ressource |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Repeatable |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | en+fr |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| en | English | Anglais |
| fr | French | Français |
| en+fr | Bilingual (English and French) | Bilingue (Anglais et Français) |
| iu | Inuktitut | Inuktitut |
| zxx | No linguistic content ; Not applicable | Pas de contenu linguistique; non applicable |
| other | Other | Autre |

### 1-10 Size

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Size |
| Field Name FR |   |
| ID | size |
| Description EN | The [estimated] size of the resource(in Bytes) |
| Description FR | La taille [estimée] de la ressource (en octets). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN |   |
| Validation FR |   |
| Example Value | 392000 |

### 1-11 Eligible for Release

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Eligible for Release |
| Field Name FR |   |
| ID | eligible_for_release |
| Description EN | Is all of the content within the dataset eligible to be publicly released based on the application of the Eligibility Criteria in the Guide to Implementing the Directive on Open Government? |
| Description FR | Tout le contenu du jeu de données peut être diffusé publiquement selon les critères d’admissibilité mentionnés dans le guide de la mise en œuvre de la Directive sur le gouvernement ouvert? |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Y |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| Y | Yes | Oui |
| N | No | Non |

### 1-12 Program Alignment Architecture (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Program Alignment Architecture (English) |
| Field Name FR |   |
| ID | program_alignment_architecture_en |
| Description EN | The Program Alignment Architecture (PAA) in English. The Program Alignment Architecture (PAA) is an inventory of each organization’s programs. It provides an overview of the organization’s responsibilities. |
| Description FR | L’Architecture d’alignement des programmes (AAP) en anglais. L’Architecture d’alignement des programmes (AAP) est un inventaire des programmes de chaque organisation. Il offre un aperçu des responsabilités de l’organisation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Government wide programs design and delivery |

### 1-13 Program Alignment Architecture (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Program Alignment Architecture (French) |
| Field Name FR |   |
| ID | program_alignment_architecture_fr |
| Description EN | The Program Alignment Architecture (PAA) in French. The Program Alignment Architecture (PAA) is an inventory of each organization’s programs. It provides an overview of the organization’s responsibilities. |
| Description FR | L’Architecture d’alignement des programmes (AAP) en français. L’Architecture d’alignement des programmes (AAP) est un inventaire des programmes de chaque organisation. Il offre un aperçu des responsabilités de l’organisation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | Conception et prestation des programmes pangouvernementaux |

### 1-14 Date Released

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Date Released |
| Field Name FR |   |
| ID | date_released |
| Description EN | The date on which the metadata record was released, made available, on the Open Government portal; only if applicable |
| Description FR | La date à laquelle l’enregistrement de métadonnées a été diffusé et rendu accessible à partir du Portail du gouvernement ouvert, s’il y a lieu seulement. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Date |
| Validation EN |   |
| Validation FR |   |
| Example Value | 2016-04-01 |

### 1-15 Open Government Portal Record (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Open Government Portal Record (English) |
| Field Name FR |   |
| ID | portal_url_en |
| Description EN | The location for online access to the distribution of the resource, in French. This element is only mandatory if applicable The entry should point to the metadata record page on Open.Canada.ca. |
| Description FR | L’emplacement en ligne où il est possible d’accéder à la ressource, en anglais. Cet élément n’est obligatoire que le cas échéant. La valeur saisie doit mener à la page de l’enregistrement sur ouvert.canada.ca. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | http://open.canada.ca/data/en/dataset/0e52f1b0-089a-430e-bbd1-1367d7328a2e |

### 1-16 Open Government Portal Record (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Open Government Portal Record (French) |
| Field Name FR |   |
| ID | portal_url_fr |
| Description EN | The location for online access to the distribution of the resource, in French. This element is only mandatory if applicable The entry should point to the metadata record page on Open.Canada.ca. |
| Description FR | L’emplacement en ligne où il est possible d’accéder à la ressource, en français. Cet élément n’est obligatoire que le cas échéant. La valeur saisie doit mener à la page de l’enregistrement sur ouvert.canada.ca. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN |   |
| Validation FR |   |
| Example Value | http://ouvert.canada.ca/data/fr/dataset/0e52f1b0-089a-430e-bbd1-1367d7328a2e |


---
