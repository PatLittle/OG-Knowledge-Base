# Data Element Profile: Proactive Publication - Briefing Note Titles and Numbers

_Source YAML: `briefingt.yaml`_


Table of Contents

- [Published resources](#published-resources)
- [Legend](#legend)
- [Proactive Disclosure - Briefing Note Titles and Numbers](#proactive-disclosure-briefing-note-titles-and-numbers)
- [Proactive Publication - Briefing Note Titles and Numbers Nothing to Report](#proactive-publication-briefing-note-titles-and-numbers-nothing-to-report)

<div id="published-resources"></div>

## Published resources

Published data: [Proactive Disclosure - Briefing Note Titles and Numbers](https://open.canada.ca/data/dataset/ee9bd7e8-90a5-45db-9287-85c8cf3589b6/resource/299a2e26-5103-4a49-ac3a-53db9fcc06c7)
Published data: [Proactive Publication - Briefing Note Titles and Numbers Nothing to Report](https://open.canada.ca/data/dataset/ee9bd7e8-90a5-45db-9287-85c8cf3589b6/resource/5e28b544-720b-4745-9e55-3aac6464a4fb)
Recombinant schema: https://open.canada.ca/data/en/recombinant-schema/briefingt.json


<div id="legend"></div>

## Legend

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

<div id="proactive-disclosure-briefing-note-titles-and-numbers"></div>

## Proactive Disclosure - Briefing Note Titles and Numbers

### 1-1 Briefing Note Number

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Briefing Note Number |
| Field Name FR | Numéro de suivi |
| ID | tracking_number |
| Description EN | This field will display the internal tracking number of the Briefing Note. |
| Description FR | Ce champ affichera le numéro de suivi interne de la note de breffage. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 10089-4266 |

### 1-2 Title (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Title (English) |
| Field Name FR | Titre (en anglais) |
| ID | title_en |
| Description EN | This field is populated by the user with the official title of the Briefing Note, in English. |
| Description FR | Ce champ est rempli par l'utilisateur avec le titre officiel de la note de breffage, en anglais. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Partner views |

### 1-3 Title (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Title (French) |
| Field Name FR | Titre (en français) |
| ID | title_fr |
| Description EN | This field is populated by the user with the official title of the Briefing Note, in French. |
| Description FR | Ce champ est rempli par l'utilisateur avec le titre officiel de la note de breffage, en français. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Opinions des partenaires |

### 1-4 Originating Sector (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Originating Sector (English) |
| Field Name FR | Secteur d’origine (en anglais) |
| ID | originating_sector_en |
| Description EN | The Sector, Branch, or Division where the Briefing Note originated in English. If there are multiple sectors/branches/divisions, they may be separated by a semicolon (;) |
| Description FR | Le secteur, la direction ou la division d'où provient la note de breffage en anglais. S'il y a plusieurs secteurs/directions/divisions, on peut les séparer par un point-virgule (;). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Finance; Treasurer |

### 1-5 Originating Sector (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Originating Sector (French) |
| Field Name FR | Secteur d’origine (en français) |
| ID | originating_sector_fr |
| Description EN | The Sector, Branch, or Division where the Briefing Note originated in French. If there are multiple sectors/branches/divisions, they may be separated by a semicolon (;) |
| Description FR | Le secteur, la direction ou la division d'où provient la note de breffage en français S'il y a plusieurs secteurs/directions/divisions, on peut les séparer par un point-virgule (;). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | Finance; Trésorier |

### 1-6 Addressee

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Addressee |
| Field Name FR | Destinataire |
| ID | addressee |
| Description EN | This field will display the person to whom the briefing note is addressed. |
| Description FR | Ce champ affichera le nom de la personne à qui la note de breffage est adressée. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | M |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| M | Minister | Ministre |
| D | Deputy head (including a person appointed to a position of an equivalent rank) | Administrateurs généraux (y compris une personne nommée à un poste de rang équivalent) |

### 1-7 Date Received

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Date Received |
| Field Name FR | Date de réception |
| ID | date_received |
| Description EN | This field will display the date on which the Briefing Note was received in the addressee's office. |
| Description FR | Ce champ affichera la date à laquelle la note de breffage a été reçue par le bureau du destinataire. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Date |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 2018-04-01 |

### 1-8 Action Required

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Action Required |
| Field Name FR | Mesure requise |
| ID | action_required |
| Description EN | The Action Required is the purpose of the briefing note; For Information: If the item is being routed solely for the information of the addressee; For Approval/Signature: If the item is for approval or signature only of the addressee; For Decision: If the item requests the addressee make a decisive decision |
| Description FR | La mesure requise représente le but de la note de breffage; À titre d'information : Si l'élément n'est envoyé que pour informer le destinataire; Pour approbation/signature; Si l'élément est envoyé à des fins d'approbation ou de signature seulement par le destinataire; Pour décision : Si l'élément demande au destinataire de prendre une décision décisive. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | D |

Controlled List Values:

| Code | English | French |
| --- | --- | --- |
| I | For Information | Pour Information |
| D | For Decision | Décision attendue |
| S | For Signature | Pour Signature |

### 1-9 Additional Information (English)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Additional Information (English) |
| Field Name FR | Renseignements supplémentaires (en anglais) |
| ID | additional_information_en |
| Description EN | This field will display any additional information/comments for the Briefing Note, in English. |
| Description FR | Ce champ affichera de plus amples renseignements/commentaires concernant la note de breffage, en anglais. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | None |
| Validation FR | None |
| Example Value | Relates to the family services program reform |

### 1-10 Additional Information (French)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Additional Information (French) |
| Field Name FR | Renseignements supplémentaires (en français) |
| ID | additional_information_fr |
| Description EN | This field will display any additional information/comments for the Briefing Note, in French. |
| Description FR | Ce champ affichera de plus amples renseignements/commentaires concernant la note de breffage, en français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Single |
| Format Type | Text |
| Validation EN | None |
| Validation FR | None |
| Example Value | Programme des services familiaux |

<div id="proactive-publication-briefing-note-titles-and-numbers-nothing-to-report"></div>

## Proactive Publication - Briefing Note Titles and Numbers Nothing to Report

### 2-1 Year

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Year |
| Field Name FR | Année |
| ID | year |
| Description EN | This tab / field in the template is only populated if there are no briefing notes for the reporting period. This field should be populated with the year of the reporting period. |
| Description FR | Cet onglet/champ du modèle n’est rempli que s'il n'y a pas de notes de breffage pour la période d’établissement de rapports. Ce champ doit être rempli avec l’année de la période d’établissement de rapports. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Example Value | 2023 |

### 2-2 Month (1-12)

| Attribute | Attribute Description |
| --- | --- |
| Field Name EN | Month (1-12) |
| Field Name FR | Mois (1-12) |
| ID | month |
| Description EN | This tab / field in the template is only populated if there are no briefing notes for the reporting period. This field should be populated with the month of the reporting period. |
| Description FR | Cet onglet/champ du modèle n’est rempli que s'il n'y a pas de notes de breffage pour la période d’établissement de rapports. Ce champ doit être rempli avec le mois de la période d’établissement de rapports. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Single |
| Format Type | Integer |
| Validation EN | Must be in the range of 1-12 (representing January-December). |
| Validation FR | Doit être dans la gamme de 1-12 (représente janvier-décembre) |
| Example Value | 10 |


---
