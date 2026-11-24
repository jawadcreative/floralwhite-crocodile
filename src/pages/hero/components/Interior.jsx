import { Suspense, useMemo, useRef } from 'react'
import { Environment, OrbitControls, Center, useGLTF } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { MOUSE } from 'three'

gsap.registerPlugin(ScrollTrigger, useGSAP)

const Model = () => {
    const { scene } = useGLTF('/model/App_02.glb')

    const clonedScene = useMemo(
        () => scene.clone(true),
        [scene]
    )

    const { camera } = useThree()

    useGSAP(() => {
        const roof = clonedScene.getObjectByName("Box002")
        const roomRoof = clonedScene.getObjectByName("Line035")

        if (!roof || !roomRoof) return

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".interior",
                start: "top top",
                end: "+=400%",
                scrub: 1,
                pin: true
            }
        })

        tl.to([roof.position, roomRoof.position], {
            y: roof.position.y + 15000,
            ease: "none",
        }, 0)

        tl.to(camera.position, {
            x: -23.004598940456813,
            y: 7.649635431857077,
            z: -2.05604008702973
        })

        tl.to(camera.position, {
            x: -15.367878832222013,
            y: 12.834554941168737,
            z: 12.834554941168737
        })

    }, { dependencies: [clonedScene] })

    return (
        <Center>
            <primitive object={clonedScene} />
        </Center>
    )
}

// const CameraInspector = () => {
//     const { camera } = useThree()
//     const controlsref = useRef(null)

//     const logValues = () => {
//         console.log('C P: ', camera.position.toArray())
//         console.log('target: ', controlsref.current.target.toArray())
//     }

//     return (

//   )
// }


const Interior = () => {
    const controlsRef = useRef(null)

    return (
        <div className="interior w-full h-screen">
            <Canvas
                camera={{
                    position: [
                        -14.67807765583255,
                        13.718358970625935,
                        -1.170003107221246
                    ],
                    fov: 50
                }}
            >
                <ambientLight intensity={1} />

                <directionalLight
                    position={[5, 5, 5]}
                    intensity={2}
                />

                <Suspense fallback={null}>
                    <Model />
                    <Environment preset="city" />
                </Suspense>

                <OrbitControls
                    ref={controlsRef}
                    makeDefault
                    target={[
                        -11.036968666694749,
                        -0.8232645085367746,
                        3.8620773729090625
                    ]}
                    enableDamping
                    dampingFactor={0.05}
                    enablePan
                    enableZoom={false}
                    enableRotate
                    screenSpacePanning
                    mouseButtons={{
                        LEFT: MOUSE.LEFT,
                        MIDDLE: MOUSE.MIDDLE,
                        RIGHT: MOUSE.RIGHT
                    }}
                />
            </Canvas>
        </div>
    )
}

export default Interior
