import React, { Component } from "react";
import Portfolio from "./Portfolio.js";
import MakeuplookDetail from "./MakeuplookDetail";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
// allows connection to provider
import { connect } from "react-redux";
import { addComment, fetchMakeuplooks } from "../redux/ActionCreators";
import { actions } from "react-redux-form";
const mapStateToProps = (state) => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addComment: (makeuplookId, rating, author, comment) =>
    dispatch(addComment(makeuplookId, rating, author, comment)),
  fetchMakeuplooks: () => {
    dispatch(fetchMakeuplooks());
  },
  resetFeedbackForm: () => {
    dispatch(actions.reset("feedback"));
  },
});
class Main extends Component {
  componentDidMount() {
    this.props.fetchMakeuplooks();
  }

  render() {
    const HomePage = () => {
      return (
        <Home
          makeuplook={this.props.makeuplooks.makeuplooks.find(
            (makeuplooks) => makeuplooks.featured === true
          )}
          promotion={this.props.promotions.find(
            (promotion) => promotion.featured === true
          )}
          employee={this.props.employees.find(
            (employee) => employee.featured === true
          )}
        />
      );
    };

    const MakeuplookWithId = ({ match }) => {
      return (
        <MakeuplookDetail
          makeuplook={this.props.makeuplooks.makeuplooks.find(
            (makeuplook) =>
              makeuplook.id === parseInt(match.params.makeuplookId, 10)
          )}
          comments={this.props.comments.filter(
            (comment) =>
              comment.makeuplookId === parseInt(match.params.makeuplookId, 10)
          )}
          addComment={this.props.addComment}
        />
      );
    };
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            path="/aboutus"
            component={() => (
              <div>
                <About employees={this.props.employees} />
              </div>
            )}
          />
          <Route
            exact
            path="/portfolio"
            component={() => <Portfolio makeuplooks={this.props.makeuplooks} />}
          />
          <Route path="/portfolio/:makeuplookId" component={MakeuplookWithId} />
          <Route
            exact
            path="/contactus"
            component={() => (
              <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
            )}
          />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
