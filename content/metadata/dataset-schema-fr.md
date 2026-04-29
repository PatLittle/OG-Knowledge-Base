# Schéma Jeu de données (dataset)

Source: `https://open.canada.ca/data/api/action/scheming_dataset_schema_show?type=dataset&expanded=true`

Si **Extrait de formulaire** est vide, ce champ est **API seulement**.

## Champs du jeu de données (53)

| Champ | Étiquette | Texte d’aide | Obligatoire | Extrait de formulaire | Preset | Validateurs | Notes |
|---|---|---|---|---|---|---|---|
| id |  |  | Non | API seulement | canada_dataset_id | canada_validate_generate_uuid unicode_safe name_validator package_id_does_not_exist |  |
| name |  |  | Non | API seulement | canada_dataset_name | if_empty_same_as(id) unicode_safe not_empty canada_validate_generate_uuid |  |
| collection | Type de collection | Collection (propre au domaine) à laquelle appartient le dossier de métadonnées, par exemple : données non spatiales | Oui | select.html | canada_collection | scheming_required string_safe scheming_choices | choices=17 |
| metadata_contact | Contact métadonnée |  | Non | API seulement | fluent_text | fluent_text |  |
| parent_id | Identifiant parent |  | Non | API seulement |  | scheming_required string_safe |  |
| hierarchy_level | Portée hiérarchique |  | Non | API seulement |  | scheming_required string_safe |  |
| file_id | Identifiant métadonnées |  | Non | API seulement |  | scheming_required string_safe |  |
| short_key | Identifiant court |  | Non | API seulement |  | scheming_required string_safe |  |
| title_translated | Titre | Nom français désignant le jeu de données | Oui | fluent_text.html | canada_title | fluent_text |  |
| owner_org | Éditeur - Nom actuel de l’organisation | Titre de l’organisation actuelle (organisme ou ministère du GC) principalement responsable de publier le jeu de données | Oui | organization_autocomplete.html | canada_owner_org | scheming_required string_safe owner_org_validator |  |
| org_title_at_publication | Organisation - Titre lors de la publication | Nom de l’organisation au moment de la publication, en français. Veuillez laisser le champ libre si le nom de l'organisation lors de la publication est identique au nom actuel de votre organisation. | Non | fluent_text.html | canada_org_title_at_publication | fluent_text scheming_required json_string canada_copy_from_org_name |  |
| org_section | Éditeur - Organisation - Nom de la section | Noms français des groupes de travail, des unités de travail, des unités opérationnelles, etc. de l’organisation qui publie le jeu de données (séparer les multiples noms par des virgules) | Non | fluent_text.html | canada_org_section_name | fluent_text |  |
| creator | Auteur | Entités individuelles (personnes) principalement responsables de produire le jeu de données (séparer les multiples entités par des virgules) | Non | API seulement | canada_creator | ignore_missing string_safe |  |
| position_name | Nom position |  | Non | API seulement | fluent_text | fluent_text |  |
| responsible_role | Rôle |  | Non | API seulement |  | scheming_required string_safe |  |
| contact_information | Information contact |  | Non | API seulement |  | scheming_required json_string_has_en_fr_keys |  |
| topic_category | Catégorie thématique |  | Non | API seulement |  | scheming_multiple_choice | choices=19 |
| contributor | Contributeur | Les noms français des entités (personnes, groupes, ministères ou organismes du GC) qui ont apporté une contribution au jeu de données (séparer les multiples entités par des virgules) | Non | fluent_text.html | canada_contributor | fluent_text |  |
| maintainer_email | Courriel - Personne-ressource | Courriel de la personne-ressource à contacter au sujet du jeu de données ou de l’ensemble de données. L’ajout d’une adresse de courriel permet aux utilisateurs du portail d’envoyer des commentaires et des questions. Ce champ est facultatif, mais recommandé. | Non | API seulement | canada_maintainer_email | scheming_required string_safe strip_value email_validator |  |
| maintainer_contact_form | Formulaire de contact |  | Non | API seulement | canada_maintainer_contact_form | fluent_text |  |
| credit | Reconnaissance |  | Non | API seulement | canada_credit |  | repeating_subfields |
| notes_translated | Description | Description du jeu de données, en anglais. La description peut comprendre un résumé, une table des matières ou un texte libre. | Oui | fluent_markdown.html | canada_notes | fluent_text |  |
| keywords | Mots clés | Mots ou phrases couramment utilisés qui décrivent le jeu de données, en français. (Séparer les mots ou phrases par une virgule) | Oui | fluent_tags.html | canada_keywords | fluent_tags |  |
| subject | Sujet | Le sujet du contenu du jeu de données. Vous pouvez sélectionner ou désélectionner de multiples sujets (Ctrl+Clic) | Oui | multiple_select.html | canada_subject | scheming_multiple_choice | choices=19 |
| audience | Audience | Description de l’audience ou du groupe de personnes pour lequel le jeu de données décrit est destiné ou utile. Vous pouvez sélectionner ou désélectionner de multiples options (Ctrl+Clic) | Non | multiple_select.html | canada_audience | scheming_multiple_choice | choices=24 |
| place_of_publication | Endroit de publication | La région où le jeu de données a été publié initialement. Vous pouvez sélectionner ou désélectionner de multiples options (Ctrl+Clic) | Non | multiple_select.html | canada_geographic_region | scheming_multiple_choice | choices=310 |
| spatial | Élément spatial | Étendue de l’applicabilité spatiale d’un produit. Cet élément peut inclure un cadre de délimitation ou une chaîne GeoJson. | Non | API seulement | canada_spatial | scheming_required string_safe geojson_validator |  |
| geographic_region | Nom de la région géographique | Région géographique d’un jeu de données. Vous pouvez sélectionner ou désélectionner de multiples régions (Ctrl+Clic) | Non | multiple_select.html | canada_geographic_region | scheming_multiple_choice | choices=310 |
| time_period_coverage_start | Couverture de la période de temps - date de début | Date de début de la période couverte par le jeu de données (AAAA-MM-JJ) | Non | date.html | canada_time_period_coverage_start | scheming_required string_safe isodate |  |
| time_period_coverage_end | Couverture de la période de temps - date de fin | Date de fin de la période couverte par le jeu de données (AAAA-MM-JJ) | Non | date.html | canada_time_period_coverage_end | scheming_required string_safe isodate |  |
| frequency | Fréquence d'entretien et de mise à jour | Fréquence à laquelle les changements et les ajouts sont apportés au jeu de données initial | Oui | select.html | canada_frequency | scheming_required string_safe scheming_choices | choices=21 |
| date_published | Date de publication | Date de publication du jeu de données (AAAA-MM-JJ) | Oui | date.html | canada_date_published | scheming_required string_safe isodate no_future_date |  |
| date_modified | Date de modification | Date à laquelle le jeu de données a été mis à jour (AAAA-MM-JJ) | Non | date.html | canada_date_modified | scheming_required string_safe isodate no_future_date |  |
| program_page_url | URL de la page d'accueil | Programme ou page d’accueil pouvant être consulté pour obtenir de l’information supplémentaire ou contextuelle au sujet du jeu de données, en français | Non | fluent_text.html | canada_program_page_url | fluent_text |  |
| federated_date_modified | Date de modification de l'jeu de données fédérées | Date à laquelle le jeu de données du partenaire de données fédérées a été modifié (AAAA-MM-JJ) | Non | API seulement | canada_federated_date_modified | scheming_required isodate convert_to_json_if_date |  |
| data_series_name | Nom de la série | Nom français de la série, ou du jeu de données globales, dont le jeu de données fait partie | Non | fluent_text.html | canada_data_series_name | fluent_text |  |
| data_series_issue_identification | Numéro de publication de la série | Identification en français des renseignements sur la publication de la série | Non | fluent_text.html | canada_data_series_issue_identification | fluent_text |  |
| digital_object_identifier | Identificateur d’objet numérique | L'identificateur d'objet numérique assigné au jeu de données. Pour obtenir de plus amples renseignements, veuillez consulter le site http://cisti-icist.nrc-cnrc.gc.ca/fra/services/icist/datacite-canada/index.html | Non | API seulement | canada_digital_object_identifier |  |  |
| reference_system_information | Information système référence |  | Non | API seulement |  | scheming_required string_safe |  |
| distributor | Distributeur |  | Non | API seulement |  | scheming_required json_string_has_en_fr_keys |  |
| status | État |  | Non | API seulement |  | scheming_required string_safe scheming_choices | choices=8 |
| association_type | Type association |  | Non | API seulement |  | scheming_multiple_choice | choices=6 |
| aggregate_identifier | Identifiant jeu données aggrégées |  | Non | API seulement |  | scheming_required string_safe |  |
| spatial_representation_type | Type représentation spatiale |  | Non | API seulement | canada_spatial_representation_type | scheming_multiple_choice | choices=6 |
| jurisdiction | Juridiction | Étendue de l’autorité judiciaire, de l’autorité d’application de la loi ou d’un autre type d’autorité. Par exemple, l'ordre de gouvernement ayant fourni le jeu de données. | Oui | select.html | canada_jurisdiction | scheming_required string_safe scheming_choices | choices=4 |
| license_id | Licence | Licence s’appliquant au jeu de données | Oui | license.html | canada_license_id | scheming_required string_safe license_choices |  |
| restrictions | Restrictions d'accès | Restrictions d’accès du jeu de données | Oui | select.html | canada_restrictions | scheming_required string_safe scheming_choices | choices=1 |
| imso_approval | Approbation |  | Oui | imso_approval_select.html | canada_imso_approval | scheming_required string_safe scheming_choices | choices=2 |
| ready_to_publish | Prêt à publier | La sélection de l’option « Oui » désigne le jeu de données comme prêt à être publié par l'entremise du Portail du gouvernement ouvert. Si l’option « Non » est sélectionnée, il sera sauvegardé comme une « ébauche ». Si le jeu de données a déjà été publié dans le portail, le fait de sélectionner « Non » fera en sorte qu’il ne le sera plus. | Oui | select.html | canada_ready_to_publish | scheming_required string_safe scheming_choices | choices=2 |
| portal_release_date | Date de lancement du portail | La date à laquelle le jeu de données peut être publié dans le portail (AAAA-MM-JJ) | Non | portal_release_date.html | canada_portal_release_date | protect_portal_release_date ignore_empty scheming_required isodate convert_to_json_if_date |  |
| presentation_form | Type de représentation spatiale | Le format dans lequel la ressource est disponible | Non | API seulement |  | scheming_required scheming_choices | choices=20 |
| display_flags | Display Flags |  | Non | API seulement |  | scheming_multiple_choice | choices=1 |
| relationship | Relation |  | Non | API seulement | canada_dataset_relationship |  | repeating_subfields |

## Champs de ressource (17)

