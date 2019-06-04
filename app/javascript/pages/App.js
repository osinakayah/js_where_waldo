import React, {Component} from "react"
import {connect} from 'react-redux'
import Modal from 'react-modal';
import ImageMapper from 'react-image-mapper';
import {Navbar, Nav, Button} from 'react-bootstrap';
import PropTypes from "prop-types"
import ScoreForm from '../components/ScoreForm'
import LeaderBoard from '../components/LeaderBoard'
import Images from '../themes/images'
import GameActions from '../AppRedux/gameRedux'


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};

class App extends Component {
    static propTypes = {
        dispatchImageClicked: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {
            isScoreBoardOpen: false,
            isGameOver: false
        }
    }

    toogleScoreBoardModal = () => {
        this.setState({isScoreBoardOpen: !this.state.isScoreBoardOpen});
    }
    imageClicked = (e) => {
        const x = e.pageX;
        const y = e.pageY;
        this.props.dispatchImageClicked({x,y});
    }

    render() {

        return (
            <React.Fragment>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">Where Waldo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick={this.toogleScoreBoardModal}>Scoreboard</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <img  style={{width:3564,height: 3356}} src={Images.unfriendlyGiants} onClick={this.imageClicked}/>


                <Modal
                    isOpen={this.state.isGameOver}
                    style={customStyles}
                    contentLabel="Game Complete"
                >

                    <h2>Score Board</h2>
                    <ScoreForm/>


                </Modal>

                <Modal
                    isOpen={this.state.isScoreBoardOpen}
                    style={customStyles}
                    contentLabel="Score Board"
                >
                    <Button variant="outline-danger" onClick={this.toogleScoreBoardModal}>Close</Button>
                    <h2>Leader Board</h2>
                    <LeaderBoard/>


                </Modal>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        game: state.game
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchImageClicked: data => dispatch(GameActions.gameRequest(data))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App)
