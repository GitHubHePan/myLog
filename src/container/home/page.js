import { connect } from 'react-redux'
import Home from '../../component/Home/Page'

const mapStateToProps = (state, ownProps) =>{
	console.log(state)
	return ({})
} 

const mapDispatchToProps = (dispatch, ownProps) => ({})


const HomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)

export default HomeContainer