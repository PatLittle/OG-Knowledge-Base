# Dataset schema

Source: `https://open.canada.ca/data/api/action/scheming_dataset_schema_show?type=dataset&expanded=true`

If **Form snippet** is empty, this field is **API only**.

## Dataset fields (53)

| Field | Label | Help text | Required | Form snippet | Preset | Validators | Notes |
|---|---|---|---|---|---|---|---|
| id |  |  | No | API only | canada_dataset_id | canada_validate_generate_uuid unicode_safe name_validator package_id_does_not_exist |  |
| name |  |  | No | API only | canada_dataset_name | if_empty_same_as(id) unicode_safe not_empty canada_validate_generate_uuid |  |
| collection | Collection Type | The collection (domain specific) to which the metadata record belongs, Example: Non-Spatial | Yes | select.html | canada_collection | scheming_required string_safe scheming_choices | choices=17 |
| metadata_contact | Metadata contact |  | No | API only | fluent_text | fluent_text |  |
| parent_id | Parent identifier |  | No | API only |  | scheming_required string_safe |  |
| hierarchy_level | Hierarchy level |  | No | API only |  | scheming_required string_safe |  |
| file_id | File Identifier |  | No | API only |  | scheming_required string_safe |  |
| short_key | Short Key |  | No | API only |  | scheming_required string_safe |  |
| title_translated | Title | The English name by which the dataset is known | Yes | fluent_text.html | canada_title | fluent_text |  |
| owner_org | Publisher - Current Organization Name | The Title of the current Organization (GC Department or Agency) primarily responsible for publishing the dataset | Yes | organization_autocomplete.html | canada_owner_org | scheming_required string_safe owner_org_validator |  |
| org_title_at_publication | Publisher - Organization Name at Publication | The english organization Title at publication Time. Please leave blank if the organization name at time of publication is identical to your current organization name. | No | fluent_text.html | canada_org_title_at_publication | fluent_text scheming_required json_string canada_copy_from_org_name |  |
| org_section | Publisher - Organization Section Name | The English names of the work groups, units of work, business units, etc. of the organization that publishes the dataset (separate multiple names by commas). | No | fluent_text.html | canada_org_section_name | fluent_text |  |
| creator | Creator | Individual entities (persons) primarily responsible for making the dataset (separate multiple entities by commas) | No | API only | canada_creator | ignore_missing string_safe |  |
| position_name | Position Name |  | No | API only | fluent_text | fluent_text |  |
| responsible_role | Role |  | No | API only |  | scheming_required string_safe |  |
| contact_information | Contact Information |  | No | API only |  | scheming_required json_string_has_en_fr_keys |  |
| topic_category | Topic category |  | No | API only |  | scheming_multiple_choice | choices=19 |
| contributor | Contributor | The English names of entities (persons, groups, GC Departments or Agencies) that contributed to the dataset (separate multiple entities by commas) | No | fluent_text.html | canada_contributor | fluent_text |  |
| maintainer_email | Contact Email | The contact person's email for the dataset. Adding a Contact Email allows Portal users to send feedback and questions. This field is optional but recommended. | No | API only | canada_maintainer_email | scheming_required string_safe strip_value email_validator |  |
| maintainer_contact_form | Contact Form |  | No | API only | canada_maintainer_contact_form | fluent_text |  |
| credit | Credit |  | No | API only | canada_credit |  | repeating_subfields |
| notes_translated | Description | An account of the dataset, in English. A description may include but is not limited to: an abstract, a table of contents, or a free-text account of the resource. | Yes | fluent_markdown.html | canada_notes | fluent_text |  |
| keywords | Keywords | Commonly used words or phrases which describe the dataset, in English. (Separate multiple entries by commas) | Yes | fluent_tags.html | canada_keywords | fluent_tags |  |
| subject | Subject | The topic of the content of the dataset. You may select or deselect multiple subjects (Ctrl+Click) | Yes | multiple_select.html | canada_subject | scheming_multiple_choice | choices=19 |
| audience | Audience | A description of the audience or group of people for whom the described dataset is intended or useful. You may select or deselect multiple options (Ctrl+Click) | No | multiple_select.html | canada_audience | scheming_multiple_choice | choices=24 |
| place_of_publication | Place of Publication | The region where the dataset was originally published. You may select or deselect multiple options (Ctrl+Click)  | No | multiple_select.html | canada_geographic_region | scheming_multiple_choice | choices=310 |
| spatial | Spatial | The range of spatial applicability of a dataset, as a GeoJson string. | No | API only | canada_spatial | scheming_required string_safe geojson_validator |  |
| geographic_region | Geographic Region Name | The geographic region of the dataset. You may select or deselect multiple regions (Ctrl+Click) | No | multiple_select.html | canada_geographic_region | scheming_multiple_choice | choices=310 |
| time_period_coverage_start | Time Period Coverage Start | The start date of the period covered by the dataset (YYYY-MM-DD) | No | date.html | canada_time_period_coverage_start | scheming_required string_safe isodate |  |
| time_period_coverage_end | Time Period Coverage End | The end date of the period covered by the dataset (YYYY-MM-DD) | No | date.html | canada_time_period_coverage_end | scheming_required string_safe isodate |  |
| frequency | Maintenance and Update Frequency | The frequency with which changes and additions are made to the initial dataset | Yes | select.html | canada_frequency | scheming_required string_safe scheming_choices | choices=21 |
| date_published | Date Published | The date of issuance (e.g., publication) of the dataset (YYYY-MM-DD) | Yes | date.html | canada_date_published | scheming_required string_safe isodate no_future_date |  |
| date_modified | Date Modified | The date on which the dataset was updated (YYYY-MM-DD) | No | date.html | canada_date_modified | scheming_required string_safe isodate no_future_date |  |
| program_page_url | Homepage | English program or homepage that can be navigated to gain additional or contextual information about the dataset | No | fluent_text.html | canada_program_page_url | fluent_text |  |
| federated_date_modified | Federated Dateset Modified Date | The date on which the federated data partner's dataset was modified (YYYY-MM-DD) | No | API only | canada_federated_date_modified | scheming_required isodate convert_to_json_if_date |  |
| data_series_name | Series Title | The English name of the series, or aggregate dataset, of which the dataset is a part | No | fluent_text.html | canada_data_series_name | fluent_text |  |
| data_series_issue_identification | Series Issue ID | English identification of the series’ issue information | No | fluent_text.html | canada_data_series_issue_identification | fluent_text |  |
| digital_object_identifier | Digital Object Identifier (DOI) | The Digital Object Identifier assigned to the dataset. For more information visit: http://cisti-icist.nrc-cnrc.gc.ca/eng/services/cisti/datacite-canada/index.html | No | API only | canada_digital_object_identifier |  |  |
| reference_system_information | Reference System Information |  | No | API only |  | scheming_required string_safe |  |
| distributor | Distributor |  | No | API only |  | scheming_required json_string_has_en_fr_keys |  |
| status | Status |  | No | API only |  | scheming_required string_safe scheming_choices | choices=8 |
| association_type | Association Type |  | No | API only |  | scheming_multiple_choice | choices=6 |
| aggregate_identifier | Aggregate dataset identifier |  | No | API only |  | scheming_required string_safe |  |
| spatial_representation_type | Spatial Representation Type |  | No | API only | canada_spatial_representation_type | scheming_multiple_choice | choices=6 |
| jurisdiction | Jurisdiction | The extent or range of judicial, law enforcement or other authority. Example: Level of government that contributed the dataset. | Yes | select.html | canada_jurisdiction | scheming_required string_safe scheming_choices | choices=4 |
| license_id | Licence | The licence applied to the dataset | Yes | license.html | canada_license_id | scheming_required string_safe license_choices |  |
| restrictions | Access Restrictions | The access restrictions of the dataset | Yes | select.html | canada_restrictions | scheming_required string_safe scheming_choices | choices=1 |
| imso_approval | Approval |  | Yes | imso_approval_select.html | canada_imso_approval | scheming_required string_safe scheming_choices | choices=2 |
| ready_to_publish | Ready to Publish | Selecting ‘Yes’ will set this dataset as ready to publish on the Open Government Portal. Selecting ‘No’ will save it as a ‘draft’. If the dataset is already published on the portal, selecting 'No' will unpublish it. | Yes | select.html | canada_ready_to_publish | scheming_required string_safe scheming_choices | choices=2 |
| portal_release_date | Portal Release Date | The date the dataset may be published on the Portal (YYYY-MM-DD) | No | portal_release_date.html | canada_portal_release_date | protect_portal_release_date ignore_empty scheming_required isodate convert_to_json_if_date |  |
| presentation_form | Presentation Form | The form in which the resource is available | No | API only |  | scheming_required scheming_choices | choices=20 |
| display_flags | Display Flags |  | No | API only |  | scheming_multiple_choice | choices=1 |
| relationship | Relationship |  | No | API only | canada_dataset_relationship |  | repeating_subfields |

