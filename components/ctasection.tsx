'use client';
import { useCallback } from "react";
import Particles from "react-particles";
import type { Engine } from "tsparticles-engine";
import { loadSnowPreset } from "tsparticles-preset-snow";

export const CTASECTION = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSnowPreset(engine);
    }, []);



    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                fullScreen: { enable: false, zIndex: 10 },
                fpsLimit: 60,
                particles: {
                    color: {
                        value: "#ffffff",
                    },
                    move: {
                        enable: true,
                        outModes: {
                            default: "out",
                        },
                        direction: 'outside',
                        random: true,
                        speed: 0.20,
                        straight: false,
                    },
                    number: {
                        limit: 150,
                        density: {
                            enable: false,
                        },
                        value: 180,
                    },
                    opacity: {
                        animation: {
                            enable: true,
                            minimumValue: 0.2,
                            speed: 0.25,
                            sync: true
                        },
                        random: {
                            enable: true,
                            minimumValue: 0.5
                        },
                        value: 1
                    },
                    shape: {
                        type: "circle",
                    },
                    size: {
                        animation: {
                            enable: true,
                            minimumValue: 0.4,
                            speed: 0.25,
                            sync: false
                        },
                        random: {
                            enable: true,
                            minimumValue: 0.7
                        },
                        value: { min: 0.6, max: 1 },
                    },
                }
            }}
        />
    );
};