| Champ | Étiquette | Texte d’aide | Obligatoire | Extrait de formulaire | Preset | Validateurs | Notes |
|---|---|---|---|---|---|---|---|
| unique_identifier | Identificateur unique | Expression ou chaîne unique désignant la ressource. | Non | API seulement | canada_resource_unique_identifier |  |  |
| name_translated | Titre | Nom français attribué à la ressource | Oui | fluent_text.html | canada_resource_name | fluent_text |  |
| relationship | Relation |  | Non | API seulement | canada_resource_relationship |  | repeating_subfields |
| date_published | Date de publication | Date officielle d’émission (c.-à-d. de publication) de la ressource | Non | date.html | canada_resource_date_published | scheming_required |  |
| resource_type | Type de contenu | Nature ou genre du contenu de la ressource | Oui | select.html | canada_resource_type | scheming_required canada_static_rtype_tabledesigner scheming_choices | choices=103 |
| size | Taille | Taille [estimative] d’une distribution en octets | Non | API seulement | canada_resource_size | ignore_missing int_validator |  |
| character_set | Jeu de caractères | Nom complet de la norme de codage des caractères utilisée pour le ressource | Non | select.html | canada_resource_character_set | scheming_required canada_static_charset_tabledesigner scheming_choices | choices=28 |
| format | Format | Format du fichier, support physique ou dimensions de la ressource | Non | select.html | canada_resource_format | canada_guess_resource_format scheming_required unicode_safe scheming_required scheming_choices | choices=130 |
| language | Langue | Langue de la ressource. Vous pouvez sélectionner ou désélectionner de multiples langues (Ctrl+Clic). | Oui | multiple_select.html | canada_resource_language | scheming_multiple_choice | choices=86 |
| url | Télécharger un URL | Emplacement pour l’accès en ligne aux fins de la distribution de la ressource. | Non | upload.html | canada_resource_url | canada_security_upload_presence canada_security_upload_type scheming_required unicode_safe remove_whitespace |  |
| data_quality | Les données comprennent les URI et les liens |  | Non | multiple_checkbox.html | canada_resource_data_quality | scheming_multiple_choice | choices=2 |
| schema |  |  | Non | API seulement | canada_resource_validation_schema | ignore |  |
| validation_options |  |  | Non | API seulement | canada_resource_validation_options | ignore |  |
| validation_status | Statut de validation |  | Non | API seulement | canada_resource_validation_status |  |  |
| validation_timestamp | Horodatage de la validation |  | Non | API seulement | canada_resource_validation_timestamp |  |  |
| related_type |  |  | Non | API seulement | _legacy_canada_related_type | ignore |  |
| related_relationship |  |  | Oui | API seulement | _legacy_canada_related_relationship | ignore |  |

## Listes de valeurs contrôlées

### `collection` (Champs du jeu de données)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| consultations | Consultations | Consultations |
| primary | Non-Spatial | Non spatiales |
| code | Open code | Code ouvert |
| api | API | API |
| app | Application | Application |
| geogratis | Geospatial | Géospatiales |
| fgp | Open Maps | Cartes Ouvertes |
| publication | Publications | Publication |
| transition | Briefing packages for new or incoming ministers | Documents d'information pour les nouveaux ministres |
| transition_deputy | Briefing packages for new or incoming deputy heads | Documents d'information pour les nouveaux administrateurs généraux |
| parliament_report | Reports Tabled in Parliament | Rapports déposés au Parlement |
| question_period | Question Period Notes | Notes pour la période des questions |
| parliament_committee | Briefing packages for Parliamentary Committee appearances for ministers | Documents d'information à l'intention des ministres pour les comparutions devant un comité parlementaire |
| parliament_committee_deputy | Briefing packages for Parliamentary Committee appearances for deputy heads | Documents d'information à l'intention des administrateurs généraux pour les comparutions devant un comité parlementaire |
| aia | Algorithmic Impact Assessment | Evaluation d'incidence algorithmique |
| accessibiliy_plans | Institutional Accessibility plans | Plans sur l'accessibilité des institutions |
| federated | Federated Open Data | Fédérée de données |

### `topic_category` (Champs du jeu de données)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| farming | Farming | Agriculture |
| biota | Biota | Biote |
| boundaries | Boundaries | Frontières |
| climatology_meterology_atmosphere | Climatology Meteorology Atmosphere | Climatologie Météorologie Atmosphère |
| economy | Economy | Économie |
| elevation | Elevation | Élévation |
| environment | Environment | Environnement |
| geoscientific_information | Geoscientific Information | Information géoscientifique |
| health | Health | Santé |
| imagery_base_maps_earth_cover | Imagery Base Maps Earth Cover | Imagerie carte de base couverture terrestre |
| intelligence_military | Intelligence Military | Renseignements militaires |
| inland_waters | Inland Waters | Eaux intérieures |
| location | Location | Localisation |
| oceans | Oceans | Océans |
| planning_cadastre | Planning Cadastre | Aménagement cadastre |
| society | Society | Société |
| structure | Structure | Structures |
| transport | Transportation | Transport |
| utilities_communication | Utilities Communication | Services communication |

### `subject` (Champs du jeu de données)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| arts_music_literature | Arts, Music, Literature | Arts, musique, littérature |
| agriculture | Agriculture | Agriculture |
| economics_and_industry | Economics and Industry | Économie et industrie |
| education_and_training | Education and Training | Éducation et formation |
| form_descriptors | Form Descriptors | Format |
| government_and_politics | Government and Politics | Gouvernement et vie politique |
| health_and_safety | Health and Safety | Santé et sécurité |
| history_and_archaeology | History and Archaeology | Histoire et archéologie |
| information_and_communications | Information and Communications | Information et communication |
| labour | Labour | Travail et emploi |
| language_and_linguistics | Language and Linguistics | Langue et linguistique |
| law | Law | Droit |
| military | Military | Histoire et science militaire |
| nature_and_environment | Nature and Environment | Nature et environnement |
| persons | Persons | Personnes |
| processes | Processes | Liens et fonctions |
| society_and_culture | Society and Culture | Société et culture |
| science_and_technology | Science and Technology | Sciences et technologie |
| transport | Transport | Transport |

### `audience` (Champs du jeu de données)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| aboriginal_peoples | Indigenous peoples | Peuples autochtones |
| business | Business | Entreprises |
| children | Children | Enfants |
| educators | Educators | Éducateurs |
| employers | Employers | Employeurs |
| funding_applicants | Funding applicants | Demandeurs de financement |
| general_public | General public | Grand public |
| government | Government | Gouvernement |
| immigrants | Immigrants | Immigrants |
| job_seekers | Job seekers | Chercheurs d’emploi |
| media | Media | Médias |
| noncanadians | Non-Canadians | Non-Canadiens |
| nongovernmental_organizations | Non-governmental organizations | Organisations non governementales |
| parents | Parents | Parents |
| persons_with_disabilities | Persons with disabilities | Personnes handicapées |
| rural_community | Rural community | Communauté rurale |
| seniors | Seniors | Aînés |
| scientists | Scientists | Scientifiques |
| students | Students | Étudiants |
| travellers | Travellers | Voyageurs |
| veterans | Veterans | Anciens combattants |
| visitors_to_canada | Visitors to Canada | Visiteurs au Canada |
| women | Women | Femmes |
| youth | Youth | Jeunesse |

