import { connect } from 'react-redux';
import Sidebar from '../components/Sidebar';

const mapStateToProps = function(state){
  return {
    playlists: state.playlists.list
  }
}

export default connect(mapStateToProps)(Sidebar);
