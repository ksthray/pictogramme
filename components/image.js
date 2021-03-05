import Img from "next/image"

const Image = (props) => {
    const {src, width, height, layout} = props;
    return (
        <Img
            src={src} 
            width={width}
            height={height}
            layout={layout}
            quality={50}
        />
    )
}

export default Image;