## Resource fields (17)

| Field | Label | Help text | Required | Form snippet | Preset | Validators | Notes |
|---|---|---|---|---|---|---|---|
| unique_identifier | Unique Identifier | A unique phrase or string which identifies the resource. | No | API only | canada_resource_unique_identifier |  |  |
| name_translated | Title | An English name given to the resource. | Yes | fluent_text.html | canada_resource_name | fluent_text |  |
| relationship | Relationship |  | No | API only | canada_resource_relationship |  | repeating_subfields |
| date_published | Date Published | Date of formal issuance (e.g., publication) of the resource. | No | date.html | canada_resource_date_published | scheming_required |  |
| resource_type | Resource Type | The nature or genre of the content of the resource | Yes | select.html | canada_resource_type | scheming_required canada_static_rtype_tabledesigner scheming_choices | choices=103 |
| size | Size | The [estimated] size of a distribution in bytes. | No | API only | canada_resource_size | ignore_missing int_validator |  |
| character_set | Character Set | This is the character set of the resource | No | select.html | canada_resource_character_set | scheming_required canada_static_charset_tabledesigner scheming_choices | choices=28 |
| format | Format | The file format, physical medium, or dimensions of the resource. | No | select.html | canada_resource_format | canada_guess_resource_format scheming_required unicode_safe scheming_required scheming_choices | choices=130 |
| language | Language | The language of the resource. You may select or deselect multiple languages (Ctrl+Click). | Yes | multiple_select.html | canada_resource_language | scheming_multiple_choice | choices=86 |
| url | Download URL | The location for online access to the distribution of the resource, if the file resides elsewhere. | No | upload.html | canada_resource_url | canada_security_upload_presence canada_security_upload_type scheming_required unicode_safe remove_whitespace |  |
| data_quality | Data Includes URIs and Links |  | No | multiple_checkbox.html | canada_resource_data_quality | scheming_multiple_choice | choices=2 |
| schema |  |  | No | API only | canada_resource_validation_schema | ignore |  |
| validation_options |  |  | No | API only | canada_resource_validation_options | ignore |  |
| validation_status | Validation status |  | No | API only | canada_resource_validation_status |  |  |
| validation_timestamp | Validation timestamp |  | No | API only | canada_resource_validation_timestamp |  |  |
| related_type |  |  | No | API only | _legacy_canada_related_type | ignore |  |
| related_relationship |  |  | Yes | API only | _legacy_canada_related_relationship | ignore |  |

