# Profil des éléments de données: Open Data Inventory

_Source YAML: `inventory.yaml`_

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

## Open Data Inventory

### 1-1 Numéro de référence

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Reference Number |
| Nom de la zone FR | Numéro de référence |
| ID | ref_number |
| Description EN | The unique reference number given to each line item in the spreadsheet. Having a unique identifier for each item will allow departments to locate a specific item in the system if revisions or deletions are required. This element will not be displayed to the public. |
| Description FR | Un identificateur unique est attribué à chaque poste dans la feuille de calcul. Un identificateur unique pour chaque poste permettra aux ministères de trouver un élément précis dans le système, si des modifications ou des suppressions sont nécessaires. Cet élément ne sera pas présenté au public. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | OD-2016-00001 |

### 1-2 Title (English)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Title (English) |
| Nom de la zone FR |   |
| ID | title_en |
| Description EN | The English name by which the dataset is known. |
| Description FR | Le nom en anglais sous lequel le jeu de données est connu. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Annual Insolvency Rates |

### 1-3 Title (French)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Title (French) |
| Nom de la zone FR |   |
| ID | title_fr |
| Description EN | The French name by which the dataset is known. |
| Description FR | Le nom en français sous lequel le jeu de données est connu. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Taux annuels d’insolvabilité |

### 1-4 Description (English)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Description (English) |
| Nom de la zone FR |   |
| ID | description_en |
| Description EN | An account of the dataset, in English. A description may include but is not limited to, an abstract, a table of contents, or a free-text account of the dataset. |
| Description FR | Un compte rendu du jeu de données en anglais. Une description peut inclure, entre autres, un résumé, une table des matières ou du texte libre sur le jeu de données. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | The consumer insolvency rate is defined as the number of consumer insolvencies per thousand residents aged 18 years or above. The business insolvency rate is defined as the number of business insolvencies per thousand businesses. Annual insolvency rates are available for consumers starting from 1987 and for businesses starting from 1998. [Office of the Superintendent of Bankruptcy Canada] |

### 1-5 Description (French)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Description (French) |
| Nom de la zone FR |   |
| ID | description_fr |
| Description EN | An account of the dataset, in French. A description may include but is not limited to, an abstract, a table of contents, or a free-text account of the dataset. |
| Description FR | Un compte rendu du jeu de données en français. Une description peut inclure, entre autres, un résumé, une table des matières ou du texte libre sur le jeu de données. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Le taux d'insolvabilité des consommateurs renvoie au nombre de personnes insolvables par millier d'habitants âgés de 18 ans ou plus et le taux d'insolvabilité des entreprises désigne le nombre d'entreprises insolvables par millier d'entreprises. Les taux annuels d'insolvabilité sont présentés à partir de 1987 pour les consommateurs et de 1998 pour les entreprises. [Bureau du surintendant des faillites Canada] |

### 1-6 Publisher - Name at Publication (English)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Publisher - Name at Publication (English) |
| Nom de la zone FR |   |
| ID | publisher_en |
| Description EN | Name, in English, of the organization primarily responsible for publishing the dataset at the time of the publication (if applicable, i.e. if different than current name). |
| Description FR | Nom, en anglais, de l’organisation principalement responsable de l’édition du jeu de données au moment de la publication (s’il y a lieu, c.-à-d. s’il est différent du nom actuel) |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Répétable |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Industry Canada |

### 1-7 Publisher - Name at Publication (French)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Publisher - Name at Publication (French) |
| Nom de la zone FR |   |
| ID | publisher_fr |
| Description EN | Name, in French, of the organization primarily responsible for publishing the dataset at the time of the publication (if applicable, i.e. if different than current name). |
| Description FR | Nom, en français, de l’organisation principalement responsable de l’édition du jeu de données au moment de la publication (s’il y a lieu, c.-à-d. s’il est différent du nom actuel) |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Répétable |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Industrie Canada |

### 1-8 Date Published

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Date Published |
| Nom de la zone FR |   |
| ID | date_published |
| Description EN | The date of issuance (e.g., publication) of the dataset |
| Description FR | Date de diffusion (p. ex., publication) du jeu de données. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Date |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 2016-04-01 |