### `place_of_publication` (Champs du jeu de données)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| 0 | Canada | Canada |
| 1 | Atlantic | Atlantique |
| 10 | Newfoundland and Labrador | Terre-Neuve-et-Labrador |
| 1001 | Newfoundland and Labrador - Division No. 1 | Terre-Neuve-et-Labrador - Division No. 1 |
| 1002 | Newfoundland and Labrador - Division No. 2 | Terre-Neuve-et-Labrador - Division No. 2 |
| 1003 | Newfoundland and Labrador - Division No. 3 | Terre-Neuve-et-Labrador - Division No. 3 |
| 1004 | Newfoundland and Labrador - Division No. 4 | Terre-Neuve-et-Labrador - Division No. 4 |
| 1005 | Newfoundland and Labrador - Division No. 5 | Terre-Neuve-et-Labrador - Division No. 5 |
| 1006 | Newfoundland and Labrador - Division No. 6 | Terre-Neuve-et-Labrador - Division No. 6 |
| 1007 | Newfoundland and Labrador - Division No. 7 | Terre-Neuve-et-Labrador - Division No. 7 |
| 1008 | Newfoundland and Labrador - Division No. 8 | Terre-Neuve-et-Labrador - Division No. 8 |
| 1009 | Newfoundland and Labrador - Division No. 9 | Terre-Neuve-et-Labrador - Division No. 9 |
| 1010 | Newfoundland and Labrador - Division No. 10 | Terre-Neuve-et-Labrador - Division No. 10 |
| 1011 | Newfoundland and Labrador - Division No. 11 | Terre-Neuve-et-Labrador - Division No. 11 |
| 11 | Prince Edward Island | Île-du-Prince-Édouard |
| 1101 | Prince Edward Island - Kings | Île-du-Prince-Édouard - Kings |
| 1102 | Prince Edward Island - Queens | Île-du-Prince-Édouard - Queens |
| 1103 | Prince Edward Island - Prince | Île-du-Prince-Édouard - Prince |
| 12 | Nova Scotia | Nouvelle-Écosse |
| 1201 | Nova Scotia - Shelburne | Nouvelle-Écosse - Shelburne |
| 1202 | Nova Scotia - Yarmouth | Nouvelle-Écosse - Yarmouth |
| 1203 | Nova Scotia - Digby | Nouvelle-Écosse - Digby |
| 1204 | Nova Scotia - Queens | Nouvelle-Écosse - Queens |
| 1205 | Nova Scotia - Annapolis | Nouvelle-Écosse - Annapolis |
| 1206 | Nova Scotia - Lunenburg | Nouvelle-Écosse - Lunenburg |
| 1207 | Nova Scotia - Kings | Nouvelle-Écosse - Kings |
| 1208 | Nova Scotia - Hants | Nouvelle-Écosse - Hants |
| 1209 | Nova Scotia - Halifax | Nouvelle-Écosse - Halifax |
| 1210 | Nova Scotia - Colchester | Nouvelle-Écosse - Colchester |
| 1211 | Nova Scotia - Cumberland | Nouvelle-Écosse - Cumberland |
| 1212 | Nova Scotia - Pictou | Nouvelle-Écosse - Pictou |
| 1213 | Nova Scotia - Guysborough | Nouvelle-Écosse - Guysborough |
| 1214 | Nova Scotia - Antigonish | Nouvelle-Écosse - Antigonish |
| 1215 | Nova Scotia - Inverness | Nouvelle-Écosse - Inverness |
| 1216 | Nova Scotia - Richmond | Nouvelle-Écosse - Richmond |
| 1217 | Nova Scotia - Cape Breton | Nouvelle-Écosse - Cape Breton |
| 1218 | Nova Scotia - Victoria | Nouvelle-Écosse - Victoria |
| 13 | New Brunswick | Nouveau-Brunswick |
| 1301 | New Brunswick - Saint John | Nouveau-Brunswick - Saint John |
| 1302 | New Brunswick - Charlotte | Nouveau-Brunswick - Charlotte |
| 1303 | New Brunswick - Sunbury | Nouveau-Brunswick - Sunbury |
| 1304 | New Brunswick - Queens | Nouveau-Brunswick - Queens |
| 1305 | New Brunswick - Kings | Nouveau-Brunswick - Kings |
| 1306 | New Brunswick - Albert | Nouveau-Brunswick - Albert |
| 1307 | New Brunswick - Westmorland | Nouveau-Brunswick - Westmorland |
| 1308 | New Brunswick - Kent | Nouveau-Brunswick - Kent |
| 1309 | New Brunswick - Northumberland | Nouveau-Brunswick - Northumberland |
| 1310 | New Brunswick - York | Nouveau-Brunswick - York |
| 1311 | New Brunswick - Carleton | Nouveau-Brunswick - Carleton |
| 1312 | New Brunswick - Victoria | Nouveau-Brunswick - Victoria |
| 1313 | New Brunswick - Madawaska | Nouveau-Brunswick - Madawaska |
| 1314 | New Brunswick - Restigouche | Nouveau-Brunswick - Restigouche |
| 1315 | New Brunswick - Gloucester | Nouveau-Brunswick - Gloucester |
| 2 | Quebec | Québec |
| 2401 | Quebec - Les Îles-de-la-Madeleine | Québec - Les Îles-de-la-Madeleine |
| 2402 | Quebec - Le Rocher-Percé | Québec - Le Rocher-Percé |
| 2403 | Quebec - La Côte-de-Gaspé | Québec - La Côte-de-Gaspé |
| 2404 | Quebec - La Haute-Gaspésie | Québec - La Haute-Gaspésie |
| 2405 | Quebec - Bonaventure | Québec - Bonaventure |
| 2406 | Quebec - Avignon | Québec - Avignon |
| 2407 | Quebec - La Matapédia | Québec - La Matapédia |
| 2408 | Quebec - Matane | Québec - Matane |
| 2409 | Quebec - La Mitis | Québec - La Mitis |
| 2410 | Quebec - Rimouski-Neigette | Québec - Rimouski-Neigette |
| 2411 | Quebec - Les Basques | Québec - Les Basques |
| 2412 | Quebec - Rivière-du-Loup | Québec - Rivière-du-Loup |
| 2413 | Quebec - Témiscouata | Québec - Témiscouata |
| 2414 | Quebec - Kamouraska | Québec - Kamouraska |
| 2415 | Quebec - Charlevoix-Est | Québec - Charlevoix-Est |
| 2416 | Quebec - Charlevoix | Québec - Charlevoix |
| 2417 | Quebec - LIslet | Québec - LIslet |
| 2418 | Quebec - Montmagny | Québec - Montmagny |
| 2419 | Quebec - Bellechasse | Québec - Bellechasse |
| 2420 | Quebec - LÎle-dOrléans | Québec - LÎle-dOrléans |
| 2421 | Quebec - La Côte-de-Beaupré | Québec - La Côte-de-Beaupré |
| 2422 | Quebec - La Jacques-Cartier | Québec - La Jacques-Cartier |
| 2423 | Quebec - Québec | Québec - Québec |
| 2425 | Quebec - Lévis | Québec - Lévis |
| 2426 | Quebec - La Nouvelle-Beauce | Québec - La Nouvelle-Beauce |
| 2427 | Quebec - Robert-Cliche | Québec - Robert-Cliche |
| 2428 | Quebec - Les Etchemins | Québec - Les Etchemins |
| 2429 | Quebec - Beauce-Sartigan | Québec - Beauce-Sartigan |
| 2430 | Quebec - Le Granit | Québec - Le Granit |
| 2431 | Quebec - Les Appalaches | Québec - Les Appalaches |
| 2432 | Quebec - LÉrable | Québec - LÉrable |
| 2433 | Quebec - Lotbinière | Québec - Lotbinière |
| 2434 | Quebec - Portneuf | Québec - Portneuf |
| 2435 | Quebec - Mékinac | Québec - Mékinac |
| 2436 | Quebec - Shawinigan | Québec - Shawinigan |
| 2437 | Quebec - Francheville | Québec - Francheville |
| 2438 | Quebec - Bécancour | Québec - Bécancour |
| 2439 | Quebec - Arthabaska | Québec - Arthabaska |
| 2440 | Quebec - Les Sources | Québec - Les Sources |
| 2441 | Quebec - Le Haut-Saint-François | Québec - Le Haut-Saint-François |
| 2442 | Quebec - Le Val-Saint-François | Québec - Le Val-Saint-François |
| 2443 | Quebec - Sherbrooke | Québec - Sherbrooke |
| 2444 | Quebec - Coaticook | Québec - Coaticook |
| 2445 | Quebec - Memphrémagog | Québec - Memphrémagog |
| 2446 | Quebec - Brome-Missisquoi | Québec - Brome-Missisquoi |
| 2447 | Quebec - La Haute-Yamaska | Québec - La Haute-Yamaska |
| 2448 | Quebec - Acton | Québec - Acton |
| 2449 | Quebec - Drummond | Québec - Drummond |
| 2450 | Quebec - Nicolet-Yamaska | Québec - Nicolet-Yamaska |
| 2451 | Quebec - Maskinongé | Québec - Maskinongé |
| 2452 | Quebec - DAutray | Québec - DAutray |
| 2453 | Quebec - Pierre-De Saurel | Québec - Pierre-De Saurel |
| 2454 | Quebec - Les Maskoutains | Québec - Les Maskoutains |
| 2455 | Quebec - Rouville | Québec - Rouville |
| 2456 | Quebec - Le Haut-Richelieu | Québec - Le Haut-Richelieu |
| 2457 | Quebec - La Vallée-du-Richelieu | Québec - La Vallée-du-Richelieu |
| 2458 | Quebec - Longueuil | Québec - Longueuil |
| 2459 | Quebec - Lajemmerais | Québec - Lajemmerais |
| 2460 | Quebec - LAssomption | Québec - LAssomption |
| 2461 | Quebec - Joliette | Québec - Joliette |
| 2462 | Quebec - Matawinie | Québec - Matawinie |
| 2463 | Quebec - Montcalm | Québec - Montcalm |
| 2464 | Quebec - Les Moulins | Québec - Les Moulins |
| 2465 | Quebec - Laval | Québec - Laval |
| 2466 | Quebec - Montréal | Québec - Montréal |
| 2467 | Quebec - Roussillon | Québec - Roussillon |
| 2468 | Quebec - Les Jardins-de-Napierville | Québec - Les Jardins-de-Napierville |
| 2469 | Quebec - Le Haut-Saint-Laurent | Québec - Le Haut-Saint-Laurent |
| 2470 | Quebec - Beauharnois-Salaberry | Québec - Beauharnois-Salaberry |
| 2471 | Quebec - Vaudreuil-Soulanges | Québec - Vaudreuil-Soulanges |
| 2472 | Quebec - Deux-Montagnes | Québec - Deux-Montagnes |
| 2473 | Quebec - Thérèse-De Blainville | Québec - Thérèse-De Blainville |
| 2474 | Quebec - Mirabel | Québec - Mirabel |
| 2475 | Quebec - La Rivière-du-Nord | Québec - La Rivière-du-Nord |
| 2476 | Quebec - Argenteuil | Québec - Argenteuil |
| 2477 | Quebec - Les Pays-den-Haut | Québec - Les Pays-den-Haut |
| 2478 | Quebec - Les Laurentides | Québec - Les Laurentides |
| 2479 | Quebec - Antoine-Labelle | Québec - Antoine-Labelle |
| 2480 | Quebec - Papineau | Québec - Papineau |
| 2481 | Quebec - Gatineau | Québec - Gatineau |
| 2482 | Quebec - Les Collines-de-lOutaouais | Québec - Les Collines-de-lOutaouais |
| 2483 | Quebec - La Vallée-de-la-Gatineau | Québec - La Vallée-de-la-Gatineau |
| 2484 | Quebec - Pontiac | Québec - Pontiac |
| 2485 | Quebec - Témiscamingue | Québec - Témiscamingue |
| 2486 | Quebec - Rouyn-Noranda | Québec - Rouyn-Noranda |
| 2487 | Quebec - Abitibi-Ouest | Québec - Abitibi-Ouest |
| 2488 | Quebec - Abitibi | Québec - Abitibi |
| 2489 | Quebec - La Vallée-de-lOr | Québec - La Vallée-de-lOr |
| 2490 | Quebec - La Tuque | Québec - La Tuque |
| 2491 | Quebec - Le Domaine-du-Roy | Québec - Le Domaine-du-Roy |
| 2492 | Quebec - Maria-Chapdelaine | Québec - Maria-Chapdelaine |
| 2493 | Quebec - Lac-Saint-Jean-Est | Québec - Lac-Saint-Jean-Est |
| 2494 | Quebec - Le Saguenay-et-son-Fjord | Québec - Le Saguenay-et-son-Fjord |
| 2495 | Quebec - La Haute-Côte-Nord | Québec - La Haute-Côte-Nord |
| 2496 | Quebec - Manicouagan | Québec - Manicouagan |
| 2497 | Quebec - Sept-Rivières--Caniapiscau | Québec - Sept-Rivières--Caniapiscau |
| 2498 | Quebec - Minganie--Le Golfe-du-Saint-Laurent | Québec - Minganie--Le Golfe-du-Saint-Laurent |
| 2499 | Quebec - Nord-du-Québec | Québec - Nord-du-Québec |
| 3 | Ontario | Ontario |
| 3501 | Ontario - Stormont Dundas and Glengarry | Ontario - Stormont Dundas and Glengarry |
| 3502 | Ontario - Prescott and Russell | Ontario - Prescott and Russell |
| 3506 | Ontario - Ottawa | Ontario - Ottawa |
| 3507 | Ontario - Leeds and Grenville | Ontario - Leeds and Grenville |
| 3509 | Ontario - Lanark | Ontario - Lanark |
| 3510 | Ontario - Frontenac | Ontario - Frontenac |
| 3511 | Ontario - Lennox and Addington | Ontario - Lennox and Addington |
| 3512 | Ontario - Hastings | Ontario - Hastings |
| 3513 | Ontario - Prince Edward | Ontario - Prince Edward |
| 3514 | Ontario - Northumberland | Ontario - Northumberland |
| 3515 | Ontario - Peterborough | Ontario - Peterborough |
| 3516 | Ontario - Kawartha Lakes | Ontario - Kawartha Lakes |
| 3518 | Ontario - Durham | Ontario - Durham |
| 3519 | Ontario - York | Ontario - York |
| 3520 | Ontario - Toronto | Ontario - Toronto |
| 3521 | Ontario - Peel | Ontario - Peel |
| 3522 | Ontario - Dufferin | Ontario - Dufferin |
| 3523 | Ontario - Wellington | Ontario - Wellington |
| 3524 | Ontario - Halton | Ontario - Halton |
| 3525 | Ontario - Hamilton | Ontario - Hamilton |
| 3526 | Ontario - Niagara | Ontario - Niagara |
| 3528 | Ontario - Haldimand-Norfolk | Ontario - Haldimand-Norfolk |
| 3529 | Ontario - Brant | Ontario - Brant |
| 3530 | Ontario - Waterloo | Ontario - Waterloo |
| 3531 | Ontario - Perth | Ontario - Perth |
| 3532 | Ontario - Oxford | Ontario - Oxford |
| 3534 | Ontario - Elgin | Ontario - Elgin |
| 3536 | Ontario - Chatham-Kent | Ontario - Chatham-Kent |
| 3537 | Ontario - Essex | Ontario - Essex |
| 3538 | Ontario - Lambton | Ontario - Lambton |
| 3539 | Ontario - Middlesex | Ontario - Middlesex |
| 3540 | Ontario - Huron | Ontario - Huron |
| 3541 | Ontario - Bruce | Ontario - Bruce |
| 3542 | Ontario - Grey | Ontario - Grey |
| 3543 | Ontario - Simcoe | Ontario - Simcoe |
| 3544 | Ontario - Muskoka | Ontario - Muskoka |
| 3546 | Ontario - Haliburton | Ontario - Haliburton |
| 3547 | Ontario - Renfrew | Ontario - Renfrew |
| 3548 | Ontario - Nipissing | Ontario - Nipissing |
| 3549 | Ontario - Parry Sound | Ontario - Parry Sound |
| 3551 | Ontario - Manitoulin | Ontario - Manitoulin |
| 3552 | Ontario - Sudbury | Ontario - Sudbury |
| 3553 | Ontario - Greater Sudbury | Ontario - Greater Sudbury |
| 3554 | Ontario - Timiskaming | Ontario - Timiskaming |
| 3556 | Ontario - Cochrane | Ontario - Cochrane |
| 3557 | Ontario - Algoma | Ontario - Algoma |
| 3558 | Ontario - Thunder Bay | Ontario - Thunder Bay |
| 3559 | Ontario - Rainy River | Ontario - Rainy River |
| 3560 | Ontario - Kenora | Ontario - Kenora |
| 4 | Prairies | Prairies |
| 46 | Manitoba | Manitoba |
| 4601 | Manitoba - Division No. 1 | Manitoba - Division No. 1 |
| 4602 | Manitoba - Division No. 2 | Manitoba - Division No. 2 |
| 4603 | Manitoba - Division No. 3 | Manitoba - Division No. 3 |
| 4604 | Manitoba - Division No. 4 | Manitoba - Division No. 4 |
| 4605 | Manitoba - Division No. 5 | Manitoba - Division No. 5 |
| 4606 | Manitoba - Division No. 6 | Manitoba - Division No. 6 |
| 4607 | Manitoba - Division No. 7 | Manitoba - Division No. 7 |
| 4608 | Manitoba - Division No. 8 | Manitoba - Division No. 8 |
| 4609 | Manitoba - Division No. 9 | Manitoba - Division No. 9 |
| 4610 | Manitoba - Division No. 10 | Manitoba - Division No. 10 |
| 4611 | Manitoba - Division No. 11 | Manitoba - Division No. 11 |
| 4612 | Manitoba - Division No. 12 | Manitoba - Division No. 12 |
| 4613 | Manitoba - Division No. 13 | Manitoba - Division No. 13 |
| 4614 | Manitoba - Division No. 14 | Manitoba - Division No. 14 |
| 4615 | Manitoba - Division No. 15 | Manitoba - Division No. 15 |
| 4616 | Manitoba - Division No. 16 | Manitoba - Division No. 16 |
| 4617 | Manitoba - Division No. 17 | Manitoba - Division No. 17 |
| 4618 | Manitoba - Division No. 18 | Manitoba - Division No. 18 |
| 4619 | Manitoba - Division No. 19 | Manitoba - Division No. 19 |
| 4620 | Manitoba - Division No. 20 | Manitoba - Division No. 20 |
| 4621 | Manitoba - Division No. 21 | Manitoba - Division No. 21 |
| 4622 | Manitoba - Division No. 22 | Manitoba - Division No. 22 |
| 4623 | Manitoba - Division No. 23 | Manitoba - Division No. 23 |
| 47 | Saskatchewan | Saskatchewan |
| 4701 | Saskatchewan - Division No. 1 | Saskatchewan - Division No. 1 |
| 4702 | Saskatchewan - Division No. 2 | Saskatchewan - Division No. 2 |
| 4703 | Saskatchewan - Division No. 3 | Saskatchewan - Division No. 3 |
| 4704 | Saskatchewan - Division No. 4 | Saskatchewan - Division No. 4 |
| 4705 | Saskatchewan - Division No. 5 | Saskatchewan - Division No. 5 |
| 4706 | Saskatchewan - Division No. 6 | Saskatchewan - Division No. 6 |
| 4707 | Saskatchewan - Division No. 7 | Saskatchewan - Division No. 7 |
| 4708 | Saskatchewan - Division No. 8 | Saskatchewan - Division No. 8 |
| 4709 | Saskatchewan - Division No. 9 | Saskatchewan - Division No. 9 |
| 4710 | Saskatchewan - Division No. 10 | Saskatchewan - Division No. 10 |
| 4711 | Saskatchewan - Division No. 11 | Saskatchewan - Division No. 11 |
| 4712 | Saskatchewan - Division No. 12 | Saskatchewan - Division No. 12 |
| 4713 | Saskatchewan - Division No. 13 | Saskatchewan - Division No. 13 |
| 4714 | Saskatchewan - Division No. 14 | Saskatchewan - Division No. 14 |
| 4715 | Saskatchewan - Division No. 15 | Saskatchewan - Division No. 15 |
| 4716 | Saskatchewan - Division No. 16 | Saskatchewan - Division No. 16 |
| 4717 | Saskatchewan - Division No. 17 | Saskatchewan - Division No. 17 |
| 4718 | Saskatchewan - Division No. 18 | Saskatchewan - Division No. 18 |
| 48 | Alberta | Alberta |
| 4801 | Alberta - Division No. 1 | Alberta - Division No. 1 |
| 4802 | Alberta - Division No. 2 | Alberta - Division No. 2 |
| 4803 | Alberta - Division No. 3 | Alberta - Division No. 3 |
| 4804 | Alberta - Division No. 4 | Alberta - Division No. 4 |
| 4805 | Alberta - Division No. 5 | Alberta - Division No. 5 |
| 4806 | Alberta - Division No. 6 | Alberta - Division No. 6 |
| 4807 | Alberta - Division No. 7 | Alberta - Division No. 7 |
| 4808 | Alberta - Division No. 8 | Alberta - Division No. 8 |
| 4809 | Alberta - Division No. 9 | Alberta - Division No. 9 |
| 4810 | Alberta - Division No. 10 | Alberta - Division No. 10 |
| 4811 | Alberta - Division No. 11 | Alberta - Division No. 11 |
| 4812 | Alberta - Division No. 12 | Alberta - Division No. 12 |
| 4813 | Alberta - Division No. 13 | Alberta - Division No. 13 |
| 4814 | Alberta - Division No. 14 | Alberta - Division No. 14 |
| 4815 | Alberta - Division No. 15 | Alberta - Division No. 15 |
| 4816 | Alberta - Division No. 16 | Alberta - Division No. 16 |
| 4817 | Alberta - Division No. 17 | Alberta - Division No. 17 |
| 4818 | Alberta - Division No. 18 | Alberta - Division No. 18 |
| 4819 | Alberta - Division No. 19 | Alberta - Division No. 19 |
| 5 | British Columbia | Colombie-Britannique |
| 5901 | British Columbia - East Kootenay | Colombie-Britannique - East Kootenay |
| 5903 | British Columbia - Central Kootenay | Colombie-Britannique - Central Kootenay |
| 5905 | British Columbia - Kootenay Boundary | Colombie-Britannique - Kootenay Boundary |
| 5907 | British Columbia - Okanagan-Similkameen | Colombie-Britannique - Okanagan-Similkameen |
| 5909 | British Columbia - Fraser Valley | Colombie-Britannique - Fraser Valley |
| 5915 | British Columbia - Greater Vancouver | Colombie-Britannique - Greater Vancouver |
| 5917 | British Columbia - Capital | Colombie-Britannique - Capital |
| 5919 | British Columbia - Cowichan Valley | Colombie-Britannique - Cowichan Valley |
| 5921 | British Columbia - Nanaimo | Colombie-Britannique - Nanaimo |
| 5923 | British Columbia - Alberni-Clayoquot | Colombie-Britannique - Alberni-Clayoquot |
| 5924 | British Columbia - Strathcona | Colombie-Britannique - Strathcona |
| 5926 | British Columbia - Comox Valley | Colombie-Britannique - Comox Valley |
| 5927 | British Columbia - Powell River | Colombie-Britannique - Powell River |
| 5929 | British Columbia - Sunshine Coast | Colombie-Britannique - Sunshine Coast |
| 5931 | British Columbia - Squamish-Lillooet | Colombie-Britannique - Squamish-Lillooet |
| 5933 | British Columbia - Thompson-Nicola | Colombie-Britannique - Thompson-Nicola |
| 5935 | British Columbia - Central Okanagan | Colombie-Britannique - Central Okanagan |
| 5937 | British Columbia - North Okanagan | Colombie-Britannique - North Okanagan |
| 5939 | British Columbia - Columbia-Shuswap | Colombie-Britannique - Columbia-Shuswap |
| 5941 | British Columbia - Cariboo | Colombie-Britannique - Cariboo |
| 5943 | British Columbia - Mount Waddington | Colombie-Britannique - Mount Waddington |
| 5945 | British Columbia - Central Coast | Colombie-Britannique - Central Coast |
| 5947 | British Columbia - Skeena-Queen Charlotte | Colombie-Britannique - Skeena-Queen Charlotte |
| 5949 | British Columbia - Kitimat-Stikine | Colombie-Britannique - Kitimat-Stikine |
| 5951 | British Columbia - Bulkley-Nechako | Colombie-Britannique - Bulkley-Nechako |
| 5953 | British Columbia - Fraser-Fort George | Colombie-Britannique - Fraser-Fort George |
| 5955 | British Columbia - Peace River | Colombie-Britannique - Peace River |
| 5957 | British Columbia - Stikine | Colombie-Britannique - Stikine |
| 5959 | British Columbia - Northern Rockies | Colombie-Britannique - Northern Rockies |
| 6 | Territories | Territoires |
| 60 | Yukon | Yukon |
| 6001 | Yukon - Yukon | Yukon - Yukon |
| 61 | Northwest Territories | Territoires du Nord-Ouest |
| 6101 | Northwest Territories - Region 1 | Territoires du Nord-Ouest - Region 1 |
| 6102 | Northwest Territories - Region 2 | Territoires du Nord-Ouest - Region 2 |
| 6103 | Northwest Territories - Region 3 | Territoires du Nord-Ouest - Region 3 |
| 6104 | Northwest Territories - Region 4 | Territoires du Nord-Ouest - Region 4 |
| 6105 | Northwest Territories - Region 5 | Territoires du Nord-Ouest - Region 5 |
| 6106 | Northwest Territories - Region 6 | Territoires du Nord-Ouest - Region 6 |
| 62 | Nunavut | Nunavut |
| 6204 | Nunavut - Baffin | Nunavut - Baffin |
| 6205 | Nunavut - Keewatin | Nunavut - Keewatin |
| 6208 | Nunavut - Kitikmeot | Nunavut - Kitikmeot |

