// This is a generated file. Do not edit it directly.
// Make your changes to presets/glitchmaster.json then rebuild
// this file with `npm run build-presets -- glitchmaster`.
(function(self) {

  // Boilerplate.
  let util
  if (self) {
    util = self.sotnRando.util
  } else {
    util = require('../../src/util')
  }
  const PresetBuilder = util.PresetBuilder

  // Create PresetBuilder.
  const builder = PresetBuilder.fromJSON({"metadata":{"id":"glitchmaster","name":"Glitchmaster","description":"A preset for experts in glitches and exploits. There is literally no logic applied to relic distribution and the seed may soft-lock. Save often.","author":["romscout","DerDrach","eldri7ch","MottZilla","Doozyzood"],"weight":-5006,"knowledgeCheck":"Glitches","extension":"Extended","complexity":1,"itemStats":"Normal","timeFrame":"Slow","moddedLevel":"Moderately","castleType":"Normal","transformEarly":"No","transformFocus":"None","winCondition":"Relic Skip"},"relicLocationsExtension":"extended","stats":false,"thrustSwordAbility":true,"prologueRewards":[{"item":"Heart Refresh","replacement":"Fire boomerang"},{"item":"Neutron bomb","replacement":"Karma Coin"},{"item":"Potion","replacement":"Orange"}],"replaceRelic":[{"relic":"Nosedevil Card","item":"Diamond"},{"relic":"Sprite Card","item":"Antivenom"},{"relic":"Faerie Scroll","item":"Heart Refresh"},{"relic":"Spirit Orb","item":"Heart Refresh"}],"alias":[{"comment":"Alias Spirit Orb as Heart Refresh 1","relic":"Spirit Orb","alias":"Hrefresh1"},{"comment":"Alias Faerie Scroll as Heart Refresh 2","relic":"Faerie Scroll","alias":"Hrefresh2"},{"comment":"Alias Sprite Card as Potion","relic":"Sprite Card","alias":"Pot"},{"comment":"Alias Faerie Card as Library Card 1","relic":"Nosedevil Card","alias":"InfDiam"},{"comment":"Alias Thrust sword as Clay","relic":"Thrust sword","alias":"Clay"}],"blockItems":[{"zone":"*","item":"*","replacement":["Heart Refresh","Library card","Fire boomerang","Toadstool","Meal ticket","Shield rod","Mablung Sword","Estoc","Claymore","Flamberge","Zwei hander","Obsidian sword"]}],"blockDrops":[{"enemy":"*","items":["Heart Refresh","Library card","Fire boomerang","Toadstool","Meal ticket","Shield rod","Mablung Sword","Estoc","Claymore","Flamberge","Zwei hander","Obsidian sword"]}],"startingEquipment":[{"slot":"Right hand","item":"Shield rod"},{"slot":"Left hand","item":"Leather shield"},{"slot":"Head","item":"Dragon helm"},{"slot":"Body","item":"Alucard mail"},{"slot":"Cloak","item":"Twilight cloak"},{"slot":"Other","item":"Duplicator"}],"itemLocations":[{"comment":"Place Stopwatch in the Clock Room","zone":"NO0","item":"Big heart","index":16,"replacement":"Stopwatch"},{"comment":"Place Stopwatch in the Clock Room","zone":"NO0","item":"Big heart","index":17,"replacement":"Stopwatch"}],"lockLocation":[{"location":"Jewel of Open","locks":[]},{"location":"Faerie Card","locks":[]},{"location":"Soul of Bat","locks":[]},{"location":"Fire of Bat","locks":[]},{"location":"Echo of Bat","locks":[]},{"location":"Force of Echo","locks":[]},{"location":"Power of Wolf","comment":"Requires flight","locks":[]},{"location":"Skill of Wolf","locks":[]},{"location":"Form of Mist","locks":[]},{"location":"Power of Mist","locks":[]},{"location":"Gas Cloud","comment":"In second castle","locks":[]},{"location":"Gravity Boots","comment":"Requires flight","locks":[]},{"location":"Leap Stone","comment":"Requires Jewel of Open or at least Leap Stone","locks":[]},{"location":"Holy Symbol","locks":[]},{"location":"Merman Statue","locks":[]},{"location":"Bat Card","locks":[]},{"location":"Ghost Card","locks":[]},{"location":"Faerie Card","locks":[]},{"location":"Demon Card","locks":[]},{"location":"Sword Card","locks":[]},{"location":"Heart of Vlad","comment":"In second castle","locks":[]},{"location":"Tooth of Vlad","comment":"In second castle","locks":[]},{"location":"Rib of Vlad","comment":"In second castle","locks":[]},{"location":"Ring of Vlad","comment":"In second castle","locks":[]},{"location":"Eye of Vlad","comment":"In second castle","locks":[]},{"location":"Spike Breaker","locks":[]},{"location":"Gold ring","locks":[]},{"location":"Silver ring","locks":[]},{"location":"Holy glasses","locks":[]},{"location":"Crystal cloak","locks":[]},{"location":"Mormegil","comment":"Requires Jewel of Open + at least Leap Stone","locks":[]},{"location":"Dark Blade","comment":"In second castle","locks":[]},{"location":"Ring of Arcana","comment":"In second castle","locks":[]},{"location":"Trio","comment":"In second castle","locks":[]},{"location":"Holy mail","comment":"Requires flight","locks":[]},{"location":"Jewel sword","comment":"Requires Wolf + Bat","locks":[]},{"location":"Mystic pendant","comment":"Requires at least Leap Stone","locks":[]},{"location":"Ankh of Life","comment":"Requires at least Leap Stone","locks":[]},{"location":"Morningstar","comment":"Requires at least Leap Stone","locks":[]},{"location":"Goggles","comment":"Requires Jewel of Open or at least Leap Stone","locks":[]},{"location":"Silver plate","comment":"Requires Jewel of Open or at least Leap Stone","locks":[]},{"location":"Cutlass","comment":"Requires Jewel of Open or at least Leap Stone","locks":[]},{"location":"Platinum mail","comment":"Requires at least Gravity Boots","locks":[]},{"location":"Falchion","comment":"Requires at least Leap Stone","locks":[]},{"location":"Gold plate","comment":"Requires at least Leap Stone","locks":[]},{"location":"Bekatowa","comment":"Requires at least Gravity Boots","locks":[]},{"location":"Holy rod","comment":"Requires at least Leap Stone","locks":[]},{"location":"Library Onyx","comment":"Requires at least Leap Stone","locks":[]},{"location":"Alucart sword","comment":"Requires at least Cube of Zoe + at least Leap Stone","locks":[]},{"location":"Broadsword","comment":"Requires at least Leap Stone","locks":[]},{"location":"Estoc","comment":"Requires flight","locks":[]},{"location":"Olrox Garnet","comment":"Requires flight","locks":[]},{"location":"Blood cloak","comment":"Requires at least Leap Stone","locks":[]},{"location":"Shield rod","comment":"Requires at least Leap Stone","locks":[]},{"location":"Knight shield","comment":"Requires at least Leap Stone","locks":[]},{"location":"Holy sword","comment":"Requires at least Gravity Boots","locks":[]},{"location":"Bandanna","locks":[]},{"location":"Secret boots","comment":"Requires Jewel of Open + flight","locks":[]},{"location":"Nunchaku","comment":"Requires Jewel of Open + Holy Symbol","locks":[]},{"location":"Knuckle duster","comment":"Requires Jewel of Open","locks":[]},{"location":"Caverns Onyx","comment":"Requires Jewel of Open + at least Leap Stone","locks":[]},{"location":"Combat knife","comment":"Requires Jewel of Open + at least Leap Stone","locks":[]},{"location":"Ring of Ares","comment":"Requires Jewel of Open + Demon Card + at least Leap Stone","locks":[]},{"location":"Bloodstone","comment":"Requires Jewel of Open + at least Leap Stone","locks":[]},{"location":"Icebrand","comment":"Requires Jewel of Open + at least Leap Stone","locks":[]},{"location":"Walk armor","comment":"Requires Jewel of Open + at least Leap Stone","locks":[]},{"location":"Beryl circlet","comment":"Requires Holy glasses + Bat + Wolf","locks":[]},{"location":"Talisman","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Katana","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Goddess shield","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Twilight cloak","comment":"Requires Holy glasses + Mist + flight","locks":[]},{"location":"Talwar","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Sword of Dawn","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Bastard sword","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Royal cloak","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Lightning mail","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Moon rod","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Sunstone","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Luminus","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Dragon helm","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Shotel","comment":"Requires Holy glasses + Mist + flight","locks":[]},{"location":"Staurolite","comment":"Requires Holy glasses + Mist + flight","locks":[]},{"location":"Badelaire","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Forbidden Library Opal","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Reverse Caverns Diamond","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Reverse Caverns Opal","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Reverse Caverns Garnet","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Osafune katana","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Alucard shield","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Alucard sword","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Necklace of J","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Floating Catacombs Diamond","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Sword of Hador","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Alucard mail","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Gram","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Fury plate","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Confessional","comment":"Requires Jewel of Open or at least Leap Stone","locks":[]},{"location":"Colosseum Green tea","comment":"Requires at least Leap Stone","locks":[]},{"location":"Clock Tower Cloaked knight","comment":"Requires at least Leap Stone","locks":[]},{"location":"Waterfall Cave","comment":"Requires Jewel of Open","locks":[]},{"location":"Floating Catacombs Elixir","comment":"Requires Holy glasses + flight + Possibly Spike Breaker","locks":[]},{"location":"Reverse Entrance Antivenom","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Reverse Forbidden Route","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Cave Life apple","comment":"Requires Holy glasses + flight + Demon Card","locks":[]},{"location":"Reverse Colosseum Zircon","comment":"Requires Holy glasses + flight","locks":[]},{"location":"Reverse Alucart Sword","comment":"Requires Holy glasses + flight + Cube of Zoe","locks":[]},{"location":"Black Marble Meal Ticket","comment":"Requires Holy glasses + flight + Jewel of Open","locks":[]},{"location":"Reverse Keep High Potion","comment":"Requires Holy glasses + flight","locks":[]}],"writes":[{"comment":"Jump to injected code","address":"0x000fa97c","type":"word","value":"0x0c04db00"},{"address":"0x00158c98","type":"word","value":"0x3c038004","comment":"lui v1, 0x8004"},{"comment":"Save Return Address for rA (Armor Code)","type":"word","value":"0x37F70000"},{"comment":"Give Axe Lord armor","type":"word","value":"0x34040019"},{"type":"word","value":"0x34050001"},{"type":"word","value":"0x0C03F61D"},{"type":"word","value":"0x00000000"},{"comment":"Give Library Card","type":"word","value":"0x340400a6"},{"type":"word","value":"0x34050000"},{"type":"word","value":"0x0C03F61D"},{"type":"word","value":"0x00000000"},{"comment":"Give Manna prism","type":"word","value":"0x340400a2"},{"type":"word","value":"0x34050000"},{"type":"word","value":"0x0C03F61D"},{"type":"word","value":"0x00000000"},{"comment":"Give Fire boomerang 2","type":"word","value":"0x34040086"},{"type":"word","value":"0x34050000"},{"type":"word","value":"0x0C03F61D"},{"type":"word","value":"0x00000000"},{"comment":"Give Claymore","type":"word","value":"0x34040062"},{"type":"word","value":"0x34050000"},{"type":"word","value":"0x0C03F61D"},{"type":"word","value":"0x00000000"},{"comment":"Recall Return Address for rA (Armor Code)","type":"word","value":"0x36FF0000"},{"type":"word","value":"0x00000000","comment":"nop"},{"type":"word","value":"0x3c038009","comment":"lui v1, 0x8009"},{"comment":"ori v0, 0x270F","type":"word","value":"0x3402270F"},{"comment":"sw v0, 0x7C78 (v1)","type":"word","value":"0xAC627C78"},{"comment":"sw v0, 0x7C60 (v1)","type":"word","value":"0xAC627C60"},{"comment":"ori v0, 0x000a","type":"word","value":"0x3402000a"},{"comment":"sb v0, 0x7A1C (v1)","type":"word","value":"0xa0627A1C"},{"comment":"ori v0, 0x0063","type":"word","value":"0x34020063"},{"comment":"sb v0, 0x7C74 (v1)","type":"word","value":"0xa0627C74"},{"comment":"sb v0, 0x7C5C (v1)","type":"word","value":"0xa0627C5C"},{"type":"word","value":"0x34020003","comment":"ori v0, 0x0003"},{"comment":"sb v0, 0x7968 (v1)","type":"word","value":"0xa0627968"},{"comment":"sb v0, 0x7971 (v1)","type":"word","value":"0xa0627971"},{"comment":"j 0x800e493c","type":"word","value":"0x0803924f"},{"type":"word","value":"0x00000000","comment":"nop"},{"comment":"Glitch Scrawl 1","type":"word","address":"0x5342210","value":"0x6C6C6548"},{"type":"word","value":"0x08012C6F"},{"type":"word","value":"0x636C6557"},{"type":"word","value":"0x20656D6F"},{"type":"word","value":"0x74206F74"},{"type":"word","value":"0x6E206568"},{"type":"word","value":"0x47207765"},{"type":"word","value":"0x6374696C"},{"type":"word","value":"0x72702068"},{"type":"word","value":"0x74657365"},{"type":"word","value":"0x6F660801"},{"type":"word","value":"0x68742072"},{"type":"word","value":"0x2E532065"},{"type":"word","value":"0x2E542E4F"},{"type":"word","value":"0x52202E4E"},{"type":"word","value":"0x6F646E61"},{"type":"word","value":"0x657A696D"},{"type":"word","value":"0x49202E72"},{"type":"word","value":"0x69080174"},{"type":"word","value":"0x20612073"},{"type":"word","value":"0x73657270"},{"type":"word","value":"0x62207465"},{"type":"word","value":"0x746C6975"},{"type":"word","value":"0x6F726120"},{"type":"word","value":"0x20646E75"},{"type":"word","value":"0x7A7A7570"},{"type":"word","value":"0x0173656C"},{"type":"word","value":"0x69737508"},{"type":"word","value":"0x6120676E"},{"type":"word","value":"0x6E617664"},{"type":"word","value":"0x20646563"},{"type":"word","value":"0x65766F6D"},{"type":"word","value":"0x746E656D"},{"type":"word","value":"0x20736120"},{"type":"word","value":"0x6C6C6577"},{"type":"word","value":"0x73610801"},{"type":"word","value":"0x696C6720"},{"type":"word","value":"0x65686374"},{"type":"word","value":"0x6F742073"},{"type":"word","value":"0x63636120"},{"type":"word","value":"0x20737365"},{"type":"word","value":"0x63656863"},{"type":"word","value":"0x6920736B"},{"type":"word","value":"0x7408016E"},{"type":"word","value":"0x63206568"},{"type":"word","value":"0x6C747361"},{"type":"word","value":"0x59202E65"},{"type":"word","value":"0x7720756F"},{"type":"word","value":"0x206C6C69"},{"type":"word","value":"0x65206562"},{"type":"word","value":"0x63657078"},{"type":"word","value":"0x01646574"},{"type":"word","value":"0x206F7408"},{"type":"word","value":"0x66726570"},{"type":"word","value":"0x206D726F"},{"type":"word","value":"0x74696C67"},{"type":"word","value":"0x73656863"},{"type":"word","value":"0x646E6120"},{"type":"word","value":"0x70786520"},{"type":"word","value":"0x74696F6C"},{"type":"word","value":"0x74080173"},{"type":"word","value":"0x20746168"},{"type":"word","value":"0x75716572"},{"type":"word","value":"0x20657269"},{"type":"word","value":"0x20776F6C"},{"type":"word","value":"0x74205048"},{"type":"word","value":"0x7375206F"},{"type":"word","value":"0x73202C65"},{"type":"word","value":"0x7708016F"},{"type":"word","value":"0x75732065"},{"type":"word","value":"0x73656767"},{"type":"word","value":"0x76612074"},{"type":"word","value":"0x6964696F"},{"type":"word","value":"0x6720676E"},{"type":"word","value":"0x646E6972"},{"type":"word","value":"0x01676E69"},{"type":"word","value":"0x76656C08"},{"type":"word","value":"0x20736C65"},{"type":"word","value":"0x6520726F"},{"type":"word","value":"0x206E6576"},{"type":"word","value":"0x6C6C6F63"},{"type":"word","value":"0x69746365"},{"type":"word","value":"0x4C20676E"},{"type":"word","value":"0x01656669"},{"type":"word","value":"0x73655608"},{"type":"word","value":"0x736C6573"},{"type":"word","value":"0x746E7520"},{"type":"word","value":"0x6C206C69"},{"type":"word","value":"0x72657461"},{"type":"word","value":"0x206E6920"},{"type":"word","value":"0x20656874"},{"type":"word","value":"0x64656573"},{"type":"word","value":"0x5908022E"},{"type":"word","value":"0x6C27756F"},{"type":"word","value":"0x6C61206C"},{"type":"word","value":"0x6E206F73"},{"type":"word","value":"0x20646565"},{"type":"word","value":"0x72206F74"},{"type":"word","value":"0x6D656D65"},{"type":"word","value":"0x20726562"},{"type":"word","value":"0x01656874"},{"type":"word","value":"0x65686308"},{"type":"word","value":"0x20736B63"},{"type":"word","value":"0x6D6F7266"},{"type":"word","value":"0x65687420"},{"type":"word","value":"0x74786520"},{"type":"word","value":"0x69736E65"},{"type":"word","value":"0x63206E6F"},{"type":"word","value":"0x656C6C61"},{"type":"word","value":"0x54080164"},{"type":"word","value":"0x6972756F"},{"type":"word","value":"0x202C7473"},{"type":"word","value":"0x69726176"},{"type":"word","value":"0x2073756F"},{"type":"word","value":"0x74696C67"},{"type":"word","value":"0x73656863"},{"type":"word","value":"0x646E6120"},{"type":"word","value":"0x6F6D0801"},{"type":"word","value":"0x6E726564"},{"type":"word","value":"0x766F6D20"},{"type":"word","value":"0x6E656D65"},{"type":"word","value":"0x72662074"},{"type":"word","value":"0x74206D6F"},{"type":"word","value":"0x57206568"},{"type":"word","value":"0x6F6C7261"},{"type":"word","value":"0x08016B63"},{"type":"word","value":"0x20646E61"},{"type":"word","value":"0x6163794C"},{"type":"word","value":"0x7270206E"},{"type":"word","value":"0x74657365"},{"type":"word","value":"0x59202E73"},{"type":"word","value":"0x7720756F"},{"type":"word","value":"0x206C6C69"},{"type":"word","value":"0x6F736C61"},{"type":"word","value":"0x65620801"},{"type":"word","value":"0x73617420"},{"type":"word","value":"0x2064656B"},{"type":"word","value":"0x66206F74"},{"type":"word","value":"0x6F6C6C6F"},{"type":"word","value":"0x61522077"},{"type":"word","value":"0x6D6F646E"},{"type":"word","value":"0x72657A69"},{"type":"word","value":"0x6F6C0801"},{"type":"word","value":"0x20636967"},{"type":"word","value":"0x20646E61"},{"type":"word","value":"0x706D6F63"},{"type":"word","value":"0x6978656C"},{"type":"word","value":"0x202C7974"},{"type":"word","value":"0x6579616C"},{"type":"word","value":"0x79622072"},{"type":"word","value":"0x616C0801"},{"type":"word","value":"0x2C726579"},{"type":"word","value":"0x646E6120"},{"type":"word","value":"0x646E7520"},{"type":"word","value":"0x74737265"},{"type":"word","value":"0x20646E61"},{"type":"word","value":"0x20656874"},{"type":"word","value":"0x6E61756E"},{"type":"word","value":"0x08016563"},{"type":"word","value":"0x7220666F"},{"type":"word","value":"0x6F646E61"},{"type":"word","value":"0x617A696D"},{"type":"word","value":"0x6E6F6974"},{"type":"word","value":"0x20666F20"},{"type":"word","value":"0x676F7270"},{"type":"word","value":"0x73736572"},{"type":"word","value":"0x016E6F69"},{"type":"word","value":"0x6C657208"},{"type":"word","value":"0x2E736369"},{"type":"word","value":"0x64644120"},{"type":"word","value":"0x6F697469"},{"type":"word","value":"0x6C6C616E"},{"type":"word","value":"0x79202C79"},{"type":"word","value":"0x6820756F"},{"type":"word","value":"0x01657661"},{"type":"word","value":"0x666E6908"},{"type":"word","value":"0x74696E69"},{"type":"word","value":"0x73752065"},{"type":"word","value":"0x666F2065"},{"type":"word","value":"0x65727020"},{"type":"word","value":"0x2D746573"},{"type":"word","value":"0x75716572"},{"type":"word","value":"0x64657269"},{"type":"word","value":"0x74690801"},{"type":"word","value":"0x2E736D65"},{"type":"word","value":"0x756F5920"},{"type":"word","value":"0x736C6120"},{"type":"word","value":"0x6168206F"},{"type":"word","value":"0x61206576"},{"type":"word","value":"0x65726620"},{"type":"word","value":"0x78412065"},{"type":"word","value":"0x4C080165"},{"type":"word","value":"0x2064726F"},{"type":"word","value":"0x6F6D7261"},{"type":"word","value":"0x6F662072"},{"type":"word","value":"0x6F732072"},{"type":"word","value":"0x6C207466"},{"type":"word","value":"0x736B636F"},{"type":"word","value":"0x6854202E"},{"comment":"Glitch Scrawl 2","type":"word","address":"0x534252C","value":"0x01657265"},{"type":"word","value":"0x65726108"},{"type":"word","value":"0x736C6120"},{"type":"word","value":"0x6F73206F"},{"type":"word","value":"0x4C20656D"},{"type":"word","value":"0x20656669"},{"type":"word","value":"0x6C707061"},{"type":"word","value":"0x66207365"},{"type":"word","value":"0x0801726F"},{"type":"word","value":"0x6568746F"},{"type":"word","value":"0x756F2072"},{"type":"word","value":"0x666F2D74"},{"type":"word","value":"0x676F6C2D"},{"type":"word","value":"0x67206369"},{"type":"word","value":"0x6374696C"},{"type":"word","value":"0x2E736568"},{"type":"word","value":"0x6C410801"},{"type":"word","value":"0x202C6F73"},{"type":"word","value":"0x6C6C6F63"},{"type":"word","value":"0x69746365"},{"type":"word","value":"0x6720676E"},{"type":"word","value":"0x74616572"},{"type":"word","value":"0x74207265"},{"type":"word","value":"0x206E6168"},{"type":"word","value":"0x08013034"},{"type":"word","value":"0x72616568"},{"type":"word","value":"0x69207374"},{"type":"word","value":"0x6874206E"},{"type":"word","value":"0x72702065"},{"type":"word","value":"0x676F6C6F"},{"type":"word","value":"0x77206575"},{"type":"word","value":"0x76207361"},{"type":"word","value":"0x01797265"},{"type":"word","value":"0x706D6908"},{"type":"word","value":"0x6174726F"},{"comment":"Glitch Scrawl 3","type":"word","address":"0x53426E8","value":"0x202C746E"},{"type":"word","value":"0x69206F73"},{"type":"word","value":"0x6F792066"},{"type":"word","value":"0x69642075"},{"type":"word","value":"0x74276E64"},{"type":"word","value":"0x016F6420"},{"type":"word","value":"0x69687408"},{"type":"word","value":"0x79202C73"},{"type":"word","value":"0x7320756F"},{"type":"word","value":"0x6C756F68"},{"type":"word","value":"0x65722064"},{"type":"word","value":"0x72617473"},{"type":"word","value":"0x65622074"},{"type":"word","value":"0x73756163"},{"type":"word","value":"0x79080165"},{"type":"word","value":"0x6D20756F"},{"type":"word","value":"0x6E207961"},{"type":"word","value":"0x20646565"},{"type":"word","value":"0x74616874"},{"type":"word","value":"0x77657220"},{"type":"word","value":"0x2E647261"},{"type":"word","value":"0x6F470802"},{"type":"word","value":"0x6C20646F"},{"type":"word","value":"0x206B6375"},{"type":"word","value":"0x2C646E61"},{"type":"word","value":"0x736F6D20"},{"type":"word","value":"0x6D692074"},{"type":"word","value":"0x74726F70"},{"type":"word","value":"0x20746E61"},{"type":"word","value":"0x0801666F"},{"type":"word","value":"0x2C6C6C61"},{"type":"word","value":"0x656C7020"},{"type":"word","value":"0x20657361"},{"type":"word","value":"0x65766168"},{"type":"word","value":"0x6E756620"},{"type":"word","value":"0x5408022E"},{"type":"word","value":"0x6B6E6168"},{"type":"word","value":"0x08022C73"},{"type":"word","value":"0x44726544"},{"type":"word","value":"0x68636172"},{"type":"word","value":"0x6F52202C"},{"type":"word","value":"0x6F63736D"},{"type":"word","value":"0x202C7475"},{"type":"word","value":"0x72646C65"},{"type":"word","value":"0x68633769"},{"type":"word","value":"0x6108012C"},{"type":"word","value":"0x4D20646E"},{"type":"word","value":"0x5A74746F"},{"type":"word","value":"0x616C6C69"},{"type":"word","value":"0x6F590802"},{"type":"word","value":"0x61632075"},{"type":"word","value":"0x6B73206E"},{"type":"word","value":"0x74207069"},{"type":"word","value":"0x20736968"},{"type":"word","value":"0x74206E69"},{"type":"word","value":"0x66206568"},{"type":"word","value":"0x72757475"},{"type":"word","value":"0x62080165"},{"type":"word","value":"0x72702079"},{"type":"word","value":"0x69737365"},{"type":"word","value":"0x4C20676E"},{"type":"word","value":"0x6E612032"},{"type":"word","value":"0x65532064"},{"type":"word","value":"0x7463656C"},{"type":"word","value":"0x20746120"},{"type":"word","value":"0x01656874"},{"type":"word","value":"0x6D617308"},{"type":"word","value":"0x69742065"},{"type":"word","value":"0x202E656D"},{"type":"word","value":"0x20202020"},{"type":"word","value":"0x20202020"},{"type":"word","value":"0x20"},{"comment":"Require Different Buttons","type":"word","address":"0x53765DC","value":"0x3C028009"},{"type":"word","value":"0x94427490"},{"type":"word","address":"0x53765E8","value":"0x34040101"},{"type":"word","value":"0x1444000D"},{"type":"word","address":"0x5376618","value":"0x18000002"},{"comment":"Infinite Toadstool","type":"char","address":"0x000b1975","value":"0x00"},{"comment":"Infinite Fire Boomerangs","type":"char","address":"0x000b2fbd","value":"0x00"},{"comment":"Infinite Heart Refresh","type":"char","address":"0x000b315d","value":"0x00"},{"comment":"Infinite Antivenom","type":"char","address":"0x000b32f5","value":"0x00"},{"comment":"Infinite Library Card","type":"char","address":"0x000b376d","value":"0x00"},{"comment":"Force Egregious Price on Relic","type":"word","address":"0x47A3098","value":"0x0007a120"},{"comment":"Faster Heart Refresh","type":"short","address":"0x03bb0728","value":"0x0000"},{"type":"short","address":"0x03d8ac08","value":"0x0000"},{"type":"word","address":"0x03bb0ac8","value":"0x00000000"},{"type":"word","address":"0x03d8afa8","value":"0x00000000"},{"type":"char","address":"0x03bb06a9","value":"0xb3"},{"type":"char","address":"0x03d8ac30","value":"0xb3"},{"comment":"Remove Maria Silver Ring Cutscene","type":"word","address":"0x46C4B48","value":"0x34020001"},{"type":"word","value":"0x00000000"}],"complexityGoal":{"min":1,"goals":["Soul of Bat","Form of Mist + Power of Mist","Gravity Boots + Hrefresh1 + Hrefresh2"]}})

  // Export.
  const preset = builder.build()

  if (self) {
    const presets = (self.sotnRando || {}).presets || []
    presets.push(preset)
    self.sotnRando = Object.assign(self.sotnRando || {}, {
      presets: presets,
    })
  } else if (!module.parent) {
    console.log(preset.toString())
  } else {
    module.exports = preset
  }
})(typeof(self) !== 'undefined' ? self : null)
