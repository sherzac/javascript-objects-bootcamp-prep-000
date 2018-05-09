var playlist = {barenaked_ladies: 'One Week'}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
<<<<<<< HEAD
  delete playlist[artistName]
=======
  delete playlist.artistName
>>>>>>> 98aa2df34635fdfec148b75444b427dac3737e7e
  return playlist
}