### `geographic_region` (Champs du jeu de données)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| 0 | Canada | Canada |
| 1 | Atlantic | Atlantique |
| 10 | Newfoundland and Labrador | Terre-Neuve-et-Labrador |
| 1001 | Newfoundland and Labrador - Division No. 1 | Terre-Neuve-et-Labrador - Division No. 1 |
| 1002 | Newfoundland and Labrador - Division No. 2 | Terre-Neuve-et-Labrador - Division No. 2 |
| 1003 | Newfoundland and Labrador - Division No. 3 | Terre-Neuve-et-Labrador - Division No. 3 |
| 1004 | Newfoundland and Labrador - Division No. 4 | Terre-Neuve-et-Labrador - Division No. 4 |
| 1005 | Newfoundland and Labrador - Division No. 5 | Terre-Neuve-et-Labrador - Division No. 5 |
| 1006 | Newfoundland and Labrador - Division No. 6 | Terre-Neuve-et-Labrador - Division No. 6 |
| 1007 | Newfoundland and Labrador - Division No. 7 | Terre-Neuve-et-Labrador - Division No. 7 |
| 1008 | Newfoundland and Labrador - Division No. 8 | Terre-Neuve-et-Labrador - Division No. 8 |
| 1009 | Newfoundland and Labrador - Division No. 9 | Terre-Neuve-et-Labrador - Division No. 9 |
| 1010 | Newfoundland and Labrador - Division No. 10 | Terre-Neuve-et-Labrador - Division No. 10 |
| 1011 | Newfoundland and Labrador - Division No. 11 | Terre-Neuve-et-Labrador - Division No. 11 |
| 11 | Prince Edward Island | Île-du-Prince-Édouard |
| 1101 | Prince Edward Island - Kings | Île-du-Prince-Édouard - Kings |
| 1102 | Prince Edward Island - Queens | Île-du-Prince-Édouard - Queens |
| 1103 | Prince Edward Island - Prince | Île-du-Prince-Édouard - Prince |
| 12 | Nova Scotia | Nouvelle-Écosse |
| 1201 | Nova Scotia - Shelburne | Nouvelle-Écosse - Shelburne |
| 1202 | Nova Scotia - Yarmouth | Nouvelle-Écosse - Yarmouth |
| 1203 | Nova Scotia - Digby | Nouvelle-Écosse - Digby |
| 1204 | Nova Scotia - Queens | Nouvelle-Écosse - Queens |
| 1205 | Nova Scotia - Annapolis | Nouvelle-Écosse - Annapolis |
| 1206 | Nova Scotia - Lunenburg | Nouvelle-Écosse - Lunenburg |
| 1207 | Nova Scotia - Kings | Nouvelle-Écosse - Kings |
| 1208 | Nova Scotia - Hants | Nouvelle-Écosse - Hants |
| 1209 | Nova Scotia - Halifax | Nouvelle-Écosse - Halifax |
| 1210 | Nova Scotia - Colchester | Nouvelle-Écosse - Colchester |
| 1211 | Nova Scotia - Cumberland | Nouvelle-Écosse - Cumberland |
| 1212 | Nova Scotia - Pictou | Nouvelle-Écosse - Pictou |
| 1213 | Nova Scotia - Guysborough | Nouvelle-Écosse - Guysborough |
| 1214 | Nova Scotia - Antigonish | Nouvelle-Écosse - Antigonish |
| 1215 | Nova Scotia - Inverness | Nouvelle-Écosse - Inverness |
| 1216 | Nova Scotia - Richmond | Nouvelle-Écosse - Richmond |
| 1217 | Nova Scotia - Cape Breton | Nouvelle-Écosse - Cape Breton |
| 1218 | Nova Scotia - Victoria | Nouvelle-Écosse - Victoria |
| 13 | New Brunswick | Nouveau-Brunswick |
| 1301 | New Brunswick - Saint John | Nouveau-Brunswick - Saint John |
| 1302 | New Brunswick - Charlotte | Nouveau-Brunswick - Charlotte |
| 1303 | New Brunswick - Sunbury | Nouveau-Brunswick - Sunbury |
| 1304 | New Brunswick - Queens | Nouveau-Brunswick - Queens |
| 1305 | New Brunswick - Kings | Nouveau-Brunswick - Kings |
| 1306 | New Brunswick - Albert | Nouveau-Brunswick - Albert |
| 1307 | New Brunswick - Westmorland | Nouveau-Brunswick - Westmorland |
| 1308 | New Brunswick - Kent | Nouveau-Brunswick - Kent |
| 1309 | New Brunswick - Northumberland | Nouveau-Brunswick - Northumberland |
| 1310 | New Brunswick - York | Nouveau-Brunswick - York |
| 1311 | New Brunswick - Carleton | Nouveau-Brunswick - Carleton |
| 1312 | New Brunswick - Victoria | Nouveau-Brunswick - Victoria |
| 1313 | New Brunswick - Madawaska | Nouveau-Brunswick - Madawaska |
| 1314 | New Brunswick - Restigouche | Nouveau-Brunswick - Restigouche |
| 1315 | New Brunswick - Gloucester | Nouveau-Brunswick - Gloucester |
| 2 | Quebec | Québec |
| 2401 | Quebec - Les Îles-de-la-Madeleine | Québec - Les Îles-de-la-Madeleine |
| 2402 | Quebec - Le Rocher-Percé | Québec - Le Rocher-Percé |
| 2403 | Quebec - La Côte-de-Gaspé | Québec - La Côte-de-Gaspé |
| 2404 | Quebec - La Haute-Gaspésie | Québec - La Haute-Gaspésie |
| 2405 | Quebec - Bonaventure | Québec - Bonaventure |
| 2406 | Quebec - Avignon | Québec - Avignon |
| 2407 | Quebec - La Matapédia | Québec - La Matapédia |
| 2408 | Quebec - Matane | Québec - Matane |
| 2409 | Quebec - La Mitis | Québec - La Mitis |
| 2410 | Quebec - Rimouski-Neigette | Québec - Rimouski-Neigette |
| 2411 | Quebec - Les Basques | Québec - Les Basques |
| 2412 | Quebec - Rivière-du-Loup | Québec - Rivière-du-Loup |
| 2413 | Quebec - Témiscouata | Québec - Témiscouata |
| 2414 | Quebec - Kamouraska | Québec - Kamouraska |
| 2415 | Quebec - Charlevoix-Est | Québec - Charlevoix-Est |
| 2416 | Quebec - Charlevoix | Québec - Charlevoix |
| 2417 | Quebec - LIslet | Québec - LIslet |
| 2418 | Quebec - Montmagny | Québec - Montmagny |
| 2419 | Quebec - Bellechasse | Québec - Bellechasse |
| 2420 | Quebec - LÎle-dOrléans | Québec - LÎle-dOrléans |
| 2421 | Quebec - La Côte-de-Beaupré | Québec - La Côte-de-Beaupré |
| 2422 | Quebec - La Jacques-Cartier | Québec - La Jacques-Cartier |
| 2423 | Quebec - Québec | Québec - Québec |
| 2425 | Quebec - Lévis | Québec - Lévis |
| 2426 | Quebec - La Nouvelle-Beauce | Québec - La Nouvelle-Beauce |
| 2427 | Quebec - Robert-Cliche | Québec - Robert-Cliche |
| 2428 | Quebec - Les Etchemins | Québec - Les Etchemins |
| 2429 | Quebec - Beauce-Sartigan | Québec - Beauce-Sartigan |
| 2430 | Quebec - Le Granit | Québec - Le Granit |
| 2431 | Quebec - Les Appalaches | Québec - Les Appalaches |
| 2432 | Quebec - LÉrable | Québec - LÉrable |
| 2433 | Quebec - Lotbinière | Québec - Lotbinière |
| 2434 | Quebec - Portneuf | Québec - Portneuf |
| 2435 | Quebec - Mékinac | Québec - Mékinac |
| 2436 | Quebec - Shawinigan | Québec - Shawinigan |
| 2437 | Quebec - Francheville | Québec - Francheville |
| 2438 | Quebec - Bécancour | Québec - Bécancour |
| 2439 | Quebec - Arthabaska | Québec - Arthabaska |
| 2440 | Quebec - Les Sources | Québec - Les Sources |
| 2441 | Quebec - Le Haut-Saint-François | Québec - Le Haut-Saint-François |
| 2442 | Quebec - Le Val-Saint-François | Québec - Le Val-Saint-François |
| 2443 | Quebec - Sherbrooke | Québec - Sherbrooke |
| 2444 | Quebec - Coaticook | Québec - Coaticook |
| 2445 | Quebec - Memphrémagog | Québec - Memphrémagog |
| 2446 | Quebec - Brome-Missisquoi | Québec - Brome-Missisquoi |
| 2447 | Quebec - La Haute-Yamaska | Québec - La Haute-Yamaska |
| 2448 | Quebec - Acton | Québec - Acton |
| 2449 | Quebec - Drummond | Québec - Drummond |
| 2450 | Quebec - Nicolet-Yamaska | Québec - Nicolet-Yamaska |
| 2451 | Quebec - Maskinongé | Québec - Maskinongé |
| 2452 | Quebec - DAutray | Québec - DAutray |
| 2453 | Quebec - Pierre-De Saurel | Québec - Pierre-De Saurel |
| 2454 | Quebec - Les Maskoutains | Québec - Les Maskoutains |
| 2455 | Quebec - Rouville | Québec - Rouville |
| 2456 | Quebec - Le Haut-Richelieu | Québec - Le Haut-Richelieu |
| 2457 | Quebec - La Vallée-du-Richelieu | Québec - La Vallée-du-Richelieu |
| 2458 | Quebec - Longueuil | Québec - Longueuil |
| 2459 | Quebec - Lajemmerais | Québec - Lajemmerais |
| 2460 | Quebec - LAssomption | Québec - LAssomption |
| 2461 | Quebec - Joliette | Québec - Joliette |
| 2462 | Quebec - Matawinie | Québec - Matawinie |
| 2463 | Quebec - Montcalm | Québec - Montcalm |
| 2464 | Quebec - Les Moulins | Québec - Les Moulins |
| 2465 | Quebec - Laval | Québec - Laval |
| 2466 | Quebec - Montréal | Québec - Montréal |
| 2467 | Quebec - Roussillon | Québec - Roussillon |
| 2468 | Quebec - Les Jardins-de-Napierville | Québec - Les Jardins-de-Napierville |
| 2469 | Quebec - Le Haut-Saint-Laurent | Québec - Le Haut-Saint-Laurent |
| 2470 | Quebec - Beauharnois-Salaberry | Québec - Beauharnois-Salaberry |
| 2471 | Quebec - Vaudreuil-Soulanges | Québec - Vaudreuil-Soulanges |
| 2472 | Quebec - Deux-Montagnes | Québec - Deux-Montagnes |
| 2473 | Quebec - Thérèse-De Blainville | Québec - Thérèse-De Blainville |
| 2474 | Quebec - Mirabel | Québec - Mirabel |
| 2475 | Quebec - La Rivière-du-Nord | Québec - La Rivière-du-Nord |
| 2476 | Quebec - Argenteuil | Québec - Argenteuil |
| 2477 | Quebec - Les Pays-den-Haut | Québec - Les Pays-den-Haut |
| 2478 | Quebec - Les Laurentides | Québec - Les Laurentides |
| 2479 | Quebec - Antoine-Labelle | Québec - Antoine-Labelle |
| 2480 | Quebec - Papineau | Québec - Papineau |
| 2481 | Quebec - Gatineau | Québec - Gatineau |
| 2482 | Quebec - Les Collines-de-lOutaouais | Québec - Les Collines-de-lOutaouais |
| 2483 | Quebec - La Vallée-de-la-Gatineau | Québec - La Vallée-de-la-Gatineau |
| 2484 | Quebec - Pontiac | Québec - Pontiac |
| 2485 | Quebec - Témiscamingue | Québec - Témiscamingue |
| 2486 | Quebec - Rouyn-Noranda | Québec - Rouyn-Noranda |
| 2487 | Quebec - Abitibi-Ouest | Québec - Abitibi-Ouest |
| 2488 | Quebec - Abitibi | Québec - Abitibi |
| 2489 | Quebec - La Vallée-de-lOr | Québec - La Vallée-de-lOr |
| 2490 | Quebec - La Tuque | Québec - La Tuque |
| 2491 | Quebec - Le Domaine-du-Roy | Québec - Le Domaine-du-Roy |
| 2492 | Quebec - Maria-Chapdelaine | Québec - Maria-Chapdelaine |
| 2493 | Quebec - Lac-Saint-Jean-Est | Québec - Lac-Saint-Jean-Est |
| 2494 | Quebec - Le Saguenay-et-son-Fjord | Québec - Le Saguenay-et-son-Fjord |
| 2495 | Quebec - La Haute-Côte-Nord | Québec - La Haute-Côte-Nord |
| 2496 | Quebec - Manicouagan | Québec - Manicouagan |
| 2497 | Quebec - Sept-Rivières--Caniapiscau | Québec - Sept-Rivières--Caniapiscau |
| 2498 | Quebec - Minganie--Le Golfe-du-Saint-Laurent | Québec - Minganie--Le Golfe-du-Saint-Laurent |
| 2499 | Quebec - Nord-du-Québec | Québec - Nord-du-Québec |
| 3 | Ontario | Ontario |
| 3501 | Ontario - Stormont Dundas and Glengarry | Ontario - Stormont Dundas and Glengarry |
| 3502 | Ontario - Prescott and Russell | Ontario - Prescott and Russell |
| 3506 | Ontario - Ottawa | Ontario - Ottawa |
| 3507 | Ontario - Leeds and Grenville | Ontario - Leeds and Grenville |
| 3509 | Ontario - Lanark | Ontario - Lanark |
| 3510 | Ontario - Frontenac | Ontario - Frontenac |
| 3511 | Ontario - Lennox and Addington | Ontario - Lennox and Addington |
| 3512 | Ontario - Hastings | Ontario - Hastings |
| 3513 | Ontario - Prince Edward | Ontario - Prince Edward |
| 3514 | Ontario - Northumberland | Ontario - Northumberland |
| 3515 | Ontario - Peterborough | Ontario - Peterborough |
| 3516 | Ontario - Kawartha Lakes | Ontario - Kawartha Lakes |
| 3518 | Ontario - Durham | Ontario - Durham |
| 3519 | Ontario - York | Ontario - York |
| 3520 | Ontario - Toronto | Ontario - Toronto |
| 3521 | Ontario - Peel | Ontario - Peel |
| 3522 | Ontario - Dufferin | Ontario - Dufferin |
| 3523 | Ontario - Wellington | Ontario - Wellington |
| 3524 | Ontario - Halton | Ontario - Halton |
| 3525 | Ontario - Hamilton | Ontario - Hamilton |
| 3526 | Ontario - Niagara | Ontario - Niagara |
| 3528 | Ontario - Haldimand-Norfolk | Ontario - Haldimand-Norfolk |
| 3529 | Ontario - Brant | Ontario - Brant |
| 3530 | Ontario - Waterloo | Ontario - Waterloo |
| 3531 | Ontario - Perth | Ontario - Perth |
| 3532 | Ontario - Oxford | Ontario - Oxford |
| 3534 | Ontario - Elgin | Ontario - Elgin |
| 3536 | Ontario - Chatham-Kent | Ontario - Chatham-Kent |
| 3537 | Ontario - Essex | Ontario - Essex |
| 3538 | Ontario - Lambton | Ontario - Lambton |
| 3539 | Ontario - Middlesex | Ontario - Middlesex |
| 3540 | Ontario - Huron | Ontario - Huron |
| 3541 | Ontario - Bruce | Ontario - Bruce |
| 3542 | Ontario - Grey | Ontario - Grey |
| 3543 | Ontario - Simcoe | Ontario - Simcoe |
| 3544 | Ontario - Muskoka | Ontario - Muskoka |
| 3546 | Ontario - Haliburton | Ontario - Haliburton |
| 3547 | Ontario - Renfrew | Ontario - Renfrew |
| 3548 | Ontario - Nipissing | Ontario - Nipissing |
| 3549 | Ontario - Parry Sound | Ontario - Parry Sound |
| 3551 | Ontario - Manitoulin | Ontario - Manitoulin |
| 3552 | Ontario - Sudbury | Ontario - Sudbury |
| 3553 | Ontario - Greater Sudbury | Ontario - Greater Sudbury |
| 3554 | Ontario - Timiskaming | Ontario - Timiskaming |
| 3556 | Ontario - Cochrane | Ontario - Cochrane |
| 3557 | Ontario - Algoma | Ontario - Algoma |
| 3558 | Ontario - Thunder Bay | Ontario - Thunder Bay |
| 3559 | Ontario - Rainy River | Ontario - Rainy River |
| 3560 | Ontario - Kenora | Ontario - Kenora |
| 4 | Prairies | Prairies |
| 46 | Manitoba | Manitoba |
| 4601 | Manitoba - Division No. 1 | Manitoba - Division No. 1 |
| 4602 | Manitoba - Division No. 2 | Manitoba - Division No. 2 |
| 4603 | Manitoba - Division No. 3 | Manitoba - Division No. 3 |
| 4604 | Manitoba - Division No. 4 | Manitoba - Division No. 4 |
| 4605 | Manitoba - Division No. 5 | Manitoba - Division No. 5 |
| 4606 | Manitoba - Division No. 6 | Manitoba - Division No. 6 |
| 4607 | Manitoba - Division No. 7 | Manitoba - Division No. 7 |
| 4608 | Manitoba - Division No. 8 | Manitoba - Division No. 8 |
| 4609 | Manitoba - Division No. 9 | Manitoba - Division No. 9 |
| 4610 | Manitoba - Division No. 10 | Manitoba - Division No. 10 |
| 4611 | Manitoba - Division No. 11 | Manitoba - Division No. 11 |
| 4612 | Manitoba - Division No. 12 | Manitoba - Division No. 12 |
| 4613 | Manitoba - Division No. 13 | Manitoba - Division No. 13 |
| 4614 | Manitoba - Division No. 14 | Manitoba - Division No. 14 |
| 4615 | Manitoba - Division No. 15 | Manitoba - Division No. 15 |
| 4616 | Manitoba - Division No. 16 | Manitoba - Division No. 16 |
| 4617 | Manitoba - Division No. 17 | Manitoba - Division No. 17 |
| 4618 | Manitoba - Division No. 18 | Manitoba - Division No. 18 |
| 4619 | Manitoba - Division No. 19 | Manitoba - Division No. 19 |
| 4620 | Manitoba - Division No. 20 | Manitoba - Division No. 20 |
| 4621 | Manitoba - Division No. 21 | Manitoba - Division No. 21 |
| 4622 | Manitoba - Division No. 22 | Manitoba - Division No. 22 |
| 4623 | Manitoba - Division No. 23 | Manitoba - Division No. 23 |
| 47 | Saskatchewan | Saskatchewan |
| 4701 | Saskatchewan - Division No. 1 | Saskatchewan - Division No. 1 |
| 4702 | Saskatchewan - Division No. 2 | Saskatchewan - Division No. 2 |
| 4703 | Saskatchewan - Division No. 3 | Saskatchewan - Division No. 3 |
| 4704 | Saskatchewan - Division No. 4 | Saskatchewan - Division No. 4 |
| 4705 | Saskatchewan - Division No. 5 | Saskatchewan - Division No. 5 |
| 4706 | Saskatchewan - Division No. 6 | Saskatchewan - Division No. 6 |
| 4707 | Saskatchewan - Division No. 7 | Saskatchewan - Division No. 7 |
| 4708 | Saskatchewan - Division No. 8 | Saskatchewan - Division No. 8 |
| 4709 | Saskatchewan - Division No. 9 | Saskatchewan - Division No. 9 |
| 4710 | Saskatchewan - Division No. 10 | Saskatchewan - Division No. 10 |
| 4711 | Saskatchewan - Division No. 11 | Saskatchewan - Division No. 11 |
| 4712 | Saskatchewan - Division No. 12 | Saskatchewan - Division No. 12 |
| 4713 | Saskatchewan - Division No. 13 | Saskatchewan - Division No. 13 |
| 4714 | Saskatchewan - Division No. 14 | Saskatchewan - Division No. 14 |
| 4715 | Saskatchewan - Division No. 15 | Saskatchewan - Division No. 15 |
| 4716 | Saskatchewan - Division No. 16 | Saskatchewan - Division No. 16 |
| 4717 | Saskatchewan - Division No. 17 | Saskatchewan - Division No. 17 |
| 4718 | Saskatchewan - Division No. 18 | Saskatchewan - Division No. 18 |
| 48 | Alberta | Alberta |
| 4801 | Alberta - Division No. 1 | Alberta - Division No. 1 |
| 4802 | Alberta - Division No. 2 | Alberta - Division No. 2 |
| 4803 | Alberta - Division No. 3 | Alberta - Division No. 3 |
| 4804 | Alberta - Division No. 4 | Alberta - Division No. 4 |
| 4805 | Alberta - Division No. 5 | Alberta - Division No. 5 |
| 4806 | Alberta - Division No. 6 | Alberta - Division No. 6 |
| 4807 | Alberta - Division No. 7 | Alberta - Division No. 7 |
| 4808 | Alberta - Division No. 8 | Alberta - Division No. 8 |
| 4809 | Alberta - Division No. 9 | Alberta - Division No. 9 |
| 4810 | Alberta - Division No. 10 | Alberta - Division No. 10 |
| 4811 | Alberta - Division No. 11 | Alberta - Division No. 11 |
| 4812 | Alberta - Division No. 12 | Alberta - Division No. 12 |
| 4813 | Alberta - Division No. 13 | Alberta - Division No. 13 |
| 4814 | Alberta - Division No. 14 | Alberta - Division No. 14 |
| 4815 | Alberta - Division No. 15 | Alberta - Division No. 15 |
| 4816 | Alberta - Division No. 16 | Alberta - Division No. 16 |
| 4817 | Alberta - Division No. 17 | Alberta - Division No. 17 |
| 4818 | Alberta - Division No. 18 | Alberta - Division No. 18 |
| 4819 | Alberta - Division No. 19 | Alberta - Division No. 19 |
| 5 | British Columbia | Colombie-Britannique |
| 5901 | British Columbia - East Kootenay | Colombie-Britannique - East Kootenay |
| 5903 | British Columbia - Central Kootenay | Colombie-Britannique - Central Kootenay |
| 5905 | British Columbia - Kootenay Boundary | Colombie-Britannique - Kootenay Boundary |
| 5907 | British Columbia - Okanagan-Similkameen | Colombie-Britannique - Okanagan-Similkameen |
| 5909 | British Columbia - Fraser Valley | Colombie-Britannique - Fraser Valley |
| 5915 | British Columbia - Greater Vancouver | Colombie-Britannique - Greater Vancouver |
| 5917 | British Columbia - Capital | Colombie-Britannique - Capital |
| 5919 | British Columbia - Cowichan Valley | Colombie-Britannique - Cowichan Valley |
| 5921 | British Columbia - Nanaimo | Colombie-Britannique - Nanaimo |
| 5923 | British Columbia - Alberni-Clayoquot | Colombie-Britannique - Alberni-Clayoquot |
| 5924 | British Columbia - Strathcona | Colombie-Britannique - Strathcona |
| 5926 | British Columbia - Comox Valley | Colombie-Britannique - Comox Valley |
| 5927 | British Columbia - Powell River | Colombie-Britannique - Powell River |
| 5929 | British Columbia - Sunshine Coast | Colombie-Britannique - Sunshine Coast |
| 5931 | British Columbia - Squamish-Lillooet | Colombie-Britannique - Squamish-Lillooet |
| 5933 | British Columbia - Thompson-Nicola | Colombie-Britannique - Thompson-Nicola |
| 5935 | British Columbia - Central Okanagan | Colombie-Britannique - Central Okanagan |
| 5937 | British Columbia - North Okanagan | Colombie-Britannique - North Okanagan |
| 5939 | British Columbia - Columbia-Shuswap | Colombie-Britannique - Columbia-Shuswap |
| 5941 | British Columbia - Cariboo | Colombie-Britannique - Cariboo |
| 5943 | British Columbia - Mount Waddington | Colombie-Britannique - Mount Waddington |
| 5945 | British Columbia - Central Coast | Colombie-Britannique - Central Coast |
| 5947 | British Columbia - Skeena-Queen Charlotte | Colombie-Britannique - Skeena-Queen Charlotte |
| 5949 | British Columbia - Kitimat-Stikine | Colombie-Britannique - Kitimat-Stikine |
| 5951 | British Columbia - Bulkley-Nechako | Colombie-Britannique - Bulkley-Nechako |
| 5953 | British Columbia - Fraser-Fort George | Colombie-Britannique - Fraser-Fort George |
| 5955 | British Columbia - Peace River | Colombie-Britannique - Peace River |
| 5957 | British Columbia - Stikine | Colombie-Britannique - Stikine |
| 5959 | British Columbia - Northern Rockies | Colombie-Britannique - Northern Rockies |
| 6 | Territories | Territoires |
| 60 | Yukon | Yukon |
| 6001 | Yukon - Yukon | Yukon - Yukon |
| 61 | Northwest Territories | Territoires du Nord-Ouest |
| 6101 | Northwest Territories - Region 1 | Territoires du Nord-Ouest - Region 1 |
| 6102 | Northwest Territories - Region 2 | Territoires du Nord-Ouest - Region 2 |
| 6103 | Northwest Territories - Region 3 | Territoires du Nord-Ouest - Region 3 |
| 6104 | Northwest Territories - Region 4 | Territoires du Nord-Ouest - Region 4 |
| 6105 | Northwest Territories - Region 5 | Territoires du Nord-Ouest - Region 5 |
| 6106 | Northwest Territories - Region 6 | Territoires du Nord-Ouest - Region 6 |
| 62 | Nunavut | Nunavut |
| 6204 | Nunavut - Baffin | Nunavut - Baffin |
| 6205 | Nunavut - Keewatin | Nunavut - Keewatin |
| 6208 | Nunavut - Kitikmeot | Nunavut - Kitikmeot |

