function init(){
    window.addEventListener('resize', function() {
        var width = window.innerWidth
        var height = window.innerHeight
        renderer.setSize( width, height )
        camera.aspect = width / height
        camera.updateProjectionMatrix()
      })

    const container = document.querySelector( '#scene-container' )
    const scene = new THREE.Scene()
    scene.background = new THREE.Color( 0x87ceeb )

    const camera = new THREE.PerspectiveCamera( 35, container.clientWidth / container.clientHeight, .1, 1000 )
    camera.position.set( 0, 0, 3 )

    const renderer = new THREE.WebGLRenderer()

    renderer.setSize( container.clientWidth, container.clientHeight )
    renderer.setPixelRatio( window.devicePixelRatio )
    container.appendChild( renderer.domElement )
    renderer.render( scene, camera )

    controls = new THREE.OrbitControls( camera, renderer.domElement )
    controls.enableKeys = true
    controls.enableRotate = true

    // loadGUI()

    let mainLight = new THREE.DirectionalLight(0xffffff , 1)
    var helper = new THREE.DirectionalLightHelper( mainLight, 1 );
    mainLight.position.set(0,10,0)
    // mainLight.castShadow = true

    let ambientLight = new THREE.AmbientLight( 0x404040, 2 )
    ambientLight.position.set(0,0,0)
    scene.add( ambientLight)

    let baseball
    let baseballLoader = new THREE.GLTFLoader()
    baseballLoader.load("./models/baseball4.glb", function ( gltf ) {
      baseball = gltf.scene.children[ 0 ]
      baseball.scale.set(.125,.125,.125)
      baseball.rotation.y = Math.PI/2
      scene.add( baseball )
    })

    let A = new THREE.Vector2( 0, 0 )
    let B = new THREE.Vector2( -(8.5/12), -( 8.5/12) )
    let C = new THREE.Vector2( -(8.5/12), -(17/12) )
    let D = new THREE.Vector2( (8.5/12), -(17/12) )
    let E = new THREE.Vector2( (8.5/12), -( 8.5/12) )

    let height = 2
    let plateZone = new PrismGeometry( [ A, B, C, D, E ], height )
    let kZoneMaterial = new THREE.MeshBasicMaterial( {color: 0xffffff, transparent: true, opacity: 0.5} )
    let kZone = new THREE.Mesh( plateZone, kZoneMaterial )
    kZone.rotation.x = -Math.PI / 2
    kZone.position.y = 1.5

    let grassMaterial = new THREE.MeshBasicMaterial( {
      color: 0xafdd93,
      side:THREE.DoubleSide } )
    let grassGeometry = new THREE.PlaneGeometry(2000,2000,10,10)
    let grass = new THREE.Mesh(grassGeometry, grassMaterial)
    grass.position = 0
    grass.rotation.x = Math.PI / 2
    grass.recieveShadow = true

    let infieldMesh



    //
    // //
    // //GUIDE AXES
    // var matX = new THREE.LineBasicMaterial( { color: 0x00ff00 } )
    // var pointsX = []
    // pointsX.push( new THREE.Vector3( -100, 0, 0 ) )
    // pointsX.push( new THREE.Vector3( 100, 0, 0 ) )
    // var geomX = new THREE.BufferGeometry().setFromPoints( pointsX )
    // var lineX = new THREE.Line( geomX, matX )
    //
    // var matZ = new THREE.LineBasicMaterial( { color: 0x0000ff } )
    // var pointsZ = []
    // pointsZ.push( new THREE.Vector3( 0, -100, 0 ) )
    // pointsZ.push( new THREE.Vector3( 0, 100, 0 ) )
    // var geomZ = new THREE.BufferGeometry().setFromPoints( pointsZ )
    // var lineZ = new THREE.Line( geomZ, matZ )
    //
    // var matY = new THREE.LineBasicMaterial( { color: 0xff0000 } )
    // var pointsY = []
    // pointsY.push( new THREE.Vector3( 0, 0, -100, ) )
    // pointsY.push( new THREE.Vector3( 0, 0, 100 ) )
    // var geomY = new THREE.BufferGeometry().setFromPoints( pointsY )
    // var lineY = new THREE.Line( geomY, matY )
    // scene.add(lineX, lineY, lineZ)


    // Pressure sensors
    var sensor1 = new THREE.SpotLight( 0x0000FF, 4)
    sensor1.position.set(.3, 0, -.93)
    sensor1.angle = .04
    scene.add(sensor1)

    var sensor2 = new THREE.SpotLight( 0x0000FF, 4)
    sensor2.position.set(-.3, 0, -.93)
    sensor2.angle = .04
    scene.add(sensor2)

    var sensor3 = new THREE.SpotLight( 0x0000FF, 4)
    sensor3.position.set(.93, 0, -.3)
    sensor3.angle = .04
    scene.add(sensor3)

    var sensor4 = new THREE.SpotLight( 0x0000FF, 4)
    sensor4.position.set(.93, 0, .3)
    sensor4.angle = .04
    scene.add(sensor4)

    var sensor5 = new THREE.SpotLight( 0x0000FF, 4)
    sensor5.position.set(.3, 0, .93)
    sensor5.angle = .04
    scene.add(sensor5)

    var sensor6 = new THREE.SpotLight( 0x0000FF, 4)
    sensor6.position.set(-.3, 0, .93)
    sensor6.angle = .04
    scene.add(sensor6)

    var sensor7 = new THREE.SpotLight( 0x0000FF, 4)
    sensor7.position.set(.93, 0, .3)
    sensor7.angle = .04
    scene.add(sensor7)

    var sensor8 = new THREE.SpotLight( 0x0000FF, 4)
    sensor8.position.set(-.3, .93, 0)
    sensor8.angle = .04
    scene.add(sensor8)

    var sensor9 = new THREE.SpotLight( 0x0000FF, 4)
    sensor9.position.set(.3, .93, 0)
    sensor9.angle = .04
    scene.add(sensor9)

    var sensor10 = new THREE.SpotLight( 0x0000FF, 4)
    sensor10.position.set(.3, .54, .77)
    sensor10.angle = .04
    scene.add(sensor10)

    var sensor11 = new THREE.SpotLight( 0x0000FF, 4)
    sensor11.position.set(-.3, .54, .77)
    sensor11.angle = .04
    scene.add(sensor11)

    var sensor12 = new THREE.SpotLight( 0x0000FF, 4)
    sensor12.position.set(.85, .5, 0)
    sensor12.angle = .04
    scene.add(sensor12)

    var sensor13 = new THREE.SpotLight( 0x0000FF, 4)
    sensor13.position.set(-.93, 0, .3)
    sensor13.angle = .04
    scene.add(sensor13)

    var sensor14 = new THREE.SpotLight( 0x0000FF, 4)
    sensor14.position.set(-.93, 0, -.3)
    sensor14.angle = .04
    scene.add(sensor14)

    var sensor15 = new THREE.SpotLight( 0x0000FF, 4)
    sensor15.position.set(.3, -.94, 0)
    sensor15.angle = .04
    scene.add(sensor15)

    var sensor16 = new THREE.SpotLight( 0x0000FF, 4)
    sensor16.position.set(-.3, -.94, 0)
    sensor16.angle = .04
    scene.add(sensor16)

    var sensors = [sensor1, sensor2, sensor3, sensor4, sensor5, sensor6,
      sensor7, sensor8, sensor9, sensor10, sensor11, sensor12, sensor13, sensor14, sensor15, sensor16]


    function launchBall(){
      console.log("Launch")
    }
    function resetScene(){
      console.log("Reset")
    }

    var params = {
      'P1': 0,
      'P2': 0,
      'P3': 0,
      'P4': 0,
      'P5': 0,
      'P6': 0,
      'P7': 0,
      'P8': 0,
      'P9': 0,
      'P10': 0,
      'P11': 0,
      'P12': 0,
      'P13': 0,
      'P14': 0,
      'P15': 0,
      'P16': 0,
      'rel_x': 1.5,
      'rel_y': 5.5,
      'extension': 6,
      //3.909578333	-131.9796954	-4.755431921	-8.694663688	28.52219728	-17.18314801
      'v_x': -4,
      'v_y': -130,
      'v_z': -5,
      'a_x': -9,
      'a_y': 29,
      'a_z': -17,
      'spinRate': 2000,
      'spinAxis': 180,
      'Launch': function () {
        launchBall();
      },
      'Reset': function () {
        resetScene();
      }
    }

    gui = new dat.GUI();
    f1 = gui.addFolder( "Pressure" );
    f1.add( params, 'P1', 0, 25, .1 ).onChange( function ( val ) {
      sensors[0].color.setRGB((params.P1*4)/100, 0,(100-params.P1*4)/100);
    } );
    f1.add( params, 'P2', 0, 25, .1 ).onChange( function ( val ) {
      sensors[1].color.setRGB((params.P2*4)/100, 0,(100-params.P2*4)/100);
    } );
    f1.add( params, 'P3', 0, 25, .1 ).onChange( function ( val ) {
      sensors[2].color.setRGB((params.P3*4)/100, 0,(100-params.P3*4)/100);
    } );
    f1.add( params, 'P4', 0, 25, .1 ).onChange( function ( val ) {
      sensors[3].color.setRGB((params.P4*4)/100, 0,(100-params.P4*4)/100);
      console.log((params.P4*4)/100)
      console.log((100-params.P4*4)/100)
    } );
    f1.add( params, 'P5', 0, 25, .1 ).onChange( function ( val ) {
      sensors[4].color.setRGB((params.P5*4)/100, 0,(100-params.P5*4)/100);
    } );
    f1.add( params, 'P6', 0, 25, .1 ).onChange( function ( val ) {
      sensors[5].color.setRGB((params.P6*4)/100, 0,(100-params.P6*4)/100);
    } );
    f1.add( params, 'P7', 0, 25, .1 ).onChange( function ( val ) {
      sensors[6].color.setRGB((params.P7*4)/100, 0,(100-params.P7*4)/100);
    } );
    f1.add( params, 'P8', 0, 25, .1 ).onChange( function ( val ) {
      sensors[7].color.setRGB((params.P8*4)/100, 0,(100-params.P8*4)/100);
    } );
    f1.add( params, 'P9', 0, 25, .1 ).onChange( function ( val ) {
      sensors[8].color.setRGB((params.P9*4)/100, 0,(100-params.P9*4)/100);
    } );
    f1.add( params, 'P10', 0, 25, .1 ).onChange( function ( val ) {
      sensors[9].color.setRGB((params.P10*4)/100, 0,(100-params.P10*4)/100);
    } );
    f1.add( params, 'P11', 0, 25, .1 ).onChange( function ( val ) {
      sensors[10].color.setRGB((params.P11*4)/100, 0,(100-params.P11*4)/100);
    } );
    f1.add( params, 'P12', 0, 25, .1 ).onChange( function ( val ) {
      sensors[11].color.setRGB((params.P12*4)/100, 0,(100-params.P12*4)/100);
    } );
    f1.add( params, 'P13', 0, 25, .1 ).onChange( function ( val ) {
      sensors[12].color.setRGB((params.P13*4)/100, 0,(100-params.P13*4)/100);
    } );
    f1.add( params, 'P14', 0, 25, .1 ).onChange( function ( val ) {
      sensors[13].color.setRGB((params.P14*4)/100, 0,(100-params.P14*4)/100);
    } );
    f1.add( params, 'P15', 0, 25, .1 ).onChange( function ( val ) {
      sensors[14].color.setRGB((params.P15*4)/100, 0,(100-params.P15*4)/100);
    } );
    f1.add( params, 'P16', 0, 25, .1 ).onChange( function ( val ) {
      sensors[15].color.setRGB((params.P16*4)/100, 0,(100-params.P16*4)/100);
    } );

    let launched = false;

    f2 = gui.addFolder( "Pitch" );
    f2.add( params, "v_x", -15, 15, .1 );
    f2.add( params, "v_y", -150, 0, .1 );
    f2.add( params, "v_z", -15, 15, .1 );
    f2.add( params, "a_x", -20, 20, .1 );
    f2.add( params, "a_y", -20, 20, .1 );
    f2.add( params, "a_z", -20, 20, .1 );
    f2.add( params, "spinRate", 0, 3500, 1 );
    f2.add( params, "spinAxis", 0, 360, 1 );
    f2.add( params, "Launch").onChange( function ( val ) {
          scene.add(grass)

          let infield = new THREE.GLTFLoader();
          infield.load('./models/infield.glb', function ( gltf ) {
              infieldMesh = gltf.scene.children[0]
              infieldMesh.position.y = 0.02
              infieldMesh.rotation.y = Math.PI
              infieldMesh.receiveShadow = true
              infieldMesh.castShadow = true
              scene.add( infieldMesh )
          })
          scene.add(mainLight)
          scene.add( kZone )

          baseball.position.set(params.rel_x, params.rel_y, 60.5-params.extension)
          baseball.rotation.z = params.spinAxis
          camera.position.set(0, 5, 65)
          camera.lookAt( 0, 0, 0 )
          launched = true
    } );
    f2.add( params, "Reset").onChange( function ( val ) {
        scene.remove(mainLight, grass, infieldMesh, kZone)

        baseball.position.set(0, 0, 0)
        camera.position.set(0, 0, 3)
        camera.lookAt( 0, 0, 0 )
        scene.remove(baseball)
        baseball.rotation.y = Math.PI/2
        scene.add(baseball)

        launched = false
    } );
    // f2.add( params, "Launch").onChange( function)


  function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
    let delta = .0075
    if ( launched ){
      // let counter = 0
      // let lastTime
      // let time
      sleep(1000).then(() => {
      if (baseball.position.z >= 17/12) {
      //     counter += 1
      //     lastTime = time
      //     time = performance.now()
      //     console.log(baseball.position.y)
      //     delta = (time - lastTime)/100000
          // console.log(delta)
          // console.log((params.v_y * delta + .5 * params.a_y * delta ** 2))
          // sleep(10).then(() => {
          baseball.rotation.z += params.spinRate/60
          baseball.position.z = baseball.position.z + (params.v_y * delta + .5 * params.a_y * delta ** 2)
          params.v_y = params.v_y + params.a_y * delta
          baseball.position.x = baseball.position.x + (params.v_x * delta + .5 * params.a_x * delta ** 2)
          params.v_x = params.v_x + params.a_x * delta
          baseball.position.y = baseball.position.y + (params.v_z * delta + .5 * params.a_z * delta ** 2)
          params.v_z = params.v_z + params.a_z * delta
          console.log(baseball.position.z)
          // })
        }
      })
    }
  }
  animate()

}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
