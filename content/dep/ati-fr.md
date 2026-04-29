# Profil des éléments de données: ATI Summaries

_Source YAML: `ati.yaml`_


## [Table of Contents](#table-of-contents)

- [Ressources publiées](#ressources-publies)
- [Légende](#lgende)
- [Jeu de données des sommaires de demandes d’accès à l’information complétées](#jeu-de-donnes-des-sommaires-de-demandes-daccs-linformation-compltes)
- [Jeu de données des sommaires de demandes d’accès à l’information complétées (rien à déclarer)](#jeu-de-donnes-des-sommaires-de-demandes-daccs-linformation-compltes-rien-dclarer)

## [Ressources publiées](#ressources-publies)

- [Jeu de données des sommaires de demandes d’accès à l’information complétées](https://ouvert.canada.ca/data/fr/dataset/0797e893-751e-4695-8229-a5066e4fe43c/resource/19383ca2-b01a-487d-88f7-e1ffbc7d39c2)
- [Jeu de données des sommaires de demandes d’accès à l’information complétées (rien à déclarer)](https://ouvert.canada.ca/data/fr/dataset/0797e893-751e-4695-8229-a5066e4fe43c/resource/5a1386a5-ba69-4725-8338-2f26004d7382)
- Schéma recombinant: https://ouvert.canada.ca/data/fr/recombinant-schema/ati.json


## [Légende](#lgende)

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

## [Jeu de données des sommaires de demandes d’accès à l’information complétées](#jeu-de-donnes-des-sommaires-de-demandes-daccs-linformation-compltes)

### 1-1 Année

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Year |
| Nom de la zone FR | Année |
| ID | year |
| Description EN | This field must be populated with the four-digit calendar year that the request was closed. |
| Description FR | Ce champ doit être complété avec l’année civile à quatre chiffres durant laquelle la demande a été complétée. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Integer |
| Validation EN | Must be not be in the future or before 2011 |
| Validation FR | Ne peux pas être dans le futur ni avant 2011 |
| Exemple de valeur | 2020 |

### 1-2 Mois (1-12)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Month (1-12) |
| Nom de la zone FR | Mois (1-12) |
| ID | month |
| Description EN | This field must be populated with a numerical representation of the month during which the request was closed. |
| Description FR | Ce champ doit être complété avec la représentation numérique du mois durant lequel la demande a été complétée. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Integer |
| Validation EN | Must be in the range of 1-12 (representing January-December). |
| Validation FR | Doit être dans la gamme de 1-12 (représente janvier-décembre) |
| Exemple de valeur | 10 |

### 1-3 Numero de la demande

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Request Number |
| Nom de la zone FR | Numero de la demande |
| ID | request_number |
| Description EN | Your institution’s request file number of the completed Access to Information request. |
| Description FR | Numéro de dossier de demande de votre institution de la demande d’accès à l’information complétée. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | A-2020-00516 |

### 1-4 Sommaire de la demande en anglais

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | English Summary |
| Nom de la zone FR | Sommaire de la demande en anglais |
| ID | summary_en |
| Description EN | A descriptive summary of the completed Access to Information request in English. |
| Description FR | Un résumé descriptif de la demande d’accès à l’information en anglais. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Copies of the Safety Management System Audit and Evaluation Reports |

### 1-5 Sommaire de la demande en français

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | French Summary |
| Nom de la zone FR | Sommaire de la demande en français |
| ID | summary_fr |
| Description EN | A descriptive summary of the completed Access to Information request in French. |
| Description FR | Un résumé descriptif de la demande d’accès à l’information en français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Copies des rapports de vérification et d’évaluation du système de gestion de la sécurité |

### 1-6 Disposition

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Disposition |
| Nom de la zone FR |   |
| ID | disposition |
| Description EN | The response disposition of the completed Access to Information request |
| Description FR | La disposition de la réponse de la demande d’accès à l’information complétée. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | DP |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| DA | All disclosed | Communication totale |
| DP | Disclosed in part | Communication partielle |
| EX | All exempted | Exception totale |
| EC | All excluded | Exclusion totale |
| NE | No records exist | Aucun document n’existe |

### 1-7 Nombre de pages

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Number of Pages |
| Nom de la zone FR | Nombre de pages |
| ID | pages |
| Description EN | The number of pages released in response to the completed Access to Information request. If no records were released, enter a value of “0”. |
| Description FR | Le nombre de pages publiées en réponse à la demande d’accès à l’information. Si aucun enregistrement n’a été publié, entrez la valeur « 0 ». |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Integer |
| Validation EN | This value must not be negative |
| Validation FR | Cette valeur ne doit pas être négatif |
| Exemple de valeur | 779 |

### 1-8 Commentaires en anglais

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Comments English |
| Nom de la zone FR | Commentaires en anglais |
| ID | comments_en |
| Description EN | This field may be populated with additional or contextual comments in English. |
| Description FR | Ce champ peut être rempli avec des commentaires supplémentaires ou contextuels en anglais. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | The disclosure package also included audio recordings |

### 1-9 Commentaires en français

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Comments French |
| Nom de la zone FR | Commentaires en français |
| ID | comments_fr |
| Description EN | This field may be populated with additional or contextual comments in French. |
| Description FR | Ce champ peut être rempli avec des commentaires supplémentaires ou contextuels en français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | Le dossier de divulgation comprend en plus des enregistrements audio |

## [Jeu de données des sommaires de demandes d’accès à l’information complétées (rien à déclarer)](#jeu-de-donnes-des-sommaires-de-demandes-daccs-linformation-compltes-rien-dclarer)

### 2-1 Année

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Year |
| Nom de la zone FR | Année |
| ID | year |
| Description EN | Four-digit calendar year of the month for which you are reporting no summaries to publish. |
| Description FR | Année civile a quatre chiffres du mois pour lequel vous ne signalez aucun résumé à publier. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Integer |
| Validation EN | Must be not be in the future or before 2011 |
| Validation FR | Ne peux pas être dans le futur ni avant 2011 |
| Exemple de valeur | 2014 |

### 2-2 Mois (1-12)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Month (1-12) |
| Nom de la zone FR | Mois (1-12) |
| ID | month |
| Description EN | A numerical representation of the month for which you are reporting no summaries to publish. |
| Description FR | Une représentation numérique du mois pour lequel vous ne signalez aucun résumé a publier. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Integer |
| Validation EN | Must be in the range of 1-12 (representing January-December). |
| Validation FR | Doit être dans la gamme de 1-12 (représente janvier-décembre) |
| Exemple de valeur | 10 |


---