### `frequency` (Champs du jeu de données)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| as_needed | As Needed | Au besoin |
| continual | Continual | Continue |
| P1D | Daily | Quotidien |
| P0.33W | Three times per week | Trois fois par semaine |
| P0.5W | Two times per week | Deux fois par semaine |
| P1W | Weekly | Hebdomadaire |
| P2W | Every two weeks | Quinzomadaire |
| P0.5M | Twice monthly | Bimensuel |
| P1M | Monthly | Mensuel |
| P2M | Every two months | Bimestriel |
| P3M | Quarterly | Trimestriel |
| P4M | Every four months | Trois fois par année |
| P6M | Biannually | Semestriel |
| P1Y | Annually | Annuel |
| P2Y | Every two years | Biennal |
| P3Y | Every three years | Triennal |
| P4Y | Every four years | Quadriennal |
| P5Y | Every five years | Quinquennal |
| irregular | Irregular | Irrégulier |
| not_planned | Not Planned | Non planifié |
| unknown | Unknown | Inconnu |

### `status` (Champs du jeu de données)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| completed | Completed | Complété |
| historical_archive | Historical Archive | Archive historique |
| obsolete | Obsolete | Périmé |
| ongoing | Ongoing | En continu |
| planned | Planned | Planifié |
| required | Required | Requis |
| under_development | Under Development | En développement |
| proposed | Proposed | Proposé |

