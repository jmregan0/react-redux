import { connect } from 'react-redux';
import Playlist from '../components/Playlist';
import { toggleSong } from '../action-creators/player';

function mapStatetoProps(state){
  var obj = {
    selectedPlaylist: state.playlists.selected
  }
  return Object.assign(obj, state.player)
}

function mapDispatchToProps(dispatch){
  return {
    toggleOne: function(song, list){
      dispatch(toggleSong(song, list));
    }
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Playlist);
