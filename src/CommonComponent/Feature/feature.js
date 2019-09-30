

import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {Title,Content,Feature,FeatureText,LearnText,Arrow,RedirectWrapper} from './style';
import './style.css';
import { connect } from 'react-redux';

export function feature(props) {
    let list=props.a.valueSeq().toArray();
    return (
        <React.Fragment>
            <Carousel showThumbs={false} showIndicators={false} showStatus={false} infiniteLoop={true}>
              {list.map((value)=>{
                  return (
                    <div>
                        <FeatureText>Featured</FeatureText>
                        <Feature>
                            <Title>{value.toObject()['title']}</Title>
                            <Content>{value.toObject()['text']}</Content>
                        </Feature>
                        <RedirectWrapper><LearnText>Learn More<Arrow>&#10142;</Arrow></LearnText></RedirectWrapper>
                    </div>                   
                  )
              })} 
            </Carousel>
        </React.Fragment>
    )
}

const mapStateToProps = state => ({
    a:state.getIn(['FeatureData'])
});
  
export default connect(
    mapStateToProps
)(feature);