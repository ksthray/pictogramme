import {LottieStyle} from "./influence.style"

import LottieAnim from "../lottie.anim"

const Lottie = ({svgName}) => {
    const options = {
        loop: true,
        autolay: true,
        animationData: svgName,
        rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
        },
    };
    return (
        <LottieStyle>
            <LottieAnim propsDefaultOptions={options} />
        </LottieStyle>
    )
}

export default Lottie;