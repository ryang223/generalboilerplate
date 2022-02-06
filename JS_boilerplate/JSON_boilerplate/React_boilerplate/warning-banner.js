//<WarningBanner /> is rendered depnding on the value of the prop called warn. 
//If the value of the props is false, then the component does not render.
function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">
          Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            shwoWarning: !state.showWarning
        }));
    }
    render() {
        return (
            <div>
            <WarningBanner warn={this.state.showWarning} />
                <button>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

ReactDOM.render (
  <Page />,
  document.getElementById('root')
);