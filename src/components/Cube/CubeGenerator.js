import * as THREE from 'three'

let scene, camera, renderer, cube

export function init() {
  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)

  const container = document.getElementById('graphics-container')
  container.appendChild(renderer.domElement)

  // const texture = new THREE.TextureLoader().load('path-to-image-file')
  // const material = new THREE.MeshBasicMaterial({ map: texture })
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  const geometry = new THREE.BoxGeometry()
  cube = new THREE.Mesh(geometry, material)

  scene.add(cube)
  camera.position.z = 2
}

export function animate() {
  requestAnimationFrame(animate)

  cube.rotation.x += 0.01
  cube.rotation.y += 0.004

  renderer.render(scene, camera)
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener('resize', onWindowResize, false)