### `association_type` (Champs du jeu de données)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| cross_reference | Cross Reference | Référence croisée |
| larger_work_citation | Larger Work Citation | Référence générique |
| part_of_seamless_database | Part of Seamless Database | Partie de base de données continue |
| source | Source | Source |
| stereo_mate | Stereo Mate | Stéréo associée |
| is_composed_of | Is Composed Of | Est composé de |

### `spatial_representation_type` (Champs du jeu de données)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| vector | Vector | Vecteur |
| grid | Grid | Grille |
| text_table | Text Table | Texte table |
| tin | Tin | Tin |
| stereo_model | Stereo Model | Stéréomodèle |
| video | Video | Vidéo |

### `jurisdiction` (Champs du jeu de données)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| federal | Federal | Fédérale |
| provincial | Provincial | Provinciale |
| municipal | Municipal | Municipal |
| user | User | Utilisateur |

### `restrictions` (Champs du jeu de données)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| unrestricted | Unrestricted | Non affecté |

### `imso_approval` (Champs du jeu de données)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| false | No | Non |
| true | Yes | Oui |

### `ready_to_publish` (Champs du jeu de données)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| false | No | Non |
| true | Yes | Oui |

### `presentation_form` (Champs du jeu de données)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| document_digital | Document Digital | Document numérique |
| document_hardcopy | Document Hardcopy | Document papier |
| image_digital | Image Digital | Image numérique |
| image_hardcopy | Image Hardcopy | Image papier |
| map_digital | Map Digital | Carte numérique |
| map_hardcopy | Map Hardcopy | Carte papier |
| model_digital | Model Digital | Modèle numérique |
| model_hardcopy | Model Hardcopy | Maquette |
| profile_digital | Profile Digital | Profil numérique |
| profile_hardcopy | Profile Hardcopy | Profil papier |
| table_digital | Table Digital | Table numérique |
| table_hardcopy | Table Hardcopy | Table papier |
| video_digital | Video Digital | Vidéo numérique |
| video_hardcopy | Video Hardcopy | Vidéo film |
| audio_digital | Audio Digital | Audio numérique |
| audio_hardcopy | Audio Hardcopy | Audio analogique |
| multimedia_digital | Multimedia Digital | Multimédia numérique |
| multimedia_hardcopy | Multimedia Hardcopy | Multimédia analogique |
| diagram_digital | Diagram Digital | Diagramme numérique |
| diagram_hardcopy | Diagram Hardcopy | Diagramme papier |

