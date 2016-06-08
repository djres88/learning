var PlayersByContest = {
  thursdayNight: oneDayLineups.thursdayNightPlayers(playable),
  sundayEarly: oneDayLineups.sundayEarlyPlayers(playable),
  sundayLate: oneDayLineups.sundayLatePlayers(playable),
  sundayNight: oneDayLineups.sundayNightPlayers(playable),
  mondayNight: oneDayLineups.mondayNightPlayers(playable),
  weeklong: thursdayNight.concat(sundayEarly, sundayLate, sundayNight, mondayNight),
  sundayMonday: sundayEarly.concat(sundayLate, sundayNight, mondayNight),
  sundayAll: sundayEarly.concat(sundayLate, sundayNight),
  sundayLatethruMonday: sundayLate.concat(sundayNight, mondayNight),
  primetime: sundayNight.concat(mondayNight)
}
