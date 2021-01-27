export const cardAgencyAnimation = {
    visible: {
        opacity: 1,
        y: 0,
        transition: {
        duration: 0.7,
        delay: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
        },
    },
    hidden: {
        opacity: 0,
        y: 72,
    },
    hover: {
        y: 15,
        transition: {duration: 0.3}
    },
    tap: {
        scale: 0.9
    }
}
export const cardServicesAnimation = {
    visible: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.6, 0.05, -0.01, 0.9],
        },
    },
    hidden: {
        opacity: 0,
    },
}
export const calendar = {
    visible: {
        opacity: 1,
        y: 0,
        x: 0,
        transition: {
            duration: 0.5,
            ease: [0.6, 0.05, -0.01, 0.9],
        },
    },
    hidden: {
        opacity: 0,
        y: -20,
        x: -20
    },
}
export const titleAnimation = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9],
        },
    },
    hidden: {
        opacity: 0,
        x: -50,
    },
}
export const opacityAnimation = {
    visible: {
        opacity: 1,
        transition: {
        duration: 1.5,
        ease: [0.6, 0.05, -0.01, 0.9],
        },
    },
    hidden: {
        opacity: 0,
    },
}
export const barAnimation = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {
        duration: 0.5,
        ease: [0.6, 0.05, -0.01, 0.9],
        },
    },
    hidden: {
        opacity: 0,
        x: 70,
    },
}
export const cupAnimation = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {
        duration: 1,
        delay: 1.1,
        ease: [0.6, 0.05, -0.01, 0.9],
        },
    },
    hidden: {
        opacity: 0,
        x: 40,
    },
}

export const bgLogoAnimation = {
    visible: {
        opacity: 1,
        transition: {
        duration: 1.2,
        delay: 1.7,
        ease: [0.6, 0.05, -0.01, 0.9],
        },
    },
    hidden: {
        opacity: 0,
    },
}
export const pAnimation = {
    visible: {
        opacity: 1,
        transition: {
        duration: 1,
            ease: [0.6, 0.05, -0.01, 0.9],
        },
    },
    hidden: {
        opacity: 0,
    },
}

export const btnHome = {
    initial: { 
        opacity: 0
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 2.2,
            ease: [0.6, 0.05, -0.01, 0.9],
        },
    },
    hover: {
        scale: 0.85,
    }
};