### `display_flags` (Champs du jeu de données)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| fgp_viewer | FGP viewer is supported | FGP viewer is supported |

### `resource_type` (Champs de ressource)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| abstract | Abstract | Sommaire |
| agreement | Agreement | Entente |
| contractual_material | Agreement - Contractual Material | Entente - contenu contractuel |
| intergovernmental_agreement | Agreement - Intergovernmental Agreement | Entente - entente intergouvernementale |
| lease | Agreement - Lease | Entente - bail |
| memorandum_of_understanding | Agreement - Memorandum of Understanding | Entente - protocole d’entente |
| nondisclosure_agreement | Agreement - Nondisclosure Agreement | Entente - accord de non divulgation |
| servicelevel_agreement | Agreement - Service-Level Agreement | Entente - entente de niveau de service |
| affidavit | Affidavit | Affidavit |
| application | Application | Application |
| api | API | API |
| architectural_or_technical_design | Architectural or Technical Design | Conception architecturale ou technique |
| article | Article | Article |
| assessment | Assessment | Évaluation |
| audit | Assessment - Audit | Évaluation - audit |
| environmental_assessment | Assessment - Environmental Assessment | Évaluation - évaluation environnementale |
| examination | Assessment - Examination | Évaluation - examen |
| gap_assessment | Assessment - Gap Assessment | Évaluation - évaluation des écarts |
| lessons_learned | Assessment - Lessons Learned | Évaluation - leçons apprises |
| performance_indicator | Assessment - Performance indicator | Évaluation - indicateur de rendement |
| risk_assessment | Assessment - Risk Assessment | Évaluation - évaluation des risques |
| biography | Biography | Biographie |
| briefing_material | Briefing Material | Matériel de breffage |
| backgrounder | Briefing Material - Backgrounder | Matériel de breffage - précis d’information |
| business_case | Business Case | Analyse de rentabilisation |
| claim | Claim | Réclamation |
| comments | Comments | Commentaires |
| conference_proceedings | Conference Proceedings | Actes de la conférence |
| consultation | Consultation | Consultation |
| contact_information | Contact Information | Coordonnées |
| correspondence | Correspondence | Correspondance |
| ministerial_correspondence | Correspondence - Ministerial Correspondence | Correspondance - correspondance ministérielle |
| memorandum | Correspondence - Memorandum | Correspondance - note de service |
| data_dictionary | Data Dictionary | Dictionnaire de données |
| dataset | Dataset | Jeu de données |
| delegation_of_authority | Delegation of Authority | Délégation des pouvoirs |
| educational_material | Educational Material | Matériel pédagogique |
| employment_opportunity | Employment Opportunity | Possibilité d’emploi |
| event | Event | Événement |
| fact_sheet | Fact Sheet | Feuille de renseignements |
| financial_material | Financial Material | Document financier |
| budget | Financial Material - Budget | Document financier - budget |
| funding_proposal | Financial Material - Funding Proposal | Document financier - proposition de financement |
| invoice | Financial Material - Invoice | Document financier - facture |
| financial_statement | Financial Material - Financial Statement | Document financier - états financiers |
| form | Form | Formulaire |
| framework | Framework | Cadre |
| geospatial_material | Geospatial Material | Matériel géospatial |
| guide | Guide | Guide |
| best_practices | Guide - Best Practices | Guide - pratiques exemplaires |
| intellectual_property_statement | Intellectual Property Statement | Énoncé sur la propriété intellectuelle |
| legal_complaint | Legal Complaint | Plainte légale |
| legal_opinion | Legal Opinion | Avis juridique |
| legislation_and_regulations | Legislation and Regulations | Lois et règlements |
| licenses_and_permits | Licenses and Permits | Licences et permis |
| literary_material | Literary Material | Ouvrages littéraires |
| statement | Media Release - Statement | Communiqué de presse - énoncé |
| media_release | Media Release | Communiqué de presse |
| meeting_material | Meeting Material | Documentation de la réunion |
| agenda | Meeting Material - Agenda | Documentation de la réunion - programme |
| minutes | Meeting Material - Minutes | Documentation de la réunion - procès-verbaux |
| memorandum_to_cabinet | Memorandum to Cabinet | Mémoire au Cabinet |
| multimedia_resource | Multimedia Resource | Ressource multimédia |
| notice | Notice | Avis |
| organizational_description | Organizational Description | Description organisationnelle |
| plan | Plan | Plan |
| business_plan | Plan - Business Plan | Plan - plan d’activités |
| strategic_plan | Plan - Strategic Plan | Plan - plan stratégique |
| policy | Policy | Politique |
| white_paper | Policy - White Paper | Politique - livre blanc |
| presentation | Presentation | Présentation |
| procedure | Procedure | Procédure |
| profile | Profile | Profil |
| project_material | Project Material | Documents du Projet |
| project_charter | Project Material - Project Charter | Documents du projet - charte de projet |
| project_plan | Project Material - Project Plan | Documents du projet - plan du projet |
| project_proposal | Project Material - Project Proposal | Documents du projet - proposition de projet |
| promotional_material | Promotional Material | Documents promotionnels |
| publication | Publication | Publication |
| faq | Q & A - FAQ | Q et R - foire aux questions |
| record_of_decision | Record of Decision | Compte Rendu des Décisions |
| report | Report | Rapport |
| annual_report | Report - Annual Report | Rapport - rapport annuel |
| interim_report | Report - Interim Report | Rapport - rapport d’étape |
| research_proposal | Research Proposal | Projet de recherche |
| resource_list | Resource List | Liste de référence |
| routing_slip | Routing Slip | Bordereau d’acheminement |
| schema | Schema | Schéma |
| blog_entry | Social Media Resource - Blog Entry | Ressources des médias sociaux - entrée de blogue |
| sound_recording | Sound Recording | Enregistrement sonore |
| specification | Specification | Spécification |
| statistics | Statistics | Statistiques |
| still_image | Still Image | Image fixe |
| submission | Submission | Présentation |
| survey | Survey | Sondage |
| terminology | Terminology | Terminologie |
| terms_of_reference | Terms of Reference | Mandat |
| tool | Tool | Outil |
| training_material | Training Material | Matériel didactique |
| transcript | Transcript | Transcription |
| website | Website | Site Web |
| web_service | Web Service | Service Web |
| workflow | Workflow | Flux des travaux |

