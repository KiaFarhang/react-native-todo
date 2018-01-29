import { connect, Dispatch } from "react-redux";
import { addTodo, IAddTodo } from "../../actions";
import { IAppState } from "../../types";
import Input from "../Input";

const mapDispatchToProps = (dispatch: Dispatch<IAddTodo>) => {
    return {
        onSubmit: (text: string) => dispatch(addTodo(text)),
        placeholder: "Add an item",
    };
};

export default connect(
    null,
    mapDispatchToProps,
)(Input);
