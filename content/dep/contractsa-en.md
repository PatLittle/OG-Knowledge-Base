# Data Element Profile: Proactive Publication - Aggregated Contracts from -$10,000 to $10,000

_Source YAML: `contractsa.yaml`_

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

## Proactive Publication - Aggregated Contracts from -$10,000 to $10,000

### 1-1 Calendar Year Reporting Period

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Calendar Year Reporting Period |
| Field Name FR | Période de déclaration |
| ID | year |
| Description EN | It is recommended for this field to be populated in the standard format described below. For example, if the template is being reported for the 2017 calendar year, the entry will be populated as 2017. |
| Description FR | Il est recommandé de remplir ce champ en utilisant le format standard décrit ci-dessous. Par exemple, si le modèle est déclaré pour l’année civile 2017, il faut inscrire 2017. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN |   |
| Validation FR |   |
| Example Value | 2016 |

### 1-2 Number of Goods Contracts $10K and under

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of Goods Contracts $10K and under |
| Field Name FR | Nombre de marchés de biens de 10 000 $ et moins |
| ID | contract_goods_number_of |
| Description EN | It is recommended for this field to be populated with the total number of goods contracts entered into with a value of $10,000 and under. This includes goods contracts entered into and subsequently amended in the same calendar year to an amended contract value of $10,000 and under. |
| Description FR | Il est recommandé de saisir dans ce champ le nombre total de marchés de biens conclus d’une valeur de 10 000 $ ou moins, ce qui comprend les marchés de biens conclus et modifiés par la suite au cours de la même année civile et d’une valeur de 10 000 $ ou moins. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN |   |
| Validation FR |   |
| Example Value | 100 |

### 1-3 Goods Contracts $10K and under - Original Value

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Goods Contracts $10K and under - Original Value |
| Field Name FR | Marchés de biens de 10 000 $ et moins - Valeur d’origine |
| ID | contracts_goods_original_value |
| Description EN | It is recommended for this field to be populated with the value of all goods contracts with a value of $10,000 and under, at the time of contract entry. This value should be in Canadian currency and include all applicable taxes. |
| Description FR | Il est recommandé de saisir dans ce champ la valeur des marchés de biens de 10 000 $ ou moins au moment de la conclusion du marché. Cette valeur doit être exprimée en dollars canadiens et inclure toutes les taxes qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 50000.00 |

### 1-4 Goods Contracts Amendments from -$10K to $10K - Net Amendment Value

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Goods Contracts Amendments from -$10K to $10K - Net Amendment Value |
| Field Name FR | Modifications de marchés de biens de -10 000 $ à 10 000 $ - Valeur nette des modifications |
| ID | contracts_goods_amendment_value |
| Description EN | It is recommended for this field to be populated with the value of all net amendments to goods contracts (that is, all positive and negative amendments) with a value from -$10,000 to $10,000. This value should be in Canadian currency and include all applicable taxes. An amendment should be reported either quarterly or annually. Reporting an amendment both quarterly and annually would result in double counting of the amendment’s value when calculating the total contracting activity of an organization. |
| Description FR | Il est recommandé de saisir dans ce champ la valeur nette de toutes les modifications de marché de biens (c’est-à-dire, toutes les modifications positives et négatives) de -10 000 $ à 10 000 $. Cette valeur doit être exprimée en dollars canadiens et inclure toutes les taxes qui s’appliquent. Une modification doit faire l’objet d’une déclaration trimestrielle ou annuelle. La déclaration d’une modification de façon trimestrielle et annuelle donnerait lieu au double dénombrement de la valeur de la modification au moment de calculer le total de l’activité contractuelle d’une organisation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 500.00 |

### 1-5 Number of Service Contracts $10K and under

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of Service Contracts $10K and under |
| Field Name FR | Nombre de marchés de services de 10 000 $ et moins |
| ID | contract_service_number_of |
| Description EN | It is recommended for this field to be populated with the total number of services contracts entered into with a value of $10,000 and under. This includes services contracts entered into and subsequently amended in the same calendar year to an amended contract value of $10,000 and under. |
| Description FR | Il est recommandé de saisir dans ce champ le nombre total de marchés de services conclus d’une valeur de 10 000 $ ou moins, ce qui comprend les marchés de services conclus et modifiés par la suite au cours de la même année civile et d’une valeur de 10 000 $ ou moins. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN |   |
| Validation FR |   |
| Example Value | 100 |

### 1-6 Service Contracts $10K and under - Original Value

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service Contracts $10K and under - Original Value |
| Field Name FR | Marchés de services de 10 000 $ ou moins - Valeur d’origine |
| ID | contracts_service_original_value |
| Description EN | It is recommended for this field to be populated with the value of all service contracts with a value $10,000 and under, at the time of contract entry. This value should be in Canadian currency and include all applicable taxes. |
| Description FR | Il est recommandé de saisir dans ce champ la valeur des marchés de services de 10 000 $ ou moins au moment de la conclusion du marché. Cette valeur doit être exprimée en dollars canadiens et inclure toutes les taxes qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 50000.00 |

