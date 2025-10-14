import React from "react";

const spinnerStyle = {
    display: "inline-block",
    width: "60px",
    height: "60px",
    position: "relative",
};

const dotStyle = (i) => ({
    position: "absolute",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    background: "#3498db",
    animation: `loading-dot 1.2s linear infinite`,
    top: "24px",
    left: "24px",
    transform: `rotate(${i * 45}deg) translate(24px)`,
    animationDelay: `${i * 0.15}s`,
});

const keyframes = `
@keyframes loading-dot {
    0%, 80%, 100% { opacity: 0; }
    40% { opacity: 1; }
}
`;

function LoadingAnimation() {
    return (
        <div style={{ textAlign: "center", margin: "40px" }}>
            <style>{keyframes}</style>
            <div style={spinnerStyle}>
                {[...Array(8)].map((_, i) => (
                    <div key={i} style={dotStyle(i)} />
                ))}
            </div>
        </div>
    );
}

export default LoadingAnimation;