### `character_set` (Champs de ressource)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| UTF-8 |  |  |
| US-ASCII |  |  |
| ISO-10646-UCS-2 | UCS-2 | UCS-2 |
| ISO-10646-UCS-4 | UCS-4 | UCS-4 |
| UTF-7 |  |  |
| UTF-16 |  |  |
| ISO-8859-1 |  |  |
| ISO-8859-2 |  |  |
| ISO-8859-3 |  |  |
| ISO-8859-4 |  |  |
| ISO-8859-5 |  |  |
| ISO-8859-6 |  |  |
| ISO-8859-7 |  |  |
| ISO-8859-8 |  |  |
| ISO-8859-9 |  |  |
| ISO-8859-10 |  |  |
| TIS-620 | ISO-8859-11 | ISO-8859-11 |
| ISO-8859-13 |  |  |
| ISO-8859-14 |  |  |
| ISO-8859-15 |  |  |
| ISO-8859-16 |  |  |
| JIS_Encoding |  |  |
| Shift_JIS |  |  |
| EUC-JP |  |  |
| EUC-KR |  |  |
| Big5 |  |  |
| GB2312 |  |  |
| EBCDIC-US |  |  |

### `format` (Champs de ressource)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| AAC |  |  |
| AIFF |  |  |
| APRX |  |  |
| ASCII Grid | ASCII Grid | Grille ASCII |
| APK | Android Application | Application Android |
| AVI |  |  |
| BAG |  |  |
| BAM |  |  |
| BMP |  |  |
| BUFR |  |  |
| BWF |  |  |
| CAP |  |  |
| CCT |  |  |
| CDED ASCII |  |  |
| CDF |  |  |
| CDR |  |  |
| COD | Blackberry Application | Application Blackberry |
| COG | Cloud Optimized GeoTIFF | GeoTIFF optimisé pour le cloud |
| CSV |  |  |
| DBD |  |  |
| DBF |  |  |
| DICOM |  |  |
| DNG |  |  |
| DOC |  |  |
| DOCX |  |  |
| DXF |  |  |
| E00 |  |  |
| ECW |  |  |
| EDI |  |  |
| EMF |  |  |
| EPUB3 |  |  |
| EPUB2 |  |  |
| EPS |  |  |
| ESRI REST |  |  |
| FGDB/GDB |  |  |
| FITS |  |  |
| Flat raster binary | Flat raster binary | Binaire raster plat |
| FLV |  |  |
| GDB | GeoSoftDatabases | GeoSoftDatabases |
| GeoParquet |  |  |
| GeoPDF |  |  |
| GeoRSS |  |  |
| GeoTIF |  |  |
| GEOJSON |  |  |
| GPKG | GeoPackage | GeoPackage |
| GIF |  |  |
| GML |  |  |
| GRD | GeoSoftGrids | GeoSoftGrids |
| GRIB1 |  |  |
| GRIB2 |  |  |
| GZ | Gzip | Gzip |
| HDF |  |  |
| HTML |  |  |
| IATI |  |  |
| IPA | iOS Application | Application iOS |
| JAR |  |  |
| JFIF |  |  |
| JP2 |  |  |
| JPG |  |  |
| JSON |  |  |
| JSONLD | JSON-LD | JSON-LD |
| JSONL |  |  |
| KML |  |  |
| KMZ |  |  |
| LAS |  |  |
| LYR |  |  |
| TAB | MapInfo | MapInfo |
| MAPX |  |  |
| MRC |  |  |
| MFX |  |  |
| MOV |  |  |
| MKV |  |  |
| MPEG |  |  |
| MPEG-1 |  |  |
| MP3 |  |  |
| MP4 |  |  |
| MXD |  |  |
| NetCDF |  |  |
| ODP |  |  |
| ODS |  |  |
| ODT |  |  |
| PBIX |  |  |
| PDF |  |  |
| PDF/A-1 |  |  |
| PDF/A-2 |  |  |
| PDF/UA |  |  |
| PNG |  |  |
| PPT |  |  |
| QLR |  |  |
| PBF |  |  |
| PPTX |  |  |
| RDF |  |  |
| TTL | RDF Turtle | RDF Turtle |
| NT | RDF n-triples | RDF n-triples |
| RDFa |  |  |
| RSS |  |  |
| RTF |  |  |
| SAM |  |  |
| SAR |  |  |
| SAS |  |  |
| SAV |  |  |
| SEGY |  |  |
| SHP |  |  |
| SQL |  |  |
| SQLITE3 | SQL Lite3 | SQL Lite3 |
| SQLITE | SQL Lite | SQL Lite |
| SVG |  |  |
| TIFF |  |  |
| TRIG |  |  |
| TRIX |  |  |
| TFW |  |  |
| TSV |  |  |
| TXT |  |  |
| VPF |  |  |
| WATERML1 | WaterML 1.0 | WaterML 1.0 |
| WATERML2 | WaterML 2.0 | WaterML 2.0 |
| WAV |  |  |
| WCS |  |  |
| WFS |  |  |
| WMS |  |  |
| WMTS |  |  |
| WMV |  |  |
| WPS |  |  |
| XML |  |  |
| XLS |  |  |
| XLSM |  |  |
| XLSX |  |  |
| ZIP |  |  |
| other | Other | Autre |
| unknown | Unknown | Inconnu |

### `language` (Champs de ressource)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| en | English | anglais |
| fr | French | français |
| sq | Albanian | albanais |
| alg | Algonquian languages | algonquines, langues |
| am | Amharic | amharique |
| apa | Apache languages | apache |
| ar | Arabic | arabe |
| hy | Armenian | arménien |
| art | Artificial (Other) | artificielles, autres langues |
| bat | Baltic (Other) | baltiques, autres langues |
| be | Belarusian | biélorusse |
| bn | Bengali | bengali |
| bs | Bosnian | bosniaque |
| bg | Bulgarian | bulgare |
| ca | Catalan | catalan |
| chr | Cherokee | cherokee |
| chy | Cheyenne | cheyenne |
| zh-cn | Chinese (Simplified) | chinois (simplifié) |
| zh-hk | Chinese (Traditional) | chinois (traditionnel) |
| chp | Chipewyan | chipewyan |
| cr | Cree | cree |
| crp | Creoles and pidgins | créoles et pidgins |
| hr | Croatian | croate |
| cs | Czech | tchèque |
| da | Danish | danois |
| dgr | Dogrib | dogrib |
| nl | Dutch | néerlandais |
| fi | Finnish | finnois |
| fil | Filipino | filipino |
| gl | Galician | galicien |
| de | German | allemand |
| el | Greek, Modern (1453-) | grec moderne (après 1453) |
| gu | Gujarati | goudjrati |
| he | Hebrew | hébreu |
| hi | Hindi | hindi |
| hu | Hungarian | hongrois |
| id | Indonesian | indonésien |
| moe | Innu-Aimun | innu-aimun |
| inuinnaqtun | Inuinnaqtun | innuinaqtun |
| iu | Inuktitut | inuktitut |
| inuvialuqtun | Inuvialuqtun | inuvialuqtun |
| iro | Iroquoian languages | iroquoises, langues (famille) |
| it | Italian | italien |
| ja | Japanese | japonais |
| ko | Korean | coréen |
| ku | Kurdish | kurde |
| la | Latin | latin |
| mic | Micmac | micmac |
| mis | Miscellaneous languages | diverses, langues |
| moh | Mohawk | mohawk |
| mul | Multiple languages | multilingue |
| nv | Navajo | navaho |
| wak | Nootkan | nootkan |
| nai | North American Indian | indiennes d'Amérique du Nord |
| no | Norwegian | norvégien |
| nunatsiavummiutut | Nunatsiavummiutut | nunatsiavummiutut |
| oj | Ojibwa | ojibwa |
| fa | Persian | persan |
| phi | Philippine (Other) | philippines, autres langues |
| crk | Plains Cree | cris des plaines |
| pl | Polish | polonais |
| pt | Portuguese | portugais |
| pa | Punjabi | pendjabi |
| ro | Romanian | roumain |
| ru | Russian | russe |
| sal | Salishan | salishan |
| sr | Serbian | serbe |
| sgn | Sign Languages | langage gestuel |
| sio | Siouan languages | sioux, langues |
| sk | Slovak | slovaque |
| so | Somali | somali |
| es | Spanish; Castilian | espagnol; castillan |
| ss | Swahili | swahili |
| sv | Swedish | suédois |
| tl | Tagalog | tagalog |
| ta | Tamil | tamoul |
| th | Thai | thaï |
| ti | Tigrinya | tigrigna |
| tr | Turkish | turc |
| uk | Ukrainian | ukrainien |
| und | Undetermined | indéterminée |
| ur | Urdu | ourdou |
| vi | Vietnamese | vietnamien |
| cy | Welsh | gallois |
| yi | Yiddish | yiddish |
| zxx | No linguistic content; Not applicable | pas de contenu linguistique; non applicable |

### `data_quality` (Champs de ressource)

| Valeur | Étiquette (EN) | Étiquette (FR) |
|---|---|---|
| data_includes_uris | The most important data items in this resource have a URI, e.g. data in RDF format | Les plus importants éléments des données de cette ressource sont dotés d’un URI, p. ex., des données en format RDF |
| data_includes_links | The data includes links to other data for providing context, and those links are kept up to date (not broken) | Les données comprennent des liens à d’autres données qui accordent un contexte, et ces liens sont gardés à jour (non brisés) |

