(function(self) {

  let constants
  let enemies
  let util

  if (self) {
    constants = self.sotnRando.constants
    enemies = self.sotnRando.enemies
    util = self.sotnRando.util
  } else {
    constants = require('./constants')
    enemies = require('./enemies')
    util = require('./util')
  }

  const music = {
    LOST_PAINTING: [
      /* RDAI */ 0x00b0788, 0x6757ad8, 0x6757b74,
      /* RLIB */ 0x00b06d8,
      /* RNO4 */ 0x00b080c,
    ],
    CURSE_ZONE: [
      /* RCAT */ 0x00b0704, 0x6a7c4f0, 0x6a7c58c,
    ],
    REQUIEM_FOR_THE_GODS: [
      /* DAI  */  0x00b00d8,
    ],
    RAINBOW_CEMETARY: [
      /* CAT  */ 0x00b0054, 0x609505c,
    ],
    WOOD_CARVING_PARTITA: [
      /* LIB  */ 0x00b0028, 0x00b036c,
    ],
    CRYSTAL_TEARDROPS: [
      /* NO4  */ 0x00b015c, 0x61d1fa8, 0x61d1fec, 0x61d2188,
    ],
    MARBLE_GALLERY: [
      /* NO0  */ 0x00affd0,
    ],
    DRACULAS_CASTLE: [
      /* NO3  */ 0x00b0104, 0x00b0c2c, 0x4ba6cb0, 0x4bb0064,
    ],
    THE_TRAGIC_PRINCE: [
      /* NZ1  */ 0x00b020c, 0x55a2f90, 0x55a3008,
    ],
    TOWER_OF_MIST: [
      /* NO1  */ 0x00afffc,
    ],
    DOOR_OF_HOLY_SPIRITS: [
      /* RARE */ 0x00b0838, 0x6487b44, 0x6487bec,
    ],
    DANCE_OF_PALES: [
      /* NO2  */ 0x00b0080, 0x5fea9dc,
    ],
    ABANDONED_PIT: [
      /* CHI  */ 0x00b00ac, 0x66cc898,
      /* RCHI */ 0x00b075c, 0x6644d10,
    ],
    HEAVENLY_DOORWAY: [
      /* TOP  */ 0x00b01b4,
      /* RTOP */ 0x00b0864,
    ],
    FESTIVAL_OF_SERVANTS: [
      0x47e5e08, 0x54eca88, 0x55a2ed0,
      0x59ee490, 0x6129480, 0x61d20f4,
      0x67ec2bc, 0x689e4f0, 0x69e8318,
    ],
    WANDERING_GHOSTS: [
      /* ARE  */ 0x00b0188, 0x6126570,
    ],
    THE_DOOR_TO_THE_ABYSS: [
      /* CEN  */ 0x00b0130,
      /* RCEN */ 0x00b07e0,
    ],
    DANCE_OF_GOLD: [
      /* NZ0  */ 0x00b01e0, 0x54ecb58, 0x54ecbd4,
    ],
    ENCHANTED_BANQUET: [
      0x5b074f4, 0x6757a78,
    ],
    DEATH_BALLAD: [
      0x56dc624, 0x5fddd24, 0x5fddd80,
      0x5fddda0, 0x5fdde14, 0x6094500,
      0x6094534, 0x632e8c8, 0x65a88e8,
      0x65a8908, 0x6644bc4, 0x6a7c490,
    ],
    FINAL_TOCCATA: [
      0x00b08bc, 0x00b07b4, 0x00b0680,
      0x00b06ac, 0x00b0730, 0x00b0890,
      0x59ee5ac, 0x67ec3b8, 0x65a89f0,
    ],
  };

  function randomizeMusic(rng, options) {
    const data = new util.checked()
    if (options.music) {
      const randSongs = util.shuffled(rng, Object.getOwnPropertyNames(music))
      Object.getOwnPropertyNames(music).forEach(function(song) {
        const randSong = randSongs.pop()
        music[song].forEach(function(addr) {
          data.writeChar(addr, constants.MUSIC[randSong])
        })
      })
    }
    return data
  }

  const exports = randomizeMusic
  if (self) {
    self.sotnRando = Object.assign(self.sotnRando || {}, {
      randomizeMusic: exports,
    })
  } else {
    module.exports = exports
  }
})(typeof(self) !== 'undefined' ? self : null)