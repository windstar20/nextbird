import React, {useState} from "react";
import PropTypes from 'prop-types';
import Slick from 'react-slick';
import {CloseBtn, Global, Header, ImgWrapper, Indicator, Overlay, SlickWrapper} from "./styles";

const ImagesZoom = ({images, onClose}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <Overlay>
            {/*글로벌스타일 아무곳에 넣으면 된다.*/}
            <Global />
            <Header>
                <h1>상세 이미지</h1>
                <CloseBtn onClick={onClose}>X</CloseBtn>
            </Header>

            <SlickWrapper>
                <div>
                    <Slick
                        initialSlide={0}
                        afterChange={ (slide) => setCurrentSlide(slide) }
                        infinite // 무한반복
                        arrows={true} // 화살표 유무
                        slidesToShow={1} // 1번에 1개씩 보이고
                        slidesToScroll={1} //넘기도록
                    >
                        {images.map( (v) => (
                                <ImgWrapper key={v.src}>
                                    <img src={v.src} alt={v.src} />
                                </ImgWrapper>
                        ))}
                    </Slick>
                    <Indicator>
                        <div>
                            {currentSlide + 1}
                            {' '}
                            /
                            {' '}
                            {images.length}
                        </div>
                    </Indicator>
                </div>
            </SlickWrapper>
        </Overlay>

    );
};

ImagesZoom.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClose: PropTypes.func.isRequired
};

export default ImagesZoom;