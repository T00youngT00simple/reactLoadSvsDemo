import React from 'react';

export default class LoadSvs extends React.Component {
    constructor(props) {
        super();

    }

    componentDidMount() {
    }

    render() {
        return (
            <div className='service'>
                <iframe style={{
                            display: "block",
                            position: "relative",
                            height: "100%",
                            width: "100%",
                            zIndex: "100",
                            border: "0",
                            margin: "0"
                        }} 
                        id='ifrm' 
                        src="/test/demo/basic.html"></iframe>
            </div>
        );
    }
}