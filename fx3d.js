/* Escena 3D del hero: partículas + icosaedro wireframe con parallax de mouse y scroll. */
(function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const host = document.getElementById('fx3d');
    if (!host || !window.THREE) return;

    let w = host.clientWidth, h = host.clientHeight;
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(60, w / h, 0.1, 100);
    cam.position.z = 8;

    let renderer;
    try {
        renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch (e) { return; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(w, h);
    host.appendChild(renderer.domElement);

    const N = 900;
    const pos = new Float32Array(N * 3);
    for (let i = 0; i < N * 3; i++) pos[i] = (Math.random() - 0.5) * 17;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0x3385FF, size: 0.04, transparent: true, opacity: 0.65 }));
    scene.add(pts);

    const ico = new THREE.Mesh(
        new THREE.IcosahedronGeometry(2.7, 1),
        new THREE.MeshBasicMaterial({ color: 0x3385FF, wireframe: true, transparent: true, opacity: 0.16 })
    );
    ico.position.x = 2.2;
    scene.add(ico);

    const inner = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.1, 0),
        new THREE.MeshBasicMaterial({ color: 0x3385FF, wireframe: true, transparent: true, opacity: 0.3 })
    );
    inner.position.x = 2.2;
    scene.add(inner);

    let mx = 0, my = 0, sy = 0;
    window.addEventListener('pointermove', (e) => {
        mx = e.clientX / window.innerWidth - 0.5;
        my = e.clientY / window.innerHeight - 0.5;
    }, { passive: true });
    window.addEventListener('scroll', () => { sy = window.scrollY; }, { passive: true });
    window.addEventListener('resize', () => {
        w = host.clientWidth; h = host.clientHeight;
        cam.aspect = w / h; cam.updateProjectionMatrix();
        renderer.setSize(w, h);
    });

    function loop(t) {
        requestAnimationFrame(loop);
        if (sy > window.innerHeight * 1.3) return; // hero fuera de vista: no gastar GPU
        const k = t * 0.0001;
        ico.rotation.x = k * 2 + sy * 0.0012;
        ico.rotation.y = k * 3 + mx * 0.6;
        inner.rotation.x = -k * 4;
        inner.rotation.y = -k * 5;
        pts.rotation.y = k + mx * 0.25;
        pts.rotation.x = sy * 0.0006 + my * 0.15;
        cam.position.x += (mx * 1.5 - cam.position.x) * 0.05;
        cam.position.y += (-my * 1.1 - cam.position.y) * 0.05;
        cam.lookAt(0, 0, 0);
        renderer.render(scene, cam);
    }
    requestAnimationFrame(loop);
})();
