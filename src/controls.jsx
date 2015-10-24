
var React = require('react'),
    _ = require('lodash');



var Toggle = React.createClass({
    getInitialState: function () {
        return {value: false};
    },

    handleClick: function (event) {
       var newValue = !this.state.value;
       this.setState({value: newValue});
       this.props.onClick(this.props.name, newValue);
    },

    componentWillReceiveProps: function (newProps) {
        this.setState({value: newProps.value});
    },

    render: function () {
        var className = "btn btn-default";

        if (this.state.value) {
            className += " btn-primary";
        }

        return (
            <button className={className} onClick={this.handleClick}>
                {this.props.label}
            </button>
        );
    }
});

module.exports = Controls;
