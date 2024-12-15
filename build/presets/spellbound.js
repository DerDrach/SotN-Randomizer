// This is a generated file. Do not edit it directly.
// Make your changes to presets/spellbound.json then rebuild
// this file with `npm run build-presets -- spellbound`.
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
  const builder = PresetBuilder.fromJSON({"metadata":{"id":"spellbound","name":"Spellbound","description":"A high-complexity preset which locks spells behind familiar cards. Intended to emphasize better non-magical combat in the early game. Relics unkown until collected.","author":["MottZilla","JupiterClimb"],"weight":-5009,"knowledgeCheck":"No-Spell Combat","extension":"Guarded","complexity":9,"itemStats":"Randomized","timeFrame":"Normal","moddedLevel":"Moderately","castleType":"Normal","transformEarly":"No","transformFocus":"None","winCondition":"Normal"},"comment":"Bat Card = Wing Smash, Ghost Card = Summon Spirit, Faerie Card = Soul Steal, Demon Card = Hell Fire, Sword Card = Tetra Spirit, Nosedevil = Dark Metamorphosis","inherits":"casual","colorrandoMode":true,"stats":true,"turkeyMode":true,"music":false,"fastwarpMode":true,"magicmaxMode":true,"surpriseMode":true,"complexityGoal":{"min":9,"comment":"Get all Vlads + Glasses","goals":["Holy glasses + Heart of Vlad + Tooth of Vlad + Rib of Vlad + Ring of Vlad + Eye of Vlad"]},"writes":[{"comment":"EX0","type":"word","address":"0x370F5A8","value":"0x0800300C"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0x27BDFFE0"},{"type":"word","value":"0xAFBF0018"},{"type":"word","value":"0x3C068009"},{"type":"word","value":"0x34C67964"},{"type":"word","value":"0x90C40012"},{"type":"word","value":"0x3C078013"},{"type":"word","value":"0x34E77FF4"},{"type":"word","value":"0x14800002"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0xA4E00000"},{"type":"word","value":"0x90C50018"},{"type":"word","value":"0x3C078013"},{"type":"word","value":"0x34E78FFC"},{"type":"word","value":"0x14A00002"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0xA4E00000"},{"type":"word","value":"0x90C40013"},{"type":"word","value":"0x3C078013"},{"type":"word","value":"0x34E78FF8"},{"type":"word","value":"0x14800002"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0xA4E00000"},{"type":"word","value":"0x90C50015"},{"type":"word","value":"0x3C078013"},{"type":"word","value":"0x34E78FCC"},{"type":"word","value":"0x14A00002"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0xA4E00000"},{"type":"word","value":"0x90C40016"},{"type":"word","value":"0x3C078013"},{"type":"word","value":"0x34E78FD0"},{"type":"word","value":"0x14800002"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0xA4E00000"},{"type":"word","value":"0x90C50014"},{"type":"word","value":"0x3C078013"},{"type":"word","value":"0x34E78FD8"},{"type":"word","value":"0x14A00002"},{"type":"word","value":"0x00000000"},{"type":"word","value":"0xA4E00000"},{"type":"word","value":"0x8FBF0018"},{"type":"word","value":"0x27BD0020"},{"type":"word","value":"0x3C028004"},{"type":"word","value":"0x8C42C9A0"},{"type":"word","value":"0x03E00008"},{"type":"word","value":"0x00000000"},{"comment":"End of EX0","type":"word","value":"0x00000000"},{"comment":"EX1","type":"word","address":"0x370FED8","value":"0x00000000"},{"comment":"EX2","type":"word","address":"0x3710808","value":"0x00000000"},{"comment":"EX3","type":"word","address":"0x3711138","value":"0x00000000"},{"comment":"SectLd","type":"word","address":"0xFE824","value":"0x27BDFFE0"},{"type":"word","value":"0x3C020022"},{"type":"word","value":"0x34422905"},{"type":"word","value":"0x34040002"},{"type":"word","value":"0x27A50010"},{"type":"word","value":"0x34060000"},{"type":"word","value":"0xAFBF0018"},{"type":"word","value":"0x0C006578"},{"type":"word","value":"0xAFA20010"},{"type":"word","value":"0x34040004"},{"type":"word","value":"0x3C058000"},{"type":"word","value":"0x34A5C000"},{"type":"word","value":"0x3C018001"},{"type":"word","value":"0x3421C080"},{"type":"word","value":"0x0020F809"},{"type":"word","value":"0x34060080"},{"type":"word","value":"0x34040000"},{"type":"word","value":"0x3C018001"},{"type":"word","value":"0x3421C188"},{"type":"word","value":"0x0020F809"},{"type":"word","value":"0x34050000"},{"type":"word","value":"0x34020000"},{"type":"word","value":"0x8FBF0018"},{"type":"word","value":"0x27BD0020"},{"type":"word","value":"0x03E00008"},{"comment":"End of SectLd","type":"word","value":"0x00000000"},{"comment":"FrameHook","type":"word","address":"0x10B138","value":"0x0C003000"},{"type":"word","value":"0x00000000"},{"comment":"SectHK","type":"word","address":"0xFA244","value":"0x0C03A07F"}]})

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