### 1-7 Service Contracts from -$10K to $10K - Net Amendment Value

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Service Contracts from -$10K to $10K - Net Amendment Value |
| Field Name FR | Modifications de marché de services de -10 000 $ à 10 000 $ - Valeur nette des modifications |
| ID | contracts_service_amendment_value |
| Description EN | It is recommended for this field to be populated with the value of all net amendments to service contracts (that is, all positive and negative amendments) with a value from -$10,000 to $10,000. This value should be in Canadian currency and include all applicable taxes. An amendment should be reported either quarterly or annually. Reporting an amendment both quarterly and annually would result in double counting of the amendment’s value when calculating the total contracting activity of an organization. |
| Description FR | Il est recommandé de saisir dans ce champ la valeur nette de toutes les modifications de marchés de services (c’est-à-dire, toutes les modifications positives et négatives) de -10 000 $ à 10 000 $. Cette valeur doit être exprimée en dollars canadiens et inclure toutes les taxes qui s’appliquent. Une modification doit faire l’objet d’une déclaration trimestrielle ou annuelle. La déclaration d’une modification de façon trimestrielle et annuelle donnerait lieu au double dénombrement de la valeur de la modification au moment de calculer le total de l’activité contractuelle d’une organisation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 500.00 |

### 1-8 Number of Construction Contracts $10K and under

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of Construction Contracts $10K and under |
| Field Name FR | Nombre de marchés de services de construction de 10 000 $ et moins |
| ID | contract_construction_number_of |
| Description EN | It is recommended for this field to be populated with the total number of construction contracts entered into with a value of $10,000 and under. This includes construction contracts entered into and subsequently amended in the same calendar year to an amended contract value of $10,000 and under. |
| Description FR | Il est recommandé de saisir dans ce champ le nombre total de marchés de services de construction conclus d’une valeur de 10 000 $ ou moins, ce qui comprend les marchés de services de construction conclus et modifiés par la suite au cours de la même année civile et d’une valeur de 10 000 $ ou moins. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN |   |
| Validation FR |   |
| Example Value | 100 |

### 1-9 Construction Contracts $10K and under - Original Value

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Construction Contracts $10K and under - Original Value |
| Field Name FR | Marchés de services de construction de 10 000 $ et moins - Valeur d’origine |
| ID | contracts_construction_original_value |
| Description EN | It is recommended for this field to be populated with the value of all construction contracts with a value $10,000 and under, at the time of contract entry. This value should be in Canadian currency and include all applicable taxes. |
| Description FR | Il est recommandé de saisir dans ce champ la valeur des marchés de services de construction de 10 000 $ ou moins au moment de la conclusion du marché. Cette valeur doit être exprimée en dollars canadiens et inclure toutes les taxes qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 50000.00 |

### 1-10 Construction Contracts Amendments from -$10K to $10K - Net Amendment Value

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Construction Contracts Amendments from -$10K to $10K - Net Amendment Value |
| Field Name FR | Modifications de marché de services de construction de -10 000 $ à 10 000 $ - Valeur nette des modifications |
| ID | contracts_construction_amendment_value |
| Description EN | It is recommended for this field to be populated with the value of all net amendments to construction contracts (that is, all positive and negative amendments) with a value from -$10,000 to $10,000. This value should be in Canadian currency and include all applicable taxes. An amendment should be reported either quarterly or annually. Reporting an amendment both quarterly and annually would result in double counting of the amendment’s value when calculating the total contracting activity of an organization. |
| Description FR | Il est recommandé de saisir dans ce champ la valeur nette de toutes les modifications de marchés de services de construction (c’est-à-dire, toutes les modifications positives et négatives) de -10 000 $ à 10 000 $. Cette valeur doit être exprimée en dollars canadiens et inclure toutes les taxes qui s’appliquent. Une modification doit faire l’objet d’une déclaration trimestrielle ou annuelle. La déclaration d’une modification de façon trimestrielle et annuelle donnerait lieu au double dénombrement de la valeur de la modification au moment de calculer le total de l’activité contractuelle d’une organisation. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 500.00 |

### 1-11 Number of Acquisition Card Transactions for all Dollar Values

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Number of Acquisition Card Transactions for all Dollar Values |
| Field Name FR | Nombre d'opérations réalisées au moyen de la carte d'acquisition pour toutes les valeurs en dollars |
| ID | acquisition_card_transactions_number_of |
| Description EN | It is recommended for this field to be populated with the total number of all acquisition card transactions for all dollar values. |
| Description FR | Il est recommandé de saisir dans ce champ le nombre total d’opérations effectuées par carte d’achat, peu importe le montant. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN |   |
| Validation FR |   |
| Example Value | 100 |

### 1-12 Acquisition Card Transactions for all Dollar Values – Total Value

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Acquisition Card Transactions for all Dollar Values – Total Value |
| Field Name FR | Carte d'acquisition pour toutes les valeurs en dollars – Valeur totale |
| ID | acquisition_card_transactions_total_value |
| Description EN | It is recommended for this field to be populated with the sum of all dollar values for all acquisition card transactions. This value should be in Canadian currency and include all applicable taxes. |
| Description FR | Il est recommandé de saisir dans ce champ la somme des montants de toutes les opérations effectuées par carte d’achat. Cette valeur doit être exprimée en dollars canadiens et inclure toutes les taxes qui s’appliquent. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Numeric |
| Validation EN |   |
| Validation FR |   |
| Example Value | 50000.00 |


---