## Controlled value lists

### `collection` (Dataset fields)

| Value | Label (EN) | Label (FR) |
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

### `topic_category` (Dataset fields)

| Value | Label (EN) | Label (FR) |
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

### `subject` (Dataset fields)

| Value | Label (EN) | Label (FR) |
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

### `audience` (Dataset fields)

| Value | Label (EN) | Label (FR) |
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

### `place_of_publication` (Dataset fields)

| Value | Label (EN) | Label (FR) |
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

### `geographic_region` (Dataset fields)

| Value | Label (EN) | Label (FR) |
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

### `frequency` (Dataset fields)

| Value | Label (EN) | Label (FR) |
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

### `status` (Dataset fields)

| Value | Label (EN) | Label (FR) |
|---|---|---|
| completed | Completed | Complété |
| historical_archive | Historical Archive | Archive historique |
| obsolete | Obsolete | Périmé |
| ongoing | Ongoing | En continu |
| planned | Planned | Planifié |
| required | Required | Requis |
| under_development | Under Development | En développement |
| proposed | Proposed | Proposé |

### `association_type` (Dataset fields)

| Value | Label (EN) | Label (FR) |
|---|---|---|
| cross_reference | Cross Reference | Référence croisée |
| larger_work_citation | Larger Work Citation | Référence générique |
| part_of_seamless_database | Part of Seamless Database | Partie de base de données continue |
| source | Source | Source |
| stereo_mate | Stereo Mate | Stéréo associée |
| is_composed_of | Is Composed Of | Est composé de |

### `spatial_representation_type` (Dataset fields)

| Value | Label (EN) | Label (FR) |
|---|---|---|
| vector | Vector | Vecteur |
| grid | Grid | Grille |
| text_table | Text Table | Texte table |
| tin | Tin | Tin |
| stereo_model | Stereo Model | Stéréomodèle |
| video | Video | Vidéo |

### `jurisdiction` (Dataset fields)

| Value | Label (EN) | Label (FR) |
|---|---|---|
| federal | Federal | Fédérale |
| provincial | Provincial | Provinciale |
| municipal | Municipal | Municipal |
| user | User | Utilisateur |

### `restrictions` (Dataset fields)

| Value | Label (EN) | Label (FR) |
|---|---|---|
| unrestricted | Unrestricted | Non affecté |

### `imso_approval` (Dataset fields)

| Value | Label (EN) | Label (FR) |
|---|---|---|
| false | No | Non |
| true | Yes | Oui |

### `ready_to_publish` (Dataset fields)

| Value | Label (EN) | Label (FR) |
|---|---|---|
| false | No | Non |
| true | Yes | Oui |

### `presentation_form` (Dataset fields)

| Value | Label (EN) | Label (FR) |
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

### `display_flags` (Dataset fields)

| Value | Label (EN) | Label (FR) |
|---|---|---|
| fgp_viewer | FGP viewer is supported | FGP viewer is supported |

### `resource_type` (Resource fields)

| Value | Label (EN) | Label (FR) |
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

### `character_set` (Resource fields)

| Value | Label (EN) | Label (FR) |
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

### `format` (Resource fields)

| Value | Label (EN) | Label (FR) |
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

### `language` (Resource fields)

| Value | Label (EN) | Label (FR) |
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

### `data_quality` (Resource fields)

| Value | Label (EN) | Label (FR) |
|---|---|---|
| data_includes_uris | The most important data items in this resource have a URI, e.g. data in RDF format | Les plus importants éléments des données de cette ressource sont dotés d’un URI, p. ex., des données en format RDF |
| data_includes_links | The data includes links to other data for providing context, and those links are kept up to date (not broken) | Les données comprennent des liens à d’autres données qui accordent un contexte, et ces liens sont gardés à jour (non brisés) |

