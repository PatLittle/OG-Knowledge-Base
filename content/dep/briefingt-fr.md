# Profil des éléments de données: Proactive Publication - Briefing Note Titles and Numbers

_Source YAML: `briefingt.yaml`_

## Ressources publiées

- [Divulgation proactive - titres at numéros des notes d’information](https://ouvert.canada.ca/data/fr/dataset/ee9bd7e8-90a5-45db-9287-85c8cf3589b6/resource/299a2e26-5103-4a49-ac3a-53db9fcc06c7)
- [Publication proactive - Titres et numéros des notes d’information rien à signaler](https://ouvert.canada.ca/data/fr/dataset/ee9bd7e8-90a5-45db-9287-85c8cf3589b6/resource/5e28b544-720b-4745-9e55-3aac6464a4fb)
- Schéma recombinant: https://ouvert.canada.ca/data/fr/recombinant-schema/briefingt.json


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

## Proactive Publication - Briefing Note Titles and Numbers

### 1-1 Numéro de suivi

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Briefing Note Number |
| Nom de la zone FR | Numéro de suivi |
| ID | tracking_number |
| Description EN | This field will display the internal tracking number of the Briefing Note. |
| Description FR | Ce champ affichera le numéro de suivi interne de la note de breffage. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | 10089-4266 |

### 1-2 Titre (en anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Title (English) |
| Nom de la zone FR | Titre (en anglais) |
| ID | title_en |
| Description EN | This field is populated by the user with the official title of the Briefing Note, in English. |
| Description FR | Ce champ est rempli par l'utilisateur avec le titre officiel de la note de breffage, en anglais. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | Partner views |

### 1-3 Titre (en français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Title (French) |
| Nom de la zone FR | Titre (en français) |
| ID | title_fr |
| Description EN | This field is populated by the user with the official title of the Briefing Note, in French. |
| Description FR | Ce champ est rempli par l'utilisateur avec le titre officiel de la note de breffage, en français. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | Opinions des partenaires |

### 1-4 Secteur d’origine (en anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Originating Sector (English) |
| Nom de la zone FR | Secteur d’origine (en anglais) |
| ID | originating_sector_en |
| Description EN | The Sector, Branch, or Division where the Briefing Note originated in English. If there are multiple sectors/branches/divisions, they may be separated by a semicolon (;) |
| Description FR | Le secteur, la direction ou la division d'où provient la note de breffage en anglais. S'il y a plusieurs secteurs/directions/divisions, on peut les séparer par un point-virgule (;). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | Finance; Treasurer |

### 1-5 Secteur d’origine (en français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Originating Sector (French) |
| Nom de la zone FR | Secteur d’origine (en français) |
| ID | originating_sector_fr |
| Description EN | The Sector, Branch, or Division where the Briefing Note originated in French. If there are multiple sectors/branches/divisions, they may be separated by a semicolon (;) |
| Description FR | Le secteur, la direction ou la division d'où provient la note de breffage en français S'il y a plusieurs secteurs/directions/divisions, on peut les séparer par un point-virgule (;). |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | Finance; Trésorier |

### 1-6 Destinataire

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Addressee |
| Nom de la zone FR | Destinataire |
| ID | addressee |
| Description EN | This field will display the person to whom the briefing note is addressed. |
| Description FR | Ce champ affichera le nom de la personne à qui la note de breffage est adressée. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | M |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| M | Minister | Ministre |
| D | Deputy head (including a person appointed to a position of an equivalent rank) | Administrateurs généraux (y compris une personne nommée à un poste de rang équivalent) |

### 1-7 Date de réception

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Date Received |
| Nom de la zone FR | Date de réception |
| ID | date_received |
| Description EN | This field will display the date on which the Briefing Note was received in the addressee's office. |
| Description FR | Ce champ affichera la date à laquelle la note de breffage a été reçue par le bureau du destinataire. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Date |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | 2018-04-01 |

### 1-8 Mesure requise

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Action Required |
| Nom de la zone FR | Mesure requise |
| ID | action_required |
| Description EN | The Action Required is the purpose of the briefing note; For Information: If the item is being routed solely for the information of the addressee; For Approval/Signature: If the item is for approval or signature only of the addressee; For Decision: If the item requests the addressee make a decisive decision |
| Description FR | La mesure requise représente le but de la note de breffage; À titre d'information : Si l'élément n'est envoyé que pour informer le destinataire; Pour approbation/signature; Si l'élément est envoyé à des fins d'approbation ou de signature seulement par le destinataire; Pour décision : Si l'élément demande au destinataire de prendre une décision décisive. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | D |

Valeurs de la liste contrôlée :

| Code | Anglais | Français |
| --- | --- | --- |
| I | For Information | Pour Information |
| D | For Decision | Décision attendue |
| S | For Signature | Pour Signature |

### 1-9 Renseignements supplémentaires (en anglais)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Additional Information (English) |
| Nom de la zone FR | Renseignements supplémentaires (en anglais) |
| ID | additional_information_en |
| Description EN | This field will display any additional information/comments for the Briefing Note, in English. |
| Description FR | Ce champ affichera de plus amples renseignements/commentaires concernant la note de breffage, en anglais. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | None |
| Validation FR | None |
| Exemple de valeur | Relates to the family services program reform |

### 1-10 Renseignements supplémentaires (en français)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Additional Information (French) |
| Nom de la zone FR | Renseignements supplémentaires (en français) |
| ID | additional_information_fr |
| Description EN | This field will display any additional information/comments for the Briefing Note, in French. |
| Description FR | Ce champ affichera de plus amples renseignements/commentaires concernant la note de breffage, en français. |
| Obligation EN | Optional |
| Obligation FR | Facultatif |
| Occurrence | Une seule |
| Type de format | Text |
| Validation EN | None |
| Validation FR | None |
| Exemple de valeur | Programme des services familiaux |

## Proactive Publication - Briefing Note Titles and Numbers

### 2-1 Année

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Year |
| Nom de la zone FR | Année |
| ID | year |
| Description EN | This tab / field in the template is only populated if there are no briefing notes for the reporting period. This field should be populated with the year of the reporting period. |
| Description FR | Cet onglet/champ du modèle n’est rempli que s'il n'y a pas de notes de breffage pour la période d’établissement de rapports. Ce champ doit être rempli avec l’année de la période d’établissement de rapports. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Integer |
| Validation EN | This field must not be empty |
| Validation FR | Ce champ ne doit pas être vide |
| Exemple de valeur | 2023 |

### 2-2 Mois (1-12)

| Attribut | Description de l’attribut |
| --- | --- |
| Nom de la zone EN | Month (1-12) |
| Nom de la zone FR | Mois (1-12) |
| ID | month |
| Description EN | This tab / field in the template is only populated if there are no briefing notes for the reporting period. This field should be populated with the month of the reporting period. |
| Description FR | Cet onglet/champ du modèle n’est rempli que s'il n'y a pas de notes de breffage pour la période d’établissement de rapports. Ce champ doit être rempli avec le mois de la période d’établissement de rapports. |
| Obligation EN | Mandatory |
| Obligation FR | Obligatoire |
| Occurrence | Une seule |
| Type de format | Integer |
| Validation EN | Must be in the range of 1-12 (representing January-December). |
| Validation FR | Doit être dans la gamme de 1-12 (représente janvier-décembre) |
| Exemple de valeur | 10 |


---
