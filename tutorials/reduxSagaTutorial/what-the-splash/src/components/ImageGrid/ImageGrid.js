import React, { Component } from 'react';
import { connect } from 'react-redux';
import {loadImages} from '../../actions/index';// Step-37


import './styles.css';

const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

class ImageGrid extends Component {
    /*state = {
        images: [],
    };*///Step-40

    componentDidMount() {
        fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
            .then(res => res.json())
            .then(images => {
                this.setState({
                    images,
                });
            });
    }

    render() {
       // const { images } = this.state; //Step-41
       const {images} = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                    <a onClick={this.props.loadImages}>Load Images</a> {/**STep-39 */}
                </section>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    isLoading: state.isLoading,
    images: state.images,
    error: state.error
});

const mapDispatchToProps = (dispatch) =>({ //Step-38
    loadImages : ()=> dispatch(loadImages())
});


export default connect(mapStateToProps, mapDispatchToProps)(ImageGrid);

