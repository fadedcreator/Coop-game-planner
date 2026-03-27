/* ═══════════════════════════════════════════════════════════
   CONSTANTS & DEFAULTS
═══════════════════════════════════════════════════════════ */

const STORAGE_KEY = 'coop-game-planner-v6';

// 53 co-op games (local or online). All Steam portrait covers (library_600x900).
// Falls back to gradient placeholder on onerror.
const DEFAULT_GAMES = [
  // ── Finished ─────────────────────────────────────────────────
  { id: 1,  title: 'It Takes Two',                    platform: 'PC', status: 'Finished',     rating: 5, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1426210/library_600x900.jpg', dateAdded: '2023-01-10T00:00:00.000Z' },
  { id: 2,  title: 'Portal 2',                        platform: 'PC', status: 'Finished',     rating: 5, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/620/library_600x900.jpg',     dateAdded: '2023-01-18T00:00:00.000Z' },
  { id: 3,  title: 'A Way Out',                       platform: 'PC', status: 'Finished',     rating: 4, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1222700/library_600x900.jpg', dateAdded: '2023-02-05T00:00:00.000Z' },
  { id: 4,  title: 'Unravel Two',                     platform: 'PC', status: 'Finished',     rating: 4, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1107970/library_600x900.jpg', dateAdded: '2023-02-20T00:00:00.000Z' },
  { id: 5,  title: 'Castle Crashers Remastered',      platform: 'PC', status: 'Finished',     rating: 4, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/204360/library_600x900.jpg',  dateAdded: '2023-03-08T00:00:00.000Z' },
  { id: 6,  title: 'Battleblock Theater',             platform: 'PC', status: 'Finished',     rating: 3, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/238460/library_600x900.jpg',  dateAdded: '2023-03-22T00:00:00.000Z' },

  // ── Playing ──────────────────────────────────────────────────
  { id: 7,  title: 'Baldur\'s Gate 3',                platform: 'PC', status: 'Playing',      rating: 5, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1086940/library_600x900.jpg', dateAdded: '2023-04-01T00:00:00.000Z' },
  { id: 8,  title: 'Cuphead',                         platform: 'PC', status: 'Playing',      rating: 4, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/268910/library_600x900.jpg',  dateAdded: '2023-04-14T00:00:00.000Z' },
  { id: 9,  title: 'Halo: The Master Chief Collection',platform: 'PC', status: 'Playing',     rating: 4, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/976730/library_600x900.jpg',  dateAdded: '2023-04-28T00:00:00.000Z' },
  { id: 10, title: 'Stardew Valley',                  platform: 'PC', status: 'Playing',      rating: 4, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/413150/library_600x900.jpg',  dateAdded: '2023-05-10T00:00:00.000Z' },
  { id: 11, title: 'Minecraft',                       platform: 'PC', status: 'Playing',      rating: 3, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1672970/library_600x900.jpg', dateAdded: '2023-05-22T00:00:00.000Z' },

  // ── Want to Play ─────────────────────────────────────────────
  { id: 12, title: 'Left 4 Dead 2',                   platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/550/library_600x900.jpg',      dateAdded: '2023-06-01T00:00:00.000Z' },
  { id: 13, title: 'Deep Rock Galactic',               platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/548430/library_600x900.jpg',  dateAdded: '2023-06-05T00:00:00.000Z' },
  { id: 14, title: 'Valheim',                          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/892970/library_600x900.jpg',  dateAdded: '2023-06-09T00:00:00.000Z' },
  { id: 15, title: 'Divinity: Original Sin 2',         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/435150/library_600x900.jpg',  dateAdded: '2023-06-13T00:00:00.000Z' },
  { id: 16, title: 'Monster Hunter: World',            platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/582010/library_600x900.jpg',  dateAdded: '2023-06-17T00:00:00.000Z' },
  { id: 17, title: 'Back 4 Blood',                     platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/924970/library_600x900.jpg',  dateAdded: '2023-06-21T00:00:00.000Z' },
  { id: 18, title: 'Warhammer: Vermintide 2',          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/552500/library_600x900.jpg',  dateAdded: '2023-06-25T00:00:00.000Z' },
  { id: 19, title: 'Sea of Thieves',                   platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1172620/library_600x900.jpg', dateAdded: '2023-06-29T00:00:00.000Z' },
  { id: 20, title: 'Don\'t Starve Together',           platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/322330/library_600x900.jpg',  dateAdded: '2023-07-03T00:00:00.000Z' },
  { id: 21, title: 'Terraria',                         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/105600/library_600x900.jpg',  dateAdded: '2023-07-07T00:00:00.000Z' },
  { id: 22, title: 'Risk of Rain 2',                   platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/632360/library_600x900.jpg',  dateAdded: '2023-07-11T00:00:00.000Z' },
  { id: 23, title: 'Overcooked! 2',                    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/728880/library_600x900.jpg',  dateAdded: '2023-07-15T00:00:00.000Z' },
  { id: 24, title: 'Human Fall Flat',                  platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/477160/library_600x900.jpg',  dateAdded: '2023-07-19T00:00:00.000Z' },
  { id: 25, title: 'Grounded',                         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/962130/library_600x900.jpg',  dateAdded: '2023-07-23T00:00:00.000Z' },
  { id: 26, title: 'Phasmophobia',                     platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/739630/library_600x900.jpg',  dateAdded: '2023-07-27T00:00:00.000Z' },
  { id: 27, title: 'Warhammer 40K: Darktide',          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1361210/library_600x900.jpg', dateAdded: '2023-07-31T00:00:00.000Z' },
  { id: 28, title: 'Remnant II',                       platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1282100/library_600x900.jpg', dateAdded: '2023-08-04T00:00:00.000Z' },
  { id: 29, title: 'The Forest',                       platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/242760/library_600x900.jpg',  dateAdded: '2023-08-08T00:00:00.000Z' },
  { id: 30, title: 'Sons of the Forest',               platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1326470/library_600x900.jpg', dateAdded: '2023-08-12T00:00:00.000Z' },
  { id: 31, title: 'Golf With Your Friends',           platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/431240/library_600x900.jpg',  dateAdded: '2023-08-16T00:00:00.000Z' },
  { id: 32, title: 'Among Us',                         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/945360/library_600x900.jpg',  dateAdded: '2023-08-20T00:00:00.000Z' },
  { id: 33, title: 'No Man\'s Sky',                    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/275850/library_600x900.jpg',  dateAdded: '2023-08-24T00:00:00.000Z' },
  { id: 34, title: 'Astroneer',                        platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/361420/library_600x900.jpg',  dateAdded: '2023-08-28T00:00:00.000Z' },
  { id: 35, title: 'Raft',                             platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/648800/library_600x900.jpg',  dateAdded: '2023-09-01T00:00:00.000Z' },
  { id: 36, title: 'Keep Talking and Nobody Explodes', platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/341800/library_600x900.jpg',  dateAdded: '2023-09-05T00:00:00.000Z' },
  { id: 37, title: 'Moving Out',                       platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/996770/library_600x900.jpg',  dateAdded: '2023-09-09T00:00:00.000Z' },
  { id: 38, title: 'Borderlands 3',                    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/397540/library_600x900.jpg',  dateAdded: '2023-09-13T00:00:00.000Z' },
  { id: 39, title: 'Dying Light',                      platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/239140/library_600x900.jpg',  dateAdded: '2023-09-17T00:00:00.000Z' },
  { id: 40, title: 'Lovers in a Dangerous Spacetime',  platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/252110/library_600x900.jpg',  dateAdded: '2023-09-21T00:00:00.000Z' },
  { id: 41, title: 'Trine 4: The Nightmare Prince',    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1000310/library_600x900.jpg', dateAdded: '2023-09-25T00:00:00.000Z' },
  { id: 42, title: 'Pummel Party',                     platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/880940/library_600x900.jpg',  dateAdded: '2023-09-29T00:00:00.000Z' },
  { id: 43, title: 'Destiny 2',                        platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1085660/library_600x900.jpg', dateAdded: '2023-10-03T00:00:00.000Z' },
  { id: 44, title: 'Warframe',                         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/230410/library_600x900.jpg',  dateAdded: '2023-10-07T00:00:00.000Z' },
  { id: 45, title: 'Overwatch 2',                      platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2357570/library_600x900.jpg', dateAdded: '2023-10-11T00:00:00.000Z' },
  { id: 46, title: 'The Division 2',                   platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/704030/library_600x900.jpg',  dateAdded: '2023-10-15T00:00:00.000Z' },
  { id: 47, title: 'Rocket League',                    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/252950/library_600x900.jpg',  dateAdded: '2023-10-19T00:00:00.000Z' },
  { id: 48, title: 'Apex Legends',                     platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1172470/library_600x900.jpg', dateAdded: '2023-10-23T00:00:00.000Z' },
  { id: 49, title: 'Rainbow Six Siege',                platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/359550/library_600x900.jpg',  dateAdded: '2023-10-27T00:00:00.000Z' },
  { id: 50, title: 'Dying Light 2',                    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/534380/library_600x900.jpg',  dateAdded: '2023-10-31T00:00:00.000Z' },
  { id: 51, title: 'Remnant: From the Ashes',          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/617290/library_600x900.jpg',  dateAdded: '2023-11-04T00:00:00.000Z' },
  { id: 52, title: 'Path of Exile',                    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/238960/library_600x900.jpg',  dateAdded: '2023-11-08T00:00:00.000Z' },
  { id: 53, title: 'Borderlands 2',                    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/49520/library_600x900.jpg',   dateAdded: '2023-11-12T00:00:00.000Z' },

  // ── Expanded catalog ─────────────────────────────────────
  { id: 54, title: 'Lethal Company',                        platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1966720/library_600x900.jpg',  dateAdded: '2023-11-16T00:00:00.000Z' },
  { id: 55, title: 'Helldivers 2',                          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/553850/library_600x900.jpg',   dateAdded: '2023-11-20T00:00:00.000Z' },
  { id: 56, title: 'Palworld',                              platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1623730/library_600x900.jpg',  dateAdded: '2023-11-24T00:00:00.000Z' },
  { id: 57, title: 'Barotrauma',                            platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/602960/library_600x900.jpg',   dateAdded: '2023-11-28T00:00:00.000Z' },
  { id: 58, title: 'Space Engineers',                       platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/244850/library_600x900.jpg',   dateAdded: '2023-12-02T00:00:00.000Z' },
  { id: 59, title: '7 Days to Die',                         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/251570/library_600x900.jpg',   dateAdded: '2023-12-06T00:00:00.000Z' },
  { id: 60, title: 'Payday 3',                              platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1272080/library_600x900.jpg',  dateAdded: '2023-12-10T00:00:00.000Z' },
  { id: 61, title: 'Warhammer 40K: Space Marine 2',         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2183900/library_600x900.jpg',  dateAdded: '2023-12-14T00:00:00.000Z' },
  { id: 62, title: 'Killing Floor 2',                       platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/232090/library_600x900.jpg',   dateAdded: '2023-12-18T00:00:00.000Z' },
  { id: 63, title: 'Zombie Army 4: Dead War',               platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1562420/library_600x900.jpg',  dateAdded: '2023-12-22T00:00:00.000Z' },
  { id: 64, title: 'Far Cry 5',                             platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/552520/library_600x900.jpg',   dateAdded: '2023-12-26T00:00:00.000Z' },
  { id: 65, title: 'Ghost Recon Wildlands',                 platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/365590/library_600x900.jpg',   dateAdded: '2023-12-30T00:00:00.000Z' },
  { id: 66, title: 'Satisfactory',                          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/526870/library_600x900.jpg',   dateAdded: '2024-01-03T00:00:00.000Z' },
  { id: 67, title: 'Factorio',                              platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/427520/library_600x900.jpg',   dateAdded: '2024-01-07T00:00:00.000Z' },
  { id: 68, title: 'Subnautica: Below Zero',                platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/848450/library_600x900.jpg',   dateAdded: '2024-01-11T00:00:00.000Z' },
  { id: 69, title: 'PlateUp!',                              platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1599600/library_600x900.jpg',  dateAdded: '2024-01-15T00:00:00.000Z' },
  { id: 70, title: 'Chivalry 2',                            platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1058510/library_600x900.jpg',  dateAdded: '2024-01-19T00:00:00.000Z' },
  { id: 71, title: 'We Were Here Together',                 platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/865360/library_600x900.jpg',   dateAdded: '2024-01-23T00:00:00.000Z' },
  { id: 72, title: 'Lara Croft and the Temple of Osiris',   platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/289690/library_600x900.jpg',   dateAdded: '2024-01-27T00:00:00.000Z' },
  { id: 73, title: 'Spiritfarer',                           platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/972660/library_600x900.jpg',   dateAdded: '2024-01-31T00:00:00.000Z' },
  { id: 74, title: 'Haven',                                 platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/983870/library_600x900.jpg',   dateAdded: '2024-02-04T00:00:00.000Z' },
  { id: 75, title: 'Sackboy: A Big Adventure',              platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1560260/library_600x900.jpg',  dateAdded: '2024-02-08T00:00:00.000Z' },
  { id: 76, title: 'Chicory: A Colorful Tale',              platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1123450/library_600x900.jpg',  dateAdded: '2024-02-12T00:00:00.000Z' },
  { id: 77, title: 'Deep Rock Galactic: Survivor',          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2321470/library_600x900.jpg',  dateAdded: '2024-02-16T00:00:00.000Z' },
  { id: 78, title: 'ARK: Survival Evolved',                 platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/346110/library_600x900.jpg',   dateAdded: '2024-02-20T00:00:00.000Z' },
  { id: 79, title: 'Conan Exiles',                          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/440900/library_600x900.jpg',   dateAdded: '2024-02-24T00:00:00.000Z' },
  { id: 80, title: 'Green Hell',                            platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/815370/library_600x900.jpg',   dateAdded: '2024-02-28T00:00:00.000Z' },
  { id: 81, title: 'Scrap Mechanic',                        platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/387990/library_600x900.jpg',   dateAdded: '2024-03-03T00:00:00.000Z' },
  { id: 82, title: 'Rust',                                  platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/252490/library_600x900.jpg',   dateAdded: '2024-03-07T00:00:00.000Z' },
  { id: 83,  title: 'Aliens: Fireteam Elite',                platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1150690/library_600x900.jpg',  dateAdded: '2024-03-11T00:00:00.000Z' },

  // ── Batch 3 ───────────────────────────────────────────────
  { id: 84,  title: 'Elden Ring',                            platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1245620/library_600x900.jpg',  dateAdded: '2024-03-15T00:00:00.000Z' },
  { id: 85,  title: 'Sea of Stars',                          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1929870/library_600x900.jpg',  dateAdded: '2024-03-19T00:00:00.000Z' },
  { id: 86,  title: 'Sekiro: Shadows Die Twice',             platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/814380/library_600x900.jpg',   dateAdded: '2024-03-23T00:00:00.000Z' },
  { id: 87,  title: 'Nioh 2',                                platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2325290/library_600x900.jpg',  dateAdded: '2024-03-27T00:00:00.000Z' },
  { id: 88,  title: 'Monster Hunter Rise',                   platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1446780/library_600x900.jpg',  dateAdded: '2024-03-31T00:00:00.000Z' },
  { id: 89,  title: 'Tekken 8',                              platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1778820/library_600x900.jpg',  dateAdded: '2024-04-04T00:00:00.000Z' },
  { id: 90,  title: 'Street Fighter 6',                      platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1794680/library_600x900.jpg',  dateAdded: '2024-04-08T00:00:00.000Z' },
  { id: 91,  title: 'Mortal Kombat 11',                      platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/976310/library_600x900.jpg',   dateAdded: '2024-04-12T00:00:00.000Z' },
  { id: 92,  title: 'Warhammer 40K: Inquisitor – Martyr',    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1264680/library_600x900.jpg',  dateAdded: '2024-04-16T00:00:00.000Z' },
  { id: 93,  title: 'Payday 2',                              platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/218620/library_600x900.jpg',   dateAdded: '2024-04-20T00:00:00.000Z' },
  { id: 94,  title: 'Sniper Elite 5',                        platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1029690/library_600x900.jpg',  dateAdded: '2024-04-24T00:00:00.000Z' },
  { id: 95,  title: 'Strange Brigade',                       platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/553310/library_600x900.jpg',   dateAdded: '2024-04-28T00:00:00.000Z' },
  { id: 96,  title: 'Outriders',                             platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/680420/library_600x900.jpg',   dateAdded: '2024-05-02T00:00:00.000Z' },
  { id: 97,  title: 'Deathloop',                             platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1252330/library_600x900.jpg',  dateAdded: '2024-05-06T00:00:00.000Z' },
  { id: 98,  title: 'Ghostrunner 2',                         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1850010/library_600x900.jpg',  dateAdded: '2024-05-10T00:00:00.000Z' },
  { id: 99,  title: 'Planet Crafter',                        platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1284190/library_600x900.jpg',  dateAdded: '2024-05-14T00:00:00.000Z' },
  { id: 100, title: 'Icarus',                                platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1149460/library_600x900.jpg',  dateAdded: '2024-05-18T00:00:00.000Z' },
  { id: 101, title: 'Miscreated',                            platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/299360/library_600x900.jpg',   dateAdded: '2024-05-22T00:00:00.000Z' },
  { id: 102, title: 'The Cycle: Frontier',                   platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/868270/library_600x900.jpg',   dateAdded: '2024-05-26T00:00:00.000Z' },
  { id: 103, title: 'Generation Zero',                       platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/704270/library_600x900.jpg',   dateAdded: '2024-05-30T00:00:00.000Z' },

  // ── Batch 4 — Horror / Asymmetric co-op ─────────────────
  { id: 104, title: 'World War Z: Aftermath',              platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1300400/library_600x900.jpg',  dateAdded: '2024-06-03T00:00:00.000Z' },
  { id: 105, title: 'GTFO',                                platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/493520/library_600x900.jpg',   dateAdded: '2024-06-07T00:00:00.000Z' },
  { id: 106, title: 'Devour',                              platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1274900/library_600x900.jpg',  dateAdded: '2024-06-11T00:00:00.000Z' },
  { id: 107, title: 'Propnight',                           platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1549180/library_600x900.jpg',  dateAdded: '2024-06-15T00:00:00.000Z' },
  { id: 108, title: 'Midnight Ghost Hunt',                 platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/915810/library_600x900.jpg',   dateAdded: '2024-06-19T00:00:00.000Z' },
  { id: 109, title: 'The Anacrusis',                       platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1294430/library_600x900.jpg',  dateAdded: '2024-06-23T00:00:00.000Z' },

  // ── Batch 4 — Puzzle / Co-op Adventure ──────────────────
  { id: 110, title: 'We Were Here Forever',                platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1903580/library_600x900.jpg',  dateAdded: '2024-06-27T00:00:00.000Z' },
  { id: 111, title: 'We Were Here Too',                    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/677160/library_600x900.jpg',   dateAdded: '2024-07-01T00:00:00.000Z' },
  { id: 112, title: 'Escape Simulator',                    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1435790/library_600x900.jpg',  dateAdded: '2024-07-05T00:00:00.000Z' },
  { id: 113, title: 'Phogs!',                              platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1126060/library_600x900.jpg',  dateAdded: '2024-07-09T00:00:00.000Z' },
  { id: 114, title: 'Can\'t Drive This',                   platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/976470/library_600x900.jpg',   dateAdded: '2024-07-13T00:00:00.000Z' },

  // ── Batch 4 — Party / Couch Co-op ────────────────────────
  { id: 115, title: 'Gang Beasts',                         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/285900/library_600x900.jpg',   dateAdded: '2024-07-17T00:00:00.000Z' },
  { id: 116, title: 'Heave Ho',                            platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1052550/library_600x900.jpg',  dateAdded: '2024-07-21T00:00:00.000Z' },
  { id: 117, title: 'Moving Out 2',                        platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1701160/library_600x900.jpg',  dateAdded: '2024-07-25T00:00:00.000Z' },
  { id: 118, title: 'Overcooked! All You Can Eat',         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1388880/library_600x900.jpg',  dateAdded: '2024-07-29T00:00:00.000Z' },
  { id: 119, title: 'Tools Up!',                           platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1096900/library_600x900.jpg',  dateAdded: '2024-08-02T00:00:00.000Z' },
  { id: 120, title: 'KeyWe',                               platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1326690/library_600x900.jpg',  dateAdded: '2024-08-06T00:00:00.000Z' },
  { id: 121, title: 'Embr',                                platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1306990/library_600x900.jpg',  dateAdded: '2024-08-10T00:00:00.000Z' },
  { id: 122, title: 'Stick Fight: The Game',               platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/674940/library_600x900.jpg',   dateAdded: '2024-08-14T00:00:00.000Z' },
  { id: 123, title: 'Totally Accurate Battle Simulator',   platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/508440/library_600x900.jpg',   dateAdded: '2024-08-18T00:00:00.000Z' },

  // ── Batch 4 — Action RPG Co-op ───────────────────────────
  { id: 124, title: 'Tiny Tina\'s Wonderlands',            platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1286680/library_600x900.jpg',  dateAdded: '2024-08-22T00:00:00.000Z' },
  { id: 125, title: 'Grim Dawn',                           platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/219990/library_600x900.jpg',   dateAdded: '2024-08-26T00:00:00.000Z' },
  { id: 126, title: 'Titan Quest Anniversary Edition',     platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/475150/library_600x900.jpg',   dateAdded: '2024-08-30T00:00:00.000Z' },
  { id: 127, title: 'Divinity: Original Sin Enhanced Ed.', platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/230230/library_600x900.jpg',   dateAdded: '2024-09-03T00:00:00.000Z' },
  { id: 128, title: 'Victor Vran',                         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/345180/library_600x900.jpg',   dateAdded: '2024-09-07T00:00:00.000Z' },
  { id: 129, title: 'Torchlight II',                       platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/200710/library_600x900.jpg',   dateAdded: '2024-09-11T00:00:00.000Z' },
  { id: 130, title: 'Torchlight III',                      platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1030840/library_600x900.jpg',  dateAdded: '2024-09-15T00:00:00.000Z' },
  { id: 131, title: 'Full Metal Furies',                   platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/416500/library_600x900.jpg',   dateAdded: '2024-09-19T00:00:00.000Z' },
  { id: 132, title: 'Hammerwatch',                         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/239070/library_600x900.jpg',   dateAdded: '2024-09-23T00:00:00.000Z' },
  { id: 133, title: 'Hammerwatch II',                      platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1186520/library_600x900.jpg',  dateAdded: '2024-09-27T00:00:00.000Z' },
  { id: 134, title: 'Dark Alliance',                       platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1287650/library_600x900.jpg',  dateAdded: '2024-10-01T00:00:00.000Z' },
  { id: 135, title: 'Gauntlet: Slayer Edition',            platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/258970/library_600x900.jpg',   dateAdded: '2024-10-05T00:00:00.000Z' },
  { id: 136, title: 'Dungeon Siege III',                   platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/39200/library_600x900.jpg',    dateAdded: '2024-10-09T00:00:00.000Z' },
  { id: 137, title: 'Chronicon',                           platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1002300/library_600x900.jpg',  dateAdded: '2024-10-13T00:00:00.000Z' },
  { id: 138, title: 'Path of Exile 2',                     platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2694490/library_600x900.jpg',  dateAdded: '2024-10-17T00:00:00.000Z' },

  // ── Batch 4 — Roguelite Co-op ────────────────────────────
  { id: 139, title: 'Gunfire Reborn',                      platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1217060/library_600x900.jpg',  dateAdded: '2024-10-21T00:00:00.000Z' },
  { id: 140, title: 'Roboquest',                           platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1104200/library_600x900.jpg',  dateAdded: '2024-10-25T00:00:00.000Z' },
  { id: 141, title: 'Ravenswatch',                         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1841640/library_600x900.jpg',  dateAdded: '2024-10-29T00:00:00.000Z' },
  { id: 142, title: 'Ship of Fools',                       platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1661250/library_600x900.jpg',  dateAdded: '2024-11-02T00:00:00.000Z' },
  { id: 143, title: 'Rogue Heroes: Ruins of Tasos',        platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1271690/library_600x900.jpg',  dateAdded: '2024-11-06T00:00:00.000Z' },
  { id: 144, title: 'For The King',                        platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/527230/library_600x900.jpg',   dateAdded: '2024-11-10T00:00:00.000Z' },
  { id: 145, title: 'For The King II',                     platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1832470/library_600x900.jpg',  dateAdded: '2024-11-14T00:00:00.000Z' },
  { id: 146, title: 'Nine Parchments',                     platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/489220/library_600x900.jpg',   dateAdded: '2024-11-18T00:00:00.000Z' },
  { id: 147, title: 'Death Road to Canada',                platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/252610/library_600x900.jpg',   dateAdded: '2024-11-22T00:00:00.000Z' },

  // ── Batch 4 — Tactical / Strategy Co-op ─────────────────
  { id: 148, title: 'Gloomhaven',                          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/780290/library_600x900.jpg',   dateAdded: '2024-11-26T00:00:00.000Z' },
  { id: 149, title: 'Wildermyth',                          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/763890/library_600x900.jpg',   dateAdded: '2024-11-30T00:00:00.000Z' },
  { id: 150, title: 'Dungeons 3',                          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/427510/library_600x900.jpg',   dateAdded: '2024-12-04T00:00:00.000Z' },
  { id: 151, title: 'Solasta: Crown of the Magister',      platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1084840/library_600x900.jpg',  dateAdded: '2024-12-08T00:00:00.000Z' },
  { id: 152, title: 'Children of Morta',                   platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/330020/library_600x900.jpg',   dateAdded: '2024-12-12T00:00:00.000Z' },
  { id: 153, title: 'Pit People',                          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/405010/library_600x900.jpg',   dateAdded: '2024-12-16T00:00:00.000Z' },

  // ── Batch 4 — Survival / Open World Co-op ────────────────
  { id: 154, title: 'V Rising',                            platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1604030/library_600x900.jpg',  dateAdded: '2024-12-20T00:00:00.000Z' },
  { id: 155, title: 'Enshrouded',                          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1203620/library_600x900.jpg',  dateAdded: '2024-12-24T00:00:00.000Z' },
  { id: 156, title: 'Once Human',                          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2139460/library_600x900.jpg',  dateAdded: '2024-12-28T00:00:00.000Z' },
  { id: 157, title: 'Soulmask',                            platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2646460/library_600x900.jpg',  dateAdded: '2025-01-01T00:00:00.000Z' },
  { id: 158, title: 'Nightingale',                         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1928980/library_600x900.jpg',  dateAdded: '2025-01-05T00:00:00.000Z' },
  { id: 159, title: 'Outward',                             platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/764790/library_600x900.jpg',   dateAdded: '2025-01-09T00:00:00.000Z' },
  { id: 160, title: 'Niffelheim',                          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/624330/library_600x900.jpg',   dateAdded: '2025-01-13T00:00:00.000Z' },

  // ── Batch 4 — Shooter / Tactical Co-op ──────────────────
  { id: 161, title: 'Ghost Recon Breakpoint',              platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1044740/library_600x900.jpg',  dateAdded: '2025-01-17T00:00:00.000Z' },
  { id: 162, title: 'Far Cry New Dawn',                    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/939960/library_600x900.jpg',   dateAdded: '2025-01-21T00:00:00.000Z' },
  { id: 163, title: 'Alien Swarm: Reactive Drop',          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/563560/library_600x900.jpg',   dateAdded: '2025-01-25T00:00:00.000Z' },
  { id: 164, title: 'Battlezone Gold Edition',             platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/544550/library_600x900.jpg',   dateAdded: '2025-01-29T00:00:00.000Z' },
  { id: 165, title: 'Mothergunship',                       platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/715690/library_600x900.jpg',   dateAdded: '2025-02-02T00:00:00.000Z' },

  // ── Batch 4 — Tower Defense / Wave Co-op ────────────────
  { id: 166, title: 'Orcs Must Die! 3',                    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1583230/library_600x900.jpg',  dateAdded: '2025-02-06T00:00:00.000Z' },
  { id: 167, title: 'Orcs Must Die! 2',                    platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/202790/library_600x900.jpg',   dateAdded: '2025-02-10T00:00:00.000Z' },
  { id: 168, title: 'Dungeon Defenders: Awakened',         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1079380/library_600x900.jpg',  dateAdded: '2025-02-14T00:00:00.000Z' },

  // ── Batch 4 — Hack & Slash / Brawler Co-op ───────────────
  { id: 169, title: 'Warhammer: End Times - Vermintide',   platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/235540/library_600x900.jpg',   dateAdded: '2025-02-18T00:00:00.000Z' },
  { id: 170, title: 'Zombie Army Trilogy',                 platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/301640/library_600x900.jpg',   dateAdded: '2025-02-22T00:00:00.000Z' },
  { id: 171, title: 'Streets of Rage 4',                   platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/985890/library_600x900.jpg',   dateAdded: '2025-02-26T00:00:00.000Z' },
  { id: 172, title: 'River City Girls 2',                  platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1921690/library_600x900.jpg',  dateAdded: '2025-03-02T00:00:00.000Z' },
  { id: 173, title: 'Battletoads',                         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1401030/library_600x900.jpg',  dateAdded: '2025-03-06T00:00:00.000Z' },
  { id: 174, title: 'Dark and Darker',                     platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2016590/library_600x900.jpg',  dateAdded: '2025-03-10T00:00:00.000Z' },
  { id: 175, title: 'Magicka',                             platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/42910/library_600x900.jpg',    dateAdded: '2025-03-14T00:00:00.000Z' },
  { id: 176, title: 'Magicka 2',                           platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/238160/library_600x900.jpg',   dateAdded: '2025-03-18T00:00:00.000Z' },
  { id: 177, title: 'Trine 2: Complete Story',             platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/35720/library_600x900.jpg',    dateAdded: '2025-03-22T00:00:00.000Z' },
  { id: 178, title: 'Trine 3: The Artifacts of Power',     platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/319910/library_600x900.jpg',   dateAdded: '2025-03-26T00:00:00.000Z' },
  { id: 179, title: 'Darksiders Genesis',                  platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1009990/library_600x900.jpg',  dateAdded: '2025-03-30T00:00:00.000Z' },

  // ── Batch 4 — Dungeon Crawl / Misc Co-op ─────────────────
  { id: 180, title: 'Synthetik: Legion Rising',            platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/449780/library_600x900.jpg',   dateAdded: '2025-04-03T00:00:00.000Z' },
  { id: 181, title: 'Dungeon of the Endless',              platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/249050/library_600x900.jpg',   dateAdded: '2025-04-07T00:00:00.000Z' },
  { id: 182, title: 'LEGO Star Wars: The Skywalker Saga',  platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/920210/library_600x900.jpg',   dateAdded: '2025-04-11T00:00:00.000Z' },
  { id: 183, title: 'LEGO Marvel Super Heroes 2',          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/647830/library_600x900.jpg',   dateAdded: '2025-04-15T00:00:00.000Z' },
  { id: 184, title: 'Neon Abyss',                          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1283830/library_600x900.jpg',  dateAdded: '2025-04-19T00:00:00.000Z' },
  { id: 185, title: 'Broforce',                            platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/274190/library_600x900.jpg',   dateAdded: '2025-04-23T00:00:00.000Z' },
  { id: 186, title: 'Spacelords',                          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/332700/library_600x900.jpg',   dateAdded: '2025-04-27T00:00:00.000Z' },
  { id: 187, title: 'The Dark Eye: Book of Heroes',        platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1144400/library_600x900.jpg',  dateAdded: '2025-05-01T00:00:00.000Z' },
  { id: 188, title: 'Screencheat: Unplugged',              platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/627690/library_600x900.jpg',   dateAdded: '2025-05-05T00:00:00.000Z' },
  { id: 189, title: 'Killing Floor',                       platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1250/library_600x900.jpg',     dateAdded: '2025-05-09T00:00:00.000Z' },
  { id: 190, title: 'Sniper Elite 4',                      platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/312670/library_600x900.jpg',   dateAdded: '2025-05-13T00:00:00.000Z' },
  { id: 191, title: 'Gotham Knights',                      platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1496790/library_600x900.jpg',  dateAdded: '2025-05-17T00:00:00.000Z' },
  { id: 192, title: 'Borderlands: The Pre-Sequel',         platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/261640/library_600x900.jpg',   dateAdded: '2025-05-21T00:00:00.000Z' },
  { id: 193, title: 'Ghostbusters: Spirits Unleashed',     platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2018840/library_600x900.jpg',  dateAdded: '2025-05-25T00:00:00.000Z' },
  { id: 194, title: 'Monster Hunter Wilds',                platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2246340/library_600x900.jpg',  dateAdded: '2025-05-29T00:00:00.000Z' },

  // ── Batch 4 — Additional Co-op ───────────────────────────
  { id: 195, title: 'SpiderHeck',                          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1329500/library_600x900.jpg',  dateAdded: '2025-06-02T00:00:00.000Z' },
  { id: 196, title: 'Skull and Bones',                     platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1704770/library_600x900.jpg',  dateAdded: '2025-06-06T00:00:00.000Z' },
  { id: 197, title: 'Avatar: Frontiers of Pandora',        platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1868980/library_600x900.jpg',  dateAdded: '2025-06-10T00:00:00.000Z' },
  { id: 198, title: 'Redfall',                             platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1294810/library_600x900.jpg',  dateAdded: '2025-06-14T00:00:00.000Z' },
  { id: 199, title: 'The Outlast Trials',                  platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1304770/library_600x900.jpg',  dateAdded: '2025-06-18T00:00:00.000Z' },
  { id: 200, title: 'Forewarned',                          platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/1335700/library_600x900.jpg',  dateAdded: '2025-06-22T00:00:00.000Z' },
  { id: 201, title: 'Demonologist',                        platform: 'PC', status: 'Want to Play', rating: 0, cover: 'https://cdn.akamai.steamstatic.com/steam/apps/2055050/library_600x900.jpg',  dateAdded: '2025-06-26T00:00:00.000Z' },
];

/* ═══════════════════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════════════════ */

const state = {
  games: [],
  filter: 'all',      // 'all' | 'Want to Play' | 'Playing' | 'Finished'
  sort:   'date',     // 'date' | 'az' | 'status' | 'rating'
  addStatus: 'Want to Play',
  addRating: 0,
  addCover: '',
  editId: null,
  detailId: null,
  deleteId: null,
  pickGame: null,
};

/* ═══════════════════════════════════════════════════════════
   STORAGE
═══════════════════════════════════════════════════════════ */

function loadGames() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      state.games = JSON.parse(raw);
      return;
    }
  } catch (_) {}
  state.games = [];
}

function saveGames() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.games));
  } catch (_) {}
}

/* ═══════════════════════════════════════════════════════════
   UTILITY
═══════════════════════════════════════════════════════════ */

function esc(str) {
  return String(str ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function statusClass(status) {
  if (status === 'Want to Play') return 'want';
  if (status === 'Playing')      return 'play';
  if (status === 'Finished')     return 'done';
  return '';
}


/* ═══════════════════════════════════════════════════════════
   RENDER — CARD STARS
═══════════════════════════════════════════════════════════ */

function cardStarsHtml(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="${i <= rating ? 'card-star-on' : 'card-star-off'}">★</span>`;
  }
  return html;
}

function detailStarsHtml(rating) {
  if (!rating) return '<span class="snone">Not rated yet</span>';
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="${i <= rating ? 'son' : 'soff'}">★</span>`;
  }
  return html;
}

/* ═══════════════════════════════════════════════════════════
   RENDER — GAME CARD
═══════════════════════════════════════════════════════════ */

function renderCard(game) {
  const sc = statusClass(game.status);
  const hasCover = !!game.cover;

  // When onerror fires, hide the img and un-hide the sibling .card-no-cover
  const imgOnerror = `this.style.display='none';this.nextElementSibling.style.display='flex'`;

  return `
    <div class="game-card" data-id="${game.id}">
      ${hasCover ? `
        <img class="card-cover" src="${esc(game.cover)}" alt="${esc(game.title)}"
             loading="lazy" draggable="false"
             onerror="${imgOnerror}" />
        <div class="card-no-cover" style="display:none">
          <span class="card-no-cover-title">${esc(game.title)}</span>
        </div>
      ` : `
        <div class="card-no-cover">
          <span class="card-no-cover-title">${esc(game.title)}</span>
        </div>
      `}
      <div class="card-gradient"></div>
      <div class="card-badge ${sc}">${esc(game.status)}</div>
      ${game.rating ? `<div class="card-stars">${cardStarsHtml(game.rating)}</div>` : ''}
    </div>
  `;
}

/* ═══════════════════════════════════════════════════════════
   RENDER — MAIN GRID
═══════════════════════════════════════════════════════════ */

function getDisplayGames() {
  let list = [...state.games];

  // Filter
  if (state.filter !== 'all') {
    list = list.filter(g => g.status === state.filter);
  }

  // Sort
  switch (state.sort) {
    case 'date':
      list.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
      break;
    case 'az':
      list.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'status': {
      const order = { 'Want to Play': 0, 'Playing': 1, 'Finished': 2 };
      list.sort((a, b) => order[a.status] - order[b.status]);
      break;
    }
    case 'rating':
      list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      break;
  }

  return list;
}

function render() {
  const games = getDisplayGames();

  // Update filter pill counts
  const counts = {
    all: state.games.length,
    'Want to Play': state.games.filter(g => g.status === 'Want to Play').length,
    Playing:        state.games.filter(g => g.status === 'Playing').length,
    Finished:       state.games.filter(g => g.status === 'Finished').length,
  };
  document.getElementById('count-all').textContent     = counts.all;
  document.getElementById('count-want').textContent    = counts['Want to Play'];
  document.getElementById('count-playing').textContent = counts.Playing;
  document.getElementById('count-finished').textContent= counts.Finished;

  const grid  = document.getElementById('game-grid');
  const empty = document.getElementById('empty-state');

  if (games.length === 0) {
    grid.innerHTML = '';
    empty.classList.add('visible');
    const sub = document.getElementById('empty-sub');
    if (sub) {
      sub.textContent = state.filter === 'all'
        ? 'Add your first game to get started'
        : `No games with status "${state.filter}"`;
    }
  } else {
    grid.innerHTML = games.map(renderCard).join('');
    empty.classList.remove('visible');
  }
}

/* ═══════════════════════════════════════════════════════════
   MODAL HELPERS
═══════════════════════════════════════════════════════════ */

function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('open');
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('open');
}

/* ═══════════════════════════════════════════════════════════
   ADD / EDIT MODAL
═══════════════════════════════════════════════════════════ */

function openAddModal(prefill = null) {
  state.editId = null;
  state.addCover = prefill?.cover || '';

  document.getElementById('modal-add-heading').textContent = 'Add Game';
  document.getElementById('game-title').value    = prefill?.title    || '';
  document.getElementById('game-platform').value = prefill?.platform || '';

  setAddStatus('Want to Play');
  setAddRating(0);
  showCoverPreview(state.addCover);

  openModal('modal-add');
  setTimeout(() => document.getElementById('game-title').focus(), 60);
}

function openEditModal(game) {
  state.editId = game.id;
  state.addCover = game.cover || '';

  document.getElementById('modal-add-heading').textContent = 'Edit Game';
  document.getElementById('game-title').value    = game.title    || '';
  document.getElementById('game-platform').value = game.platform || '';

  setAddStatus(game.status || 'Want to Play');
  setAddRating(game.rating || 0);
  showCoverPreview(state.addCover);

  openModal('modal-add');
  setTimeout(() => document.getElementById('game-title').focus(), 60);
}

function setAddStatus(status) {
  state.addStatus = status;
  document.querySelectorAll('#add-status-toggle .status-opt').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.status === status);
  });
}

function setAddRating(value) {
  state.addRating = value;
  document.querySelectorAll('#add-star-input .star-btn').forEach(s => {
    s.classList.toggle('active', parseInt(s.dataset.val) <= value);
  });
  const clearBtn = document.getElementById('star-clear-btn');
  if (clearBtn) clearBtn.classList.toggle('hidden', value === 0);
}

function showCoverPreview(url) {
  const found = document.getElementById('cover-auto-found');
  const img   = document.getElementById('cover-auto-img');
  if (url) {
    found.style.display = 'flex';
    img.src = url;
    img.onerror = () => {
      state.addCover = '';
      found.style.display = 'none';
    };
  } else {
    found.style.display = 'none';
  }
}

function clearAddCover() {
  state.addCover = '';
  showCoverPreview('');
}

let coverSearchTimer = null;
let coverSearchId    = 0;

function scheduleCoverSearch() {
  clearTimeout(coverSearchTimer);
  const title = document.getElementById('game-title').value.trim();
  if (!title) { clearAddCover(); return; }
  coverSearchTimer = setTimeout(() => doFetchCover(title), 600);
}

async function doFetchCover(title) {
  const id = ++coverSearchId;
  let url = await fetchSteamCover(title);
  if (id !== coverSearchId) return;
  if (!url) {
    url = await fetchWikipediaCover(title);
    if (id !== coverSearchId) return;
  }
  if (url) {
    state.addCover = url;
    showCoverPreview(url);
  } else {
    state.addCover = '';
    showCoverPreview('');
  }
}

async function fetchSteamCover(title) {
  try {
    const res  = await fetch(
      `https://store.steampowered.com/api/storesearch/?term=${encodeURIComponent(title)}&l=en&cc=US`
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.items || !data.items.length) return null;
    return `https://cdn.akamai.steamstatic.com/steam/apps/${data.items[0].id}/library_600x900.jpg`;
  } catch { return null; }
}

async function fetchWikipediaCover(title) {
  try {
    const res  = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
    );
    if (!res.ok) return null;
    const data = await res.json();
    return data.thumbnail?.source || null;
  } catch { return null; }
}

function saveGame() {
  const title = document.getElementById('game-title').value.trim();
  if (!title) {
    document.getElementById('game-title').focus();
    document.getElementById('game-title').style.borderColor = '#f87171';
    setTimeout(() => document.getElementById('game-title').style.borderColor = '', 1500);
    return;
  }

  const data = {
    title,
    platform: document.getElementById('game-platform').value,
    status:   state.addStatus,
    rating:   state.addRating,
    cover:    state.addCover,
  };

  if (state.editId) {
    const idx = state.games.findIndex(g => g.id === state.editId);
    if (idx !== -1) {
      state.games[idx] = { ...state.games[idx], ...data };
    }
  } else {
    state.games.unshift({
      id: Date.now(),
      dateAdded: new Date().toISOString(),
      ...data,
    });
  }

  saveGames();
  render();
  closeModal('modal-add');
}

/* ═══════════════════════════════════════════════════════════
   DETAIL MODAL
═══════════════════════════════════════════════════════════ */

function openDetailModal(gameId) {
  const game = state.games.find(g => g.id === gameId);
  if (!game) return;
  state.detailId = gameId;

  const img         = document.getElementById('detail-img');
  const fallback    = document.getElementById('detail-fallback');
  const titleEl     = document.getElementById('detail-title');
  const platformEl  = document.getElementById('detail-platform');
  const statusEl    = document.getElementById('detail-status-badge');
  const starsEl     = document.getElementById('detail-stars');

  // Cover
  if (game.cover) {
    img.src = game.cover;
    img.alt = game.title;
    img.style.display = 'block';
    fallback.style.display = 'none';
    img.onerror = () => {
      img.style.display = 'none';
      fallback.style.display = 'flex';
    };
  } else {
    img.style.display = 'none';
    fallback.style.display = 'flex';
  }

  titleEl.textContent    = game.title;
  platformEl.textContent = game.platform || '';

  const sc = statusClass(game.status);
  statusEl.className   = `detail-status-badge ${sc}`;
  statusEl.innerHTML   = `<span class="status-dot"></span>${esc(game.status)}`;

  starsEl.innerHTML = detailStarsHtml(game.rating);

  openModal('modal-detail');
}

/* ═══════════════════════════════════════════════════════════
   PICK TONIGHT
═══════════════════════════════════════════════════════════ */

function pickRandomGame() {
  const pool = state.games.filter(g => g.status === 'Want to Play');
  if (!pool.length) return null;
  // Avoid re-picking the same game when possible
  const others = state.pickGame ? pool.filter(g => g.id !== state.pickGame.id) : pool;
  const candidates = others.length ? others : pool;
  return candidates[Math.floor(Math.random() * candidates.length)];
}

function showPickGame(game) {
  state.pickGame = game;

  const img      = document.getElementById('pick-img');
  const fallback = document.getElementById('pick-fallback');
  const titleEl  = document.getElementById('pick-title');
  const platEl   = document.getElementById('pick-platform');

  if (game.cover) {
    img.src = game.cover;
    img.alt = game.title;
    img.style.display = 'block';
    fallback.style.display = 'none';
    img.onerror = () => {
      img.style.display = 'none';
      fallback.style.display = 'flex';
    };
  } else {
    img.style.display = 'none';
    fallback.style.display = 'flex';
  }

  titleEl.textContent = game.title;
  platEl.textContent  = game.platform || '';
}

function pickTonight() {
  const game = pickRandomGame();
  const bodyEl = document.getElementById('pick-body');
  const emptyEl = document.getElementById('pick-empty');

  if (!game) {
    bodyEl.style.display  = 'none';
    emptyEl.style.display = 'block';
  } else {
    bodyEl.style.display  = 'flex';
    emptyEl.style.display = 'none';
    showPickGame(game);
  }

  openModal('modal-pick');
}

/* ═══════════════════════════════════════════════════════════
   DELETE
═══════════════════════════════════════════════════════════ */

function openDeleteModal(gameId) {
  const game = state.games.find(g => g.id === gameId);
  if (!game) return;
  state.deleteId = gameId;
  document.getElementById('delete-name').textContent = game.title;
  openModal('modal-delete');
}

function confirmDelete() {
  if (!state.deleteId) return;
  state.games = state.games.filter(g => g.id !== state.deleteId);
  state.deleteId = null;
  saveGames();
  render();
  closeModal('modal-delete');
  closeModal('modal-detail');
}

/* ═══════════════════════════════════════════════════════════
   BROWSE CATALOG
═══════════════════════════════════════════════════════════ */

function openSearchModal() {
  const searchInput = document.getElementById('catalog-search');
  if (searchInput) searchInput.value = '';
  renderCatalog('');
  openModal('modal-search');
  setTimeout(() => { if (searchInput) searchInput.focus(); }, 80);
}

function getCatalogGames(query) {
  const libraryTitles = new Set(state.games.map(g => g.title.toLowerCase()));
  let catalog = DEFAULT_GAMES.filter(g => !libraryTitles.has(g.title.toLowerCase()));
  if (query) {
    const q = query.toLowerCase();
    catalog = catalog.filter(g => g.title.toLowerCase().includes(q));
  }
  return catalog;
}

function renderCatalog(query) {
  const grid  = document.getElementById('catalog-grid');
  const games = getCatalogGames(query);

  if (games.length === 0) {
    grid.innerHTML = `<div class="catalog-empty">${
      query
        ? 'No games match your search'
        : 'All catalog games are already in your library!'
    }</div>`;
    return;
  }

  grid.innerHTML = games.map(g => `
    <div class="catalog-card">
      <div class="catalog-cover-wrap">
        <img class="catalog-cover-img" src="${esc(g.cover)}" alt="${esc(g.title)}"
             loading="lazy"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
        <div class="catalog-no-cover" style="display:none">
          <span class="catalog-no-cover-title">${esc(g.title)}</span>
        </div>
        <div class="catalog-status-overlay" style="display:none">
          <button class="catalog-status-btn want" data-catalog-id="${g.id}" data-status="Want to Play">Want to Play</button>
          <button class="catalog-status-btn play" data-catalog-id="${g.id}" data-status="Playing">Playing</button>
          <button class="catalog-status-btn done" data-catalog-id="${g.id}" data-status="Finished">Finished</button>
        </div>
      </div>
      <div class="catalog-card-foot">
        <span class="catalog-card-title">${esc(g.title)}</span>
      </div>
    </div>
  `).join('');
}

function addFromCatalog(defaultId, status) {
  const def = DEFAULT_GAMES.find(g => g.id === defaultId);
  if (!def) return;

  const alreadyIn = state.games.some(g => g.title.toLowerCase() === def.title.toLowerCase());
  if (alreadyIn) return;

  state.games.unshift({
    ...def,
    id:        Date.now(),
    status:    status || 'Want to Play',
    rating:    0,
    dateAdded: new Date().toISOString(),
  });
  saveGames();
  render();

  // Fade the card out then re-check if catalog is empty
  const btn = document.querySelector(`[data-catalog-id="${defaultId}"]`);
  if (btn) {
    const card = btn.closest('.catalog-card');
    if (card) {
      card.style.transition = 'opacity 0.22s, transform 0.22s';
      card.style.opacity    = '0';
      card.style.transform  = 'scale(0.88)';
      setTimeout(() => {
        card.remove();
        const q = document.getElementById('catalog-search')?.value?.trim() || '';
        if (getCatalogGames(q).length === 0) {
          document.getElementById('catalog-grid').innerHTML =
            `<div class="catalog-empty">All catalog games are already in your library!</div>`;
        }
      }, 240);
    }
  }
}

/* ═══════════════════════════════════════════════════════════
   EVENT WIRING
═══════════════════════════════════════════════════════════ */

function setupEvents() {

  /* ── Header buttons ─────────────────────────────────────── */
  document.getElementById('btn-add').addEventListener('click', () => openAddModal());
  document.getElementById('btn-pick').addEventListener('click', pickTonight);
  document.getElementById('btn-search').addEventListener('click', openSearchModal);

  /* ── Generic close buttons (data-close="modal-id") ─────── */
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => closeModal(btn.dataset.close));
  });

  /* ── Close modal by clicking backdrop ───────────────────── */
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) closeModal(overlay.id);
    });
  });

  /* ── Escape key closes topmost open modal ───────────────── */
  document.addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    const openModals = document.querySelectorAll('.modal-overlay.open');
    if (openModals.length) closeModal(openModals[openModals.length - 1].id);
  });

  /* ── Filter pills ───────────────────────────────────────── */
  document.querySelectorAll('.filter-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filter = btn.dataset.filter;
      render();
    });
  });

  /* ── Sort pills ─────────────────────────────────────────── */
  document.querySelectorAll('.sort-pill').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sort-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.sort = btn.dataset.sort;
      render();
    });
  });

  /* ── Game card click → detail modal ─────────────────────── */
  document.getElementById('game-grid').addEventListener('click', e => {
    const card = e.target.closest('.game-card');
    if (card) openDetailModal(Number(card.dataset.id));
  });

  /* ── Add modal: status toggle ───────────────────────────── */
  document.querySelectorAll('#add-status-toggle .status-opt').forEach(btn => {
    btn.addEventListener('click', () => setAddStatus(btn.dataset.status));
  });

  /* ── Add modal: star rating ─────────────────────────────── */
  const starInput = document.getElementById('add-star-input');
  starInput.querySelectorAll('.star-btn').forEach(star => {
    const val = parseInt(star.dataset.val);

    star.addEventListener('click', () => {
      setAddRating(val === state.addRating ? 0 : val);
    });
    star.addEventListener('mouseenter', () => {
      starInput.querySelectorAll('.star-btn').forEach(s => {
        s.classList.toggle('hovered', parseInt(s.dataset.val) <= val);
      });
    });
    star.addEventListener('mouseleave', () => {
      starInput.querySelectorAll('.star-btn').forEach(s => s.classList.remove('hovered'));
    });
  });

  document.getElementById('star-clear-btn').addEventListener('click', () => setAddRating(0));

  /* ── Add modal: Steam cover auto-fetch ──────────────────── */
  document.getElementById('game-title').addEventListener('input', scheduleCoverSearch);
  document.getElementById('btn-clear-cover').addEventListener('click', clearAddCover);

  /* ── Add modal: save ────────────────────────────────────── */
  document.getElementById('btn-save-game').addEventListener('click', saveGame);
  document.getElementById('game-title').addEventListener('keydown', e => {
    if (e.key === 'Enter') saveGame();
  });

  /* ── Detail modal: edit / delete ───────────────────────── */
  document.getElementById('btn-detail-edit').addEventListener('click', () => {
    const game = state.games.find(g => g.id === state.detailId);
    if (!game) return;
    closeModal('modal-detail');
    setTimeout(() => openEditModal(game), 80);
  });

  document.getElementById('btn-detail-delete').addEventListener('click', () => {
    state.games = state.games.filter(g => g.id !== state.detailId);
    saveGames();
    render();
    closeModal('modal-detail');
  });

  /* ── Delete confirm ─────────────────────────────────────── */
  document.getElementById('btn-confirm-delete').addEventListener('click', confirmDelete);

  /* ── Pick Tonight: pick again ───────────────────────────── */
  document.getElementById('btn-pick-again').addEventListener('click', () => {
    const game = pickRandomGame();
    if (game) showPickGame(game);
  });

  /* ── Catalog: filter input ───────────────────────────────── */
  document.getElementById('catalog-search').addEventListener('input', e => {
    renderCatalog(e.target.value.trim());
  });

  /* ── Catalog: card click → overlay; overlay btn → add ───── */
  const catalogGrid = document.getElementById('catalog-grid');
  catalogGrid.addEventListener('click', e => {
    const btn = e.target.closest('.catalog-status-btn');
    if (btn) {
      addFromCatalog(Number(btn.dataset.catalogId), btn.dataset.status);
      return;
    }
    const card = e.target.closest('.catalog-card');
    if (!card) return;
    const overlay = card.querySelector('.catalog-status-overlay');
    const isOpen  = overlay.style.display !== 'none';
    // Close all open overlays first
    catalogGrid.querySelectorAll('.catalog-status-overlay').forEach(o => { o.style.display = 'none'; });
    catalogGrid.querySelectorAll('.catalog-card').forEach(c => c.classList.remove('catalog-card--open'));
    // Toggle this card's overlay
    if (!isOpen) {
      overlay.style.display = 'flex';
      card.classList.add('catalog-card--open');
    }
  });

  /* ── Catalog: click outside cards closes overlay ────────── */
  document.addEventListener('click', e => {
    if (!e.target.closest('#catalog-grid')) {
      document.querySelectorAll('.catalog-status-overlay').forEach(o => { o.style.display = 'none'; });
      document.querySelectorAll('.catalog-card--open').forEach(c => c.classList.remove('catalog-card--open'));
    }
  });
}

/* ═══════════════════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════════════════ */

loadGames();
setupEvents();
render();
