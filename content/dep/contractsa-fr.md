# Profil des éléments de données: Proactive Publication - Aggregated Contracts from -$10,000 to $10,000

_Source YAML: `contractsa.yaml`_


Table of Contents

- [Ressources publiées](#ressources-publies)
- [Légende](#lgende)
- [Total global – Contrats de 10 000 $ et moins](#total-global-contrats-de-10-000-et-moins)

<div id="ressources-publies"></div>

## Ressources publiées

Published data: [Total global – Contrats de 10 000 $ et moins](https://ouvert.canada.ca/data/fr/dataset/d8f85d91-7dec-4fd1-8055-483b77225d8b/resource/2e9a82e2-bb18-4bff-a61e-59af3b429672)
Schéma recombinant: https://ouvert.canada.ca/data/fr/recombinant-schema/contractsa.json


<div id="lgende"></div>

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

<div id="total-global-contrats-de-10-000-et-moins"></div>

## Total global – Contrats de 10 000 $ et moins

### 1-1 Période de déclaration

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Calendar Year Reporting Period |
| Nom de la zone FR | Période de déclaration |
| ID | year |
| Description EN | It is recommended for this field to be populated in the standard format described below. For example, if the template is being reported for the 2017 calendar year, the entry will be populated as 2017. |
| Description FR | Il est recommandé de remplir ce champ en utilisant le format standard décrit ci-dessous. Par exemple, si le modèle est déclaré pour l’année civile 2017, il faut inscrire 2017. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Integer |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 2016 |

### 1-2 Nombre de marchés de biens de 10 000 $ et moins

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Number of Goods Contracts $10K and under |
| Nom de la zone FR | Nombre de marchés de biens de 10 000 $ et moins |
| ID | contract_goods_number_of |
| Description EN | It is recommended for this field to be populated with the total number of goods contracts entered into with a value of $10,000 and under. This includes goods contracts entered into and subsequently amended in the same calendar year to an amended contract value of $10,000 and under. |
| Description FR | Il est recommandé de saisir dans ce champ le nombre total de marchés de biens conclus d’une valeur de 10 000 $ ou moins, ce qui comprend les marchés de biens conclus et modifiés par la suite au cours de la même année civile et d’une valeur de 10 000 $ ou moins. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Integer |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 100 |

### 1-3 Marchés de biens de 10 000 $ et moins - Valeur d’origine

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Goods Contracts $10K and under - Original Value |
| Nom de la zone FR | Marchés de biens de 10 000 $ et moins - Valeur d’origine |
| ID | contracts_goods_original_value |
| Description EN | It is recommended for this field to be populated with the value of all goods contracts with a value of $10,000 and under, at the time of contract entry. This value should be in Canadian currency and include all applicable taxes. |
| Description FR | Il est recommandé de saisir dans ce champ la valeur des marchés de biens de 10 000 $ ou moins au moment de la conclusion du marché. Cette valeur doit être exprimée en dollars canadiens et inclure toutes les taxes qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 50000.00 |

### 1-4 Modifications de marchés de biens de -10 000 $ à 10 000 $ - Valeur nette des modifications

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Goods Contracts Amendments from -$10K to $10K - Net Amendment Value |
| Nom de la zone FR | Modifications de marchés de biens de -10 000 $ à 10 000 $ - Valeur nette des modifications |
| ID | contracts_goods_amendment_value |
| Description EN | It is recommended for this field to be populated with the value of all net amendments to goods contracts (that is, all positive and negative amendments) with a value from -$10,000 to $10,000. This value should be in Canadian currency and include all applicable taxes. An amendment should be reported either quarterly or annually. Reporting an amendment both quarterly and annually would result in double counting of the amendment’s value when calculating the total contracting activity of an organization. |
| Description FR | Il est recommandé de saisir dans ce champ la valeur nette de toutes les modifications de marché de biens (c’est-à-dire, toutes les modifications positives et négatives) de -10 000 $ à 10 000 $. Cette valeur doit être exprimée en dollars canadiens et inclure toutes les taxes qui s’appliquent. Une modification doit faire l’objet d’une déclaration trimestrielle ou annuelle. La déclaration d’une modification de façon trimestrielle et annuelle donnerait lieu au double dénombrement de la valeur de la modification au moment de calculer le total de l’activité contractuelle d’une organisation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 500.00 |

### 1-5 Nombre de marchés de services de 10 000 $ et moins

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Number of Service Contracts $10K and under |
| Nom de la zone FR | Nombre de marchés de services de 10 000 $ et moins |
| ID | contract_service_number_of |
| Description EN | It is recommended for this field to be populated with the total number of services contracts entered into with a value of $10,000 and under. This includes services contracts entered into and subsequently amended in the same calendar year to an amended contract value of $10,000 and under. |
| Description FR | Il est recommandé de saisir dans ce champ le nombre total de marchés de services conclus d’une valeur de 10 000 $ ou moins, ce qui comprend les marchés de services conclus et modifiés par la suite au cours de la même année civile et d’une valeur de 10 000 $ ou moins. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Integer |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 100 |

### 1-6 Marchés de services de 10 000 $ ou moins - Valeur d’origine

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Service Contracts $10K and under - Original Value |
| Nom de la zone FR | Marchés de services de 10 000 $ ou moins - Valeur d’origine |
| ID | contracts_service_original_value |
| Description EN | It is recommended for this field to be populated with the value of all service contracts with a value $10,000 and under, at the time of contract entry. This value should be in Canadian currency and include all applicable taxes. |
| Description FR | Il est recommandé de saisir dans ce champ la valeur des marchés de services de 10 000 $ ou moins au moment de la conclusion du marché. Cette valeur doit être exprimée en dollars canadiens et inclure toutes les taxes qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 50000.00 |

### 1-7 Modifications de marché de services de -10 000 $ à 10 000 $ - Valeur nette des modifications

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Service Contracts from -$10K to $10K - Net Amendment Value |
| Nom de la zone FR | Modifications de marché de services de -10 000 $ à 10 000 $ - Valeur nette des modifications |
| ID | contracts_service_amendment_value |
| Description EN | It is recommended for this field to be populated with the value of all net amendments to service contracts (that is, all positive and negative amendments) with a value from -$10,000 to $10,000. This value should be in Canadian currency and include all applicable taxes. An amendment should be reported either quarterly or annually. Reporting an amendment both quarterly and annually would result in double counting of the amendment’s value when calculating the total contracting activity of an organization. |
| Description FR | Il est recommandé de saisir dans ce champ la valeur nette de toutes les modifications de marchés de services (c’est-à-dire, toutes les modifications positives et négatives) de -10 000 $ à 10 000 $. Cette valeur doit être exprimée en dollars canadiens et inclure toutes les taxes qui s’appliquent. Une modification doit faire l’objet d’une déclaration trimestrielle ou annuelle. La déclaration d’une modification de façon trimestrielle et annuelle donnerait lieu au double dénombrement de la valeur de la modification au moment de calculer le total de l’activité contractuelle d’une organisation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 500.00 |

### 1-8 Nombre de marchés de services de construction de 10 000 $ et moins

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Number of Construction Contracts $10K and under |
| Nom de la zone FR | Nombre de marchés de services de construction de 10 000 $ et moins |
| ID | contract_construction_number_of |
| Description EN | It is recommended for this field to be populated with the total number of construction contracts entered into with a value of $10,000 and under. This includes construction contracts entered into and subsequently amended in the same calendar year to an amended contract value of $10,000 and under. |
| Description FR | Il est recommandé de saisir dans ce champ le nombre total de marchés de services de construction conclus d’une valeur de 10 000 $ ou moins, ce qui comprend les marchés de services de construction conclus et modifiés par la suite au cours de la même année civile et d’une valeur de 10 000 $ ou moins. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Integer |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 100 |

### 1-9 Marchés de services de construction de 10 000 $ et moins - Valeur d’origine

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Construction Contracts $10K and under - Original Value |
| Nom de la zone FR | Marchés de services de construction de 10 000 $ et moins - Valeur d’origine |
| ID | contracts_construction_original_value |
| Description EN | It is recommended for this field to be populated with the value of all construction contracts with a value $10,000 and under, at the time of contract entry. This value should be in Canadian currency and include all applicable taxes. |
| Description FR | Il est recommandé de saisir dans ce champ la valeur des marchés de services de construction de 10 000 $ ou moins au moment de la conclusion du marché. Cette valeur doit être exprimée en dollars canadiens et inclure toutes les taxes qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 50000.00 |

### 1-10 Modifications de marché de services de construction de -10 000 $ à 10 000 $ - Valeur nette des modifications

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Construction Contracts Amendments from -$10K to $10K - Net Amendment Value |
| Nom de la zone FR | Modifications de marché de services de construction de -10 000 $ à 10 000 $ - Valeur nette des modifications |
| ID | contracts_construction_amendment_value |
| Description EN | It is recommended for this field to be populated with the value of all net amendments to construction contracts (that is, all positive and negative amendments) with a value from -$10,000 to $10,000. This value should be in Canadian currency and include all applicable taxes. An amendment should be reported either quarterly or annually. Reporting an amendment both quarterly and annually would result in double counting of the amendment’s value when calculating the total contracting activity of an organization. |
| Description FR | Il est recommandé de saisir dans ce champ la valeur nette de toutes les modifications de marchés de services de construction (c’est-à-dire, toutes les modifications positives et négatives) de -10 000 $ à 10 000 $. Cette valeur doit être exprimée en dollars canadiens et inclure toutes les taxes qui s’appliquent. Une modification doit faire l’objet d’une déclaration trimestrielle ou annuelle. La déclaration d’une modification de façon trimestrielle et annuelle donnerait lieu au double dénombrement de la valeur de la modification au moment de calculer le total de l’activité contractuelle d’une organisation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 500.00 |

### 1-11 Nombre d'opérations réalisées au moyen de la carte d'acquisition pour toutes les valeurs en dollars

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Number of Acquisition Card Transactions for all Dollar Values |
| Nom de la zone FR | Nombre d'opérations réalisées au moyen de la carte d'acquisition pour toutes les valeurs en dollars |
| ID | acquisition_card_transactions_number_of |
| Description EN | It is recommended for this field to be populated with the total number of all acquisition card transactions for all dollar values. |
| Description FR | Il est recommandé de saisir dans ce champ le nombre total d’opérations effectuées par carte d’achat, peu importe le montant. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Integer |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 100 |

### 1-12 Carte d'acquisition pour toutes les valeurs en dollars – Valeur totale

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Acquisition Card Transactions for all Dollar Values – Total Value |
| Nom de la zone FR | Carte d'acquisition pour toutes les valeurs en dollars – Valeur totale |
| ID | acquisition_card_transactions_total_value |
| Description EN | It is recommended for this field to be populated with the sum of all dollar values for all acquisition card transactions. This value should be in Canadian currency and include all applicable taxes. |
| Description FR | Il est recommandé de saisir dans ce champ la somme des montants de toutes les opérations effectuées par carte d’achat. Cette valeur doit être exprimée en dollars canadiens et inclure toutes les taxes qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Numeric |
| Validation EN |   |
| Validation FR |   |
| Exemple de valeur | 50000.00 |


---
