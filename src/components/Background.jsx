import React from "react";
import { motion } from "framer-motion";

export default function Background() {
    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: -1,
                overflow: "hidden",
                background: "#050505", // Very dark background
            }}
        >
            {/* Circle 1 */}
            <motion.div
                animate={{
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    position: "absolute",
                    top: "10%",
                    left: "20%",
                    width: "400px",
                    height: "400px",
                    background: "radial-gradient(circle, rgba(0,255,200,0.15), transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(60px)",
                }}
            />

            {/* Circle 2 */}
            <motion.div
                animate={{
                    x: [0, -80, 0],
                    y: [0, 60, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                style={{
                    position: "absolute",
                    top: "40%",
                    right: "15%",
                    width: "500px",
                    height: "500px",
                    background: "radial-gradient(circle, rgba(100,0,255,0.15), transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(80px)",
                }}
            />

            {/* Circle 3 */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, 40, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                style={{
                    position: "absolute",
                    bottom: "10%",
                    left: "30%",
                    width: "600px",
                    height: "600px",
                    background: "radial-gradient(circle, rgba(255,0,150,0.1), transparent 70%)",
                    borderRadius: "50%",
                    filter: "blur(100px)",
                }}
            />

            {/* Noise Overlay (Optional for texture) */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    opacity: 0.05,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    pointerEvents: "none",
                }}
            />
        </div>
    );
}
