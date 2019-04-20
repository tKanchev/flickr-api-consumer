import React from "react";

class Navbar extends React.Component {
    render(): JSX.Element {
        return (
            <div className={'navbar'}>
                <div className={'navbar__title'}>Flickr Feed</div> {/* TODO OnClick reload feed */}                
            </div>
        );
    }
}

export default Navbar;