### 1-9 Language

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Language |
| Nom de la zone FR |   |
| ID | language |
| Description EN | The language of the resource. |
| Description FR | Langue de la ressource |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Répétable |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | en+fr |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| en | English | Anglais |
| fr | French | Français |
| en+fr | Bilingual (English and French) | Bilingue (Anglais et Français) |
| iu | Inuktitut | Inuktitut |
| zxx | No linguistic content ; Not applicable | Pas de contenu linguistique; non applicable |
| other | Other | Autre |

### 1-10 Size

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Size |
| Nom de la zone FR |   |
| ID | size |
| Description EN | The [estimated] size of the resource(in Bytes) |
| Description FR | La taille [estimée] de la ressource (en octets). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Integer |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 392000 |

### 1-11 Eligible for Release

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Eligible for Release |
| Nom de la zone FR |   |
| ID | eligible_for_release |
| Description EN | Is all of the content within the dataset eligible to be publicly released based on the application of the Eligibility Criteria in the Guide to Implementing the Directive on Open Government? |
| Description FR | Tout le contenu du jeu de données peut être diffusé publiquement selon les critères d’admissibilité mentionnés dans le guide de la mise en œuvre de la Directive sur le gouvernement ouvert? |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Y |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| Y | Yes | Oui |
| N | No | Non |

### 1-12 Program Alignment Architecture (English)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Program Alignment Architecture (English) |
| Nom de la zone FR |   |
| ID | program_alignment_architecture_en |
| Description EN | The Program Alignment Architecture (PAA) in English. The Program Alignment Architecture (PAA) is an inventory of each organization’s programs. It provides an overview of the organization’s responsibilities. |
| Description FR | L’Architecture d’alignement des programmes (AAP) en anglais. L’Architecture d’alignement des programmes (AAP) est un inventaire des programmes de chaque organisation. Il offre un aperçu des responsabilités de l’organisation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Government wide programs design and delivery |

### 1-13 Program Alignment Architecture (French)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Program Alignment Architecture (French) |
| Nom de la zone FR |   |
| ID | program_alignment_architecture_fr |
| Description EN | The Program Alignment Architecture (PAA) in French. The Program Alignment Architecture (PAA) is an inventory of each organization’s programs. It provides an overview of the organization’s responsibilities. |
| Description FR | L’Architecture d’alignement des programmes (AAP) en français. L’Architecture d’alignement des programmes (AAP) est un inventaire des programmes de chaque organisation. Il offre un aperçu des responsabilités de l’organisation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Conception et prestation des programmes pangouvernementaux |

### 1-14 Date Released

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Date Released |
| Nom de la zone FR |   |
| ID | date_released |
| Description EN | The date on which the metadata record was released, made available, on the Open Government portal; only if applicable |
| Description FR | La date à laquelle l’enregistrement de métadonnées a été diffusé et rendu accessible à partir du Portail du gouvernement ouvert, s’il y a lieu seulement. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Date |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 2016-04-01 |

### 1-15 Open Government Portal Record (English)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Open Government Portal Record (English) |
| Nom de la zone FR |   |
| ID | portal_url_en |
| Description EN | The location for online access to the distribution of the resource, in French. This element is only mandatory if applicable The entry should point to the metadata record page on Open.Canada.ca. |
| Description FR | L’emplacement en ligne où il est possible d’accéder à la ressource, en anglais. Cet élément n’est obligatoire que le cas échéant. La valeur saisie doit mener à la page de l’enregistrement sur ouvert.canada.ca. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | http://open.canada.ca/data/en/dataset/0e52f1b0-089a-430e-bbd1-1367d7328a2e |

### 1-16 Open Government Portal Record (French)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Open Government Portal Record (French) |
| Nom de la zone FR |   |
| ID | portal_url_fr |
| Description EN | The location for online access to the distribution of the resource, in French. This element is only mandatory if applicable The entry should point to the metadata record page on Open.Canada.ca. |
| Description FR | L’emplacement en ligne où il est possible d’accéder à la ressource, en français. Cet élément n’est obligatoire que le cas échéant. La valeur saisie doit mener à la page de l’enregistrement sur ouvert.canada.ca. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | http://ouvert.canada.ca/data/fr/dataset/0e52f1b0-089a-430e-bbd1-1367d7328a2e |


---
