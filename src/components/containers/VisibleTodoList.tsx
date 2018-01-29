import { connect, Dispatch } from "react-redux";
import { IAppState } from "../../types";
import TodoList from "../TodoList";

const mapStateToProps = (state: IAppState) => {
    return {
        todos: state.todos,
    };
};

export default connect(
    mapStateToProps,
    null,
)(TodoList);
